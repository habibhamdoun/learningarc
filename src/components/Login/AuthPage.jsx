import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import login from "../../assets/login.png";
import register from "../../assets/register.png";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex h-screen bg-base-100 items-center">
      <div className="hidden lg:flex w-1/2 items-center justify-end pr-16">
        <img
          src={isLogin ? login : register}
          alt={isLogin ? "Login" : "Register"}
          className="max-w-lg rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
        <div className="card bg-white w-full max-w-md rounded-lg">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-6">
              Welcome to Learning Arc
            </h2>
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`w-1/2 py-2 rounded-lg font-medium transition ${
                  isLogin
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`w-1/2 py-2 rounded-lg font-medium transition ${
                  !isLogin
                    ? "bg-primary text-white shadow-md"
                    : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                }`}
              >
                Register
              </button>
            </div>
            {isLogin ? (
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Username</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your username"
                    className="input input-bordered focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Enter your password"
                      className="input input-bordered w-full focus:border-primary focus:outline-none"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={passwordVisible ? faEyeSlash : faEye}
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                  <label className="label mt-4">
                    <a
                      href="#"
                      className="label-text-alt link link-hover hover:text-primary transition-all"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary w-full">Login</button>
                </div>
              </form>
            ) : (
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input input-bordered focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text font-medium">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="input input-bordered focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control mt-4">
                  <label className="label">
                    <span className="label-text font-medium">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Enter your password"
                      className="input input-bordered w-full focus:border-primary focus:outline-none"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon
                        icon={passwordVisible ? faEyeSlash : faEye}
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary w-full">Register</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
