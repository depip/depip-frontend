import { FC, useContext, useEffect, useState } from "react";
import { useSidebar } from "@/provider/sidebar.provider";
import FormRegisterIPAsset from "../form/register-ip-asset";
import FormRegisterPilTerm from "../form/register-pil-term";
import FormAttachPilTerm from "../form/attach-pil-term";
import FormMintLicenseToken from "../form/mint-license-token";

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
        {type == "CREATE_IP_ASSET" && (
          <FormRegisterIPAsset></FormRegisterIPAsset>
        )}
        {type == "REGISTER_PIL_TERM" && (
          <FormRegisterPilTerm></FormRegisterPilTerm>
        )}
        {type == "ATTACH_PIL_TERM" && <FormAttachPilTerm></FormAttachPilTerm>}
        {type == "MINT_LICENSE_TOKEN" && (
          <FormMintLicenseToken></FormMintLicenseToken>
        )}
      </aside>
    </>
  );
};

export default SideBarRight;
