
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck, MapPin, Award, Star, CheckCircle2, LayoutGrid, Zap, Car as CarIcon, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { carsData, Car } from '../constants/carsData';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';

const categories = [
  { id: 'TOUS', label: 'TOUS', icon: <LayoutGrid size={18}/> },
  { id: 'ÉCONOMIE', label: 'ÉCO', icon: <Zap size={18}/> },
  { id: 'Luxe', label: 'LUXE', icon: <Star size={18}/> },
  { id: 'SUV', label: 'SUV', icon: <CarIcon size={18}/> },
  { id: 'FAMILLE', label: 'FAMILLE', icon: <Users size={18}/> },
  { id: 'SPORT', label: 'SPORT', icon: <Trophy size={18}/> },
];

const Home: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('TOUS');

  const WHATSAPP_LINK = "https://wa.me/212786455138?text=";
  const defaultMsg = encodeURIComponent("Bonjour Alorjwana Car, je souhaite réserver une voiture");

  const filteredCars = useMemo(() => {
    if (selectedCategory === 'TOUS') return carsData;
    return carsData.filter(car => car.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [selectedCategory]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-transparent overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] md:h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Luxury Car Morocco" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10 text-white">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Location de Prestige</span>
            </div>
            <h1 className="text-5xl md:text-9xl font-bold mb-8 leading-tight font-serif">
              Alorjwana <br/>
              <span className="text-primary italic">Car Experience</span>
            </h1>
            <p className="text-base md:text-2xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed">
              Redéfinissez votre voyage au Maroc. Excellence technique et service VIP à votre disposition.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 mb-12">
              <Link to="/laflotte" className="bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold hover:bg-[#a0482b] transition-all text-[10px] uppercase tracking-widest flex items-center gap-3">
                Explorer <ArrowRight size={16}/>
              </Link>
              <a href={`${WHATSAPP_LINK}${defaultMsg}`} className="bg-white/10 backdrop-blur-md border border-white/20 px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-3 text-[10px] uppercase tracking-widest text-white">
                <MessageCircle size={18} className="text-primary"/> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE SECTION - FIX BUG MOBILE SCROLL */}
      <section className="py-20 md:py-32 container mx-auto px-6 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative">
            {/* PHOTO VIP - Responsive Height Fix */}
            <div className="rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white w-full aspect-square md:aspect-auto md:h-[500px] lg:h-[600px] relative z-0">
              <img 
                src="/myphoto.jpg" 
                alt="Alorjwana VIP Fleet" 
                className="w-full h-full object-cover object-center" 
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200'; }}
              />
            </div>
            
            {/* FLOATING CARD VIP - Adjusted for Mobile Visibility */}
            <div className="absolute -bottom-12 left-4 right-4 md:left-auto md:-bottom-8 md:-right-8 bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl md:max-w-sm border border-primary/5 z-10 transition-transform hover:scale-105 duration-500">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                   <Award size={32} />
                </div>
                <h4 className="text-xl md:text-3xl font-serif font-bold text-accent mb-4">Service VIP</h4>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                  Nous vous livrons votre voiture à l'aéroport ou directement à votre <span className="text-primary font-bold">localisation</span> partout au Maroc.
                </p>
            </div>
          </div>
          
          <div className="space-y-12 mt-20 lg:mt-0">
            <div>
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Notre Expertise</span>
              <h2 className="text-4xl md:text-7xl font-serif font-bold text-accent leading-tight">L'Engagement <br/><span className="text-primary italic text-3xl md:text-6xl">Qualité Totale</span></h2>
            </div>
            <div className="space-y-8">
              {[
                { title: "Livraison Partout", desc: "Casablanca, Marrakech, Agadir, Tanger. Partout au Maroc.", icon: <MapPin size={24}/> },
                { title: "Transparence", desc: "Pas de frais surprises au comptoir. Contrats clairs.", icon: <CheckCircle2 size={24}/> },
                { title: "Assistance 24/7", desc: "Notre équipe technique intervient immédiatement.", icon: <ShieldCheck size={24}/> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 flex-shrink-0 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-accent mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLOTTE SECTION */}
      <section className="py-24 md:py-32 bg-accent/5 backdrop-blur-sm relative border-y border-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Notre Flotte</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-12">Choisissez Votre <span className="text-primary italic">Véhicule</span></h2>
            
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all shadow-sm border ${
                    selectedCategory === cat.id 
                    ? 'bg-accent text-white border-accent shadow-xl scale-105' 
                    : 'bg-white text-gray-400 border-gray-100 hover:text-primary'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map(car => (
                <CarCard key={car.id} car={car} onViewDetails={() => setSelectedCar(car)} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-accent rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6">Prêt à Prendre <br/>La Route ?</h2>
            <p className="text-gray-300 text-lg mb-10">Réservez en 2 minutes via WhatsApp.</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href={`${WHATSAPP_LINK}${defaultMsg}`} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all uppercase tracking-widest text-[10px]">
                <MessageCircle size={18}/> RÉSERVER MAINTENANT
              </a>
              <a href="tel:+212661776685" className="text-white border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all uppercase tracking-widest text-[10px]">
                NOUS APPELER
              </a>
            </div>
          </div>
          <div className="flex gap-6">
             <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] text-center w-40 md:w-56">
                <h4 className="text-primary text-3xl font-bold mb-2">10+</h4>
                <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest">EXPÉRIENCE</p>
             </div>
             <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] text-center w-40 md:w-56 mt-8">
                <h4 className="text-primary text-3xl font-bold mb-2">100%</h4>
                <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest">SATISFACTION</p>
             </div>
          </div>
        </div>
      </section>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </motion.div>
  );
};

export default Home;
