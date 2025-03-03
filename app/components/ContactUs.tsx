'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <section className="relative w-[92%] mx-auto h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/landscape.png"
        alt="Beautiful landscape"
        fill
        className="object-cover rounded-sm"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-sm" />

      {/* Contact Form */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-8 rounded-sm shadow-xl w-[90%] md:w-[60%] mx-auto">
          <h2 className="text-2xl font-bold text-center text-[#00A351] mb-6">Contact Us</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                placeholder="Enter a valid e-mail address"
                required
              />
            </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent h-32 resize-none"
                placeholder="Enter your message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-[20%] bg-[#00A351] hover:bg-[#00A351] text-white font-medium py-2 px-4 rounded-sm transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 