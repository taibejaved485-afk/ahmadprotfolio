import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants.tsx';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'YouTube', 'Commercial', 'Music', 'Event'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-6 reveal">
          <h2 className="text-purple-400 font-bold uppercase tracking-widest text-sm">Selected Works</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display">Featured <span className="text-gradient">Showreel</span></h3>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-purple-600 text-white shadow-lg' : 'glass text-slate-400 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group relative glass rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl reveal stagger-${(idx % 2) + 1} transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-purple-500/25 hover:bg-white/5 border border-transparent hover:border-purple-500/30`}
            >
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[1.2s] ease-in-out opacity-70 group-hover:opacity-100"
              />
              {/* Overlay with subtle blur change on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500">
                <span className="text-purple-400 text-sm font-bold mb-2 transform group-hover:translate-x-1 transition-transform">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-100 transition-colors">{project.title}</h4>
                
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-xl font-bold hover:bg-purple-500 hover:text-white transition-all transform hover:-translate-y-1 active:scale-95">
                    <Play size={18} fill="currentColor" /> Watch
                  </button>
                  <button className="p-3 glass rounded-xl hover:bg-white/10 transition-all transform hover:-translate-y-1 active:scale-95">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center reveal">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 font-bold transition-colors group"
          >
            See more on YouTube <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;