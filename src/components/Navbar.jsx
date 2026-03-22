import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
          <Link to="/services" className="nav-item" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/destinations" className="nav-item" onClick={() => setIsOpen(false)}>Destinations</Link>
          <Link to="/about" className="nav-item" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/contact" className="nav-contact-btn" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
