import { useStore } from "@nanostores/react";
import { useForm } from "react-hook-form";
import { lessonsBoardStore, studentBoardStore } from "stores/boards";
import { upsertFormation } from "supabase/formations";
import type { CreateFormation } from "utils/types";

const CreateFormationComponent = () => {
  const { forms } = useStore(studentBoardStore);
  const { lessons } = useStore(lessonsBoardStore);

  const { register, handleSubmit } = useForm<CreateFormation>();

  const onSubmit = (data: CreateFormation) => {
    upsertFormation([data]);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col gap-2 "
    >
      <h2 className="bg-gray-800 p-2 text-center">New formation</h2>

      <select
        className="input"
        {...register("lesson_id", { required: true, valueAsNumber: true })}
      >
        {lessons.map((form) => (
          <option key={form.id} className="text-black" value={form.id}>
            {form.name}
          </option>
        ))}
      </select>

      <select
        className="input"
        {...register("form_id", { required: true, valueAsNumber: true })}
      >
        {forms.map((form) => (
          <option key={form.id} className="text-black" value={form.id}>
            {form.name}
          </option>
        ))}
      </select>

      <div className="flex gap-4">
        <input
          type="date"
          className="input"
          {...register("start", { required: true })}
        />
        <input
          type="date"
          className="input"
          {...register("end", { required: true })}
        />
      </div>

      <button
        className="bg-violet-500 p-2 hover:bg-violet-600 rounded"
        type="submit"
      >
        Create formation
      </button>
    </form>
  );
};

export default CreateFormationComponent;
