"use client";
import React from "react";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await login(email, password);
      if (!error) {
        setSuccessMessage("Log in successful! Redirecting...");
      }
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (err) {
      console.error("Registration error:", err);
      setErrorMessage("Log in unsuccessful! Please  try again...");
    }
  };

  return (
<div className="flex items-center justify-center min-h-screen bg-[url('/images/authbg.png')] bg-center bg-cover bg-no-repeat p-4">
<div>
        {error && <p className="text-red-600 text-sm mb-3">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-600 text-sm mb-3">{successMessage}</p>
        )}

        <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-bold text-center">Log In</h2>
          <p className="text-gray-600 text-center mt-2 mb-4">
            Enter your credentials to access your account.
          </p>

          <button className="w-full flex items-center justify-center gap-2 border font-bold rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <FcGoogle size={20} /> Continue with Google
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-400 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter Password"
              />
              <button
                type="button"
                className="absolute inset-y-0 top-6 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 font-semibold text-white p-2 rounded-md hover:bg-green-800"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>

        <div className="mt-6 flex  justify-center ">
          <p className="bg-white text-center px-6 py-3 rounded-3xl shadow-lg flex align-center justify-center text-sm  text-gray-600 ">
            Don&apos;t have an account?{" "}
            <Link href="/signUp" className="text-green-600 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
