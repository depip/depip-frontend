import Link from "next/link";
import Navbar from "../navbar";
import Image from "next/image";
import mouseImg from "@/assets/images/mouse.svg";

const Banner = () => {
  return (
    <section className="bg-[url(../assets/images/bg-home.png)] bg-cover h-screen relative bg-center">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[calc(100vh-80px)] mx-auto max-w-screen-xl px-5">
        <div className="font-cabinet font-bold text-[42px] lg:text-[64px] leading-[110%] tracking-tight text-white text-center">
          As every unique idea deserves
          <br /> its own Web3 rights.
        </div>
        <div className="font-geist text-2xl font-medium leading-7 tracking-tight text-center text-white mt-6">
          Think. Create. Make it viral under your name. All on-chain.
        </div>
        <Link
          href="/app"
          className="text-[#1D1F1E] bg-white flex justify-center items-center py-5 px-8 font-retrocomputer mt-10 hover:bg-[#FEA933] hover:rounded-full"
        >
          Explore more
        </Link>
      </div>
      <div className="absolute bottom-16 w-full z-10 animate-bounce">
        <a className="block mx-auto w-12 p-3" href="#section2">
          <Image
            src={mouseImg}
            alt="mouse"
            height={mouseImg.height}
            width={mouseImg.width}
          ></Image>
        </a>
      </div>
    </section>
  );
};
export default Banner;
