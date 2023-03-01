// Je peux pas faire mieuux sur le nommga de ce composant haha

import { useStore } from "@nanostores/react";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { studentBoardStore } from "stores/boards";
import { upsertForm } from "supabase/froms";
import { CreateForm, StudentBoardForm } from "utils/types";

type Props = { defaultValues?: CreateForm };

const FormForm = ({ defaultValues }: Props) => {
  const { schools } = useStore(studentBoardStore);

  const { register, handleSubmit } = useForm<CreateForm>({ defaultValues });

  const isEditMode = Boolean(defaultValues);

  const onSubmit = (data: CreateForm) => {
    upsertForm(data as StudentBoardForm);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx("relative flex flex-col gap-2", !isEditMode && "mt-8")}
    >
      {!isEditMode && <h2 className="bg-gray-800 p-2">New form</h2>}
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
        {isEditMode ? "Edit" : "Create form"}
      </button>
    </form>
  );
};

export default FormForm;
