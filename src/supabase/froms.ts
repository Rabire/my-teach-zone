import { toast } from "react-toastify";
import { setSideModal } from "stores/side-modal";
import supabase from "supabase";
import { CreateForm } from "utils/types";
import { refreshStudentsBoard } from "./dashboards";

export const upsertForm = async (form: CreateForm) => {
  const { status, error } = await supabase.from("forms").upsert(form);

  if (status === 201) {
    toast.success("Successful operation");
    refreshStudentsBoard();
    setSideModal("none");
  }

  console.log({ error });

  if (error) toast.error("Error while editting/creating form");
};
