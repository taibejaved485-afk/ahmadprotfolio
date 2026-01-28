import React, { useState, useEffect } from 'react';
import { Youtube, Film, Scissors, Layers, Sparkles, Play, X, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants.tsx';
import { Service } from '../types.ts';

const IconMap: Record<string, React.ElementType> = {
  Youtube,
  Film,
  Scissors,
  Layers,
  Sparkles
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedService]);

  const closeModal = () => setSelectedService(null);

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
          <div className="space-y-4">
            <h2 className="text-purple-400 font-bold uppercase tracking-widest text-sm">What I Offer</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display">Video Solutions <span className="text-gradient">Built for Growth</span></h3>
          </div>
          <p className="text-slate-400 max-w-md">I provide comprehensive editing services tailored to your specific platform and audience needs. Click any card to see details.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = IconMap[service.icon];
            return (
              <div 
                key={index} 
                onClick={() => setSelectedService(service)}
                className={`group p-10 glass rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/5 border-b-2 border-transparent hover:border-purple-500/50 reveal stagger-${index + 1} cursor-pointer`}
              >
                <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="text-purple-400" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed mb-8">{service.description}</p>
                <button className="flex items-center gap-2 text-purple-400 font-bold group-hover:gap-4 transition-all">
                  View Details <Play size={14} fill="currentColor" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer" 
            onClick={closeModal}
          ></div>
          
          <div className="relative w-full max-w-2xl glass p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border-t border-white/10 animate-in zoom-in-95 duration-300">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-600/30">
                {React.createElement(IconMap[selectedService.icon], { size: 32, className: "text-white" })}
              </div>
              <h4 className="text-3xl font-bold text-white font-display tracking-tight">{selectedService.title}</h4>
            </div>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-4 mb-10">
              <h5 className="text-xs font-black uppercase tracking-[0.2em] text-purple-400">What's Included:</h5>
              <ul className="grid sm:grid-cols-1 gap-4">
                {selectedService.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-400">
                    <CheckCircle2 size={20} className="text-purple-500 mt-1 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <a 
                href="#contact" 
                onClick={closeModal}
                className="flex-1 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-center transition-all shadow-xl shadow-purple-600/20 active:scale-95"
              >
                Book This Service
              </a>
              <button 
                onClick={closeModal}
                className="px-8 py-4 glass hover:bg-white/5 text-white font-bold rounded-xl transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;