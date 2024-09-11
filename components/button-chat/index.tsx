import { useState } from "react";
import ChatBox from "../chat-box";

const ButtonChat = () => {
  const [isOpenChat, setIsOpenChat] = useState<boolean>(false);
  return (
    <div className="w-1/2 h-full flex flex-row justify-end items-start gap-3 px-4">
      <div
        className={`border shadow-lg rounded-2xl relative flex flex-col p-4 transition-all overflow-hidden ${
          isOpenChat ? "h-[calc(100vh-198px)] w-full" : "h-0 w-0 p-0"
        }`}
      >
        <ChatBox></ChatBox>
      </div>
      <div
        className="flex gap-2 items-center justify-center cursor-pointer rounded-full shadow-lg"
        onClick={() => {
          setIsOpenChat(!isOpenChat);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="w-8 h-8"
        >
          <rect width="24" height="24" rx="12" fill="#111111" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.99993 6H7.71422V7.71429H5.99993V6ZM5.99993 16.2857H4.28564V14.5714V12.8571V11.1429V9.42857V7.71429H5.99993V9.42857V11.1429V12.8571V14.5714V16.2857ZM5.99993 16.2857H7.71422V18H5.99993V16.2857ZM16.2856 6H17.9999V7.71429H16.2856V6ZM17.9999 16.2857V14.5714V12.8571V11.1429V9.42857V7.71429H19.7142V9.42857V11.1429V12.8571V14.5714V16.2857H17.9999ZM17.9999 16.2857V18H16.2856V16.2857H17.9999ZM9.4285 7.71429V9.42857V11.1429H11.1428V9.42857V7.71429L9.4285 7.71429ZM14.5714 14.5714V12.8571H16.2856V14.5714H14.5714ZM9.4285 14.5714V12.8571H7.71422V14.5714H9.4285ZM9.4285 14.5714V16.2857H11.1428H12.8571H14.5714V14.5714H12.8571H11.1428H9.4285ZM12.8571 11.1429V9.42857V7.71429L14.5714 7.71429V9.42857V11.1429H12.8571Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default ButtonChat;
