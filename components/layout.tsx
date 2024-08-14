'use client'
import { FC, ReactNode, use, useEffect, useState } from "react";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import Login from "./login";
import { useChat } from "@/provider/chat.provider";
import { useAccount } from "@particle-network/connectkit";
type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  // const { smartAddress } = useChat();
  const { address, isConnected } = useAccount();
  return (
    <>
      {address ? (
        <>
          <Navbar onClick={() => setIsOpen(true)} />
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="lg:ml-[360px] h-screen bg-[#FAF9EF]">
            <main className="h-full">{children}</main>
          </div>
        </>
      ) : (
        <Login></Login>
      )}
    </>
  );
};

export default Layout;
