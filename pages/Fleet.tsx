
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car as CarIcon, Gauge, Star, Shield, LayoutGrid, Heart, Zap } from 'lucide-react';
import { carsData, Car } from '../constants/carsData';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';

const categories = [
  { id: 'TOUS', label: 'TOUS', icon: <LayoutGrid size={18}/> },
  { id: 'ÉCONOMIE', label: 'ÉCO', icon: <Zap size={18}/> },
  { id: 'Luxe', label: 'LUXE', icon: <Star size={18}/> },
  { id: 'SUV', label: 'SUV', icon: <CarIcon size={18}/> },
  { id: 'FAMILLE', label: 'FAMILLE', icon: <Gauge size={18}/> },
  { id: 'SPORT', label: 'SPORT', icon: <Heart size={18}/> },
];

const Fleet: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('TOUS');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const filteredCars = useMemo(() => {
    if (selectedCategory === 'TOUS') return carsData;
    // Note: Normalize category comparison for safety
    return carsData.filter(car => car.category.toUpperCase() === selectedCategory.toUpperCase());
  }, [selectedCategory]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-44 pb-24 container mx-auto px-6 bg-transparent">
      <div className="mb-12 text-center lg:text-left">
        <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Notre Parc Automobile</span>
        <h1 className="text-5xl md:text-7xl font-bold text-accent mb-12 font-serif">Collection <span className="text-primary italic">Privée</span></h1>
      </div>

      {/* CATEGORY FILTER - HORIZONTAL SCROLL (Fidèle à l'image fournie) */}
      <div className="mb-20 overflow-hidden relative">
        <div className="category-scroll-container no-scrollbar pb-6">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-4 px-10 py-5 rounded-[1.5rem] font-bold text-[11px] tracking-widest uppercase transition-all duration-300 shadow-sm border ${
                  isActive 
                  ? 'bg-accent text-white border-accent shadow-2xl shadow-accent/20 scale-105' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-primary/30 hover:text-primary'
                }`}
              >
                <span className={isActive ? 'text-primary' : 'text-gray-300'}>{cat.icon}</span>
                {cat.label}
              </button>
            );
          })}
        </div>
        {/* Shadow indicators for scroll */}
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-[#FDF8F3] to-transparent pointer-events-none lg:hidden"></div>
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
