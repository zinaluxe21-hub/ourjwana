
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car as CarIcon, Gauge, Star, LayoutGrid, Heart, Zap, Users, Trophy } from 'lucide-react';
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

const Fleet: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('TOUS');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const filteredCars = useMemo(() => {
    if (selectedCategory === 'TOUS') return carsData;
    return carsData.filter(car => car.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [selectedCategory]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-44 pb-24 container mx-auto px-6 bg-transparent">
      <div className="mb-12 text-center lg:text-left">
        <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Notre Parc Automobile</span>
        <h1 className="text-5xl md:text-7xl font-bold text-accent mb-12 font-serif">Collection <span className="text-primary italic">Privée</span></h1>
      </div>

      {/* CATEGORY FILTER - PILL DESIGN (Exactement comme dans votre capture) */}
      <div className="mb-20 overflow-visible">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 py-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-[11px] tracking-widest uppercase transition-all duration-300 shadow-sm border ${
                  isActive 
                  ? 'bg-[#2C3E50] text-white border-[#2C3E50] shadow-xl scale-105' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-primary/30 hover:text-primary'
                }`}
              >
                <span className={isActive ? 'text-primary' : 'text-gray-300'}>{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* CAR GRID */}
      <AnimatePresence mode="popLayout">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} onViewDetails={() => setSelectedCar(car)} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredCars.length === 0 && (
        <div className="py-32 text-center">
          <p className="text-gray-400 font-serif italic text-2xl">Bientôt disponible dans cette catégorie...</p>
        </div>
      )}

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </motion.div>
  );
};

export default Fleet;
