import Layout from "@/components/layout";
import { NextPageWithLayout } from "../_app";
import { useEffect, useRef, useState, type ReactElement } from "react";
import SideBarRight from "@/components/sidebar-right";
import { format } from "date-fns";
import { useAccount } from "wagmi";
import { IChat } from "@/models/chat";
import BotReply from "@/serivces/bot-api";
import DefaultPage from "@/components/default-page";
import ChatBox from "@/components/chat-box";
import utils from "@/utils";
import { useSidebar } from "@/provider/sidebar.provider";
import { useChat } from "@/provider/chat.provider";
let intervalId;
const Index: NextPageWithLayout = () => {
  const { address, isConnected } = useAccount();
  const [listMess, setListMess] = useState<IChat[]>([]);
  const [value, setValue] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [isLoading, setLoading] = useState<Boolean>(false);
  const messagesEndRef = useRef<HTMLInputElement>(null);
  const { isSidebarOpen, setTypeForm } = useSidebar();
  const { dataChat, sessionId, setSessionId } = useChat();

  const userChat = (message) => {
    const chat: IChat = {
      from: address ?? "user",
      value: [message],
    };
    setListMess((listMess) => [...listMess, chat]);
    setValue("");
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

      setListMess((listMess) => [...listMess, reply]);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (listMess.length > 0) {
      var lastMessage = listMess[listMess.length - 1];
      if (lastMessage?.from != "bot" && lastMessage?.value.length > 0) {
        onBotReply(lastMessage?.value[0]);
      }
    }

    window.addEventListener("wheel", (event) => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });
  }, [listMess]);
  useEffect(() => {
    if (dataChat) {
      userChat(dataChat);
    }
  }, [dataChat]);

  useEffect(() => {
    if (sessionId) {
      setListMess([]);
    }
  }, [sessionId]);

  useEffect(() => {
    if (address) {
      setAvatar(utils.genAVT(address as string));
      const date = new Date();
      setSessionId(address + date.getTime());
    }
  }, [address]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (isLoading) return;
      userChat(event.target.value);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative h-full flex flex-col pt-[118px] p-4">
      <SideBarRight />
      {listMess.length == 0 && <DefaultPage />}
      <ChatBox
        listMess={listMess}
        address={address}
        avatar={avatar}
        scrollToBottom={scrollToBottom}
        intervalId={intervalId}
        isLoading={isLoading}
        messagesEndRef={messagesEndRef}
      ></ChatBox>

      <div
        className={`w-full transition-all ${
          isSidebarOpen ? "pl-0 pr-[424px]" : "px-20"
        }`}
      >
        <input
          type="text"
          placeholder="Tell me what you're thinking about..."
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-5 py-3"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          value={value}
        />
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;
