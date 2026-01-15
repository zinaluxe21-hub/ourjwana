
import React from 'react';
import { Users, Gauge, Fuel, Eye, MessageCircle } from 'lucide-react';
import { Car } from '../constants/carsData';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
  onViewDetails: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onViewDetails }) => {
  const whatsappLink = `https://wa.me/212600000000?text=Bonjour Ourjwana Car, je souhaite réserver la ${car.name}.`;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/5 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="glass px-4 py-1.5 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/10">
            {car.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
           <button onClick={onViewDetails} className="text-white flex items-center gap-2 text-sm font-semibold">
             <Eye size={18}/> Voir l'album photo
           </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-serif font-bold text-accent leading-tight">{car.name}</h3>
          <div className="text-right">
            <span className="block text-primary font-bold text-2xl tracking-tighter">{car.pricePerDay} DH</span>
            <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">/ Jour</span>
          </div>
        </div>
        
        {/* Technical Specs row */}
        <div className="flex items-center gap-6 mb-8 border-y border-gray-50 py-4">
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary"><Gauge size={14}/></div>
             <span className="text-xs font-semibold text-gray-600">{car.features.transmission.charAt(0)}</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary"><Users size={14}/></div>
             <span className="text-xs font-semibold text-gray-600">{car.features.seats}</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary"><Fuel size={14}/></div>
             <span className="text-xs font-semibold text-gray-600">D/E</span>
           </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-auto">
          <button 
            onClick={onViewDetails}
            className="py-4 rounded-xl border border-accent/10 text-accent font-bold text-xs hover:bg-secondary transition-all"
          >
            DÉTAILS
          </button>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white py-4 rounded-xl font-bold text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
          >
            <MessageCircle size={16} /> RÉSERVER
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
