import React from 'react';
import { Link } from 'react-router-dom';
import { Target, HeartPulse, Laptop, Euro, ArrowRight } from 'lucide-react';
import './KeralaStudyAbroad.css';

const KeralaStudyAbroad = () => {
  return (
    <div className="kerala-page animate-slide-up">
      <div className="kerala-hero">
        <div className="container">
          <h1 className="animate-slide-up">Kerala's Most Trusted Study Abroad Consultants</h1>
          <p className="animate-slide-up delay-1">Empowering Malayali students to build global careers with high-ROI courses and seamless PR pathways.</p>
          <Link to="/contact" className="btn btn-primary btn-lg mt-30 animate-slide-up delay-2">Speak to a Kerala Expert</Link>
        </div>
      </div>

      <div className="container section">
        <div className="text-center mb-60">
          <h2 className="section-title">Trending Courses for Kerala Students (2024-2025)</h2>
          <p className="section-subtitle mx-auto">We focus on courses that offer the absolute highest Return on Investment (ROI) and immediate global employability.</p>
        </div>

        <div className="kerala-courses-grid">
          <div className="course-card animate-slide-up delay-1">
            <div className="c-icon"><HeartPulse size={36} /></div>
            <h3>Nursing & Healthcare</h3>
            <p>Massive global shortages have made Nursing, Physiotherapy, and Public Health the #1 pathway for Keralites to secure quick permanent residency, especially in the UK, Australia, and Canada.</p>
          </div>
          
          <div className="course-card animate-slide-up delay-2">
            <div className="c-icon"><Laptop size={36} /></div>
            <h3>STEM & Data Science</h3>
            <p>High tech demand across Europe and the US makes AI, Machine Learning, Cyber Security, and Software Engineering incredibly lucrative. These fields command the highest starting salaries globally.</p>
          </div>

          <div className="course-card animate-slide-up delay-3">
            <div className="c-icon"><Target size={36} /></div>
            <h3>Engineering & Management</h3>
            <p>Traditional strongholds for Kerala students. Mechanical and Sustainable Engineering in Germany, coupled with global MBAs and FinTech degrees in Ireland and the UK, offer exceptional ROI.</p>
          </div>
        </div>

        <div className="kerala-europe-section animate-slide-up mt-80">
          <div className="europe-content">
            <h2>The European Advantage</h2>
            <p>While traditional countries remain popular, highly ambitious Keralite students are rapidly shifting towards emerging European powerhouses for better ROI.</p>
            <ul className="europe-list">
              <li><Euro size={20} className="e-icon"/> <strong>Germany:</strong> World-class Engineering & IT with zero or incredibly low tuition fees at public universities.</li>
              <li><Euro size={20} className="e-icon"/> <strong>Ireland:</strong> The tech and pharma hub of Europe offering a 2-year stay-back visa.</li>
              <li><Euro size={20} className="e-icon"/> <strong>Emerging Markets:</strong> Malta, Sweden, and Lithuania offer incredible affordability, English-taught programs, and easy entry points into the Schengen zone.</li>
            </ul>
            <Link to="/destinations" className="europe-link">Explore all our destinations <ArrowRight size={18} /></Link>
          </div>
          <div className="europe-image"></div>
        </div>
      </div>
    </div>
  );
};

export default KeralaStudyAbroad;
