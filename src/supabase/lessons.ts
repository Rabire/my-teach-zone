import { toast } from "react-toastify";
import { setSideModal } from "stores/side-modal";
import supabase from "supabase";
import { CreateLesson } from "utils/types";
import { refreshFormationBoard } from "./dashboards";

export const upsertLesson = async (lessons: CreateLesson[]) => {
  const { status, error } = await supabase.from("lessons").upsert(lessons);

  if (status === 201) {
    toast.success("Successful operation");
    refreshFormationBoard();
    setSideModal("none");
  }

  console.log({ error });

  if (error) toast.error("Error while upserting lessons");
};
