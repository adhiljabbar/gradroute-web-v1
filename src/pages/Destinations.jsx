import React from 'react';
import './Destinations.css';

const Destinations = () => {
  return (
    <div className="destinations-page animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1>Study Destinations</h1>
          <p>Explore top countries for your international education.</p>
        </div>
      </div>

      <div className="container section">
        <div className="destination-detail animate-slide-up delay-1" id="uk">
          <div className="dest-image-large uk-bg"></div>
          <div className="dest-info">
            <h2>Study in the UK</h2>
            <p>The UK offers world-renowned education with a rich history and diverse culture. Known for shorter duration programs (1-year Master's), it's a cost-effective and highly respected destination.</p>
            <h3>General Requirements:</h3>
            <ul>
              <li>Valid Passport</li>
              <li>Academic Transcripts & Certificates</li>
              <li>IELTS/TOEFL Scores (usually 6.0 - 7.0)</li>
              <li>Statement of Purpose (SOP)</li>
              <li>Letters of Recommendation (LOR)</li>
            </ul>
          </div>
        </div>

        <div className="destination-detail reverse animate-slide-up delay-1" id="usa">
          <div className="dest-image-large usa-bg"></div>
          <div className="dest-info">
            <h2>Study in the USA</h2>
            <p>The USA boasts the largest number of top-ranked universities in the world. It offers unparalleled flexibility in education and cutting-edge research opportunities.</p>
            <h3>General Requirements:</h3>
            <ul>
              <li>Valid Passport</li>
              <li>Academic Transcripts & Certificates</li>
              <li>GRE/GMAT for Master's, SAT/ACT for Undergrad</li>
              <li>IELTS/TOEFL Scores</li>
              <li>SOP & LORs</li>
            </ul>
          </div>
        </div>

        <div className="destination-detail animate-slide-up delay-1" id="canada">
          <div className="dest-image-large canada-bg"></div>
          <div className="dest-info">
            <h2>Study in Canada</h2>
            <p>Canada is highly sought after for its high quality of life, affordable tuition fees, and excellent post-study work opportunities, making it a prime destination for PR immigration.</p>
            <h3>General Requirements:</h3>
            <ul>
              <li>Valid Passport</li>
              <li>Academic Transcripts</li>
              <li>IELTS Scores (usually 6.5 minimum)</li>
              <li>Proof of Funds (GIC)</li>
              <li>SOP</li>
            </ul>
          </div>
        </div>

        <div className="destination-detail reverse animate-slide-up delay-1" id="aus">
          <div className="dest-image-large aus-bg"></div>
          <div className="dest-info">
            <h2>Study in Australia</h2>
            <p>Australia is known for its friendly laid-back nature, excellent education system, and high standard of living. It's particularly strong in technology, engineering, and nursing fields.</p>
            <h3>General Requirements:</h3>
            <ul>
              <li>Valid Passport</li>
              <li>Academic Transcripts</li>
              <li>IELTS/PTE Scores</li>
              <li>Overseas Student Health Cover (OSHC)</li>
              <li>Genuine Temporary Entrant (GTE) statement</li>
            </ul>
          </div>
        </div>

        <div className="destination-detail animate-slide-up delay-1" id="germany">
          <div className="dest-image-large germany-bg-large"></div>
          <div className="dest-info">
            <h2>Study in Germany</h2>
            <p>Germany is famous for its nearly free education system at public universities and world-class engineering and IT programs. Fast becoming a top choice for international students.</p>
            <h3>General Requirements:</h3>
            <ul>
              <li>Valid Passport</li>
              <li>Studienkolleg (for UG) or Recognized Bachelor's</li>
              <li>German Proficiency (TestDaF/DSH) or IELTS for English tracks</li>
              <li>Blocked Account for Proof of Funds</li>
              <li>Letter of Motivation (LOM)</li>
            </ul>
          </div>
        </div>

        <div className="destination-detail reverse animate-slide-up delay-1" id="nz">
          <div className="dest-image-large nz-bg-large"></div>
          <div className="dest-info">
            <h2>Study in New Zealand</h2>
            <p>New Zealand offers a pristine environment, incredibly safe cities, and a progressive education model. It is very welcoming to international students, offering great post-study work visas.</p>
            <h3>General Requirements:</h3>
            <ul>
              <li>Valid Passport</li>
              <li>Academic Transcripts</li>
              <li>IELTS/PTE Scores</li>
              <li>Proof of Funds</li>
              <li>Police Clearance Certificate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
