import { useEffect, useState } from "react";
import Button from "../button";
import Select from "react-select";
import api from "@/serivces/story-api";
import { it } from "node:test";

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

const ListIpAssets = () => {
  const [tabActive, setTabActive] = useState("");
  const [data, setData] = useState([]);
  const options = [
    { value: "1", label: "Newest" },
    { value: "2", label: "Oldest" },
    { value: "3", label: "normal" },
  ];
  const [isLoading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    const param = {
      options: {
        where: {
          tokenContract: "0xB9a173286C1052D9f5cd1223E64f111E10e033f2",
        },
      },
    };
    const res = await api.listAll(param);
    if (res && res.data) {
      await Promise.all(
        res.data.map(async (item) => {
          item.img = await getImg(item);
        })
      );
      setData(res.data);
    }
    setLoading(false);
  };

  const getImg = async (item) => {
    const res = await api.getImg(
      "0xB9a173286C1052D9f5cd1223E64f111E10e033f2",
      item.nftMetadata.tokenId
    );
    if (res?.image_url) {
      return res.image_url;
    }
    return "";
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="px-20 rounded-[20px]  flex-col justify-start items-center gap-6 inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-black text-xl font-normal font-pixel uppercase leading-[30px]">
            Your IP assets
          </div>

          <Button onClick={() => {}} className="w-auto px-5 h-10">
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
        <div className="self-stretch h-[828.40px] flex-col justify-start items-center gap-6 flex">
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
                  60
                </div>
              </div>
              <div
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
              </div>
            </div>
            {/* <div className="justify-start items-center gap-2 flex">
              <div className="px-4 py-2.5 bg-white rounded-[99px] justify-start items-center gap-3 flex">
                <div className="text-[#141414] text-sm font-normal font-geist leading-tight">
                  Newest
                </div>
                <div className="w-4 h-4 relative" />
              </div>
            </div> */}
            <Select styles={customStyles} options={options} />
          </div>
          <div className="flex flex-wrap gap-3">
            {data.map((item) => (
              <div className="grow shrink basis-0 rounded-lg flex-col justify-start items-start gap-3 inline-flex min-w-[172.80px] max-w-[172.80px]">
                <div className="self-stretch rounded-lg justify-start items-start gap-2 inline-flex overflow-hidden">
                  <img className="w-[172.80px] h-[172.80px]" src={item.img} />
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-[#141414] text-base font-medium font-geist leading-normal">
                      {item?.nftMetadata?.name}
                    </div>
                    <div className="justify-center items-center gap-1.5 inline-flex">
                      <div className="text-[#1c1c1c]/40 text-xs font-medium font-geist leading-[18px]">
                        {item?.nftMetadata?.tokenId}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListIpAssets;
