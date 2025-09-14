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
        return <Services />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      case 'compliance':
        return <Compliance />;
      default:
        return (
          <>
            <Hero />
            <Services />
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
          <Footer />
        </>
      )}
      <CookieConsentBanner /> {/* Render CookieConsentBanner */}
    </div>
  );
}

export default App;
