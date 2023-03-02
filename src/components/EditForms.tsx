import { useStore } from "@nanostores/react";
import { useFieldArray, useForm } from "react-hook-form";
import { studentBoardStore } from "stores/boards";
import { upsertForm } from "supabase/froms";
import { StudentBoard } from "utils/types";

const EditForm = () => {
  const board = useStore(studentBoardStore);

  const { register, control, handleSubmit } = useForm<StudentBoard>({
    defaultValues: board,
  });

  const { fields } = useFieldArray({ control, name: "forms" });

  const onSubmit = (data: StudentBoard) => {
    upsertForm(data.forms);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col mt-8 gap-6"
    >
      {fields.map((_, index) => (
        <div className=" flex flex-col gap-2">
          <input
            type="text"
            className="input"
            placeholder="Terminale STMG 1"
            {...register(`forms.${index}.name`, { required: true })}
          />
          <select
            className="input"
            {...register(`forms.${index}.school_id`, {
              required: true,
              valueAsNumber: true,
            })}
          >
            {board.schools.map((school) => (
              <option key={school.id} className="text-black" value={school.id}>
                {school.name}
              </option>
            ))}
          </select>
          <div className="flex gap-4">
            <input
              type="date"
              className="input"
              {...register(`forms.${index}.start`, { required: true })}
            />
            <input
              type="date"
              className="input"
              {...register(`forms.${index}.end`, { required: true })}
            />
          </div>
        </div>
      ))}

      <button
        className="bg-violet-500 p-2 hover:bg-violet-600 rounded"
        type="submit"
      >
        Update
      </button>
    </form>
  );
};

export default EditForm;
