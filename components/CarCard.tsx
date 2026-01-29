
import React from 'react';
import { Users, Gauge, Fuel, Eye, MessageCircle, ShieldCheck } from 'lucide-react';
import { Car } from '../constants/carsData';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
  onViewDetails: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails }) => {
  const whatsappLink = `https://wa.me/212786455138?text=Bonjour Alorjwana Car, je souhaite réserver la ${car.name}.`;

  return (
    <motion.div 
      layout 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5 flex flex-col h-full"
    >
      <div className="relative h-60 md:h-64 overflow-hidden bg-gray-100">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-5 left-5">
          <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[8px] font-bold text-accent uppercase tracking-widest shadow-sm flex items-center gap-2">
            <ShieldCheck size={12} className="text-primary"/> État Neuf
          </span>
        </div>
        <div className="absolute inset-0 bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
           <button onClick={onViewDetails} className="bg-white text-accent px-8 py-4 rounded-full font-bold shadow-2xl tracking-widest uppercase text-[10px]">
             Voir Détails
           </button>
        </div>
      </div>

      <div className="p-8 md:p-10 flex flex-col flex-grow text-center">
        <span className="text-primary font-bold uppercase tracking-widest text-[8px] mb-2 block">{car.category}</span>
        <h3 className="text-xl md:text-2xl font-serif font-bold text-accent mb-4">{car.name}</h3>
        
        <div className="flex items-center justify-center gap-6 mb-8 border-y border-primary/5 py-4">
           <div className="flex flex-col items-center gap-1">
             <Gauge size={14} className="text-primary opacity-60"/>
             <span className="text-[8px] font-bold text-gray-500 uppercase">{car.features.transmission}</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <Users size={14} className="text-primary opacity-60"/>
             <span className="text-[8px] font-bold text-gray-500 uppercase">{car.features.seats} PLACES</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <Fuel size={14} className="text-primary opacity-60"/>
             <span className="text-[8px] font-bold text-gray-500 uppercase">{car.features.fuel}</span>
           </div>
        </div>

        <div className="mt-auto">
          <p className="text-primary font-bold text-lg mb-6">À partir de {car.pricePerDay} €</p>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={onViewDetails} className="py-4 rounded-xl border border-primary/10 text-accent font-bold text-[9px] tracking-widest uppercase hover:bg-primary/5 transition-all">
              Détails
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-white py-4 rounded-xl font-bold text-[9px] tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-primary/20 uppercase">
              <MessageCircle size={16} /> Réserver
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
