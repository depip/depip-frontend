import Link from "next/link";
import ConnectButtonC from "./connect-button";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";
import logoDepip from "@/assets/images/logo-depip.svg";

const Navnar = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, [theme]);

  return (
    <>
      <nav className="fixed z-30 top-0 left-0 w-screen">
        <div className="flex flex-wrap justify-between items-center p-6">
          <Link href="/" className="flex items-center">
            <Image
              src={logoDepip}
              alt="withdrawIcon"
              height={logoDepip?.height}
            ></Image>
          </Link>
          <div className="hidden lg:flex lg:items-center"></div>
          <div className="flex items-center"></div>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <ConnectButtonC></ConnectButtonC>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navnar;
