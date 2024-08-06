import React, { createContext, useState, useContext, useEffect } from "react";
import { useAccount } from "wagmi";

const chatContext = createContext({
  dataChat: "",
  setDataChat: (data) => {},
  sessionId: "",
  setSessionId: (data) => {},
  sessionContent: [],
  setSessionContent: (data) => {},
});

export const ChatProvider = ({ children }) => {
  const [dataChat, setDataChat] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [sessionContent, setSessionContent] = useState([]);
  const { address } = useAccount();
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
