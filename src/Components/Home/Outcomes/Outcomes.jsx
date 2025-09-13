import React, { useEffect, useRef, useState } from 'react';
import './Outcomes.css';

const Outcomes = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: unobserve after animation triggers
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Data for cards to make it more maintainable
  const outcomeData = [
    {
      id: 1,
      title: "Accelerate Revenue Growth",
      description: "Drive consistent 15-25% revenue increases through AI-powered opportunity identification and risk mitigation strategies.",
      stat: "20%",
      statLabel: "Average Revenue Lift",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 20V10M18 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Actionable Intelligence",
      description: "Transform raw data into strategic insights with our proprietary algorithms that identify patterns and opportunities competitors miss.",
      stat: "50X",
      statLabel: "More Insights",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Maximize Team Efficiency",
      description: "Automate routine tasks and eliminate manual data entry, freeing your sales team to focus on what they do best—closing deals.",
      stat: "80%",
      statLabel: "Time Savings",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`outcomes-section ${isVisible ? 'section-visible' : 'section-transition'}`}
    >
      <div className="outcomes-container">
        <div className="outcomes-header">
          <h2 className="outcomes-title">Transform Your Revenue Operations</h2>
          <p className="outcomes-subtext">
            Our platform delivers measurable results that directly impact your bottom line. 
            Join industry leaders who have revolutionized their GTM strategy.
          </p>
        </div>
        
        <div className="outcomes-grid">
          {outcomeData.map((outcome, index) => (
            <div 
              key={outcome.id} 
              className="outcome-card"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="card-icon">
                <div className="icon-wrapper">
                  {outcome.icon}
                </div>
              </div>
              <h3 className="outcome-headline">{outcome.title}</h3>
              <p className="outcome-description">{outcome.description}</p>
              <div className="outcome-stat">
                <span className="stat-number">{outcome.stat}</span>
                <span className="stat-label">{outcome.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="outcomes-background">
        <div className="outcomes-grid-bg"></div>
        <div className="outcomes-glow"></div>
        <div className="outcomes-particles">
          <div className="outcomes-particle"></div>
          <div className="outcomes-particle"></div>
          <div className="outcomes-particle"></div>
          <div className="outcomes-particle"></div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;