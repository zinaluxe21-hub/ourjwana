
import React, { useState } from 'react';
import { X, Check, Calendar, ArrowRight, MapPin } from 'lucide-react';
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
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-accent/80 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-2xl z-10">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-lg hover:rotate-90 transition-all z-20"><X size={24} /></button>
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto"><img src={car.image} alt={car.name} className="w-full h-full object-cover" /></div>
              <div className="p-8 md:p-12">
                <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">{car.category}</span>
                <h2 className="text-3xl font-serif font-bold text-accent mb-6">{car.name}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed italic border-l-4 border-primary/20 pl-4 text-sm">"{car.description}"</p>
                <div className="grid grid-cols-2 gap-4 mb-10 text-xs font-bold text-accent uppercase tracking-wider">
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> {car.features.transmission}</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> {car.features.seats} Places</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> {car.features.fuel}</div>
                  <div className="flex items-center gap-2"><Check size={16} className="text-primary" /> AC Climatisation</div>
                  {car.features.extra && <div className="col-span-2 flex items-center gap-2 text-primary"><Check size={16} /> {car.features.extra}</div>}
                </div>
                <div className="bg-secondary p-8 rounded-2xl border border-primary/10">
                  <h4 className="font-bold text-accent mb-6 flex items-center gap-2 uppercase text-xs tracking-widest"><Calendar size={18} className="text-primary" /> Réservation</h4>
                  <form onSubmit={handleBooking} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase block">Début</label>
                        <input required type="date" className="w-full border-none bg-white p-4 rounded-xl text-xs outline-none" onChange={e => setDates(prev => ({ ...prev, checkIn: e.target.value }))} />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase block">Fin</label>
                        <input required type="date" className="w-full border-none bg-white p-4 rounded-xl text-xs outline-none" onChange={e => setDates(prev => ({ ...prev, checkOut: e.target.value }))} />
                      </div>
                    </div>
                    <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#a0482b] transition-all shadow-lg text-xs uppercase tracking-widest">Confirmer via WhatsApp <ArrowRight size={16} /></button>
                  </form>
                  <p className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold text-gray-400 uppercase"><MapPin size={12}/> Partout au Maroc</p>
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
