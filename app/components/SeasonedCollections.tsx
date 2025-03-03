'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: 'Seasoned Kids',
    subtitle: 'Unique Collection',
    image: '/images/girls.png',
    link: '/collections/kids',
    discount: 'UP TO 50% OFF',
  },
  {
    id: 2,
    title: 'Children Summer',
    subtitle: 'Play set',
    image: '/images/swim.png',
    link: '/collections/summer',
    discount: 'UP TO 30% OFF',
  },
  {
    id: 3,
    title: 'Hiking Collection',
    subtitle: 'Adventure Series',
    image: '/images/hike-shoe.png',
    link: '/collections/hiking',
    discount: 'UP TO 40% OFF',
  },
];

export default function SeasonedCollections() {
  return (
    <section className="w-full mx-auto py-16 bg-white">
      <div className="w-[92%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Collection - Full Width on Mobile, Half Width on Desktop */}
          <Link
            href={collections[0].link}
            className="group relative h-[500px] lg:h-[620px] overflow-hidden rounded-lg"
          >
            <Image
              src={collections[0].image}
              alt={collections[0].title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
              {collections[0].discount}
            </div>
            <div className="absolute bottom-8 left-4 md:pr-10 text-white flex flex-col w-full md:flex-row md:justify-between md:gap-2 md:items-center">
              <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{collections[0].title}</h3>
              <p className="text-xl mb-6">{collections[0].subtitle}</p>
              </div>
              <button className="bg-[#00A351] hover:bg-[#00A351] w-[200px] md:w-[150px] text-white px-6 py-2 rounded-sm inline-flex items-center gap-2 transition-colors">
                Shop now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Link>

          {/* Right Side Grid */}
          <div className="grid grid-cols-1 gap-6">
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
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {collection.discount}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{collection.title}</h3>
                  <p className="text-lg">{collection.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 