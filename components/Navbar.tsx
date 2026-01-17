
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Logic: Are we on the Home page?
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine Styles based on location
  // IF not home, OR if home but scrolled -> Solid White Navbar
  const isSolid = !isHome || scrolled;

  // Map internal paths to match App.tsx routes
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fleet', path: '/laflotte' },
    { name: 'About', path: '/histoire' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
      isSolid ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold font-serif z-50">
          <span className={isSolid ? 'text-[#2C3E50]' : 'text-white'}>Ourjwana</span>
          <span className="text-[#C15B36]">Car</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium text-sm uppercase tracking-widest hover:text-[#C15B36] transition-colors ${
                isSolid ? 'text-[#C15B36]' : 'text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a href="https://wa.me/212600000000" className="bg-[#C15B36] text-white px-5 py-2 rounded-lg font-bold text-xs uppercase shadow-lg hover:bg-black transition-all">
            Réserver
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 p-2">
          {isOpen ? (
            <X className="text-[#C15B36]" size={30} />
          ) : (
            <Menu className={isSolid ? 'text-[#C15B36]' : 'text-white'} size={30} />
          )}
        </button>
      </div>

      {/* MOBILE MENU FULLSCREEN */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-serif font-bold text-[#2C3E50] hover:text-[#C15B36]"
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/212600000000" 
            onClick={() => setIsOpen(false)}
            className="bg-[#C15B36] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase shadow-lg"
          >
            WhatsApp Direct
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
