import { useEffect, useRef } from "react";
import { useStore } from "@nanostores/react";
import { isSideModalOpenStore, toggleSideModal } from "stores/side-modal";

const SideModal = () => {
  const isModalOpen = useStore(isSideModalOpenStore);

  if (!isModalOpen) return null;

  return (
    <div className="absolute right-0 h-full flex w-full ">
      <div
        className="bg-black h-full w-full opacity-80 px-16"
        onClick={() => toggleSideModal("close")}
      />
      <aside className=" bg-gray-700 p-4">SideModalSideModalSide</aside>
    </div>
  );
};

export default SideModal;
