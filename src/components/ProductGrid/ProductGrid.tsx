import React, { useState } from 'react';
import { Product } from '../../types';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCareLevel, setSelectedCareLevel] = useState('all');

  const categories = Array.from(new Set(products.map(p => p.category)));
  const careLevels = Array.from(new Set(products.map(p => p.careLevel)));

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const careLevelMatch = selectedCareLevel === 'all' || product.careLevel === selectedCareLevel;
    return categoryMatch && careLevelMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters
            categories={categories}
            careLevels={careLevels}
            selectedCategory={selectedCategory}
            selectedCareLevel={selectedCareLevel}
            onCategoryChange={setSelectedCategory}
            onCareLevelChange={setSelectedCareLevel}
          />
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}