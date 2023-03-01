import { toast } from "react-toastify";
import { setSideModal } from "stores/side-modal";
import supabase from "supabase";
import { School, StudentBoard } from "utils/types";
import { refreshStudentsBoard } from "./dashboards";

export const upsertSchools = async (board: StudentBoard) => {
  const { status, error } = await supabase
    .from("schools")
    .upsert(board.schools);

  if (status === 201) {
    toast.success("Schools edited");
    refreshStudentsBoard();
    setSideModal("none");
  }

  if (error) toast.error("Could not edit schools");
};

export const deleteSchool = async (school: School) => {
  const { status, error } = await supabase
    .from("schools")
    .delete()
    .eq("id", school.id);

  if (status === 204) {
    toast.success("School deleted");
    refreshStudentsBoard();
    setSideModal("none");
  }

  if (error) toast.error(`Could not delete ${school.name} school`);
};

export const createSchool = async (name: string) => {
  const { status, error } = await supabase.from("schools").insert({ name });

  if (status === 201) {
    toast.success("School created");
    refreshStudentsBoard();
    setSideModal("none");
  }

  if (error) toast.error(`Could not create ${name} school`);
};
