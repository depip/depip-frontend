import { useEffect, useRef, useState, type ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout";
import Image from "next/image";
import logoA from "../../public/img/logo.svg";
import { parseISO, format } from "date-fns";
import {
  Avatar,
  BreadcrumbItem,
  Breadcrumbs,
  Spinner,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useAccount } from 'wagmi'
import { IChat } from "../../components/models/chat";
import ConnectButtonC from "@/components/connect-button";
import Typewriter from 'typewriter-effect';

let nextId = 0;
const Page: NextPageWithLayout = () => {
  const { address, isConnected } = useAccount();
  const [listMess, setListMess] = useState<IChat[]>([]);
  const [value, setValue] = useState<string>("");
  const [isLoading, setLoading] = useState<Boolean>(false);
  const messagesEndRef = useRef<HTMLInputElement>(null);
  let myTimeout;
  const userChat = (message) => {
    nextId++;
    const chat: IChat = {
      id: nextId,
      from: address ?? "user",
      value: message,
      date: new Date(),
    };
    setListMess((listMess) => [...listMess, chat]);
    setValue("");
    clearInterval(myTimeout);
    myTimeout = setInterval(() => {
      scrollToBottom();
    }, 1000);
  };

  const onBotReply = async (message) => {
    var botReply = await getChat(message);
    nextId++;
    const reply: IChat = {
      id: nextId,
      from: "bot",
      value: botReply,
      date: new Date(),
    };

    setTimeout(() => {
      setLoading(false);
      setListMess((listMess) => [...listMess, reply]);
    }, 100);
  };
  useEffect(() => {
    if (listMess.length > 0) {
      var lastMessage = listMess[listMess.length - 1];
      if (lastMessage?.from != "bot" && lastMessage?.value != "") {
        onBotReply(lastMessage?.value);
      }
    }

    window.addEventListener("wheel", (event) => {
      if (myTimeout) {
        clearInterval(myTimeout);
        console.log("clearInterval");
      }
    });
  }, [listMess]);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (isLoading) return;
      userChat(event.target.value);
    }
  };
  const getChat = async (message) => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://dev.depip.studio/bedrock/bedrock-agent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: message,
            sessionId: address,
          }),
        }
      );
      const text = await res.text();
      const data = JSON.parse(text);
      return data.completion;
    } catch (e: any) {
      return `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                chat bot
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                #
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="w-full mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-4 py-4 h-[calc(100vh-400px)] mb-[58px] overflow-auto">
          {listMess.map((item, index) => {
            if (item.from == address ?? "user") {
              return (
                <>
                  <div className="flex items-start gap-2.5 mb-4">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                      alt={address}
                    />
                    <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-500">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-300">
                          {address}
                        </span>
                      </div>
                      <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                        {item.value}
                      </p>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-900">
                        send {format(Date.now(), "hh:mm:ss")}
                      </span>
                    </div>
                  </div>
                </>
              );
            } else if (item.from == "bot") {
              return (
                <>
                  <div className="flex items-start gap-2.5 mb-4">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={logoA.src}
                      alt="bot"
                    />
                    <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-500 rounded-e-xl rounded-es-xl dark:bg-gray-900">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-green-300 dark:text-green-300">
                          bot pro vip aura depip
                        </span>
                      </div>
                      <div className="text-sm font-normal py-2.5 text-white dark:text-white">
                        {index != listMess.length - 1 && (
                          <span>{item.value}</span>
                        )}
                        {index == listMess.length - 1 && (
                          <Typewriter
                            options={{
                              delay: 1,
                              cursor: "",
                            }}
                            onInit={(typewriter) => {
                              typewriter
                                .typeString(item.value)
                                .callFunction(() => {
                                  scrollToBottom();
                                })
                                .start();
                            }}
                          />
                        )}
                      </div>
                      <span className="text-sm font-normal text-gray-200 dark:text-gray-400">
                        received {format(Date.now(), "hh:mm:ss")}
                      </span>
                    </div>
                  </div>
                </>
              );
            }
          })}

          {isLoading && (
            <>
              <div className="flex items-start gap-2.5 mb-10">
                <img
                  className="w-8 h-8 rounded-full"
                  src={logoA.src}
                  alt="bot"
                />
                <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-500 rounded-e-xl rounded-es-xl dark:bg-gray-900">
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </>
          )}
          <div className="p-2" ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <div className="px-4 py-2 flex gap-2 items-center border-t w-full bg-white absolute bottom-0 left-0 dark:border-t-gray-900 dark:bg-gray-900">
          <input
            type="text"
            placeholder="Type your message..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            value={value}
          />
          {!isConnected && <ConnectButtonC></ConnectButtonC>}
          {isConnected && (
            <button
              type="button"
              onClick={() => {
                userChat(value);
              }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              {isLoading ? (
                <>
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </>
              ) : (
                "Send"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
