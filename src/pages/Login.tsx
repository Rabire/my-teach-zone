import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { login } from "supabase/auth";

type LoginInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    defaultValues: { email: "rabireh@outlook.fr", password: "123123" },
  });

  const navigate = useNavigate();

  const onSubmit = async (inputs: LoginInputs) => {
    const { data, error } = await login(inputs.email, inputs.password);

    if (error) toast.error(error.toString());

    if (data.user) navigate("/");
  };

  const firstError = Object.values(errors)[0];

  return (
    <main className="flex flex-col items-center">
      <h1 className="mt-32 text-center text-3xl">MY TEACH ZONE</h1>
      <h2 className="mb-16 text-center text-xl">Welcome back !</h2>

      <form
        className="bg-gray-600/50 rounded-lg p-8 flex flex-col max-w-md mx-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative mb-4">
          <label className="text-sm opacity-50">Email</label>
          <input
            type="text"
            className="input"
            {...register("email", { required: "Renseignez un email" })}
          />
        </div>

        <div className="relative mb-4">
          <label className="text-sm opacity-50">Mot de passe</label>
          <input
            type="password"
            className="input"
            {...register("password", {
              required: "Renseignez un mot de passe",
            })}
          />
        </div>

        <button
          disabled={Boolean(firstError)}
          type="submit"
          className="bg-violet-500 border-0 py-2 px-8  hover:bg-violet-600 rounded text-lg disabled:opacity-50"
        >
          Se connecter
        </button>
        <p className="text-center text-red-500 text-sm">
          {firstError?.message}
        </p>
        <Link to="/register" className="text-sm opacity-50 mt-2 text-center">
          ou s'inscrire
        </Link>
      </form>
    </main>
  );
};

export default Login;
