
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Services from './components/Services.tsx';
import Portfolio from './components/Portfolio.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Intersection Observer for Scroll Reveals
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-purple-gradient relative selection:bg-purple-500 selection:text-white">
      {/* Decorative background blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]"></div>
      </div>

      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
