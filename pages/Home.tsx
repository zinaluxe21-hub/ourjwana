
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, MessageCircle, ShieldCheck, MapPin, Award, Star, CheckCircle2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { carsData, Car } from '../constants/carsData';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';

const Home: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* HERO SECTION - REVISITED */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover scale-105" alt="Premium Car Morocco" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10 text-white">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Location Premium au Maroc</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-[1] font-serif">
              Alorjwana <br/>
              <span className="text-primary italic">Car Luxury</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl font-light leading-relaxed">
              Explorez le Royaume avec distinction. Une flotte de véhicules neufs, une assistance personnalisée et une liberté sans limite.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/laflotte" className="group bg-primary text-white px-12 py-5 rounded-full font-bold shadow-2xl hover:bg-[#a0482b] transition-all text-xs uppercase tracking-widest flex items-center gap-3">
                Explorer le Catalogue <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
              </Link>
              <a href="https://wa.me/212786455138" className="bg-white/5 backdrop-blur-xl border border-white/20 px-12 py-5 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-3 text-xs uppercase tracking-widest">
                <MessageCircle size={20} className="text-primary"/> WhatsApp Direct
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
           <span className="text-[8px] font-bold text-white/40 uppercase tracking-[0.4em]">Défiler</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </section>

      {/* THE ART OF TRAVEL - NEW PROFESSIONAL SECTION */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1539419332720-fa3278408f9c?auto=format&fit=crop&q=80&w=1200" alt="Marrakech Architecture" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 z-20 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-primary/5 max-w-xs">
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={14}/>)}
              </div>
              <p className="text-gray-600 italic text-sm leading-relaxed mb-4">"Service exceptionnel à Marrakech. La voiture était neuve et propre."</p>
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest">— Sarah J., Paris</p>
            </div>
            {/* Geometric decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-primary/10 rounded-full -z-10 animate-pulse"></div>
          </div>
          
          <div className="space-y-12">
            <div>
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Notre Promesse</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-accent leading-[1.1]">L'Art du <br/><span className="text-primary italic">Service Marocain</span></h2>
            </div>
            
            <div className="space-y-10">
              {[
                { title: "Livraison Aéroport 24/7", desc: "Votre temps est précieux. Nous vous attendons dès votre arrivée avec votre véhicule prêt.", icon: <CheckCircle2 size={24}/> },
                { title: "Entretien Certifié", desc: "Toute notre flotte subit un contrôle rigoureux après chaque location.", icon: <ShieldCheck size={24}/> },
                { title: "Assistance Partout", desc: "De Tanger à Dakhla, nous sommes à un appel de distance pour vous assister.", icon: <MapPin size={24}/> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="max-w-md">
                    <h4 className="text-xl font-bold text-accent mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED FLEET */}
      <section className="py-32 bg-accent/5 backdrop-blur-sm relative border-y border-primary/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Catalogue Privé</span>
              <h2 className="text-5xl font-serif font-bold text-accent">Nos Véhicules <span className="text-primary italic">Incontournables</span></h2>
            </div>
            <Link to="/laflotte" className="text-accent font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-primary pb-2 flex items-center gap-3 hover:gap-6 transition-all">
              Toute la flotte <ArrowRight size={16}/>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {carsData.slice(0, 3).map(car => (
              <CarCard key={car.id} car={car} onViewDetails={() => setSelectedCar(car)} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - NEW */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="bg-accent rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
             <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                 <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">Prêt à Prendre <br/>La Route ?</h2>
                 <p className="text-gray-300 text-lg font-light leading-relaxed">Réservez en 2 minutes via WhatsApp. Notre équipe est à votre écoute pour personnaliser votre expérience.</p>
                 <div className="flex flex-wrap gap-6">
                    <a href="https://wa.me/212786455138" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-2xl shadow-primary/30 text-xs tracking-widest uppercase">
                      <MessageCircle size={22}/> Réserver via WhatsApp
                    </a>
                    <a href="tel:+212664739991" className="text-white border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-xs tracking-widest uppercase">
                      Nous Appeler
                    </a>
                 </div>
               </div>
               <div className="hidden lg:grid grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] text-center">
                     <h4 className="text-primary text-4xl font-bold mb-2">10+</h4>
                     <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Ans d'Expertise</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] text-center mt-12">
                     <h4 className="text-primary text-4xl font-bold mb-2">100%</h4>
                     <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Véhicules Neufs</p>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </motion.div>
  );
};

export default Home;
