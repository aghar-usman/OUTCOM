import React, { useState, useEffect } from 'react';
import './Proof.css';

const Proof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Bad data has been our Achilles' heel.",
      attribution: "Sales Ops Manager, Fortune 500 Tech Co."
    },
    {
      quote: "We spend 25–30% of our time fixing data. We can't wait for OutCom.AI.",
      attribution: "VP, Revenue Ops, SaaS Scale-Up"
    },
    {
      quote: "Forecasts miss more often than hit because my data is broken.",
      attribution: "VP Sales, Enterprise SaaS"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="proof-section">
      {/* Background elements */}
      <div className="proof-background">
        <div className="proof-grid-bg"></div>
        <div className="proof-glow"></div>
        <div className="proof-particles">
          <div className="proof-particle"></div>
          <div className="proof-particle"></div>
          <div className="proof-particle"></div>
          <div className="proof-particle"></div>
        </div>
      </div>
      
      <div className="proof-container">
        <div className="proof-header">
          <h2 className="proof-title">Early Voices</h2>
          <p className="proof-subtext">
            Hear from industry leaders who have experienced the impact of data quality issues firsthand.
          </p>
        </div>
        
        <div className="proof-carousel">
          <div className="carousel-content">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`testimonial-card ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="quote-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21H6.75C5.23122 21 4 19.7688 4 18.25V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-attribution">— {testimonial.attribution}</p>
              </div>
            ))}
          </div>
          
          <div className="carousel-controls">
            <button className="carousel-button prev" onClick={prevTestimonial}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button className="carousel-button next" onClick={nextTestimonial}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;