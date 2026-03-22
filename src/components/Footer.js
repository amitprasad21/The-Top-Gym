import { siteContent } from "../config/content";

export default function Footer() {
  const { footer } = siteContent;
  
  return (
    <footer>
      <div className="footer-top">
        <a href="#home" className="footer-logo">
           <img src="/images/logo.png" alt="The Top Gym" />
        </a>
        <div className="footer-tagline">
          {footer.taglineParams[0]} · <em>{footer.taglineParams[1]}</em> · {footer.taglineParams[2]}
        </div>
        <div className="footer-socials">
          <a className="social-link inst" href="#" title="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="social-link yt" href="#" title="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a className="social-link ph" href={`tel:${siteContent.global.phone.replace(/\\s+/g, '')}`} title="Phone">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
      <div className="footer-grid">
        <div className="footer-col">
          <h5>{siteContent.global.siteName}</h5>
          <p>{footer.description}</p>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#trainers">Trainers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="#pricing">Membership Plans</a></li>
            <li><a href="#trainers">Personal Training</a></li>
            <li><a href="#classes">Group Classes</a></li>
            <li><a href="#contact">Diet Consultation</a></li>
            <li><a href="#classes">Cardio Zone</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <ul>
            <li><a href={`tel:${siteContent.global.phone.replace(/\\s+/g, '')}`}>{siteContent.global.phone}</a></li>
            <li><a href={`mailto:${siteContent.global.email}`}>{siteContent.global.email}</a></li>
            <li><a href={siteContent.global.whatsapp} target="_blank" rel="noreferrer">WhatsApp Us</a></li>
            <li><a href="#location">Find Us on Map</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{footer.bottomText}</p>
        <span className="tag">{footer.bottomTag}</span>
      </div>
    </footer>
  );
}
