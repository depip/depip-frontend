import { useSidebar } from "@/provider/sidebar.provider";
import Button from "../button";
import Link from "next/link";
import { useAccount } from "@particle-network/connectkit";
import { useEffect, useRef, useState } from "react";
import utils from "@/utils";
import { useDepip } from "@/provider/depip.provider";
import { IChat } from "@/types/types";
import BotReply from "@/serivces/bot-api";
let intervalId;
const ChatBox = ({ isLoading, setLoading }) => {
  const { isSidebarOpen, setTypeForm } = useSidebar();
  const { address } = useAccount();
  const [avatar, setAvatar] = useState<string>("");
  const messagesEndRef = useRef<HTMLInputElement>(null);
  const { sessionContent, setSessionContent, sessionId, dataChat } = useDepip();

  const userChat = (dataChat: IChat) => {
    if (Object.keys(dataChat).length == 0) return;
    setSessionContent((sessionContent) => [...sessionContent, dataChat]);
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      scrollToBottom();
    }, 1000);
  };

  const onBotReply = async (message) => {
    setLoading(true);

    const res = await BotReply({ prompt: message, sessionId: sessionId });
    if (res.completion) {
      const chunks = utils.extractStringAndScripts(res.completion);

      const reply: IChat = {
        from: "bot",
        value: chunks,
      };

      setSessionContent((sessionContent) => [...sessionContent, reply]);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sessionContent.length > 0) {
      var lastMessage = sessionContent[sessionContent.length - 1];
      if (
        lastMessage &&
        lastMessage?.value &&
        lastMessage?.from != "bot" &&
        lastMessage?.value[0]?.type == "string"
      ) {
        onBotReply(lastMessage?.value[0]?.content);
      }
    }

    window.addEventListener("wheel", () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });
  }, [sessionContent]);

  useEffect(() => {
    if (dataChat) {
      userChat(dataChat);
    }
  }, [dataChat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (address) {
      setAvatar(utils.genAVT(address as string));
    }
  }, [address]);

  return (
    <div
      className={`grow overflow-auto transition-all pt-2 ${
        isSidebarOpen ? "pl-0 pr-[424px]" : "px-20"
      }`}
    >
      {sessionContent.map((item, index) => (
        <>
          {item.from !== "bot" && (
            <>
              {item.value[0]?.type == "image" && (
                <div key={index}>
                  <div className="flex flex-col items-end gap-4 mb-4">
                    <div className="flex gap-2">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={avatar}
                        alt={address}
                      />
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-300">
                          {`${address?.substring(
                            0,
                            6
                          )} ... ${address?.substring(
                            address.length - 6,
                            address.length
                          )}`}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col leading-1.5 p-4 border border-gray-200  rounded-xl">
                      <img src={item.value[0]?.file}></img>
                    </div>
                  </div>
                </div>
              )}
              {item.value[0]?.type == "link" && (
                <div key={index}>
                  <div className="flex flex-col items-end gap-4 mb-4">
                    <div className="flex gap-2">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={avatar}
                        alt={address}
                      />
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-300">
                          {`${address?.substring(
                            0,
                            6
                          )} ... ${address?.substring(
                            address.length - 6,
                            address.length
                          )}`}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col leading-1.5 p-4 border border-gray-200  rounded-xl">
                      <p className="text-sm font-normal">
                        {item.value[0].content}
                      </p>
                      <Link
                        href={item.value[0].link}
                        target="_blank"
                        className="text-blue-600 underline dark:text-blue-500"
                      >
                        {item.value[0].link}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              {item.value[0]?.type == "string" && (
                <div key={index}>
                  <div className="flex flex-col items-end gap-4 mb-4">
                    <div className="flex gap-2">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={avatar}
                        alt={address}
                      />
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-300">
                          {`${address?.substring(
                            0,
                            6
                          )} ... ${address?.substring(
                            address.length - 6,
                            address.length
                          )}`}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col leading-1.5 p-4 border border-gray-200  rounded-xl">
                      <p className="text-sm font-normal">
                        {item.value[0].content}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          {item.from == "bot" && (
            <div key={index}>
              <div className="flex flex-col items-start gap-2 mb-4 ">
                <div className="flex gap-2 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="min-w-6 min-h-6 rounded-full border border-gray-200"
                  >
                    <rect width="24" height="24" rx="12" fill="#111111" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.99993 6H7.71422V7.71429H5.99993V6ZM5.99993 16.2857H4.28564V14.5714V12.8571V11.1429V9.42857V7.71429H5.99993V9.42857V11.1429V12.8571V14.5714V16.2857ZM5.99993 16.2857H7.71422V18H5.99993V16.2857ZM16.2856 6H17.9999V7.71429H16.2856V6ZM17.9999 16.2857V14.5714V12.8571V11.1429V9.42857V7.71429H19.7142V9.42857V11.1429V12.8571V14.5714V16.2857H17.9999ZM17.9999 16.2857V18H16.2856V16.2857H17.9999ZM9.4285 7.71429V9.42857V11.1429H11.1428V9.42857V7.71429L9.4285 7.71429ZM14.5714 14.5714V12.8571H16.2856V14.5714H14.5714ZM9.4285 14.5714V12.8571H7.71422V14.5714H9.4285ZM9.4285 14.5714V16.2857H11.1428H12.8571H14.5714V14.5714H12.8571H11.1428H9.4285ZM12.8571 11.1429V9.42857V7.71429L14.5714 7.71429V9.42857V11.1429H12.8571Z"
                      fill="white"
                    />
                  </svg>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="opacity-80 text-right text-zinc-900/opacity-80 text-xs font-normal font-pixel uppercase leading-[18px]">
                      DePIP
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-normal text-black">
                    {/* {index != listMess.length - 1 && (
                      <span style={{ whiteSpace: "pre-line" }}>
                        {item.value}
                      </span>
                    )}
                    {index == listMess.length - 1 && (
                      <TypeAnimation
                        sequence={[
                          item.value,
                          () => {
                            scrollToBottom();
                            clearInterval(intervalId);
                          },
                        ]}
                        wrapper="span"
                        speed={99}
                        style={{ whiteSpace: "pre-line" }}
                      />
                    )} */}
                    {item.value.map((value, index) => (
                      <>
                        {value.type == "string" && (
                          <span style={{ whiteSpace: "pre-line" }}>
                            {value.content}
                          </span>
                        )}

                        {value.type == "script" && (
                          <Button
                            onClick={() => setTypeForm(value.json?.type)}
                            className="px-5 py-2"
                          >
                            <span className="text-white text-xs font-normal font-pixel uppercase">
                              {value.json?.type?.replace(/_/g, " ") ||
                                value.json?.type}
                            </span>
                          </Button>
                        )}
                        {value.type == "link" && (
                          <a href={value.link} className="px-5 py-2">
                            {value.link}
                          </a>
                        )}
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ))}

      {isLoading && (
        <div className="flex flex-col items-start gap-2 mb-4">
          <div className="flex gap-2 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="min-w-6 min-h-6 rounded-full border-2 border-gray-200 animate-spin"
            >
              <rect width="24" height="24" rx="12" fill="#111111" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.99993 6H7.71422V7.71429H5.99993V6ZM5.99993 16.2857H4.28564V14.5714V12.8571V11.1429V9.42857V7.71429H5.99993V9.42857V11.1429V12.8571V14.5714V16.2857ZM5.99993 16.2857H7.71422V18H5.99993V16.2857ZM16.2856 6H17.9999V7.71429H16.2856V6ZM17.9999 16.2857V14.5714V12.8571V11.1429V9.42857V7.71429H19.7142V9.42857V11.1429V12.8571V14.5714V16.2857H17.9999ZM17.9999 16.2857V18H16.2856V16.2857H17.9999ZM9.4285 7.71429V9.42857V11.1429H11.1428V9.42857V7.71429L9.4285 7.71429ZM14.5714 14.5714V12.8571H16.2856V14.5714H14.5714ZM9.4285 14.5714V12.8571H7.71422V14.5714H9.4285ZM9.4285 14.5714V16.2857H11.1428H12.8571H14.5714V14.5714H12.8571H11.1428H9.4285ZM12.8571 11.1429V9.42857V7.71429L14.5714 7.71429V9.42857V11.1429H12.8571Z"
                fill="white"
              />
            </svg>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="opacity-80 text-right text-zinc-900/opacity-80 text-xs font-normal font-pixel uppercase leading-[18px]">
                DePIP
              </span>
            </div>
          </div>
          <div className="flex flex-col animate-pulse space-y-2.5 w-full">
            <div className="flex items-center w-1/2">
              <div className="h-2.5 bg-gray-500 rounded-full dark:bg-gray-700 w-32"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[480px]">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-500 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full max-w-[400px]">
              <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-600 w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-700 w-80"></div>
              <div className="h-2.5 ms-2 bg-gray-500 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
          </div>
        </div>
      )}
      <div className="p-2" ref={messagesEndRef} />
    </div>
  );
};

export default ChatBox;
function setAvatar(arg0: any) {
  throw new Error("Function not implemented.");
}
