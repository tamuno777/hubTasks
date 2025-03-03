'use client';

import { ShieldCheck, Package, Truck, BadgeCheck } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <ShieldCheck className="w-8 h-8 text-[#00A351]" />,
    title: 'Original Products',
    description: 'All sustainable products are duly verified for authenticity',
  },
  {
    id: 2,
    icon: <BadgeCheck className="w-8 h-8 text-[#00A351]" />,
    title: 'Satisfaction Guarantee',
    description: 'We ensure money-back guarantee if the product is counterfeit',
  },
  {
    id: 3,
    icon: <Package className="w-8 h-8 text-[#00A351]" />,
    title: 'New Arrival Everyday',
    description: 'Wide range of eco-friendly products are shipped in on a daily basis',
  },
  {
    id: 4,
    icon: <Truck className="w-8 h-8 text-[#00A351]" />,
    title: 'Fast & Free Shipping',
    description: 'All purchases orders are sent via carbon neutral shipping',
  },
];

export default function CustomerExperience() {
  return (
    <section className="w-full mx-auto py-16 bg-white">
      <div className="w-[92%] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-2">We provide the</h2>
          <p className="text-3xl font-semibold">best customer experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="bg-[#00A351]/10 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 