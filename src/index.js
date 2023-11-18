import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { configureConnection } from '@puzzlehq/sdk';
import { BrowserRouter as Router } from "react-router-dom";
import "core-js/stable/index.js";
import "regenerator-runtime/runtime.js";
import store from "./store";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

const projectId = '630093679339d9e6a59508feafbae4ce'

// 2. Create wagmiConfig
const metadata = {
  name: 'ARoulette',
  url: 'http://localhost:3000',
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

configureConnection({
  dAppName: "ZK-casino",
  dAppUrl:  "http://localhost:3000/",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig config={wagmiConfig}>
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  </WagmiConfig>
);
