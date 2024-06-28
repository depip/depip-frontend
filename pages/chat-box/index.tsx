import { useEffect, useState, type ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout";
import Image from "next/image";
import logoA from "../../public/img/logo.svg";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useAccount } from 'wagmi'
import { IChat } from "../models/chat";

let nextId = 0;
const Page: NextPageWithLayout = () => {
  const account = useAccount()
  // const [listMess, setListMess] = useState<IChat[]>([]);
  const listMess: IChat[] = [];
  const [value, setValue] = useState<string>("");

  const userChat = async (message) => {
    nextId++;
    const chat: IChat = {
      id: nextId,
      from: account.address ?? 'user',
      value: message,
      date: new Date()
    }
    listMess.push(chat);
    setValue('');
  }
  const onBotReply = async (message) => {
    getChat(message).then(z => {
      nextId++;
      const reply: IChat = {
        id: nextId,
        from: 'bot',
        value: z,
        date: new Date()
      }
      listMess.push(reply);
    });
    
  }
  useEffect(() => {
    if (listMess.length > 0) {
      var lastMessage = listMess[listMess.length - 1];
      if (lastMessage?.from != 'bot' && lastMessage?.value != '') {
        onBotReply(lastMessage?.value)
      }
    }
  }, [value])
  useEffect(() => {}, [listMess])
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      userChat(event.target.value)
    }
  };
  const getChat = async (message) => {
    const res = await fetch('https://dev.depip.studio/bedrock/bedrock-agent',
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "prompt": message,
          "sessionId": account.address
        })
      })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json().then(x => {
      return x.completion
    })
  }
  return (
    <>
      <Breadcrumbs key={"primary"} color={"primary"} isDisabled>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Music</BreadcrumbItem>
        <BreadcrumbItem>Artist</BreadcrumbItem>
        <BreadcrumbItem>Album</BreadcrumbItem>
        <BreadcrumbItem>Song</BreadcrumbItem>
      </Breadcrumbs>
      <div className="rounded-lg overflow-hidden shadow-lg border mt-5">
        {/* Chat messages */}
        <div className="px-4 py-2 min-h-[calc(100vh - 100px)]">
          {listMess.map((item) => {
            if (item.from == account.address ?? "user") {
              return (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      className="w-8 h-8 rounded-full mr-2"
                      src="https://via.placeholder.com/50"
                      alt="Avatar"
                    />
                    <div className="bg-white rounded-lg p-2">
                      <p className="text-gray-800 text-sm">{item.id}. {item.value}</p>
                    </div>
                  </div>
                </>
              )
            } else if (item.from == "bot") {
              return (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <Image src={logoA} alt="logo" width={30} height={30}></Image>
                    <div className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large shadow-small ml-1 z-10 rounded-lg p-2">
                      <p className="text-tiny">{item.id}. {item.value}</p>
                    </div>
                  </div>
                </>
              )
            }
          }
          )}

          {/* More messages can be added here */}
        </div>

        {/* Chat input */}
        <div className="px-4 py-2 flex gap-2 items-center border">
          <input
            type="text"
            placeholder="Type your message..."
            className="border rounded-lg py-1 px-3 w-full focus:outline-none"
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={handleKeyDown}
            value={value}
          />
          <Button
            color="primary" variant="bordered"
            onClick={() => {
              userChat(value)
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
