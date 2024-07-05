import Link from "next/link";
import Footer from "@/components/footer";
import mouseImg from "@/assets/images/mouse.svg";
import ipImg1 from "@/assets/images/ip-item-1.svg";
import ipImg2 from "@/assets/images/ip-item-2.svg";
import ipImg3 from "@/assets/images/ip-item-3.svg";
import ipImg4 from "@/assets/images/ip-item-4.svg";
import homeImg from "@/assets/images/img-home-1.png";
import bghomeImg1 from "@/assets/images/bg-home-1.png";
import bghomeImg2 from "@/assets/images/bg-home-2.svg";
import bghome2 from "@/assets/images/img-home.png";
import Image from "next/image";
import NavbarLandingPage from "@/components/navbar-landingpage";

const Page = () => {
  return (
    <div className="bg-white">
      <section className="bg-[url(../assets/images/bg-home.png)] bg-cover h-screen relative">
        <NavbarLandingPage />
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
        <div className="absolute bottom-16 w-full z-10">
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
      <section className="bg-white py-[120px]" id="section2">
        <div className="mx-auto max-w-screen-2xl flex flex-col justify-center items-center">
          <div className="font-cabinet font-bold text-5xl leading-[110%] tracking-tight text-[#1D1F1E] text-center">
            IP Assets with Programmable Licenses
          </div>
          <div className="font-geist text-xl font-normal leading-7 tracking-tight text-center text-[#646A69] mt-6">
            Register any of your creative works as on-chain IP Assets and allow
            others to use it under your terms through <br /> licensing.
            Free-to-use or incentive-based monetizing, you make the rules.
          </div>
          <div className="flex flex-row gap-10 pt-16">
            <div className="pt-0">
              <Image
                src={ipImg1}
                alt="ipImg1"
                height={ipImg1.height}
                width={ipImg1.width}
              ></Image>
            </div>
            <div className="pt-20">
              <Image
                src={ipImg2}
                alt="ipImg2"
                height={ipImg2.height}
                width={ipImg2.width}
              ></Image>
            </div>
            <div className="pt-0">
              <Image
                src={ipImg3}
                alt="ipImg3"
                height={ipImg3.height}
                width={ipImg3.width}
              ></Image>
            </div>
            <div className="pt-20">
              <Image
                src={ipImg4}
                alt="ipImg4"
                height={ipImg4.height}
                width={ipImg4.width}
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FF5240] overflow-hidden relative">
        <div className="flex flex-row justify-center items-center relative py-[100px] mx-auto max-w-screen-xl">
          <div className="flex flex-col gap-6 basis-1/2">
            <div className="font-cabinet text-left font-bold text-5xl leading-[110%] tracking-tight text-[#1D1F1E]">
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
          <div className="absolute bottom-0 left-0 z-10 mx-auto max-w-screen-xl">
            <Image
              src={bghomeImg2}
              alt="bghomeImg2"
            ></Image>
          </div>
        </div>
        <div className="absolute -bottom-12 z-10 w-full bg-[url(../assets/images/bg-home-1.png)] bg-contain h-[214px]">
          {/* <Image src={bghomeImg1} alt="bghomeImg1"></Image> */}
        </div>
      </section>
      <section className="bg-black">
        <div className="flex flex-row justify-center items-center relative py-[100px] mx-auto max-w-screen-xl h-[600px]">
          <div className="flex justify-end items-center basis-1/2 relative z-20"></div>
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
          <div className="absolute bottom-0 left-0 z-10 mx-auto max-w-screen-xl">
            <Image src={bghome2} alt="bghome2"></Image>
          </div>
        </div>
      </section>
      <section className="bg-[#FEA933] py-160">

      </section>
      {/* <Footer /> */}
    </div>
  );
};

// Page.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

export default Page;
