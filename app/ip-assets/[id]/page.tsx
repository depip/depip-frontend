"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Link from "next/link";
import ButtonChat from "@/components/button-chat";
import { useDepip } from "@/provider/depip.provider";
import { IpAsset } from "@/types/types";
import { getAddress } from "viem";
import api from "@/serivces/story-api";
import { useAccount } from "@particle-network/connectkit";
import { storytestnet } from "@/config/chain";

const Index = () => {
  const { id } = useParams();
  const [data, setData] = useState<IpAsset>();
  const { listIP } = useDepip();
  const { address } = useAccount();

  const getData = async () => {
    const newAdd = getAddress(address);
    const res = await api.getListIPAsset(
      newAdd,
      storytestnet.id.toString(),
      "1000",
      "0",
      "DESC",
      "",
      id.toString()
    );
    if (res) {
      setData(res[0]);
    }
  };

  useEffect(() => {
    if (listIP.length > 0) {
      getData();
    }
  }, [listIP]);
  return (
    <Layout>
      <div className="flex pt-[118px]">
        {data ? (
          <div className="w-1/2 flex-col justify-start items-start gap-4 inline-flex p-4">
            <div className="rounded-xl justify-start items-center gap-2 inline-flex overflow-hidden p-2 border">
              <div className="w-[200px] h-[200px] rounded-lg justify-start items-start gap-2 flex">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={data?.ipAssetData?.metadata_offchain?.image?.url}
                />
              </div>
            </div>
            <div className="self-stretch h-[40px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-black text-lg font-normal font-pixel uppercase leading-7">
                {data?.ipAssetData?.metadata_onchain?.metadata?.name ||
                  data?.name}
              </div>
              <div className="justify-center items-center gap-1.5 inline-flex">
                <div className="text-[#1c1c1c]/40 text-xs font-medium font-geist leading-[18px]">
                  {data?.status?.replace(/_/g, " ").toLowerCase()}
                </div>
              </div>
            </div>
            <div className="self-stretch min-h-[168px] flex-col justify-start items-start flex">
              <div className="self-stretch min-h-14 py-3 border-b border-[#1d1f1e]/10 justify-start items-center gap-3 inline-flex">
                <div className="w-[120px] text-[#5f5f6e] text-sm font-normal font-geist leading-tight">
                  IP Asset ID
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 flex">
                  <div className="justify-end items-center gap-2 inline-flex">
                    <div className="text-[#4e92f7] text-sm font-medium font-geist leading-tight">
                      {id}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch min-h-14 py-3 border-b border-[#1d1f1e]/10 justify-start items-center gap-3 inline-flex">
                <div className="w-[120px] text-[#5f5f6e] text-sm font-normal font-geist leading-tight">
                  PIL Terms
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  {data?.license_attaches?.map((item) => (
                    <div className="justify-end items-center gap-2 inline-flex">
                      <div className="text-[#4e92f7] text-sm font-medium font-geist leading-tight">
                        {item?.license_term_id}
                      </div>
                      <div className="px-1 py-0.5 rounded border border-[#edf2f1] justify-center items-center gap-2 flex">
                        <div className="text-[#1c1c1c] text-xs font-normal font-geist leading-[18px]">
                          {item?.license_term?.name}
                        </div>
                      </div>
                    </div>
                  ))}
                  <Link
                    href={`/attach-pil-term/${id}`}
                    className="px-4 py-2 bg-[#1c1c1c]/5 rounded-[80px] justify-center items-center gap-1 inline-flex"
                  >
                    <div className="rounded-lg flex-col justify-center items-start inline-flex">
                      <div className="self-stretch text-[#141414] text-[10px] font-normal font-pixel uppercase leading-none">
                        Attach PIL Terms
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="self-stretch min-h-14 py-3 border-b border-[#1d1f1e]/10 justify-start items-center gap-3 inline-flex">
                <div className="w-[120px] text-[#5f5f6e] text-sm font-normal font-geist leading-tight">
                  License
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 flex">
                  {/* {data?.license_attaches?.map((item) => (
                    <div className="self-stretch text-[#141414] text-xs font-normal font-geist uppercase leading-none">
                      {item?.license_term?.license_template}
                    </div>
                  ))} */}
                  <Link
                    href={`/mint-license/${id}`}
                    className="px-4 py-2 bg-[#1c1c1c]/5 rounded-[80px] justify-center items-center gap-1 inline-flex"
                  >
                    <div className="rounded-lg flex-col justify-center items-start flex">
                      <div className="self-stretch text-[#141414] text-[10px] font-normal font-pixel uppercase leading-none">
                        Mint license
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* <Link
              href={`https://ip.dev.aurascan.io/ip/${id}`}
              target="_blank"
              className="rounded-[80px] justify-center items-center gap-1 inline-flex"
            >
              <div className="rounded-lg flex-col justify-center items-start inline-flex">
                <div className="self-stretch text-blue-700 text-[10px] font-normal font-pixel uppercase leading-none">
                  View on IPScan
                </div>
              </div>
            </Link> */}
          </div>
        ) : (
          <div className="w-1/2 flex-col justify-start items-start gap-4 inline-flex p-4 animate-pulse">
            <div className="rounded-xl justify-start items-center gap-2 inline-flex overflow-hidden p-2 border">
              <div className="w-[200px] h-[200px] rounded-lg justify-center items-center gap-2 flex">
                <svg
                  className="w-12 h-12 text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>
            <div className="self-stretch h-[40px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-black text-lg font-normal font-pixel uppercase leading-7">
                <div className="h-4 bg-gray-400 w-60 rounded-lg"></div>
              </div>
              <div className="justify-center items-center gap-1.5 inline-flex">
                <div className="h-3 bg-gray-300 w-32 rounded-lg"></div>
              </div>
            </div>
            <div className="self-stretch h-[168px] flex-col justify-start items-start flex">
              <div className="self-stretch h-14 py-3 border-b border-[#1d1f1e]/10 justify-start items-center gap-3 inline-flex">
                <div className="w-[120px] text-[#5f5f6e] text-sm font-normal font-geist leading-tight">
                  IP Asset ID
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="justify-end items-center gap-2 inline-flex">
                    <div className="h-3 bg-blue-300 w-72 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-14 py-3 border-b border-[#1d1f1e]/10 justify-start items-center gap-3 inline-flex">
                <div className="w-[120px] text-[#5f5f6e] text-sm font-normal font-geist leading-tight">
                  PIL Terms
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="h-3 bg-gray-300 w-32 rounded-lg"></div>
                </div>
              </div>
              <div className="self-stretch h-14 py-3 border-b border-[#1d1f1e]/10 justify-start items-center gap-3 inline-flex">
                <div className="w-[120px] text-[#5f5f6e] text-sm font-normal font-geist leading-tight">
                  License
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="h-3 bg-gray-300 w-24 rounded-lg"></div>
                </div>
              </div>
            </div>
            <div className="h-3 bg-blue-300 w-32 rounded-lg"></div>
          </div>
        )}

        <ButtonChat />
      </div>
    </Layout>
  );
};

export default Index;
