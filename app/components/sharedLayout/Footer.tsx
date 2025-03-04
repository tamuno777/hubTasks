'use client';
import React from "react";

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F9FAFB] pt-16 pb-8">
      <div className="w-[92%] mx-auto">
        {/* Logo and Description Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between md:items-center mb-12">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="Earthly Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Earthly is a platform for ethical and sustainable fashion products. Our products are eco-friendly and all designs are printed with eco-friendly water-based ink made from 100% organic cotton, recycled plastic bottles and bamboo.
            </p>
            <Link href="/about" className="text-gray-600 hover:text-[#1EA34E] text-sm underline">
              FIND OUT MORE
            </Link>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-md">
            <p className="text-gray-600 text-sm mb-4">
              Sign Up to our newsletter to be updated about exclusive offers, product highlights, latest events and blog stories.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
              />
              <button className="bg-[#00A351] hover:bg-[#00A351] text-white px-6 py-2 rounded-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:justify-between">
          {/* Social Media and Copyright */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Link href="https://facebook.com" className="text-gray-600 hover:text-[#22C55E] border border-gray-600 rounded-sm p-2">
                <Icon icon="ri:facebook-fill" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-600 hover:text-[#22C55E] border border-gray-600 rounded-sm p-2">
                <Icon icon="bi:instagram" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-600 hover:text-[#22C55E] border border-gray-600 rounded-sm p-2">
                <Icon icon="bi:twitter-x" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-600 hover:text-[#22C55E] border border-gray-600 rounded-sm p-2">
                <Icon icon="ri:linkedin-fill" />
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              Copyright 2023 Earthly | Designed by Doc-id Designs
            </p>
          </div>
          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-gray-600 hover:text-[#22C55E] text-sm">
                    SHOP
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-[#22C55E] text-sm">
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#22C55E] text-sm">
                    ABOUT US
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/shipping" className="text-gray-600 hover:text-[#22C55E] text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gray-600 hover:text-[#22C55E] text-sm">
                    SHIPPING
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-[#22C55E] text-sm">
                    RETURNS & EXCHANGES
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-[#22C55E] text-sm">
                    PRIVACY POLICY
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-[#22C55E] text-sm">
                    TERMS & CONDITIONS
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-gray-600 hover:text-[#22C55E] text-sm">
                    SITEMAP
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 