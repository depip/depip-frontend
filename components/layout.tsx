import { FC, ReactNode } from "react";
import Navbar from "./navbar";
import SideBar from "./sidebar";
import Login from "./login";
import { useAccount } from "wagmi";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { address, isConnected } = useAccount();
  return (
    <>
      {isConnected ? (
        <>
          <Navbar />
          <SideBar />
          <div className="lg:ml-[361px] h-screen">
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
