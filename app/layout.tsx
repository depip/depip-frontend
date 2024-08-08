"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { AvatarComponent, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import utils from "@/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { WagmiProvider } from "wagmi";
import { config } from "../config";
import { SidebarProvider } from "@/provider/sidebar.provider";
import { ChatProvider } from "@/provider/chat.provider";
import localFont from "next/font/local";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.scss";
import Head from "next/head";

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
export default function RootLayout({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <html>
      <body>
        <NextThemesProvider attribute="class" defaultTheme="light">
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <RainbowKitProvider modalSize="compact" avatar={CustomAvatar}>
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
              </RainbowKitProvider>
            </QueryClientProvider>
          </WagmiProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
