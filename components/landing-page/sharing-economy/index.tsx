import Image from "next/image";
import homeImg from "@/assets/images/img-home-1.png";
import bghomeImg2 from "@/assets/images/bg-home-2.svg";

const SharingEconomy = () => {
  return (
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
            <br /> Also, feel free to bring along all of your Web2 loyalty fans
            on social.
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
  );
};
export default SharingEconomy;
