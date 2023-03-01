import { useStore } from "@nanostores/react";
import { useForm } from "react-hook-form";
import { studentBoardStore } from "stores/boards";
import { upsertStudent } from "supabase/students";
import { CreateStudent } from "utils/types";

const WriteStudents = () => {
  const { forms } = useStore(studentBoardStore);

  const { register, handleSubmit } = useForm<CreateStudent>();

  const onSubmitCreate = (data: CreateStudent) => {
    upsertStudent(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitCreate)}
      className="relative flex flex-col gap-2 "
    >
      <input
        type="text"
        className="input"
        placeholder="Oussama DI MARTINO"
        {...register("name", { required: true })}
      />

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

      <button
        className="bg-violet-500 p-2 hover:bg-violet-600 rounded"
        type="submit"
        //   onClick={() => createForm(newFormName)}
      >
        Create student
      </button>
    </form>
  );
};

export default WriteStudents;
