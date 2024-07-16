import { FC, useContext, useEffect, useState } from "react";
import { useSidebar } from "@/provider/sidebar.provider";
import FormRegisterLicense from "../form/register-license";
import FormMintNFT from "../form/mint-nft";
import FormMyAsset from "../form/my-asset";
import FormRegisterIPAsset from "../form/register-ip-asset";

const SideBarRight = () => {
  const { isSidebarOpen, type } = useSidebar();
  return (
    <>
      <aside
        id="right-sidebar"
        className={`fixed top-[88px z-40 w-[424px] h-screen p-6 transition-all bg-stone-50 ${
          isSidebarOpen ? "right-0" : "-right-[424px]"
        }`}
        aria-label="Sidebar"
      >
        {type == 1 && <FormRegisterIPAsset></FormRegisterIPAsset>}
        {type == 2 && <FormRegisterLicense></FormRegisterLicense>}
        {type == 3 && <FormMintNFT></FormMintNFT>}
        {type == 4 && <FormMyAsset></FormMyAsset>}
      </aside>
    </>
  );
};

export default SideBarRight;
