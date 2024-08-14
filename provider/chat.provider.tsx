"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useAccount, useSmartAccount } from "@particle-network/connectkit";

const chatContext = createContext({
  dataChat: {},
  setDataChat: (data) => {},
  sessionId: "",
  setSessionId: (data) => {},
  sessionContent: [],
  setSessionContent: (data) => {},
  smartAddress: "",
  setSmartAddress: (data) => {},
});

export const ChatProvider = ({ children }) => {
  const [dataChat, setDataChat] = useState({});
  const [sessionId, setSessionId] = useState("");
  const [smartAddress, setSmartAddress] = useState("");
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
  const smartAccount = useSmartAccount();
  const createSession = async () => {
    const sessionKey = await smartAccount?.createSessions([
      {
        validUntil: 0,
        validAfter: 0,
        sessionValidationModule: "0xB4AFbE412FD10cF1BFd57c5dcccdbE391352CF1b",
        sessionKeyDataInAbi: [
          ["address", "address", "uint256"],
          [address, "0xda9872016526f2dfa1F4de4C441fb57f4851630F", 100],
        ],
      },
    ]);

    await smartAccount?.sendTransaction(sessionKey?.verifyingPaymasterGasless);
    window.localStorage.setItem(
      "sessionKey",
      JSON.stringify(sessionKey.sessions)
    );
  };

  const getSMAddress = async () => {
    const sMAddress = await smartAccount.getAddress();
    console.log("SM Address:", sMAddress);
    setSmartAddress(sMAddress);
  };

  useEffect(() => {
    if (smartAccount) {
      getSMAddress();
      const sessionKey = window.localStorage.getItem("sessionKey");
      if (!sessionKey) {
        createSession();
      }
    }
  }, [smartAccount]);
  return (
    <chatContext.Provider
      value={{
        dataChat,
        setDataChat,
        sessionId,
        setSessionId,
        sessionContent,
        setSessionContent,
        smartAddress,
        setSmartAddress,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};

export const useChat = () => useContext(chatContext);
