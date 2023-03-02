import { toast } from "react-toastify";
import { setSideModal } from "stores/side-modal";
import supabase from "supabase";
import { CreateFormation } from "utils/types";
import { refreshFormationBoard } from "./dashboards";

export const upsertFormation = async (formations: CreateFormation[]) => {
  console.log({ formations });

  const { status, error } = await supabase
    .from("formations")
    .upsert(formations);

  if (status === 201) {
    toast.success("Successful operation");
    refreshFormationBoard();
    setSideModal("none");
  }

  console.log({ error });

  if (error) toast.error("Error while upserting formations");
};
