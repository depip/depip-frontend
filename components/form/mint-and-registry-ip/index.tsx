import { useChat } from "@/provider/chat.provider";
import { useSidebar } from "@/provider/sidebar.provider";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import api from "@/serivces/form-api";
import Button from "@/components/button";

const MintAndRegistryIp = () => {
  const { toggleSidebar } = useSidebar();
  const { setDataChat } = useChat();
  const [isLoading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const res = await api.attackPILTerms(data);
    if (res) {
      toggleSidebar();

      setDataChat(JSON.stringify(res));
    }

    setLoading(false);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {};
      reader.readAsDataURL(file);
    }
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
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
              Name
            </div>
            <div className="w-full flex flex-col gap-1">
              <input
                className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                  errors.name ? "border-red-500" : "border-zinc-900/10"
                } `}
                placeholder="Enter name"
                id="name"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className=" text-sm text-red-600 dark:text-red-500">
                  Name is required
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
                id="description "
                {...register("description ", { required: true })}
              />
              {errors.tokenId && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  Description is required
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
                className={`rounded-lg border text-gray-800 text-base font-light font-geist leading-normal p-4 w-full ${
                  errors.recipient ? "border-red-500" : "border-zinc-900/10"
                } `}
                placeholder="Enter recipient"
                type="text"
                id="recipient  "
                {...register("recipient  ", { required: true })}
              />
              {errors.tokenId && (
                <p className="text-sm text-red-600 dark:text-red-500">
                  Recipient is required
                </p>
              )}
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-gray-800 text-sm font-semibold font-geist leading-tight">
              File
            </div>
            <div className="cursor-pointer" onClick={handleIconClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.50037 2.5H5.8337V2.50001H5.83366V4.16668V4.1667H3.33386H1.6672V4.16672V5.83333H1.66699V15.8333H1.6672V15.8334V15.8334V17.5V17.5H3.33386H16.6671H18.3338L18.3339 15.8334H18.3338V5.83337H18.3339V4.1667H18.3338H18.3337V4.16666H14.167V2.5H12.5004H7.50037ZM14.167 5.83333L14.1672 5.83333V5.83337H16.667V15.8333H16.6671V15.8334H3.33386V5.83338H7.50053L7.50053 5.83337L7.50053 4.16672L7.50053 4.1667H7.50037V4.16668H12.5003V5.83333V5.83335H14.167V5.83333H14.167ZM8.33386 7.50002H11.6672V9.16669H8.33386V7.50002ZM11.6671 12.5H8.33386V14.1667H11.6672V12.5H13.3338V9.16669H11.6671V12.5ZM6.66699 9.16669H8.33366V12.5H6.66699V9.16669Z"
                  fill="#1C1C1C"
                  fill-opacity="0.6"
                />
              </svg>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
              />
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
          <Button type="submit" disabled={isLoading} className="px-6 py-3">
            {isLoading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default MintAndRegistryIp;
