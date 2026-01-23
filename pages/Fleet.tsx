
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car as CarIcon, SearchX } from 'lucide-react';
import { carsData, Car } from '../constants/carsData';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';

const Fleet: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-44 pb-24 container mx-auto px-6 bg-transparent">
      <div className="mb-20">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Catalogue Complet</span>
        <h1 className="text-5xl md:text-7xl font-bold text-accent mb-12 font-serif">La Flotte <span className="text-primary italic">Alorjwana</span></h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {carsData.map(car => (
          <CarCard key={car.id} car={car} onViewDetails={() => setSelectedCar(car)} />
        ))}
      </div>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </motion.div>
  );
};

export default Fleet;
