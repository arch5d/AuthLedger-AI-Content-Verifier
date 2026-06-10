# 🚀 Deploy to Vercel

This guide will help you deploy the ContentVerifier DApp to Vercel and make it accessible to anyone.

## Prerequisites

- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))
- This repository

## Step 1: Push to GitHub

1. Create a new GitHub repository
2. Push this code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: ContentVerifier DApp"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project ✅
5. Add Environment Variables:
   - `VITE_CONTRACT_ADDRESS` = `0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47`
   - `VITE_NETWORK_ID` = `11155111`
   - `VITE_NETWORK_NAME` = `Sepolia`
6. Click "Deploy" 🎉

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## Step 3: Configure Environment Variables

If you want to use a different network or contract:

1. Go to your Vercel project
2. Settings → Environment Variables
3. Update values:
   - For **Mainnet**: 
     - `VITE_CONTRACT_ADDRESS` = your deployed mainnet contract
     - `VITE_NETWORK_ID` = `1`
     - `VITE_NETWORK_NAME` = `Ethereum Mainnet`
   - For **Sepolia Testnet** (default):
     - `VITE_CONTRACT_ADDRESS` = `0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47`
     - `VITE_NETWORK_ID` = `11155111`
     - `VITE_NETWORK_NAME` = `Sepolia`

4. Redeploy: Go to Deployments → latest → click the "..." menu → "Redeploy"

## Step 4: Share Your App

Your deployed app will be at: `https://YOUR_VERCEL_URL.vercel.app`

Share this link with users!

## For Others: How to Modify the Contract Address

If someone wants to use this DApp with their own contract:

1. Clone/fork the repository
2. Update `.env.local`:
```
VITE_CONTRACT_ADDRESS=0xTHEIR_CONTRACT_ADDRESS
VITE_NETWORK_ID=1
VITE_NETWORK_NAME=Ethereum Mainnet
```
3. Deploy their own version to Vercel following steps above

## Troubleshooting

**Error: "Wrong network!"**
- Switch MetaMask to Sepolia testnet
- Or update environment variables to match your network

**Error: "Contract address not configured"**
- Check environment variables on Vercel are set correctly
- Wait for new deployment to complete

**App deployed but contract calls fail**
- Make sure MetaMask is connected to the correct network
- Verify contract address is deployed on that network
- Check you have some ETH for gas fees (even on testnet)

## Summary

✅ Environment variables configured  
✅ Error handling added  
✅ Network validation enabled  
✅ Ready to deploy on Vercel  
✅ Production-ready!

Enjoy! 🎉
