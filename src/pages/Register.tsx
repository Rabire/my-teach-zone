import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { signUp } from "supabase/auth";

export type RegisterInputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterInputs>();

  const navigate = useNavigate();

  const onSubmit = async (inputs: RegisterInputs) => {
    if (inputs.password !== inputs.passwordConfirmation) {
      setError("passwordConfirmation", {
        type: "custom",
        message: "Passwords not matching",
      });
      return;
    }

    const { data, error } = await signUp(inputs);

    if (error) toast.error(error.toString());

    if (data.user) {
      toast.success("Teacher created, please confirm your email");
      navigate("/login");
    }
  };

  const firstError = Object.values(errors)[0];

  return (
    <main>
      <h1 className="mt-32 text-center text-3xl">MY TEACH ZONE</h1>
      <h2 className="mb-16 text-center text-xl">Welcome !</h2>

      <form
        className="bg-gray-600/50 rounded-lg p-8 flex flex-col max-w-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative mb-4">
          <label className="text-sm opacity-50">Votre nom</label>
          <input
            type="text"
            className="input"
            {...register("name", { required: "Please enter your name" })}
          />
        </div>
        <div className="relative mb-4">
          <label className="text-sm opacity-50">Email</label>
          <input
            type="text"
            className="input"
            {...register("email", { required: "Please enter an email" })}
          />
        </div>

        <div className="relative mb-4">
          <label className="text-sm opacity-50">Mot de passe</label>
          <input
            type="password"
            className="input"
            {...register("password", {
              required: "Renseignez un mot de passe",
              minLength: {
                value: 6,
                message: "Le mot de passe doit contenir au moins 6 characteres",
              },
            })}
          />
        </div>

        <div className="relative mb-4">
          <label className="text-sm opacity-50">
            Confirmation mot de passe
          </label>
          <input
            type="password"
            className="input"
            {...register("passwordConfirmation", {
              required: "Reinseignez votre mot de passe a nouveau",
            })}
          />
        </div>
        <button
          disabled={Boolean(firstError)}
          type="submit"
          className="bg-violet-500 border-0 py-2 px-8  hover:bg-violet-600 rounded text-lg disabled:opacity-50"
        >
          S'incrire
        </button>
        <p className="text-center text-red-500 text-sm">
          {firstError?.message}
        </p>
        <Link to="/login" className="text-sm opacity-50 mt-2 text-center">
          ou se connecter
        </Link>
      </form>
    </main>
  );
};

export default Register;
// TODO: do not duplicate code #11
