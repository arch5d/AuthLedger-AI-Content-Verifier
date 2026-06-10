import React, { useContext } from 'react';
import { ContractContext } from './ContractProvider';

export default function ConnectWallet() {
  const { connectWallet, address, error, isConnecting, networkName } = useContext(ContractContext);

  return (
    <section id="wallet-section">
      <button 
        id="connectButton" 
        onClick={connectWallet}
        disabled={isConnecting}
      >
        {isConnecting ? "Connecting..." : address ? "Connected" : "Connect Wallet"}
      </button>
      <div id="walletAddress">
        {address && <p>✅ Wallet: {address.slice(0, 6)}...{address.slice(-4)}</p>}
        {address && <p>🌐 Network: {networkName}</p>}
      </div>
      {error && <div style={{ color: '#ff6b6b', marginTop: '10px', padding: '10px', backgroundColor: '#ffe0e0', borderRadius: '4px' }}>
        ⚠️ {error}
      </div>}
    </section>
  );
}
