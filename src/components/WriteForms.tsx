import { useStore } from "@nanostores/react";
import { useForm } from "react-hook-form";
import { studentBoardStore } from "stores/boards";
import { upsertForm } from "supabase/froms";
import { CreateForm } from "utils/types";

const WriteForms = () => {
  const { schools } = useStore(studentBoardStore);

  const { register, handleSubmit } = useForm<CreateForm>();

  const onSubmitCreate = (data: CreateForm) => {
    upsertForm(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitCreate)}
      className="relative flex flex-col gap-2 "
    >
      <input
        type="text"
        className="input"
        placeholder="Terminale STMG 1"
        {...register("name", { required: true })}
      />

      <select
        className="input"
        {...register("school_id", { required: true, valueAsNumber: true })}
      >
        {schools.map((school) => (
          <option key={school.id} className="text-black" value={school.id}>
            {school.name}
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
        //   onClick={() => createForm(newFormName)}
      >
        Create form
      </button>
    </form>
  );
};

export default WriteForms;
