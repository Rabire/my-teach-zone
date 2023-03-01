import { toast } from "react-toastify";
import { toggleSideModal } from "stores/side-modal";
import supabase from "supabase";
import { School, StudentBoard } from "utils/types";
import { refreshStudentsBoard } from "./dashboards";

export const upsertSchools = async (fields: StudentBoard) => {
  const schools = fields.schools.map((school) => {
    const { forms, ...rest } = school;
    return rest;
  });

  const { status, error } = await supabase.from("schools").upsert(schools);

  if (status === 201) {
    toast.success("Schools edited");
    toggleSideModal("close");
    refreshStudentsBoard();
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
  }

  console.log({ status });

  if (error) toast.error(`Could not delete ${school.name} school`);
};
