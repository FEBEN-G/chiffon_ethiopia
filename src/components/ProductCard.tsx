import { motion } from 'framer-motion';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-beige aspect-[3/4]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.discount && (
          <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            {product.discount}
          </div>
        )}
        <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-charcoal px-6 py-2 rounded-full font-sans font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
            View Details
          </span>
        </div>
      </div>
      <div className="mt-6 text-center">
        <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold block mb-2">{product.category}</span>
        <h3 className="font-serif text-xl text-charcoal mb-2">{product.name}</h3>
        <div className="flex items-center justify-center gap-3">
          <span className="text-charcoal/80 font-sans font-medium">{product.price}</span>
          <span className="text-charcoal/40 text-xs line-through italic">{(parseInt(product.price.replace(/\D/g, '')) * 1.2).toLocaleString()} ETB</span>
        </div>
      </div>
    </motion.div>
  );
}
