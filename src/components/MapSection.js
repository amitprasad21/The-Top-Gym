import { siteContent } from "../config/content";

export default function MapSection() {
  const { global } = siteContent;
  
  return (
    <div className="map-section" id="location">
      <div className="map-wrap">
        <iframe 
          src={global.mapIframeUrl} 
          allowFullScreen 
          loading="lazy" 
          title="The Top Gym Location"
        />
        <div className="map-overlay-card">
          <h4>{global.siteName}</h4>
          <p>{global.addressLine1}<br/>{global.addressLine2}</p>
          <a href={global.mapDirectionsUrl} target="_blank" rel="noreferrer" className="map-get-dir">Get Directions →</a>
        </div>
      </div>
    </div>
  );
}
