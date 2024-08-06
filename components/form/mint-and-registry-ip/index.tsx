import { useChat } from "@/provider/chat.provider";
import { useSidebar } from "@/provider/sidebar.provider";
import { useCallback, useEffect, useRef, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import api from "@/serivces/form-api";
import Button from "@/components/button";
import FileUpload from "@/components/file-upload";
import { useAccount } from "wagmi";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  recipient: yup
    .string()
    .matches(/^0x[a-fA-F0-9]{40}$/, "Address not valid")
    .required("Address is required"),
  file: yup
    .mixed()
    .required("File is required")
    .test("fileSize", "The file is too large", (value: any) => {
      return value && value.size <= 5 * 1024 * 1024;
    }),
});

const MintAndRegistryIp = () => {
  const { toggleSidebar } = useSidebar();
  const { setDataChat } = useChat();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { address } = useAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      recipient: address,
    },
  });
  const onSubmit = async (data) => {
    console.log(errors);
    if (!data.file) return;
    setLoading(true);
    const res = await api.mintAndRegistryIp(data);
    if (res) {
      toggleSidebar();
      setDataChat(JSON.stringify(res));
    }

    setLoading(false);
  };

  return (
    <div className="w-full p-5 rounded-2xl border border-stone-200 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="opacity-80 text-gray-800 text-xs font-light font-pixel uppercase tracking-tight">
          MINT AND CREATE IP ASSET
        </div>
        <div
          className="p-2 rounded-[64px] shadow border justify-center items-center gap-2 flex"
          onClick={() => {
            toggleSidebar();
            reset();
          }}
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
              Name
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                  errors.name ? "border-red-500" : "border-zinc-900/10"
                } `}
                placeholder="Enter name"
                type="text"
                {...register("name")}
              />
              {errors.name && (
                <p className=" text-sm text-red-600 dark:text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
              Description
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                  errors.description ? "border-red-500" : "border-zinc-900/10"
                } `}
                placeholder="Enter description"
                type="text"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
              Recipient
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                className={`rounded-lg border text-gray-800 text-xs font-light font-geist leading-normal p-4 w-full ${
                  errors.recipient ? "border-red-500" : "border-zinc-900/10"
                } `}
                placeholder="Enter recipient"
                type="text"
                {...register("recipient", { required: true })}
              />
              {errors.recipient && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  {errors.recipient.message}
                </p>
              )}
            </div>
          </div>
          <Controller
            name="file"
            control={control}
            render={({ field }) => (
              <FileUpload
                setValue={setValue}
              ></FileUpload>
            )}
          />
          {errors.file && (
            <p className="text-sm text-red-600 dark:text-red-500">
              {errors.file.message}
            </p>
          )}
        </div>
        <div className="self-stretch justify-end items-start gap-2 inline-flex">
          <div className="px-6 py-3 rounded-[80px] justify-center items-center gap-2 flex">
            <div className="rounded-lg flex-col justify-center items-start inline-flex">
              <button
                onClick={() => {
                  toggleSidebar();
                  reset();
                }}
                className="self-stretch text-gray-800 text-xs font-light font-pixel uppercase leading-[18px]"
              >
                Cancel
              </button>
            </div>
          </div>
          <Button type="submit" disabled={isLoading} className="px-6 py-3">
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default MintAndRegistryIp;
