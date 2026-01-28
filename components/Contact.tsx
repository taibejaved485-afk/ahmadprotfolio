
import React from 'react';
import { Phone, Mail, MapPin, User, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/923051014508?text=Hi Amir, I'm reaching out from your portfolio website!";

  const contactInfo = [
    { icon: User, label: 'Name', value: 'Amir Raza', href: null },
    { icon: Phone, label: 'Phone', value: '0305-1014508', href: 'tel:03051014508' },
    { icon: Mail, label: 'Email', value: 'amir.razaoffical@gmail.com', href: 'mailto:amir.razaoffical@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Iqra City, Tehsil Sadiq Abad, District Rahim Yar Khan, Pakistan', href: 'https://maps.google.com/?q=Iqra+City,+Tehsil+Sadiq+Abad,+District+Rahim+Yar+Khan,+Pakistan' },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 reveal">
          <h2 className="text-purple-400 font-bold uppercase tracking-widest text-sm">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display">Let's Create <span className="text-gradient">Magic Together</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to start your next cinematic project? My door is always open for creative collaborations. Feel free to reach out via any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {contactInfo.map((info, idx) => (
            <div 
              key={idx} 
              className={`group p-8 glass rounded-[2rem] border-t border-white/5 hover:bg-white/5 transition-all duration-300 stagger-${idx + 1}`}
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all duration-500">
                <info.icon size={22} className="text-purple-400 group-hover:text-white transition-colors" />
              </div>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-2">{info.label}</p>
              {info.href ? (
                <a 
                  href={info.href} 
                  target={info.icon === MapPin ? "_blank" : "_self"}
                  rel={info.icon === MapPin ? "noopener noreferrer" : ""}
                  className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors break-words flex items-center gap-1"
                >
                  {info.value}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ) : (
                <p className="text-lg font-bold text-white">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Big CTA Card */}
        <div className="mt-16 reveal">
          <div className="relative overflow-hidden glass p-10 md:p-16 rounded-[3rem] text-center border border-white/10 group">
            {/* Background design elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px]"></div>
            
            <h4 className="text-3xl md:text-4xl font-bold mb-6 font-display">Prefer a direct chat?</h4>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
              Connect with me on WhatsApp for instant project discussions and quotes.
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl rounded-2xl transition-all shadow-2xl shadow-purple-600/30 hover:-translate-y-1 active:scale-95 group"
            >
              Start Conversation
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Phone size={18} fill="white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
