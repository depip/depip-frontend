"use client";
import Layout from "@/components/layout";
import ButtonChat from "@/components/button-chat";
import FormMintLicenseToken from "@/components/form/mint-license-token";

const Index = () => {
  return (
    <Layout>
      <div className="flex pt-[118px]">
        <div className="w-1/2 flex-col justify-start items-start inline-flex pl-4">
          <FormMintLicenseToken />
        </div>

        <ButtonChat />
      </div>
    </Layout>
  );
};

export default Index;
