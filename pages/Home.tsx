
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Star, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  MapPin, 
  MessageCircle, 
  Award, 
  CheckCircle2, 
  Heart 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { carsData, Car } from '../constants/carsData';
import CarCard from '../components/CarCard';
import CarModal from '../components/CarModal';

const Home: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-transparent">
      {/* Hero Section - Ultra Luxury */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-105" 
            alt="Luxury Car Morocco" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-[#C15B36]"></span>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#C15B36]">L'Excellence à votre portée</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold mb-8 leading-[1.1] font-serif">
              Alorjwana <br/>
              <span className="text-[#C15B36] italic relative">
                Premium Car
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#C15B36]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl font-light leading-relaxed">
              Découvrez le Maroc avec élégance. Une flotte rigoureusement sélectionnée pour un confort absolu et une liberté totale.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/laflotte" className="group bg-[#C15B36] text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-[#a0482b] transition-all text-xs uppercase tracking-widest flex items-center gap-3">
                Explorer le Catalogue <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
              <a href="https://wa.me/212786455138" className="bg-white/5 backdrop-blur-xl border border-white/20 px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-3 text-xs uppercase tracking-widest">
                <MessageCircle size={20} className="text-[#C15B36]"/> WhatsApp Direct
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-12 right-12 hidden lg:flex gap-8">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#C15B36] rounded-2xl flex items-center justify-center text-white"><Award size={24}/></div>
            <div>
              <p className="text-white font-bold text-sm">Service Platinum</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-wider">Satisfaction 100%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Professional Layout */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Professional Service" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 z-20 bg-white p-12 rounded-[2.5rem] shadow-2xl max-w-xs border border-primary/5">
                <h4 className="text-3xl font-serif font-bold text-accent mb-2">24/7</h4>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">Assistance routière et support client partout dans le Royaume.</p>
              </div>
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-primary/5 rounded-full -z-10" />
            </div>

            <div className="space-y-12">
              <header>
                <span className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Pourquoi Alorjwana ?</span>
                <h2 className="text-5xl md:text-7xl font-bold text-accent font-serif leading-tight">L'Expérience <br/><span className="text-primary italic">Sans Compromis</span></h2>
              </header>

              <div className="space-y-8">
                {[
                  { title: "Livraison Aéroport", desc: "Votre véhicule vous attend dès votre descente d'avion à Marrakech, Casablanca ou Agadir.", icon: <MapPin size={24}/> },
                  { title: "Transparence Totale", desc: "Pas de frais cachés. Le contrat est clair et le service est honnête dès le premier contact.", icon: <CheckCircle2 size={24}/> },
                  { title: "Entretien Rigoureux", desc: "Nos véhicules subissent un contrôle technique après chaque location pour votre sécurité.", icon: <ShieldCheck size={24}/> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
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
        </div>
      </section>

      {/* Featured Fleet Section */}
      <section className="py-32 bg-accent/5 backdrop-blur-sm relative border-y border-primary/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Notre Sélection</span>
              <h2 className="text-5xl font-bold text-accent font-serif">Les Véhicules <span className="text-primary italic">Stars</span></h2>
            </div>
            <Link to="/laflotte" className="text-accent font-bold text-xs uppercase tracking-widest border-b-2 border-primary pb-2 flex items-center gap-2 hover:gap-4 transition-all">
              Toute la collection <ArrowRight size={16}/>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {carsData.slice(0, 3).map(car => (
              <CarCard key={car.id} car={car} onViewDetails={() => setSelectedCar(car)} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Professional Touch */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Témoignages</span>
            <h2 className="text-5xl font-bold text-accent font-serif">Ce qu'ils disent de <span className="text-primary italic">Nous</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Sarah B.", city: "Paris", text: "Un service irréprochable. La Tucson était dans un état neuf et la livraison à l'aéroport de Marrakech a été très fluide." },
              { name: "Karim M.", city: "Casablanca", text: "Alorjwana Car est devenu mon partenaire de confiance pour mes déplacements professionnels. Ponctualité exemplaire." },
              { name: "John D.", city: "Londres", text: "The best car rental experience in Morocco. Fair prices and very helpful staff via WhatsApp." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-primary/5 relative">
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, star) => <Star key={star} fill="currentColor" size={14} />)}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Heart size={20} fill="currentColor"/>
                  </div>
                  <div>
                    <p className="font-bold text-accent">{t.name}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-accent rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight">Prêt à Prendre <br/>La Route avec <span className="text-primary italic">Alorjwana</span> ?</h2>
              <p className="text-xl text-gray-300 font-light">Réservez dès maintenant via WhatsApp et profitez d'un service VIP personnalisé.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="https://wa.me/212786455138" className="bg-primary text-white px-12 py-6 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-[#a0482b] transition-all flex items-center gap-4">
                  <MessageCircle size={24}/> Réserver via WhatsApp
                </a>
                <a href="tel:+212664739991" className="text-white font-bold flex items-center gap-3 hover:text-primary transition-colors uppercase text-xs tracking-widest">
                  <Phone size={18}/> Appeler le +212 664-739991
                </a>
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
