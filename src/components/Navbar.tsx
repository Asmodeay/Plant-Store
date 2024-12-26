import React from 'react';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { state } = useCart();

  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">GreenThumb</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-green-600">Shop</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Subscriptions</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Classes</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Guides</a>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-green-600">Shop</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-green-600">Subscriptions</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-green-600">Classes</a>
            <a href="#" className="block px-3 py-2 text-gray-600 hover:text-green-600">Guides</a>
          </div>
        </div>
      )}
    </nav>
  );
}