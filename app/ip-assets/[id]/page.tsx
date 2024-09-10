"use client"; // Ensure this component runs on the client-side

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import api from "@/serivces/story-api";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import ChatBox from "@/components/chat-box";

const PostPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState<any>();

  const getDetail = async () => {
    const res = await api.getDetail(
      "0xB9a173286C1052D9f5cd1223E64f111E10e033f2",
      id
    );
    if (res) {
      setData(res);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <Layout>
      <div className="flex pt-[118px]">
        {data && (
          <div className="min-w-[400px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="p-2 rounded-xl justify-start items-center gap-2 inline-flex">
              <div className="w-[200px] h-[200px] rounded-lg justify-start items-start gap-2 flex">
                <img
                  className="w-full h-full object-cover"
                  src={data?.image_url}
                />
              </div>
            </div>
            <div className="self-stretch h-[86px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch text-black text-lg font-normal font-pixel uppercase leading-7">
                PACIFICTION: The Mountain Queen #23
              </div>
              <div className="justify-center items-center gap-1.5 inline-flex">
                <div className="text-[#1c1c1c]/40 text-xs font-medium font-['Geist Variable'] leading-[18px]">
                  Registered
                </div>
              </div>
            </div>
            <div className="self-stretch h-[168px] flex-col justify-start items-start flex">
              <div className="self-stretch h-14 py-3 border-b border-[#1d1f1e]/10 justify-start items-center gap-3 inline-flex">
                <div className="w-[120px] text-[#5f5f6e] text-sm font-normal font-['Geist Variable'] leading-tight">
                  IP Asset ID
                </div>
                <div className="grow shrink basis-0 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="justify-end items-center gap-2 inline-flex">
                    <div className="text-[#4e92f7] text-sm font-medium font-['Geist Variable'] leading-tight">
                      0x441C...aBfC
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-14 py-3 border-b border-[#1d1f1e]/10 justify-start items-center gap-3 inline-flex">
                <div className="w-[120px] text-[#5f5f6e] text-sm font-normal font-['Geist Variable'] leading-tight">
                  PIL Terms
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="px-4 py-1 bg-[#1c1c1c]/5 rounded-[80px] justify-center items-center gap-1 inline-flex">
                    <div className="rounded-lg flex-col justify-center items-start inline-flex">
                      <div className="self-stretch text-[#141414] text-[10px] font-normal font-pixel uppercase leading-none">
                        Attach PIL Terms
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-14 py-3 border-b border-[#1d1f1e]/10 justify-start items-center gap-3 inline-flex">
                <div className="w-[120px] text-[#5f5f6e] text-sm font-normal font-['Geist Variable'] leading-tight">
                  License
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                  <div className="px-4 py-1 bg-[#1c1c1c]/5 rounded-[80px] justify-center items-center gap-1 inline-flex">
                    <div className="rounded-lg flex-col justify-center items-start inline-flex">
                      <div className="self-stretch text-[#141414] text-[10px] font-normal font-pixel uppercase leading-none">
                        Mint license
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[80px] justify-center items-center gap-1 inline-flex">
              <div className="rounded-lg flex-col justify-center items-start inline-flex">
                <div className="self-stretch text-[#1c1c1c] text-[10px] font-normal font-pixel uppercase leading-none">
                  View on IPScan
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="border shadow-lg h-[calc(100vh-198px)] m-5 rounded-lg">
          <ChatBox></ChatBox>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
