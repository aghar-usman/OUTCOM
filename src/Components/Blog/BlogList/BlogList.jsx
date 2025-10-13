import React, { useEffect, useState } from 'react';
import './BlogList.css';

const BlogList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Mastering Google Tag Manager",
      excerpt: "Learn how to implement and manage GTM like a pro with our comprehensive guide.",
      category: "GTM",
      date: "April 12, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Outcom AI: Revolutionizing Marketing Analytics",
      excerpt: "Discover how Outcom AI is changing the game for marketers with predictive analytics.",
      category: "Outcom AI",
      date: "April 8, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Top 10 Free Analytics Tools",
      excerpt: "Explore the best free tools available for tracking and optimizing your marketing efforts.",
      category: "Free Tools",
      date: "April 5, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "GTM Server-Side Tracking",
      excerpt: "Step-by-step guide to implementing server-side tracking with Google Tag Manager.",
      category: "GTM",
      date: "March 28, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "How Outcom AI Predicts Customer Behavior",
      excerpt: "Deep dive into the machine learning algorithms that power Outcom AI's predictive capabilities.",
      category: "Outcom AI",
      date: "March 22, 2024",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Free Alternatives to Premium Tools",
      excerpt: "Discover powerful free alternatives to expensive marketing software.",
      category: "Free Tools",
      date: "March 15, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1463194537334-3940784aa69a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Initialize component
  useEffect(() => {
    setIsVisible(true);
    
    // Create particles
    const particlesContainer = document.querySelector('.blog-list-particles');
    if (particlesContainer) {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'blog-list-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.width = `${Math.random() * 3 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
      }
    }

    // Mouse move effect for cards
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--x', `${x}%`);
        card.style.setProperty('--y', `${y}%`);
      });
    });
  }, []);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine which posts to show based on state
  const visiblePosts = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section className={`blog-list-section ${isVisible ? 'blog-list-visible' : ''}`}>
      <div className="blog-list-background">
        <div className="blog-list-grid"></div>
        <div className="blog-list-glow"></div>
        <div className="blog-list-particles"></div>
      </div>
      
      <div className="blog-list-content">
        <header className="blog-list-header">
          <div className="blog-list-badge">
            <span>📊</span>
            GTM & Analytics
          </div>
          <h1 className="blog-list-title">Marketing Insights</h1>
          <p className="blog-list-subtitle">
            Expert articles on Google Tag Manager, Outcom AI, and free marketing tools to optimize your analytics strategy.
          </p>
        </header>

        {/* Regular grid for all articles */}
        <div className="blog-list-container">
          {visiblePosts.map((post, index) => (
            <article key={post.id} className="blog-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="blog-card-hover-effect"></div>
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-card-category">{post.category}</div>
              </div>
              <div className="blog-card-content">
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span className="blog-card-date">{post.date}</span>
                  <span className="blog-card-read-time">{post.readTime}</span>
                </div>
              </div>
              <div className="blog-card-actions">
                <a href="#" className="blog-card-read-btn">Read Article</a>
                <button className="blog-card-bookmark-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
        
        {/* View More Toggle */}
        {blogPosts.length > 3 && (
          <div className="blog-list-toggle">
            <button className="blog-list-toggle-btn" onClick={toggleShowAll}>
              {showAll ? 'Show Less' : 'View More Articles'}
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={showAll ? 'rotated' : ''}
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}
        
        <footer className="blog-list-footer">
          <p className="blog-list-footer-text">
            Need help with implementation? <a href="#" className="blog-list-footer-link">Contact our experts</a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default BlogList;
