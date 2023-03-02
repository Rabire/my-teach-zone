import { toast } from "react-toastify";
import { setSideModal } from "stores/side-modal";
import supabase from "supabase";
import { refreshStudentsBoard } from "./dashboards";

export const upsertStudent = async (data: any[]) => {
  const dataToSend = data.map((e) => {
    const { forms, ...students } = e;
    return students;
  });

  const { status, error } = await supabase.from("students").upsert(dataToSend);

  console.log({ error });

  if (status === 201) {
    toast.success("Successful operation");
    refreshStudentsBoard();
    setSideModal("none");
  }

  if (error) toast.error("Error while upserting students");
};
