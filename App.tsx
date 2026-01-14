
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  ShieldCheck, 
  Clock, 
  Car as CarIcon,
  Gem,
  Mountain,
  Users,
  Trophy,
  Star,
  SearchX,
  ChevronDown,
  Mail
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
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
    <div className="min-h-screen selection:bg-primary selection:text-white overflow-x-hidden bg-secondary">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1539419332720-fa3278408f9c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Marrakech Hero"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-6 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block bg-primary/20 backdrop-blur-md border border-primary/30 px-6 py-2 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-8">
              L'Art de Rouler à Marrakech
            </span>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              L'Expérience<br/><span className="text-primary italic">Ourjwana</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-light">
              Découvrez la Ville Rouge avec élégance. Une flotte premium sélectionnée pour votre confort et votre style.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#fleet" className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-primary/90 transition-all text-lg">
                Voir la Flotte
              </a>
              <a href="https://wa.me/212600000000" className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-3 text-lg">
                <Phone size={20}/> Réserver Express
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-32 container mx-auto px-6 scroll-mt-20">
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Notre Sélection</span>
              <h2 className="text-5xl font-bold text-accent">La Flotte <span className="text-primary italic">Signature</span></h2>
            </div>
            
            <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id as any)}
                  className={`flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all border ${
                    filter === cat.id 
                    ? 'bg-accent border-accent text-white shadow-xl' 
                    : 'bg-white border-primary/5 text-accent hover:border-primary/20'
                  }`}
                >
                  <span className="opacity-50">{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {filteredCars.length > 0 ? (
              <motion.div 
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              >
                {filteredCars.map(car => (
                  <CarCard 
                    key={car.id} 
                    car={car} 
                    onViewDetails={() => setSelectedCar(car)} 
                  />
                ))}
              </motion.div>
            ) : (
              <div className="py-40 text-center flex flex-col items-center">
                <SearchX className="text-primary/10 mb-6" size={80} />
                <h3 className="text-3xl font-bold text-accent">Aucun véhicule disponible</h3>
                <p className="text-gray-500 mt-2">Nous renouvelons notre stock régulièrement.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 zellige-pattern opacity-5 pointer-events-none" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover"
                alt="About Ourjwana"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2rem] shadow-2xl max-w-xs border border-primary/10">
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-base italic font-medium text-accent leading-relaxed">
                "Un service impeccable. La Range Rover était neuve et propre. L'accueil à l'aéroport est un vrai plus."
              </p>
              <p className="mt-4 text-sm font-bold text-primary">Jean-Luc P.</p>
            </div>
          </div>

          <div className="space-y-10">
            <header>
              <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Notre Philosophie</span>
              <h2 className="text-5xl md:text-7xl font-bold text-accent">Au-delà de la <br/><span className="text-primary italic">Simple Location</span></h2>
            </header>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Chaque trajet à Marrakech doit être un poème. Nous avons conçu Ourjwana Car comme une extension de l'hospitalité des plus grands Riads de la ville.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary shadow-sm"><ShieldCheck size={28}/></div>
                <h4 className="text-xl font-bold text-accent">Confiance</h4>
                <p className="text-gray-500 text-sm">Transparence totale et véhicules rigoureusement entretenus.</p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary shadow-sm"><Clock size={28}/></div>
                <h4 className="text-xl font-bold text-accent">Rapidité</h4>
                <p className="text-gray-500 text-sm">Livraison à l'aéroport ou à votre Riad en moins de 20 minutes.</p>
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
            </div>
            <div className="bg-secondary rounded-[3rem] p-8 md:p-16 shadow-inner relative overflow-hidden">
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
              </div>
            </div>

            <div className="bg-primary/10 p-10 md:p-24 flex items-center justify-center relative">
              <div className="w-full max-w-md bg-white p-10 rounded-[3rem] shadow-2xl">
                <h3 className="text-2xl font-bold text-accent mb-8">Nous Écrire</h3>
                <form className="space-y-6">
                  <div>
                    <input type="text" className="w-full bg-secondary border-none rounded-2xl p-4" placeholder="Votre nom..." />
                  </div>
                  <div>
                    <textarea className="w-full bg-secondary border-none rounded-2xl p-4 h-32" placeholder="Votre demande..."></textarea>
                  </div>
                  <button type="button" className="w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-xl">
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CarModal 
        car={selectedCar} 
        onClose={() => setSelectedCar(null)} 
      />
    </div>
  );
};

export default App;
