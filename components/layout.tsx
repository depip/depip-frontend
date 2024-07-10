import { FC, ReactNode, useState } from "react";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import Login from "./login";
import { useAccount } from "wagmi";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { address, isConnected } = useAccount();
  return (
    <>
      {isConnected ? (
        <>
          <Navbar onClick={() => setIsOpen(true)} />
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
          <div className="lg:ml-[360px] h-screen bg-stone-50">
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
