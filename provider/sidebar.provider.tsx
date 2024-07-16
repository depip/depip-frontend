import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext({
  type: 1,
  isSidebarOpen: true,
  toggleSidebar: () => {},
  setTypeForm: (newtype) => {},
});

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [type, setType] = useState(1);

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
