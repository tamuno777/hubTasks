'use client';

import Image from 'next/image';

const partnerLogos = [
  { id: 1, src: '/images/nike.png', alt: 'Nike Logo' },
  { id: 2, src: '/images/north-face.png', alt: 'The North Face Logo' },
  { id: 3, src: '/images/adidas.png', alt: 'Adidas Logo' },
  { id: 4, src: '/images/zara.png', alt: 'Zara Logo' },
];

export default function Partners() {
  return (
    <section className="w-full mx-auto py-12 overflow-hidden bg-white">
      <div className="w-[92%] mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Partners</h2>
        
        <div className="relative">
          <div className="flex space-x-16 overflow-hidden">
            {/* First set of logos */}
            <div className="flex space-x-16 animate-infinite-scroll">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 h-20 w-32 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Second set of logos (duplicate for seamless loop) */}
            <div className="flex space-x-16 animate-infinite-scroll" aria-hidden="true">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((partner, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 h-20 w-32 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 