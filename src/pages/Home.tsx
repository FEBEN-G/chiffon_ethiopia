import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  '/assets/hero-1.png',
  '/assets/hero-2.png',
  '/assets/hero-3.png',
  '/assets/hero-4.png'
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cream">
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cream via-beige/40 to-cream" />
          <div className="absolute inset-0 opacity-[0.03] tillet-overlay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl text-center md:text-left z-20"
          >
            <motion.span 
              key={currentIndex + "-tag"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gold font-sans font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
            >
              New Collection 2026
            </motion.span>
            <h1 className="text-7xl md:text-9xl font-serif font-bold text-charcoal mb-4 leading-none tracking-tighter">
              Chiffon
            </h1>
            <p className="text-xl md:text-2xl font-sans text-charcoal/80 mb-8 tracking-wide uppercase">
              Elegance Woven with Ethiopian Heritage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/collections" 
                className="bg-gold text-white px-8 py-4 rounded-full font-sans font-semibold flex items-center justify-center gap-2 hover:bg-gold/90 transition-all hover:translate-y-[-2px] shadow-lg shadow-gold/20"
              >
                Explore Collection <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/40 backdrop-blur-md border border-gold/30 text-charcoal px-8 py-4 rounded-full font-sans font-semibold flex items-center justify-center gap-2 hover:bg-white/60 transition-all hover:translate-y-[-2px]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Image Slider */}
          <div className="relative w-full md:w-1/2 h-[50vh] md:h-[80vh] mt-12 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={HERO_IMAGES[currentIndex]}
                initial={{ opacity: 0, x: 100, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -100, scale: 0.9, filter: 'blur(10px)' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
                alt={`Collection item ${currentIndex + 1}`}
              />
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-full border border-gold/30 hover:bg-gold hover:text-white transition-all text-gold"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'w-8 bg-gold' : 'bg-gold/30'}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-full border border-gold/30 hover:bg-gold hover:text-white transition-all text-gold"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Amharic Element */}
        <div className="absolute bottom-10 right-10 opacity-[0.03] pointer-events-none select-none z-0">
          <span className="text-[20rem] font-serif leading-none">ጥልፍ</span>
        </div>
      </section>

      {/* Featured Highlight Section */}
      <section className="py-24 bg-beige/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-sans font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Craftsmanship</span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-charcoal">Ethiopian Identity, Modern Design</h2>
            <p className="max-w-3xl mx-auto text-lg text-charcoal/70 leading-relaxed font-sans">
              Every dress in our collection tells a story of centuries-old Ethiopian embroidery techniques merged with the light, ethereal beauty of high-quality chiffon.
            </p>
          </motion.div>
        </div>

        {/* Infinite Moving Album */}
        <div className="relative mb-24">
          <div className="flex w-fit">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 40, 
                ease: "linear", 
                repeat: Infinity 
              }}
              className="flex gap-4 px-4"
            >
              {[...Array(18)].map((_, i) => (
                <div key={`dress-a-${i}`} className="w-[300px] h-[450px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  <img 
                    src={`/assets/dresses/dress-${i}.jpg`} 
                    className="w-full h-full object-cover" 
                    alt={`Dress ${i}`}
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {[...Array(18)].map((_, i) => (
                <div key={`dress-b-${i}`} className="w-[300px] h-[450px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  <img 
                    src={`/assets/dresses/dress-${i}.jpg`} 
                    className="w-full h-full object-cover" 
                    alt={`Dress ${i} duplicate`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Pure Chiffon", 
                desc: "Sourced from the finest silk blends for a weightless, elegant drape.",
                bg: "/assets/tillet-1.jpg"
              },
              { 
                title: "Intricate Tillet", 
                desc: "Hand-crafted embroidery patterns (ጥልፍ) by master artisans in Addis.",
                bg: "/assets/tillet-2.jpg"
              },
              { 
                title: "Modern Fit", 
                desc: "Designed for the modern silhouette while maintaining cultural dignity.",
                bg: "/assets/tillet-3.jpg"
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative h-[400px] rounded-3xl overflow-hidden hover:shadow-2xl transition-all group p-10 flex flex-col justify-end text-center"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={feature.bg} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/90 to-transparent" />
                </div>

                <div className="relative z-10 backdrop-blur-[1px] bg-white/10 rounded-2xl p-4">
                  <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold group-hover:text-white transition-colors shadow-sm">
                    <Star size={24} />
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-charcoal">{feature.title}</h3>
                  <p className="text-charcoal font-sans text-sm font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/cta-bg.jpg" 
            alt="Habesha Tillet Pattern" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-cream/80 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Quote className="mx-auto mb-8 text-gold/60" size={60} />
            <h2 className="text-3xl md:text-5xl font-serif italic mb-10 text-charcoal leading-tight text-shadow-elegant">
              "Clothing is the first step in celebrating who we are. Let our chiffon speak your heritage."
            </h2>
            <Link 
              to="/collections" 
              className="inline-block border-b-2 border-gold pb-2 text-gold font-sans font-bold uppercase tracking-widest hover:text-charcoal hover:border-charcoal transition-all"
            >
              View Full Collection
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

