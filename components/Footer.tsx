
import React from 'react';
import { Instagram, Facebook, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'La Flotte', href: '#fleet' },
    { name: 'Notre Histoire', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-secondary pt-24 pb-12 relative overflow-hidden border-t border-primary/5">
      <div className="absolute bottom-0 left-0 w-full h-1 zellige-pattern opacity-10" />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm rotate-45">
                <span className="text-white -rotate-45 font-bold text-xl">O</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tighter text-accent">Ourjwana <span className="text-primary">Car</span></h1>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8">Location de voitures premium à Marrakech. Allier tradition d'accueil et modernité de service.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-all cursor-pointer"><Instagram size={20} /></div>
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-all cursor-pointer"><Facebook size={20} /></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-accent uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-accent uppercase tracking-widest text-xs mb-8">Informations</h4>
            <ul className="space-y-4">
              {['Conditions', 'Confidentialité', 'Aide & FAQ'].map(link => (
                <li key={link}><a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-accent uppercase tracking-widest text-xs mb-8">Newsletter</h4>
            <div className="flex gap-2 p-1 bg-white rounded-2xl shadow-sm">
              <input type="email" placeholder="Votre email" className="bg-transparent border-none flex-1 px-4 text-sm focus:ring-0" />
              <button className="bg-accent text-white p-3 rounded-xl hover:bg-primary transition-colors"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ourjwana Car Marrakech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
