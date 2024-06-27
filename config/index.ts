"use client";
import { cookieStorage, createStorage } from "wagmi";
import { getDefaultConfig, Chain } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli
} from "wagmi/chains";
import { aura } from "./aura-chain";
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';

// Create wagmiConfig
export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: projectId,
  chains: [aura],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
});
