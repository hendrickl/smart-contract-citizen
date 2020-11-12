import { ethers } from "ethers";

// If connected to MetaMask returns the current account
// else return null
export const isConnected2MetaMask = async () => {
  //  If not connected accounts will be an empty array
  const accounts = await window.ethereum.request({
    method: "eth_accounts",
  });
  if (accounts.length === 0) {
    return null;
  }
  return accounts[0];
};
