import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="GradRoute" className="logo-img" />
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/services" className="nav-item">Services</Link>
          <Link to="/destinations" className="nav-item">Destinations</Link>
          <Link to="/about" className="nav-item">About Us</Link>
          <Link to="/contact" className="nav-contact-btn">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
