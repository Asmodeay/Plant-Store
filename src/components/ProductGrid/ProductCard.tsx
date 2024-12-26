import React from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${
            product.careLevel === 'beginner' ? 'bg-green-100 text-green-800' :
            product.careLevel === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {product.careLevel}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <button
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
          disabled={!product.inStock}
          className={`mt-4 w-full flex items-center justify-center px-4 py-2 rounded-md ${
            product.inStock
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}