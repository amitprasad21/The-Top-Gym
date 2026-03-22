"use client";
import { siteContent } from "../config/content";
import { useEffect, useRef } from "react";

export default function About() {
  const { about } = siteContent;
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
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-grid">
        <div className="about-img-wrap reveal-left">
          <img src="/images/WhatsApp Image 2026-03-22 at 12.03.16 AM.jpeg" className="about-img" alt="About The Top Gym" />
          <div className="about-badge">
            <div className="bnum">{about.badgeNum}</div>
            <div className="blbl" dangerouslySetInnerHTML={{ __html: about.badgeLabel }}></div>
          </div>
        </div>
        <div className="about-text reveal-right">
          <span className="section-tag">{about.tag}</span>
          <h2>{about.headingPlain} <em>{about.headingEm}</em></h2>
          <div className="divider"></div>
          <p>{about.p1}</p>
          <p>{about.p2}</p>
          <div className="about-feats">
            {about.feats.map((feat, i) => (
              <div className="feat" key={i}>{feat}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
