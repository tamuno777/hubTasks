"use client";
import React from "react";

import { createContext, useContext, useEffect, useReducer } from "react";

type Product = {
  reviewCount: number;
  image: string;
  title: string;
  id: string;
  name: string;
  // category?: string;
  price: number;
  image_uri: string;
  rating?: { rating: number }[]; 
};

interface State {
  products: Product[];
  loading: boolean;
  error: string | null;
}

interface Action {
  type: "FETCH_SUCCESS" | "ERROR";
  payload?: any;
}

const ProductContext = createContext<State | null>(null);

const productReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://altaria-interview-question.onrender.com/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          
        
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error: any) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={state}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context)
    throw new Error("useProducts must be used within a ProductProvider");
  return context;
};
