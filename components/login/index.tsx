// import ConnectButtonCustom from "../connect-button";
import { ConnectButton } from "@particle-network/connectkit";
import Link from "next/link";

const Login = () => {
  return (
    <div className="w-screen] h-screen relative bg-[#FAF9EF] flex items-center justify-center">
      <div className="bg-[url('../assets/images/app-bg-2.png')] absolute top-0 left-0 w-full h-[105px]"></div>
      <div className="flex flex-col gap-60">
        <div className="flex-col justify-start items-center gap-14 inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="36"
            viewBox="0 0 126 36"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.25 -0.000488056V-0.000209107H0V5.14237V5.14265V10.2852H5.25V5.14265V5.14237H10.5H15.75H21V-0.000488281H15.75H10.5L5.25 -0.000488056ZM36.75 -0.000209107H31.5V5.14237V5.14265V10.2852H36.75V5.14265V5.14237H42H47.25H52.5V-0.000488281H47.25H42L36.75 -0.000488056V-0.000209107ZM84 10.2859H89.25V10.2856H94.5V15.4285H89.25V15.4288V20.5711V20.5714V25.7137V25.7139V30.8565H84V25.7139V25.7137V20.5714V20.5711V15.4288V15.4285H78.75V20.5711H73.5V25.7137H68.25H63H57.75V25.7139V30.8565H52.5V25.7139V25.7137H47.25H42H36.75V25.7139H31.5V20.5714V20.5711V15.4288V15.4285V10.2859H36.75V10.2856H42H47.25V15.4285H42H36.75V15.4288V20.5708H42H47.25H52.5V15.4288V15.4285V10.2859H57.75V10.2856H63H68.25H73.5V15.4282H78.75V10.2856H84V10.2859ZM68.25 20.5708H73.5V15.4285H68.25H63H57.75V15.4288V20.5708H63H68.25ZM99.75 10.2859H105V10.2856H110.25H115.5H120.75V15.4282H126V20.5711H120.75V25.7137H115.5H110.25H105V25.7139V30.8565H99.75V25.7139V25.7137V20.5714V20.5711V15.4288V15.4285V10.2859ZM120.75 15.4285V20.5708H115.5H110.25H105V15.4288V15.4285H110.25H115.5H120.75ZM5.25 25.7137H10.5H15.75H21V20.5711H26.25V15.4285V15.4282V10.2859V10.2856V5.14307H21V10.2856V10.2859V15.4282V15.4285V20.5708H15.75H10.5H5.25V15.4288V15.4285V10.2859H0V15.4285V15.4288V20.5711V20.5714V25.7139H5.25V25.7137ZM89.25 30.8569V30.8572H84V30.8569H78.75V35.9998H84V36.0001H89.25V35.9998H94.5V30.8569H89.25ZM57.75 5.14237V-0.000485195L120.75 -0.000487893V5.14237L57.75 5.14237ZM0 30.8569V35.9998L47.25 35.9998V30.8569L0 30.8569ZM57.75 30.8572H52.5V36.0001H57.75V30.8572ZM99.75 30.8572H105V36.0001H99.75V30.8572Z"
              fill="#111111"
            />
          </svg>
          <div className="self-stretch flex-col justify-start items-center gap-2 flex">
            <div className="text-center text-black text-5xl font-bold font-['Cabinet Grotesk Variable'] leading-[52.80px]">
              Welcome to DePIP studio
            </div>
            <div className="text-center text-gray-400 text-xl font-normal font-['Geist Variable'] leading-7">
              Connect your wallet to exprience
            </div>
          </div>
          <ConnectButton />
        </div>
        <div className="flex-col justify-start items-center gap-8 inline-flex">
          <div className="flex items-center">
            <Link className="p-2" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.7928 2.5H17.3487L11.7653 8.85417L18.3337 17.5H13.1903L9.16283 12.2558L4.55366 17.5H1.99533L7.96783 10.7042L1.66699 2.5H6.94033L10.582 7.29333L14.7928 2.5ZM13.8962 15.9767H15.3128L6.17033 3.94333H4.65033L13.8962 15.9767Z"
                  fill="#1C1C1C"
                  fill-opacity="0.8"
                />
              </svg>
            </Link>
            <Link className="p-2" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M11.6663 11.2501H13.7497L14.583 7.91675H11.6663V6.25008C11.6663 5.39175 11.6663 4.58341 13.333 4.58341H14.583V1.78341C14.3113 1.74758 13.2855 1.66675 12.2022 1.66675C9.93967 1.66675 8.33301 3.04758 8.33301 5.58341V7.91675H5.83301V11.2501H8.33301V18.3334H11.6663V11.2501Z"
                  fill="#1C1C1C"
                  fill-opacity="0.8"
                />
              </svg>
            </Link>
            <Link className="p-2" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.0588 4.44162C14.9504 3.92496 13.7504 3.54996 12.5004 3.33329C12.4895 3.33294 12.4786 3.335 12.4685 3.33932C12.4584 3.34364 12.4494 3.35011 12.4421 3.35829C12.2921 3.63329 12.1171 3.99162 12.0004 4.26662C10.6746 4.06662 9.32626 4.06662 8.00042 4.26662C7.88376 3.98329 7.70876 3.63329 7.55042 3.35829C7.54209 3.34162 7.51709 3.33329 7.49209 3.33329C6.24209 3.54996 5.05042 3.92496 3.93376 4.44162C3.92542 4.44162 3.91709 4.44996 3.90876 4.45829C1.64209 7.84996 1.01709 11.15 1.32542 14.4166C1.32542 14.4333 1.33376 14.45 1.35042 14.4583C2.85042 15.5583 4.29209 16.225 5.71709 16.6666C5.74209 16.675 5.76709 16.6666 5.77542 16.65C6.10876 16.1916 6.40876 15.7083 6.66709 15.2C6.68376 15.1666 6.66709 15.1333 6.63376 15.125C6.15876 14.9416 5.70876 14.725 5.26709 14.475C5.23376 14.4583 5.23376 14.4083 5.25876 14.3833C5.35042 14.3166 5.44209 14.2416 5.53376 14.175C5.55042 14.1583 5.57542 14.1583 5.59209 14.1666C8.45876 15.475 11.5504 15.475 14.3838 14.1666C14.4004 14.1583 14.4254 14.1583 14.4421 14.175C14.5338 14.25 14.6254 14.3166 14.7171 14.3916C14.7504 14.4166 14.7504 14.4666 14.7088 14.4833C14.2754 14.7416 13.8171 14.95 13.3421 15.1333C13.3088 15.1416 13.3004 15.1833 13.3088 15.2083C13.5754 15.7166 13.8754 16.2 14.2004 16.6583C14.2254 16.6666 14.2504 16.675 14.2754 16.6666C15.7088 16.225 17.1504 15.5583 18.6504 14.4583C18.6671 14.45 18.6754 14.4333 18.6754 14.4166C19.0421 10.6416 18.0671 7.36662 16.0921 4.45829C16.0838 4.44996 16.0754 4.44162 16.0588 4.44162ZM7.10042 12.425C6.24209 12.425 5.52542 11.6333 5.52542 10.6583C5.52542 9.68329 6.22542 8.89162 7.10042 8.89162C7.98376 8.89162 8.68376 9.69162 8.67542 10.6583C8.67542 11.6333 7.97542 12.425 7.10042 12.425ZM12.9088 12.425C12.0504 12.425 11.3338 11.6333 11.3338 10.6583C11.3338 9.68329 12.0338 8.89162 12.9088 8.89162C13.7921 8.89162 14.4921 9.69162 14.4838 10.6583C14.4838 11.6333 13.7921 12.425 12.9088 12.425Z"
                  fill="#1C1C1C"
                  fill-opacity="0.8"
                />
              </svg>
            </Link>
          </div>
          <div className="self-stretch h-[54px] flex-col justify-start items-center gap-1.5 flex">
            <div className="text-gray-400 text-base font-medium font-['Inter'] leading-normal">
              DePIP Studio 2024. All rights reserved.
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div className="text-gray-400 text-base font-medium font-['Inter'] leading-normal">
                Discover
              </div>
              <div className="text-gray-400 text-base font-medium font-['Inter'] leading-normal">
                ·‎
              </div>
              <div className="text-gray-400 text-base font-medium font-['Inter'] leading-normal">
                Privacy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('../assets/images/app-bg.png')] absolute bottom-0 left-0 w-full h-[100px] opacity-10"></div>
    </div>
  );
};
export default Login;
