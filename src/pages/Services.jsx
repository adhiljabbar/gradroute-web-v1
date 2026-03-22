import React from 'react';
import { BookOpen, FileText, Globe, LifeBuoy } from 'lucide-react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive support for your international education journey.</p>
        </div>
      </div>
      
      <div className="container section">
        <div className="services-list">
          <div className="service-item animate-slide-up delay-1">
            <div className="service-icon"><BookOpen size={40} /></div>
            <div className="service-content">
              <h2>Educational Counseling</h2>
              <p>Our expert counselors work closely with you to understand your academic background, career aspirations, and personal preferences to recommend the best universities and courses.</p>
            </div>
          </div>
          
          <div className="service-item reverse animate-slide-up delay-2">
            <div className="service-icon"><FileText size={40} /></div>
            <div className="service-content">
              <h2>SOP & Resume Guidance</h2>
              <p>A strong Statement of Purpose is crucial for admissions. We help you draft, review, and refine your SOPs and resumes to ensure they highlight your strengths and align with university expectations.</p>
            </div>
          </div>
          
          <div className="service-item animate-slide-up delay-3">
            <div className="service-icon"><Globe size={40} /></div>
            <div className="service-content">
              <h2>Visa Assistance</h2>
              <p>Navigating visa requirements can be daunting. We provide end-to-end visa assistance, from document preparation to mock interviews, ensuring a smooth and successful application process.</p>
            </div>
          </div>
          
          <div className="service-item reverse animate-slide-up delay-4">
            <div className="service-icon"><LifeBuoy size={40} /></div>
            <div className="service-content">
              <h2>Post-arrival Support</h2>
              <p>Our relationship doesn't end when you get your visa. We assist with accommodation, airport pickups, and getting settled in your new country so you can focus on your studies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
