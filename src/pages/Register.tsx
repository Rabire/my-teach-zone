import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main>
      <h1 className="mt-32 text-center text-3xl">MY TEACH ZONE</h1>
      <h2 className="mb-16 text-center text-xl">Welcome !</h2>

      <div className="bg-gray-600/50 rounded-lg p-8 flex flex-col max-w-md mx-auto">
        <div className="relative mb-4">
          <label htmlFor="email" className="text-sm opacity-50">
            Email
          </label>
          <input type="text" id="email" name="email" className="login-input" />
        </div>

        <div className="relative mb-4">
          <label htmlFor="password" className="text-sm opacity-50">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-input"
          />
        </div>

        <div className="relative mb-4">
          <label htmlFor="password-confirmation" className="text-sm opacity-50">
            Password confirmation
          </label>
          <input
            type="password"
            id="password-confirmation"
            name="password-confirmation"
            className="login-input"
          />
        </div>
        <button className="bg-violet-500 border-0 py-2 px-8 focus:outline-none hover:bg-violet-600 rounded text-lg">
          Register
        </button>
        <Link to="/login" className="text-sm opacity-50 mt-2 text-center">
          Or Login
        </Link>
      </div>
    </main>
  );
};

export default Register;
// TODO: use unique component with login screen
