# 🧭AuthLedger - ContentVerifier DApp

A decentralized application (DApp) to verify content authenticity on Ethereum blockchain. Users can prove if content is AI-generated or human-made, track creator reputation, and report false claims.

**🚀 Status: Ready for Production Deployment**

---

## ✨ Features

- ✅ **Verify Content** - Register content hash on blockchain with AI/Human status
- ✅ **Query Content** - Look up any content's verification details
- ✅ **Update Status** - Creators can update their content's AI status
- ✅ **Report False Claims** - Community-driven reputation system
- ✅ **Check Reputation** - View creator reputation scores
- ✅ **MetaMask Integration** - Secure wallet connection
- ✅ **Network Validation** - Automatic network checking
- ✅ **Error Handling** - User-friendly error messages

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| **Frontend** | React 19 + Vite |
| **Blockchain** | Ethereum / Sepolia Testnet |
| **Smart Contract** | Solidity 0.8.19 |
| **Web3** | ethers.js v6 |
| **Wallet** | MetaMask |
| **Deployment** | Vercel |

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173`

### 3. Connect MetaMask
- Make sure MetaMask is installed
- Switch to **Sepolia Testnet** in MetaMask
- Click "Connect Wallet" button

### 4. Get Test ETH (Optional)
Get free Sepolia ETH from [faucets](https://www.sepoliafaucet.com/)

---

## 🌐 Environment Configuration

The app uses environment variables for flexibility. Default is Sepolia Testnet.

### `.env.local` (Local Development)
```bash
VITE_CONTRACT_ADDRESS=0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47
VITE_NETWORK_ID=11155111
VITE_NETWORK_NAME=Sepolia
```

### Vercel Environment Variables
Set these in Vercel dashboard → Project Settings → Environment Variables

**For Sepolia Testnet (Default):**
```
VITE_CONTRACT_ADDRESS=0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47
VITE_NETWORK_ID=11155111
VITE_NETWORK_NAME=Sepolia
```

**For Ethereum Mainnet:**
```
VITE_CONTRACT_ADDRESS=0xYOUR_MAINNET_ADDRESS
VITE_NETWORK_ID=1
VITE_NETWORK_NAME=Ethereum Mainnet
```

---

## 📦 Available Scripts

```bash
# Development
npm run dev        # Start dev server with HMR

# Production
npm run build      # Build for production (creates /dist)
npm run preview    # Preview production build locally

# Code Quality
npm run lint       # Check code with ESLint
```

---

## 🎯 Deployment Guide

### Deploy to Vercel (Easiest)

**See [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md) for detailed steps**

Quick version:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables (see above)
5. Click "Deploy" 🎉

Your app will be live at: `https://YOUR_VERCEL_URL.vercel.app`

### Deploy to Other Platforms
- **Netlify**: Drag & drop `/dist` folder
- **GitHub Pages**: Push `/dist` to `gh-pages` branch
- **Self-hosted**: Serve `/dist` with any static server

---

## 📋 Project Structure

```
content-verifier-react/
├── src/
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   ├── style.css              # Global styles
│   ├── ContractConfig.js      # Smart contract config
│   └── components/
│       ├── ContractProvider.jsx       # Web3 context
│       ├── ConnectWallet.jsx          # Wallet connection
│       ├── VerifyContent.jsx          # Verify new content
│       ├── GetContent.jsx             # Query content
│       ├── UpdateStatus.jsx           # Update content status
│       ├── ReportFalseStatus.jsx      # Report false claims
│       └── CheckReputation.jsx        # View reputation
├── public/                    # Static assets
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment config
├── .env.local                # Local env variables
├── .env.example              # Env template
└── package.json              # Dependencies
```

---

## 🔧 Smart Contract

**Address (Sepolia):** `0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47`

**Key Functions:**
- `verifyContent(hash, isAI)` - Register content
- `getContent(hash)` - Query content details
- `updateAIStatus(hash, newIsAI)` - Update status (creator only)
- `reportFalseStatus(hash)` - Report false claims
- `getReputation(address)` - Check reputation

**Source:** See GitHub repository for full contract code

---

## 🐛 Troubleshooting

### "Wrong Network!" Error
- MetaMask is on wrong network
- **Fix:** Switch to Sepolia Testnet in MetaMask
- Or update environment variables for your network

### "Contract address not configured"
- Environment variables not set
- **Fix:** 
  - Locally: Create `.env.local` with `VITE_CONTRACT_ADDRESS`
  - Vercel: Add environment variables in project settings

### Transactions Failing
- Not enough gas (ETH balance too low)
- **Fix:** Get free testnet ETH from [faucets](https://www.sepoliafaucet.com/)

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📚 Resources

- 🌐 [Ethereum Docs](https://ethereum.org/)
- 🦊 [MetaMask](https://metamask.io/)
- 📦 [ethers.js Docs](https://docs.ethers.org/)
- ⚛️ [React Docs](https://react.dev/)
- ⚡ [Vite Docs](https://vitejs.dev/)
- 🚀 [Vercel Docs](https://vercel.com/docs)

---

## 🤝 Contributing

Contributions welcome! Open an issue or PR.

---

## 📝 License

MIT License - See LICENSE file for details

---

## ✅ Pre-Deployment Checklist

- [x] Environment variables configured
- [x] Error handling added throughout
- [x] Network validation implemented
- [x] Build succeeds (`npm run build`)
- [x] MetaMask integration working
- [x] Components responsive
- [x] Vercel config created
- [x] Documentation complete

**Ready to Deploy! 🚀**

---

## 🎉 Deploy Now

1. **Follow:** [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md)
2. **Share:** Your live URL with users
3. **Scale:** Update contract address when deploying to mainnet

**Questions?** Check troubleshooting section or open an issue.
