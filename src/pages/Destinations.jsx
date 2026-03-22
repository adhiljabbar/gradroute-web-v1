import React from 'react';
import { Link } from 'react-router-dom';
import { destinationsData } from '../data/destinationsData';
import './Destinations.css';

const Destinations = () => {
  const targets = Object.values(destinationsData);

  return (
    <div className="destinations-page animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1>Study Destinations</h1>
          <p>Explore top countries globally and discover your perfect educational journey.</p>
        </div>
      </div>

      <div className="container section">
        <div className="hub-grid">
          {targets.map((dest, i) => (
            <div key={dest.id} className={`hub-card animate-slide-up delay-${(i % 5) + 1}`}>
              <div 
                className="hub-image" 
                style={{ backgroundImage: `url(${dest.heroImage})` }}
              >
                <div className="hub-overlay">
                  <Link to={`/destinations/${dest.id}`} className="btn btn-primary">Discover {dest.name}</Link>
                </div>
              </div>
              <div className="hub-info">
                <h2>{dest.name}</h2>
                <p>{dest.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
