"use client";

import ProductCard from "./productCard/ProductCard";

const products = [
  {
    id: 1,
    title: "Stiletto Heels",
    price: 25000,
    image: "/images/red-hills.png",
    rating: 5,
    reviewCount: 45,
  },
  {
    id: 2,
    title: "Golden Rings",
    price: 300000,
    image: "/images/bracelet.png",
    rating: 5,
    reviewCount: 12,
  },
  {
    id: 3,
    title: "Bucket Hat",
    price: 12000,
    image: "/images/cap.png",
    rating: 5,
    reviewCount: 56,
  },
  {
    id: 4,
    title: "Sport Shoes",
    price: 40000,
    image: "/images/kicks.png",
    rating: 5,
    reviewCount: 72,
  },
];

export default function NewArrivals() {
  return (
    <section className="w-full mx-auto py-16 bg-white">
      <div className="w-[92%] mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">New Arrivals</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="text-sm border rounded-full px-4 py-2 bg-transparent">
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
              reviewCount={product.reviewCount}
              onAddToCart={() => console.log(`Added ${product.title} to cart`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
