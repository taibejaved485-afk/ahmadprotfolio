
import React from 'react';
import { Phone, Mail, MapPin, User, ArrowUpRight, MessageSquare, Send, Sparkles, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/923051014508?text=Hi Amir, I'm reaching out from your portfolio website!";

  const contactInfo = [
    { icon: User, label: 'Name', value: 'Amir Raza', href: null, color: 'text-blue-400' },
    { icon: Phone, label: 'Phone', value: '0305-1014508', href: 'tel:03051014508', color: 'text-green-400' },
    { icon: Mail, label: 'Email', value: 'amir.razaoffical@gmail.com', href: 'mailto:amir.razaoffical@gmail.com', color: 'text-purple-400' },
    { icon: MapPin, label: 'Location', value: 'Rahim Yar Khan, Pakistan', href: 'https://maps.google.com/?q=Rahim+Yar+Khan,+Pakistan', color: 'text-red-400' },
  ];

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-slate-950">
      {/* Cinematic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] -left-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
            <MessageSquare size={12} />
            Contact Me
          </div>
          <h3 className="text-4xl md:text-6xl font-black font-display tracking-tight leading-tight">
            Let's Create <span className="text-gradient">Magic Together</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Ready to start your next cinematic project? My door is always open for creative collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal mb-16">
          {contactInfo.map((info, idx) => (
            <div 
              key={idx} 
              className={`group relative p-8 glass rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 stagger-${idx + 1}`}
            >
              <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 ${info.color}`}>
                <info.icon size={24} />
              </div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] mb-2">{info.label}</p>
              {info.href ? (
                <a 
                  href={info.href} 
                  target={info.icon === MapPin ? "_blank" : "_self"}
                  rel={info.icon === MapPin ? "noopener noreferrer" : ""}
                  className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors break-words flex items-center gap-2"
                >
                  {info.value}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1" />
                </a>
              ) : (
                <p className="text-lg font-bold text-white">{info.value}</p>
              )}
              
              {/* Subtle card glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Big CTA Card */}
        <div className="reveal">
          <div className="relative overflow-hidden glass p-10 md:p-20 rounded-[3.5rem] text-center border border-white/10 group">
            {/* Background design elements */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] group-hover:bg-purple-600/30 transition-all duration-1000"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] group-hover:bg-indigo-600/30 transition-all duration-1000"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold animate-bounce-slow">
                <Sparkles size={14} className="text-yellow-400" />
                Available for New Projects
              </div>
              
              <h4 className="text-4xl md:text-6xl font-black font-display tracking-tight">Prefer a direct chat?</h4>
              <p className="text-slate-400 max-w-xl mx-auto text-xl leading-relaxed font-light">
                Connect with me on WhatsApp for instant project discussions, quotes, and creative brainstorming.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 px-12 py-6 bg-purple-600 rounded-2xl font-bold text-xl hover:bg-purple-700 transition-all shadow-2xl shadow-purple-600/40 hover:shadow-[0_0_50px_rgba(147,51,234,0.6)] hover:-translate-y-1 active:scale-95 overflow-hidden"
                >
                  {/* Sweep Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-sweep pointer-events-none"></div>
                  
                  <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span className="relative z-10">Start Conversation</span>
                </a>
                
                <div className="flex items-center gap-4 px-8 py-6 glass rounded-2xl text-slate-400 font-bold">
                  <Clock size={20} className="text-purple-500" />
                  <span>Response in &lt; 2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        .group-hover\\:animate-sweep {
          animation: sweep 1.5s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
