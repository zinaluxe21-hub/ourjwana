
import React, { useState } from 'react';
import { X, Check, Calendar, ArrowRight, MapPin, MessageCircle } from 'lucide-react';
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
    const text = `Bonjour Alorjwana Car, je souhaite réserver la ${car.name} du ${dates.checkIn} au ${dates.checkOut}.`;
    window.open(`https://wa.me/212786455138?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {car && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose} 
            className="absolute inset-0 bg-accent/90 backdrop-blur-md" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 30 }} 
            className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] relative shadow-2xl z-10 border border-primary/10"
          >
            <button 
              onClick={onClose} 
              className="absolute top-8 right-8 p-3 bg-white/50 backdrop-blur-sm rounded-full shadow-lg hover:rotate-90 hover:bg-white transition-all z-20"
            >
              <X size={24} className="text-accent" />
            </button>
            
            <div className="grid lg:grid-cols-2">
              <div className="h-80 lg:h-auto relative overflow-hidden bg-gray-100">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10">
                   <h2 className="text-4xl font-serif font-bold text-white mb-2">{car.name}</h2>
                   <div className="flex gap-4">
                     <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest border border-white/20">
                       {car.category}
                     </span>
                   </div>
                </div>
              </div>

              <div className="p-10 md:p-16">
                <div className="mb-12">
                  <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4">À propos de ce modèle</h4>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    {car.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-12">
                  {[
                    { label: "Transmission", value: car.features.transmission },
                    { label: "Places", value: `${car.features.seats} Sièges` },
                    { label: "Carburant", value: car.features.fuel },
                    { label: "Climatisation", value: "Incluse" },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                        <Check size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{f.label}</p>
                        <p className="font-bold text-accent text-sm">{f.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-secondary p-10 rounded-[2.5rem] border border-primary/10 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                  
                  {/* PRIX ICI (Blasa li glti bl-khdr) */}
                  <div className="mb-8">
                    <p className="text-primary font-bold text-2xl tracking-wider uppercase">
                      À partir de {car.pricePerDay} €
                    </p>
                    <div className="w-12 h-0.5 bg-primary/20 mt-2"></div>
                  </div>

                  <h4 className="font-bold text-accent mb-8 flex items-center gap-3 uppercase text-xs tracking-widest">
                    <Calendar size={20} className="text-primary" /> Réservation Directe
                  </h4>
                  
                  <form onSubmit={handleBooking} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block px-2">Début</label>
                        <input 
                          required 
                          type="date" 
                          className="w-full border-none bg-white p-5 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-primary/20" 
                          onChange={e => setDates(prev => ({ ...prev, checkIn: e.target.value }))} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block px-2">Fin</label>
                        <input 
                          required 
                          type="date" 
                          className="w-full border-none bg-white p-5 rounded-2xl text-xs outline-none focus:ring-2 focus:ring-primary/20" 
                          onChange={e => setDates(prev => ({ ...prev, checkOut: e.target.value }))} 
                        />
                      </div>
                    </div>

                    {/* BOUTON AVEC ICONS WAST MENNO (Blast l-rouge) */}
                    <button 
                      type="submit" 
                      className="group w-full bg-primary text-white py-6 rounded-2xl font-bold flex items-center justify-between px-8 hover:bg-[#a0482b] transition-all shadow-2xl shadow-primary/20 text-xs uppercase tracking-[0.2em]"
                    >
                      <MessageCircle size={22} className="opacity-80" />
                      <span>Confirmer par WhatsApp</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform opacity-80" />
                    </button>
                  </form>
                  <div className="mt-8 flex items-center justify-center gap-3 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                    <MapPin size={14} className="text-primary"/> Livraison Aéroport & Riad Partout au Maroc
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CarModal;
