"use client";
import { ReactNode, useEffect } from "react";
import { SidebarProvider } from "@/provider/sidebar.provider";
import { DepipProvider } from "@/provider/depip.provider";
import localFont from "next/font/local";
import "../styles/globals.scss";
import { ParticleConnectkit } from "./ParticleConnectkit";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { WagmiProvider } from "wagmi";
// import { sepolia } from "viem/chains";
// import { http, createConfig } from "wagmi";

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
  src: "../assets/fonts/Pixel_Operator/PixelOperator8.woff",
  variable: "--font-pixel-operator",
  weight: "100 900",
});

// const config = createConfig({
//   chains: [sepolia],
//   transports: {
//     [sepolia.id]: http(),
//   },
// });

// const queryClient = new QueryClient();
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        {/* <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}> */}
            <ParticleConnectkit>
              <SidebarProvider>
                <DepipProvider>
                  <main>
                    <div
                      className={`${GeistSans.variable} ${CabinetGrotesk.variable} ${RetroComputer.variable} ${PixelOperator.variable} bg-white`}
                    >
                      {children}
                    </div>
                  </main>
                </DepipProvider>
              </SidebarProvider>
            </ParticleConnectkit>
          {/* </QueryClientProvider>
        </WagmiProvider> */}
      </body>
    </html>
  );
}
