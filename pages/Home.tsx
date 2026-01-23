
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, MessageCircle, ShieldCheck, MapPin, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { carsData, Car } from '../constants/carsData';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';

const Home: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Luxury Car" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10 text-white">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Alorjwana Car - L'Élite de la location</span>
            <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-[1.1] font-serif">
              Voyagez au <br/>
              <span className="text-primary italic">Cœur du Maroc</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl font-light leading-relaxed">
              Une flotte de prestige, un service sur-mesure disponible partout au Maroc. Redéfinissez vos déplacements avec Alorjwana Car.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/laflotte" className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-[#a0482b] transition-all text-[10px] uppercase tracking-widest">
                Explorer le Catalogue
              </Link>
              <a href="https://wa.me/212786455138" className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-3 text-[10px] uppercase tracking-widest">
                <MessageCircle size={18} className="text-primary"/> WhatsApp Direct
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1563220490-50d750036665?auto=format&fit=crop&q=80&w=1200" alt="Alorjwana Car Service" className="w-full aspect-square object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[2.5rem] shadow-2xl max-w-xs border border-primary/5">
                <Award size={40} className="text-primary mb-6"/>
                <h4 className="text-xl font-serif font-bold text-accent mb-2">Service VIP</h4>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">Chaque client est unique. Nous livrons votre voiture à l'aéroport ou à votre Riad.</p>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Notre Philosophie</span>
              <h2 className="text-5xl font-serif font-bold text-accent leading-tight">Bien Plus qu'une <br/><span className="text-primary italic">Simple Location</span></h2>
            </div>
            <div className="space-y-10">
              {[
                { title: "Partout au Maroc", desc: "De Tanger à Dakhla, nous assurons la livraison et la récupération de votre véhicule.", icon: <MapPin size={24}/> },
                { title: "Zéro Frais Cachés", desc: "Le prix convenu est le prix payé. Une transparence totale pour votre sérénité.", icon: <ShieldCheck size={24}/> },
                { title: "Assistance 24/7", desc: "Une équipe dédiée vous accompagne à chaque kilomètre de votre voyage.", icon: <Phone size={24}/> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-accent mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CARS */}
      <section className="py-32 bg-accent/5 backdrop-blur-sm relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Collection Privée</span>
            <h2 className="text-5xl font-serif font-bold text-accent">Nos Véhicules <span className="text-primary italic">Stars</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {carsData.slice(0, 3).map(car => (
              <CarCard key={car.id} car={car} onViewDetails={() => setSelectedCar(car)} />
            ))}
          </div>
          <div className="mt-20 text-center">
            <Link to="/laflotte" className="inline-flex items-center gap-4 text-accent font-bold text-[10px] tracking-widest uppercase border-b-2 border-primary pb-2 hover:gap-6 transition-all">
              Découvrir toute la flotte <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-accent mb-4">L'Avis de <span className="text-primary italic">nos Clients</span></h2>
            <div className="flex justify-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16}/>)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Ahmed L.", text: "Une expérience incroyable. La Tucson était impeccable et la livraison à l'aéroport de Marrakech s'est faite en 5 minutes." },
              { name: "Sophie D.", text: "Alorjwana Car est de loin la meilleure agence que j'ai testée au Maroc. Très pro et voiture automatique parfaite." },
              { name: "Marc T.", text: "Réservation par WhatsApp ultra rapide. Équipe à l'écoute et très flexible sur les horaires." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-primary/5">
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-accent uppercase text-[10px] tracking-widest">{t.name}</p>
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
