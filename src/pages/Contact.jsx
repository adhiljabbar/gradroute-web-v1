import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    destination: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will contact you soon.");
    setFormData({ name: '', email: '', phone: '', qualification: '', destination: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Start your journey today. Our experts are ready to guide you.</p>
        </div>
      </div>

      <div className="container section">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="info-subtitle">Reach out to us for any queries regarding study abroad programs, visas, or PR immigration services.</p>
            
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h3>Phone</h3>
                <p>+7994998145</p>
              </div>
            </div>
            
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h3>Email</h3>
                <p>gradroute20@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h3>Office</h3>
                <p>Global Education Hub, Main Street</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Book a Free Consultation</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="qualification" placeholder="Current Qualification (e.g., BSc Nursing, BTech IT)" value={formData.qualification} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <select name="destination" value={formData.destination} onChange={handleChange} required>
                  <option value="" disabled>Preferred Destination</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Additional Notes or Questions" rows="4" value={formData.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
