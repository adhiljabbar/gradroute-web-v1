import React from 'react';
import { Link } from 'react-router-dom';
import { Banknote, Landmark, BookOpen, GraduationCap } from 'lucide-react';
import './Scholarships.css';

const Scholarships = () => {
  return (
    <div className="scholarships-page animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1>Education Loans & Scholarships</h1>
          <p>Financial barriers should never stop your dreams. Explore Kerala Government schemes, exclusive international scholarships, and seamless student loans.</p>
        </div>
      </div>

      <div className="container section">
        
        {/* Kerala Gov Schemes Section */}
        <div className="mb-80">
          <h2 className="section-title text-center animate-slide-up delay-1">Kerala Government Schemes (2024-2025)</h2>
          <p className="section-subtitle text-center mx-auto animate-slide-up delay-1">We provide specialized documentation assistance for students applying to major structural state schemes.</p>
          
          <div className="scholarship-grid">
            <div className="schol-card animate-slide-up delay-2">
              <div className="s-icon"><Landmark size={32} /></div>
              <h3>OBC Overseas Scholarship</h3>
              <p>Administered by the Backward Classes Development Department (BCDD), offering up to <strong>₹10,00,000</strong> for postgraduate or research studies abroad. Eligibility requires Kerala residency and 60% in the qualifying degree.</p>
            </div>
            <div className="schol-card animate-slide-up delay-3">
              <div className="s-icon"><Landmark size={32} /></div>
              <h3>Unnathi Scholarship (SC/ST)</h3>
              <p>Administered by the SC/ST Development Department, providing up to a massive <strong>₹25,00,000</strong> to empower SC/ST students from Kerala. It covers tuition, living expenses, visas, and air travel.</p>
            </div>
          </div>
        </div>

        {/* Global Scholarships */}
        <div className="global-schol-section animate-slide-up delay-2 mb-80">
          <div className="global-content">
            <h2>International Fellowships</h2>
            <ul className="global-list">
              <li>
                <div className="g-icon"><GraduationCap size={24} /></div>
                <div>
                  <h4>Erasmus Mundus (Europe)</h4>
                  <p>Fully funded flagship Master's programs spanning multiple European countries.</p>
                </div>
              </li>
              <li>
                <div className="g-icon"><BookOpen size={24} /></div>
                <div>
                  <h4>DAAD Scholarship (Germany)</h4>
                  <p>Extensive monthly stipends for international graduates studying in Germany.</p>
                </div>
              </li>
              <li>
                <div className="g-icon"><GraduationCap size={24} /></div>
                <div>
                  <h4>Commonwealth Scholarships</h4>
                  <p>Highly prestigious funding for postgraduate studies specifically in the UK, Canada, and Australia.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="global-image"></div>
        </div>

        {/* Education Loans */}
        <div className="loans-cta-box animate-slide-up delay-1">
          <div className="loans-text">
            <h2><Banknote size={36} className="inline-icon"/> Hassle-Free Education Loans</h2>
            <p>We hold direct partnerships with major banks across Kerala (SBI, Federal Bank, HDFC, South Indian Bank, and NBFCs). Our financial advisors will help you structure your collaterals and guarantee letters to ensure extremely fast loan sanctioning, enabling quick visa processing.</p>
            <Link to="/contact" className="btn btn-primary mt-20">Get Financial Assessment</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Scholarships;
