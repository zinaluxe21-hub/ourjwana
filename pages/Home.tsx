
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Star, ShieldCheck, Clock, ArrowRight, MapPin, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { carsData, Car } from '../constants/carsData';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';

const Home: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="overflow-x-hidden bg-transparent">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1539419332720-fa3278408f9c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Marrakech" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-6 z-10 text-white">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-[#C15B36] px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase mb-8">Partout au Maroc</span>
            <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-tight font-serif">Alorjwana <br/><span className="text-[#C15B36] italic">Car</span></h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-light">L'excellence de la location automobile. Des véhicules récents et un service sur mesure pour votre séjour au Royaume.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/laflotte" className="bg-[#C15B36] text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:bg-[#a0482b] transition-all text-sm uppercase tracking-widest">Découvrir la Flotte</Link>
              <a href="https://wa.me/212786455138" className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center gap-3 text-sm uppercase tracking-widest"><MessageCircle size={20}/> WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Fleet */}
      <section className="py-32 bg-transparent relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#C15B36] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Notre Sélection</span>
            <h2 className="text-5xl font-bold text-accent font-serif">Les Incontournables</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {carsData.slice(0, 3).map(car => (
              <CarCard key={car.id} car={car} onViewDetails={() => setSelectedCar(car)} />
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link to="/laflotte" className="inline-flex items-center gap-3 text-[#C15B36] font-bold hover:gap-6 transition-all group border-b border-[#C15B36] pb-2 text-sm uppercase tracking-widest">Voir tout le catalogue <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white/40 backdrop-blur-sm border-y border-primary/5">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-16">
          <div className="space-y-6 text-center lg:text-left">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto lg:mx-0"><MapPin size={32}/></div>
            <h3 className="text-2xl font-serif font-bold text-accent">Flexibilité Totale</h3>
            <p className="text-gray-500 font-medium">Livraison et récupération de votre véhicule partout au Maroc, selon vos besoins.</p>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto lg:mx-0"><ShieldCheck size={32}/></div>
            <h3 className="text-2xl font-serif font-bold text-accent">Sérénité Garantie</h3>
            <p className="text-gray-500 font-medium">Véhicules neufs, entretenus et assistance disponible 24h/24 et 7j/7.</p>
          </div>
          <div className="space-y-6 text-center lg:text-left">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto lg:mx-0"><Clock size={32}/></div>
            <h3 className="text-2xl font-serif font-bold text-accent">Rapidité de Service</h3>
            <p className="text-gray-500 font-medium">Réservation simple par WhatsApp et prise en charge rapide à l'aéroport.</p>
          </div>
        </div>
      </section>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </motion.div>
  );
};

export default Home;
