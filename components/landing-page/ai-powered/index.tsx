import bghome2 from "@/assets/images/img-home.png";
import Image from "next/image";

const AIPowered = () =>{
    return (
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
              <br /> much of a hassle? Our AI-powered guidance system will
              help you.
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
    );
}
export default AIPowered;