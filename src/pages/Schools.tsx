import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { studentBoardStore } from "stores/boards";
import { setSideModal } from "stores/side-modal";
import { userTeacherStore } from "stores/user";
import { refreshStudentsBoard } from "supabase/dashboards";

const Schools = () => {
  const userTeacher = useStore(userTeacherStore);
  const { schools, forms, students } = useStore(studentBoardStore);

  if (!userTeacher) return null;

  useEffect(() => {
    refreshStudentsBoard();
  }, []);

  return (
    <div className="flex justify-center items-start h-full flex-col max-w-3xl mx-auto">
      <h1 className="font-semibold text-4xl mb-4">MY STUDENTS</h1>

      <div className="grid grid-cols-2 w-full gap-4">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => setSideModal("write-forms")}
            className="flex flex-col gap-2"
          >
            <h2 className="text-xl opacity-50 text-start">Froms</h2>
            {forms.length <= 0 && (
              <p className="opacity-50 text-sm italic">No record...</p>
            )}
            {forms.map((from) => (
              <div
                key={from.id}
                className="p-2 bg-gray-700 rounded text-start flex gap-2 justify-between"
              >
                <p className="text-lg">{from.name}</p>
                <p className="opacity-50">
                  {from.schools.name} - {from.students[0].count} students
                </p>
              </div>
            ))}
          </button>

          <button
            onClick={() => setSideModal("write-schools")}
            className="flex flex-col gap-2"
          >
            <h2 className="text-xl opacity-50 text-start">Schools</h2>

            {schools.length <= 0 && (
              <p className="opacity-50 text-sm italic">No record...</p>
            )}
            {schools.map((lesson) => (
              <div key={lesson.id} className="p-2 bg-gray-700 rounded text-lg">
                {lesson.name}
              </div>
            ))}
          </button>
        </div>

        <button
          onClick={() => setSideModal("write-students")}
          className="flex flex-col gap-2"
        >
          <h2 className="text-xl opacity-50 text-start">Students</h2>

          {students.length <= 0 && (
            <p className="opacity-50 text-sm italic">No record...</p>
          )}
          {students.map((student) => (
            <div
              key={student.id}
              className="p-2 bg-gray-700 rounded text-lg flex flex-col items-start"
            >
              <p className="">{student.name}</p>
              <p className="opacity-50">{student.forms.name}</p>
            </div>
          ))}
        </button>
      </div>
    </div>
  );
};

export default Schools;
