import React from "react";
import { Link } from "react-router";

import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  return (
    <div className="flex justify-center my-1">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body py-5">
          <h1 className="text-2xl font-semibold text-center">
            Register Your account
          </h1>
          <button className="btn btn-secondary btn-outline w-full">
            <FcGoogle size={24} /> Register with Google
          </button>

          <div className="divider">Or with Email</div>
          <form className="fieldset">
            {/* name */}
            <label className="label">Your Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your name"
              required
            />
            {/* photo */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="photo url"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </form>
          <p className="font-semibold pt-5">
            Already have an account? please{" "}
            <Link to="/login" className="text-secondary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
