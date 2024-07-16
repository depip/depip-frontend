import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { AvatarComponent, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "../config";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.scss";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import localFont from "next/font/local";
import logoDepip from "@/assets/images/logo-depip.svg";
import utils from "@/utils";
import { SidebarProvider } from "@/provider/sidebar.provider";
import { ChatProvider } from "@/provider/chat.provider";

export const GeistSans = localFont({
  src: "../assets/fonts/geist-sans/Geist-Variable.woff2",
  variable: "--font-geist",
  weight: "100 900",
});

export const CabinetGrotesk = localFont({
  src: "../assets/fonts/CabinetGrotesk/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet-grotesk",
  weight: "100 900",
});

export const RetroComputer = localFont({
  src: "../assets/fonts/retro-computer/retro_computer_personal_use.ttf",
  variable: "--font-retro-computer",
  weight: "100 900",
});

export const PixelOperator = localFont({
  src: "../assets/fonts/Pixel_Operator/PixelOperator8.woff",
  variable: "--font-pixel-operator",
  weight: "100 900",
});

const CustomAvatar: AvatarComponent = ({ address, size }) => {
  const avatar = utils.genAVT(address);
  return (
    <img
      src={avatar}
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
    />
  );
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const queryClient = new QueryClient();
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact" avatar={CustomAvatar}>
            <SidebarProvider>
              <ChatProvider>
                <div
                  className={`${GeistSans.variable} ${CabinetGrotesk.variable} ${RetroComputer.variable} ${PixelOperator.variable} bg-stone-50`}
                >
                  {getLayout(<Component {...pageProps} />)}
                </div>
              </ChatProvider>
            </SidebarProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </NextThemesProvider>
  );
}
