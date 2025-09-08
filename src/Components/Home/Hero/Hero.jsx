// Hero.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Initialize particle animation
    const initParticles = () => {
      const container = heroRef.current;
      if (!container) return;
      
      // Create particles
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 4 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        container.querySelector('.hero-background').appendChild(particle);
      }
    };

    initParticles();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setSubmitted(true);
    }
  };

  const scrollToCTA = () => {
    const ctaSection = document.getElementById('Cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-container" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-particles"></div>
      </div>
      
      <div className="hero-content">
        <div className="coming-soon-badge">
          <span className="badge-pulse"></span>
          Coming Soon
        </div>
        
        <h1 className="hero-headline">
          The Agentic Operating System<br />for GTM Teams
        </h1>
        
        <p className="hero-subtext">
          Fix your data, unlock intelligence, and eliminate CRM busywork. Our AI-powered platform is launching soon.
        </p>
        
        {!submitted ? (
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="cta-primary">
                Notify Me
              </button>
            </div>
          </form>
        ) : (
          <div className="success-message">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
              <path d="M22 4L12 14.01L9 11.01" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Thank you! We'll notify you when we launch.</span>
          </div>
        )}
        
        <p className="contact-text">
          Join the Waitlist <br/> 
          <button className="cta-link" onClick={scrollToCTA}>
            Be part of the future of CRM
          </button>
        </p>
      </div>
      
      <div className="hero-visual">
        {/* AI Core Visualization */}
        <div className="ai-core-container">
          <div className="ai-core">
            <div className="core-inner-glow"></div>
            <div className="core-inner-ring">
              <div className="core-center"></div>
            </div>
            <div className="core-orbits">
              <div className="core-orbit core-orbit-1">
                <div className="orbit-particle orbit-particle-1"></div>
                <div className="orbit-particle orbit-particle-2"></div>
                <div className="orbit-particle orbit-particle-3"></div>
                <div className="orbit-particle orbit-particle-4"></div>
              </div>
              <div className="core-orbit core-orbit-2">
                <div className="orbit-particle orbit-particle-1"></div>
                <div className="orbit-particle orbit-particle-2"></div>
                <div className="orbit-particle orbit-particle-3"></div>
                <div className="orbit-particle orbit-particle-4"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Nodes */}
        <div className="data-node node-1">
          <div className="node-inner-glow"></div>
        </div>
        <div className="data-node node-2">
          <div className="node-inner-glow"></div>
        </div>
        <div className="data-node node-3">
          <div className="node-inner-glow"></div>
        </div>
        <div className="data-node node-4">
          <div className="node-inner-glow"></div>
        </div>
        
        {/* Connection Lines */}
        <div className="connection-line line-1"></div>
        <div className="connection-line line-2"></div>
        <div className="connection-line line-3"></div>
        <div className="connection-line line-4"></div>
      </div>
    </div>
  );
};

export default Hero;