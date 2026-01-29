
import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck, MapPin, Award, CheckCircle2, LayoutGrid, Zap, Car as CarIcon, Users, Trophy, Star } from 'lucide-react';
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

const reviews = [
  { name: "Marc Lefebvre", city: "Paris, France", text: "Service impeccable ! La voiture était dans un état neuf et livrée directement à mon hôtel. Je recommande vivement.", rating: 5 },
  { name: "Sarah B.", city: "Casablanca, MA", text: "Une équipe très professionnelle. La réservation via WhatsApp est ultra rapide. J'ai loué un Tucson pour une semaine, parfait !", rating: 5 },
  { name: "John Doe", city: "Londres, UK", text: "Best car rental in Morocco. Clear prices and no hidden fees. The VIP service is a real plus for airport transfers.", rating: 5 }
];

const CONTACT_WA = "https://wa.me/212786455138?text=";
const DEFAULT_MSG = encodeURIComponent("Bonjour Alorjwana Car, je souhaite réserver une voiture");

const Home: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('TOUS');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const filteredCars = useMemo(() => {
    if (selectedCategory === 'TOUS') return carsData;
    return carsData.filter(car => car.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [selectedCategory]);

  return (
    <div className="bg-transparent w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] lg:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Luxury Car Morocco" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10 text-white py-20 lg:py-0">
          <motion.div initial={isMobile ? {} : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">Prestige & Excellence</span>
            </div>
            <h1 className="text-4xl md:text-9xl font-bold mb-8 leading-tight font-serif">
              Alorjwana <br/>
              <span className="text-primary italic">Car Rental</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-300 mb-10 max-w-lg font-light leading-relaxed">
              Découvrez le Maroc avec élégance. Une flotte exclusive et un service de livraison personnalisé partout au Royaume.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <Link to="/laflotte" className="bg-primary text-white px-8 md:px-12 py-4 md:py-6 rounded-xl font-bold hover:bg-[#a0482b] transition-all text-[11px] uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-primary/30">
                Explorer le Catalogue <ArrowRight size={18}/>
              </Link>
              <a href={`${CONTACT_WA}${DEFAULT_MSG}`} className="bg-white/10 backdrop-blur-md border border-white/20 px-8 md:px-12 py-4 md:py-6 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-3 text-[11px] uppercase tracking-widest text-white">
                <MessageCircle size={20} className="text-primary"/> WhatsApp Direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE VIP / NOTRE PROMESSE - PURE STATIC STACK */}
      <section className="relative py-16 lg:py-32 bg-transparent">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="w-full relative">
              <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] md:h-[650px]">
                <img 
                  src="/myphoto.jpg" 
                  alt="Alorjwana VIP Service" 
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200'; }}
                />
              </div>
              <div className="relative -mt-20 mx-4 lg:mx-0 lg:absolute lg:mt-0 lg:-bottom-10 lg:-right-10 bg-white p-8 lg:p-14 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl lg:max-w-sm border border-primary/5 z-10">
                  <div className="w-12 h-12 lg:w-20 lg:h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                     <Award size={32} className="lg:w-10 lg:h-10" />
                  </div>
                  <h4 className="text-2xl lg:text-4xl font-serif font-bold text-accent mb-4">Service VIP</h4>
                  <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-medium">
                    Livraison gratuite à <span className="text-primary font-bold">l'aéroport</span> ou à votre <span className="text-primary font-bold italic">porte</span> partout au Maroc.
                  </p>
              </div>
            </div>
            
            <div className="space-y-12 w-full pt-10 lg:pt-0">
              <div className="text-center lg:text-left">
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Notre Promesse</span>
                <h2 className="text-4xl md:text-7xl font-serif font-bold text-accent leading-tight">L'Engagement <br/><span className="text-primary italic">Qualité</span></h2>
              </div>
              <div className="space-y-10">
                {[
                  { title: "Partout au Maroc", desc: "Casablanca, Marrakech, Tanger... Nous couvrons tout le territoire.", icon: <MapPin size={24}/> },
                  { title: "Transparence Totale", desc: "Pas de frais cachés. Prix fixes et contrats clairs dès le départ.", icon: <CheckCircle2 size={24}/> },
                  { title: "Support 24h/7", desc: "Une assistance routière et commerciale à votre écoute à tout moment.", icon: <ShieldCheck size={24}/> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center">
                    <div className="w-14 h-14 flex-shrink-0 bg-white shadow-lg rounded-2xl flex items-center justify-center text-primary border border-primary/5">
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
        </div>
      </section>

      {/* FLOTTE SECTION */}
      <section className="py-24 md:py-32 bg-accent/5 backdrop-blur-sm border-y border-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Notre Parc Automobile</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-accent mb-12">Collection <span className="text-primary italic">Privée</span></h2>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 md:px-8 py-4 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all shadow-sm border ${
                    selectedCategory === cat.id 
                    ? 'bg-accent text-white border-accent shadow-xl scale-105' 
                    : 'bg-white text-gray-400 border-gray-100 hover:border-primary/40 hover:text-primary'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCars.map(car => (
              <CarCard key={car.id} car={car} onViewDetails={() => setSelectedCar(car)} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Témoignages</span>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent">L'Avis de nos <span className="text-primary italic">Clients</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((rev, i) => (
              <div 
                key={i}
                className="bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] border border-primary/5 shadow-xl transition-all relative overflow-hidden"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, idx) => <Star key={idx} size={16} className="fill-gold text-gold" />)}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-8 text-lg font-light">"{rev.text}"</p>
                <div>
                   <h4 className="font-bold text-accent text-lg">{rev.name}</h4>
                   <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{rev.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-accent rounded-[3rem] md:rounded-[4rem] p-10 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="max-w-xl text-center lg:text-left z-10">
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">Prêt à Prendre <br/><span className="text-primary italic">La Route ?</span></h2>
            <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed font-light">
              Réservez en 2 minutes via WhatsApp. Notre équipe est à votre écoute pour personnaliser votre expérience et répondre à tous vos besoins.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               <a href={`${CONTACT_WA}${DEFAULT_MSG}`} className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-2xl text-[10px] tracking-widest uppercase">
                 <MessageCircle size={18}/> RÉSERVER MAINTENANT
               </a>
               <a href="tel:+212661776685" className="text-white border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-[10px] tracking-widest uppercase">
                 APPELER
               </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8 relative z-10">
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] text-center shadow-inner">
                <h4 className="text-primary text-4xl md:text-6xl font-bold mb-2">10+</h4>
                <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">EXPÉRIENCE</p>
             </div>
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] text-center shadow-inner mt-10">
                <h4 className="text-primary text-4xl md:text-6xl font-bold mb-2">24/7</h4>
                <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">ASSISTANCE</p>
             </div>
          </div>
        </div>
      </section>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
};

export default Home;
