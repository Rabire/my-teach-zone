import { toggleSideModal } from "stores/side-modal";

const Schools = () => {
  return (
    <div className="flex justify-center items-start h-full flex-col max-w-3xl mx-auto">
      <h1 className="font-semibold text-4xl mb-4">MY STUDENTS</h1>

      <div className="grid grid-cols-2 w-full gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Forms</h2>
          <h2 className="text-xl opacity-50">Schools</h2>
          <button
            className="bg-violet-500 p-2 focus:outline-none hover:bg-violet-600 rounded"
            onClick={() => toggleSideModal("open")}
          >
            Create
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Students</h2>
        </div>
      </div>
    </div>
  );
};

export default Schools;
