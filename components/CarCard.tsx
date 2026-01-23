
import React from 'react';
import { Users, Gauge, Fuel, Eye, MessageCircle } from 'lucide-react';
import { Car } from '../constants/carsData';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
  onViewDetails: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails }) => {
  const whatsappLink = `https://wa.me/212786455138?text=Bonjour Alorjwana Car, je souhaite réserver la ${car.name}.`;

  return (
    <motion.div layout initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      <div className="relative h-60 overflow-hidden bg-gray-100">
        <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-4 right-4">
          <span className="bg-accent/90 backdrop-blur-sm px-4 py-1.5 rounded-lg text-[10px] font-bold text-white uppercase tracking-widest">
            {car.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
           <button onClick={onViewDetails} className="bg-white text-accent px-6 py-3 rounded-full flex items-center gap-2 text-xs font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all">
             <Eye size={16}/> DÉTAILS
           </button>
        </div>
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-accent mb-4 group-hover:text-primary transition-colors">{car.name}</h3>
        
        <div className="flex items-center gap-4 mb-8 border-y border-gray-50 py-4">
           <div className="flex items-center gap-1.5">
             <Gauge size={14} className="text-gray-400"/>
             <span className="text-[11px] font-semibold text-gray-600 uppercase">{car.features.transmission}</span>
           </div>
           <div className="flex items-center gap-1.5">
             <Users size={14} className="text-gray-400"/>
             <span className="text-[11px] font-semibold text-gray-600">{car.features.seats} PLACES</span>
           </div>
           <div className="flex items-center gap-1.5">
             <Fuel size={14} className="text-gray-400"/>
             <span className="text-[11px] font-semibold text-gray-600 uppercase">{car.features.fuel}</span>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-auto">
          <button onClick={onViewDetails} className="py-3.5 rounded-xl border border-gray-200 text-accent font-bold text-[10px] tracking-widest hover:bg-gray-50 transition-all uppercase">Détails</button>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-white py-3.5 rounded-xl font-bold text-[10px] tracking-widest hover:bg-[#a0482b] transition-all flex items-center justify-center gap-2 shadow-md uppercase">
            <MessageCircle size={14} /> Réserver
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
