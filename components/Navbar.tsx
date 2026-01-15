
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-4 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rotate-45 flex items-center justify-center rounded-sm">
              <span className="text-white -rotate-45 font-bold">O</span>
            </div>
            <h1 className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-accent' : 'text-white'}`}>
              Ourjwana <span className="text-primary">Car</span>
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {['Accueil', 'La Flotte', 'Histoire', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={item === 'Accueil' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                  isScrolled ? 'text-accent hover:text-primary' : 'text-white hover:text-primary/80'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/212600000000" className="hidden md:flex bg-primary text-white px-8 py-3 rounded-full font-bold text-xs tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              BOOK NOW
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 ${isScrolled ? 'text-accent' : 'text-white'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[110] bg-secondary flex flex-col p-12 justify-center items-center text-center"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-accent">
              <X size={40} />
            </button>
            <div className="space-y-8">
              {['Accueil', 'La Flotte', 'Histoire', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Accueil' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-4xl font-serif font-bold text-accent hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
              <div className="pt-12">
                <a href="tel:+212600000000" className="text-primary font-bold tracking-widest">+212 600 000 000</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
