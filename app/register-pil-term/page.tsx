"use client";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import ButtonChat from "@/components/button-chat";
import { useRouter } from "next/navigation";
import FormRegisterPilTerm from "@/components/form/register-pil-term";

const Index = () => {
  return (
    <Layout>
      <div className="flex pt-[118px] bg-[#FAF9EF]">
        <div className="w-1/2 flex-col justify-start items-start inline-flex pl-4">
          <FormRegisterPilTerm />
        </div>

        <ButtonChat />
      </div>
    </Layout>
  );
};

export default Index;
