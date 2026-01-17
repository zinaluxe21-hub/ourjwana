
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, ShieldCheck, Clock, ArrowRight, Car as CarIcon, Gem, Mountain, Users, Trophy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { carsData } from '../constants/carsData';
import CarCard from '../components/CarCard';

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Luxe' | 'Économie' | 'SUV' | 'Familiale' | 'Sport'>('All');
  const navigate = useNavigate();

  const categories = useMemo(() => [
    { id: 'All', icon: <CarIcon size={18} />, label: 'Tous' },
    { id: 'Luxe', icon: <Gem size={18} />, label: 'Luxe' },
    { id: 'SUV', icon: <Mountain size={18} />, label: 'SUV' },
    { id: 'Économie', icon: <Clock size={18} />, label: 'Éco' },
    { id: 'Familiale', icon: <Users size={18} />, label: 'Famille' },
    { id: 'Sport', icon: <Trophy size={18} />, label: 'Sport' },
  ], []);

  const filteredCars = useMemo(() => {
    if (activeFilter === 'All') return carsData.slice(0, 6);
    return carsData.filter(car => car.category === activeFilter);
  }, [activeFilter]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1539419332720-fa3278408f9c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Marrakech Landscape"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#C15B36]/20 backdrop-blur-md border border-[#C15B36]/30 px-6 py-2 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-8">
              L'Excellence à Marrakech
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight font-serif">
              L'Expérience<br/><span className="text-[#C15B36] italic">Ourjwana</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-light">
              Découvrez la Ville Rouge avec prestige. Une sélection rigoureuse de véhicules pour chaque moment de votre séjour.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/laflotte" className="bg-[#C15B36] text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#a0482b] transition-all text-lg">
                Explorer le Catalogue
              </Link>
              <a href="https://wa.me/212600000000" className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-3 text-lg">
                <Phone size={20}/> WhatsApp Direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collection Section - On laisse le fond transparent pour voir le Zellige du body */}
      <section className="py-32 bg-transparent relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#C15B36] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Notre Parc Automobile</span>
            <h2 className="text-5xl font-bold text-accent font-serif mb-12">Collection <span className="text-[#C15B36] italic">Privée</span></h2>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id as any)}
                  className={`flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold transition-all border ${
                    activeFilter === cat.id 
                    ? 'bg-[#C15B36] border-[#C15B36] text-white shadow-xl shadow-[#C15B36]/30 scale-105' 
                    : 'bg-white border-gray-100 text-gray-500 hover:border-[#C15B36]/30 hover:bg-[#FDF8F3]'
                  }`}
                >
                  <span className={activeFilter === cat.id ? 'text-white' : 'text-[#C15B36]'}>{cat.icon}</span>
                  <span className="text-xs uppercase tracking-widest">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredCars.map(car => (
                <CarCard 
                  key={car.id} 
                  car={car} 
                  onViewDetails={() => navigate(`/car/${car.id}`)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-20 text-center">
            <Link to="/laflotte" className="inline-flex items-center gap-3 text-[#C15B36] font-bold hover:gap-6 transition-all group border-b border-[#C15B36] pb-2 text-sm uppercase tracking-widest">
              Voir toute la collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-32 bg-[#FDF8F3]/80 backdrop-blur-sm relative overflow-hidden border-y border-[#C15B36]/10">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover"
                alt="Ourjwana Heritage"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-2xl max-w-xs border border-[#C15B36]/10">
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-base italic font-medium text-accent leading-relaxed">
                "Une hospitalité digne des plus grands palais de la Ville Rouge."
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <header>
              <span className="text-[#C15B36] font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Notre Philosophie</span>
              <h2 className="text-5xl md:text-7xl font-bold text-accent leading-tight font-serif">L'Art de <br/><span className="text-[#C15B36] italic">Vous Recevoir</span></h2>
            </header>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Chez Ourjwana Car, nous croyons que la liberté de mouvement est le premier luxe d'un voyageur. Nous combinons rigueur internationale et chaleur marocaine.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#C15B36] shadow-sm border border-[#C15B36]/5">
                  <ShieldCheck size={28}/>
                </div>
                <h4 className="text-xl font-bold text-accent">Sérénité</h4>
                <p className="text-gray-500 text-sm font-medium">Assurances complètes et assistance 24/7 partout au Maroc.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#C15B36] shadow-sm border border-[#C15B36]/5">
                  <Clock size={28}/>
                </div>
                <h4 className="text-xl font-bold text-accent">Ponctualité</h4>
                <p className="text-gray-500 text-sm font-medium">Livraison gratuite à l'aéroport ou à votre Riad en temps record.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
