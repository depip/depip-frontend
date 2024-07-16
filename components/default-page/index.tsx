import { useSidebar } from "@/provider/sidebar.provider";
import utils from "@/utils";
import { FC, useEffect, useState } from "react";
import { useAccount } from "wagmi";

const DefaultPage = () => {
  const { address } = useAccount();
  const [avatar, setAvatar] = useState<string>("");
  const { isSidebarOpen, setTypeForm } = useSidebar();

  useEffect(() => {
    if (address) {
      setAvatar(utils.genAVT(address as string));
    }
  }, [address]);

  return (
    <div
      className={`w-full flex-col justify-start items-start gap-12 inline-flex transition-all ${
        isSidebarOpen ? "pl-0 pr-[424px]" : "px-20"
      }`}
    >
      <div className="flex-col justify-start items-start gap-6 flex">
        <div className="w-12 h-12 justify-center items-center inline-flex">
          <img
            className="w-12 h-12 rounded-full border border-gray-200"
            src={avatar}
            alt={address}
          />
        </div>
        <div className="self-stretch">
          <span className="text-black text-xl font-normal font-pixel uppercase leading-[30px]">
            Hey&nbsp;
          </span>
          <span className="text-blue-400 text-xl font-normal font-pixel uppercase leading-[30px]">
            {`${address?.substring(0, 6)}...${address?.substring(
              address.length - 4,
              address.length
            )}`}
          </span>
          <span className="text-black text-xl font-normal font-pixel uppercase leading-[30px]">
            ,<br />
            How can I help you today?
          </span>
        </div>
      </div>
      <div className="self-stretch h-[186px] flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch text-zinc-900/40 text-base font-medium font-geist leading-normal">
          Get started with DePIP
        </div>
        <div className="justify-start items-start gap-3 inline-flex w-full">
          <div
            onClick={() => {
              setTypeForm(1);
            }}
            className="cursor-pointer w-full h-[150px] p-5 rounded-2xl border border-zinc-900/10 flex-col justify-between items-start inline-flex"
          >
            <div className="p-3 bg-zinc-900/5 rounded-[99px] justify-start items-center gap-2 inline-flex">
              <div className="w-5 h-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.667 1.6665H3.33366H1.66699H1.66699V3.33317H1.66699V18.3332H3.33366V3.33317H16.667V11.6665H18.3337V3.33317V1.6665H16.667ZM8.33366 13.3332H5.00033V14.9998H3.33387V16.6665H5.00053V14.9998H8.33366V13.3332ZM13.3337 9.99984H15.0003V13.3332H18.3337V14.9998H16.667V16.6665H15.0003V18.3332H13.3337V14.9998H10.0003V13.3332H11.667V11.6665H13.3337V9.99984Z"
                    fill="#1C1C1C"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <div className="self-stretch h-6 flex-col justify-center items-start gap-0.5 flex">
              <div className="self-stretch text-zinc-900/80 text-base font-medium font-geist leading-normal">
                Register IP asset
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setTypeForm(2);
            }}
            className="cursor-pointer w-full h-[150px] p-5 rounded-2xl border border-zinc-900/10 flex-col justify-between items-start inline-flex"
          >
            <div className="p-3 bg-zinc-900/5 rounded-[99px] justify-start items-center gap-2 inline-flex">
              <div className="w-5 h-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.667 1.6665H3.33366H1.66699H1.66699V3.33317H1.66699V18.3332H3.33366V3.33317H16.667V11.6665H18.3337V3.33317V1.6665H16.667ZM8.33366 13.3332H5.00033V14.9998H3.33387V16.6665H5.00053V14.9998H8.33366V13.3332ZM13.3337 9.99984H15.0003V13.3332H18.3337V14.9998H16.667V16.6665H15.0003V18.3332H13.3337V14.9998H10.0003V13.3332H11.667V11.6665H13.3337V9.99984Z"
                    fill="#1C1C1C"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <div className="self-stretch h-6 flex-col justify-center items-start gap-0.5 flex">
              <div className="self-stretch text-zinc-900/80 text-base font-medium font-geist leading-normal">
                Register license
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setTypeForm(3);
            }}
            className="cursor-pointer w-full h-[150px] p-5 rounded-2xl border border-zinc-900/10 flex-col justify-between items-start inline-flex"
          >
            <div className="p-3 bg-zinc-900/5 rounded-[99px] justify-start items-center gap-2 inline-flex">
              <div className="w-5 h-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.667 1.6665H3.33366H1.66699H1.66699V3.33317H1.66699V18.3332H3.33366V3.33317H16.667V11.6665H18.3337V3.33317V1.6665H16.667ZM8.33366 13.3332H5.00033V14.9998H3.33387V16.6665H5.00053V14.9998H8.33366V13.3332ZM13.3337 9.99984H15.0003V13.3332H18.3337V14.9998H16.667V16.6665H15.0003V18.3332H13.3337V14.9998H10.0003V13.3332H11.667V11.6665H13.3337V9.99984Z"
                    fill="#1C1C1C"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <div className="self-stretch h-6 flex-col justify-center items-start gap-0.5 flex">
              <div className="self-stretch text-zinc-900/80 text-base font-medium font-geist leading-normal">
                Mint NFT
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              setTypeForm(4);
            }}
            className="cursor-pointer w-full h-[150px] p-5 rounded-2xl border border-zinc-900/10 flex-col justify-between items-start inline-flex"
          >
            <div className="p-3 bg-zinc-900/5 rounded-[99px] justify-start items-center gap-2 inline-flex">
              <div className="w-5 h-5 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.667 1.6665H3.33366H1.66699H1.66699V3.33317H1.66699V18.3332H3.33366V3.33317H16.667V11.6665H18.3337V3.33317V1.6665H16.667ZM8.33366 13.3332H5.00033V14.9998H3.33387V16.6665H5.00053V14.9998H8.33366V13.3332ZM13.3337 9.99984H15.0003V13.3332H18.3337V14.9998H16.667V16.6665H15.0003V18.3332H13.3337V14.9998H10.0003V13.3332H11.667V11.6665H13.3337V9.99984Z"
                    fill="#1C1C1C"
                    fill-opacity="0.6"
                  />
                </svg>
              </div>
            </div>
            <div className="self-stretch h-6 flex-col justify-center items-start gap-0.5 flex">
              <div className="self-stretch text-zinc-900/80 text-base font-medium font-geist leading-normal">
                My Asset
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
