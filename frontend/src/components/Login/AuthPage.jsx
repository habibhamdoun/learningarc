import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import login from "../../assets/login.png";
import register from "../../assets/register.png";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const AuthPage = () => {
  const search = useLocation().search;
  const [isLogin, setIsLogin] = useState(
    search === "?isLogin=true" ? true : false
  );
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const payload = {
      email: formData.get("email"),
      username: formData.get("username"),
      password: formData.get("password"),
      role: isLogin ? undefined : formData.get("role"),
    };

    try {
      if (isLogin) {
        const response = await axios.post("/api/auth/login", payload);
        toast.success("Login successful!");
        console.log(response.data);
      } else {
        const response = await axios.post("/api/auth/register", payload);
        toast.success("Registration successful!");
        console.log(response.data);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex h-screen bg-base-100 items-center">
      <ToastContainer />
      <motion.div
        key={isLogin ? "loginImage" : "registerImage"}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex w-1/2 items-center justify-end pr-16"
      >
        <img
          src={isLogin ? login : register}
          alt={isLogin ? "Login" : "Register"}
          className="max-w-lg rounded-lg shadow-lg"
        />
      </motion.div>
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
        <div className="card bg-white w-full max-w-md rounded-lg">
          <div className="card-body">
            <h2 className="text-3xl text-black font-bold text-center mb-6">
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
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              {!isLogin && (
                <>
                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text font-medium">Username</span>
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text font-medium">Role</span>
                    </label>
                    <select
                      name="role"
                      className="select select-bordered"
                      required
                    >
                      <option value="" disabled selected>
                        Select your role
                      </option>
                      <option value="STUDENT">Student</option>
                      <option value="TEACHER">Teacher</option>
                    </select>
                  </div>
                </>
              )}
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center"
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
                <button className="btn btn-primary w-full">
                  {isLogin ? "Login" : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
