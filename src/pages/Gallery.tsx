import { motion } from 'framer-motion';

const galleryImages = [
  { url: '/assets/dresses/dress-0.jpg', title: 'Traditional Elegance' },
  { url: '/assets/dresses/dress-1.jpg', title: 'Modern Tillet' },
  { url: '/assets/dresses/dress-2.jpg', title: 'Royal Chiffon' },
  { url: '/assets/dresses/dress-3.jpg', title: 'Golden Threads' },
  { url: '/assets/dresses/dress-4.jpg', title: 'Heritage Style' },
  { url: '/assets/dresses/dress-5.jpg', title: 'Wedding Collection' },
  { url: '/assets/dresses/dress-6.jpg', title: 'Artisanal Craft' },
  { url: '/assets/dresses/dress-7.jpg', title: 'Evening Glow' },
  { url: '/assets/dresses/dress-8.jpg', title: 'Cultural Spirit' },
  { url: '/assets/dresses/dress-9.jpg', title: 'Pattern Detail' },
  { url: '/assets/dresses/dress-10.jpg', title: 'Chiffon Layering' },
  { url: '/assets/dresses/dress-11.jpg', title: 'Embroidery Art' },
  { url: '/assets/dresses/dress-12.jpg', title: 'Silver Motif' },
  { url: '/assets/dresses/dress-13.jpg', title: 'Classic Silhouette' },
  { url: '/assets/dresses/dress-14.jpg', title: 'Modern Habesha' },
  { url: '/assets/dresses/dress-15.jpg', title: 'Luxury Texture' },
  { url: '/assets/dresses/dress-16.jpg', title: 'Festive Wear' },
  { url: '/assets/dresses/dress-17.jpg', title: 'Signature Piece' },
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-charcoal">Visual Journal</h1>
          <p className="text-charcoal/60 uppercase tracking-widest text-sm font-sans">Details, textures, and styled moments</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-3xl bg-beige group"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-serif text-2xl tracking-wide">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
