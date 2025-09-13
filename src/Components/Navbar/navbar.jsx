import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleWaitlistClick = () => {
    // Scroll to the waitlist form in the hero section
    const waitlistForm = document.getElementById('waitlist-form');
    if (waitlistForm) {
      waitlistForm.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        {/* Left Section - Logo */}
        <div className="logo-container">
          <NavLink to="/" className="logo-link">
            <h1 className='logo-text'>Outcom.ai</h1>
          </NavLink>
        </div>

        {/* Middle Section - Navigation (Desktop) */}
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link" end>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/career" className="nav-link">
                Careers
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Section - Actions (Desktop) */}
        <div className="actions-container">
          <button className="waitlist-btn" onClick={handleWaitlistClick}>
            <span className="notify-icon">🔔</span>
            Join Waitlist
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="hamburger-container">
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            <li>
              <NavLink 
                to="/" 
                className="nav-link" 
                end 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/blog" 
                className="nav-link" 
                end 
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/career" 
                className="nav-link" 
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </NavLink>
            </li>
          </ul>
          <div className="mobile-actions">
            <button className="waitlist-btn" onClick={handleWaitlistClick}>
              <span className="notify-icon">🔔</span>
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;