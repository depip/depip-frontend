import { useChat } from "@/provider/chat.provider";
import { useSidebar } from "@/provider/sidebar.provider";
import { useAccount } from "wagmi";
import Button from "./button";

const SideBar = ({ isOpen, setIsOpen }) => {
  const { isSidebarOpen, setTypeForm } = useSidebar();
  const { address } = useAccount();
  const { setDataChat, sessionId, setSessionId } = useChat();
  const newSessionId = () => {
    if (address) {
      const date = new Date();
      setSessionId(address + date.getTime());
    }
  };
  return (
    <>
      <aside
        id="default-sidebar"
        className={`shadow-md fixed top-0 z-40 w-[360px] h-screen p-6 transition-all bg-[#FAF9EF] ${
          isOpen ? "left-0" : "-left-[360px]"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex-col h-full justify-start items-start gap-10 inline-flex">
          <div
            className="flex-col justify-start items-start gap-2 flex"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <svg
                width="97"
                height="28"
                viewBox="0 0 97 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.04167 0H0V4V8V12V16V20H4.04167H8.08333H12.125H16.1667V16H20.2083V12V8V4H16.1667V8V12V16H12.125H8.08333H4.04167V12V8V4L8.08333 4H12.125H16.1667V0H12.125H8.08333H4.04167ZM28.2917 0H24.25V4V8V12V16V20H28.2917H32.3333H36.375H40.4167V24V28H44.4583V24V20H48.5H52.5417H56.5833V16H60.625V12H64.6667V16V20V24H60.625V28H64.6667H68.7083H72.75V24H68.7083V20V16V12H72.75V8H68.7083H64.6667H60.625V12H56.5833V8H52.5417H48.5H44.4583H40.4167V12V16H36.375H32.3333H28.2917V12H32.3333H36.375V8H32.3333H28.2917V4L32.3333 4H36.375H40.4167V0H36.375H32.3333H28.2917ZM56.5833 12V16H52.5417H48.5H44.4583V12H48.5H52.5417H56.5833ZM76.7917 8H80.8333H84.875H88.9167H92.9583V12H88.9167H84.875H80.8333V16H84.875H88.9167H92.9583V20H88.9167H84.875H80.8333V24V28H76.7917V24V20V16V12V8ZM92.9583 16V12H97V16H92.9583ZM44.4583 4V2.14577e-06L92.9583 0V4L44.4583 4ZM0 24V28L36.375 28V24L0 24Z"
                  fill="#111111"
                />
              </svg>
            </div>
          </div>
          <div className="self-stretch shrink basis-0 flex-col justify-start items-start gap-8 flex">
            <Button onClick={() => newSessionId()} className="w-auto px-5 h-10">
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
                New chat
              </div>
            </Button>
            <div className="self-stretch h-[220px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-zinc-400 text-sm font-medium font-geist leading-tight">
                Get started
              </div>
              <div className="self-stretch rounded-2xl border border-zinc-900/opacity-10 flex-col justify-start items-start flex">
                <div
                  className="self-stretch px-4 py-3 border-b border-zinc-900/opacity-10 justify-start items-center gap-4 inline-flex cursor-pointer"
                  onClick={() => setDataChat("Create IP asset")}
                >
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
                        d="M13.333 1.3335H2.66634H1.33301H1.33301V2.66683H1.33301V14.6668H2.66634V2.66683H13.333V9.3335H14.6663V2.66683V1.3335H13.333ZM6.66634 10.6668H3.99968V12.0002H2.66651V13.3335H3.99984V12.0002H6.66634V10.6668ZM10.6663 8.00016H11.9997V10.6668H14.6663V12.0002H13.333V13.3335H11.9997V14.6668H10.6663V12.0002H7.99968V10.6668H9.33301V9.3335H10.6663V8.00016Z"
                        fill="#1C1C1C"
                        fill-opacity="0.4"
                      />
                    </svg>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-zinc-900 text-base font-medium font-geist leading-normal">
                      Create IP asset
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch px-4 py-3 border-b border-zinc-900/opacity-10 justify-start items-center gap-4 inline-flex cursor-pointer"
                  onClick={() => setDataChat("Register PIL Terms")}
                >
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
                        d="M13.333 1.3335H2.66634H1.33301H1.33301V2.66683H1.33301V14.6668H2.66634V2.66683H13.333V9.3335H14.6663V2.66683V1.3335H13.333ZM6.66634 10.6668H3.99968V12.0002H2.66651V13.3335H3.99984V12.0002H6.66634V10.6668ZM10.6663 8.00016H11.9997V10.6668H14.6663V12.0002H13.333V13.3335H11.9997V14.6668H10.6663V12.0002H7.99968V10.6668H9.33301V9.3335H10.6663V8.00016Z"
                        fill="#1C1C1C"
                        fill-opacity="0.4"
                      />
                    </svg>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-zinc-900 text-base font-medium font-geist leading-normal">
                      Register PIL Terms
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch px-4 py-3 border-b border-zinc-900/opacity-10 justify-start items-center gap-4 inline-flex cursor-pointer"
                  onClick={() => setDataChat("Attach terms to an IP asset")}
                >
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
                        d="M13.333 1.3335H2.66634H1.33301H1.33301V2.66683H1.33301V14.6668H2.66634V2.66683H13.333V9.3335H14.6663V2.66683V1.3335H13.333ZM6.66634 10.6668H3.99968V12.0002H2.66651V13.3335H3.99984V12.0002H6.66634V10.6668ZM10.6663 8.00016H11.9997V10.6668H14.6663V12.0002H13.333V13.3335H11.9997V14.6668H10.6663V12.0002H7.99968V10.6668H9.33301V9.3335H10.6663V8.00016Z"
                        fill="#1C1C1C"
                        fill-opacity="0.4"
                      />
                    </svg>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-zinc-900 text-base font-medium font-geist leading-normal">
                      Attach terms to an IP asset
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch px-4 py-3 justify-start items-center gap-4 inline-flex cursor-pointer"
                  onClick={() => setDataChat("Mint a license token")}
                >
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
                        d="M13.333 1.3335H2.66634H1.33301H1.33301V2.66683H1.33301V14.6668H2.66634V2.66683H13.333V9.3335H14.6663V2.66683V1.3335H13.333ZM6.66634 10.6668H3.99968V12.0002H2.66651V13.3335H3.99984V12.0002H6.66634V10.6668ZM10.6663 8.00016H11.9997V10.6668H14.6663V12.0002H13.333V13.3335H11.9997V14.6668H10.6663V12.0002H7.99968V10.6668H9.33301V9.3335H10.6663V8.00016Z"
                        fill="#1C1C1C"
                        fill-opacity="0.4"
                      />
                    </svg>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-zinc-900 text-base font-medium font-geist leading-normal">
                      Mint a license token
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
              {/* <div className="self-stretch text-zinc-400 text-sm font-medium font-geist leading-tight">
                Recent
              </div>
              <div className="self-stretch grow shrink overflow-hidden rounded-2xl border border-stone-50/opacity-20 flex-col justify-start items-start flex">
                <div className="self-stretch px-4 py-3 bg-gradient-to-b from-white to-white border-b border-zinc-900/opacity-10 justify-start items-center gap-4 inline-flex">
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
                        d="M13.333 1.3335H2.66634H1.33301H1.33301V2.66683H1.33301V14.6668H2.66634V2.66683H13.333V10.6668H3.99968V12.0002H2.66651V13.3335H3.99984V12.0002H13.333H14.6663V10.6668V2.66683V1.3335H13.333Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-zinc-900 text-base font-medium font-geist leading-normal truncate w-[240px]">
                      I got this manga art and want to turn it into an IP asset.
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-4 py-3 border-b border-zinc-900/opacity-10 justify-start items-center gap-4 inline-flex">
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
                        d="M13.333 1.3335H2.66634H1.33301H1.33301V2.66683H1.33301V14.6668H2.66634V2.66683H13.333V10.6668H3.99968V12.0002H2.66651V13.3335H3.99984V12.0002H13.333H14.6663V10.6668V2.66683V1.3335H13.333Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-zinc-900/opacity-80 text-base font-medium font-geist leading-normal truncate w-[240px]">
                      In the mood for a specific genre like shonen, shoujo, or
                      slice-of-life? Swap recommendations!
                    </div>
                    <div className="text-zinc-900/opacity-40 text-xs font-normal font-geist leading-[18px]">
                      20 minutes ago
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-4 py-3 border-b border-zinc-900/opacity-10 justify-start items-center gap-4 inline-flex">
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
                        d="M13.333 1.3335H2.66634H1.33301H1.33301V2.66683H1.33301V14.6668H2.66634V2.66683H13.333V10.6668H3.99968V12.0002H2.66651V13.3335H3.99984V12.0002H13.333H14.6663V10.6668V2.66683V1.3335H13.333Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-zinc-900/opacity-80 text-base font-medium font-geist leading-normal truncate w-[240px]">
                      Got a wild theory about your favorite series
                    </div>
                    <div className="text-zinc-900/opacity-40 text-xs font-normal font-geist leading-[18px]">
                      5 hours ago
                    </div>
                  </div>
                </div>
                <div className="self-stretch px-4 py-3 justify-start items-center gap-4 inline-flex">
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
                        d="M13.333 1.3335H2.66634H1.33301H1.33301V2.66683H1.33301V14.6668H2.66634V2.66683H13.333V10.6668H3.99968V12.0002H2.66651V13.3335H3.99984V12.0002H13.333H14.6663V10.6668V2.66683V1.3335H13.333Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </div>
                  <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-zinc-900/opacity-80 text-base font-medium font-geist leading-normal truncate w-[240px]">
                      Identifying obscure titles based on descriptions
                    </div>
                    <div className="text-zinc-900/opacity-40 text-xs font-normal font-geist leading-[18px]">
                      10 hours ago
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="grow"></div>
          <div className="self-stretch h-[134px] flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-14 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-5 relative">
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
                      d="M17.5 18.3335H2.5V1.66683H12.5V3.3334H14.1667V4.99996H15.8329V6.66663H14.1663V5.00006H12.5V6.66683H17.5V18.3335ZM4.16667 3.3335V16.6668H15.8333V8.3335H10.8333V3.3335H4.16667ZM10.8337 13.3335H5.83374V15.0002H10.8337V13.3335ZM5.83374 10.0001H14.1671V11.6667H5.83374V10.0001ZM9.16707 6.66663H5.83374V8.33329H9.16707V6.66663Z"
                      fill="#1C1C1C"
                      fill-opacity="0.8"
                    />
                  </svg>
                </div>
                <div className="grow shrink basis-0 text-zinc-900/opacity-80 text-base font-medium font-geist leading-normal">
                  Docs
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-5 relative">
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
                      d="M15.8329 3.3335H4.16626V5.00006H2.5V10.0001V11.6667V15.0001V16.6667H4.16667H6.66626H8.33293H8.33333V15.0001H8.33293V11.6667H8.33333V10.0001H8.33293H6.66626H4.16667V5.00016H15.8329V3.3335ZM15.8337 5.00006H17.5004V16.6667H17.4996H15.8337H13.3329H11.6663V15.0001V11.6667V10.0001H13.3329H15.8337V5.00006ZM15.8337 11.6667V15.0001H13.3329V11.6667H15.8337ZM4.16667 11.6667H6.66626V15.0001H4.16667V11.6667Z"
                      fill="#1C1C1C"
                      fill-opacity="0.8"
                    />
                  </svg>
                </div>
                <div className="grow shrink basis-0 text-zinc-900/opacity-80 text-base font-medium font-geist leading-normal">
                  Support
                </div>
              </div>
            </div>
            <div className="self-stretch h-[46px] flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch text-zinc-400 text-sm font-normal font-geist leading-tight">
                DePIP Studio 2024. All rights reserved.
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-zinc-400 text-sm font-normal font-geist leading-tight">
                  Discover
                </div>
                <div className="text-zinc-400 text-sm font-normal font-geist leading-tight">
                  ·‎
                </div>
                <div className="text-zinc-400 text-sm font-normal font-geist leading-tight">
                  Privacy
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
