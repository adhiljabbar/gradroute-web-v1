import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, BookOpen, Briefcase, Map, Users, Banknote } from 'lucide-react';
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
                
                {/* Column 1: Core */}
                <div className="mega-column">
                  <h3 className="mega-col-title">Core Services</h3>
                  <Link to="/services" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    <div className="mega-icon"><Globe size={24} /></div>
                    <div className="mega-text"><h4>Study Abroad</h4><p>Admissions & counseling</p></div>
                  </Link>
                  <Link to="/test-prep" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    <div className="mega-icon"><BookOpen size={24} /></div>
                    <div className="mega-text"><h4>Test Preparation</h4><p>IELTS, TOEFL, PTE & GRE</p></div>
                  </Link>
                </div>

                {/* Column 2: Visas & Maps */}
                <div className="mega-column">
                  <h3 className="mega-col-title">Visas & Reach</h3>
                  <Link to="/immigration" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    <div className="mega-icon"><Briefcase size={24} /></div>
                    <div className="mega-text"><h4>Immigration & PR</h4><p>Express Entry & Skilled Worker</p></div>
                  </Link>
                  <Link to="/destinations" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    <div className="mega-icon"><Map size={24} /></div>
                    <div className="mega-text"><h4>Global Destinations</h4><p>UK, Canada, Europe & more</p></div>
                  </Link>
                </div>

                {/* Column 3: Kerala & Funding */}
                <div className="mega-column">
                  <h3 className="mega-col-title">Special Resources</h3>
                  <Link to="/kerala" className="dropdown-item highlight-item" onClick={() => setIsOpen(false)}>
                    <div className="mega-icon"><Users size={24} /></div>
                    <div className="mega-text"><h4>Kerala Students</h4><p>Trending courses & ROI</p></div>
                  </Link>
                  <Link to="/scholarships" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    <div className="mega-icon"><Banknote size={24} /></div>
                    <div className="mega-text"><h4>Loans & Funding</h4><p>Gov schemes & DAAD</p></div>
                  </Link>
                </div>

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
