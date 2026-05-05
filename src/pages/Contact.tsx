import { motion } from 'framer-motion';
import { Phone, Camera, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-charcoal">Get in Touch</h1>
          <p className="text-charcoal/60 uppercase tracking-widest text-sm font-sans">We'd love to hear from you</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif mb-6 text-charcoal">Direct Contacts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a href="tel:+251911223344" className="flex items-center p-6 bg-white border border-gold/10 rounded-2xl hover:border-gold transition-all group">
                  <Phone className="text-gold mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-charcoal/50 mb-1">Call Us</span>
                    <span className="font-sans font-bold text-charcoal">+251 91 122 3344</span>
                  </div>
                </a>
                <a href="https://wa.me/251911223344" className="flex items-center p-6 bg-white border border-gold/10 rounded-2xl hover:border-gold transition-all group">
                  <MessageCircle className="text-gold mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-charcoal/50 mb-1">WhatsApp</span>
                    <span className="font-sans font-bold text-charcoal">+251 91 122 3344</span>
                  </div>
                </a>
                <a href="https://t.me/chiffon_fashion" className="flex items-center p-6 bg-white border border-gold/10 rounded-2xl hover:border-gold transition-all group">
                  <Send className="text-gold mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-charcoal/50 mb-1">Telegram</span>
                    <span className="font-sans font-bold text-charcoal">@chiffon_fashion</span>
                  </div>
                </a>
                <a href="#" className="flex items-center p-6 bg-white border border-gold/10 rounded-2xl hover:border-gold transition-all group">
                  <Camera className="text-gold mr-4 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-charcoal/50 mb-1">Instagram</span>
                    <span className="font-sans font-bold text-charcoal">@chiffon_ethiopia</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-10 bg-gold/5 rounded-3xl border border-gold/10">
              <h3 className="font-serif text-2xl mb-4 text-charcoal">Visit Our Boutique</h3>
              <p className="text-charcoal/70 font-sans mb-2">Bole Road, Near Friendship Building</p>
              <p className="text-charcoal/70 font-sans">Addis Ababa, Ethiopia</p>
            </div>
          </motion.div>

          {/* Simple Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl shadow-gold/5 border border-gold/10"
          >
            <h2 className="text-3xl font-serif mb-10 text-charcoal">Send a Message</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-charcoal/40 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-beige/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none font-sans"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-charcoal/40 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full bg-beige/30 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gold outline-none font-sans resize-none"
                />
              </div>
              <button className="w-full bg-gold text-white font-sans font-bold uppercase tracking-widest py-5 rounded-2xl hover:bg-gold/90 transition-all shadow-lg shadow-gold/20">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
