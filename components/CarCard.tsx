
import React from 'react';
import { Users, Gauge, Fuel, Eye, MessageCircle } from 'lucide-react';
import { Car } from '../constants/carsData';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
  onViewDetails: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails }) => {
  const whatsappLink = `https://wa.me/212600000000?text=Bonjour Ourjwana Car, je souhaite réserver la ${car.name} pour mon séjour à Marrakech.`;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-primary/5 hover:shadow-2xl transition-all group relative"
    >
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider shadow-sm">
          {car.category}
        </span>
      </div>

      <div className="h-56 overflow-hidden relative">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-8 relative">
        <div className="absolute inset-0 zellige-pattern opacity-[0.03] pointer-events-none" />
        
        <h3 className="text-2xl font-bold text-accent mb-2">{car.name}</h3>
        
        <div className="flex gap-4 mb-8 text-gray-500">
           <div className="flex items-center gap-1.5"><Gauge size={14} className="text-primary"/><span className="text-xs">{car.features.transmission.charAt(0)}</span></div>
           <div className="flex items-center gap-1.5"><Users size={14} className="text-primary"/><span className="text-xs">{car.features.seats}</span></div>
           <div className="flex items-center gap-1.5"><Fuel size={14} className="text-primary"/><span className="text-xs">D</span></div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Par jour</span>
            <span className="text-3xl font-bold text-primary">{car.pricePerDay} <small className="text-xs font-normal text-accent uppercase">DH</small></span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={onViewDetails}
            className="flex items-center justify-center gap-2 border border-primary/20 text-accent py-4 rounded-2xl font-bold hover:bg-primary/5 transition-all text-xs"
          >
            <Eye size={16} /> Détails
          </button>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-accent text-white py-4 rounded-2xl font-bold hover:bg-primary transition-all text-xs shadow-lg shadow-accent/10"
          >
            <MessageCircle size={16} /> Réserver
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
