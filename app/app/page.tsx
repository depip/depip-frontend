"use client";
import Layout from "@/components/layout";
import { useEffect, useRef, useState, type ReactElement } from "react";
import SideBarRight from "@/components/sidebar-right";
import BotReply from "@/serivces/bot-api";
import DefaultPage from "@/components/default-page";
import ChatBox from "@/components/chat-box";
import utils from "@/utils";
import { useChat } from "@/provider/chat.provider";
import { IChat } from "@/models/interface.common";
import InputGroup from "@/components/input-group";
import { useAccount } from "@particle-network/connectkit";
let intervalId;
const Index = () => {
  // const { smartAddress } = useChat();
  const { address, isConnected } = useAccount();
  const [listMess, setListMess] = useState<IChat[]>([]);
  const [value, setValue] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const messagesEndRef = useRef<HTMLInputElement>(null);
  const { dataChat, sessionId, setSessionContent, sessionContent } = useChat();
  const [isLoading, setLoading] = useState<boolean>(false);

  const userChat = (dataChat) => {
    setListMess((listMess) => [...listMess, dataChat]);
    setValue("");
    setImage("");
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
      setSessionContent([...listMess, reply]);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (listMess.length > 0) {
      var lastMessage = listMess[listMess.length - 1];
      if (
        lastMessage &&
        lastMessage?.value &&
        lastMessage?.from != "bot" &&
        lastMessage?.value[0]?.type == "string"
      ) {
        onBotReply(lastMessage?.value[0]?.content);
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
    if (sessionContent) {
      setListMess(sessionContent);
    }
  }, [sessionContent]);

  // useEffect(() => {
  //   if (sessionId) {
  //     setListMess([]);
  //   }
  // }, [sessionId]);

  useEffect(() => {
    if (address) {
      setAvatar(utils.genAVT(address as string));
      const date = new Date();
      // newSmartAccount();
    }
  }, [address]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="relative h-full flex flex-col pt-[118px] p-4">
        <SideBarRight />
        {listMess.length == 0 && <DefaultPage />}
        <ChatBox
          listMess={listMess}
          address={address}
          avatar={avatar}
          isLoading={isLoading}
          messagesEndRef={messagesEndRef}
        ></ChatBox>
        <InputGroup
          isLoading={isLoading}
          userChat={userChat}
          value={value}
          setValue={setValue}
          image={image}
          setImage={setImage}
        ></InputGroup>
      </div>
    </Layout>
  );
};

export default Index;
