"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useAccount, useSmartAccount } from "@particle-network/connectkit";
import { useEthereum } from "@particle-network/auth-core-modal";
import {
  SmartAccount,
  Transaction,
  IEthereumProvider,
} from "@particle-network/aa";
import { Ethereum, EthereumSepolia } from "@particle-network/chains";
import { particleAuth } from "@particle-network/auth-core";
import { sepolia } from "viem/chains";

const chatContext = createContext({
  dataChat: {},
  setDataChat: (data) => {},
  sessionId: "",
  setSessionId: (data) => {},
  sessionContent: [],
  setSessionContent: (data) => {},
});

export const ChatProvider = ({ children }) => {
  const [dataChat, setDataChat] = useState({});
  const [sessionId, setSessionId] = useState("");
  const [sessionContent, setSessionContent] = useState([]);
  const { address, isConnected, chainId } = useAccount();
  useEffect(() => {
    try {
      if (!address) return;
      const listChat = window.localStorage.getItem(address);
      let jsonChat = listChat ? JSON.parse(listChat) : [];
      if (jsonChat) {
        jsonChat = jsonChat.filter((item) => item.sessionId !== sessionId);
      }
      jsonChat.push({ sessionId: sessionId, content: sessionContent });
      jsonChat = JSON.stringify(jsonChat);
      window.localStorage.setItem(address, jsonChat);
    } catch (error) {
      console.error(error);
    }
  }, [sessionContent]);

  // particleAuth.init({
  //   projectId: "5d018b10-2afc-429e-acc0-0b0c23fe9644",
  //   clientKey: "cyIWpawiBIYOv9eK9uS62pEU1qa2STxzHZkpAFKT",
  //   appId: "smKDgFFoeKHX3qkw55rI9pX3nqMKwNVgmM6AIgYx",
  //   chains: [sepolia],
  // });

  // const { provider } = useEthereum();

  // const newSmartAccount = async () => {
  //   const smartAccount = new SmartAccount(provider, {
  //     projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
  //     clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY as string,
  //     appId: process.env.NEXT_PUBLIC_APP_ID as string,
  //     aaOptions: {
  //       accountContracts: {
  //         BICONOMY: [
  //           {
  //             version: "2.0.0",
  //             chainIds: [Ethereum.id, EthereumSepolia.id],
  //           },
  //         ],
  //       },
  //       // paymasterApiKeys: [
  //       //   {
  //       //     // Optional
  //       //     chainId: 1,
  //       //     apiKey: "Biconomy Paymaster API Key",
  //       //   },
  //       // ],
  //     },
  //   });
  //   smartAccount.setSmartAccountContract({
  //     name: "BICONOMY",
  //     version: "2.0.0",
  //   });
  //   const address = await smartAccount.getAddress();
  //   console.log("address smartAccount");
  //   console.log(address);
  //   // const sessionKey = await smartAccount.createSessions([
  //   //   {
  //   //     validUntil: 0,
  //   //     validAfter: 0,
  //   //     sessionValidationModule: "0x8E09744b738e9Fec4A4df7Ab5621f1857F6Fa175",
  //   //     sessionKeyDataInAbi: [
  //   //       ["address", "address", "uint256"],
  //   //       [account, address, 1],
  //   //     ],
  //   //   },
  //   // ]);
  //   // console.log(sessionKey);
  //   // setSessionId(sessionKey[0]);

  //   // await smartAccount.sendTransaction({
  //   //   tx: sessionKey.transactions as Transaction[],
  //   // });
  // };

  return (
    <chatContext.Provider
      value={{
        dataChat,
        setDataChat,
        sessionId,
        setSessionId,
        sessionContent,
        setSessionContent,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};

export const useChat = () => useContext(chatContext);
