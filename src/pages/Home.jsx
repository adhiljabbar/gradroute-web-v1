import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, BookOpen } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="hero-content animate-slide-up">
            <h1 className="hero-title">Navigate Your Future with Confidence</h1>
            <p className="hero-subtitle">
              Your trusted partner for international education and immigration to the UK, USA, Canada, Australia, Germany, and New Zealand.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg delay-1">
              Start Your Journey <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats-grid animate-slide-up delay-1">
          <div className="stat-card">
            <h2 className="stat-number">16k+</h2>
            <p className="stat-label">Students Guided</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number">6+</h2>
            <p className="stat-label">Top Destinations</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number">98%</h2>
            <p className="stat-label">Visa Success Rate</p>
          </div>
          <div className="stat-card">
            <h2 className="stat-number">10+</h2>
            <p className="stat-label">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-us-section bg-light">
        <div className="container">
          <h2 className="section-title animate-slide-up">Why Choose GradRoute?</h2>
          <p className="section-subtitle animate-slide-up delay-1">We bridge the gap between local talent and global opportunities through personalized guidance.</p>
          
          <div className="features-grid">
            <div className="feature-card animate-slide-up delay-1">
              <div className="feature-icon"><Users size={32} /></div>
              <h3>Personalized Counseling</h3>
              <p>One-on-one sessions to understand your goals and map out the perfect educational journey tailored just for you.</p>
            </div>
            <div className="feature-card animate-slide-up delay-2">
              <div className="feature-icon"><BookOpen size={32} /></div>
              <h3>SOP Guidance</h3>
              <p>Expert assistance in crafting compelling Statements of Purpose that stand out to university admission committees.</p>
            </div>
            <div className="feature-card animate-slide-up delay-3">
              <div className="feature-icon"><Award size={32} /></div>
              <h3>Visa Assistance</h3>
              <p>End-to-end support for your student visa application, ensuring all documentation is perfect for high success rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="section destinations-section">
        <div className="container">
          <h2 className="section-title animate-slide-up">Top Study Destinations</h2>
          <div className="destinations-grid">
            <div className="destination-card animate-slide-up delay-1">
              <div className="dest-image uk-img"></div>
              <div className="dest-content">
                <h3>United Kingdom</h3>
                <Link to="/destinations#uk">Learn more &rarr;</Link>
              </div>
            </div>
            <div className="destination-card animate-slide-up delay-2">
              <div className="dest-image usa-img"></div>
              <div className="dest-content">
                <h3>United States</h3>
                <Link to="/destinations#usa">Learn more &rarr;</Link>
              </div>
            </div>
            <div className="destination-card animate-slide-up delay-3">
              <div className="dest-image canada-img"></div>
              <div className="dest-content">
                <h3>Canada</h3>
                <Link to="/destinations#canada">Learn more &rarr;</Link>
              </div>
            </div>
            <div className="destination-card animate-slide-up delay-4">
              <div className="dest-image aus-img"></div>
              <div className="dest-content">
                <h3>Australia</h3>
                <Link to="/destinations#aus">Learn more &rarr;</Link>
              </div>
            </div>
            <div className="destination-card animate-slide-up delay-5">
              <div className="dest-image germany-img"></div>
              <div className="dest-content">
                <h3>Germany</h3>
                <Link to="/destinations#germany">Learn more &rarr;</Link>
              </div>
            </div>
            <div className="destination-card animate-slide-up delay-5">
              <div className="dest-image nz-img"></div>
              <div className="dest-content">
                <h3>New Zealand</h3>
                <Link to="/destinations#nz">Learn more &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section animate-slide-up">
        <div className="container text-center">
          <h2>Ready to take the next step?</h2>
          <Link to="/contact" className="btn btn-primary btn-lg mt-4">Book a Free Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
