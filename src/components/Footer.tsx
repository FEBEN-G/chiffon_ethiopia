import { Link } from 'react-router-dom';
import { Phone, Camera, Send, Mail, MapPin } from 'lucide-react';
import tilletPattern from '../assets/tillet-pattern.png';

export function Footer() {
  return (
    <footer 
      className="relative border-t border-gold/10"
      style={{ 
        backgroundImage: `linear-gradient(rgba(248, 245, 240, 0.88), rgba(248, 245, 240, 0.88)), url(${tilletPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '150px'
      }}
    >
      <div className="absolute inset-0 bg-gold/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-4xl font-serif font-bold text-gold italic tracking-tighter">Chiffon</span>
            </Link>
            <p className="text-charcoal/70 text-sm leading-relaxed mb-6 font-sans">
              Elegance woven with Ethiopian heritage. Premium chiffon dresses designed for the modern woman who values tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-charcoal">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Collections', 'Gallery', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '')}`} className="text-charcoal/70 hover:text-gold transition-colors text-sm uppercase tracking-wider">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-charcoal">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-sm text-charcoal/80">
                <Phone size={18} className="text-gold" />
                <a href="tel:+251911223344" className="hover:text-gold transition-colors">+251 91 122 3344</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-charcoal/80">
                <Send size={18} className="text-gold" />
                <a href="https://t.me/chiffon_fashion" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Telegram Channel</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-charcoal/80">
                <Camera size={18} className="text-gold" />
                <a href="#" className="hover:text-gold transition-colors">@chiffon_ethiopia</a>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-charcoal">Our Heritage</h4>
            <p className="text-charcoal/70 text-sm leading-relaxed font-sans mb-4">
              Visit our boutique in Addis Ababa to experience the touch of quality chiffon and exquisite tillet embroidery.
            </p>
            <div className="flex items-center space-x-3 text-sm text-charcoal/80">
                <MapPin size={18} className="text-gold" />
                <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-charcoal/10 flex flex-col md:flex-row justify-between items-center text-xs text-charcoal/50 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Chiffon Ethiopian Fashion. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
