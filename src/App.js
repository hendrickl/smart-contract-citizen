import React, { useState, useEffect, useReducer } from "react";
import { ethers } from "ethers";
import { isConnected2MetaMask } from "./utils/eth-utils";
import { Citizen_address, Citizen_abi } from "./Contracts/Citizen";

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center">Citizen DApp</h1>
    </div>
  );
}

export default App;
