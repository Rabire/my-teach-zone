import { toast } from "react-toastify";
import { setStudentBoard, setLessonBoard } from "stores/boards";
import { userTeacherStore } from "stores/user";
import supabase from "supabase";
import { LessonBoard, StudentBoard } from "utils/types";

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

export const refreshFormationBoard = async () => {
  const userId = userTeacherStore.get()?.teacher.id;

  const { data: lessons, error: lessonError } = await supabase
    .from("lessons")
    .select("*")
    .eq("teacher_id", userId);

  const { data: formations, error: formationError } = await supabase
    .from("formations")
    .select("*, lessons (*), forms (*)")
    .eq("teacher_id", userId);

  setLessonBoard({
    lessons: lessons || [],
    formations: formations || [],
  } as LessonBoard);

  if (formationError || lessonError) toast.error("Could not get board");
};

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

  const { data: students, error: studentsError } = await supabase
    .from("students")
    .select("*, forms (*)")
    .eq("teacher_id", userId);

  setStudentBoard({
    schools: schools || [],
    forms: forms || [],
    students: students || [],
  } as StudentBoard);

  if (schoolError || formsError || studentsError)
    toast.error("Could not get board");
};
