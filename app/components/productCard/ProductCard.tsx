'use client';
import React from "react";
import Image from 'next/image';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  onAddToCart?: () => void;
}

export default function ProductCard({
  title,
  price,
  image,
  rating,
  reviewCount,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-lg font-semibold text-gray-900">₦{price.toLocaleString()}</p>
        </div>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
            
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? 'text-[#00A351] fill-[#00A351]'
                  : 'text-gray-300 fill-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({reviewCount})</span>
        </div>
        <div className="flex items-center justify-between mt-5">          
          <button
            onClick={onAddToCart}
            className="text-sm hover:bg-gray-200 border border-gray-300 px-4 py-2 rounded-full transition-colors flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 