const Formations = () => {
  return (
    <div className="flex justify-center items-start h-full flex-col max-w-3xl mx-auto">
      <h1 className="font-semibold text-4xl mb-4">MY FORMATONS</h1>

      <div className="grid grid-cols-2 w-full gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Lessons</h2>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-xl opacity-50">Formations</h2>
        </div>
      </div>
    </div>
  );
};

export default Formations;
