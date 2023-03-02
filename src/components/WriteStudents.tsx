import CreateStudent from "./CreateStudent";
import EditStudents from "./EditStudents";

const WriteStudents = () => {
  return (
    <div className="flex flex-col gap-5">
      <EditStudents />
      <CreateStudent />
    </div>
  );
};

export default WriteStudents;
