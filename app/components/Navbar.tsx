"use client";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="w-[92%] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="nav-link">
              SHOP
            </Link>
            <Link href="/shop-by" className="nav-link">
              SHOP BY
            </Link>
            <Link href="/articles" className="nav-link">
              ARTICLES
            </Link>
            <Link href="/ethos" className="nav-link">
              ETHOS
            </Link>
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Winnie Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="icon-button">
              <Search size={20} />
            </button>
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="icon-button"
                onClick={() => {
                  setDropdownOpen((prev) => !prev);
                  console.log("Dropdown Open:", !dropdownOpen);
                }}
              >
                <User size={20} />
              </button>

              {dropdownOpen && (
               <div 
               className={`absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg py-2 z-50 transition-opacity duration-300 ${
                 dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
               }`}
             >
               <Link
                 href="/login"
                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
               >
                 Login
               </Link>
               <Link
                 href="/signUp"
                 className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
               >
                 Sign Up
               </Link>
             </div>
             
              )}
            </div>
            <button className="icon-button">
              <Heart size={20} />
            </button>
            <button className="icon-button">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Add these styles to your globals.css
/*
.nav-link {
  @apply text-gray-700 hover:text-green-600 transition-colors font-medium;
}

.icon-button {
  @apply p-2 hover:bg-gray-100 rounded-full transition-colors;
}
*/
