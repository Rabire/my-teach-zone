import { useStore } from "@nanostores/react";
import { lessonsBoardStore } from "stores/boards";
import { setSideModal } from "stores/side-modal";
import { formatDate } from "utils/date";

const Formations = () => {
  const { lessons, formations } = useStore(lessonsBoardStore);

  return (
    <div className="flex justify-center items-start h-full flex-col max-w-3xl mx-auto">
      <h1 className="font-semibold text-4xl mb-4">MES COURS</h1>

      <div className="flex flex-col md:grid grid-cols-2 w-full gap-4">
        <button
          onClick={() => setSideModal("write-lessons")}
          className="flex flex-col gap-2 w-full"
        >
          <h2 className="text-xl opacity-50 text-start">Mes lessons</h2>
          {lessons.length <= 0 && (
            <p className="opacity-50 text-sm italic">Pas de lessons...</p>
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
          className="flex flex-col gap-2 w-full"
        >
          <h2 className="text-xl opacity-50 text-start">Mes formations</h2>

          {formations.length <= 0 && (
            <p className="opacity-50 text-sm italic">Pas de formations...</p>
          )}
          {formations.map((formation) => (
            <div
              key={formation.id}
              className="p-2 bg-gray-700 rounded text-lg flex flex-col items-start"
            >
              <p className="">{formation.lessons.name}</p>
              <p className="opacity-50 text-sm">
                {`${formation.forms.name} | ${formatDate(formation.start)} - 
                ${formatDate(formation.end)}`}
              </p>
            </div>
          ))}
        </button>
      </div>
    </div>
  );
};

export default Formations;
