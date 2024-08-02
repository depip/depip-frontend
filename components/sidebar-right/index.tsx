import { FC, useContext, useEffect, useState } from "react";
import { useSidebar } from "@/provider/sidebar.provider";
import FormRegisterIPAsset from "../form/register-ip-asset";
import FormRegisterPilTerm from "../form/register-pil-term";
import FormAttachPilTerm from "../form/attach-pil-term";
import FormMintLicenseToken from "../form/mint-license-token";
import MintAndRegistryIp from "../form/mint-and-registry-ip";

const SideBarRight = () => {
  const { isSidebarOpen, type } = useSidebar();
  return (
    <>
      <aside
        id="right-sidebar"
        className={`fixed top-[88px] z-40 w-[424px] h-screen p-6 transition-all bg-[#FAF9EF] ${
          isSidebarOpen ? "right-0" : "-right-[424px]"
        }`}
        aria-label="Sidebar"
      >
        {(type.toLowerCase() == "create_ip_asset" ||
          type == "createIpAsset") && (
          <FormRegisterIPAsset></FormRegisterIPAsset>
        )}
        {(type.toLowerCase() == "register_pil_term" ||
          type == "registerPilTerm") && (
          <FormRegisterPilTerm></FormRegisterPilTerm>
        )}
        {(type.toLowerCase() == "attach_pil_term" ||
          type == "attachPilTermToIpAsset") && (
          <FormAttachPilTerm></FormAttachPilTerm>
        )}
        {(type.toLowerCase() == "mint_license_token" ||
          type == "mintLicenseToken") && (
          <FormMintLicenseToken></FormMintLicenseToken>
        )}
        {(type.toLowerCase() == "mint_and_create_ip_asset" ||
          type == "mintAndCreateIpAsset") && (
          <MintAndRegistryIp></MintAndRegistryIp>
        )}
      </aside>
    </>
  );
};

export default SideBarRight;
