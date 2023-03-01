import { toast } from "react-toastify";
import { setStudentBoard } from "stores/boards";
import { userTeacherStore } from "stores/user";
import supabase from "supabase";
import { StudentBoard } from "utils/types";

// export const getHome = async () => {
//   const userId = userTeacherStore.get()?.teacher.id;

//   const { data: formations, error } = await supabase
//     .from("formations")
//     .select("*, lessons (*), forms (*)")
//     .eq("teacher_id", userId);

//   const currentFormations = null;
//   const incomingFormations = null;

//   const students = null;

//   return { currentFormations, incomingFormations, students };
// };

export const refreshStudentsBoard = async () => {
  const userId = userTeacherStore.get()?.teacher.id;

  const { data: schools, error: schoolError } = await supabase
    .from("schools")
    .select("*")
    .eq("teacher_id", userId);

  const { data: forms, error: formsError } = await supabase
    .from("forms")
    .select("*, schools (*), students(count)")
    .eq("teacher_id", userId);

  // const { data: students, error: studentsError } = await supabase
  //   .from("students")
  //   .select("*, form (*)")
  //   .eq("teacher_id", userId);

  console.log(forms);

  setStudentBoard({ schools, forms } as StudentBoard);

  if (schoolError || formsError) toast.error("Could not get board");
};
