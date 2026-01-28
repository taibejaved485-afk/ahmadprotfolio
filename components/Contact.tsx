
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '0305-1014508', href: 'tel:03051014508' },
    { icon: Mail, label: 'Email', value: 'amir.razaoffical@gmail.com', href: 'mailto:amir.razaoffical@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Iqra City, Sadiq Abad, Pakistan', href: 'https://maps.google.com/?q=Iqra+City,+Sadiq+Abad,+Pakistan' },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12 reveal-left">
            <div className="space-y-4">
              <h2 className="text-purple-400 font-bold uppercase tracking-widest text-sm">Let's Connect</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-display leading-tight">Ready to start your <span className="text-gradient">next masterpiece?</span></h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you have a specific vision or need creative direction, I'm here to bring your footage to life. Let's create something extraordinary.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.href} 
                  target={info.icon === MapPin ? "_blank" : "_self"}
                  rel={info.icon === MapPin ? "noopener noreferrer" : ""}
                  className={`flex items-center gap-6 group hover:translate-x-2 transition-all duration-300 reveal stagger-${idx + 1}`}
                >
                  <div className="w-16 h-16 glass rounded-[1.25rem] flex items-center justify-center group-hover:bg-purple-600 group-hover:shadow-lg group-hover:shadow-purple-600/30 transition-all">
                    <info.icon size={26} className="text-purple-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mb-1">{info.label}</p>
                    <p className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative reveal-right">
            <div className="glass p-10 rounded-[2.5rem] shadow-2xl border-t border-white/5 relative z-10">
              {submitted ? (
                <div className="py-24 text-center animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle size={40} className="text-purple-400" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Message Received!</h4>
                  <p className="text-slate-400 max-w-xs mx-auto">Thank you for reaching out. Amir will respond to your inquiry shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full bg-slate-900/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="john@example.com"
                        className="w-full bg-slate-900/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">Your Vision</label>
                    <textarea 
                      required 
                      rows={4} 
                      placeholder="Describe the cinematic story you want to tell..."
                      className="w-full bg-slate-900/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white resize-none placeholder:text-slate-600"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-2xl transition-all shadow-xl shadow-purple-600/30 flex items-center justify-center gap-3 active:scale-[0.98] group"
                  >
                    Send Masterpiece Inquiry 
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
            
            {/* Background design glow */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
