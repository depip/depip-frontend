"use client";
import Button from "@/components/button";
import Layout from "@/components/layout";
import ListIpAssets from "@/components/list";
import { useRouter } from "next/navigation";
const Index = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="px-20 pt-[118px] bg-[#FAF9EF]">
        <div className="self-stretch flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-black text-xl font-normal font-pixel uppercase leading-[30px]">
              Your IP assets
            </div>

            <Button
              onClick={() => {
                router.push("/register-ip");
              }}
              className="w-auto px-5 h-10"
            >
              <div className="w-4 h-4 relative">
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
                    d="M7.33366 2.6665H8.66699V3.99984V7.33317H13.3337V8.6665H8.66699V11.9998V13.3332H7.33366V11.9998V8.6665H2.66699V7.33317H7.33366V3.99984V2.6665Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div className="text-xs font-normal font-pixel uppercase leading-5">
                Register
              </div>
            </Button>
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-6 flex">
            <ListIpAssets isFull={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
