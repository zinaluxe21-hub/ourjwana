
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, ShieldCheck, Clock, ArrowRight, Car as CarIcon, Gem, Mountain, Users, Trophy } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { carsData } from '../constants/carsData';
import CarCard from '../components/CarCard';

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'Luxe' | 'Économie' | 'SUV' | 'Familiale' | 'Sport'>('Luxe');
  const navigate = useNavigate();

  const categories = [
    { id: 'Luxe', icon: <Gem size={18} />, label: 'Luxe' },
    { id: 'SUV', icon: <Mountain size={18} />, label: 'SUV' },
    { id: 'Économie', icon: <Clock size={18} />, label: 'Éco' },
    { id: 'Familiale', icon: <Users size={18} />, label: 'Famille' },
    { id: 'Sport', icon: <Trophy size={18} />, label: 'Sport' },
  ];

  const filteredCars = useMemo(() => {
    return carsData.filter(car => car.category === activeFilter).slice(0, 3);
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
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary/20 backdrop-blur-md border border-primary/30 px-6 py-2 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-8">
              L'Excellence à Marrakech
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight font-serif">
              L'Expérience<br/><span className="text-primary italic">Ourjwana</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-light">
              Découvrez la Ville Rouge avec prestige. Une sélection rigoureuse de véhicules pour chaque moment de votre séjour.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/laflotte" className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-[#a0482b] transition-all text-lg">
                Explorer le Catalogue
              </Link>
              <a href="https://wa.me/212600000000" className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-3 text-lg">
                <Phone size={20}/> WhatsApp Direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Signature Fleet with Categories */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Notre Parc Automobile</span>
            <h2 className="text-5xl font-bold text-accent font-serif mb-8">Collection <span className="text-primary italic">Privée</span></h2>
            
            {/* Desktop Filters */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id as any)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all border ${
                    activeFilter === cat.id 
                    ? 'bg-primary border-primary text-white shadow-xl scale-105' 
                    : 'bg-white border-gray-100 text-accent hover:border-primary/20 hover:bg-gray-50'
                  }`}
                >
                  <span className={activeFilter === cat.id ? 'text-white' : 'text-primary'}>{cat.icon}</span>
                  <span className="text-sm tracking-wide">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-10"
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

          <div className="mt-16 text-center">
            <Link to="/laflotte" className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group border-b border-primary pb-2">
              Voir tous les véhicules disponibles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 zellige-pattern opacity-5 pointer-events-none" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover"
                alt="Ourjwana Heritage"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-2xl max-w-xs border border-primary/10">
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-base italic font-medium text-accent leading-relaxed">
                "Plus qu'une simple location, c'est l'accueil de Marrakech qui nous a suivis partout."
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <header>
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Notre Philosophie</span>
              <h2 className="text-5xl md:text-7xl font-bold text-accent leading-tight font-serif">L'Art de <br/><span className="text-primary italic">Vous Recevoir</span></h2>
            </header>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Chez Ourjwana Car, nous croyons que la liberté de mouvement est le premier luxe d'un voyageur. Nous combinons rigueur internationale et chaleur marocaine.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <ShieldCheck size={28}/>
                </div>
                <h4 className="text-xl font-bold text-accent">Sérénité</h4>
                <p className="text-gray-500 text-sm">Assurances complètes et assistance 24/7 partout au Maroc.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <Clock size={28}/>
                </div>
                <h4 className="text-xl font-bold text-accent">Ponctualité</h4>
                <p className="text-gray-500 text-sm">Livraison gratuite à l'aéroport ou à votre Riad en temps record.</p>
              </div>
            </div>
            <div className="pt-8">
              <Link to="/histoire" className="inline-block border-b-2 border-primary pb-2 text-accent font-bold hover:text-primary transition-colors">
                En savoir plus sur notre histoire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
