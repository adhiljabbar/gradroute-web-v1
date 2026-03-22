import React from 'react';
import { BookOpen, Edit3, Type, CheckSquare, Target } from 'lucide-react';
import './TestPrep.css';

const TestPrep = () => {
  return (
    <div className="test-prep-page animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1>Test Preparation</h1>
          <p>Achieve your target score with our expert-led language and aptitude coaching.</p>
        </div>
      </div>

      <div className="container section">
        <div className="prep-grid">
          <div className="prep-card animate-slide-up delay-1">
            <div className="prep-icon"><Type size={40} /></div>
            <h2>IELTS Coaching</h2>
            <p>Master the International English Language Testing System. Our certified trainers provide extensive practice materials and mock tests to secure a 7.0+ band score.</p>
          </div>

          <div className="prep-card animate-slide-up delay-2">
            <div className="prep-icon"><CheckSquare size={40} /></div>
            <h2>TOEFL Preparation</h2>
            <p>Comprehensive guidance for the Test of English as a Foreign Language. We focus on reading, writing, speaking, and listening strategies for US universities.</p>
          </div>

          <div className="prep-card animate-slide-up delay-3">
            <div className="prep-icon"><Edit3 size={40} /></div>
            <h2>PTE Academic</h2>
            <p>Fast-track your Pearson Test of English preparation with computer-based training modules, immediate scoring feedback, and proven time-management techniques.</p>
          </div>

          <div className="prep-card animate-slide-up delay-4">
            <div className="prep-icon"><Target size={40} /></div>
            <h2>GRE & GMAT</h2>
            <p>Elevate your quantitative and verbal reasoning skills. Ideal for students targeting top-tier Master's and MBA programs across the globe.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPrep;
