import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
import tilletPattern from '../assets/tillet-pattern.png';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Collections', href: '/collections' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 bg-cream/95 backdrop-blur-sm',
        isScrolled ? 'py-2 shadow-lg' : 'py-4'
      )}
      style={{ 
        backgroundImage: `linear-gradient(rgba(248, 245, 240, 0.88), rgba(248, 245, 240, 0.88)), url(${tilletPattern})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '150px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-serif font-bold text-gold tracking-tighter italic">Chiffon</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-gold uppercase tracking-widest',
                  location.pathname === link.href ? 'text-gold' : 'text-charcoal'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+251911223344" className="text-charcoal hover:text-gold transition-colors">
              <Phone size={20} />
            </a>
            <a href="#" className="text-charcoal hover:text-gold transition-colors" aria-label="Instagram">
              <svg 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="text-charcoal hover:text-gold transition-colors" aria-label="TikTok">
              <svg 
                viewBox="0 0 24 24" 
                width="18" 
                height="18" 
                fill="currentColor"
              >
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.3a3.39 3.39 0 0 0-1.49 2.45c-.12.93.17 1.89.79 2.58.64.66 1.51 1.06 2.43 1.1.91.07 1.87-.23 2.59-.79.74-.54 1.18-1.42 1.25-2.33.11-2.78.04-5.56.05-8.34.02-3.88.01-7.75.01-11.62z"/>
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-gold p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden relative">
          <div className="absolute inset-0 tillet-overlay z-[-1]" />
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream/95 backdrop-blur-sm border-t border-gold/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-4 text-base font-medium transition-colors hover:text-gold uppercase tracking-widest',
                  location.pathname === link.href ? 'text-gold' : 'text-charcoal'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
