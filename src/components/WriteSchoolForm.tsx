import { useForm } from "react-hook-form";
import { createSchool } from "supabase/formations";
import { CreateSchool } from "utils/types";

const WriteSchoolForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSchool>();

  const onSubmit = (data: any) => {
    createSchool(data);
  };

  const firstError = Object.values(errors)[0];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-2">
        <input
          type="text"
          className="input "
          placeholder="Isitech"
          {...register("name", { required: "Please enter a school name" })}
        />
        <button
          type="submit"
          className="bg-violet-500 p-2 focus:outline-none hover:bg-violet-600 rounded"
        >
          Save
        </button>
      </div>
      <p className="text-center text-red-500 text-sm">{firstError?.message}</p>

      <div className="p-2 bg-gray-800 rounded flex flex-col gap-2 mt-4">
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

        {/* <p className="text-sm opacity-50">Students</p>

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
        </ul> */}
      </div>
    </form>
  );
};

export default WriteSchoolForm;
