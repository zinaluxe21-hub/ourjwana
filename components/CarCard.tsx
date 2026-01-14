
import React from 'react';
import { Users, Gauge, Fuel, Eye, MessageCircle } from 'lucide-react';
import { Car } from '../constants/carsData';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails }) => {
  const whatsappLink = `https://wa.me/212600000000?text=Bonjour Ourjwana Car, je souhaite réserver la ${car.name} pour mon séjour à Marrakech.`;

  return (
    // Fixed: Added layout prop and ensured correct motion.div usage
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-primary/5 hover:shadow-xl transition-all group relative"
    >
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider shadow-sm">
          {car.category}
        </span>
      </div>

      <div className="h-48 overflow-hidden relative">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="p-5 md:p-6 relative">
        <div className="absolute inset-0 zellige-pattern opacity-[0.03] pointer-events-none" />
        
        <h3 className="text-lg md:text-xl font-bold text-accent mb-2">{car.name}</h3>
        
        <div className="grid grid-cols-3 gap-2 mb-6 text-gray-500 text-xs">
          <div className="flex flex-col items-center gap-1 p-2 bg-secondary rounded-lg">
            <Gauge size={14} className="text-primary" />
            <span className="truncate w-full text-center">{car.features.transmission}</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 bg-secondary rounded-lg">
            <Users size={14} className="text-primary" />
            <span>{car.features.seats} Pl.</span>
          </div>
          <div className="flex flex-col items-center gap-1 p-2 bg-secondary rounded-lg">
            <Fuel size={14} className="text-primary" />
            <span className="truncate w-full text-center">{car.features.fuel}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold">Prix / jour</span>
            <span className="text-xl md:text-2xl font-bold text-primary">{car.pricePerDay} <small className="text-xs font-normal text-accent">DH</small></span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => onViewDetails(car)}
            className="flex items-center justify-center gap-2 border border-primary/20 text-accent py-2.5 rounded-lg font-medium hover:bg-primary/5 transition-colors text-sm"
          >
            <Eye size={16} />
            Détails
          </button>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-accent text-white py-2.5 rounded-lg font-medium hover:bg-accent/90 transition-colors text-sm"
          >
            <MessageCircle size={16} />
            Réserver
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
