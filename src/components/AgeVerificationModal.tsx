import React, { useState, useEffect } from 'react';

const AGE_VERIFICATION_KEY = 'ageVerified';
const AGE_VERIFICATION_EXPIRY_DAYS = 30;

interface AgeVerificationModalProps {
  onVerify: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ onVerify }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedVerification = localStorage.getItem(AGE_VERIFICATION_KEY);
    if (storedVerification) {
      const { timestamp } = JSON.parse(storedVerification);
      const now = new Date().getTime();
      if (now - timestamp < AGE_VERIFICATION_EXPIRY_DAYS * 24 * 60 * 60 * 1000) {
        onVerify(); // Already verified and not expired
        return;
      }
    }
    setIsVisible(true); // Show modal if not verified or expired
  }, [onVerify]);

  const handleLegalAge = () => {
    const verificationData = {
      timestamp: new Date().getTime(),
      verified: true,
    };
    localStorage.setItem(AGE_VERIFICATION_KEY, JSON.stringify(verificationData));
    setIsVisible(false);
    onVerify();
  };

  const handleExitSite = () => {
    window.location.href = 'about:blank'; // Redirect to a blank page
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 rounded-lg shadow-2xl p-8 max-w-md w-full text-center border-2 border-red-700">
        <h2 className="text-3xl font-bold text-white mb-6 font-serif">Age Verification</h2>
        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          You must be 21+ (handguns) or 18+ (rifles/shotguns) to enter this site.
          <br />
          Are you of legal age?
        </p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleLegalAge}
            className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold py-3 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Yes, I am of legal age
          </button>
          <button
            onClick={handleExitSite}
            className="w-full bg-slate-700 text-white font-bold py-3 px-6 rounded-full hover:bg-slate-600 transition-colors duration-300 text-lg"
          >
            No, Exit Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationModal;
