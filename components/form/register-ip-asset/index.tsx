import { useChat } from "@/provider/chat.provider";
import { useSidebar } from "@/provider/sidebar.provider";
import api from "@/serivces/form-api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";

const FormRegisterIPAsset = () => {
  const { toggleSidebar } = useSidebar();
  const { setDataChat } = useChat();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { address } = useAccount();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const res = await api.registerIpAsset(data);
    if (res) {
      toggleSidebar();
      const dataChat = {
        from: address ?? "user",
        value: [
          {
            type: "string",
            content: res,
          },
        ],
      };
      setDataChat(dataChat);
    }
    setLoading(false);
  };
  return (
    <div className="w-full p-5 rounded-2xl border border-stone-200 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="opacity-80 text-gray-800 text-xs font-light font-pixel uppercase tracking-tight">
          Register IP Asset
        </div>
        <div
          className="p-2 rounded-[64px] shadow border justify-center items-center gap-2 flex"
          onClick={() => toggleSidebar()}
        >
          <div className="w-6 h-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 5H7V7H5V5ZM9 9H7V7H9V9ZM11 11H9V9H11V11ZM13 11H11V13H9V15H7V17H5V19H7V17H9V15H11V13H13V15H15V17H17V19H19V17H17V15H15V13H13V11ZM15 9V11H13V9H15ZM17 7V9H15V7H17ZM17 7V5H19V7H17Z"
                fill="#1C1C1C"
                fill-opacity="0.8"
              />
            </svg>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
              NFT Address
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                  errors.nftAddress ? "border-red-500" : "border-zinc-900/10"
                } `}
                placeholder="Enter NFT Address"
                id="nftAddress"
                type="text"
                {...register("nftAddress", { required: true })}
              />
              {errors.nftAddress && (
                <p className=" text-sm text-red-600 dark:text-red-500">
                  NFT Address is required
                </p>
              )}
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
              Token Id
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                  errors.tokenId ? "border-red-500" : "border-zinc-900/10"
                } `}
                placeholder="Enter Token Id"
                type="text"
                id="tokenId"
                {...register("tokenId", { required: true })}
              />
              {errors.tokenId && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  Token ID is required
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="self-stretch justify-end items-start gap-2 inline-flex">
          <div className="px-6 py-3 rounded-[80px] justify-center items-center gap-2 flex">
            <div className="rounded-lg flex-col justify-center items-start inline-flex">
              <button
                onClick={() => toggleSidebar()}
                className="self-stretch text-gray-800 text-xs font-light font-pixel uppercase leading-[18px]"
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="px-6 py-3 rounded-[80px] bg-gradient-to-br from-gray-600  to-black border border-white justify-center items-center gap-2 flex">
            <div className="rounded-lg flex-col justify-center items-start inline-flex">
              <button
                type="submit"
                className="self-stretch text-white text-xs font-light font-pixel uppercase leading-[18px]"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormRegisterIPAsset;
