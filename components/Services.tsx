import React, { useState, useEffect } from 'react';
import { Youtube, Film, Scissors, Layers, Sparkles, Play, X, CheckCircle2, ArrowRight } from 'lucide-react';
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
  const whatsappUrl = "https://wa.me/923051014508?text=Hi Amir, I'm interested in booking your services!";

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
    <section id="services" className="py-24 px-6 relative overflow-hidden bg-slate-950">
      {/* Parallax Floating Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none parallax-fast"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none parallax-slow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 reveal">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
              <Sparkles size={12} />
              Premium Services
            </div>
            <h3 className="text-4xl md:text-6xl font-black font-display tracking-tight">Video Solutions <span className="text-gradient">Built for Growth</span></h3>
          </div>
          <p className="text-slate-400 max-w-md text-lg">I provide comprehensive editing services tailored to your specific platform and audience needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = IconMap[service.icon];
            return (
              <div 
                key={index} 
                onClick={() => setSelectedService(service)}
                className={`group relative p-10 glass rounded-[2.5rem] transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 reveal stagger-${(index % 3) + 1} cursor-pointer overflow-hidden`}
              >
                {/* Background Glow Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 rounded-full blur-[60px] group-hover:bg-purple-600/20 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-purple-600 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-purple-600/40">
                    <IconComponent className="text-purple-400 group-hover:text-white transition-colors duration-500" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white font-display tracking-tight">{service.title}</h4>
                  <p className="text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center gap-3 text-purple-400 font-bold group-hover:text-purple-300 transition-all">
                    <span className="text-sm uppercase tracking-widest">View Details</span> 
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


      {/* Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 animate-in fade-in duration-500">
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md cursor-pointer" 
            onClick={closeModal}
          ></div>
          
          <div className="relative w-full max-w-2xl glass p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border-t border-white/20 animate-in zoom-in-95 duration-500">
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 p-3 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-all transform hover:rotate-90"
            >
              <X size={28} />
            </button>

            <div className="flex items-center gap-8 mb-10">
              <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-600/40 transform -rotate-3 group">
                {React.createElement(IconMap[selectedService.icon], { size: 40, className: "text-white" })}
              </div>
              <h4 className="text-4xl font-bold text-white font-display tracking-tight leading-tight">{selectedService.title}</h4>
            </div>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
              {selectedService.description}
            </p>

            <div className="space-y-6 mb-12">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">Standard deliverables:</h5>
              <ul className="grid sm:grid-cols-1 gap-4">
                {selectedService.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-400 group">
                    <CheckCircle2 size={20} className="text-purple-500 mt-1 shrink-0 transition-transform group-hover:scale-110" />
                    <span className="group-hover:text-slate-200 transition-colors">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
                className="flex-1 py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-2xl text-center transition-all shadow-2xl shadow-purple-600/40 active:scale-95 text-lg"
              >
                Secure Your Spot
              </a>
              <button 
                onClick={closeModal}
                className="px-10 py-5 glass hover:bg-white/10 text-white font-bold rounded-2xl transition-all text-lg"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;