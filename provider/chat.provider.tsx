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
