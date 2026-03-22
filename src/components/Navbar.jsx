import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, BookOpen, Briefcase } from 'lucide-react';
import logo from '../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="GradRoute" className="logo-img" />
        </Link>
        
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <div className="nav-item-wrapper dropdown-container">
            <span className="nav-item">Services <ChevronDown size={18} style={{ marginTop: '2px' }} /></span>
            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                <Link to="/services" className="dropdown-item" onClick={() => setIsOpen(false)}>
                  <div className="mega-icon"><Globe size={28} /></div>
                  <div className="mega-text">
                    <h4>Study Abroad</h4>
                    <p>University admissions, counseling & visa guidance</p>
                  </div>
                </Link>
                <Link to="/test-prep" className="dropdown-item" onClick={() => setIsOpen(false)}>
                  <div className="mega-icon"><BookOpen size={28} /></div>
                  <div className="mega-text">
                    <h4>Test Preparation</h4>
                    <p>High-yield IELTS, TOEFL, PTE & GRE coaching</p>
                  </div>
                </Link>
                <Link to="/immigration" className="dropdown-item" onClick={() => setIsOpen(false)}>
                  <div className="mega-icon"><Briefcase size={28} /></div>
                  <div className="mega-text">
                    <h4>Immigration & PR</h4>
                    <p>Express Entry, Skilled Worker & Family Sponsorship</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/destinations" className="nav-item" onClick={() => setIsOpen(false)}>Destinations</Link>
          <Link to="/faq" className="nav-item" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/about" className="nav-item" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="nav-contact-btn" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
