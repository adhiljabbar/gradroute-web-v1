import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>GradRoute</h3>
          <p>Navigate Your Future. International Education & Immigration Consultancy.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/services">Services</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Phone: +7994998145</p>
          <p>Email: gradroute20@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GradRoute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
