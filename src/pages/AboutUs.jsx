import React from 'react';
import { Target, Award, Heart } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1>About GradRoute</h1>
          <p>Bridging the gap between local talent and global opportunities.</p>
        </div>
      </div>

      <div className="container section">
        <div className="about-content animate-slide-up delay-1">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>GradRoute was founded with a singular vision: to make international education accessible and straightforward for ambitious students and professionals. Over the years, we have grown into a premier consultancy, helping thousands navigate the complex process of studying and migrating abroad.</p>
            <p>Our modern, tech-forward approach combined with deep industry expertise positions us uniquely to offer personalized, reliable, and transparent services. We change the lives of millions of students, enabling them to explore all their study options in one place and to find the best fit study programme that matches their needs, goals, and preferences.</p>
            <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-navy)' }}>Rated 4.5/5 on Trustpilot</span>
              <span style={{ color: '#00b67a', fontSize: '1.5rem', letterSpacing: '2px' }}>★★★★★</span>
            </div>
          </div>
          <div className="about-image"></div>
        </div>
      </div>

      <div className="values-section bg-light section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card animate-slide-up delay-1">
              <div className="value-icon"><Target size={40} /></div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every application, ensuring the highest standards of quality and attention to detail.</p>
            </div>
            <div className="value-card animate-slide-up delay-2">
              <div className="value-icon"><Heart size={40} /></div>
              <h3>Empathetic Guidance</h3>
              <p>We understand the anxiety of moving abroad. Our counselors provide empathetic, personalized support tailored to your unique situation.</p>
            </div>
            <div className="value-card animate-slide-up delay-3">
              <div className="value-icon"><Award size={40} /></div>
              <h3>Transparency</h3>
              <p>Honesty is at the heart of what we do. We provide clear, realistic expectations without false promises.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
