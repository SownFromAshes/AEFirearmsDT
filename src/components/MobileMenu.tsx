import React from 'react';
import { X, Flag, Target, Phone } from 'lucide-react'; // Import Phone icon

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveSection: (section: string) => void;
  navItems: { id: string; label: string }[];
  phoneNumber: string; // Add phoneNumber prop
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, setActiveSection, navItems, phoneNumber }) => {
  const handleNavigationClick = (id: string) => {
    setActiveSection(id);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="absolute inset-0 bg-slate-900 bg-opacity-95 backdrop-blur-md"></div>
      <div className="relative w-full h-full flex flex-col p-6">
        {/* Header for Mobile Menu */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Target className="h-10 w-10 text-red-600" strokeWidth={3} />
              <Flag className="h-5 w-5 text-white absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white font-serif">American Eagle</h1>
              <p className="text-red-400 text-xs font-semibold">FIREARMS LLC</p>
            </div>
          </div>
          <button onClick={onClose} className="text-white hover:text-red-400 transition-colors">
            <X className="h-8 w-8" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6 flex-grow justify-center items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigationClick(item.id)}
              className="text-white text-3xl font-bold hover:text-red-400 transition-colors font-serif"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Phone Number for Mobile */}
        <div className="text-center mt-8 mb-10">
          <a 
            href={`tel:${phoneNumber.replace(/\D/g, '')}`} // Remove non-digits for tel: link
            className="inline-flex items-center space-x-3 text-white text-2xl font-bold hover:text-red-400 transition-colors"
            onClick={onClose} // Close menu when phone number is clicked
          >
            <Phone className="h-7 w-7 text-red-400" />
            <span>{phoneNumber}</span>
          </a>
        </div>

        {/* Footer for Mobile Menu */}
        <div className="text-center mt-auto"> {/* Use mt-auto to push to bottom */}
          <p className="text-slate-400 text-sm">
            &copy; 2025 American Eagle Firearms LLC. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs mt-1">
            Licensed Federal Firearms Dealer | FFL Compliance Guaranteed
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

