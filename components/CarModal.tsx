
import React, { useState } from 'react';
import { X, Check, Calendar, ArrowRight } from 'lucide-react';
import { Car } from '../constants/carsData';
import { motion, AnimatePresence } from 'framer-motion';

interface CarModalProps {
  car: Car | null;
  onClose: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, onClose }) => {
  const [dates, setDates] = useState({ checkIn: '', checkOut: '' });

  if (!car) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Ourjwana Car, je souhaite réserver la ${car.name} du ${dates.checkIn} au ${dates.checkOut}.`;
    window.open(`https://wa.me/212600000000?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        {/* Fixed: motion.div needs initial, animate, exit when inside AnimatePresence */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-accent/80 backdrop-blur-sm"
        />
        
        {/* Fixed: motion.div attributes */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-secondary w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-2xl relative shadow-2xl z-10"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 z-20"
          >
            <X size={20} />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-56 md:h-auto">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 md:p-10 zellige-pattern">
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">{car.category}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">{car.name}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed italic border-l-4 border-primary/20 pl-4 text-sm md:text-base">
                "{car.description}"
              </p>

              <div className="mb-8">
                <h4 className="font-bold text-accent mb-4 flex items-center gap-2">
                  <span className="w-6 h-px bg-primary" /> Caractéristiques
                </h4>
                <ul className="grid grid-cols-2 gap-y-3 text-sm">
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check size={14} className="text-primary" /> Boîte {car.features.transmission}
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check size={14} className="text-primary" /> {car.features.seats} Places
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check size={14} className="text-primary" /> Moteur {car.features.fuel}
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Check size={14} className="text-primary" /> {car.features.ac ? 'Climatisation' : 'Standard'}
                  </li>
                </ul>
              </div>

              <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-primary/10">
                <h4 className="font-bold text-accent mb-4 flex items-center gap-2">
                  <Calendar size={18} className="text-primary" /> Réservation Rapide
                </h4>
                <form onSubmit={handleBooking} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Début</label>
                      <input 
                        required
                        type="date" 
                        className="w-full border-gray-200 border p-2 rounded text-sm focus:ring-primary focus:border-primary"
                        onChange={e => setDates(prev => ({ ...prev, checkIn: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-400 uppercase mb-1 block">Fin</label>
                      <input 
                        required
                        type="date" 
                        className="w-full border-gray-200 border p-2 rounded text-sm focus:ring-primary focus:border-primary"
                        onChange={e => setDates(prev => ({ ...prev, checkOut: e.target.value }))}
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary text-white py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-sm"
                  >
                    Vérifier sur WhatsApp
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CarModal;
