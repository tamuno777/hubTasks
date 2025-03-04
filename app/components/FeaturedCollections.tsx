'use client';
import React from "react";

import Image from 'next/image';
import Link from 'next/link';
import { Plus, ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: 'Independence Sales',
    image: '/images/woman.png',
    link: '/collections/independence-sales',
  },
  {
    id: 2,
    title: 'New Arrivals',
    image: '/images/adidas-shoes.png',
    link: '/collections/new-arrivals',
  },
  {
    id: 3,
    title: 'Summer Collection',
    image: '/images/hills.png',
    link: '/collections/summer',
  },
];

export default function FeaturedCollections() {
  return (
    <section className="w-full mx-auto py-16 bg-white">
      <div className="w-[92%] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Featured Collections</h2>
          <Link 
            href="/collections"
            className="text-[#22C55E] hover:text-[#1EA34E] flex items-center gap-2"
          >
            View all
            <Plus className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Collection - Full Width on Mobile, Half Width on Desktop */}
          <Link
            href={collections[0].link}
            className="group relative w-full h-[500px] lg:h-[620px] overflow-hidden rounded-lg lg:col-span-1"
          >
            <Image
              src={collections[0].image}
              alt={collections[0].title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              Independence Sales
            </div>
            <div className="absolute bottom-16 left-4  text-white max-w-md">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                Free Delivery on all products ordered until October 31
              </h3>
              <p className="text-sm text-gray-200 mb-6">
                Celebrating our Nation&apos;s Independence with pride and confidence
              </p>
              <button className="bg-[#00A351] hover:bg-[#00A351] text-white px-6 py-2 rounded-sm inline-flex items-center gap-2 transition-colors">
                Shop now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Link>

          {/* Right Side Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {collections.slice(1).map((collection) => (
              <Link
                key={collection.id}
                href={collection.link}
                className="group relative h-[300px] overflow-hidden rounded-lg"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">{collection.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 