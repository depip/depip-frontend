"use client";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import SideBarRight from "@/components/sidebar-right";
import DefaultPage from "@/components/default-page";
import ChatBox from "@/components/chat-box";
import InputGroup from "@/components/input-group";
import { useDepip } from "@/provider/depip.provider";

const Index = () => {
  const { sessionContent } = useDepip();


  return (
    <Layout>
      <div className="relative h-full flex flex-col pt-[118px] p-4 px-20">
        <SideBarRight />
        {sessionContent.length == 0 && <DefaultPage />}
        <ChatBox></ChatBox>
      </div>
    </Layout>
  );
};

export default Index;
