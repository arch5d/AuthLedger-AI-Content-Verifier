import React, { useState, useContext } from 'react';
import { ContractContext } from './ContractProvider';

export default function GetContent() {
  const { contract, address, error } = useContext(ContractContext);
  const [getHash, setGetHash] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [txError, setTxError] = useState('');

  const handleGet = async () => {
    setTxError('');
    setResult('');

    if (!address) {
      setTxError("Connect wallet first!");
      return;
    }

    if (!contract) {
      setTxError("Contract not initialized!");
      return;
    }

    if (!getHash.trim()) {
      setTxError("Please enter a content hash!");
      return;
    }

    setLoading(true);
    try {
      const content = await contract.getContent(getHash);
      if (!content.hash || content.hash.trim() === "") {
        setTxError("Content not found on-chain. Please verify it first.");
        return;
      }
      setResult(JSON.stringify(content, null, 2));
    } catch (err) {
      console.error(err);
      setTxError(err.reason || err.message || "Failed to retrieve content");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <h2>🔎 Get Content Info</h2>
      {error && <div style={{ color: '#ff6b6b', padding: '10px', backgroundColor: '#ffe0e0', borderRadius: '4px', marginBottom: '10px' }}>⚠️ {error}</div>}
      <input
        type="text"
        value={getHash}
        onChange={(e) => setGetHash(e.target.value)}
        placeholder="Content Hash"
        disabled={loading}
      />
      <button onClick={handleGet} disabled={loading || !address}>{loading ? '⏳ Loading...' : 'Get Info'}</button>
      {txError && <div style={{ color: '#ff6b6b', marginTop: '10px' }}>❌ {txError}</div>}
      {result && <pre style={{ marginTop: '10px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px', overflow: 'auto' }}>{result}</pre>}
    </section>
  );
}
