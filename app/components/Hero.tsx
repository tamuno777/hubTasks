'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="w-[92%] mx-auto relative h-[50vh] lg:h-[120vh] overflow-hidden">
      {/* Background Image */}
     
      <Image
        src="/images/young-woman.png"
        alt="Young woman shopping"
        fill
        className="object-center"
        priority        
      />      

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container - Max Width Wrapper */}
      <div className="w-full mx-auto h-full relative">
        {/* Content */}
        <div className="h-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full max-w-2xl text-white">
            <div className="bg-[#2B7FFF] text-white text-sm px-4 py-1 w-fit mx-auto md:mx-0 rounded-full inline-flex items-center space-x-2 mb-6">
              <span>1M+ Eco-Friendly Products</span>
            </div>
            
            <h1 className="text-3xl lg:text-[64px] text-center md:text-left font-bold leading-tight">
              <span className="text-[#47FF85]">Sustainable</span> and<br />
              Ethical Fashion for<br />
              Fashion Enthusiasts
            </h1>

            <Link 
              href="/explore"
              className="bg-[#00A351] hover:bg-[#00A351] text-white px-4 py-1 md:px-8 md:py-3 rounded-sm w-fit mx-auto md:mx-0 mt-8 transition-colors flex items-center space-x-3"
            >
              <span className="text-lg">Explore</span>
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 