"use client";
import { siteContent } from "../config/content";
import { useEffect, useRef } from "react";

export default function Gallery() {
  const { gallery } = siteContent;
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
    <section className="gallery" id="gallery" ref={sectionRef}>
      <div className="gallery-header reveal">
        <span className="section-tag">{gallery.tag}</span>
        <h2>{gallery.headingPlain} <em>{gallery.headingEm}</em></h2>
      </div>
      <div className="gallery-grid">
        <div className="gallery-item tall reveal d1">
          <img src="/images/WhatsApp Image 2026-03-22 at 12.03.18 AM (1).jpeg" alt="Gallery" />
          <div className="gallery-overlay"></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <div className="gallery-item reveal d2">
            <img src="/images/WhatsApp Image 2026-03-22 at 12.03.18 AM.jpeg" alt="Gallery" />
            <div className="gallery-overlay"></div>
          </div>
          <div className="gallery-item reveal d3">
            <img src="/images/WhatsApp Image 2026-03-22 at 12.03.19 AM (2).jpeg" alt="Gallery" />
            <div className="gallery-overlay"></div>
          </div>
        </div>
        <div className="gallery-item tall reveal d4">
          <img src="/images/WhatsApp Image 2026-03-22 at 12.03.20 AM (1).jpeg" alt="Gallery" />
          <div className="gallery-overlay"></div>
        </div>
      </div>
      <div className="gallery-grid" style={{ marginTop: "3px" }}>
        <div className="gallery-item reveal d1">
            <img src="/images/log-1.jpeg" alt="Gallery" />
            <div className="gallery-overlay"></div>
        </div>
        <div className="gallery-item reveal d2">
            <img src="/images/herosection.jpeg" alt="Gallery" />
            <div className="gallery-overlay"></div>
        </div>
        <div className="gallery-item reveal d3">
            <img src="/images/hiit.jpeg" alt="Gallery" />
            <div className="gallery-overlay"></div>
        </div>
      </div>
    </section>
  );
}
