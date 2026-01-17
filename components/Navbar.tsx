
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // On est sur l'accueil ?
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // LOGIQUE DE VISIBILITÉ :
  // Si on n'est PAS sur Home => Toujours Blanc (Solid)
  // Si on EST sur Home => Transparent sauf si on a scrollé
  const isSolid = !isHome || scrolled;

  const navLinks = [
    { name: 'ACCUEIL', path: '/' },
    { name: 'LA FLOTTE', path: '/laflotte' },
    { name: 'L\'HISTOIRE', path: '/histoire' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
      isSolid ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO AREA */}
        <Link to="/" className="flex items-center gap-3 z-50">
          <div className={`w-10 h-10 flex items-center justify-center rounded-sm rotate-45 transition-colors ${isSolid ? 'bg-[#C15B36]' : 'bg-white'}`}>
            <span className={`text-xl font-bold -rotate-45 ${isSolid ? 'text-white' : 'text-[#C15B36]'}`}>O</span>
          </div>
          <div className="flex flex-col">
            <h1 className={`text-xl font-serif font-bold tracking-tight leading-none ${isSolid ? 'text-[#2C3E50]' : 'text-white'}`}>
              Ourjwana <span className="text-[#C15B36] italic">Car</span>
            </h1>
            <span className={`text-[8px] font-bold tracking-[0.2em] uppercase ${isSolid ? 'text-gray-400' : 'text-white/80'}`}>Marrakech Excellence</span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-[11px] font-bold tracking-[0.2em] transition-all relative group ${
                  isSolid 
                    ? (isActive ? 'text-[#C15B36]' : 'text-[#2C3E50]') 
                    : 'text-white'
                } hover:text-[#C15B36]`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#C15B36] transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://wa.me/212600000000" 
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[11px] tracking-widest transition-all ${
              isSolid 
                ? 'bg-[#C15B36] text-white shadow-md hover:bg-[#a0482b]' 
                : 'bg-white text-[#C15B36] hover:bg-gray-100'
            }`}
          >
            <Phone size={14} /> RÉSERVER
          </a>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`lg:hidden p-2 ${isSolid ? 'text-[#2C3E50]' : 'text-white'}`}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE ONLY */}
        <div className="md:hidden flex items-center">
           <button onClick={() => setIsOpen(!isOpen)} className="p-2 z-50">
             {isOpen ? <X className="text-[#C15B36]" size={30} /> : <Menu className={isSolid ? 'text-[#C15B36]' : 'text-white'} size={30} />}
           </button>
        </div>
      </div>

      {/* MOBILE MENU FULLSCREEN */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[998] flex flex-col items-center justify-center p-8 text-center">
          <div className="space-y-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-3xl font-serif font-bold ${location.pathname === item.path ? 'text-[#C15B36]' : 'text-[#2C3E50]'}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-10 border-t border-gray-100 mt-10">
              <p className="text-gray-400 text-[10px] tracking-widest uppercase mb-4">Disponible 24h/24</p>
              <a href="tel:+212600000000" className="text-2xl font-bold text-[#C15B36] tracking-tighter">+212 600 000 000</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
