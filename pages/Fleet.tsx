
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchX, Car as CarIcon, Clock, Gem, Mountain, Users, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { carsData } from '../constants/carsData';
import CarCard from '../components/CarCard';

const Fleet: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Luxe' | 'Économie' | 'SUV' | 'Familiale' | 'Sport'>('All');
  const navigate = useNavigate();

  const filteredCars = useMemo(() => {
    if (filter === 'All') return carsData;
    return carsData.filter(car => car.category === filter);
  }, [filter]);

  const categories = [
    { id: 'All', icon: <CarIcon size={18} />, label: 'Tous' },
    { id: 'Économie', icon: <Clock size={18} />, label: 'Éco' },
    { id: 'Luxe', icon: <Gem size={18} />, label: 'Luxe' },
    { id: 'SUV', icon: <Mountain size={18} />, label: 'SUV' },
    { id: 'Familiale', icon: <Users size={18} />, label: 'Famille' },
    { id: 'Sport', icon: <Trophy size={18} />, label: 'Sport' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-32 pb-24 container mx-auto px-6">
      <div className="mb-20">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Notre Flotte</span>
        <h1 className="text-5xl md:text-7xl font-bold text-accent mb-12">Le Catalogue <span className="text-primary italic">Ourjwana</span></h1>
        
        <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all border ${
                filter === cat.id 
                ? 'bg-accent border-accent text-white shadow-xl' 
                : 'bg-white border-primary/5 text-accent hover:border-primary/20'
              }`}
            >
              <span className="opacity-50">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {filteredCars.length > 0 ? (
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredCars.map(car => (
              // Added onViewDetails to fix the error and provide navigation to the car details page
              <CarCard 
                key={car.id} 
                car={car} 
                onViewDetails={() => navigate(`/car/${car.id}`)}
              />
            ))}
          </motion.div>
        ) : (
          <div className="py-40 text-center flex flex-col items-center">
            <SearchX className="text-primary/10 mb-6" size={80} />
            <h3 className="text-3xl font-bold text-accent">Aucun véhicule disponible</h3>
            <p className="text-gray-500 mt-2">Revenez bientôt pour de nouveaux ajouts.</p>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Fleet;