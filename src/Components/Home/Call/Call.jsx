import React from 'react';
import './Call.css';

const Call = () => {
  return (
    <section className="call-section">
      <div className="call-background">
        <div className="call-grid"></div>
        <div className="call-glow"></div>
      </div>
      
      <div className="call-content">
        <h2 className="call-headline">
          Be Part of the Future of <span className="call-gradient-text">CRM</span>
        </h2>
        
        <p className="call-subtext">
          If you're facing these challenges, join our waitlist and we'll connect to learn more.
        </p>
        
        <button className="call-button">
          Join the Waitlist
          <span className="call-button-glow"></span>
        </button>
      </div>
    </section>
  );
};

export default Call;
