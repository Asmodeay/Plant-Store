import React from 'react';
import { Product } from '../../types';

interface ProductFiltersProps {
  categories: string[];
  careLevels: Product['careLevel'][];
  selectedCategory: string;
  selectedCareLevel: string;
  onCategoryChange: (category: string) => void;
  onCareLevelChange: (level: string) => void;
}

export default function ProductFilters({
  categories,
  careLevels,
  selectedCategory,
  selectedCareLevel,
  onCategoryChange,
  onCareLevelChange,
}: ProductFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={`w-full text-left px-3 py-2 rounded-md ${
              selectedCategory === 'all'
                ? 'bg-green-50 text-green-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All Products
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-3 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Care Level</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCareLevelChange('all')}
            className={`w-full text-left px-3 py-2 rounded-md ${
              selectedCareLevel === 'all'
                ? 'bg-green-50 text-green-700'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            All Levels
          </button>
          {careLevels.map(level => (
            <button
              key={level}
              onClick={() => onCareLevelChange(level)}
              className={`w-full text-left px-3 py-2 rounded-md ${
                selectedCareLevel === level
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}