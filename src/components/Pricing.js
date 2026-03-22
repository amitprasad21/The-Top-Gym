"use client";
import { siteContent } from "../config/content";
import { useEffect, useRef } from "react";

export default function Pricing() {
  const { pricing } = siteContent;
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
    }
    return () => obs.disconnect();
  }, []);

  return (
    <section className="pricing" id="pricing" ref={sectionRef}>
      <span className="section-tag reveal">{pricing.tag}</span>
      <h2 className="reveal">{pricing.headingPlain} <em>{pricing.headingEm}</em></h2>
      <div className="divider reveal"></div>
      <div className="pricing-grid">
        {pricing.plans.map((p, i) => (
          <div className={`price-card reveal-scale d${i + 1} ${p.isPopular ? 'featured' : ''}`} key={i}>
            {p.isPopular && <div className="price-badge">Most Popular</div>}
            <div className="price-plan">{p.name}</div>
            <div className="price-amount"><span>₹</span>{p.price}</div>
            <div className="price-period">{p.period}</div>
            <ul className="price-features">
              {p.features.map((f, fi) => (
                <li className={f.off ? 'off' : ''} key={fi}>{f.text}</li>
              ))}
            </ul>
            <a href="#contact" className={p.isPopular ? 'btn-primary' : 'btn-outline'} style={{ display: "block", textAlign: "center" }}>Get Started</a>
          </div>
        ))}
      </div>
    </section>
  );
}
