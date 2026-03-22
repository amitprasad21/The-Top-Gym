"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Classes from "../components/Classes";
import Schedule from "../components/Schedule";
import Trainers from "../components/Trainers";
import BmiCalculator from "../components/BmiCalculator";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Home() {
  const [loaderRunning, setLoaderRunning] = useState(true);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    // Scroll handling for line and dots
    const h = () => {
      const st = window.scrollY;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      if (dh > 0) {
        const pct = st / dh;
        const el = document.getElementById('scroll-line');
        if (el) el.style.width = `${pct*100}%`;
        
        // Fluidly slide logo from 0px to 81px (9 intervals of 9px)
        const logoEl = document.getElementById('travelingLogo');
        if (logoEl) logoEl.style.transform = `translateY(${pct * 81}px)`;
      }
      
      const sections = ['home','about','gallery','classes','schedule','trainers','bmi','pricing','contact','location'];
      let current = '';
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && st >= section.offsetTop - 150) {
          current = id;
        }
      });
      if (current) setActiveId(current);
    };
    window.addEventListener('scroll', h, { passive: true });
    
    // Smooth scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href === '#') return;
        const tgt = document.querySelector(href);
        if (!tgt) return;
        e.preventDefault();
        tgt.scrollIntoView({ behavior: 'smooth' });
      });
    });

    return () => window.removeEventListener('scroll', h);
  }, []);

  const handleLoaderComplete = () => {
    const c = document.getElementById('curtain');
    if (c) {
      c.style.transition = 'none';
      c.style.transform = 'translateY(0%)';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        c.style.transition = 'transform .5s cubic-bezier(0.76,0,0.24,1)';
        c.style.transform = 'translateY(-100%)';
        setTimeout(() => {
          setHeroLoaded(true);
          document.getElementById('scroll-indicator')?.classList.add('show');
        }, 340);
        setTimeout(() => {
          c.style.transform = 'translateY(-110%)';
        }, 580);
      }));
    } else {
      setHeroLoaded(true);
    }
  };

  return (
    <main>
      <Loader onComplete={handleLoaderComplete} />
      
      <div id="curtain"></div>
      <div id="scroll-line"></div>
      
      <div id="scroll-indicator" className={heroLoaded ? "show" : ""}>
        <div className="si-dots" id="siDots" style={{ position: 'relative' }}>
          <img 
            id="travelingLogo"
            src="/images/logo.png" 
            className="si-traveling-logo" 
            alt="Logo" 
          />
          {['home','about','gallery','classes','schedule','trainers','bmi','pricing','contact','location'].map(id => (
            <div key={id} className={`si-dot ${activeId === id ? 'active' : ''}`} onClick={() => document.getElementById(id)?.scrollIntoView({behavior:'smooth'})}></div>
          ))}
        </div>
      </div>
      
      <Navbar />
      <Hero isLoaded={heroLoaded} />
      <About />
      <Gallery />
      <Classes />
      <Schedule />
      <Trainers />
      <BmiCalculator />
      <Pricing />
      <Contact />
      <MapSection />
      <Footer />

      <a href="https://wa.me/917029139659?text=Hi%2C%20I%20want%20to%20know%20more%20about%20The%20Top%20Gym!" target="_blank" rel="noreferrer" className="whatsapp-float" title="Chat on WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  );
}
