import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const LoginPage = () => {
  const error = 1;

  return (
    <div className="flex justify-center my-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body py-5">
          <h1 className="text-2xl font-semibold text-center">
            Login Your account{" "}
          </h1>
          <button className="btn btn-secondary btn-outline w-full">
            <FcGoogle size={24} /> Login with Google
          </button>

          <div className="divider">Or with Email</div>
          <form className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            {error && (
              <p className="text-red-600">
                Please Enter a correct password or email
              </p>
            )}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </form>
          <p className="font-semibold pt-5">
            Don't have an account? please{" "}
            <Link to="/register" className="text-secondary">
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
