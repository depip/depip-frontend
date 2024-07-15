import React, { createContext, useState, useContext } from "react";

const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

// Tạo một Provider cho context này
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
