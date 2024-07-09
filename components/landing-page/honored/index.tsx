import bghomeImg6 from "@/assets/images/bg-home-6.svg";
import bghomeImg7 from "@/assets/images/bg-home-7.svg";
import logoSeekhypeWhite from "@/assets/images/logo-seekhype-white.svg";
import Image from "next/image";

const Honored = () => {
  return (
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
  );
};
export default Honored;
