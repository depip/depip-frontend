import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "../config";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.scss";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import localFont from "next/font/local";

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
          <RainbowKitProvider modalSize="compact">
            <div
              className={`${GeistSans.variable} ${CabinetGrotesk.variable} ${RetroComputer.variable} text-foreground bg-background`}
            >
              {getLayout(<Component {...pageProps} />)}
            </div>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </NextThemesProvider>
  );
}
