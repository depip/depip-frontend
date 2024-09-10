"use client";
import Layout from "@/components/layout";
import ListIpAssets from "@/components/list";

const Index = () => {

  return (
    <Layout>
      <div className="relative h-full flex flex-col pt-[118px] p-4">
        <ListIpAssets />
      </div>
    </Layout>
  );
};

export default Index;
