import { useEffect, useState } from "react";
import Select from "react-select";
import api from "@/serivces/story-api";
import Link from "next/link";
import { useDepip } from "@/provider/depip.provider";
import { useRouter } from "next/navigation";
import Button from "../button";
import { IpAsset } from "@/types/types";

const customStyles = {
  container: (provided) => ({
    ...provided,
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #ffffff",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #000000", // Change border color on hover
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "4px",
    marginTop: "8px",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#0070f3" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "#f0f0f0", // Change background color on hover
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#000000", // Color of the selected value
  }),
};

type Props = {
  isFull?: boolean;
};

const ListIpAssets: React.FC<Props> = ({ isFull = false }) => {
  const [tabActive, setTabActive] = useState("");
  const [data, setData] = useState<IpAsset[]>([]);
  const { listIP } = useDepip();
  const options = [
    { value: "1", label: "Newest" },
    { value: "2", label: "Oldest" },
    { value: "3", label: "normal" },
  ];
  const router = useRouter();
  useEffect(() => {
    if (listIP) {
      setData(listIP);
    }
  }, [listIP]);
  if (data.length == 0) {
    return (
      <div className="h-60 w-full p-8 rounded-2xl border border-[#1c1c1c]/10 flex-col justify-center items-center gap-5 inline-flex">
        <div className="self-stretch h-[108px] flex-col justify-start items-center gap-4 flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.33301 6.5H8.66634H43.333H47.6663V45.5H43.333H8.66634H4.33301V6.5ZM43.333 41.1667V15.1667H8.66634V41.1667H43.333ZM34.6663 21.6667H30.333V26H25.9997V30.3333H21.6663V26H17.333V30.3333H21.6663V34.6667H25.9997V30.3333H30.333V26H34.6663V21.6667Z"
              fill="#1C1C1C"
              fill-opacity="0.2"
            />
          </svg>
          <div className="self-stretch text-center text-[#1c1c1c]/40 text-sm font-normal font-['Geist Variable'] leading-tight">
            You don't have any assets yet.
            <br />
            Register new IP asset now.
          </div>
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
    );
  }
  return (
    <>
      {isFull && (
        <div className="self-stretch justify-start items-center gap-3 inline-flex">
          <div className="grow shrink basis-0 h-10 justify-start items-center gap-1 flex">
            <div
              className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                tabActive == ""
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-white text-[#141414]"
              }`}
              onClick={() => {
                setTabActive("");
              }}
            >
              <div className="text-base font-medium font-geist leading-normal">
                All
              </div>
              <div className="text-xs font-medium font-geist leading-[18px] opacity-80">
                {listIP.length}
              </div>
            </div>
            {/* <div
              className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                tabActive == "registered"
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-white text-[#141414]"
              }`}
              onClick={() => {
                setTabActive("registered");
              }}
            >
              <div className="text-base font-medium font-geist leading-normal">
                Registered
              </div>
              <div className="text-xs font-medium font-geist leading-[18px]">
                20
              </div>
            </div>
            <div
              className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                tabActive == "licencesAttached"
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-white text-[#141414]"
              }`}
              onClick={() => {
                setTabActive("licencesAttached");
              }}
            >
              <div className="text-base font-medium font-geist leading-normal">
                Licences attached
              </div>
              <div className="text-xs font-medium font-geist leading-[18px]">
                20
              </div>
            </div>
            <div
              className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                tabActive == "licenseMinted"
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-white text-[#141414]"
              }`}
              onClick={() => {
                setTabActive("licenseMinted");
              }}
            >
              <div className="text-base font-medium font-geist leading-normal">
                License minted
              </div>
              <div className="text-xs font-medium font-geist leading-[18px]">
                20
              </div>
            </div>*/}
          </div>
          <Select styles={customStyles} options={options} />
        </div>
      )}
      <div
        className={`flex flex-wrap w-full gap-3 ${
          isFull ? "overflow-auto" : "h-[520px] overflow-hidden"
        }`}
      >
        {data.map((item: IpAsset) => (
          <Link
            href={`/ip-assets/${item?.ip_id}`}
            className="grow shrink basis-0 rounded-lg flex-col justify-start items-start gap-3 inline-flex min-w-[172.80px] max-w-[172.80px] group cursor-pointer"
          >
            <div className="self-stretch rounded-lg justify-start items-start gap-2 inline-flex overflow-hidden border">
              <img
                className="w-[172.80px] h-[172.80px]"
                src={item?.ipAssetData?.metadata_offchain?.image?.url}
              />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-3 flex  h-[70px]">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-[#141414] text-base font-medium font-geist leading-normal truncate">
                  {item?.name}
                </div>
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <div className="text-[#1c1c1c]/40 text-xs font-medium font-geist leading-[18px]">
                    {item?.token_id}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ListIpAssets;
