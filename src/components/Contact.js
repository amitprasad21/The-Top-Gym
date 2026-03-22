"use client";
import { siteContent } from "../config/content";
import { useEffect, useRef } from "react";

export default function Contact() {
  const { contact } = siteContent;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('form-msg').style.display = 'block';
    e.target.reset();
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-grid">
        <div className="contact-info reveal-left">
          <span className="section-tag">{contact.tag}</span>
          <h2>{contact.headingPlain} <em>{contact.headingEm}</em></h2>
          <div className="divider"></div>
          <a href="https://wa.me/917029139659?text=Hi%2C%20I%20am%20interested%20in%20joining%20The%20Top%20Gym%20Greater%20Noida!" target="_blank" rel="noreferrer" className="whatsapp-btn">
            <span style={{ fontSize: '18px' }}>💬</span>
            Chat on WhatsApp
          </a>
          
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-detail">
              <div className="label">Address</div>
              <div className="val">{siteContent.global.addressLine1}<br/>{siteContent.global.addressLine2}</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <div className="contact-detail">
              <div className="label">Phone</div>
              <div className="val">{siteContent.global.phone}</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-detail">
              <div className="label">Email</div>
              <div className="val">{siteContent.global.email}</div>
            </div>
          </div>
          
          <h3>Opening Hours</h3>
          <div className="hours-grid">
            {contact.openingHours.map((h, i) => (
              <div className="hour-item" key={i}>
                <div className="hour-day">{h.day}</div>
                <div className="hour-time">{h.time}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="reveal-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Interested In</label>
              <select className="form-select form-input" required>
                <option value="">Select an option</option>
                <option>Gym Membership</option>
                <option>Personal Training</option>
                <option>Group Classes</option>
                <option>Diet Consultation</option>
                <option>General Enquiry</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea form-input" placeholder="Tell us about your fitness goals..."></textarea>
            </div>
            <button type="submit" className="form-submit">Send Enquiry</button>
            <p id="form-msg" style={{ textAlign: "center", fontSize: "12px", color: "#22c55e", marginTop: "7px", display: "none" }}>✓ Thank you! We will get back to you soon.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
