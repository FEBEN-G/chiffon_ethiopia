import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const categories = ['All', 'Traditional', 'Modern', 'Special Occasion'];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-charcoal">The Collection</h1>
          <p className="text-charcoal/60 uppercase tracking-widest text-sm font-sans">Discover the art of Ethiopian Chiffon</p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full font-sans text-sm font-medium transition-all border ${
                activeCategory === cat 
                  ? 'bg-gold border-gold text-white shadow-lg' 
                  : 'bg-white border-gold/20 text-charcoal hover:border-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
