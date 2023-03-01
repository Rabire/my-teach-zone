import { userTeacherStore } from "stores/user";
import { useStore } from "@nanostores/react";
import { Form, Formation, Lesson, Student } from "utils/types";
import FormationCard from "components/FormationCard";
import StudentCard from "components/StudentCard";
import { getHome } from "supabase/dashboard";

const MOCK_FORMATION: Formation & { lesson: Lesson; form: Form } = {
  id: 1,
  lesson_id: 44,
  lesson: { id: 44, name: "React avancé", content: "" },
  form_id: 1,
  form: {
    id: 1,
    end: new Date("2022").toISOString(),
    name: "B3 Dev",
    school_id: 101,
    start: new Date("2023").toISOString(),
  },
  end: new Date("2023").toISOString(),
  start: new Date("2023").toISOString(),
};

const MOCK_STUDENT: Student = {
  id: 1,
  name: "Louis DUPONT",
  form_id: 88,
  email: "a@a",
  content: "",
};

const Dashboard = () => {
  const userTeacher = useStore(userTeacherStore);

  if (!userTeacher) return null;

  getHome(userTeacher.teacher.id);

  return (
    <div className="flex justify-center items-start h-full flex-col max-w-3xl mx-auto">
      <h1 className="font-semibold text-4xl mb-4">
        HI {userTeacher.teacher.name.toUpperCase()}
      </h1>

      <div className="grid grid-cols-2 w-full gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Current formations</h2>
          <FormationCard formation={MOCK_FORMATION} />

          <h2 className="text-xl opacity-50 mt-4">Incomming formations</h2>
          <FormationCard formation={MOCK_FORMATION} />
          <FormationCard formation={MOCK_FORMATION} />
        </div>

        <ul className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Recent students</h2>

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

export default Dashboard;
