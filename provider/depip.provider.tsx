"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import {
  useAccount,
  useDisconnect,
  useSmartAccount,
} from "@particle-network/connectkit";
import { IChat, IpAsset } from "@/types/types";
import { notification } from "antd";

const depipContext = createContext({
  dataChat: null,
  setDataChat: (a) => {},
  listIP: null,
  setListIP: (a) => {},
  reloadListIP: null,
  setReloadListIP: (a) => {},
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
  const [listIP, setListIP] = useState<IpAsset[]>([]);
  const [reloadListIP, setReloadListIP] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState("");
  const [sessionContent, setSessionContent] = useState<IChat[]>([]);
  const [smartAddress, setSmartAddress] = useState("");
  const [sessionKey, setSessionKey] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const { address, isDisconnected, isConnected } = useAccount();
  const disconnect = useDisconnect();
  useEffect(() => {
    try {
      if (!address) return;
      console.log(sessionId);
      if (sessionContent && sessionContent.length > 0) {
        const listChat = window.localStorage.getItem(address);
        let jsonChat = listChat ? JSON.parse(listChat) : [];
        if (jsonChat) {
          jsonChat = jsonChat.filter((item) => item.sessionId !== sessionId);
        }
        jsonChat.unshift({ sessionId: sessionId, content: sessionContent });
        jsonChat = JSON.stringify(jsonChat);
        window.localStorage.setItem(address, jsonChat);
        setDataChat(null);
      }
    } catch (error) {
      console.error(error);
    }
  }, [sessionContent]);
  const smartAccount = useSmartAccount();
  // const createSession = async () => {
  //   try {
  //     const _sessionKey = await smartAccount?.createSessions([
  //       {
  //         validUntil: 0,
  //         validAfter: 0,
  //         sessionValidationModule:
  //           process.env.NEXT_PUBLIC_SESSION_VALIDATE_MODULE || "",
  //         sessionKeyDataInAbi: [
  //           ["address", "address", "uint256"],
  //           [address, process.env.NEXT_PUBLIC_SESSION_ADDRESS || "", 100],
  //         ],
  //       },
  //     ]);

  //     await smartAccount?.sendTransaction(
  //       _sessionKey?.verifyingPaymasterGasless
  //     );
  //     setSessionKey(_sessionKey.sessions);
  //     window.localStorage.setItem(
  //       "sessionKey",
  //       JSON.stringify(_sessionKey.sessions)
  //     );
  //   } catch (error) {
  //     // disconnect.disconnect();
  //     notification.error({
  //       message: error.message
  //     });
  //   }
  // };

  const getSMAddress = async () => {
    const sMAddress = await smartAccount.getAddress();
    setSmartAddress(sMAddress);
  };

  useEffect(() => {
    if (smartAccount) {
      getSMAddress();
      // const sessionKey = window.localStorage.getItem("sessionKey");
      // if (!sessionKey) {
      //   createSession();
      // } else {
      //   const _sessionKey = JSON.parse(sessionKey);
      //   setSessionKey(_sessionKey);
      // }
    }
  }, [smartAccount]);
  // useEffect(() => {
  //   if (address) {
  //     localStorage.clear();
  //   }
  // }, [isConnected]);
  return (
    <depipContext.Provider
      value={{
        dataChat,
        setDataChat,
        listIP,
        setListIP,
        reloadListIP,
        setReloadListIP,
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
