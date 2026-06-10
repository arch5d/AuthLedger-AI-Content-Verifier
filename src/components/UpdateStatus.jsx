import React, { useState, useContext } from 'react';
import { ContractContext } from './ContractProvider';

export default function UpdateStatus() {
  const { contract, address, error } = useContext(ContractContext);
  const [updateHash, setUpdateHash] = useState('');
  const [newIsAI, setNewIsAI] = useState(false);
  const [loading, setLoading] = useState(false);
  const [txError, setTxError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpdate = async () => {
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

    if (!updateHash.trim()) {
      setTxError("Please enter a content hash!");
      return;
    }

    setLoading(true);
    try {
      const tx = await contract.updateAIStatus(updateHash, newIsAI);
      await tx.wait();
      setSuccess("✅ Status Updated!");
      setUpdateHash('');
      setNewIsAI(false);
    } catch (err) {
      console.error(err);
      setTxError(err.reason || err.message || "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <h2>→ Update AI Status</h2>
      {error && <div style={{ color: '#ff6b6b', padding: '10px', backgroundColor: '#ffe0e0', borderRadius: '4px', marginBottom: '10px' }}>⚠️ {error}</div>}
      <input
        type="text"
        value={updateHash}
        onChange={(e) => setUpdateHash(e.target.value)}
        placeholder="Content Hash"
        disabled={loading}
      />
      <label>
        <input
          type="checkbox"
          checked={newIsAI}
          onChange={(e) => setNewIsAI(e.target.checked)}
          disabled={loading}
        />
        New AI Status
      </label>
      <button onClick={handleUpdate} disabled={loading || !address}>{loading ? '⏳ Updating...' : 'Update Status'}</button>
      {txError && <div style={{ color: '#ff6b6b', marginTop: '10px' }}>❌ {txError}</div>}
      {success && <div style={{ color: '#51cf66', marginTop: '10px' }}>{success}</div>}
    </section>
  );
}
