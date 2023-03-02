import { toast } from "react-toastify";
import { setSideModal } from "stores/side-modal";
import supabase from "supabase";
import { CreateForm, StudentBoard, StudentBoardForm } from "utils/types";
import { refreshStudentsBoard } from "./dashboards";

export const upsertForm = async (data: (StudentBoardForm | CreateForm)[]) => {
  const dataToSend = data.map((e) => {
    const { schools, students, ...forms } = e;
    return forms;
  });

  const { status, error } = await supabase.from("forms").upsert(dataToSend);

  if (status === 201) {
    toast.success("Successful operation");
    refreshStudentsBoard();
    setSideModal("none");
  }

  if (error) toast.error("Error while upsert forms");
};
