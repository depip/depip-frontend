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
      <div className="container mx-auto mt-4">
        <div className="min-h-full">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
