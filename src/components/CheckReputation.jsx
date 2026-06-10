import React, { useState, useContext } from 'react';
import { ContractContext } from './ContractProvider';

export default function CheckReputation() {
  const { contract, address, error } = useContext(ContractContext);
  const [repAddress, setRepAddress] = useState('');
  const [repResult, setRepResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [txError, setTxError] = useState('');

  const handleGetReputation = async () => {
    setTxError('');
    setRepResult('');

    if (!address) {
      setTxError("Connect wallet first!");
      return;
    }

    if (!contract) {
      setTxError("Contract not initialized!");
      return;
    }

    if (!repAddress.trim()) {
      setTxError("Please enter a creator address!");
      return;
    }

    setLoading(true);
    try {
      const reputation = await contract.getReputation(repAddress);
      setRepResult(`⭐ Reputation: ${reputation.toString()}`);
    } catch (err) {
      console.error(err);
      setTxError(err.reason || err.message || "Failed to get reputation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <h2>→ Check Reputation</h2>
      {error && <div style={{ color: '#ff6b6b', padding: '10px', backgroundColor: '#ffe0e0', borderRadius: '4px', marginBottom: '10px' }}>⚠️ {error}</div>}
      <input
        type="text"
        value={repAddress}
        onChange={(e) => setRepAddress(e.target.value)}
        placeholder="Creator Address (0x...)"
        disabled={loading}
      />
      <button onClick={handleGetReputation} disabled={loading || !address}>{loading ? '⏳ Loading...' : 'Get Reputation'}</button>
      {txError && <div style={{ color: '#ff6b6b', marginTop: '10px' }}>❌ {txError}</div>}
      {repResult && <div style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>{repResult}</div>}
    </section>
  );
}
