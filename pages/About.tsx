
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-44 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Notre Héritage</span>
          <h1 className="text-5xl md:text-7xl font-bold text-accent mb-8">L'Art de Recevoir <span className="text-primary italic">Marrakech</span></h1>
          <p className="text-xl text-gray-500 leading-relaxed font-light">
            Ourjwana Car est née de la passion pour notre ville et de la volonté de proposer une expérience de mobilité qui reflète la noblesse de l'hospitalité marocaine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            <img src="https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&q=80&w=1200" alt="Marrakech Crafts" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-10">
            <h2 className="text-4xl font-bold text-accent">Culture de <span className="text-primary italic">l'Excellence</span></h2>
            <div className="space-y-8">
              {[
                { title: "Service Concierge", desc: "Plus qu'une location, un accompagnement personnalisé durant tout votre séjour.", icon: <Users size={24}/> },
                { title: "Qualité Artisanale", desc: "Chaque véhicule est méticuleusement préparé selon des protocoles rigoureux.", icon: <Shield size={24}/> },
                { title: "Engagement Local", desc: "Une entreprise fièrement Marrakchie, connaissant chaque recoin de la ville.", icon: <MapPin size={24}/> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white shadow-sm border border-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-accent mb-2">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
