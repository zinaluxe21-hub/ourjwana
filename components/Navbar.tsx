
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Accueil', href: '/', subtitle: 'Bienvenue' },
    { name: 'La Flotte', href: '/fleet', subtitle: 'Véhicules' },
    { name: 'L\'Histoire', href: '/about', subtitle: 'Notre héritage' },
    { name: 'Contact', href: '/contact', subtitle: 'Support 24/7' },
  ];

  const menuVariants: Variants = {
    closed: { opacity: 0, x: '100%' },
    open: { 
      opacity: 1, x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 20, staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between ${
        isScrolled || isMenuOpen ? 'bg-secondary/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent'
      }`}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm rotate-45 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 duration-500">
            <span className="text-white -rotate-45 font-bold text-xl">O</span>
          </div>
          <div className="flex flex-col -space-y-1">
            <h1 className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${isScrolled || isMenuOpen ? 'text-accent' : 'text-white'}`}>
              Ourjwana <span className="text-primary">Car</span>
            </h1>
            <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-primary/80">Marrakech Excellence</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-bold uppercase tracking-widest relative group transition-colors duration-500 ${
                isScrolled ? 'text-accent' : 'text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-500 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a href="https://wa.me/212600000000" className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-sm">
            <Phone size={14} /> <span>Réserver</span>
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 transition-colors duration-500 z-[110] relative ${isScrolled || isMenuOpen ? 'text-accent' : 'text-white'}`}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial="closed" animate="open" exit="closed" variants={menuVariants} className="fixed inset-0 z-[90] bg-secondary flex flex-col lg:flex-row">
            <div className="hidden lg:flex flex-1 bg-accent relative items-center justify-center overflow-hidden">
              <div className="absolute inset-0 zellige-pattern opacity-10" />
              <div className="relative z-10 text-center text-white">
                <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Destination</span>
                <h2 className="text-7xl font-bold serif italic">Marrakech</h2>
              </div>
            </div>
            <div className="w-full lg:w-[550px] h-full flex flex-col p-8 md:p-20 justify-between bg-secondary relative">
              <div className="mt-24 space-y-12">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    <Link 
                      to={link.href} 
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex flex-col"
                    >
                      <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-1">{link.subtitle}</span>
                      <h3 className="text-4xl md:text-5xl font-bold text-accent group-hover:text-primary transition-colors">{link.name}</h3>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
