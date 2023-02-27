const Login = () => {
  return (
    <main>
      <h1 className="mt-32 mb-16 text-center text-3xl">MY TEACH ZONE</h1>

      <div className="bg-gray-600/50 rounded-lg p-8 flex flex-col max-w-md mx-auto">
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input type="text" id="email" name="email" className="login-input" />
        </div>

        <div className="relative mb-4">
          <label htmlFor="password" className="leading-7 text-sm text-gray-400">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-input"
          />
        </div>
        <button className="bg-violet-500 border-0 py-2 px-8 focus:outline-none hover:bg-violet-600 rounded text-lg">
          Login
        </button>
      </div>
    </main>
  );
};

export default Login;
