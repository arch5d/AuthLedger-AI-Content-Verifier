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
        <header>
          <h1>🔥 ContentVerifier DApp</h1>
          <p>Verify AI vs Human Content on Ethereum</p>
        </header>
        <ConnectWallet />
        <VerifyContent />
        <GetContent />
        <UpdateStatus />
        <ReportFalseStatus />
        <CheckReputation />
        <footer>
          <p>⚡ Built on Ethereum | Connect with MetaMask</p>
        </footer>
      </div>
    </ContractProvider>
  );
}

export default App;
