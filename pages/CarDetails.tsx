
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Check, Calendar, ArrowRight, Shield, MapPin, Gauge, Fuel, Users } from 'lucide-react';
import { carsData } from '../constants/carsData';

const CarDetails: React.FC = () => {
  const { id } = useParams();
  const car = carsData.find(c => c.id === id);
  const [dates, setDates] = useState({ start: '', end: '' });

  if (!car) return <div className="pt-40 text-center h-screen">Véhicule non trouvé.</div>;

  // Standardize brand name and WhatsApp number
  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour Alorjwana Car, je souhaite réserver la ${car.name} du ${dates.start} au ${dates.end}.`;
    window.open(`https://wa.me/212786455138?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-24 min-h-screen zellige-pattern">
      <div className="container mx-auto px-6 py-12">
        <Link to="/laflotte" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all mb-12">
          <ChevronLeft size={20} /> Retour à la flotte
        </Link>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-primary/5">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[car.features.transmission, `${car.features.seats} Sièges`, car.features.fuel, car.features.ac ? 'Clim' : 'Std'].map((spec, i) => (
                 <div key={i} className="bg-white p-4 rounded-2xl border border-primary/5 text-center flex flex-col items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      {i === 0 ? <Gauge size={14}/> : i === 1 ? <Users size={14}/> : i === 2 ? <Fuel size={14}/> : <Shield size={14}/>}
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{spec}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block">{car.category}</span>
            <h1 className="text-5xl md:text-7xl font-bold text-accent mb-2 leading-tight">{car.name}</h1>
            <p className="text-2xl md:text-3xl font-bold text-primary mb-8">{car.pricePerDay} € <span className="text-sm text-accent font-normal">/ Jour</span></p>
            
            <p className="text-xl text-gray-600 italic leading-relaxed mb-12 border-l-4 border-primary/20 pl-6">
              "{car.description}"
            </p>

            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-primary/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h4 className="font-bold text-accent uppercase text-xs tracking-widest">Réserver ce véhicule</h4>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-green-600 font-bold uppercase flex items-center justify-end gap-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Disponible
                  </p>
                </div>
              </div>

              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase px-2">Début</label>
                    <input required type="date" className="w-full bg-secondary border-none rounded-xl p-4 text-sm" onChange={e => setDates(prev => ({...prev, start: e.target.value}))}/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase px-2">Fin</label>
                    <input required type="date" className="w-full bg-secondary border-none rounded-xl p-4 text-sm" onChange={e => setDates(prev => ({...prev, end: e.target.value}))}/>
                  </div>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                  Réserver via WhatsApp <ArrowRight size={20} />
                </button>
              </form>
              
              <div className="mt-8 flex items-center gap-4 text-xs text-gray-400 font-medium">
                <MapPin size={14} className="text-primary"/> Livraison Aéroport Incluse
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarDetails;
