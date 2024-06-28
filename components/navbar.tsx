import Link from "next/link";
import ConnectButtonC from "./connect-button";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";
import { Avatar, Badge, Image } from "@nextui-org/react";
import { MoonIcon, SunIcon } from "./icon";
import { useState } from "react";

const Navnar = () => {
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(true);
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="https://flowbite.com"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 98 105"
              fill="none"
            >
              <path
                d="M90.4446 61.5759C89.7669 61.1931 89.0964 60.789 88.4403 60.3849C82.6074 56.7481 82.6074 48.3471 88.4403 44.7174C89.0964 44.3062 89.7669 43.9092 90.4446 43.5263C96.7894 39.9249 98.9668 31.9423 95.3041 25.7036C91.6415 19.4649 83.5231 17.3239 77.1783 20.9254C76.8539 21.1097 76.5222 21.294 76.1905 21.4712C69.9251 24.8671 62.1455 20.5213 62.1311 13.4957V13.361C62.1311 6.15816 56.1901 0.316498 48.8648 0.316498C41.5395 0.316498 35.5985 6.15816 35.5985 13.361C35.5985 13.4035 35.5985 13.4531 35.5985 13.4957C35.5841 20.5284 27.8045 24.8671 21.5391 21.4712C21.2074 21.294 20.883 21.1097 20.5513 20.9254C14.2065 17.3239 6.08813 19.4579 2.42547 25.7036C-1.23719 31.9423 0.933009 39.9249 7.28498 43.5263C7.96272 43.9092 8.63324 44.3133 9.28935 44.7174C15.1222 48.3542 15.1222 56.7551 9.28935 60.3849C8.63324 60.7961 7.96272 61.1931 7.28498 61.5759C0.94022 65.1773 -1.23719 73.1529 2.42547 79.3987C6.08813 85.6444 14.2065 87.7783 20.5513 84.1769C20.8758 83.9926 21.2074 83.8083 21.5391 83.631C27.8045 80.2352 35.5841 84.581 35.5985 91.6066C35.5985 91.6491 35.5985 91.6988 35.5985 91.7413C35.5985 98.9441 41.5395 104.786 48.8648 104.786C56.1901 104.786 62.1311 98.9441 62.1311 91.7413V91.6066C62.1455 84.5739 69.9251 80.2352 76.1905 83.6239C76.5222 83.8012 76.8466 83.9855 77.1783 84.1698C83.5231 87.7712 91.6415 85.6373 95.3041 79.3916C98.9668 73.1529 96.7966 65.1703 90.4446 61.5688V61.5759ZM89.6804 76.2084C88.4763 78.2644 86.2196 79.5405 83.7971 79.5405C82.6218 79.5405 81.4538 79.2285 80.4228 78.6472C70.8408 73.2096 59.9321 70.3313 48.8648 70.3313C37.7975 70.3313 26.8889 73.2096 17.3068 78.6472C16.2614 79.2427 15.1222 79.5405 13.9326 79.5405C11.51 79.5405 9.26051 78.2644 8.04924 76.2084C6.18186 73.0253 7.29219 68.9418 10.5295 67.1057C29.9963 56.0533 42.0874 35.4586 42.0874 13.361C42.0874 9.68867 45.13 6.69695 48.8648 6.69695C52.5996 6.69695 55.6422 9.68867 55.6422 13.361C55.6422 35.4586 67.7333 56.0533 87.2001 67.1057C88.7647 67.9989 89.8895 69.431 90.3581 71.1537C90.8268 72.8764 90.5888 74.67 89.6804 76.2084Z"
                fill="url(#paint0_linear_2344_38980)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2344_38980"
                  x1="67.8009"
                  y1="82.8901"
                  x2="40.7369"
                  y2="17.813"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD569" />
                  <stop offset="0.515056" stop-color="#FC8E4F" />
                  <stop offset="1" stop-color="#FF697B" />
                </linearGradient>
              </defs>
            </svg>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Aura bot
            </span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Switch
              // isSelected={isSelected}
              size="md"
              color="secondary"
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <SunIcon className={className} />
                ) : (
                  <MoonIcon className={className} />
                )
              }
              onValueChange={(isSelected) => {
                isSelected ? setTheme("light") : setTheme("dark");
              }}
            ></Switch>
            <ConnectButtonC></ConnectButtonC>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-100 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/chat-box"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Chat bot
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navnar;
