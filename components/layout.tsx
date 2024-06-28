import { FC, ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-full">
        <div className="p-4">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
