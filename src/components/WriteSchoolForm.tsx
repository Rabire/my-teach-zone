import { useStore } from "@nanostores/react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { studentBoardStore } from "stores/boards";
import { deleteSchool, upsertSchools } from "supabase/formations";
import { StudentBoard } from "utils/types";

const WriteSchoolForm = () => {
  const board = useStore(studentBoardStore);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentBoard>({ defaultValues: board });

  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "schools",
  });

  const onSubmit = (data: StudentBoard) => {
    upsertSchools(data);
  };

  const firstError = Object.values(errors)[0];
  firstError && toast.error(firstError.message);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-violet-500 p-2 focus:outline-none hover:bg-violet-600 rounded"
        >
          Save
        </button>
      </div>

      {fields.map((school, index) => (
        <div className="flex gap-2 mt-4">
          <input
            key={index}
            type="text"
            className="input "
            placeholder="Isitech"
            {...register(`schools.${index}.name`, {
              required: "Please enter a school name",
            })}
          />
          <button
            className="bg-red-700 hover:bg-red-800 rounded p-2"
            type="button"
            onClick={() => deleteSchool(board.schools[index])}
          >
            Delete
          </button>
        </div>
      ))}
    </form>
  );
};

export default WriteSchoolForm;

{
  /* <div className="p-2 bg-gray-800 rounded flex flex-col gap-2 my-4">
            <input type="text" placeholder="BTS SIO" className="input" />
            <div className="flex gap-4">
              <div className="relative">
                <label className="text-sm opacity-50">Start</label>
                <input type="date" className="input" />
              </div>

              <div className="relative">
                <label className="text-sm opacity-50">End</label>
                <input type="date" className="input" />
              </div>
            </div>
          </div> */
}

{
  /* <p className="text-sm opacity-50">Students</p>

        <ul className="flex gap-2 flex-wrap">
          <button
            type="button"
            className="hover:bg-red-700 rounded text-start p-1"
          >
            Fredo OKUI
          </button>
          <button
            type="button"
            className="hover:bg-red-700 rounded text-start p-1"
          >
            Fredo OKUI
          </button>
          <button
            type="button"
            className="hover:bg-red-700 rounded text-start p-1"
          >
            Fredo OKUI
          </button>
          <button
            type="button"
            className="hover:bg-red-700 rounded text-start p-1"
          >
            Fredo OKUI
          </button>
          <button
            type="button"
            className="hover:bg-red-700 rounded text-start p-1"
          >
            Fredo OKUI
          </button>
        </ul>

        <div className="flex gap-2">
          <input type="text" placeholder="Abdel DUBOIS" className="input" />
          <button
            type="button"
            className="bg-violet-500 p-2 focus:outline-none hover:bg-violet-600 rounded"
          >
            Add
          </button>
        </div>

        <ul className="flex gap-2 flex-wrap">
          <button
            type="button"
            className="hover:bg-gray-700 rounded text-start p-1"
          >
            Fredo OKUI
          </button>
          <button
            type="button"
            className="hover:bg-gray-700 rounded text-start p-1"
          >
            Fredo OKUI
          </button>
        </ul> */
}
