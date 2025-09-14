import React, { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'cookieConsent';
const COOKIE_CONSENT_EXPIRY_DAYS = 90;

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent) {
      const { timestamp, status } = JSON.parse(storedConsent);
      const now = new Date().getTime();
      if (now - timestamp < COOKIE_CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
        // Consent still valid
        return;
      }
    }
    setIsVisible(true); // Show banner if no consent or expired
  }, []);

  const setConsent = (status: 'accepted' | 'rejected' | 'managed') => {
    const consentData = {
      timestamp: new Date().getTime(),
      status: status,
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-800 bg-opacity-95 backdrop-blur-sm text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        <p className="text-sm text-center md:text-left">
          We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.
        </p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
          <button
            onClick={() => setConsent('accepted')}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-full transition-colors duration-300 flex-shrink-0"
          >
            Accept All
          </button>
          <button
            onClick={() => setConsent('rejected')}
            className="bg-slate-600 hover:bg-slate-700 text-white text-sm font-semibold py-2 px-4 rounded-full transition-colors duration-300 flex-shrink-0"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={() => setConsent('managed')}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-full transition-colors duration-300 flex-shrink-0"
          >
            Manage Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
