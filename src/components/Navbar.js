"use client";
import { siteContent } from "../config/content";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY;
      
      const nav = document.getElementById('mainNav');
      if (nav) nav.style.boxShadow = st > 80 ? '0 2px 20px rgba(0,0,0,0.5)' : '';
      
      const sections = ['home','about','gallery','classes','schedule','trainers','pricing','contact','location'];
      let current = '';
      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section && st >= section.offsetTop - 130) {
          current = id;
        }
      });
      
      if (current) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav id="mainNav">
        <a className="nav-logo" href="#home" onClick={closeMenu}>
          <img src="/images/logo.png" alt="The Top Gym" style={{ height: "36px", width: "auto", objectFit: "contain", opacity: 0.9 }} />
          <div>
            <div className="nav-logo-text">{siteContent.global.siteName.toUpperCase()}</div>
            <div className="nav-logo-sub">{siteContent.global.location}</div>
          </div>
        </a>
        <ul className="nav-links">
          {['about','gallery','classes','trainers','pricing','contact'].map((id) => (
            <li key={id}>
              <a href={`#${id}`}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">Join Now</a>
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} id="ham" onClick={toggleMenu} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} id="mobileMenu">
        {['about','gallery','classes','trainers','pricing','contact'].map((id) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </>
  );
}
