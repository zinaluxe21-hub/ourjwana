
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-44 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-20">
             <div>
               <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Assistance 24/7</span>
               <h1 className="text-5xl md:text-7xl font-bold text-accent mb-10 leading-tight">À Votre <br/><span className="text-primary italic">Entière Disposition</span></h1>
               <p className="text-xl text-gray-500 font-light mb-16">Que vous soyez à l'aéroport, en Médina ou dans le désert d'Agafay, nos équipes sont prêtes à vous aider.</p>
               
               <div className="space-y-8">
                 <div className="flex items-center gap-6 p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                   <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20"><Phone size={24}/></div>
                   <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Téléphone & WhatsApp</p>
                     <p className="text-xl font-bold text-accent">+212 600 000 000</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-6 p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                   <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center shadow-lg"><Mail size={24}/></div>
                   <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Support</p>
                     <p className="text-xl font-bold text-accent">booking@ourjwana.ma</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
               <form className="relative z-10 space-y-6">
                 <div>
                   <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block px-2">Nom Complet</label>
                   <input type="text" className="w-full bg-secondary border-none rounded-2xl p-5" placeholder="Ex: Jean Dupont" />
                 </div>
                 <div>
                   <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block px-2">Sujet</label>
                   <input type="text" className="w-full bg-secondary border-none rounded-2xl p-5" placeholder="Location, Devis, Support..." />
                 </div>
                 <div>
                   <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block px-2">Message</label>
                   <textarea className="w-full bg-secondary border-none rounded-2xl p-5 h-40" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                 </div>
                 <button className="w-full bg-accent text-white py-6 rounded-2xl font-bold shadow-xl hover:bg-primary transition-all duration-300">Envoyer la demande</button>
               </form>
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
