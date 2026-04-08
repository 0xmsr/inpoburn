// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract InpoburnToken is ERC20, Ownable {
    mapping(address => bool) public minters;

    constructor() ERC20("Inpoburn", "IB") Ownable(msg.sender) {}

    modifier onlyMinter() {
        require(minters[msg.sender], "Not minter");
        _;
    }

    function setMinter(address _minter, bool _status) external onlyOwner {
        minters[_minter] = _status;
    }

    function mint(address to, uint256 amount) external onlyMinter {
        _mint(to, amount);
    }
}
