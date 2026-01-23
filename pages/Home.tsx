
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, MessageCircle, ShieldCheck, MapPin, Award, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { carsData, Car } from '../constants/carsData';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';

const Home: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-transparent">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Luxury Car Morocco" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10 text-white">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-primary">Location de Prestige</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-[1.1] font-serif">
              Alorjwana <br/>
              <span className="text-primary italic text-shadow-lg">Car Experience</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-xl font-light leading-relaxed">
              Redéfinissez votre voyage au Maroc. Excellence technique, service VIP et une flotte de véhicules neufs à votre disposition.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/laflotte" className="group bg-primary text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-[#a0482b] transition-all text-[11px] uppercase tracking-widest flex items-center gap-3">
                Explorer le Catalogue <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
              </Link>
              <a href="https://wa.me/212786455138" className="bg-white/10 backdrop-blur-xl border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-3 text-[11px] uppercase tracking-widest">
                <MessageCircle size={18} className="text-primary"/> WhatsApp Direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE SECTION */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1200" alt="Alorjwana VIP Service" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[2.5rem] shadow-2xl max-w-xs border border-primary/5">
                <Award size={40} className="text-primary mb-6"/>
                <h4 className="text-2xl font-serif font-bold text-accent mb-2">Service VIP</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Nous vous livrons votre voiture à l'aéroport ou directement à votre Riad partout au Maroc.</p>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Notre Expertise</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-accent leading-tight">L'Engagement <br/><span className="text-primary italic">Qualité Totale</span></h2>
            </div>
            <div className="space-y-10">
              {[
                { title: "Livraison Partout", desc: "Casablanca, Marrakech, Agadir, Tanger. Nous sommes présents dans tout le Royaume.", icon: <MapPin size={24}/> },
                { title: "Transparence Totale", desc: "Pas de frais surprises au comptoir. Nos contrats sont clairs et honnêtes.", icon: <CheckCircle2 size={24}/> },
                { title: "Assistance Premium", desc: "Un problème sur la route ? Notre équipe technique intervient immédiatement 24h/24.", icon: <ShieldCheck size={24}/> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-accent mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="py-32 bg-accent/5 backdrop-blur-sm relative border-y border-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Notre Flotte</span>
            <h2 className="text-5xl font-serif font-bold text-accent">Les Véhicules <span className="text-primary italic">Stars</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {carsData.slice(0, 3).map(car => (
              <CarCard key={car.id} car={car} onViewDetails={() => setSelectedCar(car)} />
            ))}
          </div>
          <div className="mt-20 text-center">
             <Link to="/laflotte" className="text-accent font-bold text-[11px] tracking-widest uppercase border-b-2 border-primary pb-2 hover:gap-6 transition-all flex items-center justify-center gap-4">
               Découvrir toute la flotte <ArrowRight size={16}/>
             </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - MATCHING YOUR IMAGE EXACTLY */}
      <section className="py-32">
        <div className="container mx-auto px-6">
           <div className="bg-[#2C3E50] rounded-[3.5rem] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
             <div className="max-w-xl text-left">
               <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">Prêt à Prendre <br/>La Route ?</h2>
               <p className="text-gray-300 text-lg font-light leading-relaxed mb-12">Réservez en 2 minutes via WhatsApp. Notre équipe est à votre écoute pour personnaliser votre expérience.</p>
               <div className="flex flex-wrap gap-6">
                  <a href="https://wa.me/212786455138" className="bg-[#C15B36] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-2xl text-[10px] tracking-[0.2em] uppercase">
                    <MessageCircle size={18}/> RÉSERVER VIA WHATSAPP
                  </a>
                  <a href="tel:+212664739991" className="text-white border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-[10px] tracking-[0.2em] uppercase">
                    NOUS APPELER
                  </a>
               </div>
             </div>
             
             <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] text-center w-64">
                   <h4 className="text-[#C15B36] text-4xl font-bold mb-3">10+</h4>
                   <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">ANS D'EXPERTISE</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] text-center w-64 md:mt-12">
                   <h4 className="text-[#C15B36] text-4xl font-bold mb-3">100%</h4>
                   <p className="text-white/40 text-[9px] font-bold uppercase tracking-[0.3em]">VÉHICULES NEUFS</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - ADDED BACK */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Satisfaction Client</span>
            <h2 className="text-4xl font-serif font-bold text-accent mb-4">L'Avis de <span className="text-primary italic">nos Voyageurs</span></h2>
            <div className="flex justify-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16}/>)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Karim B.", text: "Une qualité de service irréprochable. La voiture était impeccable et livrée à l'heure pile à l'aéroport de Casablanca." },
              { name: "Elena S.", text: "Best car rental in Morocco. Very professional team and the Hyundai Tucson was perfect for our family trip to Merzouga." },
              { name: "Youssef M.", text: "Service WhatsApp très réactif. J'ai pu réserver ma voiture en quelques minutes. Je recommande vivement !" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-primary/5 flex flex-col h-full">
                <p className="text-gray-500 italic mb-10 leading-relaxed flex-grow text-sm">"{t.text}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">{t.name[0]}</div>
                   <p className="font-bold text-accent uppercase text-[9px] tracking-widest">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </motion.div>
  );
};

export default Home;
