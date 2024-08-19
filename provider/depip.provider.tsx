"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useAccount, useSmartAccount } from "@particle-network/connectkit";
import { IChat } from "@/types/types";
const depipContext = createContext({
  dataChat: null,
  setDataChat: (a) => {},
  sessionId: "",
  setSessionId: (a) => {},
  sessionContent: [],
  setSessionContent: (a) => {},
  smartAddress: "",
  setSmartAddress: (a) => {},
  sessionKey: null,
  setSessionKey: (a) => {},
  isSubmit: false,
  setIsSubmit: (a) => {},
});

export const DepipProvider = ({ children }) => {
  const [dataChat, setDataChat] = useState<IChat>(null);
  const [sessionId, setSessionId] = useState("");
  const [sessionContent, setSessionContent] = useState<IChat[]>([]);
  const [smartAddress, setSmartAddress] = useState("");
  const [sessionKey, setSessionKey] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const { address } = useAccount();
  useEffect(() => {
    try {
      if (!address) return;
      if (sessionContent && sessionContent.length > 0) {
        const listChat = window.localStorage.getItem(address);
        let jsonChat = listChat ? JSON.parse(listChat) : [];
        if (jsonChat) {
          jsonChat = jsonChat.filter((item) => item.sessionId !== sessionId);
        }
        jsonChat.unshift({ sessionId: sessionId, content: sessionContent });
        jsonChat = JSON.stringify(jsonChat);
        window.localStorage.setItem(address, jsonChat);
      }
    } catch (error) {
      console.error(error);
    }
  }, [sessionContent]);
  const smartAccount = useSmartAccount();
  const createSession = async () => {
    const _sessionKey = await smartAccount?.createSessions([
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

    await smartAccount?.sendTransaction(_sessionKey?.verifyingPaymasterGasless);
    setSessionKey(_sessionKey.sessions);
    window.localStorage.setItem(
      "sessionKey",
      JSON.stringify(_sessionKey.sessions)
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
      } else {
        const _sessionKey = JSON.parse(sessionKey);
        setSessionKey(_sessionKey);
      }
    }
  }, [smartAccount]);
  return (
    <depipContext.Provider
      value={{
        dataChat,
        setDataChat,
        sessionId,
        setSessionId,
        sessionContent,
        setSessionContent,
        smartAddress,
        setSmartAddress,
        sessionKey,
        setSessionKey,
        isSubmit,
        setIsSubmit,
      }}
    >
      {children}
    </depipContext.Provider>
  );
};

export const useDepip = () => useContext(depipContext);
