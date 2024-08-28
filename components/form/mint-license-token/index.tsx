import { useDepip } from "@/provider/depip.provider";
import { useSidebar } from "@/provider/sidebar.provider";
import api from "@/serivces/form-api";
import { useAccount, useWallets } from "@particle-network/connectkit";
import { notification } from "antd";
import { Contract, ethers, Interface } from "ethers";
import { useState } from "react";
import { useForm } from "react-hook-form";

const FormMintLicenseToken = () => {
  const { toggleSidebar } = useSidebar();
  const { setDataChat, setIsSubmit } = useDepip();
  const [isLoading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const { smartAddress } = useDepip();
  const { address } = useAccount();
  const { sessionKey, smartAddress } = useDepip();
  const [primaryWallet] = useWallets();
  const onSubmit = async (data) => {
    setLoading(true);
    const per = await checkAndSetPermission(data);
    if (per) {
      const res = await api.mintLicense({
        ...data,
        session: sessionKey,
        userWallet: address,
      });
      if (res) {
        toggleSidebar();
        const dataChat = {
          from: address ?? "user",
          value: [
            {
              type: "string",
              content: JSON.stringify(res),
            },
          ],
        };
        setDataChat(dataChat);
        if (res.status == "success") {
          setIsSubmit(true);
        }
      }
      setLoading(false);
    }
  };
  const checkAndSetPermission = async (data) => {
    try {
      notification.info({
        message: "Checking permissions",
      });
      const EOAprovider = await primaryWallet.connector.getProvider();

      const customProvider = new ethers.BrowserProvider(
        EOAprovider as ethers.Eip1193Provider,
        "any"
      );
      const balance = await customProvider.getBalance(address);

      const contract = new Contract(
        process.env.NEXT_PUBLIC_CONTRACT_PERMISSION || "",
        [
          {
            inputs: [
              {
                internalType: "address",
                name: "ipAccount",
                type: "address",
              },
              {
                internalType: "address",
                name: "signer",
                type: "address",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "bytes4",
                name: "func",
                type: "bytes4",
              },
            ],
            name: "getPermission",
            outputs: [
              {
                internalType: "uint8",
                name: "",
                type: "uint8",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ],
        customProvider
      );

      const rs = await contract.getPermission(
        data?.licensorIpId,
        process.env.NEXT_PUBLIC_SESSION_ADDRESS,
        process.env.NEXT_PUBLIC_TO_ADDRESS_PERMISSION || "",
        process.env.NEXT_PUBLIC_FUNC_MINT_LICENSE_TOKEN || ""
      );

      if (Number(rs) != 1) {
        notification.info({
          message: "Permissions not yet granted. Set permissions",
        });
        const mintInterface = new Interface([
          "function setPermission(address, address, address, bytes4, uint8) public",
        ]);
        const encodedData = mintInterface.encodeFunctionData("setPermission", [
          data?.licensorIpId,
          process.env.NEXT_PUBLIC_SESSION_ADDRESS,
          process.env.NEXT_PUBLIC_TO_ADDRESS_PERMISSION || "",
          process.env.NEXT_PUBLIC_FUNC_MINT_LICENSE_TOKEN || "",
          1,
        ]);
        const tx = {
          to: process.env.NEXT_PUBLIC_CONTRACT_PERMISSION || "",
          value: "0x0",
          data: encodedData,
        };
        const signer2 = await customProvider.getSigner();
        const txResponse = await signer2.sendTransaction(tx);
        await delay(5000);
        notification.success({
          message: "Permissions currently being set",
        });
        return true;
      } else {
        notification.success({
          message: "Permissions are set up correctly.",
        });
        return true;
      }
    } catch (error) {
      notification.error({
        message: error?.message,
      });
      return false;
    }
  };
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  return (
    <div className="w-full p-5 rounded-2xl border border-stone-200 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="opacity-80 text-gray-800 text-xs font-light font-pixel uppercase tracking-tight">
          Mint license token
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
              IP asset ID
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                  errors.licensorIpId ? "border-red-500" : "border-zinc-900/10"
                } `}
                placeholder="Enter IP asset ID"
                type="text"
                id="licensorIpId"
                {...register("licensorIpId", { required: true })}
              />
              {errors.licensorIpId && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  IP asset ID is required
                </p>
              )}
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
              License Term ID
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                  errors.licenseTermsId
                    ? "border-red-500"
                    : "border-zinc-900/10"
                } `}
                placeholder="Enter License Term ID"
                id="licenseTermsId"
                type="text"
                {...register("licenseTermsId", { required: true })}
              />
              {errors.licenseTermsId && (
                <p className=" text-sm text-red-600 dark:text-red-500">
                  License Term ID Address is required
                </p>
              )}
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
              Receiving address
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                  errors.receiver ? "border-red-500" : "border-zinc-900/10"
                } `}
                placeholder="Enter Receiving address"
                type="text"
                id="receiver"
                {...register("receiver", { required: true })}
              />
              {errors.receiver && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  Receiving address is required
                </p>
              )}
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
              Amount of licenses
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                  errors.amount ? "border-red-500" : "border-zinc-900/10"
                } `}
                placeholder="Enter Amount of licenses"
                type="text"
                id="amount"
                {...register("amount", { required: true })}
              />
              {errors.amount && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  Amount of licenses is required
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
                {isLoading ? (
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormMintLicenseToken;
