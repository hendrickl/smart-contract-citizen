import React, { useState, useEffect, useReducer } from "react";
import { ethers } from "ethers";
import { isConnected2MetaMask } from "./utils/eth-utils";
import { Citizen_address, Citizen_abi } from "./contracts/Citizen.js";
import RegisterWeb3 from "./components/RegisterWeb3";

function App() {
  return (
    <div className="container">
      <RegisterWeb3 />;
    </div>
  );
}
export default App;
