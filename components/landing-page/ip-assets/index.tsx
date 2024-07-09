import Image from "next/image";
import ipImg1 from "@/assets/images/ip-item-1.svg";
import ipImg2 from "@/assets/images/ip-item-2.svg";
import ipImg3 from "@/assets/images/ip-item-3.svg";
import ipImg4 from "@/assets/images/ip-item-4.svg";

const IpAssets = () => {
  return (
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
  );
};
export default IpAssets;
