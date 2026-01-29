
import React from 'react';
import { Users, Gauge, Fuel, Eye, MessageCircle, ShieldCheck, Tag } from 'lucide-react';
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
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/5 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        />
        <div className="absolute top-6 left-6 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[9px] font-bold text-accent uppercase tracking-[0.2em] shadow-sm flex items-center gap-2">
            <ShieldCheck size={12} className="text-primary"/> État Neuf
          </span>
          <span className="bg-primary px-5 py-2 rounded-full text-[9px] font-bold text-white uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
            <Tag size={12}/> À partir de {car.pricePerDay} €
          </span>
        </div>
        <div className="absolute inset-0 bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
           <button 
             onClick={onViewDetails} 
             className="bg-white text-accent px-8 py-4 rounded-full flex items-center gap-3 text-[10px] font-bold shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all tracking-widest uppercase"
           >
             <Eye size={18} className="text-primary"/> Voir Détails
           </button>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[8px] mb-2 block">{car.category}</span>
            <h3 className="text-2xl font-serif font-bold text-accent group-hover:text-primary transition-colors mb-1">{car.name}</h3>
            <p className="text-primary font-bold text-lg">{car.pricePerDay} € <span className="text-[10px] text-gray-400 font-normal uppercase">/ Jour</span></p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-10 border-y border-primary/5 py-6">
           <div className="flex flex-col items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary"><Gauge size={14}/></div>
             <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">{car.features.transmission}</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary"><Users size={14}/></div>
             <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">{car.features.seats} PLACES</span>
           </div>
           <div className="flex flex-col items-center gap-2">
             <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary"><Fuel size={14}/></div>
             <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">{car.features.fuel}</span>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-auto">
          <button 
            onClick={onViewDetails} 
            className="py-4 rounded-2xl border border-primary/10 text-accent font-bold text-[9px] tracking-[0.2em] hover:bg-primary/5 transition-all uppercase"
          >
            Détails
          </button>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary text-white py-4 rounded-2xl font-bold text-[9px] tracking-[0.2em] hover:bg-[#a0482b] transition-all flex items-center justify-center gap-2 shadow-xl shadow-primary/20 uppercase"
          >
            <MessageCircle size={16} /> Réserver
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
