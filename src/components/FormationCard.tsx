import { format } from "date-fns";
import { Link } from "react-router-dom";
import { formatDate } from "utils/date";
import { Formation, Lesson, Form } from "utils/types";

type Props = { formation: Formation & { lesson: Lesson; form: Form } };

const FormationCard = ({ formation }: Props) => {
  return (
    <Link
      to={`/formation/${formation.id}`}
      className="bg-gray-700 rounded-md p-4"
    >
      <h3 className="text-xl">{formation.lesson.name}</h3>
      <p className="opacity-50">{`${formatDate(formation.start)} - ${formatDate(
        formation.end
      )}`}</p>
    </Link>
  );
};

export default FormationCard;
