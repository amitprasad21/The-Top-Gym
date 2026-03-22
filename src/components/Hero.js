"use client";
import { siteContent } from "../config/content";
import { useEffect, useRef } from "react";

export default function Hero({ isLoaded }) {
  const { hero } = siteContent;
  const statsRef = useRef(null);

  useEffect(() => {
    if (isLoaded && statsRef.current) {
      statsRef.current.querySelectorAll('.stat-num').forEach(el => {
        const t = parseInt(el.dataset.target);
        let c = 0;
        const step = Math.max(1, Math.floor(t / 40));
        const iv = setInterval(() => {
          c = Math.min(c + step, t);
          el.textContent = c + '+';
          if (c >= t) clearInterval(iv);
        }, 30);
      });
    }
  }, [isLoaded]);

  return (
    <section className={`hero ${isLoaded ? 'hero-loaded' : ''}`} id="home">
      <div className="hero-bg" style={{ backgroundImage: `url("/images/herosection.jpeg")` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-accent"></div>
      <div className="hero-content">
        <span className="hero-tag">{hero.tag}</span>
        <div className="hero-logo-mark">
          <img src="/images/logo.png" alt="The Top Gym" />
        </div>
        <h1>{hero.headingLine1} <em>{hero.headingEm}</em><br/>{hero.headingLine2}</h1>
        <p className="hero-sub">{hero.sub}</p>
        <div className="hero-btns">
          <a href="#pricing" className="btn-primary">Join Now</a>
          <a href="#classes" className="btn-outline">View Classes</a>
        </div>
      </div>
      <div className="hero-stats" ref={statsRef}>
        {hero.stats.map((stat, i) => (
          <div className="stat-box" key={i}>
            <div className="stat-num" data-target={stat.target}>0+</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
