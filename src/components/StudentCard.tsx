import { Link } from "react-router-dom";
import { Student } from "utils/types";

type Props = { student: Student };

const StudentCard = ({ student }: Props) => {
  return (
    <Link
      to="#"
      // to={`/student/${student.id}`}
      className="bg-gray-700 rounded p-2"
    >
      {student.name}
    </Link>
  );
};

export default StudentCard;
