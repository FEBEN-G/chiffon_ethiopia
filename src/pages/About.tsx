import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-sans font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 text-charcoal">Woven in Tradition</h1>
            <p className="text-lg text-charcoal/70 leading-relaxed font-sans mb-6">
              Chiffon was born out of a deep love for Ethiopian textile heritage. Our mission is to preserve the art of Tillet embroidery while adapting it to the ethereal lightness of chiffon fabric.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed font-sans mb-6">
              Every stitch of Tillet (ጥልፍ) is more than just decoration; it's a language of geometric symbols passed down through generations, each telling a story of faith, nature, and community.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-gold/10"
          >
            <img 
              src="/assets/cta-bg.jpg" 
              alt="Ethiopian Artisanal Craft" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="bg-beige/40 rounded-[3rem] p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-charcoal">The Chiffon Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-serif text-gold mb-4">Unmatched Quality</h3>
              <p className="text-charcoal/70 font-sans">We source only the highest grade chiffon to ensure your dress feels as light as air.</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-gold mb-4">Artisan Empowered</h3>
              <p className="text-charcoal/70 font-sans">Our tillet is hand-embroidered by women artisans in Addis Ababa, providing fair living wages.</p>
            </div>
            <div>
              <h3 className="text-2xl font-serif text-gold mb-4">Cultural Legacy</h3>
              <p className="text-charcoal/70 font-sans">We keep the soul of Ethiopian fashion alive in every contemporary design.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
