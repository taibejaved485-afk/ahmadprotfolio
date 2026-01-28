import React from 'react';
import { Youtube, Instagram, Twitter, Linkedin, Play, Phone, Mail, MapPin, ArrowUp, Clock, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/923051014508?text=Hi Amir, I'm ready to start a project!";

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'group-hover:bg-red-600' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'group-hover:bg-pink-600' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'group-hover:bg-blue-400' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'group-hover:bg-blue-700' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-32 pb-12 px-6 overflow-hidden bg-slate-950 border-t border-white/5">
      {/* Cinematic Top Section: Call to Action */}
      <div className="max-w-7xl mx-auto mb-24 reveal">
        <div className="relative group">
          {/* Animated Glow Backdrop */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative glass p-12 md:p-20 rounded-[3rem] flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
             {/* Decorative pattern */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
             
             <div className="max-w-2xl text-center lg:text-left space-y-6">
                <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight leading-none">
                  READY TO <span className="text-gradient">ELEVATE</span><br />
                  YOUR CONTENT?
                </h2>
                <p className="text-slate-400 text-xl font-light leading-relaxed">
                  Join hundreds of satisfied creators and brands. Let's build your visual legacy today.
                </p>
             </div>

             <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-6 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl rounded-2xl transition-all shadow-2xl shadow-purple-600/30 hover:-translate-y-2 active:scale-95 flex items-center justify-center gap-4"
                >
                  Hire Amir Raza
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <Play size={18} fill="white" />
                  </div>
                </a>
             </div>
          </div>
        </div>
      </div>

      {/* Main Footer Layout */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Large Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-[0.03] parallax-slow">
          <span className="text-[12vw] font-black uppercase tracking-tighter leading-none block whitespace-nowrap">
            PREMIUM EDITOR
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          
          {/* Brand & Social Column */}
          <div className="space-y-10 reveal">
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-2 text-3xl font-bold font-display tracking-wider group">
                <div className="bg-purple-600 p-1 rounded-sm group-hover:rotate-12 transition-transform">
                  <Play size={24} fill="white" className="text-white" />
                </div>
                <span>AMIR <span className="text-purple-400">RAZA</span></span>
              </a>
              <p className="text-slate-400 leading-relaxed text-lg font-light">
                Premium video post-production that grabs attention and never lets go. Based in Pakistan, serving the world.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group relative w-12 h-12 flex items-center justify-center transition-all duration-500`}
                >
                  <div className={`absolute inset-0 glass rounded-xl transition-all duration-500 group-hover:scale-110 ${social.color} group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]`}></div>
                  <social.icon size={20} className="relative z-10 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-8 reveal stagger-1">
            <h5 className="text-sm font-black uppercase tracking-[0.3em] text-purple-400 border-l-2 border-purple-600 pl-4">Company</h5>
            <ul className="space-y-4">
              {['About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-purple-400 transition-all flex items-center gap-3 group"
                  >
                    <div className="w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-6"></div>
                    <span className="text-lg">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Availability */}
          <div className="space-y-8 reveal stagger-2">
            <h5 className="text-sm font-black uppercase tracking-[0.3em] text-purple-400 border-l-2 border-purple-600 pl-4">Availability</h5>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <Clock className="text-purple-500" size={20} />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Working Hours</p>
                  <p className="font-bold">Mon - Sat: 10AM - 10PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Globe className="text-indigo-500" size={20} />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Timezone</p>
                  <p className="font-bold">PKT (UTC +5)</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Mail className="text-purple-400" size={20} />
                <a href="mailto:amir.razaoffical@gmail.com" className="font-bold hover:text-purple-400 transition-colors break-all">amir.razaoffical@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Tech Stack Footer Card */}
          <div className="space-y-8 reveal stagger-3">
             <h5 className="text-sm font-black uppercase tracking-[0.3em] text-purple-400 border-l-2 border-purple-600 pl-4">My Toolkit</h5>
             <div className="grid grid-cols-2 gap-3">
                {['Premiere Pro', 'After Effects', 'DaVinci', 'Audition', 'Photoshop', 'Illustrator'].map((tool) => (
                  <div key={tool} className="px-4 py-2 glass rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all text-center">
                    {tool}
                  </div>
                ))}
             </div>
             <button 
              onClick={scrollToTop}
              className="w-full mt-4 py-4 shimmer-border rounded-xl flex items-center justify-center gap-3 text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              Back to Surface
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Final Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-500 text-sm">
              © {currentYear} <span className="text-slate-200 font-bold">Amir Raza</span>. Visual Artist & Editor.
            </p>
            <div className="flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-black">Open for new projects</span>
            </div>
          </div>
          
          <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <div className="flex items-center gap-1">
              Made in <span className="text-white">Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;