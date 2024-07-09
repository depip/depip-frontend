import Layout from "@/components/layout";
import { NextPageWithLayout } from "../_app";
import { useEffect, useRef, useState, type ReactElement } from "react";
import ChatBox from "@/components/chat-box";

const Index: NextPageWithLayout = () => {
  return <ChatBox></ChatBox>;
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;
