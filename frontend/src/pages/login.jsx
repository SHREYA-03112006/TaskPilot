import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaLock, FaEnvelope } from "react-icons/fa";
import API from "../api/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await API.post("/login", formData);

      if (response.data.success) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        navigate("/dashboard");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-500">
            TaskPilot
          </h1>

          <p className="text-slate-400 mt-2">
            Welcome back! Login to continue.
          </p>
        </div>

        {/* Email */}
        <div className="mb-5">

          <label className="block text-sm text-slate-300 mb-2">
            Email
          </label>

          <div className="flex items-center bg-slate-800 rounded-lg px-4">

            <FaEnvelope className="text-slate-400" />

            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full bg-transparent p-3 outline-none text-white placeholder:text-slate-500"
            />

          </div>

        </div>

        {/* Password */}
        <div className="mb-3">

          <label className="block text-sm text-slate-300 mb-2">
            Password
          </label>

          <div className="flex items-center bg-slate-800 rounded-lg px-4">

            <FaLock className="text-slate-400" />

            <input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              className="w-full bg-transparent p-3 outline-none text-white placeholder:text-slate-500"
            />

          </div>

        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm mb-4">
            {error}
          </p>
        )}

        {/* Forgot Password */}
        <div className="text-right mb-6">
          <button className="text-sm text-blue-400 hover:text-blue-300">
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-slate-700"></div>

          <span className="px-4 text-slate-500 text-sm">
            OR
          </span>

          <div className="flex-1 border-t border-slate-700"></div>
        </div>

        {/* Google Button */}
        <button className="w-full border border-slate-700 hover:border-blue-500 transition py-3 rounded-lg flex items-center justify-center gap-3">
          <FaGoogle />
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-center text-slate-400 mt-8">
          Don't have an account?{" "}
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300"
          >
            Sign Up
          </Link>
        </p>

        {/* Demo Credentials */}
        <div className="mt-6 border-t border-slate-700 pt-4 text-center">
          <p className="text-xs text-slate-500">
            Demo Login
          </p>
          <p className="text-xs text-slate-400">
            Email: demo@taskpilot.com
          </p>
          <p className="text-xs text-slate-400">
            Password: taskpilot123
          </p>
        </div>

      </div>

    </div>
  );
}

export default Login;