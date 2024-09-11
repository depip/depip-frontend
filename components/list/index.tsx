import { useEffect, useState } from "react";
import Select from "react-select";
import api from "@/serivces/story-api";
import Link from "next/link";

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
          const it2 = await getDetail(item);
          item.img = it2?.image_url;
          item.name = it2?.name;
        })
      );
      setData(res.data);
    }
    setLoading(false);
  };

  const getDetail = async (item) => {
    const res = await api.getDetail(
      "0xB9a173286C1052D9f5cd1223E64f111E10e033f2",
      item.nftMetadata.tokenId
    );
    if (res) {
      return res;
    }
    return "";
  };

  useEffect(() => {
    getData();
  }, []);

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
          <Select styles={customStyles} options={options} />
        </div>
      )}
      <div
        className={`flex flex-wrap gap-3 ${
          isFull ? "overflow-auto" : "h-[480px] overflow-hidden"
        }`}
      >
        {data.map((item) => (
          <Link
            href={`/ip-assets/${item?.id}`}
            className="grow shrink basis-0 rounded-lg flex-col justify-start items-start gap-3 inline-flex min-w-[172.80px] max-w-[172.80px] group cursor-pointer"
          >
            <div className="self-stretch rounded-lg justify-start items-start gap-2 inline-flex overflow-hidden border">
              <img className="w-[172.80px] h-[172.80px]" src={item?.img} />
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-[#141414] text-base font-medium font-geist leading-normal">
                  {item?.name}
                </div>
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <div className="text-[#1c1c1c]/40 text-xs font-medium font-geist leading-[18px]">
                    {item?.nftMetadata?.tokenId}
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
