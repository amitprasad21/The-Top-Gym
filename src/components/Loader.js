"use client";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }) {
  const [phrases] = useState(['Loading…', 'Warming up…', 'Almost there…', 'Ready to lift…']);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [hidden, setHidden] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const cyclePhrase = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
        setOpacity(1);
      }, 350);
    }, 1100);

    let currProgress = 0;
    const advance = () => {
      currProgress = Math.min(currProgress + Math.random() * 15 + 6, 100);
      setProgress(currProgress);
      
      if (currProgress >= 92) setShowScroll(true);
      
      if (currProgress < 100) {
        setTimeout(advance, Math.random() * 200 + 90);
      } else {
        clearInterval(cyclePhrase);
        setTimeout(() => {
          setHidden(true);
          onComplete();
        }, 320);
      }
    };
    
    setTimeout(advance, 100);

    return () => clearInterval(cyclePhrase);
  }, []); // Empty dependency array so loader never restarts on re-renders

  return (
    <div id="loader" className={hidden ? "hidden" : ""}>
      <div className="loader-logo-wrap">
        <img className="loader-logo-img" src="/images/logo.png" alt="The Top Gym" />
      </div>
      <div className="loader-name">THE TOP GYM</div>
      <div className="loader-sub">Greater Noida · No Pain No Gain</div>
      <div className="loader-bar-wrap">
        <div className="loader-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loader-pct">{Math.floor(progress)}%</div>
      <div className="loader-phrase" style={{ opacity }}>{phrases[phraseIdx]}</div>
      <div className={`loader-scroll ${showScroll ? "vis" : ""}`} id="loaderScroll">
        <div className="sw"><div className="sw-dot"></div></div>
        <div className="sw-label">Scroll</div>
      </div>
    </div>
  );
}
