import React, { createContext, useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import { abi, contractAddress, networkId, networkName } from "../ContractConfig";

export const ContractContext = createContext();

export function ContractProvider({ children }) {
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [error, setError] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  async function connectWallet() {
    setError(null);
    setIsConnecting(true);

    try {
      if (!window.ethereum) {
        setError("Please install MetaMask");
        setIsConnecting(false);
        return;
      }

      const provider = new BrowserProvider(window.ethereum);
      
      // Check network
      const network = await provider.getNetwork();
      if (network.chainId !== networkId) {
        setError(
          `Wrong network! Switch to ${networkName} (Chain ID: ${networkId}). Currently on: ${network.name}`
        );
        setIsConnecting(false);
        return;
      }

      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      
      if (!contractAddress) {
        setError("Contract address not configured");
        setIsConnecting(false);
        return;
      }

      const contractInstance = new Contract(contractAddress, abi, signer);

      setSigner(signer);
      setAddress(userAddress);
      setContract(contractInstance);
    } catch (err) {
      console.error("Wallet connection error:", err);
      setError(err.message || "Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  }

  return (
    <ContractContext.Provider
      value={{ 
        signer, 
        address, 
        contract, 
        connectWallet,
        error,
        isConnecting,
        networkName,
        contractAddress
      }}
    >
      {children}
    </ContractContext.Provider>
  );
}
