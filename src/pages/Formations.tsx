import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { lessonsBoardStore } from "stores/boards";
import { setSideModal } from "stores/side-modal";
import { userTeacherStore } from "stores/user";
import { refreshFormationBoard } from "supabase/dashboards";

const Formations = () => {
  const userTeacher = useStore(userTeacherStore);
  const { lessons, formations } = useStore(lessonsBoardStore);

  if (!userTeacher) return null;

  useEffect(() => {
    refreshFormationBoard();
  }, []);

  return (
    <div className="flex justify-center items-start h-full flex-col max-w-3xl mx-auto">
      <h1 className="font-semibold text-4xl mb-4">MY LESSONS</h1>

      <div className="grid grid-cols-2 w-full gap-4">
        <button
          onClick={() => setSideModal("write-lessons")}
          className="flex flex-col gap-2"
        >
          <h2 className="text-xl opacity-50 text-start">Lessons</h2>
          {lessons.length <= 0 && (
            <p className="opacity-50 text-sm italic">No record...</p>
          )}
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="p-2 bg-gray-700 rounded text-start flex gap-2 justify-between"
            >
              {lesson.name}
            </div>
          ))}
        </button>

        <button
          onClick={() => setSideModal("write-formation")}
          className="flex flex-col gap-2"
        >
          <h2 className="text-xl opacity-50 text-start">Formations</h2>

          {formations.length <= 0 && (
            <p className="opacity-50 text-sm italic">No record...</p>
          )}
          {formations.map((formation) => (
            <div
              key={formation.id}
              className="p-2 bg-gray-700 rounded text-lg flex flex-col items-start"
            >
              <p className="">{formation.lessons.name}</p>
              <p className="opacity-50">{formation.forms.name}</p>
            </div>
          ))}
        </button>
      </div>
    </div>
  );
};

export default Formations;
