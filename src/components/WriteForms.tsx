import { useStore } from "@nanostores/react";
import { studentBoardStore } from "stores/boards";
import FormForm from "./FormForm";

const WriteForms = () => {
  const { forms } = useStore(studentBoardStore);

  return (
    <div className="flex flex-col gap-5">
      {forms.map((form) => (
        <FormForm key={form.id} defaultValues={form} />
      ))}

      <FormForm />
    </div>
  );
};

export default WriteForms;
