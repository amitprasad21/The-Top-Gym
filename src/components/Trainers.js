"use client";
import { siteContent } from "../config/content";
import { useEffect, useRef, useState } from "react";

export default function Trainers() {
  const { trainers } = siteContent;
  const sectionRef = useRef(null);
  
  const [modalData, setModalData] = useState(null);

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
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      obs.disconnect();
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const openModal = (t) => {
    setModalData(t);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalData(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section className="trainers" id="trainers" ref={sectionRef}>
        <span className="section-tag reveal">{trainers.tag}</span>
        <h2 className="reveal">{trainers.headingPlain} <em>{trainers.headingEm}</em></h2>
        <div className="divider reveal"></div>
        <p className="reveal" style={{ color: "var(--gray)", fontSize: "11px", letterSpacing: "2px", fontFamily: "'Barlow Condensed',sans-serif", textTransform: "uppercase", marginBottom: "24px" }}>
          Hover to flip · Click for full profile
        </p>
        <div className="trainers-grid">
          {trainers.list.map((t, i) => {
            const imgs = [
              "/images/Personal.jpeg",
              "/images/Personal2.jpeg",
              "/images/Personal3.jpeg"
            ];
            const img = imgs[i%imgs.length];
            return (
            <div className={`trainer-flip reveal-scale d${i + 1}`} key={i} onClick={() => openModal({...t, staticImg: img})}>
              <div className="trainer-flip-inner">
                <div className="trainer-front">
                  <img src={img} alt={t.name} />
                  <div className="trainer-flip-hint">Tap for profile</div>
                  <div className="trainer-front-info">
                    <div className="trainer-name">{t.name}</div>
                    <div className="trainer-role">{t.roleHead}</div>
                  </div>
                </div>
                <div className="trainer-back">
                  <img src={imgs[i%imgs.length]} className="tb-avatar" alt={t.name} />
                  <div className="tb-name">{t.name}</div>
                  <div className="tb-role">{t.roleBack}</div>
                  <div className="tb-divider"></div>
                  <p className="tb-bio">{t.bio}</p>
                  <div className="tb-stats">
                    {t.stats.map((s, si) => (
                      <div className="tb-stat" key={si}>
                        <div className="tb-stat-num">{s.n}</div>
                        <div className="tb-stat-lbl">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="tb-certs-title">Certifications</div>
                  {t.certs.map((c, ci) => <div className="tb-cert" key={ci}>{c}</div>)}
                  
                  <div className="tb-specialties">
                    <div className="tb-spec-title">Specialties</div>
                    <div className="tb-spec-tags">
                      {t.specs.map((s, si) => <span className="tb-spec-tag" key={si}>{s}</span>)}
                    </div>
                  </div>
                  <a href="#contact" className="tb-book" onClick={(e) => { e.stopPropagation(); closeModal(); }}>Book a Session</a>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      <div className={`trainer-modal-bg ${modalData ? 'open' : ''}`} id="trainerModal" onClick={(e) => { if(e.target.id === 'trainerModal') closeModal(); }}>
        <div className="trainer-modal" id="modalContent">
          <button className="modal-close" onClick={closeModal}>✕</button>
          <div className="modal-hero">
             {modalData && <img src={modalData.staticImg} alt={modalData.name} />}
            <div className="modal-hero-overlay"></div>
            <div className="modal-hero-info">
              <div className="trainer-name" id="modalName">{modalData?.name}</div>
              <div className="trainer-role" id="modalRole">{modalData?.roleHead}</div>
            </div>
          </div>
          <div className="modal-body">
            <p className="modal-bio" id="modalBio">{modalData?.bio}</p>
            <div className="modal-sec-title">AT A GLANCE</div>
            <div className="modal-stats-grid" id="modalStats">
              {modalData?.stats.map((s, i) => (
                <div className="modal-stat" key={i}>
                  <div className="modal-stat-num">{s.n}</div>
                  <div className="modal-stat-lbl">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="modal-sec-title">CERTIFICATIONS</div>
            <ul className="modal-certs-list" id="modalCerts">
              {modalData?.certs.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
            <div className="modal-sec-title">SPECIALTIES</div>
            <div className="modal-spec-tags" id="modalSpecs">
               {modalData?.specs.map((s, i) => <span className="modal-spec-tag" key={i}>{s}</span>)}
            </div>
            <div className="modal-sec-title">WEEKLY SCHEDULE</div>
            <div id="modalSchedule">
              {modalData?.schedule.map((s, i) => (
                <div className="modal-sched-row" key={i}>
                  <span className="day">{s.day}</span>
                  <span className="stime">{s.time}</span>
                  <span className="class-tag">{s.cls}</span>
                </div>
              ))}
            </div>
            <div className="modal-cta">
              <a href="#contact" className="btn-primary" onClick={closeModal}>Book a Session</a>
              <a href="https://wa.me/917029139659" target="_blank" rel="noreferrer" className="btn-outline">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
