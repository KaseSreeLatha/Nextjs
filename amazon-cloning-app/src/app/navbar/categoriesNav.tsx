import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const categories = [
  { name: 'MX Player', slug: 'mx-player' },
  { name: 'Sell', slug: 'sell' },
  { name: 'Best Sellers', slug: 'best-sellers' },
  { name: 'Mobiles', slug: 'mobiles' },
  { name: "Today's Deals", slug: 'todays-deals' },
  { name: 'Customer Service', slug: 'customer-service' },
  { name: 'Electronics', slug: 'electronics' },
  { name: 'Amazon Pay', slug: 'amazon-pay' },
  { name: 'New Releases', slug: 'new-releases' },
  { name: 'Prime', slug: 'prime' },
  { name: 'Home & Kitchen', slug: 'home-kitchen' },
  { name: 'Fashion', slug: 'fashion' },
  { name: 'Computers', slug: 'computers' }
];

const CategoriesNav = () => {
  return (
    <nav className="bg-[#232f3e] text-white py-3 shadow-md">
      <div className="px-6 flex items-center justify-between">
        <div className="flex items-center space-x-1">
        <Bars3Icon className="w-5 h-5 text-white cursor-pointer" />
          <button className="text-white font-semibold">
            All
          </button>
        </div>
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <button className="text-white hover:text-[#f08804] font-medium transition duration-300 text-sm">
                {category.name}
              </button>
            </Link>
          ))}
        </div>
    </nav>
  );
};

export default CategoriesNav;