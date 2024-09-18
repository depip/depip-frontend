"use client";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import SideBarRight from "@/components/sidebar-right";
import DefaultPage from "@/components/default-page";
import ChatBox from "@/components/chat-box";
import InputGroup from "@/components/input-group";
import { useDepip } from "@/provider/depip.provider";
import ListIpAssets from "@/components/list";
import Link from "next/link";

const Index = () => {
  const { sessionContent } = useDepip();
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <Layout>
      <div className="h-full flex flex-col gap-10 pt-[118px] p-4 bg-[#FAF9EF]">
        <DefaultPage />
        <div className="px-20 flex flex-col gap-5 bg-[#FAF9EF]">
          <div className="h-8 justify-between items-center inline-flex">
            <div className="text-[#141414] text-base font-normal font-pixel uppercase leading-normal">
              Recent IPs
            </div>
            <Link href={'/ip-assets'} className="px-4 py-2 bg-[#1c1c1c]/5 rounded-[80px] justify-center items-center gap-1 flex cursor-pointer">
              <div className="rounded-lg flex-col justify-center items-start inline-flex">
                <div className="self-stretch text-[#1c1c1c] text-[10px] font-normal font-pixel uppercase leading-none">
                  View all
                </div>
              </div>
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
                  d="M5.33301 12.6666L5.33301 11.3333L6.66634 11.3333L6.66634 12.6666L5.33301 12.6666ZM5.33301 3.33325L5.33301 4.66659L6.66634 4.66659L6.66634 3.33325L5.33301 3.33325ZM7.99968 5.99992L7.99968 4.66659L6.66634 4.66659L6.66634 5.99992L7.99968 5.99992ZM9.33301 7.33325L9.33301 5.99992L7.99968 5.99992L7.99968 7.33325L9.33301 7.33325ZM9.33301 8.66658L10.6663 8.66658L10.6663 7.33325L9.33301 7.33325L9.33301 8.66658ZM7.99968 9.99992L7.99968 8.66658L9.33301 8.66658L9.33301 9.99992L7.99968 9.99992ZM7.99968 9.99992L6.66634 9.99992L6.66634 11.3333L7.99968 11.3333L7.99968 9.99992Z"
                  fill="#1C1C1C"
                />
              </svg>
            </Link>
          </div>
          <ListIpAssets />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
