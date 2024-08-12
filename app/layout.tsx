"use client";
import { ReactNode } from "react";
// import Link from "next/link";
// import { AvatarComponent, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import utils from "@/utils";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { WagmiProvider } from "wagmi";
// import "@rainbow-me/rainbowkit/styles.css";
import { SidebarProvider } from "@/provider/sidebar.provider";
import { ChatProvider } from "@/provider/chat.provider";
import localFont from "next/font/local";
import "@particle-network/connectkit/dist/index.css";
import "../styles/globals.scss";
import { Ethereum, EthereumSepolia } from "@particle-network/chains";
import { ModalProvider } from "@particle-network/connectkit";
import { evmWallets } from "@particle-network/connectors";
import { AuthType } from "@particle-network/auth-core";
import {
  AuthCoreContextProvider,
  PromptSettingType,
} from "@particle-network/auth-core-modal";

const GeistSans = localFont({
  src: "../assets/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist",
  weight: "100 900",
});

const CabinetGrotesk = localFont({
  src: "../assets/fonts/CabinetGrotesk/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet-grotesk",
  weight: "100 900",
});

const RetroComputer = localFont({
  src: "../assets/fonts/retro-computer/retro_computer_personal_use.ttf",
  variable: "--font-retro-computer",
  weight: "100 900",
});

const PixelOperator = localFont({
  src: "../assets/fonts/Pixel_Operator/PixelOperator8.ttf",
  variable: "--font-pixel-operator",
  weight: "100 900",
});

// const CustomAvatar: AvatarComponent = ({ address, size }) => {
//   const avatar = utils.genAVT(address);
//   return (
//     <img
//       src={avatar}
//       width={size}
//       height={size}
//       style={{ borderRadius: 999 }}
//     />
//   );
// };
export default function RootLayout({ children }: { children: ReactNode }) {
  // const queryClient = new QueryClient();
  const options = {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
    clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY || "",
    appId: process.env.NEXT_PUBLIC_APP_ID || "",
    chains: [Ethereum, EthereumSepolia],
    connectors: [
      ...evmWallets({
        projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID,
        showQrModal: false,
      }),
    ],
    erc4337: {
      name: "BICONOMY",
      version: "2.0.0",
    },
    wallet: {
      customStyle: {
        supportChains: [Ethereum, EthereumSepolia],
      },
    },
  };
  return (
    <html>
      <body>
        {/* <NextThemesProvider attribute="class" defaultTheme="light"> */}
        {/* <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}> */}
        {/* <RainbowKitProvider modalSize="compact" avatar={CustomAvatar}> */}
        <AuthCoreContextProvider
          options={{
            projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
            clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY || "",
            appId: process.env.NEXT_PUBLIC_APP_ID || "",
            authTypes: [AuthType.email, AuthType.google, AuthType.twitter],
            themeType: "dark",
            fiatCoin: "USD",
            language: "en",
            erc4337: {
              name: "SIMPLE",
              version: "1.0.0",
            },
            promptSettingConfig: {
              promptPaymentPasswordSettingWhenSign: PromptSettingType.first,
              promptMasterPasswordSettingWhenLogin: PromptSettingType.first,
            },
            wallet: {
              visible: true,
              customStyle: {
                supportChains: [Ethereum, EthereumSepolia],
              },
            },
          }}
        >
          <ModalProvider options={options}>
            <SidebarProvider>
              <ChatProvider>
                <main>
                  <div
                    className={`${GeistSans.variable} ${CabinetGrotesk.variable} ${RetroComputer.variable} ${PixelOperator.variable} bg-[#FAF9EF]`}
                  >
                    {children}
                  </div>
                </main>
              </ChatProvider>
            </SidebarProvider>
          </ModalProvider>
        </AuthCoreContextProvider>
        {/* </RainbowKitProvider> */}
        {/* </QueryClientProvider>
          </WagmiProvider> */}
        {/* </NextThemesProvider> */}
      </body>
    </html>
  );
}
