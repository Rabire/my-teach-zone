import { userProfileStore } from "stores/profile";
import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { Formation, Student } from "utils/types";
import FormationCard from "components/FormationCard";
import StudentCard from "components/StudentCard";

const MOCK_FORMATION: Formation = {
  id: 1,
  start: new Date("2023-02-27"),
  end: new Date("2023-03-03"),
  lesson: { id: 44, name: "React avancé" },
  form: {
    id: 1,
    end_month: new Date("2022").toISOString(),
    name: "B3 Dev",
    school: 101,
    start_month: new Date("2023").toISOString(),
    created_at: new Date().toISOString(),
  },
};

const MOCK_STUDENT: Student = {
  id: 1,
  name: "Louis DUPONT",
  class: 88,
  email: "a@a",
  created_at: new Date().toISOString(),
};

const Dashboard = () => {
  const userProfile = useStore(userProfileStore);

  return (
    <div className="flex justify-center items-start h-full flex-col max-w-3xl mx-auto">
      <h1 className="font-semibold text-4xl mb-4">
        Hi {userProfile?.profile.name}
      </h1>

      <div className="grid grid-cols-2 w-full gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Current lesson</h2>
          <FormationCard formation={MOCK_FORMATION} />

          <h2 className="text-xl opacity-50 mt-4">Incomming lessons</h2>
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
