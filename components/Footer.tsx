
import React from 'react';
import { Instagram, Facebook, ArrowRight, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 relative overflow-hidden border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm rotate-45">
                <span className="text-white -rotate-45 font-bold text-xl">A</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tighter text-accent">Alorjwana <span className="text-primary italic">Car</span></h1>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8">Votre partenaire de confiance pour la location de voitures partout au Maroc. Excellence, fiabilité et service premium.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-all cursor-pointer"><Instagram size={20} /></div>
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-all cursor-pointer"><Facebook size={20} /></div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-accent uppercase tracking-widest text-[10px] mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-500"><Phone size={16} className="text-primary"/> +212 661-776685</li>
              <li className="flex items-center gap-3 text-sm text-gray-500"><MapPin size={16} className="text-primary"/> Partout au Maroc</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-accent uppercase tracking-widest text-[10px] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Accueil', 'La Flotte', 'Contact'].map((link) => (
                <li key={link}><Link to={link === 'Accueil' ? '/' : `/${link.toLowerCase().replace(' ', '')}`} className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-accent uppercase tracking-widest text-[10px] mb-8">Réserver</h4>
            <p className="text-gray-500 text-xs mb-6 leading-relaxed">Contactez-nous directement via WhatsApp pour une réservation rapide.</p>
            <a href="https://wa.me/212786455138" className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-xl font-bold text-[10px] tracking-widest hover:bg-[#a0482b] transition-all">WHATSAPP DIRECT <ArrowRight size={14}/></a>
          </div>
        </div>
        <div className="pt-12 border-t border-primary/5 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Alorjwana Car. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
