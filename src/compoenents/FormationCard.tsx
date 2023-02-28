import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Formation } from "utils/types";

const formatDate = (date: Date) => format(date, "dd MMM");

type Props = { formation: Formation };

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
