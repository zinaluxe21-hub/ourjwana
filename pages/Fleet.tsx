
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
    { id: 'Économie', icon: <Clock size={18} />, label: 'Économie' },
    { id: 'Luxe', icon: <Gem size={18} />, label: 'Luxe' },
    { id: 'SUV', icon: <Mountain size={18} />, label: 'SUV' },
    { id: 'Familiale', icon: <Users size={18} />, label: 'Famille' },
    { id: 'Sport', icon: <Trophy size={18} />, label: 'Sport' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="pt-44 pb-24 container mx-auto px-6 bg-transparent"
    >
      <div className="mb-20">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Notre Sélection</span>
        <h1 className="text-5xl md:text-7xl font-bold text-accent mb-12 font-serif">Le Catalogue <span className="text-primary italic">Ourjwana</span></h1>
        
        <div className="flex overflow-x-auto pb-6 gap-3 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all border ${
                filter === cat.id 
                ? 'bg-accent border-accent text-white shadow-xl scale-105' 
                : 'bg-white border-gray-100 text-accent hover:border-primary/20 hover:bg-gray-50'
              }`}
            >
              <span className={filter === cat.id ? 'text-primary' : 'text-gray-400'}>{cat.icon}</span>
              <span className="text-xs uppercase tracking-widest">{cat.label}</span>
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
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCars.map(car => (
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
            <h3 className="text-3xl font-bold text-accent font-serif">Aucun véhicule disponible</h3>
            <p className="text-gray-500 mt-2">Nous renouvelons régulièrement notre parc automobile.</p>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Fleet;
