'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="w-[92%] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">          
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="nav-link">SHOP</Link>
            <Link href="/shop-by" className="nav-link">SHOP BY</Link>
            <Link href="/articles" className="nav-link">ARTICLES</Link>
            <Link href="/ethos" className="nav-link">ETHOS</Link>
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
            <button className="icon-button">
              <User size={20} />
            </button>
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