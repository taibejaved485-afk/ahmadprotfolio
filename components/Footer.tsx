
import React from 'react';
import { Youtube, Instagram, Twitter, Linkedin, Play } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@amirraza', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com/amirraza', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/amirraza', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/in/amirraza', label: 'LinkedIn' },
  ];

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-2 text-3xl font-bold font-display tracking-wider">
              <div className="bg-purple-600 p-1 rounded-sm">
                <Play size={24} fill="white" className="text-white" />
              </div>
              <span>AMIR <span className="text-purple-400">RAZA</span></span>
            </a>
            <p className="text-slate-500 max-w-sm leading-relaxed text-lg">
              Crafting world-class cinematic experiences. Let's build something extraordinary together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-sm text-purple-400">Quick Links</h5>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">My Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="font-bold uppercase tracking-widest text-sm text-purple-400">Services</h5>
            <ul className="space-y-4 text-slate-400">
              <li>YouTube Editing</li>
              <li>Color Grading</li>
              <li>Motion Design</li>
              <li>Events Coverage</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© {currentYear} Amir Raza. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
