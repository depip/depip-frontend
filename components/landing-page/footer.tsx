import logoDepip from "@/assets/images/logo-depip.svg";
import twitter from "@/assets/images/twitter.svg";
import facebook from "@/assets/images/facebook.svg";
import discord from "@/assets/images/discord.svg";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black py-20 px-5">
      <div className="w-full mx-auto max-w-screen-2xl flex flex-col">
        <Link href="/" className="flex items-center">
          <Image
            src={logoDepip}
            alt="withdrawIcon"
            height={logoDepip?.height}
          ></Image>
        </Link>
        <div className="h-[240px]"></div>
      </div>
      <div className="w-full mx-auto max-w-screen-2xl flex items-start lg:items-center justify-between flex-col lg:flex-row gap-6">
        <div className="flex items-center">
          <Link className="p-2" href="/">
            <Image src={twitter} alt="twitter" height={twitter?.height}></Image>
          </Link>
          <Link className="p-2" href="/">
            <Image
              src={facebook}
              alt="facebook"
              height={facebook?.height}
            ></Image>
          </Link>
          <Link className="p-2" href="/">
            <Image src={discord} alt="discord" height={discord?.height}></Image>
          </Link>
        </div>
        <div className="text-sm text-white font-geist font-normal opacity-80">
          © 2024{" "}
          <a href="#" className="hover:underline">
            IP Studio
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
