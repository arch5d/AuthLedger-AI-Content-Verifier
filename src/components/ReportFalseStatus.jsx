import React, { useState, useContext } from 'react';
import { ContractContext } from './ContractProvider';

export default function ReportFalseStatus() {
  const { contract, address, error } = useContext(ContractContext);
  const [reportHash, setReportHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [txError, setTxError] = useState('');
  const [success, setSuccess] = useState('');

  const handleReport = async () => {
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

    if (!reportHash.trim()) {
      setTxError("Please enter a content hash!");
      return;
    }

    setLoading(true);
    try {
      const tx = await contract.reportFalseStatus(reportHash);
      await tx.wait();
      setSuccess("✅ Reported Successfully!");
      setReportHash('');
    } catch (err) {
      console.error(err);
      setTxError(err.reason || err.message || "Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="card">
      <h2>🚨 Report False Status</h2>
      {error && <div style={{ color: '#ff6b6b', padding: '10px', backgroundColor: '#ffe0e0', borderRadius: '4px', marginBottom: '10px' }}>⚠️ {error}</div>}
      <input
        type="text"
        value={reportHash}
        onChange={(e) => setReportHash(e.target.value)}
        placeholder="Content Hash"
        disabled={loading}
      />
      <button onClick={handleReport} disabled={loading || !address}>{loading ? '⏳ Reporting...' : 'Report'}</button>
      {txError && <div style={{ color: '#ff6b6b', marginTop: '10px' }}>❌ {txError}</div>}
      {success && <div style={{ color: '#51cf66', marginTop: '10px' }}>{success}</div>}
    </section>
  );
}
