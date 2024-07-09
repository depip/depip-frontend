import Link from "next/link";

import homeImg2 from "@/assets/images/img-home-2.png";
import homeImg3 from "@/assets/images/img-home-3.png";
import bghomeImg3 from "@/assets/images/bg-home-3.svg";
import bghomeImg4 from "@/assets/images/bg-home-4.svg";
import bghomeImg5 from "@/assets/images/bg-home-5.svg";
import logoPunkga from "@/assets/images/logo-punkga.svg";
import logoSeekhypeBlack from "@/assets/images/logo-seekhype-black.svg";
import logoSeekhypeWhite from "@/assets/images/logo-seekhype-white.svg";
import Image from "next/image";

const OurApplications = () => {
  return (
    <section className="bg-[#FEA933] overflow-hidden">
      <div className="flex justify-between items-start relative mx-auto max-w-screen-xl overflow-hidden pt-[60px] pb-[120px] lg:pt-40 lgpb-40 px-5 flex-col lg:flex-row gap-[60px] lg:gap-auto">
        <div className="absolute top-0 -left-[80px] z-10 mx-auto max-w-screen-xl opacity-5">
          <Image src={bghomeImg3} alt="home-img"></Image>
        </div>
        <div className="absolute bottom-0 left-0 z-10 mx-auto max-w-screen-xl w-[130px] lg:w-auto">
          <Image src={bghomeImg4} alt="home-img"></Image>
        </div>
        <div className="absolute top-0 right-0 z-10 mx-auto max-w-screen-xl w-[130px] lg:w-auto">
          <Image src={bghomeImg5} alt="home-img"></Image>
        </div>
        <div className="font-cabinet text-left font-bold text-3xl lg:text-5xl leading-[110%] tracking-tight text-black relative z-20">
          Our applications
        </div>
        <div className="flex flex-col w-full lg:w-[800px] relative z-20 gap-5 lg:gap-0">
          <div className="flex">
            <div className="w-full lg:w-[400px] h-[400px] flex flex-col justify-between p-8 bg-white hover:bg-black hover:text-white group">
              <div>
                <Image src={logoPunkga} alt="home-img"></Image>
              </div>
              <div className="flex flex-col">
                <div className="font-cabinet text-2xl font-bold leading-7 tracking-tighter text-left text-black group-hover:text-white">
                  Punkga.me
                </div>
                <div className="font-geist text-base font-normal leading-7 tracking-tighter text-left text-[#1C1C1C] group-hover:text-white">
                  The Web3 manga multiverse for all.
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  className="fill-black group-hover:fill-white group-hover:-rotate-45 transition ease-in-out duration-500"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.33301 25.6665L9.33301 30.3332L37.333 30.3332L37.333 34.9998L41.9997 34.9998L41.9997 30.3332L46.6663 30.3332L46.6663 25.6665L41.9997 25.6665L41.9997 20.9998L37.333 20.9998L37.333 25.6665L9.33301 25.6665ZM32.6663 16.3332L37.333 16.3332L37.333 20.9998L32.6663 20.9998L32.6663 16.3332ZM32.6663 16.3332L27.9997 16.3332L27.9997 11.6665L32.6663 11.6665L32.6663 16.3332ZM32.6663 39.6665L37.333 39.6665L37.333 34.9998L32.6663 34.9998L32.6663 39.6665ZM32.6663 39.6665L27.9997 39.6665L27.9997 44.3332L32.6663 44.3332L32.6663 39.6665Z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-[400px] h-[400px] justify-start items-start hidden lg:flex">
              <Image
                src={homeImg2}
                alt="home-img"
                width={homeImg2.width}
                height={homeImg2.height}
              ></Image>
            </div>
          </div>
          <div className="flex">
            <div className="w-[400px] justify-start items-start hidden lg:flex">
              <Image
                src={homeImg3}
                alt="home-img"
                width={homeImg3.width}
                height={homeImg3.height}
              ></Image>
            </div>
            <div className="w-[400px] h-[400px] flex flex-col justify-between p-8 bg-white hover:bg-black hover:text-white group">
              <div className="">
                <Image
                  src={logoSeekhypeWhite}
                  alt="home-img"
                  className="group-hover:hidden"
                ></Image>
                <Image
                  src={logoSeekhypeBlack}
                  alt="home-img"
                  className="hidden group-hover:block"
                ></Image>
              </div>
              <div className="flex flex-col">
                <div className="font-cabinet text-2xl font-bold leading-7 tracking-tighter text-left text-black group-hover:text-white">
                  SeekHYPE
                </div>
                <div className="font-geist text-base font-normal leading-7 tracking-tighter text-left text-[#1C1C1C] group-hover:text-white">
                  Enhance your seamless NFT experience while enjoying utility
                  with premier Web2 brands
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  className="fill-black group-hover:fill-white group-hover:-rotate-45 transition ease-in-out duration-500"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.33301 25.6665L9.33301 30.3332L37.333 30.3332L37.333 34.9998L41.9997 34.9998L41.9997 30.3332L46.6663 30.3332L46.6663 25.6665L41.9997 25.6665L41.9997 20.9998L37.333 20.9998L37.333 25.6665L9.33301 25.6665ZM32.6663 16.3332L37.333 16.3332L37.333 20.9998L32.6663 20.9998L32.6663 16.3332ZM32.6663 16.3332L27.9997 16.3332L27.9997 11.6665L32.6663 11.6665L32.6663 16.3332ZM32.6663 39.6665L37.333 39.6665L37.333 34.9998L32.6663 34.9998L32.6663 39.6665ZM32.6663 39.6665L27.9997 39.6665L27.9997 44.3332L32.6663 44.3332L32.6663 39.6665Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-start">
            <Link
              href="/"
              className="w-[400px] text-white bg-black flex justify-center items-center p-6 font-retrocomputer hover:bg-white hover:text-black text-center"
            >
              Let's talk about your project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurApplications;
