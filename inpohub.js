const BURNER_CONTRACT_ADDRESS = "0xB5E17d760192Dd896e49022BcC491D167085D61D";

const BURNER_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "burnAndClaim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minReceive",
				"type": "uint256"
			}
		],
		"name": "burnAndClaimWithMinReceive",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ibToken",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountSent",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountReceivedByContract",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amountBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ibClaimed",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "BurnAndClaimed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "emergencyWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "EmergencyWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "oldReward",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newReward",
				"type": "uint256"
			}
		],
		"name": "IBRewardChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "oldToken",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newToken",
				"type": "address"
			}
		],
		"name": "IBTokenSet",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "paused",
				"type": "bool"
			}
		],
		"name": "PauseToggled",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_tokens",
				"type": "address[]"
			},
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "setBatchTokenWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newReward",
				"type": "uint256"
			}
		],
		"name": "setIBRewardPerBurn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ibToken",
				"type": "address"
			}
		],
		"name": "setIBToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_paused",
				"type": "bool"
			}
		],
		"name": "setPaused",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_taxBps",
				"type": "uint256"
			}
		],
		"name": "setTokenTaxOverride",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "setTokenWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_enabled",
				"type": "bool"
			}
		],
		"name": "setWhitelistEnabled",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "taxBps",
				"type": "uint256"
			}
		],
		"name": "TokenTaxOverrideSet",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "enabled",
				"type": "bool"
			}
		],
		"name": "WhitelistToggled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "WhitelistUpdated",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DEAD_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"name": "getTokenStats",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalBurnedAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "taxOverrideBps",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isWhitelisted",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserStats",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "burnCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ibRewardPerBurn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ibToken",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "simulateBurn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "estimatedReceived",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "estimatedTaxBps",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenTaxOverrideBps",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tokenWhitelist",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalBurned",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalIBClaimed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userBurnCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whitelistEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const ERC20_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "minters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_minter",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "setMinter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const connectBtn    = document.getElementById('connectBtn');
const burnBtn       = document.getElementById('burnBtn');
const statusEl      = document.getElementById('status');
const walletBox     = document.getElementById('walletBox');
const walletOverlay = document.getElementById('walletOverlay');
const modalClose    = document.getElementById('modalClose');
const tosCheck      = document.getElementById('tosCheck');

let provider, signer, burnerContract, walletConnected = false, userSigned = false;

function openInfoModal(id) { document.getElementById('modal-' + id).classList.add('open'); }
function closeInfoModal(id) { document.getElementById('modal-' + id).classList.remove('open'); }

document.querySelectorAll('.info-overlay').forEach(el => {
    el.addEventListener('click', (e) => { if (e.target === el) el.classList.remove('open'); });
});
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.info-overlay.open, .wallet-overlay.open').forEach(el => el.classList.remove('open'));
});

function copyContractBURNER_CONTRACT_ADDRESS() {
    navigator.clipboard.writeText(BURNER_CONTRACT_ADDRESS).then(() => {
        const el = document.getElementById('contractAddrDisplay');
        const orig = el.textContent;
        el.textContent = t('status.copied');
        setTimeout(() => { el.textContent = orig; }, 1500);
    });
}

function copyContractIB_TOKEN_CONTRACT() {
    navigator.clipboard.writeText(IB_TOKEN_ADDR).then(() => {
        const el = document.getElementById('contractAddrDisplayIB_TOKEN_CONTRACT_ADDRESS');
        const orig = el.textContent;
        el.textContent = t('status.copied');
        setTimeout(() => { el.textContent = orig; }, 1500);
    });
}

function updateBurnBtn() {
    const ready = walletConnected && tosCheck.checked && userSigned;
    burnBtn.disabled = !ready;

    if (walletConnected && !userSigned) {
        burnBtn.setAttribute('data-locked', 'true');
        burnBtn.textContent = '🔒 Sign to Unlock Burn';
        burnBtn.title = 'Click to open the verification modal and sign a message';
        burnBtn.disabled = false;
    } else {
        burnBtn.removeAttribute('data-locked');
        burnBtn.textContent = currentLang === 'id' ? '🔥 Setujui & Bakar' : '🔥 Approve & Burn';
        burnBtn.title = '';
        burnBtn.disabled = !ready;
    }
}
tosCheck.addEventListener('change', updateBurnBtn);

function hashCode(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) { h = str.charCodeAt(i) + ((h << 5) - h); h |= 0; }
    return Math.abs(h);
}
function symbolToColors(sym) {
    const P = [['#ff5500','#fff7a0'],['#cc1a00','#ffcc55'],['#ff9900','#1a0800'],['#3d0f00','#ff9900'],['#5c3a00','#fff7a0'],['#1a0f05','#ff5500'],['#2a1200','#ffcc55'],['#4a1400','#ff9900']];
    const [bg, fg] = P[hashCode(sym) % P.length];
    return { bg, fg };
}
function createTokenAvatarSVG(sym) {
    const { bg, fg } = symbolToColors(sym);
    const label = sym.length > 3 ? sym.slice(0, 3) : sym;
    const fs = label.length <= 2 ? 11 : 9;
    return `<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="${bg}"/><circle cx="15" cy="15" r="13" fill="${bg}" opacity="0.6"/><text x="15" y="${15 + fs * 0.36}" text-anchor="middle" font-family="Bungee,cursive" font-size="${fs}" fill="${fg}" letter-spacing="0.5">${label}</text></svg>`;
}

async function fetchWalletTokens(userAddress) {
    const wrap = document.getElementById('tokenPickerWrap');
    const list = document.getElementById('tokenPickerList');

    wrap.style.display = 'block';

    const setMsg = (html) => { list.innerHTML = `<div style="padding:14px;font-size:.65rem;color:var(--text-ash);text-align:center;">${html}</div>`; };
    const setError = (msg) => {
        list.innerHTML = `
            <div style="padding:16px;text-align:center;">
                <div style="font-size:.65rem;color:var(--text-ash);margin-bottom:10px;">${msg}</div>
                <button onclick="fetchWalletTokens('${userAddress}')"
                    style="background:var(--fire-outer);color:#fff;border:none;padding:5px 12px;font-size:.6rem;cursor:pointer;border-radius:2px;margin-right:6px;">
                    🔄 ${currentLang === 'id' ? 'Coba Lagi' : 'Retry'}
                </button>
                <button onclick="document.getElementById('tokenPickerWrap').style.display='none'"
                    style="background:#333;color:#aaa;border:none;padding:5px 12px;font-size:.6rem;cursor:pointer;border-radius:2px;">
                    ${currentLang === 'id' ? 'Input Manual' : 'Enter Manually'}
                </button>
            </div>`;
    };

    setMsg('⏳ ' + (currentLang === 'id' ? 'Memuat token dari wallet...' : 'Loading tokens from wallet...'));

    const cleanAddr = userAddress.toLowerCase();
    const endpoints = [
        `https://base.blockscout.com/api/v2/addresses/${cleanAddr}/token-balances`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://base.blockscout.com/api/v2/addresses/${cleanAddr}/token-balances`)}`,
    ];

    let items = [];
    let apiSuccess = false;

    for (const url of endpoints) {
        try {
            const res = await fetch(url, { signal: AbortSignal.timeout(12000) });
            if (!res.ok) continue;
            const data = await res.json();
            items = data.items || (Array.isArray(data) ? data : []);
            apiSuccess = true;
            break;
        } catch (e) {
            console.warn('Token API attempt failed:', url, e.message);
        }
    }

    if (!apiSuccess) {
        setError(currentLang === 'id'
            ? '❌ Gagal terhubung ke Explorer. Coba lagi atau masukkan address token manual.'
            : '❌ Failed to reach Explorer. Retry or enter token address manually.');
        return;
    }

    let tokenResults = [];
    for (const item of items) {
        try {
            const tk  = item.token || item;
            const val = item.value || item.balance;
            const tokenAddr = tk.address_hash || tk.address;
            if (!tokenAddr || !val || val === '0') continue;

            const decimals  = parseInt(tk.decimals || '18', 10);
            const rawBigInt = BigInt(val);
            const divisor   = 10n ** BigInt(decimals);
            const wholeTokens = rawBigInt / divisor;
            if (wholeTokens < 1n) continue;

            const floatBal = parseFloat(ethers.formatUnits(val, decimals));
            tokenResults.push({
                addr:       tokenAddr,
                symbol:     tk.symbol || '???',
                name:       tk.name   || 'Unknown',
                decimals,
                balance:    val,
                displayBal: floatBal.toLocaleString('id-ID', { maximumFractionDigits: 4 })
            });
        } catch(e) { continue; }
    }

    if (tokenResults.length === 0) {
        setError(currentLang === 'id'
            ? '⚠️ Tidak ada token ERC20 dengan saldo ≥ 1 yang terdeteksi.'
            : '⚠️ No ERC20 tokens with balance ≥ 1 detected.');
        return;
    }

    tokenResults.sort((a, b) => a.symbol.localeCompare(b.symbol));

    setMsg('🔍 ' + (currentLang === 'id' ? 'Menyaring token bertax...' : 'Filtering tax tokens...'));

    const userAddr    = signer ? await signer.getAddress() : userAddress;
    const cleanTokens = [];
    for (const tk of tokenResults) {
        try {
            const tempContract = new ethers.Contract(tk.addr, ERC20_ABI, signer || provider);
            const hasTax = await detectTransferTax(tempContract, userAddr, tk.decimals);
            if (!hasTax) cleanTokens.push(tk);
        } catch {
            cleanTokens.push(tk);
        }
    }

    if (cleanTokens.length === 0) {
        setError(currentLang === 'id'
            ? '⚠️ Semua token terdeteksi memiliki transfer tax dan tidak bisa dibakar.'
            : '⚠️ All detected tokens have transfer tax and cannot be burned.');
        return;
    }

    list.innerHTML = '';

    const searchWrap = document.createElement('div');
    searchWrap.style.cssText = 'padding:6px 10px;border-bottom:1px solid rgba(255,80,0,.1);position:sticky;top:0;background:var(--card-bg);z-index:2;';
    searchWrap.innerHTML = `<input id="tokenPickerSearch" type="text" placeholder="🔍 Search token..." autocomplete="off" style="width:100%;background:rgba(0,0,0,.3);border:1px solid var(--border-dim);border-radius:4px;padding:5px 8px;font-size:.6rem;color:#fff;font-family:'Share Tech Mono',monospace;outline:none;">`;
    list.appendChild(searchWrap);

    cleanTokens.forEach(tk => {
        const item = document.createElement('div');
        item.setAttribute('data-token-item', '1');
        item.setAttribute('data-sym', tk.symbol);
        item.setAttribute('data-addr', tk.addr);
        item.style.cssText = 'display:flex;align-items:center;gap:10px;padding:10px 12px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.03);transition:background .15s;';
        item.onmouseenter = () => item.style.background = 'rgba(255,80,0,.06)';
        item.onmouseleave = () => item.style.background = '';
        item.innerHTML = `
            <div style="width:24px;height:24px;background:#331a00;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:7px;color:#ff9900;border:1px solid #552200;flex-shrink:0;">${tk.symbol.slice(0,2)}</div>
            <div style="flex:1;min-width:0;text-align:left;">
                <div style="font-size:.7rem;color:#fff;font-weight:700;">${tk.symbol}</div>
                <div style="font-size:.5rem;color:#555;font-family:monospace;">${tk.addr.slice(0,10)}...</div>
            </div>
            <div style="text-align:right;flex-shrink:0;">
                <div style="font-size:.7rem;color:var(--fire-inner);font-family:'Share Tech Mono';">${tk.displayBal}</div>
            </div>`;
        item.onclick = () => selectToken(tk);
        list.appendChild(item);
    });

    const searchInput = document.getElementById('tokenPickerSearch');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const q = searchInput.value.toLowerCase();
            list.querySelectorAll('[data-token-item]').forEach(el => {
                const sym  = (el.dataset.sym  || '').toLowerCase();
                const addr = (el.dataset.addr || '').toLowerCase();
                el.style.display = (!q || sym.includes(q) || addr.includes(q)) ? '' : 'none';
            });
        });
    }
}

function selectToken(tk) {
    document.getElementById('tokenAddr').value = tk.addr;
    const badge = document.getElementById('tokenInfoBadge');
    const avatarSVG = createTokenAvatarSVG(tk.symbol);
    badge.innerHTML = `<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:14px;height:14px;border-radius:50%;overflow:hidden;display:inline-flex;">${avatarSVG}</span>${tk.symbol} · ${tk.displayBal}</span>`;
    badge.style.display = 'block';
    statusEl.innerText = t('status.selected', tk.name, tk.symbol, tk.displayBal);
}

document.getElementById('tokenAddr').addEventListener('input', () => {
    document.getElementById('tokenInfoBadge').style.display = 'none';
});

function detectProviders() {
    const eth = window.ethereum;
    const res = { metamask:false, trust:false, coinbase:false, browser:false };
    if (!eth) return res;
    const providers = eth.providers || [eth];
    for (const p of providers) {
        if (p.isMetaMask && !p.isCoinbaseWallet) res.metamask = true;
        if (p.isTrust || p.isTrustWallet)        res.trust    = true;
        if (p.isCoinbaseWallet)                  res.coinbase = true;
    }
    if (!res.metamask && eth.isMetaMask && !eth.isCoinbaseWallet) res.metamask = true;
    if (!res.trust    && (eth.isTrust || eth.isTrustWallet))      res.trust    = true;
    if (!res.coinbase && eth.isCoinbaseWallet)                    res.coinbase = true;
    res.browser = !!eth;
    return res;
}
function getProviderFor(walletKey) {
    const eth = window.ethereum;
    if (!eth) return null;
    const providers = eth.providers || [eth];
    if (walletKey === 'metamask') return providers.find(p => p.isMetaMask && !p.isCoinbaseWallet) || null;
    if (walletKey === 'trust')    return providers.find(p => p.isTrust || p.isTrustWallet) || null;
    if (walletKey === 'coinbase') return providers.find(p => p.isCoinbaseWallet) || null;
    if (walletKey === 'browser')  return eth;
    return null;
}

function openWalletModal() {
    const detected = detectProviders();
    ['metamask','trust','coinbase','browser'].forEach(key => {
        const span = document.getElementById(`status-${key}`);
        const btn  = document.querySelector(`[data-wallet="${key}"]`);
        const ok   = detected[key];
        span.textContent = ok ? t('wallet.detected') : t('wallet.notFound');
        span.className   = 'wallet-status' + (ok ? ' detected' : '');
        btn.classList.toggle('not-found', !ok);
    });
    walletOverlay.classList.add('open');
}
function closeWalletModal() { walletOverlay.classList.remove('open'); }

connectBtn.onclick = openWalletModal;
modalClose.onclick = closeWalletModal;
walletOverlay.addEventListener('click', (e) => { if (e.target === walletOverlay) closeWalletModal(); });

async function connectWallet(walletKey) {
    const rawProvider = getProviderFor(walletKey);
    if (!rawProvider) {
        const urls = { metamask:'https://metamask.io/download/', trust:'https://trustwallet.com/download', coinbase:'https://www.coinbase.com/wallet/downloads', browser:null };
        const url = urls[walletKey];
        if (url && confirm(t('wallet.install', walletKey))) window.open(url, '_blank');
        else if (!url) statusEl.innerText = t('wallet.nowallet');
        return;
    }
    closeWalletModal();
    statusEl.innerText = t('status.connecting');
    try {
        provider = new ethers.BrowserProvider(rawProvider);
        await provider.send("eth_requestAccounts", []);
        statusEl.innerText = t('status.checknet');
        try {
            await rawProvider.request({ method:'wallet_switchEthereumChain', params:[{chainId:'0x2105'}] });
        } catch (switchErr) {
            if (switchErr.code === 4902 || switchErr?.data?.originalError?.code === 4902) {
                statusEl.innerText = t('status.addnet');
                await rawProvider.request({ method:'wallet_addEthereumChain', params:[{ chainId:'0x2105', chainName:'Base', nativeCurrency:{name:'ETH',symbol:'ETH',decimals:18}, rpcUrls:['https://mainnet.base.org'], blockExplorerUrls:['https://basescan.org'] }] });
            } else if (switchErr.code === 4001 || switchErr?.code === "ACTION_REJECTED") {
                statusEl.innerText = t('status.wrongnet');
            } else { throw switchErr; }
        }
        provider = new ethers.BrowserProvider(rawProvider);
        signer   = await provider.getSigner();
        burnerContract = new ethers.Contract(BURNER_CONTRACT_ADDRESS, BURNER_ABI, signer);
        const addr    = await signer.getAddress();
        const network = await provider.getNetwork();
        const onTarget = network.chainId === 8453n;
        document.getElementById('walletAddr').innerText = `${addr.substring(0,6)}...${addr.substring(38)}`;
        connectBtn.style.display = 'none';
        walletBox.classList.add('visible');
        walletConnected = true;
        updateBurnBtn();
        statusEl.innerText = onTarget ? t('status.connected') : t('status.wrongchain');
        fetchWalletTokens(addr);
        refreshIBStockDisplay();
        maybeRequestNotifPermission();
        setTimeout(() => {
            renderBurnHistory(); renderTopTokens(); renderWalletStats(); renderBadgesPanel(); renderStreakBadge();
            const _ss = document.getElementById('statsHistorySection');
            if (_ss && loadBurnHistory().length > 0) _ss.style.display = 'block';
        }, 200);
        const existingSession = loadSession();
        if (existingSession && existingSession.address === addr.toLowerCase()) {
            userSigned = true;
            updateNavSignedBadge(existingSession);
            showCardSigninBanner(addr);
            updateBurnBtn();
            statusEl.innerText = onTarget ? t('status.signedIn') : t('status.wrongchain');
        } else {
            statusEl.innerText = t('status.signinRequired');
            const message = buildSignMessage(addr);
            setTimeout(() => openSigninModal(addr, message), 600);
        }
    } catch (err) {
        console.error(err);
        statusEl.innerText = (err?.code === 4001 || err?.code === "ACTION_REJECTED") ? t('status.rejected') : t('status.failconn');
        connectBtn.style.display = '';
    }
}

document.querySelectorAll('.wallet-option').forEach(btn => {
    btn.addEventListener('click', () => connectWallet(btn.getAttribute('data-wallet')));
});

const SESSION_KEY    = 'ib_session_v1';
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

function buildSignMessage(address) {
    const now = Date.now();
    return `Welcome to 🔥 Inpoburn Hub!\n\nClick "Sign" to verify you own this wallet.\nThis request is free — no gas, no transaction.\n\nWallet:\n${address}\n\nTimestamp:\n${now}\n\nNonce:\n${Math.random().toString(36).slice(2, 10)}`;
}

function saveSession(address, signature, message) {
    const data = {
        address: address.toLowerCase(),
        signature,
        message,
        signedAt: Date.now(),
        expiresAt: Date.now() + SESSION_TTL_MS
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    return data;
}

function loadSession() {
    try {
        const raw = localStorage.getItem(SESSION_KEY);
        if (!raw) return null;
        const data = JSON.parse(raw);
        if (Date.now() > data.expiresAt) {
            localStorage.removeItem(SESSION_KEY);
            return null;
        }
        return data;
    } catch { return null; }
}

function clearSession() {
    localStorage.removeItem(SESSION_KEY);
    updateNavSignedBadge(null);
    const banner = document.getElementById('cardSigninBanner');
    if (banner) banner.remove();
}

function updateNavSignedBadge(session) {
    const badge     = document.getElementById('navSignedBadge');
    const addrSpan  = document.getElementById('navSignedAddr');
    if (!badge) return;
    if (session) {
        const a = session.address;
        addrSpan.textContent = a.slice(0, 6) + '...' + a.slice(-4);
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function showCardSigninBanner(address) {
    const old = document.getElementById('cardSigninBanner');
    if (old) old.remove();
    const banner = document.createElement('div');
    banner.id = 'cardSigninBanner';
    banner.className = 'card-signin-banner';
    banner.innerHTML = `<span>✅</span> Signed in as ${address.slice(0,6)}...${address.slice(-4)}`;
    const card = document.querySelector('.card');
    const ref  = document.getElementById('walletBox');
    if (card && ref) card.insertBefore(banner, ref.nextSibling);
}

function openSigninModal(address, message) {
    const overlay = document.getElementById('signinOverlay');
    document.getElementById('signinAddrBox').textContent = address;
    document.getElementById('signinMsgBox').style.display = 'block';
    document.getElementById('signinMsgBox').textContent   = message;
    document.getElementById('signinStatus').textContent   = '';
    document.getElementById('signinBtn').disabled = false;
    overlay.classList.add('open');
}
function closeSigninModal() {
    document.getElementById('signinOverlay').classList.remove('open');
}

document.getElementById('signinSkip').addEventListener('click', () => {
    closeSigninModal();
    userSigned = false;
    updateBurnBtn();
    statusEl.innerText = t('status.signSkipped');
});

document.getElementById('signinBtn').addEventListener('click', async () => {
    const btn    = document.getElementById('signinBtn');
    const status = document.getElementById('signinStatus');
    const msgBox = document.getElementById('signinMsgBox');
    const message = msgBox.textContent;
    btn.disabled = true;
    status.textContent = '✍️ Check your wallet...';
    try {
        const signature = await signer.signMessage(message);
        const addr      = await signer.getAddress();
        const session   = saveSession(addr, signature, message);
        userSigned = true;
        status.textContent = '✅ Signed in successfully!';
        updateNavSignedBadge(session);
        showCardSigninBanner(addr);
        setTimeout(() => {
            closeSigninModal();
            statusEl.innerText = t('status.signedIn');
            updateBurnBtn();
        }, 900);
    } catch (err) {
        if (err?.code === 4001 || err?.code === 'ACTION_REJECTED') {
            status.textContent = '❌ Signature rejected.';
        } else {
            status.textContent = '❌ Signing failed.';
        }
        btn.disabled = false;
    }
});

(function checkExistingSession() {
    const session = loadSession();
    if (session) {
        updateNavSignedBadge(session);
    }
})();

const MAX_BURN_AMOUNT   = 1_000_000;
const BURN_COOLDOWN_MS  = 3_000;
const LAST_BURN_KEY     = 'ib_last_burn';

const TOKEN_BLACKLIST = new Set([
    '0x0000000000000000000000000000000000000000',
].map(a => a.toLowerCase()));

async function detectHoneypot(tokenContract, userAddr, decimals) {
    try {
        const smallAmount = 10n ** BigInt(decimals);
        const rawBalance  = BigInt(await tokenContract.balanceOf(userAddr));
        if (rawBalance < smallAmount) return false;
        const DEAD = '0x000000000000000000000000000000000000dEaD';
        try {
            await tokenContract.transfer.staticCall(DEAD, smallAmount);
        } catch (err) {
            const msg = (err?.reason || err?.message || '').toLowerCase();
            if (msg.includes('not allowed') || msg.includes('forbidden') ||
                msg.includes('locked') || msg.includes('blacklist') ||
                msg.includes('cannot') || msg.includes('disabled') ||
                msg.includes('paused') || msg.includes('trading')) return true;
            if (!msg.includes('tax') && !msg.includes('fee') && !msg.includes('exceeds')) return true;
        }
        return false;
    } catch (e) {
        console.warn('Honeypot detection error:', e);
        return false;
    }
}

async function simulateBurnTx(tokenAddress, amountFormatted, userAddr) {
    try {
        const iface    = new ethers.Interface(BURNER_ABI);
        const calldata = iface.encodeFunctionData('burnAndClaim', [tokenAddress, amountFormatted]);
        await provider.call({ to: BURNER_CONTRACT_ADDRESS, from: userAddr, data: calldata });
        return { ok: true, error: '' };
    } catch (err) {
        const msg = err?.reason || err?.shortMessage || err?.message || 'Unknown error';
        return { ok: false, error: msg };
    }
}

async function checkContractPaused() {
    try {
        const prov = provider || getPublicProvider();
        const c    = new ethers.Contract(BURNER_CONTRACT_ADDRESS, [
            'function paused() view returns (bool)'
        ], prov);
        return await c.paused();
    } catch { return false; }
}

async function fetchIBTokenStock() {
    try {
        const prov = provider || getPublicProvider();
        const ibC  = new ethers.Contract(IB_TOKEN_ADDR, [
            'function balanceOf(address) view returns (uint256)',
            'function decimals() view returns (uint8)'
        ], prov);
        const [bal, dec] = await Promise.all([
            ibC.balanceOf(BURNER_CONTRACT_ADDRESS),
            ibC.decimals()
        ]);
        return Number(ethers.formatUnits(bal, dec));
    } catch { return null; }
}

async function refreshIBStockDisplay() {
    const el = document.getElementById('ibStockDisplay');
    if (!el) return;
    const stock = await fetchIBTokenStock();
    if (stock === null) { el.textContent = '?'; return; }
    el.textContent = stock.toLocaleString();
    el.style.color = stock < 10 ? '#ff3300' : stock < 100 ? '#ff9900' : 'var(--fire-inner)';
}

function showBurnConfirmModal({ tokenName, tokenSymbol, tokenAddress, amount, userAddr }) {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.id = 'burnConfirmOverlay';
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);';
        const isId = currentLang === 'id';
        overlay.innerHTML = `
        <div style="background:linear-gradient(160deg,#1a0800,#0f0502);border:1px solid var(--fire-outer);border-radius:10px;padding:28px 24px;max-width:380px;width:90%;font-family:'Share Tech Mono',monospace;box-shadow:0 0 40px rgba(255,80,0,.3);">
            <div style="font-size:1.6rem;text-align:center;margin-bottom:4px;">🔥</div>
            <div style="font-size:.9rem;color:var(--fire-inner);text-align:center;font-weight:700;margin-bottom:4px;">${isId ? 'Konfirmasi Burn' : 'Confirm Burn'}</div>
            <div style="font-size:.55rem;color:var(--text-ash);text-align:center;margin-bottom:18px;letter-spacing:.08em;">// ${isId ? 'periksa detail sebelum lanjut' : 'review details before proceeding'} //</div>
            <div style="background:rgba(255,80,0,.06);border:1px solid rgba(255,80,0,.15);border-radius:6px;padding:14px;margin-bottom:16px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                    <span style="color:var(--text-ash);font-size:.6rem;">TOKEN</span>
                    <span style="color:#fff;font-size:.65rem;font-weight:700;">${tokenName} (${tokenSymbol})</span>
                </div>
                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                    <span style="color:var(--text-ash);font-size:.6rem;">${isId ? 'ALAMAT' : 'ADDRESS'}</span>
                    <span style="color:var(--fire-inner);font-size:.55rem;">${tokenAddress.slice(0,10)}...${tokenAddress.slice(-8)}</span>
                </div>
                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                    <span style="color:var(--text-ash);font-size:.6rem;">${isId ? 'JUMLAH DIBAKAR' : 'AMOUNT TO BURN'}</span>
                    <span style="color:#ff3300;font-size:.65rem;font-weight:700;">${amount.toLocaleString()} ${tokenSymbol}</span>
                </div>
                <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                    <span style="color:var(--text-ash);font-size:.6rem;">${isId ? 'KAMU TERIMA' : 'YOU RECEIVE'}</span>
                    <span style="color:#66ff99;font-size:.65rem;font-weight:700;">1 IB Token</span>
                </div>
                <div style="display:flex;justify-content:space-between;">
                    <span style="color:var(--text-ash);font-size:.6rem;">WALLET</span>
                    <span style="color:#aaa;font-size:.55rem;">${userAddr.slice(0,6)}...${userAddr.slice(-4)}</span>
                </div>
            </div>
            <div style="background:rgba(255,50,0,.08);border:1px solid rgba(255,50,0,.2);border-radius:4px;padding:10px;margin-bottom:16px;font-size:.58rem;color:#ff9966;line-height:1.5;">
                ⚠️ ${isId ? 'Token yang sudah dibakar <strong style="color:#ff3300">TIDAK BISA dikembalikan</strong>. Pastikan kamu sudah memeriksa alamat token dengan benar.' : 'Burned tokens <strong style="color:#ff3300">CANNOT be recovered</strong>. Make sure you have verified the token address carefully.'}
            </div>
            <div style="display:flex;gap:10px;">
                <button id="burnConfirmCancel" style="flex:1;padding:10px;background:rgba(255,255,255,.05);border:1px solid #333;color:#aaa;font-family:'Share Tech Mono',monospace;font-size:.65rem;cursor:pointer;border-radius:4px;">✕ ${isId ? 'Batalkan' : 'Cancel'}</button>
                <button id="burnConfirmOk" disabled style="flex:2;padding:10px;background:linear-gradient(90deg,#cc1a00,#ff5500);border:none;color:#fff;font-family:'Share Tech Mono',monospace;font-size:.65rem;cursor:not-allowed;border-radius:4px;font-weight:700;opacity:.5;transition:all .3s;">🔥 ${isId ? 'Ya, Bakar (5...)' : 'Yes, Burn (5...)'}</button>
            </div>
        </div>`;
        document.body.appendChild(overlay);
        let countdown = 5;
        const okBtn   = overlay.querySelector('#burnConfirmOk');
        const timer   = setInterval(() => {
            countdown--;
            if (countdown <= 0) {
                clearInterval(timer);
                okBtn.disabled = false;
                okBtn.style.cursor  = 'pointer';
                okBtn.style.opacity = '1';
                okBtn.textContent   = `🔥 ${isId ? 'Ya, Bakar Sekarang' : 'Yes, Burn Now'}`;
            } else {
                okBtn.textContent = `🔥 ${isId ? `Ya, Bakar (${countdown}...)` : `Yes, Burn (${countdown}...)`}`;
            }
        }, 1000);
        overlay.querySelector('#burnConfirmCancel').onclick = () => { clearInterval(timer); overlay.remove(); resolve(false); };
        okBtn.onclick = () => { if (okBtn.disabled) return; overlay.remove(); resolve(true); };
        overlay.addEventListener('click', (e) => { if (e.target === overlay) { clearInterval(timer); overlay.remove(); resolve(false); } });
    });
}

let tokenInfoCache = {};
async function autoFetchTokenInfo(address) {
    if (!address || !ethers.isAddress(address)) return null;
    const key = address.toLowerCase();
    if (tokenInfoCache[key]) return tokenInfoCache[key];
    try {
        const prov = provider || getPublicProvider();
        if (!prov) return null;
        const c    = new ethers.Contract(address, ERC20_ABI, prov);
        const [name, symbol, decimals] = await Promise.all([
            c.name().catch(() => 'Unknown'),
            c.symbol().catch(() => '???'),
            c.decimals().catch(() => 18)
        ]);
        const info = { name, symbol, decimals: Number(decimals) };
        tokenInfoCache[key] = info;
        return info;
    } catch { return null; }
}

(function setupTokenAddrAutoFetch() {
    const inp   = document.getElementById('tokenAddr');
    const badge = document.getElementById('tokenInfoBadge');
    if (!inp) return;
    let debounce;
    inp.addEventListener('input', () => {
        badge.style.display = 'none';
        clearTimeout(debounce);
        const val = inp.value.trim();
        if (!ethers.isAddress(val)) return;
        try {
            const checksummed = ethers.getAddress(val);
            if (val !== checksummed && val !== checksummed.toLowerCase()) {
                badge.innerHTML = '⚠️ Checksum mismatch';
                badge.style.display = 'block';
                return;
            }
        } catch { return; }
        debounce = setTimeout(async () => {
            badge.innerHTML = '⏳';
            badge.style.display = 'block';
            const info = await autoFetchTokenInfo(val);
            if (!info) { badge.innerHTML = '❓ Unknown token'; return; }
            const avatarSVG = createTokenAvatarSVG(info.symbol);
            badge.innerHTML = `<span style="display:inline-flex;align-items:center;gap:4px;"><span style="width:14px;height:14px;border-radius:50%;overflow:hidden;display:inline-flex;">${avatarSVG}</span>${info.name} · ${info.symbol}</span>`;
        }, 600);
    });
})();

async function detectTransferTax(tokenContract, userAddr, decimals) {
    try {
        const smallAmount = 10n ** BigInt(decimals); // 1 token unit
        const rawBalance = BigInt(await tokenContract.balanceOf(userAddr));
        if (rawBalance < smallAmount) return false; 
        const balBefore = BigInt(await tokenContract.balanceOf(userAddr));
        
        try {
            await tokenContract.transfer.staticCall(userAddr, smallAmount);
        } catch (err) {
            const msg = (err?.reason || err?.message || '').toLowerCase();
            if (msg.includes('tax') || msg.includes('fee') || msg.includes('exceeds') || msg.includes('deflationary')) {
                return true;
            }
        }

        try {
            const iface = tokenContract.interface;
            const calldata = iface.encodeFunctionData('transfer', [userAddr, smallAmount]);
            const result = await tokenContract.runner.provider.call({
                to: await tokenContract.getAddress(),
                from: userAddr,
                data: calldata
            });
            if (result === '0x' || result === '0x0000000000000000000000000000000000000000000000000000000000000000') {
                return true;
            }
        } catch (e) {
            const msg = (e?.reason || e?.message || '').toLowerCase();
            if (msg.includes('tax') || msg.includes('fee') || msg.includes('exceeds') || msg.includes('deflationary')) {
                return true;
            }
        }

        return false;
    } catch (e) {
        console.warn('Tax detection error:', e);
        return false;
    }
}

async function doBurn() {
    if (burnBtn.getAttribute('data-locked') === 'true') {
        statusEl.innerText = t('status.signinRequired');
        const addr = await signer?.getAddress?.() || '';
        const message = buildSignMessage(addr);
        openSigninModal(addr, message);
        return;
    }
    if (!userSigned)       { statusEl.innerText = t('status.signinRequired'); return; }
    if (!tosCheck.checked) { statusEl.innerText = t('status.notos');          return; }

    const tokenAddress = document.getElementById('tokenAddr').value.trim();
    const amountStr    = document.getElementById('amount').value.trim();

    if (!tokenAddress)                   { statusEl.innerText = t('status.notoken');  return; }
    if (!ethers.isAddress(tokenAddress)) { statusEl.innerText = t('status.badaddr');  return; }

    if (TOKEN_BLACKLIST.has(tokenAddress.toLowerCase())) {
        statusEl.innerText = currentLang === 'id'
            ? '[ ❌ Token ini ada dalam daftar blokir. ]'
            : '[ ❌ This token is on the blocklist. ]';
        return;
    }

    if (tokenAddress.toLowerCase() === IB_TOKEN_ADDR.toLowerCase()) {
        statusEl.innerText = currentLang === 'id'
            ? '[ ❌ Kamu tidak bisa membakar IB Token itu sendiri! ]'
            : '[ ❌ You cannot burn the IB Token itself! ]';
        return;
    }

    const amountNum = parseFloat(amountStr);
    if (!amountStr || isNaN(amountNum) || amountNum < 1 || !Number.isInteger(amountNum)) {
        statusEl.innerText = t('status.badamount');
        return;
    }

    if (amountNum > MAX_BURN_AMOUNT) {
        statusEl.innerText = currentLang === 'id'
            ? `[ ❌ Jumlah maksimal burn adalah ${MAX_BURN_AMOUNT.toLocaleString()} token per transaksi. ]`
            : `[ ❌ Maximum burn is ${MAX_BURN_AMOUNT.toLocaleString()} tokens per transaction. ]`;
        return;
    }

    const lastBurn = parseInt(localStorage.getItem(LAST_BURN_KEY) || '0', 10);
    const elapsed  = Date.now() - lastBurn;
    if (elapsed < BURN_COOLDOWN_MS) {
        const remaining = Math.ceil((BURN_COOLDOWN_MS - elapsed) / 1000);
        statusEl.innerText = currentLang === 'id'
            ? `[ ⏳ Tunggu ${remaining} detik sebelum burn lagi. ]`
            : `[ ⏳ Please wait ${remaining}s before burning again. ]`;
        return;
    }

    try {
        burnBtn.disabled = true;
        if (!signer) { statusEl.innerText = t('status.nosigner'); return; }

        statusEl.innerText = currentLang === 'id'
            ? '[ 🔄 Memeriksa status kontrak... ]'
            : '[ 🔄 Checking contract status... ]';
        const isPaused = await checkContractPaused();
        if (isPaused) {
            statusEl.innerText = currentLang === 'id'
                ? '[ ⏸️ Kontrak sedang dijeda oleh admin. Coba lagi nanti. ]'
                : '[ ⏸️ Contract is paused by admin. Please try again later. ]';
            return;
        }

        const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);

        statusEl.innerText = t('status.checkdec');
        let decimals;
        try { decimals = await tokenContract.decimals(); } catch { decimals = 18; }

        const userAddr   = await signer.getAddress();
        const rawBalance = BigInt(await tokenContract.balanceOf(userAddr));
        const divisor    = 10n ** BigInt(decimals);
        const maxWhole   = rawBalance / divisor;
        const requested  = BigInt(amountNum);

        if (requested > maxWhole) {
            statusEl.innerText = currentLang === 'id'
                ? `[ ❌ Saldo tidak cukup. Saldo on-chain kamu: ${maxWhole.toString()} token ]`
                : `[ ❌ Insufficient balance. Your on-chain balance: ${maxWhole.toString()} whole token(s) ]`;
            return;
        }

        const amountFormatted = requested * divisor;

        statusEl.innerText = currentLang === 'id'
            ? '[ 🔍 Memeriksa pajak transfer token... ]'
            : '[ 🔍 Checking token transfer tax... ]';
        const hasTax = await detectTransferTax(tokenContract, userAddr, decimals);
        if (hasTax) {
            statusEl.innerText = currentLang === 'id'
                ? '[ ❌ Token ini memiliki pajak transfer. Tidak diizinkan untuk dibakar. ]'
                : '[ ❌ This token has a transfer tax and cannot be burned. ]';
            return;
        }

        statusEl.innerText = currentLang === 'id'
            ? '[ 🔍 Memeriksa potensi honeypot... ]'
            : '[ 🔍 Checking for honeypot... ]';
        const isHoneypot = await detectHoneypot(tokenContract, userAddr, decimals);
        if (isHoneypot) {
            statusEl.innerText = currentLang === 'id'
                ? '[ ❌ Token ini terdeteksi sebagai honeypot! Transfer tidak bisa dilakukan. ]'
                : '[ ❌ Token detected as honeypot! Transfer is not possible. ]';
            return;
        }

        if (isCommunityBlacklisted(tokenAddress)) {
            const isId = currentLang === 'id';
            if (!confirm(isId
                ? '⚠️ Token ini ada di daftar blokir lokalmu.\nLanjutkan dengan risiko sendiri?'
                : '⚠️ This token is in your local blocklist.\nProceed at your own risk?')) {
                statusEl.innerText = t('status.txcancel'); return;
            }
        }

        statusEl.innerText = currentLang === 'id' ? '[ 🔍 Memeriksa umur kontrak token... ]' : '[ 🔍 Checking token contract age... ]';
        const ageDays = await fetchContractAgeDays(tokenAddress);
        if (ageDays !== null && ageDays < 30) {
            const isId = currentLang === 'id';
            if (!confirm(isId
                ? `⚠️ Kontrak token ini baru berumur ${ageDays} hari!\nToken baru berisiko tinggi (rug pull, scam, dll).\nTetap lanjutkan?`
                : `⚠️ This token contract is only ${ageDays} day(s) old!\nNew tokens carry high risk (rug pull, scam, etc).\nProceed anyway?`)) {
                statusEl.innerText = t('status.txcancel'); return;
            }
        }

        const isFirstBurnToken = !loadBurnHistory().some(h => h.tokenAddr?.toLowerCase() === tokenAddress.toLowerCase());
        let tokenName   = 'Unknown Token';
        let tokenSymbol = '???';
        try {
            tokenName   = await tokenContract.name();
            tokenSymbol = await tokenContract.symbol();
        } catch {}

        statusEl.innerText = currentLang === 'id'
            ? '[ ⏳ Menunggu konfirmasi dari kamu... ]'
            : '[ ⏳ Waiting for your confirmation... ]';
        const confirmed = await showBurnConfirmModal({
            tokenName, tokenSymbol, tokenAddress, amount: amountNum, userAddr, isFirstBurnToken
        });
        if (!confirmed) {
            statusEl.innerText = t('status.txcancel');
            return;
        }

        statusEl.innerText = t('status.checkallow');
        const currentAllowance = await tokenContract.allowance(userAddr, BURNER_CONTRACT_ADDRESS);
        if (BigInt(currentAllowance) < BigInt(amountFormatted)) {
            statusEl.innerText = t('status.approving');
            const appTx = await tokenContract.approve(BURNER_CONTRACT_ADDRESS, amountFormatted);
            statusEl.innerText = t('status.waitapprove');
            await appTx.wait();
            statusEl.innerText = t('status.approved');
        }

        statusEl.innerText = t('status.burning');
        const burnTx = await burnerContract.burnAndClaim(tokenAddress, amountFormatted);

        statusEl.innerText = t('status.waitburn');
        const receipt = await burnTx.wait();

        localStorage.setItem(LAST_BURN_KEY, Date.now().toString());
        const txHash = receipt?.hash || burnTx?.hash || '';
        const explorerLink = txHash
            ? ` <a href="https://basescan.org/tx/${txHash}" target="_blank" rel="noopener" style="color:var(--fire-inner);text-decoration:underline;">View Tx ↗</a>`
            : '';
        statusEl.innerHTML = t('status.success') + explorerLink;

        saveBurnToHistory({ tokenSymbol, tokenName, tokenAddr: tokenAddress, amount: amountNum, txHash, timestamp: Date.now() });
        const _burnStreak = updateBurnStreak();
        checkAndGrantBadges(loadBurnHistory().length, _burnStreak);
        sendBurnNotif(tokenSymbol, txHash);
        showShareButton(tokenSymbol, amountNum, txHash);
        renderBurnHistory(); renderTopTokens(); renderWalletStats(); renderBadgesPanel(); renderStreakBadge();
        const _ss = document.getElementById('statsHistorySection');
        if (_ss) _ss.style.display = 'block';

    } catch (err) {
        console.error(err);
        const msg = err?.reason || err?.shortMessage || err?.message || '';
        if (msg.includes('bad result data') || msg.includes('could not decode')) {
            statusEl.innerText = t('status.notERC20');
        } else if (err?.code === 4001 || err?.code === 'ACTION_REJECTED') {
            statusEl.innerText = t('status.txcancel');
        } else if (msg.includes('transfer amount exceeds balance')) {
            statusEl.innerText = currentLang === 'id'
                ? '[ ❌ Token ini memiliki pajak transfer. ]'
                : '[ ❌ This token has transfer tax. ]';
        } else {
            statusEl.innerText = `[ ❌ Error: ${msg || 'Transaction Failed'} ]`;
        }
    } finally {
        updateBurnBtn();
    }
}

burnBtn.onclick = doBurn;

const PUBLIC_RPC_URL = 'https://mainnet.base.org';
const IB_TOKEN_ADDR  = '0xD733C347BaC49cb55cF9498b5f25FB00BAc3ad59';
const DEAD_ADDR      = '0x000000000000000000000000000000000000dead';
const TRANSFER_TOPIC = '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef';
const ZERO_TOPIC     = '0x0000000000000000000000000000000000000000000000000000000000000000';

let autoRefreshTimer  = null;
let countdownTimer    = null;
let refreshCountdown  = 10;
let lastBurnCount     = null;
let publicEthProvider = null;

function getPublicProvider() {
    if (!publicEthProvider) {
        try {
            publicEthProvider = new ethers.JsonRpcProvider(PUBLIC_RPC_URL);
        } catch(e) {
            console.warn('Failed to create public provider:', e);
        }
    }
    return publicEthProvider;
}

async function fetchLiveBurnCount() {
    try {
        const prov = getPublicProvider();
        if (!prov) return null;
        const ibTokenContract = new ethers.Contract(
            IB_TOKEN_ADDR,
            [
                "function totalSupply() view returns (uint256)",
                "function decimals() view returns (uint8)"
            ],
            prov
        );

        const supply = await ibTokenContract.totalSupply();
        const decimals = await ibTokenContract.decimals();
        
        const totalBurnedCount = Number(ethers.formatUnits(supply, decimals));
        return Math.floor(totalBurnedCount);
        
    } catch(err) {
        console.warn('Live burn count fetch failed:', err);
        return null;
    }
}

function updateBurnCountDisplay(count) {
    const el = document.getElementById('liveBurnCount');
    if (!el) return;

    if (count === null) {
        el.innerHTML = '<span class="stat-loading">🔥</span>';
        return;
    }

    const formatted = count.toLocaleString();
    el.textContent  = formatted;
    if (lastBurnCount !== null && count !== lastBurnCount) {
        el.classList.remove('refreshed');
        void el.offsetWidth;
        el.classList.add('refreshed');
        setTimeout(() => el.classList.remove('refreshed'), 500);
    }
    lastBurnCount = count;
}

function updateRefreshCountdown(seconds) {
    const numEl  = document.getElementById('refreshCountdownNum');
    const progEl = document.getElementById('refreshProgress');

    if (numEl)  numEl.textContent = seconds;
    if (progEl) progEl.style.width = ((seconds / 10) * 100) + '%';
}

async function doRefresh() {
    const labelEl = document.getElementById('refreshLabel');
    const count = await fetchLiveBurnCount();
    updateBurnCountDisplay(count);

    refreshCountdown = 10;
    updateRefreshCountdown(refreshCountdown);
}

function startAutoRefresh() {
    doRefresh();
    countdownTimer = setInterval(() => {
        refreshCountdown--;
        updateRefreshCountdown(Math.max(0, refreshCountdown));

        if (refreshCountdown <= 0) {
            refreshCountdown = 10;
            doRefresh();
        }
    }, 1000);
}

function spawnBurstEmbers(count = 12) {
    for (let i = 0; i < count; i++) {
        const e = document.createElement('div');
        const sz = Math.random() * 5 + 2;
        const colors = ['var(--fire-core)','var(--fire-inner)','var(--fire-mid)','#ffcc55'];
        e.style.cssText = `
            position:fixed;
            width:${sz}px;height:${sz}px;
            background:${colors[Math.floor(Math.random()*colors.length)]};
            border-radius:50%;
            left:${Math.random()*100}%;
            bottom:${Math.random()*15}%;
            pointer-events:none;
            z-index:5;
            animation:blazeRise ${1.5+Math.random()*2}s linear forwards;
            animation-delay:${Math.random()*0.5}s;
        `;
        document.body.appendChild(e);
        setTimeout(() => e.remove(), 4000);
    }
}

(function patchBurnBtn() {
    const origDoBurn = doBurn;
    burnBtn.onclick = async function(...args) {
        await origDoBurn.call(this, ...args);
        setTimeout(async () => {
            if (statusEl.innerHTML.includes('🎉') || statusEl.innerHTML.includes('Success') || statusEl.innerHTML.includes('Berhasil')) {
                spawnBurstEmbers(20);
                doRefresh();
                if (signer) {
                    try {
                        const addr = await signer.getAddress();
                        await fetchWalletTokens(addr);
                    } catch(e) {
                        console.warn('Token picker refresh after burn failed:', e);
                    }
                }
            }
        }, 500);
    };
})();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startAutoRefresh);
} else {
    startAutoRefresh();
}

const disconnectWalletBtn = document.getElementById('disconnectWalletBtn');

function disconnectWallet() {
    walletConnected = false;
    provider = null;
    signer = null;
    userSigned = false;

    walletBox.classList.remove('visible');
    connectBtn.style.display = '';
    statusEl.innerText = t('status.waiting');
    
    document.getElementById('tokenAddr').value = '';
    document.getElementById('tokenInfoBadge').style.display = 'none';
    document.getElementById('tokenPickerWrap').style.display = 'none';

    clearSession();
    updateBurnBtn();
}

if (disconnectWalletBtn) {
    disconnectWalletBtn.addEventListener('click', disconnectWallet);
}

if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
            disconnectWallet();
        } else if (walletConnected) {
            disconnectWallet();
            connectWallet('browser'); 
        }
    });

    window.ethereum.on('chainChanged', (chainId) => {
        const onBase = parseInt(chainId, 16) === 8453;
        if (onBase) {
            if (walletConnected) {
                const rp = window.ethereum;
                provider = new ethers.BrowserProvider(rp);
                provider.getSigner().then(s => {
                    signer = s;
                    burnerContract = new ethers.Contract(BURNER_CONTRACT_ADDRESS, BURNER_ABI, signer);
                    statusEl.innerText = t('status.connected');
                    const modal = document.getElementById('wrongNetworkModal');
                    if (modal) modal.remove();
                }).catch(() => window.location.reload());
            }
        } else {
            if (walletConnected) showWrongNetworkModal();
        }
    });
}

const btnMax = document.getElementById('btnMax');

if (btnMax) {
    btnMax.addEventListener('click', async (e) => {
        e.preventDefault();
        
        const tokenAddress = document.getElementById('tokenAddr').value.trim();
        
        if (!tokenAddress) {
            statusEl.innerText = t('status.notoken');
            return;
        }
        if (!ethers.isAddress(tokenAddress)) {
            statusEl.innerText = t('status.badaddr');
            return;
        }
        if (!signer) {
            statusEl.innerText = t('status.nosigner');
            return;
        }

        statusEl.innerText = currentLang === 'id' 
            ? "[ ⏳ Mengecek saldo maksimal di blockchain... ]" 
            : "[ ⏳ Checking max balance on blockchain... ]";
            
        try {
            const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
            const userAddr = await signer.getAddress();
            const balancePromise = tokenContract.balanceOf(userAddr);
            const decimalsPromise = tokenContract.decimals().catch(() => 18n);
            const [balance, decimals] = await Promise.all([balancePromise, decimalsPromise]);
            const divisor = 10n ** BigInt(decimals);
            const maxInt = balance / divisor;
            
            if (maxInt < 1n) {
                statusEl.innerText = currentLang === 'id' 
                    ? "[ ❌ Saldo tidak mencukupi (Minimal 1 token bulat) ]" 
                    : "[ ❌ Insufficient balance (Min 1 whole token) ]";
                document.getElementById('amount').value = '';
            } else {
                document.getElementById('amount').value = maxInt.toString();
                statusEl.innerText = currentLang === 'id' 
                    ? `[ ✅ Saldo Max diatur: ${maxInt.toString()} ]` 
                    : `[ ✅ Max balance set: ${maxInt.toString()} ]`;
            }
        } catch (err) {
            console.error(err);
            statusEl.innerText = currentLang === 'id' 
                ? "[ ❌ Gagal mengecek saldo. Pastikan address token benar. ]" 
                : "[ ❌ Failed to check balance. Check token address. ]";
        }
    });
}

function copyCoffeeAddress() {
    const addr = '0x4521226C7d9979CD3f1779E9423488224B4D1222';
    navigator.clipboard.writeText(addr);
    const msg = TRANSLATIONS[currentLang]['footer.copyMsg'];
    alert(msg);
}

(function initTheme() {
    const saved = localStorage.getItem('ib_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = saved === 'dark' ? '☀️' : '🌙';
})();

function toggleTheme() {
    const cur  = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ib_theme', next);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = next === 'dark' ? '☀️' : '🌙';
}

const HISTORY_KEY = 'ib_burn_history_v1';

function loadBurnHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]'); }
    catch { return []; }
}

function saveBurnToHistory(entry) {
    const hist = loadBurnHistory();
    hist.unshift(entry);
    if (hist.length > 100) hist.splice(100);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(hist));
}

function renderBurnHistory() {
    const container = document.getElementById('burnHistoryList');
    const chartEl   = document.getElementById('burnSparkline');
    if (!container) return;
    const hist = loadBurnHistory();

    if (chartEl) {
        const days   = 14;
        const counts = Array(days).fill(0);
        const now    = Date.now();
        hist.forEach(h => {
            const d = Math.floor((now - h.timestamp) / 86400000);
            if (d < days) counts[days - 1 - d]++;
        });
        const max   = Math.max(...counts, 1);
        const W = 280, H = 48;
        const step  = W / days;
        let pts = '', area = '';
        counts.forEach((c, i) => {
            const x = i * step + step / 2;
            const y = H - (c / max) * (H - 6) - 3;
            pts  += (i === 0 ? `M${x},${y}` : ` L${x},${y}`);
        });
        area = `${pts} L${W},${H} L0,${H} Z`;
        chartEl.innerHTML = `<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block;">
            <defs><linearGradient id="spkG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#ff5500" stop-opacity=".55"/>
                <stop offset="100%" stop-color="#ff5500" stop-opacity="0"/>
            </linearGradient></defs>
            <path d="${area}" fill="url(#spkG)"/>
            <path d="${pts}" fill="none" stroke="#ff5500" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    }

    if (hist.length === 0) {
        container.innerHTML = `<div style="padding:18px;text-align:center;color:var(--text-ash);font-size:.65rem;">No burn history yet. Start burning! 🔥</div>`;
        return;
    }
    container.innerHTML = hist.slice(0, 20).map(h => `
        <div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-bottom:1px solid rgba(255,80,0,.07);">
            <div style="width:28px;height:28px;background:#331a00;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:7px;color:#ff9900;border:1px solid #552200;flex-shrink:0;">${(h.tokenSymbol||'?').slice(0,2)}</div>
            <div style="flex:1;min-width:0;">
                <div style="font-size:.65rem;color:#fff;font-weight:700;">${h.tokenSymbol||'?'} <span style="color:#555;font-weight:400;">×${h.amount}</span></div>
                <div style="font-size:.5rem;color:#555;">${new Date(h.timestamp).toLocaleString()}</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-shrink:0;">
                <span style="font-size:.6rem;color:#66ff99;font-weight:700;">+1 IB</span>
                ${h.txHash ? `<a href="https://basescan.org/tx/${h.txHash}" target="_blank" rel="noopener" style="font-size:.55rem;color:var(--fire-inner);text-decoration:none;border:1px solid #331a00;padding:1px 5px;border-radius:3px;">TX ↗</a>` : ''}
                <button onclick="reportFromHistory('${h.tokenAddr||''}','${h.tokenSymbol||'?'}')" title="Report token" style="background:none;border:none;color:#555;font-size:.6rem;cursor:pointer;padding:1px 4px;">⚑</button>
            </div>
        </div>`).join('');
}

function reportFromHistory(addr, sym) {
    if (!addr) return;
    if (confirm(`Report ${sym} (${addr.slice(0,10)}...) as scam/blacklist?\nThis only affects your local list.`)) {
        reportAndBlacklistToken(addr, sym);
    }
}

function renderTopTokens() {
    const el = document.getElementById('topTokensList');
    if (!el) return;
    const hist = loadBurnHistory();
    if (!hist.length) {
        el.innerHTML = '<div style="padding:10px;text-align:center;color:var(--text-ash);font-size:.6rem;">No data yet.</div>';
        return;
    }
    const counts = {};
    hist.forEach(h => { const k = h.tokenSymbol || '?'; counts[k] = (counts[k]||0)+1; });
    const sorted = Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,5);
    el.innerHTML = sorted.map(([sym,cnt],i) => `
        <div style="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04);">
            <span style="color:var(--fire-inner);font-size:.58rem;width:14px;text-align:center;">#${i+1}</span>
            <span style="color:#fff;font-size:.65rem;font-weight:700;flex:1;">${sym}</span>
            <span style="color:var(--text-ash);font-size:.58rem;">${cnt}× burn</span>
        </div>`).join('');
}

function renderWalletStats() {
    const el = document.getElementById('walletStatsPanel');
    if (!el || !walletConnected) return;
    const hist       = loadBurnHistory();
    const streak     = getStreak();
    const badgesEarned = loadBadges().length;
    const uniqTokens = new Set(hist.map(h => h.tokenAddr || h.tokenSymbol)).size;
    el.style.display = 'block';
    const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
    set('statTotalBurns', hist.length);
    set('statTotalIB',    hist.length);
    set('statStreak',     streak > 0 ? streak + '🔥' : '—');
    set('statBadges',     `${badgesEarned}/${BADGE_DEFS.length}`);
    set('statTokens',     uniqTokens);
}

const BADGES_KEY = 'ib_badges_v1';
const BADGE_DEFS = [
    { id:'first_burn', icon:'🔥', name:'First Burn',    desc:'Complete your first burn',      req:1   },
    { id:'burn_5',     icon:'💥', name:'5× Burner',     desc:'Complete 5 burns',               req:5   },
    { id:'burn_10',    icon:'⚡', name:'10× Burner',    desc:'Complete 10 burns',              req:10  },
    { id:'burn_25',    icon:'🏅', name:'Burn Addict',   desc:'Complete 25 burns',              req:25  },
    { id:'burn_50',    icon:'🌋', name:'Inferno',       desc:'Complete 50 burns',              req:50  },
    { id:'burn_100',   icon:'👑', name:'Legendary',     desc:'Complete 100 burns',             req:100 },
    { id:'streak_3',   icon:'🗓️', name:'3-Day Streak',  desc:'Burn 3 days in a row',          streakReq:3  },
    { id:'streak_7',   icon:'📅', name:'Weekly Grind',  desc:'Burn 7 days in a row',          streakReq:7  },
];

function loadBadges() {
    try { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
    catch { return []; }
}

function checkAndGrantBadges(totalBurns, currentStreak) {
    const earned    = new Set(loadBadges());
    const newEarned = [];
    for (const b of BADGE_DEFS) {
        if (earned.has(b.id)) continue;
        if (b.req       && totalBurns    >= b.req)       { earned.add(b.id); newEarned.push(b); }
        if (b.streakReq && currentStreak >= b.streakReq) { earned.add(b.id); newEarned.push(b); }
    }
    if (newEarned.length) {
        localStorage.setItem(BADGES_KEY, JSON.stringify([...earned]));
        newEarned.forEach(b => showBadgeToast(b));
    }
    renderBadgesPanel();
}

function showBadgeToast(badge) {
    const toast = document.createElement('div');
    toast.className = 'badge-toast';
    toast.innerHTML = `
        <div style="font-size:1.6rem;margin-bottom:2px;">${badge.icon}</div>
        <div style="font-size:.6rem;color:var(--fire-inner);letter-spacing:.1em;margin-bottom:2px;">ACHIEVEMENT UNLOCKED</div>
        <div style="font-size:.75rem;color:#fff;font-weight:700;">${badge.name}</div>
        <div style="font-size:.55rem;color:var(--text-ash);margin-top:2px;">${badge.desc}</div>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 500); }, 4500);
}

function renderBadgesPanel() {
    const el = document.getElementById('badgesList');
    if (!el) return;
    const earned = new Set(loadBadges());
    el.innerHTML = BADGE_DEFS.map(b => `
        <div style="display:flex;align-items:center;gap:8px;padding:5px 6px;border-radius:5px;
             background:${earned.has(b.id) ? 'rgba(255,80,0,.1)' : 'rgba(255,255,255,.02)'};
             border:1px solid ${earned.has(b.id) ? 'rgba(255,80,0,.25)' : 'rgba(255,255,255,.04)'};
             opacity:${earned.has(b.id) ? 1 : 0.4};">
            <span style="font-size:1rem;">${b.icon}</span>
            <div style="flex:1;">
                <div style="font-size:.58rem;color:${earned.has(b.id)?'#fff':'#666'};font-weight:700;">${b.name}</div>
                <div style="font-size:.48rem;color:var(--text-ash);">${b.desc}</div>
            </div>
            <span style="font-size:.6rem;">${earned.has(b.id) ? '✅' : '🔒'}</span>
        </div>`).join('');
}

const STREAK_KEY = 'ib_streak_v1';

function updateBurnStreak() {
    const today     = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    let data;
    try { data = JSON.parse(localStorage.getItem(STREAK_KEY) || '{}'); } catch { data = {}; }
    if (data.lastDay === today) return data.streak || 1;
    data.streak  = (data.lastDay === yesterday) ? (data.streak||1)+1 : 1;
    data.lastDay = today;
    localStorage.setItem(STREAK_KEY, JSON.stringify(data));
    return data.streak;
}

function getStreak() {
    try {
        const data      = JSON.parse(localStorage.getItem(STREAK_KEY) || '{}');
        const today     = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        return (data.lastDay === today || data.lastDay === yesterday) ? (data.streak||0) : 0;
    } catch { return 0; }
}

function renderStreakBadge() {
    const el = document.getElementById('streakBadge');
    if (!el) return;
    const s = getStreak();
    el.textContent  = s > 0 ? `🔥 ${s}d` : '';
    el.style.display = s > 0 ? 'inline-block' : 'none';
}

async function maybeRequestNotifPermission() {
    if (!('Notification' in window) || Notification.permission !== 'default') return;
    const btn = document.getElementById('notifBtn');
    if (btn) { btn.style.display = 'flex'; }
}

async function requestBrowserNotif() {
    if (!('Notification' in window)) return;
    const perm = await Notification.requestPermission();
    const btn  = document.getElementById('notifBtn');
    if (btn)   btn.style.display = perm === 'default' ? 'flex' : 'none';
    if (perm === 'granted') {
        new Notification('🔥 Inpoburn Hub', { body: 'Notifications enabled! You\'ll be notified on burn success.' });
    }
}

function sendBurnNotif(tokenSymbol, txHash) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    const n = new Notification('🔥 Burn Confirmed!', {
        body: `${tokenSymbol} burned → 1 IB received!`,
        tag:  'inpoburn-success',
    });
    if (txHash) n.onclick = () => window.open(`https://basescan.org/tx/${txHash}`, '_blank');
}

function shareToX(tokenSymbol, amount, txHash) {
    const text = `🔥 Just burned ${amount} $${tokenSymbol} and claimed 1 $IB on Inpoburn Hub!\n\nTx: https://basescan.org/tx/${txHash}\n\n#InpoburnHub #DeFi #Base #ERC20`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
}

function showShareButton(tokenSymbol, amount, txHash) {
    const el = document.getElementById('shareAfterBurn');
    if (!el) return;
    el.style.display  = 'flex';
    el.dataset.sym    = tokenSymbol;
    el.dataset.amount = amount;
    el.dataset.tx     = txHash;
}

const COMMUNITY_BLACKLIST_KEY = 'ib_community_bl_v1';

function loadCommunityBlacklist() {
    try { return new Set(JSON.parse(localStorage.getItem(COMMUNITY_BLACKLIST_KEY) || '[]')); }
    catch { return new Set(); }
}

function reportAndBlacklistToken(addr, sym) {
    if (!addr) return;
    const bl = loadCommunityBlacklist();
    bl.add(addr.toLowerCase());
    localStorage.setItem(COMMUNITY_BLACKLIST_KEY, JSON.stringify([...bl]));
    alert(`✅ ${sym || addr.slice(0,10)} reported & added to your local blocklist.`);
}

function isCommunityBlacklisted(addr) {
    return addr ? loadCommunityBlacklist().has(addr.toLowerCase()) : false;
}

async function fetchContractAgeDays(tokenAddr) {
    try {
        const res = await fetch(`https://base.blockscout.com/api/v2/addresses/${tokenAddr}`, { signal: AbortSignal.timeout(6000) });
        if (!res.ok) return null;
        const data = await res.json();
        const ts   = data.creation_transaction?.timestamp || data.created_at;
        if (!ts) return null;
        return Math.floor((Date.now() - new Date(ts).getTime()) / 86400000);
    } catch { return null; }
}

let _gasDebounce = null;
function scheduleGasEstimate() {
    clearTimeout(_gasDebounce);
    _gasDebounce = setTimeout(updateGasEstimate, 900);
}

async function updateGasEstimate() {
    const gasEl  = document.getElementById('gasEstimateRow');
    const gasVal = document.getElementById('gasEstimateValue');
    if (!gasEl || !gasVal) return;
    if (!walletConnected || !signer || !provider || !burnerContract) { gasEl.style.display = 'none'; return; }

    const tokenAddress = document.getElementById('tokenAddr').value.trim();
    const amountStr    = document.getElementById('amount').value.trim();
    const amountNum    = parseInt(amountStr, 10);
    if (!tokenAddress || !ethers.isAddress(tokenAddress) || !amountStr || isNaN(amountNum) || amountNum < 1) {
        gasEl.style.display = 'none'; return;
    }

    gasEl.style.display   = 'flex';
    gasVal.textContent    = '⏳ estimating...';
    gasVal.style.color    = 'var(--text-ash)';

    try {
        const tokenContract   = new ethers.Contract(tokenAddress, ERC20_ABI, signer);
        let decimals;
        try { decimals = Number(await tokenContract.decimals()); } catch { decimals = 18; }
        const amountFormatted = BigInt(amountNum) * (10n ** BigInt(decimals));

        const [approveGas, burnGas, feeData] = await Promise.all([
            tokenContract.approve.estimateGas(BURNER_CONTRACT_ADDRESS, amountFormatted).catch(() => 65000n),
            burnerContract.burnAndClaim.estimateGas(tokenAddress, amountFormatted).catch(() => 130000n),
            provider.getFeeData(),
        ]);
        const totalGas = approveGas + burnGas;
        const gp       = feeData.gasPrice || feeData.maxFeePerGas;
        const totalEth = gp ? parseFloat(ethers.formatEther(gp * totalGas)).toFixed(6) : '?';
        const gpGwei   = gp ? parseFloat(ethers.formatUnits(gp, 'gwei')).toFixed(3) : '?';
        gasVal.textContent = `~${totalEth} ETH  (${gpGwei} gwei · ${Number(totalGas).toLocaleString()} gas)`;
        gasVal.style.color = 'var(--fire-inner)';
    } catch { gasEl.style.display = 'none'; }
}

['tokenAddr','amount'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', scheduleGasEstimate);
});

function showQRModal(address, label) {
    const old = document.getElementById('qrModalOverlay');
    if (old) old.remove();
    const overlay = document.createElement('div');
    overlay.id    = 'qrModalOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);';
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=ff9900&bgcolor=0f0502&margin=10&data=${encodeURIComponent(address)}`;
    overlay.innerHTML = `
        <div style="background:linear-gradient(160deg,#1a0800,#0f0502);border:1px solid var(--fire-outer);border-radius:10px;padding:28px 24px;text-align:center;max-width:280px;width:90%;">
            <div style="font-size:.58rem;color:var(--fire-inner);letter-spacing:.1em;margin-bottom:12px;text-transform:uppercase;">${label}</div>
            <img src="${qrUrl}" style="border-radius:8px;width:180px;height:180px;background:#0f0502;" loading="lazy" alt="QR">
            <div style="font-size:.5rem;color:#555;font-family:monospace;margin-top:10px;word-break:break-all;line-height:1.5;">${address}</div>
            <button onclick="document.getElementById('qrModalOverlay').remove()" style="margin-top:16px;background:var(--fire-outer);color:#fff;border:none;padding:7px 20px;font-size:.65rem;cursor:pointer;border-radius:4px;font-family:inherit;">✕ Close</button>
        </div>`;
    overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };
    document.body.appendChild(overlay);
}

document.querySelectorAll('.contract-addr').forEach(el => {
    const addr = el.textContent.trim();
    if (!ethers.isAddress(addr)) return;
    const btn = document.createElement('button');
    btn.textContent   = '⬜ QR';
    btn.title         = 'Show QR Code';
    btn.style.cssText = 'background:none;border:1px solid #331a00;color:var(--fire-inner);font-size:.5rem;padding:2px 6px;border-radius:3px;cursor:pointer;margin-left:6px;font-family:inherit;vertical-align:middle;';
    btn.onclick = (e) => { e.stopPropagation(); showQRModal(addr, el.previousElementSibling?.textContent?.trim() || 'Contract Address'); };
    el.after(btn);
});

const _shareBtn = document.getElementById('shareAfterBurn');
if (_shareBtn) {
    _shareBtn.addEventListener('click', () => {
        shareToX(_shareBtn.dataset.sym || '?', _shareBtn.dataset.amount || '?', _shareBtn.dataset.tx || '');
    });
}

const _notifBtn = document.getElementById('notifBtn');
if (_notifBtn) {
    _notifBtn.addEventListener('click', requestBrowserNotif);
    if ('Notification' in window && Notification.permission !== 'default') {
        _notifBtn.style.display = 'none';
    }
}

(function initNewFeatures() {
    renderBadgesPanel();
    renderStreakBadge();
    const hist = loadBurnHistory();
    if (hist.length > 0) {
        renderBurnHistory();
        renderTopTokens();
        const ss = document.getElementById('statsHistorySection');
        if (ss) ss.style.display = 'block';
    }
})();

function showWrongNetworkModal() {
    const existing = document.getElementById('wrongNetworkModal');
    if (existing) return; // already showing

    const isId = currentLang === 'id';
    const overlay = document.createElement('div');
    overlay.id = 'wrongNetworkModal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:99999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);animation:overlayIn .25s ease both;';

    overlay.innerHTML = `
        <div style="background:linear-gradient(160deg,#1a0800,#0f0502);border:1px solid #cc1a00;border-radius:12px;padding:30px 26px;max-width:360px;width:90%;font-family:'Share Tech Mono',monospace;box-shadow:0 0 60px rgba(255,50,0,.4);text-align:center;animation:modalIn .3s ease both;">
            <div style="font-size:2.2rem;margin-bottom:8px;">⛓️</div>
            <div style="font-size:.75rem;color:#ff3300;letter-spacing:.1em;text-transform:uppercase;font-weight:700;margin-bottom:6px;">
                ${isId ? 'Network Salah!' : 'Wrong Network!'}
            </div>
            <div style="font-size:.58rem;color:var(--text-ash);letter-spacing:.06em;margin-bottom:20px;">
                // ${isId ? 'inpoburn hanya berjalan di base mainnet' : 'inpoburn only runs on base mainnet'} //
            </div>

            <div style="background:rgba(255,50,0,.07);border:1px solid rgba(255,50,0,.2);border-radius:8px;padding:14px;margin-bottom:20px;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                    <span style="font-size:.55rem;color:var(--text-ash);">${isId ? 'NETWORK SEKARANG' : 'CURRENT NETWORK'}</span>
                    <span id="wnmCurrentNet" style="font-size:.6rem;color:#ff6666;font-weight:700;">—</span>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:.55rem;color:var(--text-ash);">${isId ? 'NETWORK DIBUTUHKAN' : 'REQUIRED NETWORK'}</span>
                    <span style="font-size:.6rem;color:#66ff99;font-weight:700;">Base Mainnet (8453)</span>
                </div>
            </div>

            <button id="wnmSwitchBtn" style="width:100%;padding:12px;background:linear-gradient(90deg,#cc1a00,#ff5500);border:none;color:#fff;font-family:'Share Tech Mono',monospace;font-size:.7rem;font-weight:700;letter-spacing:.08em;cursor:pointer;border-radius:6px;margin-bottom:10px;transition:opacity .2s;">
                🔄 ${isId ? 'Ganti ke Base Mainnet' : 'Switch to Base Mainnet'}
            </button>

            <button id="wnmDisconnectBtn" style="width:100%;padding:9px;background:rgba(255,255,255,.04);border:1px solid #333;color:#888;font-family:'Share Tech Mono',monospace;font-size:.6rem;cursor:pointer;border-radius:6px;">
                ${isId ? '✖ Putuskan Wallet' : '✖ Disconnect Wallet'}
            </button>

            <div style="margin-top:14px;font-size:.5rem;color:#444;line-height:1.6;">
                ${isId
                    ? '⚠️ Semua fitur burn dinonaktifkan sementara kamu berada di network yang salah.'
                    : '⚠️ All burn features are disabled while you\'re on the wrong network.'}
            </div>
        </div>`;

    document.body.appendChild(overlay);

    (async () => {
        try {
            const tempProv = new ethers.BrowserProvider(window.ethereum);
            const net = await tempProv.getNetwork();
            const chainId = Number(net.chainId);
            const names = { 1:'Ethereum Mainnet', 56:'BSC', 137:'Polygon', 42161:'Arbitrum', 10:'Optimism', 43114:'Avalanche' };
            const netEl = document.getElementById('wnmCurrentNet');
            if (netEl) netEl.textContent = names[chainId] || `Chain ${chainId}`;
        } catch {}
    })();

    document.getElementById('wnmSwitchBtn').addEventListener('click', async () => {
        const btn = document.getElementById('wnmSwitchBtn');
        btn.textContent = isId ? '⏳ Mengganti...' : '⏳ Switching...';
        btn.style.opacity = '.6';
        btn.disabled = true;
        try {
            await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0x2105' }] });
        } catch (err) {
            if (err.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId:'0x2105', chainName:'Base', nativeCurrency:{name:'ETH',symbol:'ETH',decimals:18}, rpcUrls:['https://mainnet.base.org'], blockExplorerUrls:['https://basescan.org'] }]
                    });
                } catch (addErr) {
                    btn.textContent = isId ? '❌ Gagal menambah network' : '❌ Failed to add network';
                    btn.style.opacity = '1';
                    btn.disabled = false;
                    return;
                }
            } else if (err.code === 4001) {
                btn.textContent = isId ? '❌ Ditolak pengguna' : '❌ Rejected by user';
                btn.style.opacity = '1';
                btn.disabled = false;
            } else {
                btn.textContent = isId ? '❌ Gagal mengganti' : '❌ Switch failed';
                btn.style.opacity = '1';
                btn.disabled = false;
            }
        }
    });

    document.getElementById('wnmDisconnectBtn').addEventListener('click', () => {
        overlay.remove();
        disconnectWallet();
    });
}
