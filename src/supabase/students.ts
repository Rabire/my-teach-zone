import { toast } from "react-toastify";
import { setSideModal } from "stores/side-modal";
import supabase from "supabase";
import { CreateStudent } from "utils/types";
import { refreshStudentsBoard } from "./dashboards";

export const upsertStudent = async (student: CreateStudent) => {
  const { status, error } = await supabase.from("students").upsert(student);

  if (status === 201) {
    toast.success("Successful operation");
    refreshStudentsBoard();
    setSideModal("none");
  }

  console.log({ error });

  if (error) toast.error("Error while editing/creating student");
};
