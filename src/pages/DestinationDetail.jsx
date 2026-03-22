import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { destinationsData } from '../data/destinationsData';
import { CheckCircle, Award, Landmark, Wallet, ArrowLeft } from 'lucide-react';
import './DestinationDetail.css';

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinationsData[id];

  if (!destination) {
    return <Navigate to="/destinations" />;
  }

  return (
    <div className="destination-detail-page animate-slide-up">
      {/* Hero Header */}
      <div 
        className="dest-hero" 
        style={{ backgroundImage: `linear-gradient(rgba(15, 28, 63, 0.7), rgba(0, 180, 216, 0.6)), url(${destination.heroImage})` }}
      >
        <div className="container">
          <Link to="/destinations" className="back-link"><ArrowLeft size={18} /> Back to Destinations</Link>
          <h1 className="animate-slide-up delay-1">Study in {destination.name}</h1>
          <p className="animate-slide-up delay-2">{destination.subtitle}</p>
        </div>
      </div>

      <div className="container section">
        <div className="dest-detail-grid">
          
          {/* Main Content */}
          <div className="dest-main animate-slide-up delay-1">
            <h2>Overview</h2>
            <p className="dest-overview-text">{destination.description}</p>
            
            <h2 className="mt-40">Why Study in {destination.name}?</h2>
            <div className="why-study-grid">
              {destination.whyStudy.map((item, index) => (
                <div key={index} className="why-study-card">
                  <div className="ws-icon"><Award size={24} /></div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-40">Top Programs</h2>
            <div className="programs-tags">
              {destination.topPrograms.map((program, i) => (
                <span key={i} className="program-tag">{program}</span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="dest-sidebar animate-slide-up delay-2">
            <div className="sidebar-card">
              <h3><CheckCircle size={22} /> Key Requirements</h3>
              <ul className="req-list">
                {destination.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card mt-30">
              <h3><Wallet size={22} /> Cost of Living</h3>
              <p className="cost-text">{destination.costOfLiving}</p>
            </div>

            <div className="sidebar-card consultation-card mt-30">
              <h3><Landmark size={22} /> Ready to Apply?</h3>
              <p>Let our expert counselors perfectly craft your {destination.name} application.</p>
              <Link to="/contact" className="btn btn-primary w-100" style={{marginTop: '15px'}}>Book Free Counseling</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
