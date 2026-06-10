import React, { useState, useContext } from 'react';
import { ContractContext } from './ContractProvider';

export default function VerifyContent() {
  const { contract, address, error } = useContext(ContractContext);
  const [contentHash, setContentHash] = useState('');
  const [isAI, setIsAI] = useState(false);
  const [loading, setLoading] = useState(false);
  const [txError, setTxError] = useState('');
  const [success, setSuccess] = useState('');

  const handleVerify = async () => {
    setTxError('');
    setSuccess('');

    if (!address) {
      setTxError("Connect wallet first!");
      return;
    }

    if (!contract) {
      setTxError("Contract not initialized!");
      return;
    }

    if (!contentHash.trim()) {
      setTxError("Please enter a content hash!");
      return;
    }

    setLoading(true);
    try {
      const tx = await contract.verifyContent(contentHash, isAI);
      await tx.wait();
      setSuccess("✅ Content Verified!");
      setContentHash('');
      setIsAI(false);
    } catch (err) {
      console.error(err);
      setTxError(err.reason || err.message || "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <h2>✅ Verify Content</h2>
      {error && <div style={{ color: '#ff6b6b', padding: '10px', backgroundColor: '#ffe0e0', borderRadius: '4px', marginBottom: '10px' }}>⚠️ {error}</div>}
      <input
        type="text"
        value={contentHash}
        onChange={(e) => setContentHash(e.target.value)}
        placeholder="Content Hash"
        disabled={loading}
      />
      <label>
        <input
          type="checkbox"
          checked={isAI}
          onChange={(e) => setIsAI(e.target.checked)}
          disabled={loading}
        />
        Mark as AI-generated
      </label>
      <button onClick={handleVerify} disabled={loading || !address}>{loading ? '⏳ Verifying...' : 'Verify'}</button>
      {txError && <div style={{ color: '#ff6b6b', marginTop: '10px' }}>❌ {txError}</div>}
      {success && <div style={{ color: '#51cf66', marginTop: '10px' }}>{success}</div>}
    </section>
  );
}
