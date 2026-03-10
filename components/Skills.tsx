
import React, { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../constants.tsx';
import { Video, Layers, Palette, Activity, BookOpen, Youtube, Cpu } from 'lucide-react';

const SkillIconMap: Record<string, React.ElementType> = {
  'Adobe Premiere Pro': Video,
  'Adobe After Effects': Layers,
  'Cinematic Color Grading': Palette,
  'Motion Graphics Design': Activity,
  'Cinematic Visual Storytelling': BookOpen,
  'YouTube & Social Media Editing': Youtube,
};

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-slate-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] -right-[10%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
            <Cpu size={12} />
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight">
            Mastering the <span className="text-gradient">Craft</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A fusion of technical precision and creative vision, powered by industry-leading tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => {
            const Icon = SkillIconMap[skill.name] || Cpu;
            return (
              <div 
                key={index} 
                className={`group relative p-8 glass rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:bg-white/5 reveal stagger-${(index % 3) + 1}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-purple-500/10 rounded-2xl group-hover:bg-purple-600/20 group-hover:scale-110 transition-all duration-500">
                    <Icon className="text-purple-400" size={28} />
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-purple-500/20 transition-colors duration-500">
                    {skill.level}%
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h4>

                <div className="space-y-3">
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-600 to-indigo-500 rounded-full transition-all duration-[2s] ease-out relative"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-shimmer pointer-events-none"></div>
                    </div>
                  </div>
                </div>
                
                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-[2rem] border border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 pt-16 border-t border-white/5 reveal">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-[0.5em] text-slate-500 font-black">Professional Software Suite</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { name: 'PR', color: 'hover:text-[#00005b]', full: 'Premiere Pro', bg: 'hover:bg-[#00005b]/10' },
              { name: 'AE', color: 'hover:text-[#00005b]', full: 'After Effects', bg: 'hover:bg-[#00005b]/10' },
              { name: 'DR', color: 'hover:text-[#ff6600]', full: 'DaVinci Resolve', bg: 'hover:bg-[#ff6600]/10' },
              { name: 'PS', color: 'hover:text-[#31a8ff]', full: 'Photoshop', bg: 'hover:bg-[#31a8ff]/10' },
              { name: 'AI', color: 'hover:text-[#ff9a00]', full: 'Illustrator', bg: 'hover:bg-[#ff9a00]/10' },
            ].map((tech, i) => (
              <div 
                key={tech.name} 
                className={`group relative flex flex-col items-center gap-3 transition-all duration-500 hover:-translate-y-3 animate-float`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`w-20 h-20 rounded-2xl border border-white/5 flex items-center justify-center text-3xl font-black italic text-slate-500 transition-all duration-500 ${tech.color} ${tech.bg} group-hover:border-current group-hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] glass`}>
                  {tech.name}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {tech.full}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(350%) skewX(-20deg); }
        }
        .group-hover\\:animate-shimmer {
          animation: shimmer 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float-subtle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
