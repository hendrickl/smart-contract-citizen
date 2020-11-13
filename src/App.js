import React, { useState, useEffect, useReducer } from "react";
import { ethers } from "ethers";
import { isConnected2MetaMask } from "./utils/eth-utils";
import { Citizen_address, Citizen_abi } from "./Contracts/Citizen.js";
import Register from "./components/Register";

function App() {
  return (
    <div className="container">
      <Register />;
    </div>
  );
}
export default App;
