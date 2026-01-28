import React from 'react';
import { Youtube, Instagram, Twitter, Linkedin, Play, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-24 pb-12 px-6 overflow-hidden bg-slate-950 border-t border-white/5">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
      
      {/* Large Watermark Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.02] parallax-slow">
        <span className="text-[15vw] font-black uppercase tracking-tighter leading-none block whitespace-nowrap">
          AMIR RAZA
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8 reveal">
            <a href="#" className="flex items-center gap-2 text-3xl font-bold font-display tracking-wider group">
              <div className="bg-purple-600 p-1 rounded-sm group-hover:rotate-12 transition-transform">
                <Play size={24} fill="white" className="text-white" />
              </div>
              <span>AMIR <span className="text-purple-400">RAZA</span></span>
            </a>
            <p className="text-slate-400 leading-relaxed text-lg max-w-xs">
              Transforming your raw visions into cinematic masterpieces. High-end video editing for a digital-first world.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all transform hover:-translate-y-2 hover:shadow-xl ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8 reveal stagger-1">
            <h5 className="text-sm font-black uppercase tracking-[0.3em] text-purple-400 border-l-2 border-purple-600 pl-4">Navigation</h5>
            <ul className="space-y-4">
              {['About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-purple-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-purple-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8 reveal stagger-2">
            <h5 className="text-sm font-black uppercase tracking-[0.3em] text-purple-400 border-l-2 border-purple-600 pl-4">Get In Touch</h5>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="p-3 glass rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:03051014508" className="text-slate-300 hover:text-white font-bold transition-colors">0305-1014508</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-3 glass rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:amir.razaoffical@gmail.com" className="text-slate-300 hover:text-white font-bold transition-colors truncate block max-w-[180px] lg:max-w-none">amir.razaoffical@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-3 glass rounded-xl text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Location</p>
                  <span className="text-slate-300 font-bold">Iqra City, Sadiq Abad, Pakistan</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Action Column */}
          <div className="space-y-8 reveal stagger-3">
            <h5 className="text-sm font-black uppercase tracking-[0.3em] text-purple-400 border-l-2 border-purple-600 pl-4">Project Inquiry</h5>
            <p className="text-slate-400 text-sm leading-relaxed">
              Available for freelance opportunities and long-term collaborations. Let's make something iconic.
            </p>
            <button 
              onClick={scrollToTop}
              className="w-full py-4 glass hover:bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 text-slate-300 hover:text-white font-bold transition-all group"
            >
              Back to Top
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-medium">
            <p>© {currentYear} <span className="text-slate-300">Amir Raza</span>. Built with Passion & Precision.</p>
          </div>
          <div className="flex items-center gap-8 text-xs font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px]">Ready for Hire</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;