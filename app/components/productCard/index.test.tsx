import React from "react"; 
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard"; 
import '@testing-library/jest-dom';


const mockProduct = {
  title: "Sample Product",
  price: 5000,
  image: "/sample-image.jpg",
  rating: 4,
  reviewCount: 10,
  onAddToCart: jest.fn(),
};

describe("ProductCard Component", () => {
  test("renders product details correctly", () => {
    render(<ProductCard {...mockProduct} />);
    
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`₦${mockProduct.price.toLocaleString()}`)).toBeInTheDocument();
    expect(screen.getByText(`(${mockProduct.reviewCount})`)).toBeInTheDocument();
  });

 

  test("calls onAddToCart when Add to Cart button is clicked", () => {
    render(<ProductCard {...mockProduct} />);
    const addButton = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(addButton);
    expect(mockProduct.onAddToCart).toHaveBeenCalledTimes(1);
  });
});
