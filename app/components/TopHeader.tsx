'use client';

import { ChevronDown, Phone } from 'lucide-react';
import Link from 'next/link';

export default function TopHeader() {
  return (
    <div className="w-full bg-[#292424] text-white">
      <div className="w-[92%] mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-2">
          <Phone size={14} />
          <span>+234 9035806152</span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <span className="text-white border-r border-gray-400 pr-4">Get 30% Off on Selected Items</span>
          <Link href="/shop" className="ml-2 text-[#47FF85] hover:text-green-400">
            Shop Now
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer">
            <span>EN</span>
            <ChevronDown size={14} className="ml-1" />
          </div>
          <div className="flex items-center cursor-pointer">
            <span>Nigeria</span>
            <ChevronDown size={14} className="ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
} 