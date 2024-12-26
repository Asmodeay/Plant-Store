import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid/ProductGrid';
import CartDrawer from './components/Cart/CartDrawer';
import { CartProvider } from './context/CartContext';

// Sample data - in a real app, this would come from an API
const sampleProducts = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    description: 'Popular houseplant known for its dramatic split leaves',
    price: 45.99,
    category: 'plants',
    imageUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    careLevel: 'beginner'
  },
  {
    id: '2',
    name: 'Snake Plant',
    description: 'Hardy plant perfect for beginners',
    price: 29.99,
    category: 'plants',
    imageUrl: 'https://images.unsplash.com/photo-1593691509543-c55fb32e7355?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    careLevel: 'beginner'
  },
  {
    id: '3',
    name: 'Ceramic Pot - White',
    description: 'Modern ceramic pot with drainage',
    price: 24.99,
    category: 'pots',
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    inStock: true,
    careLevel: 'beginner'
  },
];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <Hero />
        <ProductGrid products={sampleProducts} />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;