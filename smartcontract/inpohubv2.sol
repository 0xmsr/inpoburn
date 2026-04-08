// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function decimals() external view returns (uint8);
}

interface IIBToken {
    function mint(address to, uint256 amount) external;
} //InpoHubToken

abstract contract Ownable {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    constructor() {
        _owner = msg.sender;
        emit OwnershipTransferred(address(0), msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == _owner, "Ownable: caller is not the owner");
        _;
    }

    function owner() public view returns (address) {
        return _owner;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }

    function renounceOwnership() external onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }
}

abstract contract ReentrancyGuard {
    uint256 private _status;
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    constructor() {
        _status = _NOT_ENTERED;
    }

    modifier nonReentrant() {
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");
        _status = _ENTERED;
        _;
        _status = _NOT_ENTERED;
    }
}

contract UniversalBurnerV2 is Ownable, ReentrancyGuard {

    address public ibToken;

    address public constant DEAD_ADDRESS = 0x000000000000000000000000000000000000dEaD;

    uint256 public ibRewardPerBurn = 1e18;

    mapping(address => uint256) public tokenTaxOverrideBps;

    bool public whitelistEnabled = false;
    mapping(address => bool) public tokenWhitelist;

    bool public paused = false;

    mapping(address => uint256) public totalBurned;

    mapping(address => uint256) public userBurnCount;

    uint256 public totalIBClaimed;

    event BurnAndClaimed(
        address indexed user,
        address indexed token,
        uint256 amountSent,
        uint256 amountReceivedByContract,
        uint256 amountBurned,
        uint256 ibClaimed,
        uint256 timestamp
    );

    event IBTokenSet(address indexed oldToken, address indexed newToken);
    event IBRewardChanged(uint256 oldReward, uint256 newReward);
    event TokenTaxOverrideSet(address indexed token, uint256 taxBps);
    event WhitelistUpdated(address indexed token, bool status);
    event WhitelistToggled(bool enabled);
    event PauseToggled(bool paused);
    event EmergencyWithdraw(address indexed token, uint256 amount, address indexed to);

    constructor(address _ibToken) {
        require(_ibToken != address(0), "IB token cannot be zero address");
        ibToken = _ibToken;
    }

    modifier whenNotPaused() {
        require(!paused, "BurnerV2: contract is paused");
        _;
    }

    modifier tokenAllowed(address token) {
        if (whitelistEnabled) {
            require(tokenWhitelist[token], "BurnerV2: token not whitelisted");
        }
        _;
    }


    function burnAndClaim(
        address _tokenAddress,
        uint256 _amount
    )
        external
        nonReentrant
        whenNotPaused
        tokenAllowed(_tokenAddress)
    {
        require(_tokenAddress != address(0), "BurnerV2: token address zero");
        require(_amount > 0, "BurnerV2: amount must be > 0");
        require(ibToken != address(0), "BurnerV2: IB token not set");

        IERC20 token = IERC20(_tokenAddress);

        uint256 allowed = token.allowance(msg.sender, address(this));
        require(allowed >= _amount, "BurnerV2: insufficient allowance");

        uint256 balanceBefore = token.balanceOf(address(this));

        bool success = token.transferFrom(msg.sender, address(this), _amount);
        require(success, "BurnerV2: transferFrom failed");

        uint256 balanceAfter = token.balanceOf(address(this));

        uint256 actualReceived = balanceAfter - balanceBefore;
        require(actualReceived > 0, "BurnerV2: received zero tokens (tax 100%?)");

        bool burnSuccess = token.transfer(DEAD_ADDRESS, actualReceived);
        require(burnSuccess, "BurnerV2: burn transfer to dead failed");

        totalBurned[_tokenAddress] += actualReceived;
        userBurnCount[msg.sender] += 1;
        totalIBClaimed += ibRewardPerBurn;

        IIBToken(ibToken).mint(msg.sender, ibRewardPerBurn);

        emit BurnAndClaimed(
            msg.sender,
            _tokenAddress,
            _amount,
            actualReceived,
            actualReceived,
            ibRewardPerBurn,
            block.timestamp
        );
    }

    function burnAndClaimWithMinReceive(
        address _tokenAddress,
        uint256 _amount,
        uint256 _minReceive
    )
        external
        nonReentrant
        whenNotPaused
        tokenAllowed(_tokenAddress)
    {
        require(_tokenAddress != address(0), "BurnerV2: token address zero");
        require(_amount > 0, "BurnerV2: amount must be > 0");
        require(ibToken != address(0), "BurnerV2: IB token not set");

        IERC20 token = IERC20(_tokenAddress);

        uint256 allowed = token.allowance(msg.sender, address(this));
        require(allowed >= _amount, "BurnerV2: insufficient allowance");

        uint256 balanceBefore = token.balanceOf(address(this));
        bool success = token.transferFrom(msg.sender, address(this), _amount);
        require(success, "BurnerV2: transferFrom failed");
        uint256 balanceAfter = token.balanceOf(address(this));

        uint256 actualReceived = balanceAfter - balanceBefore;
        require(actualReceived > 0, "BurnerV2: received zero tokens");

        if (_minReceive > 0) {
            require(
                actualReceived >= _minReceive,
                "BurnerV2: received less than minReceive (tax too high)"
            );
        }

        bool burnSuccess = token.transfer(DEAD_ADDRESS, actualReceived);
        require(burnSuccess, "BurnerV2: burn transfer to dead failed");

        totalBurned[_tokenAddress] += actualReceived;
        userBurnCount[msg.sender] += 1;
        totalIBClaimed += ibRewardPerBurn;

        IIBToken(ibToken).mint(msg.sender, ibRewardPerBurn);

        emit BurnAndClaimed(
            msg.sender,
            _tokenAddress,
            _amount,
            actualReceived,
            actualReceived,
            ibRewardPerBurn,
            block.timestamp
        );
    }

    function simulateBurn(
        address _tokenAddress,
        uint256 _amount
    )
        external
        view
        returns (uint256 estimatedReceived, uint256 estimatedTaxBps)
    {
        uint256 overrideBps = tokenTaxOverrideBps[_tokenAddress];
        if (overrideBps > 0) {
            uint256 taxAmount = (_amount * overrideBps) / 10000;
            estimatedReceived = _amount - taxAmount;
            estimatedTaxBps = overrideBps;
        } else {
            estimatedReceived = _amount;
            estimatedTaxBps = 0;
        }
    }

    function getTokenStats(address _tokenAddress)
        external
        view
        returns (
            uint256 totalBurnedAmount,
            uint256 taxOverrideBps,
            bool isWhitelisted
        )
    {
        return (
            totalBurned[_tokenAddress],
            tokenTaxOverrideBps[_tokenAddress],
            tokenWhitelist[_tokenAddress]
        );
    }

    function getUserStats(address _user)
        external
        view
        returns (uint256 burnCount)
    {
        return userBurnCount[_user];
    }

    function setIBToken(address _ibToken) external onlyOwner {
        require(_ibToken != address(0), "BurnerV2: zero address");
        address old = ibToken;
        ibToken = _ibToken;
        emit IBTokenSet(old, _ibToken);
    }

    function setIBRewardPerBurn(uint256 _newReward) external onlyOwner {
        require(_newReward > 0, "BurnerV2: reward must be > 0");
        uint256 old = ibRewardPerBurn;
        ibRewardPerBurn = _newReward;
        emit IBRewardChanged(old, _newReward);
    }

    function setTokenTaxOverride(address _token, uint256 _taxBps) external onlyOwner {
        require(_token != address(0), "BurnerV2: zero address");
        require(_taxBps < 10000, "BurnerV2: tax cannot be 100% or more");
        tokenTaxOverrideBps[_token] = _taxBps;
        emit TokenTaxOverrideSet(_token, _taxBps);
    }

    function setTokenWhitelist(address _token, bool _status) external onlyOwner {
        require(_token != address(0), "BurnerV2: zero address");
        tokenWhitelist[_token] = _status;
        emit WhitelistUpdated(_token, _status);
    }

    function setBatchTokenWhitelist(address[] calldata _tokens, bool _status) external onlyOwner {
        for (uint256 i = 0; i < _tokens.length; i++) {
            require(_tokens[i] != address(0), "BurnerV2: zero address in array");
            tokenWhitelist[_tokens[i]] = _status;
            emit WhitelistUpdated(_tokens[i], _status);
        }
    }

    function setWhitelistEnabled(bool _enabled) external onlyOwner {
        whitelistEnabled = _enabled;
        emit WhitelistToggled(_enabled);
    }

    function setPaused(bool _paused) external onlyOwner {
        paused = _paused;
        emit PauseToggled(_paused);
    }

    function emergencyWithdraw(
        address _token,
        uint256 _amount,
        address _to
    ) external onlyOwner {
        require(_token != address(0), "BurnerV2: zero address");
        require(_to != address(0), "BurnerV2: recipient zero address");
        require(_to != DEAD_ADDRESS, "BurnerV2: cannot withdraw to dead");
        IERC20(_token).transfer(_to, _amount);
        emit EmergencyWithdraw(_token, _amount, _to);
    }
}

contract IBToken {
    string  public name     = "Inpoburn Token";
    string  public symbol   = "IB";
    uint8   public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    mapping(address => bool) public isMinter;

    address public owner;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event MinterSet(address indexed minter, bool status);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "IBToken: not owner");
        _;
    }

    modifier onlyMinter() {
        require(isMinter[msg.sender], "IBToken: not minter");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function transfer(address to, uint256 amount) external returns (bool) {
        _transfer(msg.sender, to, amount);
        return true;
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(address from, address to, uint256 amount) external returns (bool) {
        require(allowance[from][msg.sender] >= amount, "IBToken: insufficient allowance");
        allowance[from][msg.sender] -= amount;
        _transfer(from, to, amount);
        return true;
    }

    function _transfer(address from, address to, uint256 amount) internal {
        require(from != address(0), "IBToken: transfer from zero");
        require(to != address(0), "IBToken: transfer to zero");
        require(balanceOf[from] >= amount, "IBToken: insufficient balance");
        balanceOf[from] -= amount;
        balanceOf[to]   += amount;
        emit Transfer(from, to, amount);
    }

    function mint(address to, uint256 amount) external onlyMinter {
        require(to != address(0), "IBToken: mint to zero address");
        totalSupply     += amount;
        balanceOf[to]   += amount;
        emit Transfer(address(0), to, amount);
    }

    function setMinter(address _minter, bool _status) external onlyOwner {
        require(_minter != address(0), "IBToken: zero address");
        isMinter[_minter] = _status;
        emit MinterSet(_minter, _status);
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "IBToken: new owner zero");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}
