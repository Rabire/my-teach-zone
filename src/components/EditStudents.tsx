import { useStore } from "@nanostores/react";
import { useFieldArray, useForm } from "react-hook-form";
import { studentBoardStore } from "stores/boards";
import { upsertStudent } from "supabase/students";
import { CreateStudent, StudentBoard } from "utils/types";

const EditStudents = () => {
  const board = useStore(studentBoardStore);

  const { register, control, handleSubmit } = useForm<StudentBoard>({
    defaultValues: board,
  });

  const { fields } = useFieldArray({ control, name: "students" });

  const onSubmit = (data: StudentBoard) => {
    upsertStudent(data.students);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col gap-6"
    >
      {fields.map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <input
            type="text"
            className="input"
            placeholder="Oussama DI MARTINO"
            {...register(`students.${index}.name`, { required: true })}
          />

          <select
            className="input"
            {...register(`students.${index}.form_id`, {
              required: true,
              valueAsNumber: true,
            })}
          >
            {board.forms.map((form) => (
              <option key={form.id} className="text-black" value={form.id}>
                {form.name}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button
        className="bg-violet-500 p-2 hover:bg-violet-600 rounded"
        type="submit"
      >
        Create student
      </button>
    </form>
  );
};

export default EditStudents;
