import React from 'react';
import './style.css';
import { ContractProvider } from './components/ContractProvider';
import ConnectWallet from './components/ConnectWallet';
import VerifyContent from './components/VerifyContent';
import GetContent from './components/GetContent';
import UpdateStatus from './components/UpdateStatus';
import ReportFalseStatus from './components/ReportFalseStatus';
import CheckReputation from './components/CheckReputation';

function App() {
  return (
    <ContractProvider>
      <div className="container">
        {/* HERO SECTION */}
        <header className="hero">
          <div className="hero-badge">✩ Powered by Ethereum</div>
          <h1>↪AuthLedger▶▷</h1>
          <p className="hero-subtitle">The Future of Content Authentication</p>
          <p className="hero-description">
            Verify content authenticity on-chain. Prove whether your content is AI-generated or human-made.
            Build trust in a world of deepfakes with immutable blockchain records.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Immutable Records</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">On-Chain Verified</span>
            </div>
            <div className="stat">
              <span className="stat-number">0ms</span>
              <span className="stat-label">Deployment Time</span>
            </div>
          </div>
        </header>

        {/* FEATURES OVERVIEW */}
        <section className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Instant Verification</h3>
            <p>Register any content on the Ethereum blockchain in seconds with permanent proof of authenticity</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚖</div>
            <h3>Community Trust</h3>
            <p>Reputation system ensures creators are accountable for their content status claims</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚿</div>
            <h3>Immutable History</h3>
            <p>Every verification is permanent and transparent on the blockchain, no takesies backsies</p>
          </div>
        </section>

        {/* MAIN WALLET SECTION */}
        <section id="wallet-section" className="wallet-hero">
          <ConnectWallet />
        </section>

        {/* OPERATIONS SECTION */}
        <section className="operations-section">
          <h2 className="section-title">Core Operations</h2>
          <VerifyContent />
          <GetContent />
          <UpdateStatus />
        </section>

        {/* COMMUNITY SECTION */}
        <section className="community-section">
          <h2 className="section-title">Community & Reputation</h2>
          <ReportFalseStatus />
          <CheckReputation />
        </section>

        {/* STATS SECTION */}
        <section className="stats-section">
          <div className="stat-box">
            <h3>Why AuthLedger?</h3>
            <ul>
              <li>⦾ Transparent global verification system</li>
              <li>⧉ Decentralized reputation metrics</li>
              <li>⛓ Zero intermediaries, pure blockchain</li>
              <li>△ Sepolia Testnet (Ethereum network)</li>
              <li>⬲ Production-ready infrastructure</li>
            </ul>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <p>↪AuthLedger▶▷ : The blockchain-verified source of truth</p>
          <p className="footer-meta">Built on Ethereum | Powered by ethers.js | Secured by MetaMask</p>
        </footer>
      </div>
    </ContractProvider>
  );
}

export default App;
