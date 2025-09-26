import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Compliance from './components/Compliance';
import Footer from './components/Footer';
import AgeVerificationModal from './components/AgeVerificationModal'; // Import AgeVerificationModal
import CookieConsentBanner from './components/CookieConsentBanner'; // Import CookieConsentBanner
import PrivacyPolicy from './pages/PrivacyPolicy'; // Import PrivacyPolicy
import TermsOfService from './pages/TermsOfService'; // Import TermsOfService
import RefundReturnPolicy from './pages/RefundReturnPolicy'; // Import RefundReturnPolicy

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isAgeVerified, setIsAgeVerified] = useState(false); // New state for age verification

  const handleAgeVerification = () => {
    setIsAgeVerified(true);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'services':
        return <Services setActiveSection={setActiveSection} />; {/* Pass setActiveSection here */}
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'compliance':
        return <Compliance />;
      case 'privacy-policy': // New case for Privacy Policy
        return <PrivacyPolicy />;
      case 'terms-of-service': // New case for Terms of Service
        return <TermsOfService />;
      case 'refund-policy': // New case for Refund & Return Policy
        return <RefundReturnPolicy />;
      default:
        return (
          <>
            <Hero />
            <Services setActiveSection={setActiveSection} /> {/* Pass setActiveSection here */}
            <About />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {!isAgeVerified && <AgeVerificationModal onVerify={handleAgeVerification} />} {/* Render AgeVerificationModal */}
      
      {isAgeVerified && ( // Conditionally render main content
        <>
          <Header activeSection={activeSection} setActiveSection={setActiveSection} />
          <main>
            {renderSection()}
          </main>
          <Footer setActiveSection={setActiveSection} /> {/* Pass setActiveSection to Footer */}
        </>
      )}
      <CookieConsentBanner /> {/* Render CookieConsentBanner */}
    </div>
  );
}

export default App;

