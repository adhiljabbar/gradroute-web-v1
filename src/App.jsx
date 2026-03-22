import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Destinations from './pages/Destinations';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import TestPrep from './pages/TestPrep';
import FAQ from './pages/FAQ';
import DestinationDetail from './pages/DestinationDetail';
import KeralaStudyAbroad from './pages/KeralaStudyAbroad';
import Scholarships from './pages/Scholarships';
import Immigration from './pages/Immigration';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test-prep" element={<TestPrep />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/kerala" element={<KeralaStudyAbroad />} />
          <Route path="/scholarships" element={<Scholarships />} />
        </Routes>
      </main>
      <Footer />
      {/* WhatsApp Widget */}
      <a href="https://wa.me/917994998145" className="whatsapp-widget" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.97 2.03C6.47 2.03 2 6.51 2 12.03c0 1.77.47 3.43 1.28 4.9L2 22l5.22-1.3c1.43.76 3.06 1.19 4.75 1.19 5.5 0 9.97-4.48 9.97-10S17.47 2.03 11.97 2.03zM17.43 16s-.29.69-1.42 1.13c-1.13.44-2.22.46-3.15.17-1.14-.37-2.61-1.07-4.52-2.9-1.84-1.78-2.67-3.37-2.92-4.51-.25-1.12.06-2.14.73-2.65.65-.51 1.09-.5 1.45-.46.36.03.7.07.96.65.26.58.79 1.94.88 2.12.09.18.15.39.04.6-.11.23-.33.45-.59.72-.21.21-.44.46-.2.87.24.42 1.05 1.75 2.27 2.83 1.57 1.39 2.87 1.83 3.29 2.03.42.19.67.16.92-.12.25-.28 1.03-1.2 1.31-1.61.28-.41.56-.34.95-.2.39.14 2.45 1.16 2.87 1.36.42.21.7.32.8.49.1.18.1.98-.31 1.63z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
