import supabase from "supabase";

export const getHome = async (ownerId: string) => {
  // Formation & { lesson: Lesson; form: Form }

  const { data: formations, error } = await supabase
    .from("formations")
    .select("*, lessons (*), forms (*)")
    .eq("teacher_id", ownerId);

  const currentFormations = null;
  const incommingFormations = null;

  const students = null;

  console.log({ formations, error });

  return { currentFormations, incommingFormations, students };
};
