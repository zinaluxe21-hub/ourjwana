
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Déterminer les couleurs selon la page et le scroll
  const navBg = isHomePage 
    ? (isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent')
    : 'bg-white/95 backdrop-blur-md shadow-md';

  // Sur la home non-scrolled, le texte est blanc, sinon c'est l'accent (dark blue)
  const textColor = isHomePage 
    ? (isScrolled ? 'text-accent' : 'text-white')
    : 'text-accent';

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'La Flotte', path: '/laflotte' },
    { label: 'Histoire', path: '/histoire' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-4 ${navBg}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rotate-45 flex items-center justify-center rounded-sm">
              <span className="text-white -rotate-45 font-bold">O</span>
            </div>
            <h1 className={`text-2xl font-serif font-bold tracking-tight ${textColor}`}>
              Ourjwana <span className="text-primary italic">Car</span>
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.label}
                  to={item.path}
                  className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors relative group ${isActive ? 'text-primary' : textColor} hover:text-primary`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/212600000000" 
              className="hidden md:flex bg-primary text-white px-8 py-3 rounded-xl font-bold text-[10px] tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              RESERVER
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 transition-colors ${textColor} hover:text-primary`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110] bg-secondary flex flex-col p-12 justify-center items-center text-center"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 text-accent">
              <X size={40} />
            </button>
            <div className="space-y-8">
              {navLinks.map((item) => (
                <Link 
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-4xl font-serif font-bold ${location.pathname === item.path ? 'text-primary' : 'text-accent'} hover:text-primary transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-12">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Conciergerie 24/7 Marrakech</p>
                <a href="tel:+212600000000" className="text-primary text-2xl font-bold tracking-widest">+212 600 000 000</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
