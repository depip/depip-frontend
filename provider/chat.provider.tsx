import React, { createContext, useState, useContext } from "react";

const chatContext = createContext({
  dataChat: "",
  setDataChat: (data) => {},
  sessionId: "",
  setSessionId: (data) => {},
});

export const ChatProvider = ({ children }) => {
  const [dataChat, setDataChat] = useState("");
  const [sessionId, setSessionId] = useState("1");

  return (
    <chatContext.Provider value={{ dataChat, setDataChat, sessionId, setSessionId }}>
      {children}
    </chatContext.Provider>
  );
};

export const useChat = () => useContext(chatContext);
