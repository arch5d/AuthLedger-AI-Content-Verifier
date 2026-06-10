const contractAddress = "0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47";
const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "hash",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isAI",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "ContentVerified",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			}
		],
		"name": "reportFalseStatus",
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
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newReputation",
				"type": "uint256"
			}
		],
		"name": "ReputationUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_newIsAI",
				"type": "bool"
			}
		],
		"name": "updateAIStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_isAI",
				"type": "bool"
			}
		],
		"name": "verifyContent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "contents",
		"outputs": [
			{
				"internalType": "string",
				"name": "hash",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isAI",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
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
		"name": "creatorReputation",
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
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			}
		],
		"name": "getContent",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "hash",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "isAI",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					}
				],
				"internalType": "struct ContentVerifier.Content",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_creator",
				"type": "address"
			}
		],
		"name": "getReputation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let signer;
let contract;
let provider;

document.getElementById('connectButton').addEventListener('click', async () => {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    document.getElementById('walletAddress').innerText = await signer.getAddress();
    contract = new ethers.Contract(contractAddress, abi, signer);
    alert("Wallet Connected!");
  } else {
    alert("Please install MetaMask!");
  }
});

document.getElementById('verifyButton').addEventListener('click', async () => {
  const hash = document.getElementById('contentHash').value;
  const isAI = document.getElementById('isAI').checked;
  try {
    const tx = await contract.verifyContent(hash, isAI);
    await tx.wait();
    alert("Content Verified!");
  } catch (err) {
    alert("Error: " + err.message);
  }
});

document.getElementById('getButton').addEventListener('click', async () => {
  const hash = document.getElementById('getHash').value;
  try {
    const content = await contract.getContent(hash);
if (!content.hash || content.hash.trim() === "") {
  alert("Content not found on-chain. Please verify it first.");
  return;
}
document.getElementById('contentResult').innerText = JSON.stringify(content, null, 2);
  } catch (err) {
    alert("Error: " + err.message);
  }
});

document.getElementById('updateButton').addEventListener('click', async () => {
  const hash = document.getElementById('updateHash').value;
  const newIsAI = document.getElementById('newIsAI').checked;
  try {
    const tx = await contract.updateAIStatus(hash, newIsAI);
    await tx.wait();
    alert("Status Updated!");
  } catch (err) {
    alert("Error: " + err.message);
  }
});

document.getElementById('reportButton').addEventListener('click', async () => {
  const hash = document.getElementById('reportHash').value;
  try {
    const tx = await contract.reportFalseStatus(hash);
    await tx.wait();
    alert("Reported Successfully!");
  } catch (err) {
    alert("Error: " + err.message);
  }
});

document.getElementById('repButton').addEventListener('click', async () => {
  const addr = document.getElementById('repAddress').value;
  try {
    const reputation = await contract.getReputation(addr);
    document.getElementById('repResult').innerText = `Reputation: ${reputation}`;
  } catch (err) {
    alert("Error: " + err.message);
  }
});
