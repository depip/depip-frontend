import type { ReactElement } from "react";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import background from "../assets/images/bg-home.png";

import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import mouseImg from "@/assets/images/mouse.svg";
import ipImg1 from "@/assets/images/ip-item-1.svg";
import ipImg2 from "@/assets/images/ip-item-2.svg";
import ipImg3 from "@/assets/images/ip-item-3.svg";
import ipImg4 from "@/assets/images/ip-item-4.svg";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <section className="bg-[url(../assets/images/bg-home.png)] bg-cover h-screen relative">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-[calc(100vh-80px)] mx-auto max-w-screen-xl">
          <div className="font-cabinet font-bold text-[64px] leading-[110%] tracking-tight text-white text-center">
            As every unique idea deserves
            <br /> its own Web3 rights.
          </div>
          <div className="font-geist text-2xl font-medium leading-7 tracking-tight text-center text-white mt-6">
            Think. Create. Make it viral under your name. All on-chain.
          </div>
          <Link
            href="/chat-box"
            className="text-[#1D1F1E] bg-white flex justify-center items-center py-5 px-8 font-retrocomputer mt-10 hover:bg-[#FEA933] hover:rounded-full"
          >
            Explore more
          </Link>
        </div>
        <div className="absolute bottom-16 w-full z-10 ">
          <Link className="block mx-auto w-12 p-3" href="/">
            <Image
              src={mouseImg}
              alt="mouse"
              height={mouseImg.height}
              width={mouseImg.width}
            ></Image>
          </Link>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center py-[120px]">
          <div className="font-cabinet font-bold text-5xl leading-[110%] tracking-tight text-[#1D1F1E] text-center">
            IP Assets with Programmable Licenses
          </div>
          <div className="font-geist text-xl font-normal leading-7 tracking-tight text-center text-[#646A69] mt-6">
            Register any of your creative works as on-chain IP Assets and allow
            others to use it under your terms through <br /> licensing.
            Free-to-use or incentive-based monetizing, you make the rules.
          </div>
          <div className="flex flex-row">
            <Image
              src={ipImg1}
              alt="ipImg1"
              height={ipImg1.height}
              width={ipImg1.width}
            ></Image>
            <Image
              src={ipImg2}
              alt="ipImg2"
              height={ipImg2.height}
              width={ipImg2.width}
            ></Image>
            <Image
              src={ipImg3}
              alt="ipImg3"
              height={ipImg3.height}
              width={ipImg3.width}
            ></Image>
            <Image
              src={ipImg4}
              alt="ipImg4"
              height={ipImg4.height}
              width={ipImg4.width}
            ></Image>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

// Page.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

export default Page;
