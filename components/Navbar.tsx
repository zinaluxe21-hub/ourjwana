
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll du body uniquement quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const isSolid = !isHome || isScrolled;
  const defaultWhatsappMsg = encodeURIComponent("Bonjour Alorjwana Car, je souhaite réserver une voiture");
  const defaultWhatsappLink = `https://wa.me/212786455138?text=${defaultWhatsappMsg}`;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-12 ${isSolid ? 'bg-white shadow-md py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rotate-45 flex items-center justify-center rounded-sm shadow-xl">
              <span className="text-white -rotate-45 font-bold text-xl">A</span>
            </div>
            <h1 className={`text-2xl font-serif font-bold tracking-tighter ${isSolid ? 'text-accent' : 'text-white'}`}>
              Alorjwana <span className="text-primary italic">Car</span>
            </h1>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {[{ label: 'ACCUEIL', path: '/' }, { label: 'LA FLOTTE', path: '/laflotte' }, { label: 'CONTACT', path: '/contact' }].map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.label} to={item.path} className={`text-[10px] font-bold tracking-[0.3em] transition-all relative group ${isSolid ? (isActive ? 'text-primary' : 'text-accent') : 'text-white'} hover:text-primary`}>
                  {item.label}
                  <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <div className={`hidden xl:flex flex-col items-end ${isSolid ? 'text-accent' : 'text-white'}`}>
               <span className="text-[8px] font-bold uppercase tracking-widest text-primary">Contact Direct</span>
               <a href="tel:+212661776685" className="text-sm font-bold">+212 661-776685</a>
            </div>
            <a href={defaultWhatsappLink} className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-[10px] tracking-[0.2em] hover:bg-[#a0482b] transition-all shadow-xl shadow-primary/20 uppercase">RÉSERVER</a>
            <button onClick={() => setIsMenuOpen(true)} className={`lg:hidden p-2 transition-colors ${isSolid ? 'text-primary' : 'text-white'}`}>
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
            className="fixed inset-0 z-[110] bg-secondary flex flex-col p-12 justify-center items-center text-center"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 text-accent p-2 hover:rotate-90 transition-all">
              <X size={40} />
            </button>
            <div className="space-y-10">
              {[{ label: 'ACCUEIL', path: '/' }, { label: 'LA FLOTTE', path: '/laflotte' }, { label: 'CONTACT', path: '/contact' }].map((item) => (
                <Link key={item.label} to={item.path} onClick={() => setIsMenuOpen(false)} className={`block text-5xl font-serif font-bold ${location.pathname === item.path ? 'text-primary' : 'text-accent'} hover:text-primary transition-colors`}>
                  {item.label}
                </Link>
              ))}
              <div className="pt-16 border-t border-primary/10">
                <p className="text-gray-400 text-[10px] uppercase tracking-[0.5em] mb-6 font-bold">Besoin d'aide ?</p>
                <div className="space-y-4">
                  <a href="tel:+212661776685" className="block text-2xl font-bold text-accent">+212 661-776685</a>
                  <a href={defaultWhatsappLink} className="inline-flex items-center gap-3 text-primary font-bold text-lg"><MessageCircle size={20}/> WhatsApp Direct</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
