import { format } from "date-fns";
import Typewriter from "typewriter-effect";

const ChatBox = ({
  openForm,
  listMess,
  address,
  avatar,
  scrollToBottom,
  intervalId,
  isLoading,
  messagesEndRef,
}) => {
  return (
    <div
      className={`grow overflow-auto transition-all ${
        openForm ? "pl-0 pr-[424px]" : "px-20"
      }`}
    >
      {listMess.map((item, index) => {
        if (item.from == address ?? "user") {
          return (
            <div key={index}>
              <div className="flex items-start gap-2.5 mb-4">
                <img
                  className="w-8 h-8 rounded-full border border-gray-200"
                  src={avatar}
                  alt={address}
                />
                <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-200 rounded-e-xl rounded-es-xl dark:bg-gray-900">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-300">
                      {`${address?.substring(0, 6)} ... ${address?.substring(
                        address.length - 6,
                        address.length
                      )}`}
                    </span>
                  </div>
                  <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    {item.value}
                  </p>
                  <span className="text-sm font-normal text-gray-500 dark:text-white-900">
                    send {format(item.date, "hh:mm:ss")}
                  </span>
                </div>
              </div>
            </div>
          );
        } else if (item.from == "bot") {
          return (
            <div key={index}>
              <div className="flex items-start gap-2.5 mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="min-w-8 min-h-8 rounded-full border border-gray-200"
                >
                  <rect width="24" height="24" rx="12" fill="#111111" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.99993 6H7.71422V7.71429H5.99993V6ZM5.99993 16.2857H4.28564V14.5714V12.8571V11.1429V9.42857V7.71429H5.99993V9.42857V11.1429V12.8571V14.5714V16.2857ZM5.99993 16.2857H7.71422V18H5.99993V16.2857ZM16.2856 6H17.9999V7.71429H16.2856V6ZM17.9999 16.2857V14.5714V12.8571V11.1429V9.42857V7.71429H19.7142V9.42857V11.1429V12.8571V14.5714V16.2857H17.9999ZM17.9999 16.2857V18H16.2856V16.2857H17.9999ZM9.4285 7.71429V9.42857V11.1429H11.1428V9.42857V7.71429L9.4285 7.71429ZM14.5714 14.5714V12.8571H16.2856V14.5714H14.5714ZM9.4285 14.5714V12.8571H7.71422V14.5714H9.4285ZM9.4285 14.5714V16.2857H11.1428H12.8571H14.5714V14.5714H12.8571H11.1428H9.4285ZM12.8571 11.1429V9.42857V7.71429L14.5714 7.71429V9.42857V11.1429H12.8571Z"
                    fill="white"
                  />
                </svg>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="opacity-80 text-right text-zinc-900/opacity-80 text-xs font-normal font-pixel uppercase leading-[18px]">
                      DePIP
                    </span>
                  </div>
                  <div className="text-sm font-normal py-2.5 text-black dark:text-white">
                    {index != listMess.length - 1 && (
                           <div dangerouslySetInnerHTML={{__html: item.value.replace(/\n/g, '<br>')}}></div>
                    )}
                    {index == listMess.length - 1 && (
                      <Typewriter
                        options={{
                          delay: 1,
                          cursor: ""
                        }}
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(item.value.replace(/\n/g, '<br>'))
                            .callFunction(() => {
                              scrollToBottom();
                              clearInterval(intervalId);
                            })
                            .start();
                        }}
                      />
                    )}
            
                  </div>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    received {format(item.date, "hh:mm:ss")}
                  </span>
                </div>
              </div>
            </div>
          );
        }
      })}

      {isLoading && (
        <>
          <div className="flex items-center gap-2.5 mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="min-w-8 min-h-8 rounded-full border border-gray-200"
            >
              <rect width="24" height="24" rx="12" fill="#111111" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.99993 6H7.71422V7.71429H5.99993V6ZM5.99993 16.2857H4.28564V14.5714V12.8571V11.1429V9.42857V7.71429H5.99993V9.42857V11.1429V12.8571V14.5714V16.2857ZM5.99993 16.2857H7.71422V18H5.99993V16.2857ZM16.2856 6H17.9999V7.71429H16.2856V6ZM17.9999 16.2857V14.5714V12.8571V11.1429V9.42857V7.71429H19.7142V9.42857V11.1429V12.8571V14.5714V16.2857H17.9999ZM17.9999 16.2857V18H16.2856V16.2857H17.9999ZM9.4285 7.71429V9.42857V11.1429H11.1428V9.42857V7.71429L9.4285 7.71429ZM14.5714 14.5714V12.8571H16.2856V14.5714H14.5714ZM9.4285 14.5714V12.8571H7.71422V14.5714H9.4285ZM9.4285 14.5714V16.2857H11.1428H12.8571H14.5714V14.5714H12.8571H11.1428H9.4285ZM12.8571 11.1429V9.42857V7.71429L14.5714 7.71429V9.42857V11.1429H12.8571Z"
                fill="white"
              />
            </svg>
            <div className="text-xs font-medium leading-none text-center text-blue-800 animate-pulse dark:text-blue-200">
              loading...
            </div>
          </div>
        </>
      )}
      <div className="p-2" ref={messagesEndRef} />
    </div>
  );
};

export default ChatBox;
