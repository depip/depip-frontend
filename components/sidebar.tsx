import { useDepip } from "@/provider/depip.provider";
import { useAccount, useSmartAccount } from "@particle-network/connectkit";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useRouter, usePathname } from "next/navigation";
import { notification } from "antd";
import Link from "next/link";
import api from "@/serivces/story-api";
import { storytestnet } from "@/config/chain";
import { IpAsset } from "@/types/types";
import { getAddress } from "viem";

const SideBar = ({ isOpen, setIsOpen }) => {
  const { setListIP, listIP } = useDepip();
  const { address, isConnected } = useAccount();
  const pathname = usePathname();
  const {
    setDataChat,
    setSessionId,
    setSessionContent,
    sessionContent,
    sessionId,
  } = useDepip();

  const smartAccount = useSmartAccount();
  useEffect(() => {
    if (address && smartAccount && !sessionId) {
      newSessionId();
    }
    if (address) {
      getIpAssetOwner();
    }
  }, [address]);
  const newSessionId = () => {
    if (address) {
      const date = new Date();
      setSessionId(address + date.getTime());
      console.log("newSessionId");
      console.log(sessionId);
      setSessionContent([]);
      console.log("sessionContent bi xoa");
      loadListSession();
    }
  };
  const [logChat, setLogChat] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const loadListSession = () => {
    try {
      if (!address) return;
      const listChat = window.localStorage.getItem(address);
      const _logChat = listChat ? JSON.parse(listChat) : [];
      setLogChat(_logChat);
    } catch (error) {
      notification.error({
        message: error?.message,
      });
    }
  };
  useEffect(() => {
    console.log("new session content");
    console.log(sessionContent);
    loadListSession();
  }, [sessionContent]);
  const handleClickSession = (item) => {
    setSessionId(item.sessionId);
    setSessionContent(item.content);
    console.log("sessionContent tu click session");
    loadListSession();
  };
  const deleteSession = (item) => {
    if (!address) return;
    const listChat = window.localStorage.getItem(address);
    const _logChat = listChat ? JSON.parse(listChat) : [];
    const _logchatdel = _logChat.filter((x) => x.sessionId !== item.sessionId);
    const jsonChat = JSON.stringify(_logchatdel);
    window.localStorage.setItem(address, jsonChat);
    loadListSession();
  };
  const getTime = (sessionId: string) => {
    if (isConnected) {
      const timestring = sessionId.replace(address as string, "");
      if (!timestring) return "";
      const date = new Date(parseInt(timestring));
      return format(date, "dd/MM/yyyy HH:mm");
    }
    return "";
  };

  // const getData = async () => {
  //   const param = {
  //     options: {
  //       where: {
  //         tokenContract: "0xB9a173286C1052D9f5cd1223E64f111E10e033f2",
  //       },
  //     },
  //   };
  //   const res = await api.listAll(param);
  //   if (res && res.data) {
  //     await Promise.all(
  //       res.data.map(async (item) => {
  //         const it2 = await getDetail(item);
  //         item.img = it2?.image_url;
  //         item.name = it2?.name;
  //       })
  //     );
  //     setListIP(res.data);
  //   }
  // };

  // const getDetail = async (item) => {
  //   const res = await api.getDetail(
  //     "0xB9a173286C1052D9f5cd1223E64f111E10e033f2",
  //     item.nftMetadata.tokenId
  //   );
  //   if (res) {
  //     return res;
  //   }
  //   return "";
  // };

  const getIpAssetOwner = async () => {
    const newAdd = getAddress(address);
    const res = await api.getListIPAsset(
      newAdd,
      storytestnet.id.toString(),
      "1000",
      "0"
    );
    if (res) {
      setListIP(res);
    }
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className={`border-r border-[#EDF2F1] fixed top-0 z-40 w-[360px] h-screen p-6 transition-all bg-[#FAF9EF] ${
          isOpen ? "left-0" : "-left-[360px]"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex-col h-full justify-start items-start gap-4 inline-flex">
          <div
            className="flex-col justify-start items-start gap-2 flex"
            // onClick={() => setIsOpen(false)}
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
          <div className="h-32 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-32 flex-col justify-start items-start gap-1 flex">
                <Link
                  href={`/home`}
                  className={`self-stretch px-3 py-2  rounded-lg justify-start items-center gap-3 inline-flex ${
                    pathname === "/home" ? "bg-[#1c1c1c]/5" : ""
                  }`}
                >
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
                        d="M11.667 1.66675H8.33366V3.33341H6.66699V5.00008H5.00033V6.66675H3.33366V8.33341H1.66699V10.0001H3.33366V18.3334H9.16699V13.3334H10.8337V18.3334H16.667V10.0001L18.3337 10.0001V8.33341H16.667V6.66675H15.0003V5.00008H13.3337V3.33341H11.667V1.66675ZM11.667 3.33341V5.00008H13.3337V6.66675H15.0003V8.33341H16.667L16.667 10.0001H15.0003V16.6667H12.5003V11.6667H7.50033V16.6667H5.00033V10.0001L3.33366 10.0001V8.33341H5.00033V6.66675H6.66699V5.00008H8.33366V3.33341H11.667Z"
                        fill="#1C1C1C"
                        fill-opacity="0.4"
                      />
                    </svg>
                  </div>
                  <div className="w-[260px] flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-[#1c1c1c] text-base font-medium font-geist leading-normal">
                      Home
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/ip-assets`}
                  className={`self-stretch px-3 py-2  rounded-lg justify-start items-center gap-3 inline-flex ${
                    pathname === "/ip-assets" ? "bg-[#1c1c1c]/5" : ""
                  }`}
                >
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
                        d="M1.66699 2.5H3.33366H16.667H18.3337V17.5H16.667H3.33366H1.66699V2.5ZM16.667 15.8333V5.83333H3.33366V15.8333H16.667ZM13.3337 8.33333H11.667V10H10.0003L10.0003 11.6667H8.33366V10H6.66699V11.6667H8.33366V13.3333H10.0003V11.6667H11.667V10H13.3337V8.33333Z"
                        fill="#1C1C1C"
                        fill-opacity="0.4"
                      />
                    </svg>
                  </div>
                  <div className="w-[260px] flex-col justify-center items-start gap-0.5 inline-flex">
                    <div className="self-stretch text-[#1c1c1c] text-base font-medium font-geist leading-normal">
                      IP assets
                    </div>
                  </div>
                </Link>
                <Link
                  href={`/app`}
                  className={`self-stretch px-3 py-2  rounded-lg justify-start items-center gap-3 inline-flex ${
                    pathname === "/app" ? "bg-[#1c1c1c]/5" : ""
                  }`}
                >
                  <div className="self-stretch justify-start items-center gap-3 inline-flex">
                    <div className="w-5 h-5 relative bg-[#111111] rounded-[66px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <rect width="20" height="20" rx="10" fill="#111111" />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.99984 5H6.42841V6.42857H4.99984V5ZM3.57129 6.42857H4.99986V7.85714V7.85714V9.28571H3.57129V7.85714V7.85714V6.42857ZM4.99986 9.28572V10.7143V12.1429H3.57129V10.7143V9.28572H4.99986ZM4.99986 12.1429V13.5714L6.42841 13.5714V15H4.99984V13.5714L3.57129 13.5714V12.1429H4.99986ZM13.5713 5H14.9999V6.42857H13.5713V5ZM14.9998 13.5714L13.5713 13.5714V15H14.9999V13.5714L16.4284 13.5714V12.1429H14.9998V13.5714ZM14.9998 6.42857H16.4284V7.85714V9.28571H14.9998V7.85714V6.42857ZM16.4284 9.28572V10.7143V12.1429H14.9998V10.7143V9.28572H16.4284ZM7.85693 6.42857V7.85714V9.28571H9.28551V7.85714V6.42857L7.85693 6.42857ZM12.1427 12.1429V10.7143H13.5713V12.1429H12.1428V13.5714H10.7142V12.1429H12.1427ZM7.85693 12.1429V13.5714H9.28548H9.28551H10.7141V12.1429H9.28551H9.28548H7.85693ZM10.7142 9.28572V7.85714H12.1428V9.28572H10.7142ZM10.7142 7.85714V6.42857L12.1428 6.42857V7.85714H10.7142ZM7.85696 10.7143H6.42839V12.1429H7.85696V10.7143Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                      <div className="self-stretch text-[#1c1c1c] text-base font-medium font-geist leading-normal">
                        DePIP AI{" "}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {pathname === "/app" && (
            <div className="self-stretch shrink basis-0 flex-col justify-start items-start gap-8 flex">
              {/* <Button onClick={() => newSessionId()} className="w-auto px-5 h-10">
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
            </Button> */}
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-zinc-400 text-sm font-medium font-geist leading-tight">
                  Quick start
                </div>
                <div className="self-stretch rounded-2xl border border-zinc-900/opacity-10 flex-col justify-start items-start flex">
                  <div
                    className="self-stretch px-4 py-2 border-b border-zinc-900/opacity-10 justify-start items-center gap-4 inline-flex cursor-pointer"
                    onClick={() => {
                      newSessionId();
                      setDataChat({
                        from: address ?? "user",
                        value: [
                          {
                            type: "string",
                            content: "What is IP?",
                          },
                        ],
                      });
                    }}
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
                        What is IP?
                      </div>
                    </div>
                  </div>
                  <div
                    className="self-stretch px-4 py-2 border-b border-zinc-900/opacity-10 justify-start items-center gap-4 inline-flex cursor-pointer"
                    onClick={() => {
                      newSessionId();
                      setDataChat({
                        from: address ?? "user",
                        value: [
                          {
                            type: "string",
                            content:
                              "Can you show me full process to interact with Story Protocol by Depip server?",
                          },
                        ],
                      });
                    }}
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
                        Full process
                      </div>
                    </div>
                  </div>
                  <div
                    className="self-stretch px-4 py-2 border-b justify-start items-center gap-4 inline-flex cursor-pointer"
                    onClick={() => {
                      newSessionId();
                      setDataChat({
                        from: address ?? "user",
                        value: [
                          {
                            type: "string",
                            content:
                              "Can you create IP asset for me by Depip server",
                          },
                        ],
                      });
                    }}
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
                        Register IP asset
                      </div>
                    </div>
                  </div>
                  <div
                    className="self-stretch px-4 py-2 border-zinc-900/opacity-10 justify-start items-center gap-4 inline-flex cursor-pointer"
                    onClick={() => {
                      newSessionId();
                      setDataChat({
                        from: address ?? "user",
                        value: [
                          {
                            type: "string",
                            content: "Register PIL term",
                          },
                        ],
                      });
                    }}
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
                        Register PIL term
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-zinc-400 text-sm font-medium font-geist leading-tight">
                  Session
                </div>
                <div className="flex flex-col gap-1 overflow-auto max-h-52 w-full">
                  {logChat.map((item: any) => (
                    <>
                      {item?.sessionId && (
                        <div
                          className={`cursor-pointer self-stretch grow shrink overflow-hidden rounded-md border border-stone-50/opacity-20 flex justify-start items-center min-h-12 ${
                            sessionId === item?.sessionId ? "bg-gray-200" : ""
                          }`}
                        >
                          <div
                            onClick={() => handleClickSession(item)}
                            className="self-stretch pl-4 border-b border-zinc-900/opacity-10 justify-start items-center gap-4 inline-flex"
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
                                  d="M13.333 1.3335H2.66634H1.33301H1.33301V2.66683H1.33301V14.6668H2.66634V2.66683H13.333V10.6668H3.99968V12.0002H2.66651V13.3335H3.99984V12.0002H13.333H14.6663V10.6668V2.66683V1.3335H13.333Z"
                                  fill="#1C1C1C"
                                />
                              </svg>
                            </div>
                            <div className="grow shrink basis-0 flex-col justify-center items-start gap-0.5 inline-flex">
                              <div className="self-stretch text-zinc-900/opacity-80 text-sm font-medium font-geist leading-normal truncate w-[190px]">
                                {item?.content[0]?.value[0]?.content || ""}
                              </div>
                              <div className="text-zinc-900/opacity-40 text-xs font-normal font-geist leading-[18px]">
                                {getTime(item?.sessionId)}
                              </div>
                            </div>
                          </div>
                          <div
                            className="p-4"
                            onClick={(event) => {
                              event.preventDefault;
                              deleteSession(item);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
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
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          )}
          {pathname !== "/app" && listIP.length > 0 && (
            <div className="w-full">
              <div className="justify-between items-baseline flex">
                <div className="grow shrink basis-0 text-[#1c1c1c]/40 text-sm font-medium font-geist leading-tight">
                  Your IP assets
                </div>
                <Link
                  href={"/ip-assets"}
                  className="text-[#1c1c1c] text-sm font-medium font-geist leading-tight cursor-pointer"
                >
                  View all
                </Link>
              </div>
              <div className="mt-2 border border-gray-300 rounded-xl py-2">
                {listIP.map((item: IpAsset) => (
                  <Link
                    href={`/ip-assets/${item?.ip_id}`}
                    className="p-2 justify-between items-center gap-3 flex hover:bg-[#1c1c1c]/5 w-full"
                  >
                    <div className="rounded justify-start items-start gap-2 flex">
                      <img
                        className="min-w-[40px] w-[40px] h-[40px] rounded"
                        src={item?.ipAssetData?.metadata_offchain?.image?.url}
                      />
                    </div>
                    <div className="justify-start items-baseline flex flex-col grow">
                      <div className="text-[#1c1c1c] text-xs font-medium font-geist leading-normal">
                        {item?.name}
                      </div>
                      <div className="text-[#1c1c1c]/80 text-xs font-medium font-geist leading-normal">
                        {item?.token_id}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="grow"></div>
          <div className="h-[90px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[46px] flex-col justify-start items-start gap-1.5 flex">
              <div className="self-stretch text-[#1c1c1c]/40 text-sm font-normal font-geist leading-tight">
                DePIP Studio 2024. All rights reserved.
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-[#1c1c1c]/40 text-sm font-normal font-geist leading-tight">
                  Discover
                </div>
                <div className="text-[#1c1c1c]/40 text-sm font-normal font-geist leading-tight">
                  ·‎
                </div>
                <div className="text-[#1c1c1c]/40 text-sm font-normal font-geist leading-tight">
                  Privacy
                </div>
              </div>
            </div>
            <div className="self-stretch h-5 flex-col justify-start items-start gap-1.5 flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="text-[#1c1c1c]/40 text-sm font-normal font-geist leading-tight">
                  Powered by
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="59"
                  height="14"
                  viewBox="0 0 59 14"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1449_51849)">
                    <path
                      d="M5.10211 13.75C7.89438 13.75 10.1604 12.0625 10.1604 9.21576C10.1604 6.55978 8.18677 4.6962 5.10211 4.6962V6.6625C3.68405 6.6625 2.63146 6.03152 2.63146 4.74022C2.63146 3.44891 3.53785 2.68587 5.17521 2.68587C6.52018 2.68587 7.32423 3.24348 7.5289 3.97717H10.0142C9.82412 1.92283 7.89438 0.25 5.11673 0.25C2.17826 0.25 0.0877154 2.09891 0.0877154 4.79891C0.0877154 7.49891 2.26598 9.12772 5.10211 9.12772V7.26413C6.60789 7.26413 7.64586 7.93913 7.64586 9.27446C7.64586 10.5951 6.59327 11.3435 5.11673 11.3435C3.78638 11.3435 2.86537 10.7565 2.5876 9.94946H0C0.365481 12.0772 2.30984 13.75 5.10211 13.75Z"
                      fill="#1C1C1C"
                      fill-opacity="0.4"
                    />
                    <path
                      d="M14.7654 13.4565H17.5869V3.11143H21.6218V0.558167H10.7305V3.11143H14.7654V13.4565Z"
                      fill="#1C1C1C"
                      fill-opacity="0.4"
                    />
                    <path
                      d="M28.2005 13.75V12.4293C31.1682 12.4293 33.3903 10.0962 33.3903 7H34.7645C34.7645 3.33152 31.9284 0.25 28.2005 0.25C24.1948 0.25 21.6072 3.05272 21.6072 7C21.6072 10.6685 24.4726 13.75 28.2005 13.75ZM32.2354 7H30.9782C30.9782 8.67283 29.7501 9.90544 28.2005 9.90544V11.1674C25.9345 11.1674 24.2972 9.27446 24.2972 7.01467C24.2972 4.56413 25.7591 2.90598 28.2005 2.90598C30.4665 2.8913 32.2354 4.6375 32.2354 7Z"
                      fill="#1C1C1C"
                      fill-opacity="0.4"
                    />
                    <path
                      d="M43.5361 5.01902C43.5361 6.33967 42.8197 6.98532 41.4601 6.98532H38.8579V3.12608H41.3724C42.732 3.12608 43.5361 3.69836 43.5361 5.01902ZM36.0803 13.4565H38.8725V9.53858H41.4748C41.6356 9.53858 41.7818 9.52391 41.9426 9.52391L43.96 13.4565H46.9423L44.4425 8.73152C45.6266 7.90978 46.2114 6.55978 46.2114 5.03369C46.2114 2.53912 44.691 0.572819 41.3724 0.572819H36.0803V13.4565Z"
                      fill="#1C1C1C"
                      fill-opacity="0.4"
                    />
                    <path
                      d="M51.869 13.4565H54.559V8.01249L58.6231 0.572819H55.5238L51.869 7.45489V13.4565ZM49.5153 6.2076H52.5415L49.5153 0.572819H46.4891L49.5153 6.2076Z"
                      fill="#1C1C1C"
                      fill-opacity="0.4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1449_51849">
                      <rect
                        width="58.8424"
                        height="13.5"
                        fill="white"
                        transform="translate(0 0.25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.2768 10.2373C16.1603 10.1733 16.0451 10.1058 15.9323 10.0383C14.9298 9.4305 14.9298 8.02659 15.9323 7.42001C16.0451 7.35129 16.1603 7.28495 16.2768 7.22097C17.3673 6.61912 17.7415 5.28511 17.112 4.24254C16.4825 3.19997 15.0872 2.84218 13.9967 3.44403C13.9409 3.47483 13.8839 3.50564 13.8269 3.53525C12.75 4.10274 11.4129 3.3765 11.4105 2.20243V2.17992C11.4105 0.976223 10.3894 0 9.13033 0C7.87131 0 6.85021 0.976223 6.85021 2.17992C6.85021 2.18702 6.85021 2.19532 6.85021 2.20243C6.84773 3.37768 5.51064 4.10274 4.43378 3.53525C4.37678 3.50564 4.32101 3.47483 4.26401 3.44403C3.17352 2.84218 1.77818 3.19879 1.14867 4.24254C0.519158 5.28511 0.892156 6.61912 1.98389 7.22097C2.10037 7.28495 2.21562 7.35248 2.32838 7.42001C3.33089 8.02778 3.33089 9.43169 2.32838 10.0383C2.21562 10.107 2.10037 10.1733 1.98389 10.2373C0.893395 10.8392 0.519158 12.172 1.14867 13.2157C1.77818 14.2595 3.17352 14.6161 4.26401 14.0143C4.31977 13.9834 4.37678 13.9526 4.43378 13.923C5.51064 13.3555 6.84773 14.0818 6.85021 15.2559C6.85021 15.263 6.85021 15.2713 6.85021 15.2784C6.85021 16.4821 7.87131 17.4583 9.13033 17.4583C10.3894 17.4583 11.4105 16.4821 11.4105 15.2784V15.2559C11.4129 14.0806 12.75 13.3555 13.8269 13.9218C13.8839 13.9515 13.9397 13.9823 13.9967 14.0131C15.0872 14.6149 16.4825 14.2583 17.112 13.2146C17.7415 12.172 17.3685 10.838 16.2768 10.2361V10.2373ZM16.1454 12.6826C15.9385 13.0262 15.5506 13.2394 15.1342 13.2394C14.9323 13.2394 14.7315 13.1873 14.5543 13.0902C12.9074 12.1815 11.0325 11.7005 9.13033 11.7005C7.22817 11.7005 5.35326 12.1815 3.70637 13.0902C3.52669 13.1897 3.33089 13.2394 3.12643 13.2394C2.71006 13.2394 2.32343 13.0262 2.11524 12.6826C1.79429 12.1507 1.98513 11.4683 2.54153 11.1614C5.88736 9.3144 7.96549 5.87274 7.96549 2.17992C7.96549 1.56622 8.48843 1.06626 9.13033 1.06626C9.77224 1.06626 10.2952 1.56622 10.2952 2.17992C10.2952 5.87274 12.3733 9.3144 15.7191 11.1614C15.9881 11.3107 16.1814 11.55 16.2619 11.8379C16.3425 12.1258 16.3016 12.4255 16.1454 12.6826Z"
                    fill="#1C1C1C"
                    fill-opacity="0.4"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="13"
                  viewBox="0 0 37 13"
                  fill="none"
                >
                  <path
                    d="M34.6004 4.14148H36.4371V12.4093H34.6004V11.2187C33.9541 12.0951 32.9508 12.6242 31.6243 12.6242C29.3114 12.6242 27.3896 10.7226 27.3896 8.27537C27.3896 5.81157 29.3114 3.92651 31.6243 3.92651C32.9508 3.92651 33.9541 4.45565 34.6004 5.3155V4.14148ZM31.9134 10.9211C33.4439 10.9211 34.6004 9.81318 34.6004 8.27537C34.6004 6.73756 33.4439 5.62968 31.9134 5.62968C30.3828 5.62968 29.2263 6.73756 29.2263 8.27537C29.2263 9.81318 30.3828 10.9211 31.9134 10.9211Z"
                    fill="#1C1C1C"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M24.2879 5.53024C24.7981 4.40582 25.8355 3.99243 26.9069 3.99243V5.92709C25.6994 5.84442 24.2879 6.39009 24.2879 8.24207V12.409H22.4512V4.14125H24.2879V5.53024Z"
                    fill="#1C1C1C"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M18.4667 4.14136H20.3034V12.4091H18.4667V11.3509C17.9055 12.2107 16.9871 12.6241 15.8307 12.6241C13.9259 12.6241 12.5654 11.3674 12.5654 9.21778V4.14136H14.4021V9.03589C14.4021 10.2926 15.1504 10.954 16.3069 10.954C17.5143 10.954 18.4667 10.2595 18.4667 8.57289V4.14136Z"
                    fill="#1C1C1C"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M9.56545 12.4091L8.73213 10.0776H3.6642L2.83089 12.4091H0.705078L5.02472 0.834229H7.37161L11.6742 12.4091H9.56545ZM4.31045 8.29178H8.08588L6.19817 3.06653L4.31045 8.29178Z"
                    fill="#1C1C1C"
                    fill-opacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
