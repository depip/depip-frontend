import { useSidebar } from "@/provider/sidebar.provider";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import api from "@/serivces/form-api";
import { useDepip } from "@/provider/depip.provider";
import { useAccount } from "@particle-network/connectkit";
import { PIL_TYPE } from "@/constant/constant";
import { parseEther } from "viem";

const FormRegisterPilTerm = () => {
  const { toggleSidebar } = useSidebar();
  const { setDataChat, setIsSubmit } = useDepip();
  const {
    handleSubmit,
    control,
    watch,
    register,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: PIL_TYPE.COMMERCIAL_USE,
      currency: process.env.NEXT_PUBLIC_STORY_USD || "",
      mintingFee: null,
      commercialRevShare: null,
    },
  });
  const selectedType: PIL_TYPE = watch("type", PIL_TYPE.COMMERCIAL_USE);
  const { address } = useAccount();
  const { sessionKey } = useDepip();
  const onSubmit = async (data) => {
    setLoading(true);
    if (data.mintingFee) {
      data.mintingFee = (data.mintingFee * Math.pow(10, 18)).toString();
    }
    const res = await api.registerPILTerms({
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
    // reset();
    setLoading(false);
  };

  const handleChange = () => {
    const value = getValues();
    Object.keys(value).forEach((key) => {
      if (key == "type") return;
      if (key == "currency") {
        setValue("currency", process.env.NEXT_PUBLIC_STORY_USD || "");
        return;
      }
      setValue(key as any, null);
    });
  };

  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <div className="w-full p-5 rounded-2xl border border-stone-200 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="opacity-80 text-gray-800 text-xs font-light font-pixel uppercase tracking-tight">
          Register PIL Term
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
            <div className="self-stretch text-gray-800/80 text-sm font-semibold font-geist leading-tight">
              Select a type
            </div>
            <div className="w-full flex flex-col gap-1">
              <Controller
                name="type"
                control={control}
                rules={{ required: "Type is required" }}
                // defaultValue={selectedType}
                render={({ field }) => (
                  <select
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleChange();
                    }}
                    className="
                    text-gray-800 text-base font-light font-geist leading-normal
                     border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                  >
                    <option value={PIL_TYPE.COMMERCIAL_USE}>
                      Commercial Use License
                    </option>
                    <option value={PIL_TYPE.COMMERCIAL_REMIX}>
                      Commercial Remix License
                    </option>
                    <option value={PIL_TYPE.NON_COMMERCIAL_REMIX}>
                      Non-Commercial Social Remixing License
                    </option>
                  </select>
                )}
              />
              {errors.type && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  {errors.type.message?.toString()}
                </p>
              )}
            </div>
          </div>
          {(selectedType == PIL_TYPE.COMMERCIAL_USE ||
            selectedType == PIL_TYPE.COMMERCIAL_REMIX) && (
            <>
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
                  Currency token contract
                </div>
                <div className="w-full flex flex-col gap-1">
                  <input
                    className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                      errors.currency ? "border-red-500" : "border-zinc-900/10"
                    } `}
                    placeholder="Enter Currency token contract"
                    type="text"
                    id="currency"
                    {...register("currency", { required: true })}
                  />
                  {errors.currency && (
                    <p className="text-sm text-red-600 dark:text-red-500">
                      Currency token contract is required
                    </p>
                  )}
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
                  Minting Fee
                </div>
                <div className="w-full flex flex-col gap-1">
                  <input
                    className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                      errors.mintingFee
                        ? "border-red-500"
                        : "border-zinc-900/10"
                    } `}
                    placeholder="Enter Minting Fee"
                    type="number"
                    step="any"
                    id="mintingFee"
                    {...register("mintingFee", { required: true })}
                  />
                  {errors.mintingFee && (
                    <p className="text-sm text-red-600 dark:text-red-500">
                      Minting Fee is required
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
          {selectedType == PIL_TYPE.COMMERCIAL_REMIX && (
            <>
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
                  Commercial Revenue Share (%)
                </div>
                <div className="w-full flex flex-col gap-1">
                  <input
                    className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                      errors.commercialRevShare
                        ? "border-red-500"
                        : "border-zinc-900/10"
                    } `}
                    placeholder="Enter Commercial Rev Share"
                    type="text"
                    id="commercialRevShare"
                    {...register("commercialRevShare", { required: true })}
                  />
                  {errors.commercialRevShare && (
                    <p className="text-sm text-red-600 dark:text-red-500">
                      Commercial Revenue Share is required
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
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
export default FormRegisterPilTerm;
