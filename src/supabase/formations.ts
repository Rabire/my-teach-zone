import { toast } from "react-toastify";
import supabase from "supabase";

export const createSchool = async () => {
  const { error, data } = await supabase
    .from("countries")
    .insert({ id: 1, name: "Denmark" });

  console.log({ data });

  if (error) toast.error("Could not create school");
};
