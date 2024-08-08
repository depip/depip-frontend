import { useSidebar } from "@/provider/sidebar.provider";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import api from "@/serivces/form-api";
import { useChat } from "@/provider/chat.provider";
import { PIL_TYPE } from "@/models/interface.common";
import { useAccount } from "wagmi";

const FormRegisterPilTerm = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { setDataChat } = useChat();
  const {
    handleSubmit,
    control,
    watch,
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const selectedType: PIL_TYPE = watch("type", PIL_TYPE.COMMERCIAL_USE);
  const { address } = useAccount();
  const onSubmit = async (data) => {
    setLoading(true);
    const res = await api.licenceseTerms(data);
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

  const handleChange = () => {
    const value = getValues();
    Object.keys(value).forEach((key) => {
      if (key === "type") return;
      setValue(key, null);
    });
  };

  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <div className="w-full p-5 rounded-2xl border border-stone-200 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="opacity-80 text-gray-800 text-xs font-light font-pixel uppercase tracking-tight">
          Register License
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
                defaultValue={selectedType}
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
                  Currency
                </div>
                <div className="w-full flex flex-col gap-1">
                  <input
                    className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                      errors.currency ? "border-red-500" : "border-zinc-900/10"
                    } `}
                    placeholder="Enter Currency"
                    type="text"
                    id="currency"
                    {...register("currency", { required: true })}
                  />
                  {errors.currency && (
                    <p className="text-sm text-red-600 dark:text-red-500">
                      Currency is required
                    </p>
                  )}
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
                  Minting Fee:
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
                  Commercial Rev Share
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
                      Commercial Rev Share is required
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
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default FormRegisterPilTerm;
