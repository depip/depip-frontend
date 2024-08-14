"use client";
import { ReactNode, useEffect } from "react";
import { SidebarProvider } from "@/provider/sidebar.provider";
import { ChatProvider } from "@/provider/chat.provider";
import localFont from "next/font/local";
import "../styles/globals.scss";
import { ParticleConnectkit } from "./ParticleConnectkit";

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <ParticleConnectkit>
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
        </ParticleConnectkit>
      </body>
    </html>
  );
}
