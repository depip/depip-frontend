import { useSidebar } from "@/provider/sidebar.provider";

const FormAttachPilTerm = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  return (
    <div className="w-full p-5 rounded-2xl border border-stone-200 flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="opacity-80 text-zinc-900 text-xs font-normal font-pixel uppercase tracking-tight">
          My Asset
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
      <div className="self-stretch h-[284px] flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-zinc-900/80 text-sm font-semibold font-geist leading-tight">
            License term
          </div>
          <div className="self-stretch  overflow-hidden rounded-lg border border-zinc-900/10 justify-between items-center inline-flex bg-white">
            <input
              className="text-zinc-900/40 text-base font-medium font-geist leading-normal  p-4"
              placeholder="Choose a license term"
            />

          
          </div>
        </div>
        <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-zinc-900/80 text-sm font-semibold font-geist leading-tight">
            Metadata 1
          </div>
          <div className="self-stretch overflow-hidden rounded-lg border border-zinc-900/10 justify-start items-start gap-4 inline-flex">
            <input
              className="text-zinc-900/40 text-base font-medium font-geist leading-normal p-4 w-full"
              placeholder="Enter metadata"
            />
          </div>
        </div>
        <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-zinc-900/80 text-sm font-semibold font-geist leading-tight">
            Metadata 2
          </div>
          <div className="self-stretch overflow-hidden rounded-lg border border-zinc-900/10 justify-start items-start gap-4 inline-flex">
            <input
              className="text-zinc-900/40 text-base font-medium font-geist leading-normal p-4 w-full"
              placeholder="Enter metadata"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch justify-end items-start gap-2 inline-flex">
        <div className="px-6 py-3 rounded-[80px] justify-center items-center gap-2 flex">
          <div className="rounded-lg flex-col justify-center items-start inline-flex">
            <button
              onClick={() => toggleSidebar}
              className="self-stretch text-zinc-900 text-xs font-normal font-pixel uppercase leading-[18px]"
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="px-6 py-3 rounded-[80px] bg-gradient-to-br from-gray-600  to-black border border-white justify-center items-center gap-2 flex">
          <div className="rounded-lg flex-col justify-center items-start inline-flex">
            <button className="self-stretch text-white text-xs font-normal font-pixel uppercase leading-[18px]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormAttachPilTerm;
