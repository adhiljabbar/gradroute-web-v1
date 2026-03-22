import React from 'react';
import { Briefcase, Map, ShieldCheck, UserPlus } from 'lucide-react';
import './Immigration.css';

const Immigration = () => {
  return (
    <div className="immigration-page animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1>PR & Immigration Services</h1>
          <p>Seamless pathways to settle globally. We handle the complexities so you can focus on your new life.</p>
        </div>
      </div>

      <div className="container section">
        <div className="immig-grid">
          <div className="immig-card animate-slide-up delay-1">
            <div className="immig-icon"><Map size={40} /></div>
            <h2>Express Entry (Canada)</h2>
            <p>Fast-track your Canadian Permanent Residency. We assist in Profile Creation, CRS Score Optimization, and ITA documentation for seamless processing.</p>
          </div>

          <div className="immig-card animate-slide-up delay-2">
            <div className="immig-icon"><Briefcase size={40} /></div>
            <h2>Skilled Worker Visas</h2>
            <p>Whether it's Australia's Subclass 189/190 or the UK's Tier 2 Worker Visa, our migration experts guide professionals through precise skill assessment protocols.</p>
          </div>

          <div className="immig-card animate-slide-up delay-3">
            <div className="immig-icon"><UserPlus size={40} /></div>
            <h2>Family Sponsorship</h2>
            <p>Reunite with your loved ones. We provide meticulous paperwork handling for Spouse, Parent, and Dependent Child sponsorship visas across all major destinations.</p>
          </div>

          <div className="immig-card animate-slide-up delay-4">
            <div className="immig-icon"><ShieldCheck size={40} /></div>
            <h2>Legal & Compliance Checking</h2>
            <p>Strict internal auditing by licensed immigration attorneys to ensure your applications are error-free, maximizing your chances of instant approval.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Immigration;
