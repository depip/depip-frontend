import { useEffect, useState } from "react";
import Select from "react-select";
import api from "@/serivces/story-api";
import Link from "next/link";
import { useDepip } from "@/provider/depip.provider";
import { useRouter } from "next/navigation";
import Button from "../button";
import { IpAsset } from "@/types/types";
import { getAddress } from "viem";
import { storytestnet } from "@/config/chain";
import { useAccount } from "@particle-network/connectkit";

const customStyles = {
  container: (provided) => ({
    ...provided,
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "#FAF9EF",
    "&:hover": {
      border: "1px solid #000000", // Change border color on hover
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "8px",
    marginTop: "8px",
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "black" : "FAF9EF",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "black", // Change background color on hover
      color: "white", // Change text color on hover
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#000000", // Color of the selected value
  }),
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

type Props = {
  isFull?: boolean;
};

const ListIpAssets: React.FC<Props> = ({ isFull = false }) => {
  const [tabActive, setTabActive] = useState("");
  const [data, setData] = useState<IpAsset[]>(null);
  const { listIP } = useDepip();
  const { address } = useAccount();
  const options = [
    { value: "DESC", label: "Newest" },
    { value: "ASC", label: "Oldest" },
  ];
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleChange = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    if (listIP) {
      setData(listIP);
    }
  }, [listIP]);
  useEffect(() => {
    setData(null);
    getIpAssetOwnerbyStatus();
  }, [tabActive, selectedOption]);

  const getIpAssetOwnerbyStatus = async () => {
    const newAdd = getAddress(address);
    const res = await api.getListIPAsset(
      newAdd,
      storytestnet.id.toString(),
      "1000",
      "0",
      selectedOption.value,
      tabActive
    );
    if (res) {
      setData(res);
    }
  };

  if (listIP?.length == 0) {
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
            <div
              className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                tabActive == "REGISTERED"
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-white text-[#141414]"
              }`}
              onClick={() => {
                setTabActive("REGISTERED");
              }}
            >
              <div className="text-base font-medium font-geist leading-normal">
                Registered
              </div>
              {/* <div className="text-xs font-medium font-geist leading-[18px]">
                20
              </div> */}
            </div>
            <div
              className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                tabActive == "LICENSE_ATTACHED"
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-white text-[#141414]"
              }`}
              onClick={() => {
                setTabActive("LICENSE_ATTACHED");
              }}
            >
              <div className="text-base font-medium font-geist leading-normal">
                Licences attached
              </div>
              {/* <div className="text-xs font-medium font-geist leading-[18px]">
                20
              </div> */}
            </div>
            <div
              className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                tabActive == "LICENSE_TOKEN_MINTED"
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-white text-[#141414]"
              }`}
              onClick={() => {
                setTabActive("LICENSE_TOKEN_MINTED");
              }}
            >
              <div className="text-base font-medium font-geist leading-normal">
                License minted
              </div>
              {/* <div className="text-xs font-medium font-geist leading-[18px]">
                20
              </div> */}
            </div>
          </div>
          <Select
            styles={customStyles}
            options={options}
            value={selectedOption}
            onChange={handleChange}
          />
        </div>
      )}
      <div
        className={`flex flex-wrap w-full gap-3 ${
          isFull ? "overflow-auto" : "h-[300px] overflow-hidden"
        }`}
      >
        {data?.map((item: IpAsset) => (
          <Link
            href={`/ip-assets/${item?.ip_id}`}
            className="grow shrink basis-0 rounded-lg flex-col justify-start items-start gap-3 inline-flex min-w-[210px] max-w-[210px] group cursor-pointer"
          >
            <div className="self-stretch rounded-lg justify-center items-center gap-2 inline-flex overflow-hidden border w-[210px] h-[210px]">
              {item?.ipAssetData?.metadata_offchain?.image?.url ? (
                <img
                  className="w-[210px] h-[210px] rounded"
                  src={item?.ipAssetData?.metadata_offchain?.image?.url}
                />
              ) : (
                <svg
                  className="w-[40px] h-[40px] text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              )}
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-3 flex  h-[70px]">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-[#141414] text-base font-medium font-geist leading-normal truncate">
                  {item?.ipAssetData?.metadata_onchain?.metadata?.name ||
                    item?.name}
                </div>
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <div className="text-[#1c1c1c]/40 text-xs font-medium font-geist leading-[18px]">
                    {item?.status?.replace(/_/g, " ").toLowerCase()}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
        {!data && (
          <>
            {numbers.map((number) => (
              <div className="animate-pulse grow shrink basis-0 rounded-lg flex-col justify-start items-start gap-3 inline-flex min-w-[210px] max-w-[210px] group cursor-pointer">
                <div className="w-[210px] h-[210px] rounded-lg justify-center items-center gap-2 inline-flex overflow-hidden border">
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
                <div className="self-stretch flex-col justify-start items-start gap-3 flex  h-[70px]">
                  <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-[#141414] text-base font-medium font-geist leading-normal truncate">
                      <div className="h-3 bg-gray-400 w-36 rounded-lg"></div>
                    </div>
                    <div className="justify-center items-center gap-1.5 inline-flex">
                      <div className="text-[#1c1c1c]/40 text-xs font-medium font-geist leading-[18px]">
                        <div className="h-3 bg-gray-300 w-28 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ListIpAssets;
