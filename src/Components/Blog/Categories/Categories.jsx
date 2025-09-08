import React, { useEffect, useState, useRef } from 'react';
import './Categories.css';

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const particlesContainerRef = useRef(null);

  // Sample categories data
  const categories = [
    {
      id: 1,
      name: "Google Tag Manager",
      slug: "gtm",
      count: 12,
      description: "Learn how to implement and manage GTM like a pro",
      icon: "📊",
      color: "#4285F4"
    },
    {
      id: 2,
      name: "Outcom AI",
      slug: "outcom-ai",
      count: 8,
      description: "Discover how AI is changing marketing analytics",
      icon: "🤖",
      color: "#34A853"
    },
    {
      id: 3,
      name: "Free Tools",
      slug: "free-tools",
      count: 15,
      description: "Explore the best free tools for marketers",
      icon: "🛠️",
      color: "#FBBC05"
    },
    {
      id: 4,
      name: "Analytics",
      slug: "analytics",
      count: 10,
      description: "Deep dive into data analysis techniques",
      icon: "📈",
      color: "#EA4335"
    },
    {
      id: 5,
      name: "Tutorials",
      slug: "tutorials",
      count: 20,
      description: "Step-by-step guides for marketers",
      icon: "🎓",
      color: "#9C27B0"
    },
    {
      id: 6,
      name: "Case Studies",
      slug: "case-studies",
      count: 7,
      description: "Real-world examples of marketing success",
      icon: "📋",
      color: "#FF6D00"
    }
  ];

  // Initialize component
  useEffect(() => {
    setIsVisible(true);
    
    // Create particles
    if (particlesContainerRef.current) {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'categories-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 3 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainerRef.current.appendChild(particle);
      }
    }

    // Cleanup on component unmount
    return () => {
      if (particlesContainerRef.current) {
        particlesContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className={`categories-section ${isVisible ? 'categories-visible' : ''}`}>
      <div className="categories-background">
        <div className="categories-grid"></div>
        <div className="categories-glow"></div>
        <div className="categories-particles" ref={particlesContainerRef}></div>
      </div>
      
      <div className="categories-content">
        <header className="categories-header">
          <div className="categories-badge">
            <span>📚</span>
            Content Library
          </div>
          <h1 className="categories-title">Browse by Category</h1>
          <p className="categories-subtitle">
            Explore our collection of marketing insights organized by topic and expertise area.
          </p>
        </header>

        <div className="categories-filter">
          <button 
            className={`categories-filter-btn ${activeCategory === 'All' ? 'active' : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All Categories
          </button>
          {categories.map(category => (
            <button 
              key={category.id}
              className={`categories-filter-btn ${activeCategory === category.slug ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.slug)}
              style={{ '--category-color': category.color }}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="categories-grid-container">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className="category-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--category-color': category.color
              }}
            >
              <div className="category-card-hover-effect"></div>
              <div className="category-card-header">
                <div className="category-icon" style={{ backgroundColor: `${category.color}20` }}>
                  <span style={{ color: category.color }}>{category.icon}</span>
                </div>
                <span className="category-count">{category.count} articles</span>
              </div>
              <div className="category-card-content">
                <h2 className="category-card-title">{category.name}</h2>
                <p className="category-card-description">{category.description}</p>
              </div>
              <div className="category-card-actions">
                <a href="#" className="category-card-explore-btn">Explore Category</a>
              </div>
            </div>
          ))}
        </div>

        <footer className="categories-footer">
          <p className="categories-footer-text">
            Can't find what you're looking for? <a href="#" className="categories-footer-link">Request a topic</a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Categories;