
import React, { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../constants';

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
    <section ref={sectionRef} id="skills" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 reveal">
          <h2 className="text-purple-400 font-bold uppercase tracking-widest text-sm">Technical Proficiency</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display">My Cutting Edge <span className="text-gradient">Skills</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto">Equipped with the industry-standard tools and techniques to deliver high-quality video production.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {SKILLS.map((skill, index) => (
            <div 
              key={index} 
              className={`space-y-4 reveal stagger-${index + 1} group cursor-default p-4 -m-4 rounded-2xl transition-all duration-300 hover:bg-white/5`}
            >
              <div className="flex justify-between items-end">
                <span className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </span>
                <span className="text-purple-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative shadow-inner">
                <div 
                  className={`h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 rounded-full transition-all duration-[1.5s] ease-out group-hover:animate-refill relative`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    // Passing the skill level as a CSS variable for the keyframe animation
                    '--skill-width': `${skill.level}%`
                  } as React.CSSProperties}
                >
                  {/* Glossy overlay on the bar */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 grayscale opacity-40 reveal">
          <span className="text-3xl font-black italic hover:grayscale-0 hover:opacity-100 transition-all cursor-default">PR</span>
          <span className="text-3xl font-black italic hover:grayscale-0 hover:opacity-100 transition-all cursor-default">AE</span>
          <span className="text-3xl font-black italic hover:grayscale-0 hover:opacity-100 transition-all cursor-default">DR</span>
          <span className="text-3xl font-black italic hover:grayscale-0 hover:opacity-100 transition-all cursor-default">PS</span>
          <span className="text-3xl font-black italic hover:grayscale-0 hover:opacity-100 transition-all cursor-default">AI</span>
        </div>
      </div>

      <style>{`
        @keyframes refill {
          0% { 
            width: 0%; 
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.5);
          }
          100% { 
            width: var(--skill-width); 
            filter: brightness(1);
          }
        }
        .group-hover\\:animate-refill {
          animation: refill 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;
