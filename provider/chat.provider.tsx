"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useAccount } from "@particle-network/connectkit";
import { useEthereum } from "@particle-network/auth-core-modal";
import {
  SmartAccount,
  Transaction,
  IEthereumProvider,
} from "@particle-network/aa";
import { Ethereum, EthereumSepolia } from "@particle-network/chains";

const chatContext = createContext({
  dataChat: {},
  setDataChat: (data) => {},
  sessionId: "",
  setSessionId: (data) => {},
  sessionContent: [],
  setSessionContent: (data) => {},
  newSmartAccount: () => {},
});

export const ChatProvider = ({ children }) => {
  const [dataChat, setDataChat] = useState({});
  const [sessionId, setSessionId] = useState("");
  const [sessionContent, setSessionContent] = useState([]);
  const account = useAccount();
  useEffect(() => {
    try {
      if (!account) return;
      const listChat = window.localStorage.getItem(account);
      let jsonChat = listChat ? JSON.parse(listChat) : [];
      if (jsonChat) {
        jsonChat = jsonChat.filter((item) => item.sessionId !== sessionId);
      }
      jsonChat.push({ sessionId: sessionId, content: sessionContent });
      jsonChat = JSON.stringify(jsonChat);
      window.localStorage.setItem(account, jsonChat);
    } catch (error) {
      console.error(error);
    }
  }, [sessionContent]);

  const { provider } = useEthereum();

  const newSmartAccount = async () => {
    const smartAccount = new SmartAccount(provider, {
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
      clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY as string,
      appId: process.env.NEXT_PUBLIC_APP_ID as string,
      aaOptions: {
        accountContracts: {
          BICONOMY: [
            {
              version: "2.0.0",
              chainIds: [Ethereum.id, EthereumSepolia.id],
            },
          ],
        },
        // paymasterApiKeys: [
        //   {
        //     // Optional
        //     chainId: 1,
        //     apiKey: "Biconomy Paymaster API Key",
        //   },
        // ],
      },
    });
    smartAccount.setSmartAccountContract({
      name: "BICONOMY",
      version: "2.0.0",
    });
    const address = await smartAccount.getAddress();
    console.log("address smartAccount");
    console.log(address);
    // const sessionKey = await smartAccount.createSessions([
    //   {
    //     validUntil: 0,
    //     validAfter: 0,
    //     sessionValidationModule: "0x8E09744b738e9Fec4A4df7Ab5621f1857F6Fa175",
    //     sessionKeyDataInAbi: [
    //       ["address", "address", "uint256"],
    //       [account, address, 1],
    //     ],
    //   },
    // ]);
    // console.log(sessionKey);
    // setSessionId(sessionKey[0]);

    // await smartAccount.sendTransaction({
    //   tx: sessionKey.transactions as Transaction[],
    // });
  };

  return (
    <chatContext.Provider
      value={{
        dataChat,
        setDataChat,
        sessionId,
        setSessionId,
        sessionContent,
        setSessionContent,
        newSmartAccount,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};

export const useChat = () => useContext(chatContext);
