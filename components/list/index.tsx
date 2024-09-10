import { useState } from "react";
import Button from "../button";
import { Controller } from "react-hook-form";

const ListIpAssets = () => {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
  const [tabActive, setTabActive] = useState("");
  return (
    <div className="px-20 rounded-[20px]  flex-col justify-start items-center gap-6 inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-black text-xl font-normal font-pixel uppercase leading-[30px]">
            Your IP assets
          </div>

          <Button onClick={() => {}} className="w-auto px-5 h-10">
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
              Register
            </div>
          </Button>
        </div>
        <div className="self-stretch h-[828.40px] flex-col justify-start items-center gap-6 flex">
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <div className="grow shrink basis-0 h-10 justify-start items-center gap-1 flex">
              <div
                className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                  tabActive == ""
                    ? "bg-[#1c1c1c] text-white"
                    : "bg-white text-[#141414]"
                }`}
                onClick={() => {
                  setTabActive("");
                }}
              >
                <div className="text-base font-medium font-geist leading-normal">
                  All
                </div>
                <div className="text-xs font-medium font-geist leading-[18px] opacity-80">
                  60
                </div>
              </div>
              <div
                className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                  tabActive == "registered"
                    ? "bg-[#1c1c1c] text-white"
                    : "bg-white text-[#141414]"
                }`}
                onClick={() => {
                  setTabActive("registered");
                }}
              >
                <div className="text-base font-medium font-geist leading-normal">
                  Registered
                </div>
                <div className="text-xs font-medium font-geist leading-[18px]">
                  20
                </div>
              </div>
              <div
                className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                  tabActive == "licencesAttached"
                    ? "bg-[#1c1c1c] text-white"
                    : "bg-white text-[#141414]"
                }`}
                onClick={() => {
                  setTabActive("licencesAttached");
                }}
              >
                <div className="text-base font-medium font-geist leading-normal">
                  Licences attached
                </div>
                <div className="text-xs font-medium font-geist leading-[18px]">
                  20
                </div>
              </div>
              <div
                className={`px-4 py-2  rounded-lg justify-start items-start gap-2 flex cursor-pointer ${
                  tabActive == "licenseMinted"
                    ? "bg-[#1c1c1c] text-white"
                    : "bg-white text-[#141414]"
                }`}
                onClick={() => {
                  setTabActive("licenseMinted");
                }}
              >
                <div className="text-base font-medium font-geist leading-normal">
                  License minted
                </div>
                <div className="text-xs font-medium font-geist leading-[18px]">
                  20
                </div>
              </div>
            </div>
            {/* <div className="justify-start items-center gap-2 flex">
              <div className="px-4 py-2.5 bg-white rounded-[99px] justify-start items-center gap-3 flex">
                <div className="text-[#141414] text-sm font-normal font-geist leading-tight">
                  Newest
                </div>
                <div className="w-4 h-4 relative" />
              </div>
            </div> */}

            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown button{" "}
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {numbers.map((number) => (
              <div className="grow shrink basis-0 rounded-lg flex-col justify-start items-start gap-3 inline-flex min-w-[172.80px] max-w-[172.80px]">
                <div className="self-stretch rounded-lg justify-start items-start gap-2 inline-flex">
                  <img
                    className="w-[172.80px] h-[172.80px]"
                    src="https://cdn.simplehash.com/assets/e9812f826cef7b3077d499e449d9fc6bef98048e288348b59972e127be854055.png"
                  />
                </div>
                <div className="self-stretch h-[46px] flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch h-[46px] flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-[#141414] text-base font-medium font-geist leading-normal">
                      Nukumorí
                    </div>
                    <div className="justify-center items-center gap-1.5 inline-flex">
                      <div className="text-[#1c1c1c]/40 text-xs font-medium font-geist leading-[18px]">
                        Registered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListIpAssets;
