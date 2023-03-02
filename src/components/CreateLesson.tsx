import { useStore } from "@nanostores/react";
import { useForm } from "react-hook-form";
import { studentBoardStore } from "stores/boards";
import { upsertLesson } from "supabase/lessons";
import { upsertStudent } from "supabase/students";
import type { CreateLesson } from "utils/types";

const CreateLessonComponent = () => {
  const { forms } = useStore(studentBoardStore);

  const { register, handleSubmit } = useForm<CreateLesson>();

  const onSubmitCreate = (data: CreateLesson) => {
    upsertLesson([data]);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitCreate)}
      className="relative flex flex-col gap-2 "
    >
      <h2 className="bg-gray-800 p-2 text-center">New lesson</h2>
      <input
        type="text"
        className="input"
        placeholder="React basics"
        {...register("name", { required: true })}
      />

      <button
        className="bg-violet-500 p-2 hover:bg-violet-600 rounded"
        type="submit"
      >
        Create lesson
      </button>
    </form>
  );
};

export default CreateLessonComponent;
