
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Car as CarIcon,
  Gem,
  Mountain,
  Users,
  Trophy,
  Instagram,
  Facebook,
  Phone,
  Mail,
  SearchX,
  ChevronDown,
  Info,
  ArrowRight
} from 'lucide-react';
import Navbar from './components/Navbar';
import CarCard from './components/CarCard';
import CarModal from './components/CarModal';
import { carsData, Car } from './constants/carsData';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-primary/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-primary' : 'text-accent group-hover:text-primary'}`}>{question}</span>
        <div className={`w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary border-primary rotate-180' : ''}`}>
          <ChevronDown size={18} className={isOpen ? 'text-white' : 'text-primary'} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-600 leading-relaxed italic text-base md:text-lg pl-2 border-l-2 border-primary/10 ml-1">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Luxe' | 'Économie' | 'SUV' | 'Familiale' | 'Sport'>('All');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const filteredCars = useMemo(() => {
    if (filter === 'All') return carsData;
    return carsData.filter(car => car.category === filter);
  }, [filter]);

  const categories = [
    { id: 'All', icon: <CarIcon size={18} />, label: 'Tous' },
    { id: 'Économie', icon: <Clock size={18} />, label: 'Éco' },
    { id: 'Luxe', icon: <Gem size={18} />, label: 'Luxe' },
    { id: 'SUV', icon: <Mountain size={18} />, label: 'SUV' },
    { id: 'Familiale', icon: <Users size={18} />, label: 'Famille' },
    { id: 'Sport', icon: <Trophy size={18} />, label: 'Sport' },
  ];

  const faqs = [
    { question: "Quels sont les documents nécessaires ?", answer: "Pour louer un véhicule chez Ourjwana Car, vous devez présenter un permis de conduire valide (minimum 2 ans d'ancienneté), une pièce d'identité ou un passeport, et une carte bancaire pour la caution." },
    { question: "Livrez-vous à l'aéroport de Marrakech ?", answer: "Oui, nous proposons une livraison gratuite 24h/24 et 7j/7 à l'aéroport Marrakech-Ménara (RAK) ainsi que dans tous les hôtels et Riads du centre-ville." },
    { question: "Le kilométrage est-il limité ?", answer: "La plupart de nos contrats incluent un kilométrage illimité pour vous permettre d'explorer Marrakech et ses environs (Essaouira, Atlas, Agafay) en toute liberté." },
    { question: "Comment fonctionne la caution ?", answer: "Une pré-autorisation est effectuée sur votre carte bancaire lors de la remise des clés. Le montant dépend de la catégorie du véhicule choisi. Elle est annulée dès le retour du véhicule en bon état." }
  ];

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1539419332720-fa3278408f9c?auto=format&fit=crop&q=80&w=2000" 
            alt="Marrakech Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl text-white"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block bg-primary/20 backdrop-blur-md border border-primary/30 px-6 py-2 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-8"
            >
              Élégance & Hospitalité Marocaine
            </motion.span>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1] md:leading-[1]">
              L'Expérience <br/> <span className="text-primary italic">Ourjwana</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed">
              Découvrez la magie de Marrakech à bord de nos véhicules premium. Un service sur mesure pour des moments inoubliables.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#fleet" className="bg-primary text-white px-12 py-5 rounded-full font-bold hover:bg-primary/90 transition-all shadow-2xl shadow-primary/40 text-center active:scale-95 text-lg">
                Explorer la Flotte
              </a>
              <a href="https://wa.me/212600000000" className="bg-white/10 backdrop-blur-xl text-white border border-white/20 px-12 py-5 rounded-full font-bold hover:bg-white/20 transition-all text-center text-lg flex items-center justify-center gap-3">
                <Phone size={20} /> WhatsApp Express
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-24 md:py-32 container mx-auto px-6 scroll-mt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Catalogue</span>
            <h2 className="text-4xl md:text-7xl font-bold text-accent leading-[1.1]">Sélection <br/> <span className="text-primary italic">Signature</span></h2>
          </div>
          
          <div className="flex overflow-x-auto pb-4 no-scrollbar gap-3 -mx-6 px-6 lg:mx-0 lg:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`flex-shrink-0 flex items-center gap-3 px-10 py-5 rounded-2xl font-bold transition-all text-sm border ${
                  filter === cat.id 
                  ? 'bg-accent border-accent text-white shadow-2xl shadow-accent/20' 
                  : 'bg-white border-primary/5 text-accent hover:border-primary/20 hover:bg-primary/5'
                }`}
              >
                {cat.id !== 'All' && <span className="opacity-50">{cat.icon}</span>}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {filteredCars.length > 0 ? (
              <motion.div 
                key={filter}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
              >
                {filteredCars.map((car) => (
                  <CarCard 
                    key={car.id} 
                    car={car} 
                    onViewDetails={setSelectedCar} 
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-40 text-center"
              >
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl border border-primary/5">
                  <SearchX className="text-primary/20" size={64} />
                </div>
                <h3 className="text-4xl font-bold text-accent mb-4">Aucun résultat</h3>
                <p className="text-gray-500 max-w-sm mb-12 text-lg">Nous préparons de nouveaux véhicules pour cette catégorie.</p>
                <button 
                  onClick={() => setFilter('All')}
                  className="bg-accent text-white px-10 py-4 rounded-full font-bold shadow-lg"
                >
                  Tout afficher
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-48 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-3xl transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1200" 
                  alt="Marrakech Riad Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-white p-10 rounded-[2rem] shadow-2xl z-20 max-w-[320px] border border-primary/10">
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <p className="text-base font-bold text-accent italic leading-relaxed mb-6">
                  "Une flotte impeccable et une équipe d'une gentillesse rare. Notre séjour a été transformé."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">SM</div>
                  <div>
                    <p className="text-sm font-bold text-accent">Sofia M.</p>
                    <p className="text-xs text-gray-400">Voyageuse Luxe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <header>
                <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Philosophie</span>
                <h2 className="text-4xl md:text-7xl font-bold text-accent leading-tight">Au-delà de la <br/> <span className="text-primary italic">Simple Location</span></h2>
              </header>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Chaque trajet à Marrakech doit être un poème. Nous avons conçu Ourjwana Car comme une extension de l'hospitalité des plus grands Riads de la ville.
              </p>
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-5">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary">
                    <ShieldCheck size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-accent">Confiance</h4>
                  <p className="text-gray-500 leading-relaxed">Transparence totale sur les tarifs et l'état des véhicules pour une sérénité absolue.</p>
                </div>
                <div className="space-y-5">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary">
                    <Clock size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-accent">Disponibilité</h4>
                  <p className="text-gray-500 leading-relaxed">Notre équipe est à votre écoute 24/7 pour toute demande particulière ou urgence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Questions Fréquentes</span>
              <h2 className="text-4xl md:text-6xl font-bold text-accent">Informations <span className="text-primary italic">Utiles</span></h2>
              <div className="w-24 h-1 bg-primary/20 mx-auto mt-6 rounded-full" />
            </div>
            <div className="bg-secondary rounded-[3rem] p-8 md:p-16 shadow-inner relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
               <div className="relative z-10">
                {faqs.map((faq, idx) => (
                  <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 container mx-auto px-6 scroll-mt-20">
        <div className="bg-accent rounded-[4rem] overflow-hidden shadow-3xl relative">
          <div className="absolute inset-0 zellige-pattern opacity-[0.05] pointer-events-none" />
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-24 flex flex-col justify-center">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-tight">Votre Voyage <br/> <span className="text-primary italic">Commence Ici</span></h2>
              <p className="text-gray-300 text-xl mb-16 max-w-sm font-light leading-relaxed">Une question ? Une réservation spéciale ? Nos conseillers vous répondent instantanément.</p>
              
              <div className="space-y-10">
                <a href="tel:+212600000000" className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                    <Phone size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Appel Direct</p>
                    <p className="text-2xl font-bold text-white group-hover:text-primary transition-colors">+212 600 000 000</p>
                  </div>
                </a>
                
                <a href="mailto:booking@ourjwana.ma" className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                    <Mail size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Demande par Email</p>
                    <p className="text-2xl font-bold text-white group-hover:text-primary transition-colors">booking@ourjwana.ma</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-primary/10 p-10 md:p-24 flex items-center justify-center relative">
              <div className="w-full max-w-md bg-white p-10 rounded-[3rem] shadow-2xl">
                <h3 className="text-2xl font-bold text-accent mb-8">Nous Écrire</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Nom Complet</label>
                    <input type="text" className="w-full bg-secondary border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary/20" placeholder="Votre nom..." />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Message</label>
                    <textarea className="w-full bg-secondary border-none rounded-2xl p-4 h-32 focus:ring-2 focus:ring-primary/20" placeholder="Votre demande..."></textarea>
                  </div>
                  <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary pt-24 pb-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 zellige-pattern opacity-10" />
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
               <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm rotate-45">
                  <span className="text-white -rotate-45 font-bold text-xl">O</span>
                </div>
                <h1 className="text-2xl font-bold tracking-tighter text-accent">
                  Ourjwana <span className="text-primary">Car</span>
                </h1>
              </div>
              <p className="text-gray-500 leading-relaxed mb-8">
                Location de voitures premium à Marrakech. Allier tradition d'accueil et modernité de service.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <Instagram size={20} />
                </div>
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-all cursor-pointer">
                  <Facebook size={20} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-accent uppercase tracking-widest text-xs mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Accueil', 'La Flotte', 'Services', 'Témoignages', 'Contact'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-accent uppercase tracking-widest text-xs mb-8">Informations</h4>
              <ul className="space-y-4">
                {['Conditions de Location', 'Politique de Confidentialité', 'Nos Agences', 'Aide & FAQ'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-accent uppercase tracking-widest text-xs mb-8">Newsletter</h4>
              <p className="text-gray-500 text-sm mb-6">Recevez nos offres exclusives et guides de voyage.</p>
              <div className="flex gap-2 p-1 bg-white rounded-2xl shadow-sm">
                <input type="email" placeholder="Votre email" className="bg-transparent border-none flex-1 px-4 text-sm focus:ring-0" />
                <button className="bg-accent text-white p-3 rounded-xl hover:bg-primary transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs text-gray-400 font-medium">
              &copy; {new Date().getFullYear()} Ourjwana Car Marrakech. Tous droits réservés.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Système de Réservation Actif
            </div>
          </div>
        </div>
      </footer>

      <CarModal 
        car={selectedCar} 
        onClose={() => setSelectedCar(null)} 
      />
    </div>
  );
};

export default App;
