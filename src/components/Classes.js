"use client";
import { siteContent } from "../config/content";
import { useEffect, useRef } from "react";

export default function Classes() {
  const { classes } = siteContent;
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("up");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -28px 0px" });

    if (sectionRef.current) {
      const reveals = sectionRef.current.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      reveals.forEach((el) => obs.observe(el));

      const cards = sectionRef.current.querySelectorAll('.class-card-3d');
      const cleanups = Array.from(cards).map((card) => {
        const handleMove = (e) => {
          const r = card.getBoundingClientRect();
          const rx = ((e.clientY - r.top - r.height / 2) / r.height) * -8;
          const ry = ((e.clientX - r.left - r.width / 2) / r.width) * 8;
          card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.025,1.025,1.025)`;
          const spec = card.querySelector('.cc-specular');
          if(spec) spec.style.background = `radial-gradient(circle at ${((e.clientX - r.left) / r.width * 100).toFixed(1)}% ${((e.clientY - r.top) / r.height * 100).toFixed(1)}%, rgba(255,255,255,0.06), transparent 58%)`;
        };
        const handleLeave = () => {
          card.style.transition = 'transform .5s cubic-bezier(0.16,1,0.3,1)';
          card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
        };
        const handleEnter = () => {
          card.style.transition = 'transform .1s linear';
        };

        card.addEventListener('mousemove', handleMove);
        card.addEventListener('mouseleave', handleLeave);
        card.addEventListener('mouseenter', handleEnter);

        return () => {
          card.removeEventListener('mousemove', handleMove);
          card.removeEventListener('mouseleave', handleLeave);
          card.removeEventListener('mouseenter', handleEnter);
        };
      });

      return () => {
        obs.disconnect();
        cleanups.forEach(cleanup => cleanup());
      };
    }
    return () => obs.disconnect();
  }, []);

  return (
    <section className="classes" id="classes" ref={sectionRef}>
      <span className="section-tag reveal">{classes.tag}</span>
      <h2 className="reveal">{classes.headingPlain} <em>{classes.headingEm}</em></h2>
      <div className="divider reveal"></div>
      <div className="classes-grid">
        {classes.items.map((item, i) => {
          const bgs = [
            "/images/WhatsApp Image 2026-03-22 at 12.03.18 AM (1).jpeg",
            "/images/WhatsApp Image 2026-03-22 at 12.03.19 AM (2).jpeg",
            "/images/Personal.jpeg",
            "/images/hiit.jpeg",
            "/images/WhatsApp Image 2026-03-22 at 12.03.20 AM (1).jpeg",
            "/images/herosection.jpeg"
          ];
          return (
            <div className={`class-card-3d reveal d${i + 1}`} key={i}>
              <div className="cc-bg" style={{ backgroundImage: `url("${bgs[i % bgs.length]}")` }}></div>
            <div className="cc-grad"></div>
            <div className="cc-specular"></div>
            <div className="cc-badges">
              <span className="cc-category">{item.category}</span>
              <span className="cc-level">{item.level}</span>
            </div>
            <div className="cc-content">
              <span className="cc-icon">{item.icon}</span>
              <div className="cc-name">{item.name}</div>
              <p className="cc-desc">{item.desc}</p>
              <div className="cc-meta">
                {item.tags.map((t, idx) => <span className="cc-tag" key={idx}>{t}</span>)}
              </div>
              <div className="cc-intensity">
                <div className="cc-int-label">Intensity</div>
                <div className="cc-int-track">
                  <div className="cc-int-fill" style={{ '--int': `${item.intensity}%`, width: '0%' }}></div>
                </div>
              </div>
              <a href="#contact" className="cc-book">Book Class</a>
            </div>
          </div>
          );
        })}
      </div>
    </section>
  );
}
