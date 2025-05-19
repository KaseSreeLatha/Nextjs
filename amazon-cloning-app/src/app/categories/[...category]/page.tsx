'use client'

import { usePathname } from 'next/navigation';

const CategoryPage = () => {
  const pathname = usePathname();
  const category = pathname?.split('/')[2] || 'Default';

  return (
    <div className="p-4 text-center mt-20">
      <h1 className="text-2xl font-bold">Category: {category}</h1>
      <p>Display content for {category} category here...</p>
    </div>
  );
};

export default CategoryPage;