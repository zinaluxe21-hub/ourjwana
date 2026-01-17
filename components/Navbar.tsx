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

  // LOGIQUE M-CORRIGYA:
  // Ila ma knach f Home (Fleet/About...), isSolid = TRUE dima.
  // Ila kna f Home w hbatna b scroll, isSolid = TRUE.
  const isSolid = !isHome || isScrolled;
  
  const navClass = isSolid 
    ? 'bg-white shadow-md py-3' // Zdt shadow-md bach yban mfroq
    : 'bg-transparent py-6';

  // Hna fin kan l-mochkil: bddlt text-accent b text-[#C15B36]
  const textColorClass = isSolid 
    ? 'text-[#C15B36]' 
    : 'text-white';

  const logoTextClass = isSolid
    ? 'text-[#2C3E50]' // "Ourjwana" b K7el Charbon bach tban Pro foq lbyed
    : 'text-white';

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'La Flotte', path: '/laflotte' }, // T2kd mn had l-path
    { label: 'Histoire', path: '/histoire' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-12 ${navClass}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            {/* Logo Icon */}
            <div className={`w-8 h-8 rotate-45 flex items-center justify-center rounded-sm shadow-lg transition-colors duration-300 ${isSolid ? 'bg-[#C15B36] shadow-[#C15B36]/20' : 'bg-white/20 backdrop-blur'}`}>
              <span className={`-rotate-45 font-bold ${isSolid ? 'text-white' : 'text-white'}`}>O</span>
            </div>
            
            {/* Logo Text - Hna bdltha bach tban wad7a */}
            <h1 className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${logoTextClass}`}>
              Ourjwana <span className="text-[#C15B36] italic">Car</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
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

          {/* Buttons Right */}
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

      {/* Mobile Menu Overlay */}
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
              className="absolute top-8 right-8 text-[#C15B36] p-2 hover:rotate-90 transition-transform duration-300"
            >
              <X size={40} />
            </button>
            <div className="space-y-8">
              {navLinks.map((item) => (
                <Link 
                  key={item.label}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-4xl font-serif font-bold ${location.pathname === item.path ? 'text-[#C15B36]' : 'text-[#2C3E50]'} hover:text-[#C15B36] transition-colors`}
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
