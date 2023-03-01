import { useStore } from "@nanostores/react";
import { sideModalContentStore, setSideModal } from "stores/side-modal";
import WriteSchools from "./WriteSchools";

const SideModal = () => {
  const sideModalContent = useStore(sideModalContentStore);

  if (sideModalContent === "none") return null;

  return (
    <div className="absolute right-0 h-full flex w-full">
      <div
        className="bg-black h-full w-full opacity-80 px-16"
        onClick={() => setSideModal("none")}
      />
      <aside className="bg-gray-700 p-4 overflow-y-scroll w-full">
        {sideModalContent === "write-forms" && <WriteSchools />}
      </aside>
    </div>
  );
};

export default SideModal;
