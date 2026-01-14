
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Instagram, Facebook, MapPin, MessageSquare, Mail } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Accueil', href: '#home', subtitle: 'Bienvenue chez vous' },
    { name: 'La Flotte', href: '#fleet', subtitle: 'Véhicules d\'exception' },
    { name: 'L\'Histoire', href: '#about', subtitle: 'Notre héritage' },
    { name: 'Contact', href: '#contact', subtitle: 'Service 24h/7j' },
  ];

  // Fix: Explicitly defining Variants type to avoid "string is not assignable to AnimationGeneratorType"
  const menuVariants: Variants = {
    closed: { opacity: 0, x: '100%' },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between ${
          isScrolled || isMenuOpen ? 'bg-secondary/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm rotate-45 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110 duration-500">
            <span className="text-white -rotate-45 font-bold text-xl">O</span>
          </div>
          <div className="flex flex-col -space-y-1">
            <h1 className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${isScrolled || isMenuOpen ? 'text-accent' : 'text-white'}`}>
              Ourjwana <span className="text-primary">Car</span>
            </h1>
            <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-primary/80">Marrakech Excellence</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-bold uppercase tracking-widest relative group transition-colors duration-500 ${
                isScrolled ? 'text-accent' : 'text-white'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a 
            href="https://wa.me/212600000000"
            className="hidden sm:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-sm"
          >
            <Phone size={14} />
            <span>Réserver</span>
          </a>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 transition-colors duration-500 z-[110] relative ${
              isScrolled || isMenuOpen ? 'text-accent' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[90] bg-secondary flex flex-col lg:flex-row"
          >
            <div className="hidden lg:flex flex-1 bg-accent relative items-center justify-center overflow-hidden">
              <div className="absolute inset-0 zellige-pattern opacity-10" />
              <div className="relative z-10 text-center">
                <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Destination</span>
                <h2 className="text-white text-7xl font-bold serif italic">Marrakech</h2>
                <div className="mt-8 flex justify-center gap-6 text-white/40">
                  <Instagram size={24} />
                  <Facebook size={24} />
                  <MapPin size={24} />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[550px] h-full flex flex-col p-8 md:p-20 justify-between bg-secondary relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="mt-24 space-y-12">
                <div className="space-y-8">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <a 
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex flex-col"
                      >
                        <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-1">{link.subtitle}</span>
                        <div className="flex items-center gap-4">
                          <h3 className="text-4xl md:text-5xl font-bold text-accent group-hover:text-primary transition-colors duration-300">
                            {link.name}
                          </h3>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div variants={itemVariants} className="space-y-10 pt-10 border-t border-primary/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <Phone size={12} className="text-primary" /> Assistance 24/7
                    </p>
                    <p className="text-lg font-bold text-accent">+212 600 000 000</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <Mail size={12} className="text-primary" /> Email
                    </p>
                    <p className="text-lg font-bold text-accent">booking@ourjwana.ma</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Instagram size={20} className="text-accent hover:text-primary cursor-pointer transition-colors" />
                    <Facebook size={20} className="text-accent hover:text-primary cursor-pointer transition-colors" />
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Since 2018</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;