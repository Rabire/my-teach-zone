import { toast } from "react-toastify";
import { setStudentBoard } from "stores/boards";
import { userTeacherStore } from "stores/user";
import supabase from "supabase";
import { StudentBoard } from "utils/types";

export const getHome = async () => {
  const userId = userTeacherStore.get()?.teacher.id;

  const { data: formations, error } = await supabase
    .from("formations")
    .select("*, lessons (*), forms (*)")
    .eq("teacher_id", userId);

  const currentFormations = null;
  const incommingFormations = null;

  const students = null;

  console.log({ formations, error });

  return { currentFormations, incommingFormations, students };
};

export const refreshStudentsBoard = async () => {
  const userId = userTeacherStore.get()?.teacher.id;

  const { data: schools, error } = await supabase
    .from("schools")
    .select("*, forms (*)")
    .eq("teacher_id", userId);

  setStudentBoard({ schools } as StudentBoard);

  if (error) toast.error("Could not student board");
};
