import Image from "next/image";
import ipImg1 from "@/assets/images/ip-item-1.svg";
import ipImg2 from "@/assets/images/ip-item-2.svg";
import ipImg3 from "@/assets/images/ip-item-3.svg";
import ipImg4 from "@/assets/images/ip-item-4.svg";

const IpAssets = () => {
  return (
    <section className="bg-white py-[60px] lg:py-[120px] overflow-auto" id="section2">
      <div className="mx-auto max-w-screen-2xl flex flex-col justify-center items-center px-5">
        <div className="font-cabinet font-bold text-3xl lg:text-5xl leading-[110%] tracking-tight text-[#1D1F1E] text-left lg:text-center">
          IP Assets with Programmable Licenses
        </div>
        <div className="font-geist text-xl font-normal leading-7 tracking-tight text-left lg:text-center text-[#646A69] mt-6">
          Register any of your creative works as on-chain IP Assets and allow
          others to use it under your terms through <br /> licensing.
          Free-to-use or incentive-based monetizing, you make the rules.
        </div>
        <div className="h-[266px] py-20 justify-center items-center inline-flex mt-[60px]">
          <div className="w-[260px] h-[186px] relative flex justify-center items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              className="absolute left-auto -top-[44px] z-10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M80 15H40H30V25L20 25H10V35V75H20L30 75H40L40 35L40 25H80V35V75H90L100 75L110 75L110 25H100H90V15H80ZM100 35L100 65H90L90 35H100ZM30 65H20V35H30V65ZM90 75.0004H30V85.0004L55 85.0004V95H40V105H55V105H65V105H80V95H65V85.0004L90 85.0004V75.0004Z"
                fill="#000B00"
              />
            </svg>
            <div className="w-10 h-10 bg-[#60d166] absolute left-0 bottom-0 transition-all group-hover:w-[260px] group-hover:h-[186px]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="106"
              viewBox="0 0 180 106"
              fill="none"
              className="absolute left-10 bottom-10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M140 0H0V106H180V40H140V0Z"
                fill="#61D167"
              />
            </svg>
            <div className="text-center text-[#000b00] text-2xl font-bold font-cabinet leading-relaxed relative z-10">
              Game
            </div>
            <div className="w-10 h-10 bg-[#60d166] absolute right-0 top-0 transition-all group-hover:right-[220px] group-hover:top-[146px]" />
          </div>
          <div className="w-[260px] h-[186px] relative flex justify-center items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="106"
              viewBox="0 0 180 106"
              fill="none"
              className="absolute top-10 right-10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M140 0H0V106H180V40H140V0Z"
                fill="#FEA933"
              />
            </svg>
            <div className="text-center text-[#000b00] text-2xl font-bold font-cabinet leading-relaxed relative z-10">
              Arts
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              className="absolute left-auto -bottom-[50px] z-10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 10H20H100H110V90H100H85V100H75V90H45V100H35V90H20H10V10ZM35 100V110H25V100H35ZM85 100V110H95V100H85ZM100 20H20V80H100V20ZM60 40H70V50H60V40ZM50 60V50H60V60H50ZM50 60V70H40V60H50ZM80 60H70V50H80V60ZM80 60H90V70H80V60ZM40 30H30V40H40V30Z"
                fill="#000B00"
              />
            </svg>
            <div className="w-10 h-10 bg-[#fea933] absolute bottom-0 right-0 transition-all group-hover:w-[260px] group-hover:h-[186px]" />
          </div>
          <div className="w-[260px] h-[186px] relative flex justify-center items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              className="absolute left-auto -top-[44px] z-10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M95 10H25H15V20V100V110H25H95H105V100V20V10H95ZM95 20V100H25V20H95ZM35 30H85V45H35V30ZM60 55H35V90H60V55ZM70 55H85V90H70V55Z"
                fill="#000B00"
              />
            </svg>
            <div className="w-10 h-10 bg-[#4e92f7] absolute top-0 right-0 transition-all group-hover:w-[260px] group-hover:h-[186px]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="106"
              viewBox="0 0 180 106"
              fill="none"
              className="absolute top-10 right-10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M180 0H0V106H140V66H180V0Z"
                fill="#4F92F8"
              />
            </svg>
            <div className="text-center text-[#000b00] text-2xl font-bold font-cabinet leading-relaxed relative z-10">
              Manga
            </div>
            <div className="w-10 h-10 bg-[#4e92f7] absolute bottom-0 right-0 transition-all group-hover:right-[220px] group-hover:bottom-[146px]" />
          </div>
          <div className="w-[260px] h-[186px] relative flex justify-center items-center group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="180"
              height="106"
              viewBox="0 0 180 106"
              fill="none"
              className="absolute top-10 right-10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M40 0H180V66H140V106H0V40H40V0Z"
                fill="#FF5240"
              />
            </svg>
            <div className="text-center text-[#000b00] text-2xl font-bold font-cabinet leading-relaxed relative z-10">
              Anime
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              className="absolute left-auto -bottom-[40px] z-10"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 110H10V30H20H45V20H35V10H45V20H55V30H65V20H75V10H85V20H75V30H100H110V110H100H20ZM100 100V40H20V100H100ZM80 65H70V60H60V55H50V85H60V80H70V75H80V65Z"
                fill="black"
              />
            </svg>
            <div className="w-10 h-10 bg-[#ff5240] absolute bottom-0 right-0 transition-all group-hover:w-[260px] group-hover:h-[186px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default IpAssets;
