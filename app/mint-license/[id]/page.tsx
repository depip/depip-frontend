"use client";
import Layout from "@/components/layout";
import ButtonChat from "@/components/button-chat";
import FormMintLicenseToken from "@/components/form/mint-license-token";
import { useParams } from "next/navigation";

const Index = () => {
  const { id } = useParams();
  return (
    <Layout>
      <div className="flex pt-[118px] bg-[#FAF9EF]">
        <div className="w-1/2 flex-col justify-start items-start inline-flex pl-4">
          <FormMintLicenseToken id={id as string} />
        </div>

        <ButtonChat />
      </div>
    </Layout>
  );
};

export default Index;
