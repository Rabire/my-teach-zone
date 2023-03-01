import { toast } from "react-toastify";
import { toggleSideModal } from "stores/side-modal";
import { userTeacherStore } from "stores/user";
import supabase from "supabase";
import { CreateSchool } from "utils/types";
import { refreshStudentsBoard } from "./dashboards";

export const createSchool = async (school: CreateSchool) => {
  const { error, status } = await supabase.from("schools").insert(school);

  if (status === 201) {
    toast.success("Successful operation");
    toggleSideModal("close");
    refreshStudentsBoard();
  }

  if (error) toast.error("Could not create school");
};
