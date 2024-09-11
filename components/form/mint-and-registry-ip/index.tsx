import { useDepip } from "@/provider/depip.provider";
import { useSidebar } from "@/provider/sidebar.provider";
import { useCallback, useEffect, useRef, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import api from "@/serivces/form-api";
import Button from "@/components/button";
import FileUpload from "@/components/file-upload";
import { useAccount } from "@particle-network/connectkit";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { notification } from "antd";
import { useRouter } from "next/navigation";

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
  // const { toggleSidebar } = useSidebar();
  const { setDataChat, setIsSubmit } = useDepip();
  const router = useRouter();
  const [isLoading, setLoading] = useState<boolean>(false);
  const { address } = useAccount();
  const { sessionKey } = useDepip();
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
    if (!data.file) return;
    setLoading(true);
    const res = await api.mintAndRegistryIp({
      ...data,
      session: sessionKey,
      userWallet: address,
    });
    if (res) {
      let dataChat;
      if (res?.ipasset?.status == "success") {
        const previews = URL.createObjectURL(data?.file);
        dataChat = {
          from: address ?? "user",
          value: [
            {
              type: "image",
              content: `Mint Successfully!,\n ipasset\n{\n ipId: ${res?.ipasset?.ipId},\n tx: ${res?.ipasset?.tx} \n}\n,nft\n{\ntokenId:${res?.nft?.tokenId},\ntx:${res?.nft?.tx}\n}`,
              file: previews,
            },
          ],
        };
        // setIsSubmit(true);
        notification.success({
          message: "Successfully register",
        });
        setTimeout(() => {
          router.push(`/ip-assets/${res?.ipasset?.ipId}`);
        }, 5000);
      } else {
        dataChat = {
          from: address ?? "user",
          value: [
            {
              type: "string",
              content: JSON.stringify(res),
            },
          ],
        };
        notification.error({
          message: JSON.stringify(res),
        });
      }
      reset();
      // toggleSidebar();
      setDataChat(dataChat);
    }
    setLoading(false);
  };

  return (
    <div className="w-full flex-col justify-start items-start gap-6 inline-flex">
      {/* <div className="w-full p-5 rounded-2xl border border-stone-200 flex-col justify-start items-start gap-6 inline-flex">
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
      </div> */}
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
              <FileUpload setValue={setValue}></FileUpload>
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
                  router.back();
                }}
                className="self-stretch text-gray-800 text-xs font-light font-pixel uppercase leading-[18px]"
              >
                Cancel
              </button>
            </div>
          </div>
          <Button type="submit" disabled={isLoading} className="px-6 py-3">
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
          </Button>
        </div>
      </form>
    </div>
  );
};
export default MintAndRegistryIp;
