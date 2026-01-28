
import React from 'react';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const imageUrl = "https://i.pinimg.com/736x/96/4d/36/964d3602afbd96c076f212275c2b5e00.jpg";
  const whatsappUrl = "https://wa.me/923051014508?text=Hi Amir, I'm interested in hiring you for a video editing project!";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Cinematic background layers */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content: Text & CTAs */}
        <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-[10px] font-black uppercase tracking-[0.4em] animate-in fade-in slide-in-from-bottom duration-1000">
            <Sparkles size={14} className="animate-spin-slow text-purple-400" />
            Elite Video Post-Production
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] font-display tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-150">
            Hi, I’m <span className="text-gradient">Amir Raza</span><br />
            <span className="text-white/90 italic text-2xl md:text-4xl lg:text-5xl block mt-4 font-normal">
              Professional Video Editor
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            I turn raw clips into <span className="text-purple-300 font-bold underline decoration-purple-500/30 underline-offset-8">cinematic stories</span>. Specializing in high-impact editing for YouTube, brands, and social media.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-10 py-5 bg-purple-600 rounded-2xl font-bold text-lg hover:bg-purple-700 transition-all shadow-2xl shadow-purple-600/40 hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              {/* Dynamic Gradient Sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-sweep pointer-events-none"></div>
              
              {/* Pulsing Overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-glow pointer-events-none"></div>
              
              <span className="relative z-10">Hire Me</span>
              <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="group flex items-center gap-3 px-10 py-5 glass rounded-2xl font-bold text-lg hover:bg-white/10 transition-all hover:-translate-y-1 active:scale-95"
            >
              <PlayCircle size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
              View Portfolio
            </a>
          </div>
        </div>

        {/* Right Content: The Portrait Frame */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end reveal-right active">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-500/20 blur-[120px] rounded-full"></div>
          
          <div className="relative w-full max-w-[420px] aspect-[4/5] animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent rounded-[3rem] -rotate-6 scale-105 border border-white/5"></div>
            
            <div className="relative h-full w-full rounded-[3rem] overflow-hidden glass p-3 border-t border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
              <img 
                src={imageUrl} 
                alt="Amir Raza - Video Editor" 
                className="w-full h-full object-cover rounded-[2.5rem] brightness-110 contrast-[1.05]"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 p-6 glass rounded-3xl border-l-4 border-purple-500 shadow-2xl animate-bounce-slow">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-black mb-1">Editor Pro</span>
                <span className="text-3xl font-black text-white leading-none tracking-tighter">PR <span className="text-purple-500">+</span> AE</span>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 p-4 glass rounded-full border border-white/10 shadow-xl hidden sm:flex items-center justify-center">
               <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                 <PlayCircle size={24} className="text-white" fill="white" />
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20">
        <span className="text-[9px] uppercase tracking-[0.4em] font-black">Scroll to Reels</span>
        <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </div>

      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        .group-hover\\:animate-sweep {
          animation: sweep 1.5s ease-in-out infinite;
        }
        .group-hover\\:animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
