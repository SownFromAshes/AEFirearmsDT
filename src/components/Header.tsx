import React, { useState } from 'react';
import { Flag, Target, Phone, Menu } from 'lucide-react';
import MobileMenu from './MobileMenu'; // Import the new MobileMenu component

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Dennis' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
    { id: 'compliance', label: 'Compliance' },
  ];

  const phoneNumber = '(816) 800-2939'; // Define phone number here

  return (
    <header className="bg-slate-900 shadow-2xl border-b-4 border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveSection('home')}>
            <div className="relative">
              <Target className="h-12 w-12 text-red-600" strokeWidth={3} />
              <Flag className="h-6 w-6 text-white absolute -top-1 -right-1" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-serif">American Eagle</h1>
              <p className="text-red-400 text-sm font-semibold">FIREARMS LLC</p>
            </div>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 text-lg font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-red-400 border-b-2 border-red-400'
                    : 'text-white hover:text-red-300 hover:scale-105'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Phone Number (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 text-white">
            <Phone className="h-5 w-5 text-red-400" />
            <span className="text-lg font-semibold">(816) 800-2939</span>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <button
            className="md:hidden text-white hover:text-red-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        setActiveSection={setActiveSection}
        navItems={navItems}
        phoneNumber={phoneNumber} // Pass phone number to MobileMenu
      />
    </header>
  );
};

export default Header;

