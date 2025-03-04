"use client";
import React from "react";

import { createContext, useContext, useReducer } from "react";
import { useRouter } from "next/navigation";

interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
  success: string | null;
}

const AuthContext = createContext<any>(null);

const authReducer = (state: AuthState, action: any) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
        success: "Login successful!",
      };
    case "LOGOUT":
      return { ...state, user: null, success: null };
    case "ERROR":
      return { ...state, error: action.payload, loading: false, success: null };
    case "LOADING":
      return { ...state, loading: true, error: null, success: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: false,
    error: null,
    success: null,
  });

  const router = useRouter();

  const login = async (email: string, password: string) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
      router.push("/");
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const register = async (name: string, email: string, password: string) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      dispatch({ type: "REGISTER_SUCCESS", payload: data.user });
      router.push("/login");
    } catch (error: any) {
      dispatch({ type: "ERROR", payload: error.message });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ ...state, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
