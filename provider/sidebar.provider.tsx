import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext({
  type: '',
  isSidebarOpen: false,
  toggleSidebar: () => {},
  setTypeForm: (newtype) => {},
});

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [type, setType] = useState('CREATE_IP_ASSET');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const setTypeForm = (newtype) => {
    setType(newtype);
    setIsSidebarOpen(true);
  };

  return (
    <SidebarContext.Provider
      value={{ type, isSidebarOpen, toggleSidebar, setTypeForm }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
