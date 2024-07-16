import React, { createContext, useState, useContext } from "react";

const chatContext = createContext({
  dataChat: "",
  setDataChat: (data) => {},
});

export const ChatProvider = ({ children }) => {
  const [dataChat, setDataChat] = useState("");

  return (
    <chatContext.Provider value={{ dataChat, setDataChat }}>
      {children}
    </chatContext.Provider>
  );
};

export const useChat = () => useContext(chatContext);
