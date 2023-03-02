import { useStore } from "@nanostores/react";
import { studentBoardStore } from "stores/boards";
import Createorm from "./CreateForm";
import EditForms from "./EditForms";

const WriteForms = () => {
  return (
    <div className="flex flex-col gap-5">
      <EditForms />
      <Createorm />
    </div>
  );
};

export default WriteForms;
