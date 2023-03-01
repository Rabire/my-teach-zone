import { useStore } from "@nanostores/react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { studentBoardStore } from "stores/boards";
import { createSchool, deleteSchool, upsertSchools } from "supabase/schools";
import { StudentBoard } from "utils/types";

const WriteSchools = () => {
  const board = useStore(studentBoardStore);

  const { register, control, handleSubmit } = useForm<StudentBoard>({
    defaultValues: board,
  });

  const [newSchoolName, setNewSchoolName] = useState("");

  const { fields } = useFieldArray({ control, name: "schools" });

  const onSubmit = (data: StudentBoard) => {
    upsertSchools(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col gap-2 "
    >
      {fields.map((_, index) => (
        <div className="flex gap-2 ">
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

      {fields.length >= 1 && (
        <button
          type="submit"
          className="bg-violet-500 p-2 hover:bg-violet-600 rounded w-full"
        >
          Save
        </button>
      )}

      <div className="flex gap-2 mt-4">
        <input
          type="text"
          className="input"
          placeholder="Isitech"
          value={newSchoolName}
          onChange={(e) => setNewSchoolName(e.target.value)}
        />
        <button
          className="bg-violet-500 p-2 hover:bg-violet-600 rounded"
          type="button"
          onClick={() => createSchool(newSchoolName)}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default WriteSchools;

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
            className="bg-violet-500 p-2  hover:bg-violet-600 rounded"
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
