import Link from "next/link";
import Image from "next/image";
import logoDepip from "@/assets/images/logo-depip.svg";
import twitter from "@/assets/images/twitter.svg";
import facebook from "@/assets/images/facebook.svg";
import discord from "@/assets/images/discord.svg";

const Navbar = () => {
  return (
    <>
      <nav className="bg-transparent font-sans h-[80px]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logoDepip}
              alt="withdrawIcon"
              height={logoDepip?.height}
            ></Image>
          </Link>
          <div className="hidden lg:flex lg:items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-10 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white hover:underline"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white hover:underline"
                  aria-current="page"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/app-depip"
                  className="text-white hover:underline"
                  aria-current="page"
                >
                  Our applications
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white hover:underline"
                  aria-current="page"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <Link className="p-2" href="/">
              <Image
                src={twitter}
                alt="twitter"
                height={twitter?.height}
              ></Image>
            </Link>
            <Link className="p-2" href="/">
              <Image
                src={facebook}
                alt="facebook"
                height={facebook?.height}
              ></Image>
            </Link>
            <Link className="p-2" href="/">
              <Image
                src={discord}
                alt="discord"
                height={discord?.height}
              ></Image>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
