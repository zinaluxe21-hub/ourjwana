
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-44 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-20">
             <div>
               <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Assistance 24/7</span>
               <h1 className="text-5xl md:text-7xl font-bold text-accent mb-10 leading-tight">À Votre <br/><span className="text-primary italic">Entière Disposition</span></h1>
               <p className="text-xl text-gray-500 font-light mb-16">Nous sommes disponibles pour répondre à vos questions et organiser votre location partout au Maroc.</p>
               
               <div className="space-y-8">
                 <div className="flex items-center gap-6 p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100">
                   <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg"><Phone size={24}/></div>
                   <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Téléphone Direct</p>
                     <p className="text-xl font-bold text-accent">+212 664-739991</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-6 p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100">
                   <div className="w-14 h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg"><MessageCircle size={24}/></div>
                   <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
                     <p className="text-xl font-bold text-accent">+212 786-455138</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-6 p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100">
                   <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center shadow-lg"><MapPin size={24}/></div>
                   <div>
                     <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Zone de Service</p>
                     <p className="text-xl font-bold text-accent">Partout au Maroc</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
               <h3 className="text-2xl font-serif font-bold text-accent mb-10">Envoyez-nous un message</h3>
               <form className="space-y-6">
                 <div>
                   <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block px-2">Nom Complet</label>
                   <input type="text" className="w-full bg-secondary border-none rounded-2xl p-5 outline-none focus:ring-1 focus:ring-primary" placeholder="Votre nom" />
                 </div>
                 <div>
                   <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block px-2">Message</label>
                   <textarea className="w-full bg-secondary border-none rounded-2xl p-5 h-40 outline-none focus:ring-1 focus:ring-primary" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                 </div>
                 <button className="w-full bg-accent text-white py-6 rounded-2xl font-bold shadow-xl hover:bg-primary transition-all duration-300 uppercase tracking-widest text-xs">Envoyer la demande</button>
               </form>
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
