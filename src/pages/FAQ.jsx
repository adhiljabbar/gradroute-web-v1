import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Which countries do you provide services for?",
      answer: "We primarily assist students and professionals aiming for the UK, USA, Canada, Australia, Germany, and New Zealand. Our team is well-versed in the unique requirements of each destination."
    },
    {
      question: "Do you offer IELTS/TOEFL coaching?",
      answer: "Yes, we provide comprehensive test preparation for IELTS, TOEFL, PTE, GRE, and GMAT, tailored to help you meet the specific requirements of your chosen university."
    },
    {
      question: "What is the typical visa processing time?",
      answer: "Visa processing times vary significantly by country and visa type. For example, UK student visas may take 3-4 weeks, while Canadian PR processing can take 6 months to a year. We guide you on accurate timelines during consultation."
    },
    {
      question: "Do you assist with Permanent Residency (PR)?",
      answer: "Absolutely! We focus heavily on major immigration pathways like Canada's Express Entry, Australia's Skilled Worker programs, and UK professional visas."
    },
    {
      question: "Is the initial consultation free?",
      answer: "Yes, our first 30-minute consultation is completely free. We use this time to assess your profile and understand your goals before recommending a pathway."
    }
  ];

  return (
    <div className="faq-page animate-slide-up">
      <div className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to the most common queries about studying and moving abroad.</p>
        </div>
      </div>

      <div className="container section">
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item animate-slide-up delay-${(index % 5) + 1} ${activeIndex === index ? 'active' : ''}`}
            >
              <div 
                className="faq-question" 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <h3>{faq.question}</h3>
                {activeIndex === index ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
