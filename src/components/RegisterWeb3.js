import React, { useState, useEffect, useReducer } from "react";
import { ethers } from "ethers";
import { isConnected2MetaMask } from "../utils/eth-utils.js";
import { Citizen_address, Citizen_abi } from "../contracts/Citizen.js";

const web3Reducer = (state, action) => {
  switch (action.type) {
    case "SET_isWeb3":
      return { ...state, isWeb3: action.isWeb3 };
    case "SET_isEnabled":
      return { ...state, isEnabled: action.isEnabled };
    case "SET_account":
      return { ...state, account: action.account };
    case "SET_provider":
      return { ...state, provider: action.provider };
    case "SET_network":
      return { ...state, network: action.network };
    case "SET_signer":
      return { ...state, signer: action.signer };
    case "SET_balance":
      return { ...state, balance: action.balance };
    default:
      throw new Error(`Unhandled action ${action.type} in web3Reducer`);
  }
};

const web3InitialState = {
  isWeb3: false,
  isEnabled: false,
  account: ethers.constants.AddressZero,
  provider: null,
  signer: null,
  network: null,
  balance: "0",
};

const RegisterWeb3 = () => {
  const [web3State, web3Dispatch] = useReducer(web3Reducer, web3InitialState);

  //! Check if Web3 is injected
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      web3Dispatch({ type: "SET_isWeb3", isWeb3: true });
    } else {
      web3Dispatch({ type: "SET_isWeb3", isWeb3: false });
    }
  }, []);

  //! Check if already connected to MetaMask
  useEffect(() => {
    const isConnected = async () => {
      const account = await isConnected2MetaMask();
      if (account) {
        web3Dispatch({ type: "SET_isEnabled", isEnabled: true });
        web3Dispatch({ type: "SET_account", account: account });
      } else {
        web3Dispatch({ type: "SET_isEnabled", isEnabled: false });
      }
    };
    if (web3State.isWeb3) {
      isConnected();
    }
  }, [web3State.isWeb3]);

  return (
    <div className="row vh-100 justify-content-center">
      <div className="col align-self-center">
        <h1 className="display-1 text-center">Welcome Citizen</h1>
        <p className="text-center">Account to register :</p>
        <p className="text-center">test2</p>
        <p className="text-center">test3</p>
      </div>
    </div>
  );
};

export default RegisterWeb3;
