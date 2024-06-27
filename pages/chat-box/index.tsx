import { useState, type ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout";
import Image from "next/image";
import logoA from "../../public/img/logo.svg";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import {Button} from "@nextui-org/react";

let nextId = 0;
let list = [
  { id: 0, value: "hi" },
  { id: 1, value: "hi hi" },
];
const Page: NextPageWithLayout = () => {
  const [listMess, setListMess] = useState(list);
  const [value, setValue] = useState<string>("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setListMess([...listMess, { id: nextId++, value: event.target.value }]);
    }
  };

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
          {listMess.map((item) => (
            <>
              <div className="flex items-center gap-2 mb-2">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src="https://via.placeholder.com/50"
                  alt="Avatar"
                />
                <div className="bg-white rounded-lg p-2">
                  <p className="text-gray-800 text-sm">{item.value}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Image src={logoA} alt="logo" width={30} height={30}></Image>
                <div className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 before:rounded-xl rounded-large shadow-small ml-1 z-10 rounded-lg p-2">
                  <p className="text-tiny text-white/80">hi m!</p>
                </div>
              </div>
            </>
          ))}

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
          />
          <Button
            color="primary" variant="bordered"
            onClick={() => {
              setListMess([...listMess, { id: nextId++, value: value }]);
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
