"use client";
import { siteContent } from "../config/content";
import { useEffect, useRef } from "react";

export default function Schedule() {
  const { schedule } = siteContent;
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
    <section className="schedule" id="schedule" ref={sectionRef}>
      <span className="section-tag reveal">{schedule.tag}</span>
      <h2 className="reveal">{schedule.headingPlain} <em>{schedule.headingEm}</em></h2>
      <div className="divider reveal"></div>
      <div className="reveal" style={{ overflowX: "auto" }}>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Class</th>
              <th>Trainer</th>
              <th>Duration</th>
              <th>Level</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {schedule.rows.map((row, i) => (
              <tr key={i}>
                <td className="time">{row.time}</td>
                <td className="cname">{row.name}</td>
                <td>{row.trainer}</td>
                <td>{row.duration}</td>
                <td>{row.level}</td>
                <td>
                  <span className={`badge-${row.status === 'Open' ? 'open' : 'full'}`}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
