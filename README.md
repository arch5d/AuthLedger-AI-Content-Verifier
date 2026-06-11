# AuthLedger - AI Content Verification DApp

<div align="center">

[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-purple?style=flat&logo=vite)](https://vitejs.dev)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.19-lightblue?style=flat&logo=solidity)](https://solidity-lang.org)
[![ethers.js](https://img.shields.io/badge/ethers.js-6-yellow?style=flat&logo=ethereum)](https://docs.ethers.org)
[![Ethereum](https://img.shields.io/badge/Ethereum-Sepolia-8c63ff?style=flat&logo=ethereum)](https://sepolia.etherscan.io)
[![MetaMask](https://img.shields.io/badge/MetaMask-Compatible-orange?style=flat&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgMzg0Ij48L3N2Zz4=)](https://metamask.io)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Production%20Ready-brightgreen?style=flat)](package.json)

**Verify content authenticity on Ethereum blockchain**

✅ Prove if content is AI-generated or Human-made | 📊 Track creator reputation | 🚨 Report false claims

[Live Demo](https://sepolia.etherscan.io/address/0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47) • [Deploy Guide](./DEPLOY_VERCEL.md) • [Docs](./README_PRODUCTION.md)

</div>

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

**Requirements:** Node.js 16+, MetaMask wallet, Sepolia testnet ETH

---

## ✨ Features

<table>
<tr>
<td width="50%">

✅ **Verify Content**
- Register content hash on-chain
- Mark as AI-generated or human-made
- Immutable verification record

</td>
<td width="50%">

🔎 **Query Content**
- Look up any content details
- View creator & timestamp
- Check AI status

</td>
</tr>
<tr>
<td width="50%">

✏️ **Update Status**
- Creators can modify their content status
- With reputation penalties
- Only original creator can update

</td>
<td width="50%">

🚨 **Report False Claims**
- Community-driven reputation system
- Report suspicious content
- Automatic reputation decrease

</td>
</tr>
<tr>
<td width="50%">

⭐ **Check Reputation**
- View creator reputation scores
- Track historical behavior
- Build trust metrics

</td>
<td width="50%">

🦊 **MetaMask Integrated**
- One-click wallet connection
- Secure transaction signing
- Network validation

</td>
</tr>
</table>

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│         React + Vite Frontend (Vercel)          │
├─────────────────────────────────────────────────┤
│  - ContractProvider (Web3 Context)              │
│  - 6 Feature Components                         │
│  - Error Handling & Validation                  │
├─────────────────────────────────────────────────┤
│     ethers.js (Blockchain Connection)           │
├─────────────────────────────────────────────────┤
│    Smart Contract (Sepolia Testnet)             │
│  Address: 0x7EF2e0048f5bAeDe046f6BF797943...    │
└─────────────────────────────────────────────────┘
```

---

## 📦 Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Web3 Library** | ethers.js v6 |
| **Blockchain** | Ethereum / Sepolia Testnet |
| **Smart Contract** | Solidity 0.8.19 |
| **Wallet** | MetaMask |
| **Deployment** | Vercel |
| **Styling** | CSS3 |
| **Code Quality** | ESLint |

---

## 🚀 Deployment

**Live at:** `https://authledger-ai-content-verifier.vercel.app/`

📖 **[Deployment Guide →](./DEPLOY_VERCEL.md)**

---

## 🔧 Environment Variables

### Local Development (`.env.local`)
```bash
VITE_CONTRACT_ADDRESS=0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB4
VITE_NETWORK_ID=11155111
VITE_NETWORK_NAME=Sepolia
```

### Switch Networks
**Ethereum Mainnet:**
```bash
VITE_CONTRACT_ADDRESS=0xYOUR_MAINNET_ADDRESS
VITE_NETWORK_ID=1
VITE_NETWORK_NAME=Ethereum Mainnet
```

See [`.env.example`](./.env.example) for template.

---

## 📁 Project Structure

```
content-verifier-react/
├── src/
│   ├── components/
│   │   ├── ConnectWallet.jsx          # 🦊 MetaMask connection
│   │   ├── ContractProvider.jsx       # 🔌 Web3 context
│   │   ├── VerifyContent.jsx          # ✅ Register content
│   │   ├── GetContent.jsx             # 🔎 Query content
│   │   ├── UpdateStatus.jsx           # ✏️ Update status
│   │   ├── ReportFalseStatus.jsx      # 🚨 Report claims
│   │   └── CheckReputation.jsx        # ⭐ Check reputation
│   ├── App.jsx                        # Main app
│   ├── ContractConfig.js              # Smart contract ABI & address
│   ├── main.jsx                       # Entry point
│   └── style.css                      # Global styles
├── public/                            # Static assets
├── dist/                              # Production build
├── vercel.json                        # Vercel config
├── .env.local                         # Environment variables
├── .env.example                       # Env template
├── DEPLOY_VERCEL.md                   # Deployment guide
├── README_PRODUCTION.md               # Full documentation
└── package.json                       # Dependencies
```

---

## 📖 Smart Contract

**Network:** Sepolia Testnet  
**Address:** `0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47`  
**View on:** [Sepolia Etherscan](https://sepolia.etherscan.io/address/0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47)

### Key Functions
```solidity
verifyContent(string hash, bool isAI)        // Register content
getContent(string hash)                      // Query details
updateAIStatus(string hash, bool newIsAI)    // Update status
reportFalseStatus(string hash)               // Report claim
getReputation(address creator)               // Check reputation
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **"Wrong Network!" Error** | Switch MetaMask to Sepolia Testnet |
| **"Contract not found"** | Verify Sepolia testnet is selected |
| **Transaction fails** | Get free Sepolia ETH from [faucets](https://www.sepoliafaucet.com/) |
| **Build error** | Run `npm install && npm run build` |

---

## 📚 Resources

- 🔗 [Ethereum Docs](https://ethereum.org/developers/docs)
- 🦊 [MetaMask](https://metamask.io/)
- 📦 [ethers.js Documentation](https://docs.ethers.org/)
- ⚛️ [React Documentation](https://react.dev/)
- ⚡ [Vite Guide](https://vitejs.dev/)
- 🚀 [Vercel Deployment](https://vercel.com/docs)
- 🌐 [Sepolia Faucet](https://www.sepoliafaucet.com/)

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork → Clone → Branch → Commit → Push → Pull Request
git checkout -b feature/your-feature
git commit -m "Add your feature"
git push origin feature/your-feature
```

---

## 📝 License

MIT License - [See LICENSE](LICENSE)

---

## 🎯 Status

- ✅ Smart contract deployed (Sepolia)
- ✅ Frontend production-ready
- ✅ Environment variables configured
- ✅ Error handling implemented
- ✅ Build verified
- ✅ Ready for Vercel deployment

---

## 💡 Quick Tips

- **First time?** Start with [`DEPLOY_VERCEL.md`](./DEPLOY_VERCEL.md)
- **Need details?** Read [`README_PRODUCTION.md`](./README_PRODUCTION.md)
- **Have questions?** Open an [issue](https://github.com/arch5d/AuthLedger-AI-Content-Verifier/issues)

---

<div align="center">

Built with ❤️ using React, Vite & Ethereum

[⭐ Star us on GitHub](https://github.com/arch5d/AuthLedger-AI-Content-Verifier) • [🐛 Report Bug](https://github.com/arch5d/AuthLedger-AI-Content-Verifier/issues) • [💬 Discuss](https://github.com/arch5d/AuthLedger-AI-Content-Verifier/discussions)

</div>
