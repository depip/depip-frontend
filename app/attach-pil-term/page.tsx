"use client";
import Layout from "@/components/layout";
import ButtonChat from "@/components/button-chat";
import FormAttachPilTerm from "@/components/form/attach-pil-term";

const Index = () => {
  return (
    <Layout>
      <div className="flex pt-[118px] bg-[#FAF9EF]">
        <div className="w-1/2 flex-col justify-start items-start inline-flex pl-4">
          <FormAttachPilTerm />
        </div>

        <ButtonChat />
      </div>
    </Layout>
  );
};

export default Index;
