import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { HarmonyShard0 } from "@thirdweb-dev/chains";
import "./styles/globals.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider supportedChains={[HarmonyShard0]} activeChain={HarmonyShard0} supportedWallets={[metamaskWallet()]}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);