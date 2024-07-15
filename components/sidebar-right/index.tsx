import { FC, useEffect, useState } from "react";
import FormCreateIPAsset from "../form/create-ip-asset";
type Props = {
  openForm: boolean;
  typeForm?: string;
  setOpenForm: any;
};
const SideBarRight: FC<Props> = ({ openForm, typeForm, setOpenForm }) => {
  return (
    <>
      <aside
        id="right-sidebar"
        className={`fixed top-[88px z-40 w-[424px] h-screen p-6 transition-all bg-stone-50 ${
          openForm ? "right-0" : "-right-[424px]"
        }`}
        aria-label="Sidebar"
      >
        <FormCreateIPAsset
          setOpenForm={setOpenForm}
          typeForm={typeForm}
        ></FormCreateIPAsset>
      </aside>
    </>
  );
};

export default SideBarRight;
