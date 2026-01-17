
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logique de style consolidée
  const isSolid = !isHome || isScrolled;
  
  const navClass = isSolid 
    ? 'bg-white shadow-md py-3' 
    : 'bg-transparent py-6';

  const textColorClass = isSolid 
    ? 'text-[#C15B36]' 
    : 'text-white';

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'La Flotte', path: '/laflotte' },
    { label: 'Histoire', path: '/histoire' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-12 ${navClass}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#C15B36] rotate-45 flex items-center justify-center rounded-sm shadow-lg shadow-[#C15B36]/20">
              <span className="text-white -rotate-45 font-bold">O</span>
            </div>
            <h1 className={`text-2xl font-serif font-bold tracking-tight ${isSolid ? 'text-accent' : 'text-white'}`}>
              Ourjwana <span className="text-[#C15B36] italic">Car</span>
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.label}
                  to={item.path}
                  className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors relative group ${isActive ? 'text-[#C15B36]' : textColorClass} hover:text-[#C15B36]`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#C15B36] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/212600000000" 
              className="hidden md:flex bg-[#C15B36] text-white px-8 py-3 rounded-xl font-bold text-[10px] tracking-widest hover:bg-[#a0482b] transition-all shadow-lg shadow-[#C15B36]/20"
            >
              RÉSERVER
            </a>
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className={`p-2 transition-colors ${textColorClass} hover:text-[#C15B36]`}
              aria-label="Ouvrir le menu"
            >
              <Menu size={28} />
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
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#FDF8F3] flex flex-col p-12 justify-center items-center text-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="absolute top-8 right-8 text-accent p-2 hover:rotate-90 transition-transform duration-300"
            >
              <X size={40} />
            </button>
            <div className="space-y-8">
              {navLinks.map((item) => (
                <Link 
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-4xl font-serif font-bold ${location.pathname === item.path ? 'text-[#C15B36]' : 'text-accent'} hover:text-[#C15B36] transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-12">
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] mb-4 font-bold">Conciergerie Marrakech 24/7</p>
                <a href="tel:+212600000000" className="text-[#C15B36] text-2xl font-bold tracking-widest hover:scale-105 transition-transform inline-block">+212 600 000 000</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
