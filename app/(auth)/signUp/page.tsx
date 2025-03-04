"use client";
import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();

  const { loading, error, register } = useAuth();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await register(name, email, password);
      if (!error) {
        setSuccessMessage("Sign up successful! Redirecting...");
      }
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      console.error("Registration error:", err);
      setErrorMessage("Sign up unsuccessful! Please  try again...");

    }
  };

  return (
<div className="flex items-center justify-center min-h-screen bg-[url('/images/authbg.png')] bg-center bg-cover bg-no-repeat p-4">
<div>
        {error && <p className="text-red-600 text-sm mb-3">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-600 text-sm mb-3">{successMessage}</p>
        )}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl md:text-2xl font-bold text-center">
            Create an account
          </h2>
          <p className="text-gray-600 text-center mt-2 mb-4">
            Enter your credentials to create your account.{" "}
          </p>

          <button className="w-full flex items-center justify-center gap-2 border font-bold rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <FcGoogle size={20} /> Sign up with Google
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name*</label>
              <input
                type="text"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address*</label>
              <input
                type="email"
                className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-green-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700">Password*</label>
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
              {loading ? "Signing up..." : "Get Started"}
            </button>
          </form>
        </div>

        <div className="mt-6 flex  justify-center ">
          <p className="bg-white text-center px-6 py-3 rounded-3xl shadow-lg flex align-center justify-center text-sm  text-gray-600 ">
            Don&apos;t have an account?{" "}
            <Link href="/login" className="text-green-600 font-semibold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
