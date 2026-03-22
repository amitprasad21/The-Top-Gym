"use client";
import { useState, useEffect, useRef } from "react";

export default function BmiCalculator() {
  const sectionRef = useRef(null);
  
  const [heightUnit, setHeightUnit] = useState("cm");
  const [heightCm, setHeightCm] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

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

  const calculateBmi = (e) => {
    e.preventDefault();
    let h = 0;
    if (heightUnit === "cm") {
      h = parseFloat(heightCm) / 100;
    } else {
      const ft = parseFloat(heightFt) || 0;
      const inch = parseFloat(heightIn) || 0;
      h = (ft * 12 + inch) * 0.0254;
    }
    
    const w = parseFloat(weight);
    
    if (h > 0 && w > 0) {
      const bmiValue = w / (h * h);
      setBmi(bmiValue.toFixed(1));
      
      if (bmiValue < 18.5) setStatus("Underweight");
      else if (bmiValue < 25) setStatus("Normal Weight");
      else if (bmiValue < 30) setStatus("Overweight");
      else setStatus("Obese");
    }
  };

  return (
    <section id="bmi" ref={sectionRef} style={{ background: 'var(--dark2)', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
      <div className="contact-grid">
        <div className="contact-info reveal-left">
          <span className="section-tag">Health Check</span>
          <h2>CALCULATE YOUR <em>BMI</em></h2>
          <div className="divider"></div>
          
          <p style={{ color: "var(--light)", fontSize: "clamp(13px, 1.5vw, 15px)", lineHeight: 1.8, marginBottom: "20px" }}>
            Body Mass Index (BMI) is a simple calculation using a person&apos;s height and weight. The formula is BMI = kg/m². Let&apos;s see where you stand on your fitness journey.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "8px", marginTop: "30px", marginBottom: "clamp(20px, 4vw, 0)" }}>
            <div className="hour-item">
              <div className="hour-day">Below 18.5</div>
              <div className="hour-time" style={{ color: "#f59e0b" }}>Underweight</div>
            </div>
            <div className="hour-item">
              <div className="hour-day">18.5 - 24.9</div>
              <div className="hour-time" style={{ color: "#22c55e" }}>Normal Weight</div>
            </div>
            <div className="hour-item">
              <div className="hour-day">25.0 - 29.9</div>
              <div className="hour-time" style={{ color: "#f97316" }}>Overweight</div>
            </div>
            <div className="hour-item">
              <div className="hour-day">30.0 & Above</div>
              <div className="hour-time" style={{ color: "#ef4444" }}>Obese</div>
            </div>
          </div>
        </div>
        
        <div className="reveal-right">
          <form className="contact-form" onSubmit={calculateBmi} style={{ background: "var(--black)", padding: "clamp(24px, 3vw, 40px)", borderTop: "3px solid var(--red)" }}>
            <div className="form-group" style={{ marginBottom: "15px" }}>
              <label className="form-label">Height Unit</label>
              <select className="form-select form-input" value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
                <option value="cm">Centimeters (cm)</option>
                <option value="ft">Feet & Inches (ft/in)</option>
              </select>
            </div>
            
            {heightUnit === "cm" ? (
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label">Height (cm)</label>
                <input type="number" step="0.1" className="form-input" placeholder="e.g. 175" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} required />
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "13px", marginBottom: "15px" }}>
                <div className="form-group">
                  <label className="form-label">Height (feet)</label>
                  <input type="number" className="form-input" placeholder="e.g. 5" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Height (inches)</label>
                  <input type="number" className="form-input" placeholder="e.g. 9" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} required />
                </div>
              </div>
            )}

            <div className="form-group" style={{ marginBottom: "25px" }}>
              <label className="form-label">Weight (kg)</label>
              <input type="number" step="0.1" className="form-input" placeholder="e.g. 70" value={weight} onChange={(e) => setWeight(e.target.value)} required />
            </div>
            
            <button type="submit" className="form-submit">Calculate Now</button>
            
            {bmi && (
              <div style={{ marginTop: "24px", padding: "16px", background: "rgba(232, 28, 36, 0.08)", border: "1px solid rgba(232, 28, 36, 0.15)", textAlign: "center" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "var(--gray)", marginBottom: "4px" }}>Your BMI Result</div>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "42px", color: "var(--red)", lineHeight: 1 }}>{bmi}</div>
                <div style={{ fontSize: "14px", color: "var(--white)", marginTop: "4px", fontWeight: 500 }}>{status}</div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
