import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // This would be where we'd initialize any complex animations
    // For now, CSS animations handle most of the effects
  }, []);

  return (
    <section className="career-hero-container" ref={containerRef}>
      <div className="career-hero-background">
        <div className="career-hero-grid"></div>
        <div className="career-hero-glow"></div>
      </div>
      
      <div className="career-hero-content">
        <div className="career-careers-badge">
          <span className="career-badge-pulse" aria-hidden="true"></span>
          We're Hiring - Transform Revenue Intelligence
        </div>
        
        <h1 className="career-hero-headline">
          Pioneer the Next Era of 
          <span className="career-gradient-text"> Autonomous Revenue</span>
        </h1>
        
        <p className="career-hero-subtext">
          Redefining how businesses understand markets. 
          Join us in building the future of GTM.
        </p>
        
        <div className="career-impact-stats">
          <div className="career-impact-stat">
            <span className="career-stat-number">10x</span>
            <span className="career-stat-label">Revenue Intelligence</span>
          </div>
          <div className="career-impact-stat">
            <span className="career-stat-number">100B+</span>
            <span className="career-stat-label">Data Points Processed</span>
          </div>
          <div className="career-impact-stat">
            <span className="career-stat-number">0</span>
            <span className="career-stat-label">Manual Entry</span>
          </div>
        </div>
      </div>
      
      <div className="career-hero-visual">
        <div className="career-ai-visualization">
          {/* Data Sources */}
          <div className="career-data-sources-container">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className={`career-data-source career-data-source-${i}`}>
                <div className="career-data-node">
                  <div className="career-data-inner-glow"></div>
                </div>
                <div className="career-data-stream career-data-stream-animated"></div>
              </div>
            ))}
          </div>
          
          {/* AI Core */}
          <div className="career-ai-core-container">
            <div className="career-ai-core">
              <div className="career-core-inner-glow"></div>
              <div className="career-core-inner-ring">
                <div className="career-core-center"></div>
              </div>
              <div className="career-core-orbits">
                <div className="career-core-orbit career-core-orbit-1">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`career-orbit-particle career-orbit-particle-${i}`}></div>
                  ))}
                </div>
                <div className="career-core-orbit career-core-orbit-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`career-orbit-particle career-orbit-particle-${i}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Insights Output */}
          <div className="career-insights-container">
            {[
              { icon: "📈", text: "Market Trends" },
              { icon: "🔍", text: "Customer Insights" },
              { icon: "🎯", text: "Revenue Opportunities" },
              { icon: "💡", text: "Strategic Insights" }
            ].map((insight, i) => (
              <div key={i} className={`career-insight-node career-insight-node-${i+1}`}>
                <div className="career-connection-line career-connection-active"></div>
                <div className="career-insight-card">
                  <div className="career-insight-icon" aria-label={insight.text}>{insight.icon}</div>
                  <div className="career-insight-text">{insight.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
