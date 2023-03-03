import { userTeacherStore } from "stores/user";
import { useStore } from "@nanostores/react";
import { DashboardFormation, Student } from "utils/types";
import FormationCard from "components/FormationCard";
import StudentCard from "components/StudentCard";
// import { getHome } from "supabase/dashboards";

const MOCK_FORMATION: DashboardFormation = {
  id: 1,
  lesson_id: 44,
  lessons: { id: 44, name: "React avancé", content: "", teacher_id: "22" },
  form_id: 1,
  forms: {
    id: 1,
    end: new Date("2022").toISOString(),
    name: "B3 Dev",
    school_id: 101,
    start: new Date("2023").toISOString(),
    teacher_id: "22",
  },
  end: new Date("2023").toISOString(),
  start: new Date("2023").toISOString(),
  teacher_id: "22",
};

const MOCK_STUDENT: Student = {
  id: 1,
  name: "Louis DUPONT",
  form_id: 88,
  content: "",
  teacher_id: "22",
};

// FIXME: WIP #16

const DashboardComponent = () => {
  const userTeacher = useStore(userTeacherStore);

  if (!userTeacher) return null;

  return (
    <div className="flex justify-center items-start h-full flex-col max-w-3xl mx-auto">
      <h1 className="font-semibold text-4xl ">
        BONJOUR {userTeacher.teacher.name.toUpperCase()}
      </h1>

      <h2 className="mb-4 text-red-400">(MOCKED Dashboard)</h2>

      <div className="grid grid-cols-2 w-full gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Formations en cours</h2>
          <FormationCard formation={MOCK_FORMATION} />

          <h2 className="text-xl opacity-50 mt-4">Formations a venir</h2>
          <FormationCard formation={MOCK_FORMATION} />
          <FormationCard formation={MOCK_FORMATION} />
        </div>

        <ul className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Etudiants recents</h2>

          <StudentCard student={MOCK_STUDENT} />
          <StudentCard student={MOCK_STUDENT} />
          <StudentCard student={MOCK_STUDENT} />
          <StudentCard student={MOCK_STUDENT} />
          <StudentCard student={MOCK_STUDENT} />
          <StudentCard student={MOCK_STUDENT} />
          <StudentCard student={MOCK_STUDENT} />
          <StudentCard student={MOCK_STUDENT} />
        </ul>
      </div>
    </div>
  );
};

export default DashboardComponent;
