import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, stats }) => {
  return (
    <div className="blog-hero-container">
      <div className="blog-hero-background">
        <div className="blog-hero-grid"></div>
        <div className="blog-hero-glow"></div>
      </div>
      
      <div className="blog-hero-content">
        <div className="blog-badge">
          <span className="blog-badge-pulse"></span>
          Featured Blog
        </div>
        
        <h1 className="blog-hero-headline">
          {title || 'Insights for Modern Developers'}
          <span className="blog-gradient-text">.</span>
        </h1>
        
        <p className="blog-hero-subtext">
          {subtitle || 'Discover the latest trends, tutorials, and best practices in web development'}
        </p>
        
        <div className="blog-impact-stats">
          {stats && stats.map((stat, index) => (
            <div key={index} className="blog-impact-stat">
              <div className="blog-stat-number">{stat.number}</div>
              <div className="blog-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="blog-hero-visual">
          <div className="blog-content-visualization">
            <div className="blog-content-node blog-content-node-1">
              <div className="blog-content-icon">📝</div>
              <div className="blog-content-text">Articles</div>
            </div>
            <div className="blog-content-node blog-content-node-2">
              <div className="blog-content-icon">🎥</div>
              <div className="blog-content-text">Tutorials</div>
            </div>
            <div className="blog-content-node blog-content-node-3">
              <div className="blog-content-icon">🔍</div>
              <div className="blog-content-text">Research</div>
            </div>
            <div className="blog-content-node blog-content-node-4">
              <div className="blog-content-icon">💡</div>
              <div className="blog-content-text">Insights</div>
            </div>
            
            <div className="blog-content-core">
              <div className="blog-core-inner-glow"></div>
              <div className="blog-core-center">
                <div className="blog-core-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;