"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import ButtonChat from "@/components/button-chat";
import MintAndRegistryIp from "@/components/form/mint-and-registry-ip";
import FormRegisterIPAsset from "@/components/form/register-ip-asset";
import { useRouter } from "next/navigation";

const Index = () => {
  const [type, setType] = useState(null);
  const router = useRouter();
  return (
    <Layout>
      <div className="flex pt-[118px] bg-[#FAF9EF]">
        <div className="w-1/2 flex-col justify-start items-start inline-flex pl-4">
          <div className="p-5 w-full rounded-2xl border border-[#e1dfd7] flex-col justify-start items-start gap-6 inline-flex">
            <div
              className="rounded-[80px] justify-center items-center gap-1 inline-flex cursor-pointer"
              onClick={() => {
                router.back();
              }}
            >
              <div className="rounded-lg justify-center items-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.667 12.6668L10.667 11.3335L9.33366 11.3335L9.33366 10.0002L8.00032 10.0002L8.00032 8.66683L6.66699 8.66683L6.66699 7.3335L8.00032 7.3335L8.00032 6.00016L9.33366 6.00016L9.33366 4.66683L8.00032 4.66683L8.00032 6.00016L6.66699 6.00016L6.66699 7.3335L5.33366 7.3335L5.33366 8.66683L6.66699 8.66683L6.66699 10.0002L8.00032 10.0002L8.00032 11.3335L9.33366 11.3335L9.33366 12.6668L10.667 12.6668ZM10.667 3.3335L10.667 4.66683L9.33366 4.66683L9.33366 3.3335L10.667 3.3335Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
              <div className="rounded-lg flex-col justify-center items-start inline-flex">
                <div className="self-stretch text-[#1c1c1c] text-[10px] font-normal font-pixel uppercase leading-none">
                  Back
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-center inline-flex">
              <div className="text-black text-lg font-normal font-pixel uppercase leading-7">
                Register IP asset
              </div>
            </div>
            <div className="self-stretch h-[132px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-[#1c1c1c]/80 text-sm font-semibold font-geist leading-tight">
                Select an option
              </div>
              <div
                className={`self-stretch p-3 rounded-lg border border-[#1c1c1c]/10 justify-start items-center gap-4 inline-flex ${
                  type == 1 ? "bg-[#1c1c1c]/10" : ""
                }`}
                onClick={() => {
                  setType(1);
                }}
              >
                <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-center inline-flex">
                  <div className="self-stretch text-[#1c1c1c] text-base font-medium font-geist leading-normal">
                    Register my owned NFT as an IP asset
                  </div>
                </div>
                {type == 1 && (
                  <div className="rounded-lg justify-center items-center gap-1 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0003 4H13.3337V5.33333H12.0003V4ZM10.667 6.66667V5.33333H12.0003V6.66667H10.667ZM9.33366 8V6.66667H10.667V8H9.33366ZM8.00033 9.33333H9.33366V8H8.00033V9.33333ZM6.66699 10.6667H8.00033V9.33333H6.66699V10.6667ZM5.33366 10.6667V12H6.66699V10.6667H5.33366ZM4.00033 9.33333H5.33366V10.6667H4.00033V9.33333ZM4.00033 9.33333H2.66699V8H4.00033V9.33333Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div
                className={`self-stretch p-3 rounded-lg border border-[#1c1c1c]/10 justify-start items-center gap-4 inline-flex ${
                  type == 2 ? "bg-[#1c1c1c]/10" : ""
                }`}
                onClick={() => {
                  setType(2);
                }}
              >
                <div className="grow shrink basis-0 rounded-lg flex-col justify-center items-center inline-flex">
                  <div className="self-stretch text-[#1c1c1c] text-base font-medium font-geist leading-normal">
                    Mint a new NFT and register it as IP asset
                  </div>
                </div>
                {type == 2 && (
                  <div className="rounded-lg justify-center items-center gap-1 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0003 4H13.3337V5.33333H12.0003V4ZM10.667 6.66667V5.33333H12.0003V6.66667H10.667ZM9.33366 8V6.66667H10.667V8H9.33366ZM8.00033 9.33333H9.33366V8H8.00033V9.33333ZM6.66699 10.6667H8.00033V9.33333H6.66699V10.6667ZM5.33366 10.6667V12H6.66699V10.6667H5.33366ZM4.00033 9.33333H5.33366V10.6667H4.00033V9.33333ZM4.00033 9.33333H2.66699V8H4.00033V9.33333Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {type == 1 && <FormRegisterIPAsset />}
            {type == 2 && <MintAndRegistryIp />}
          </div>
        </div>

        <ButtonChat />
      </div>
    </Layout>
  );
};

export default Index;
