
import React from 'react';

const About: React.FC = () => {
  // Using the same high-quality portrait for consistency
  const imageUrl = "https://i.pinimg.com/736x/96/4d/36/964d3602afbd96c076f212275c2b5e00.jpg";

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative reveal-left">
          <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden glass shadow-2xl border border-white/10 group">
            <img 
              src={imageUrl} 
              alt="Amir Raza - Professional Video Editor" 
              className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
              }}
            />
            {/* Cinematic overlay for the about image */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
          
          {/* Stats Badges */}
          <div className="absolute -bottom-6 -right-6 p-8 glass rounded-3xl shadow-2xl border-l-4 border-purple-500 animate-float" style={{ animationDelay: '1s' }}>
            <h4 className="text-3xl font-black text-white mb-1 tracking-tighter">5+</h4>
            <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest">Years Experience</p>
          </div>
          
          <div className="absolute -top-6 -left-6 p-8 glass rounded-3xl shadow-2xl border-r-4 border-indigo-500 animate-float">
            <h4 className="text-3xl font-black text-white mb-1 tracking-tighter">500+</h4>
            <p className="text-slate-400 text-[10px] uppercase font-black tracking-widest">Projects Done</p>
          </div>
        </div>

        <div className="space-y-8 reveal-right">
          <div className="space-y-4">
            <h2 className="text-purple-400 font-bold uppercase tracking-[0.3em] text-xs">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display leading-tight">
              Crafting Visuals that <span className="italic text-purple-300">Resonate</span>
            </h3>
          </div>
          
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
            <p>
              I am <span className="text-white font-bold">Amir Raza</span>, a dedicated Video Editor based in Pakistan with an obsession for cinematic excellence. My work isn't just about cutting clips; it's about finding the soul of the footage and bringing it to life through precise pacing and emotional depth.
            </p>
            <p>
              With expertise in <span className="text-purple-400 font-medium">Adobe Premiere Pro</span> and <span className="text-indigo-400 font-medium">After Effects</span>, I've helped hundreds of clients transform their raw ideas into high-impact visual stories. From viral social media reels to professional brand campaigns, I ensure every frame serves a purpose.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-6 glass rounded-2xl border-t border-white/5 group hover:border-purple-500/30 transition-colors">
              <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">My Arsenal</h5>
              <p className="text-xs text-slate-400 leading-relaxed">Premiere Pro, After Effects, DaVinci Resolve, Audition</p>
            </div>
            <div className="p-6 glass rounded-2xl border-t border-white/5 group hover:border-indigo-500/30 transition-colors">
              <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Location</h5>
              <p className="text-xs text-slate-400 leading-relaxed">Iqra City, Sadiq Abad, Punjab, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
