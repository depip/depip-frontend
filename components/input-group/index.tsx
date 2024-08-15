import { useSidebar } from "@/provider/sidebar.provider";
import { useRef, useState } from "react";
import { useDepip } from "@/provider/depip.provider";
import { useAccount } from "@particle-network/connectkit";

type Props = {
  isLoading: boolean;
};

const InputGroup: React.FC<Props> = ({ isLoading }) => {
  const { isSidebarOpen } = useSidebar();
  const { address } = useAccount();
  const { isSubmit, setDataChat } = useDepip();
  const [value, setValue] = useState<string>("234");
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (isLoading) return;
      const dataChat = {
        from: address ?? "user",
        value: [
          {
            type: "string",
            content: event.target.value,
          },
        ],
      };
      setDataChat(dataChat);
      setValue("");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataChat = {
          from: address ?? "user",
          value: [
            {
              type: "image",
              content: event.target.value,
              file: reader.result,
            },
          ],
        };
        setDataChat(dataChat);
      };
      reader.readAsDataURL(file);
    }
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={`w-full transition-all ${
        isSidebarOpen ? "pl-0 pr-[424px]" : "px-20"
      }`}
    >
      <div className="flex items-center gap-1 mb-1">
        <div
          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded border border-blue-400 cursor-pointer"
          onClick={() =>
            setDataChat({
              from: address ?? "user",
              value: [{ type: "string", content: "Hello, who are you?" }],
            })
          }
        >
          Get started
        </div>
        <div
          className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded border border-green-400 cursor-pointer"
          onClick={() =>
            setDataChat({
              from: address ?? "user",
              value: [{ type: "string", content: "What is IP?" }],
            })
          }
        >
          What is IP?
        </div>
        <div
          className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded border border-indigo-400 cursor-pointer"
          onClick={() =>
            setDataChat({
              from: address ?? "user",
              value: [
                {
                  type: "string",
                  content:
                    "Can you show me full process to interact with Story Protocol by Depip server?",
                },
              ],
            })
          }
        >
          Full process
        </div>
        <div
          className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded border border-pink-400 cursor-pointer"
          onClick={() =>
            setDataChat({
              from: address ?? "user",
              value: [
                {
                  type: "string",
                  content: "Can you register IP asset for me by Depip server",
                },
              ],
            })
          }
        >
          Register ip asset
        </div>
        {isSubmit && (
          <div
            className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-red-400 cursor-pointer"
            onClick={() =>
              setDataChat({
                from: address ?? "user",
                value: [
                  {
                    type: "string",
                    content: "What should be my next step",
                  },
                ],
              })
            }
          >
            Next step
          </div>
        )}
      </div>

      <div className="bg-gray-50 border border-gray-300 rounded-lg w-full flex items-center overflow-hidden px-5 py-3">
        <input
          type="text"
          placeholder="Tell me what you're thinking about..."
          className="text-gray-900 text-sm w-full"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          value={value}
        />
        <div className="cursor-pointer" onClick={handleIconClick}>
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
              d="M7.50037 2.5H5.8337V2.50001H5.83366V4.16668V4.1667H3.33386H1.6672V4.16672V5.83333H1.66699V15.8333H1.6672V15.8334V15.8334V17.5V17.5H3.33386H16.6671H18.3338L18.3339 15.8334H18.3338V5.83337H18.3339V4.1667H18.3338H18.3337V4.16666H14.167V2.5H12.5004H7.50037ZM14.167 5.83333L14.1672 5.83333V5.83337H16.667V15.8333H16.6671V15.8334H3.33386V5.83338H7.50053L7.50053 5.83337L7.50053 4.16672L7.50053 4.1667H7.50037V4.16668H12.5003V5.83333V5.83335H14.167V5.83333H14.167ZM8.33386 7.50002H11.6672V9.16669H8.33386V7.50002ZM11.6671 12.5H8.33386V14.1667H11.6672V12.5H13.3338V9.16669H11.6671V12.5ZM6.66699 9.16669H8.33366V12.5H6.66699V9.16669Z"
              fill="#1C1C1C"
              fill-opacity="0.6"
            />
          </svg>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
