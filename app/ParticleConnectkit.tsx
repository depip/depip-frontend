"use client";

import { ConnectKitProvider, createConfig } from "@particle-network/connectkit";
import { authWalletConnectors } from "@particle-network/connectkit/auth";
// import { sepolia } from "@particle-network/connectkit/chains";
import { evmWalletConnectors } from "@particle-network/connectkit/evm";
import { wallet, EntryPosition } from "@particle-network/connectkit/wallet";
import React from "react";
import { aa } from "@particle-network/connectkit/aa";
import { storytestnet } from "@/config/chain";

const config = createConfig({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY || "",
  appId: process.env.NEXT_PUBLIC_APP_ID || "",
  appearance: {
    recommendedWallets: [
      { walletId: "metaMask", label: "Recommended" },
      //   { walletId: "coinbaseWallet", label: "popular" },
    ],
    splitEmailAndPhone: false,
    collapseWalletList: false,
    hideContinueButton: false,
    connectorsOrder: ["wallet", "email", "phone", "social"],
    language: "en-US",
    mode: "light",
    theme: {
      "--pcm-accent-color": "#ff4d4f",
    },
    logo: false,
    filterCountryCallingCode: (countries) => {
      return countries.filter((item) => item === "US");
    },
  },
  walletConnectors: [
    evmWalletConnectors({
      metadata: { name: "Depip", icon: "", description: "", url: "" },
      walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID || "",
    }),
  ],
  plugins: [
    aa({
      name: "SIMPLE",
      version: "2.0.0",
    }),
    wallet({
      entryPosition: EntryPosition.BR,
      visible: false,
    }),
  ],
  chains: [storytestnet],
});

export const ParticleConnectkit = ({ children }: React.PropsWithChildren) => {
  return <ConnectKitProvider config={config}>{children}</ConnectKitProvider>;
};
