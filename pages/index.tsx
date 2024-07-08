import Link from "next/link";
import Footer from "@/components/footer";
import mouseImg from "@/assets/images/mouse.svg";
import ipImg1 from "@/assets/images/ip-item-1.svg";
import ipImg2 from "@/assets/images/ip-item-2.svg";
import ipImg3 from "@/assets/images/ip-item-3.svg";
import ipImg4 from "@/assets/images/ip-item-4.svg";
import homeImg from "@/assets/images/img-home-1.png";
import homeImg2 from "@/assets/images/img-home-2.png";
import homeImg3 from "@/assets/images/img-home-3.png";
import bghomeImg1 from "@/assets/images/bg-home-1.png";
import bghomeImg2 from "@/assets/images/bg-home-2.svg";
import bghomeImg3 from "@/assets/images/bg-home-3.svg";
import bghomeImg4 from "@/assets/images/bg-home-4.svg";
import bghomeImg5 from "@/assets/images/bg-home-5.svg";
import bghomeImg6 from "@/assets/images/bg-home-6.svg";
import bghomeImg7 from "@/assets/images/bg-home-7.svg";
import bghomeImg8 from "@/assets/images/bg-home-8.svg";
import logoPunkga from "@/assets/images/logo-punkga.svg";
import logoSeekhypeWhite from "@/assets/images/logo-seekhype-white.svg";
import logoSeekhypeBlack from "@/assets/images/logo-seekhype-black.svg";
import arrowPixelBlack from "@/assets/images/arrow-pixel-black.svg";
import arrowPixelWhite from "@/assets/images/arrow-pixel-white.svg";
import bghome2 from "@/assets/images/img-home.png";
import Image from "next/image";
import NavbarLandingPage from "@/components/navbar-landingpage";
import logoDepip from "@/assets/images/logo-depip.svg";
import twitter from "@/assets/images/twitter.svg";
import facebook from "@/assets/images/facebook.svg";
import discord from "@/assets/images/discord.svg";

const Page = () => {
  return (
    <div className="bg-white">
      <section className="bg-[url(../assets/images/bg-home.png)] bg-cover h-screen relative bg-center">
        <NavbarLandingPage />
        <div className="flex flex-col justify-center items-center h-[calc(100vh-80px)] mx-auto max-w-screen-xl px-5">
          <div className="font-cabinet font-bold text-[42px] lg:text-[64px] leading-[110%] tracking-tight text-white text-center">
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
      <section className="bg-white py-[60px] lg:py-[120px]" id="section2">
        <div className="mx-auto max-w-screen-2xl flex flex-col justify-center items-center px-5">
          <div className="font-cabinet font-bold text-3xl lg:text-5xl leading-[110%] tracking-tight text-[#1D1F1E] text-left lg:text-center">
            IP Assets with Programmable Licenses
          </div>
          <div className="font-geist text-xl font-normal leading-7 tracking-tight text-left lg:text-center text-[#646A69] mt-6">
            Register any of your creative works as on-chain IP Assets and allow
            others to use it under your terms through <br /> licensing.
            Free-to-use or incentive-based monetizing, you make the rules.
          </div>
          <div className="flex flex-row gap-10 pt-16">
            <div className="pt-0">
              <Image
                src={ipImg1}
                alt="home-img"
                height={ipImg1.height}
                width={ipImg1.width}
              ></Image>
            </div>
            <div className="pt-20">
              <Image
                src={ipImg2}
                alt="home-img"
                height={ipImg2.height}
                width={ipImg2.width}
              ></Image>
            </div>
            <div className="pt-0">
              <Image
                src={ipImg3}
                alt="home-img"
                height={ipImg3.height}
                width={ipImg3.width}
              ></Image>
            </div>
            <div className="pt-20">
              <Image
                src={ipImg4}
                alt="home-img"
                height={ipImg4.height}
                width={ipImg4.width}
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FF5240] overflow-hidden relative">
        <div className="flex flex-col lg:flex-row justify-center items-center relative pt-[60px] pb-[200px] lg:pt-[100px] lg:pb-[100] mx-auto max-w-screen-xl px-5 gap-[60px] lg:gap-6">
          <div className="flex flex-col basis-1/2 gap-6">
            <div className="font-cabinet font-bold text-3xl lg:text-5xl leading-[110%] tracking-tight text-[#1D1F1E] text-left">
              Sharing economy
              <br /> based on creativity
            </div>
            <div className="font-geist text-xl font-normal leading-7 tracking-tight text-left text-[#1D1F1E]">
              Doing a cross-over? Sure. A multiverse? Can do.
              <br /> With licensing, creating a massive creative community where
              <br /> everyone can collaborate and earn together is easier than
              ever.
              <br /> Also, feel free to bring along all of your Web2 loyalty
              fans on social.
              <br /> Yes, we support that.
            </div>
          </div>
          <div className="flex justify-end items-center basis-1/2 relative z-20">
            <Image src={homeImg} alt="home-img"></Image>
          </div>
          <div className="absolute bottom-0 left-auto lg:left-0 z-10 mx-auto max-w-screen-xl">
            <Image src={bghomeImg2} alt="home-img"></Image>
          </div>
        </div>
        <div className="absolute -bottom-12 z-10 w-full bg-[url(../assets/images/bg-home-1.png)] bg-cover h-[214px] bg-no-repeat">
          {/* <Image src={bghomeImg1} alt="home-img"></Image> */}
        </div>
      </section>
      <section className="bg-black">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center relative pt-[60px] lg:pt-[100px] lg:pb-[100px] mx-auto max-w-screen-xl h-[1000px] lg:h-[600px] px-5">
          <div className="flex justify-end items-center basis-1/2"></div>
          <div className="flex flex-col gap-6 basis-1/2">
            <div className="font-cabinet text-left font-bold text-5xl leading-[110%] tracking-tight text-white">
              AI-Powered assistance
            </div>
            <div className="font-geist text-xl font-normal leading-7 tracking-tight text-left text-white">
              Too busy drawing? Reading about laws, rights, and agreements, is
              too
              <br /> much of a hassle? Our AI-powered guidance system will help
              you.
              <br /> Just tell us what you have, and what you want.
              <br /> (But still, it’s your rights, so be sure about it before
              signing anything)
            </div>
          </div>
          <div className="absolute bottom-0 left-5 lg:left-0 z-10 mx-auto max-w-screen-xl">
            <Image src={bghome2} alt="home-img"></Image>
          </div>
        </div>
      </section>
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
      <section className="bg-[#4F92F8]">
        <div className="relative mx-auto max-w-screen-xl overflow-hidden py-[60px] lg:py-[120px] px-5">
          <div className="absolute top-[482px] left-0 z-10 mx-auto max-w-screen-xl opacity-5">
            <Image src={bghomeImg6} alt="home-img"></Image>
          </div>
          <div className="flex flex-col justify-center items-center gap-[60px]">
            <div className="font-cabinet text-center font-bold text-3xl lg:text-5xl leading-[110%] tracking-tight text-white relative z-20">
              Honored to be accompanied with
            </div>
            <div className="relative flex p-6 lg:p-20 h-auto lg:h-[284px] w-full">
              <div className="absolute top-0 left-0">
                <Image src={bghomeImg7} alt="home-img"></Image>
              </div>
              <div className="flex items-center justify-around w-full relative z-20">
                <Image
                  src={logoSeekhypeWhite}
                  alt="home-img"
                  className=""
                ></Image>
                <Image
                  src={logoSeekhypeWhite}
                  alt="home-img"
                  className=""
                ></Image>
                <Image
                  src={logoSeekhypeWhite}
                  alt="home-img"
                  className=""
                ></Image>
                <Image
                  src={logoSeekhypeWhite}
                  alt="home-img"
                  className=""
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#61D167] pt-[60px] pb-[180px] lg:pt-[120px] lg:pb-[240px] relative">
        <div className="relative mx-auto max-w-screen-xl overflow-hidden px-5">
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="font-cabinet text-center font-bold text-3xl lg:text-5xl leading-[110%] tracking-tight text-[#1C1C1C] relative z-20">
              Want to stay in the know? Subscribe now.
            </div>
            <div className="flex flex-col lg:flex-row w-full justify-center">
              <input
                placeholder="Your email"
                className="py-[14px] px-4 bg-white w-full lg:w-[360px]"
              ></input>
              <button className="text-white bg-black flex justify-center items-center px-8 py-5 font-retrocomputer hover:text-black hover:bg-[#FEA933] hover:rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-10 w-full bg-[url(../assets/images/bg-home-9.png)] bg-cover h-[100px] lg:h-[200px] bg-no-repeat">
          {/* <Image src={bghomeImg1} alt="home-img"></Image> */}
        </div>
      </section>
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
          <div className="text-sm text-white font-geist font-normal opacity-80">
            © 2024{" "}
            <a href="#" className="hover:underline">
              IP Studio
            </a>
            . All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Page.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

export default Page;
