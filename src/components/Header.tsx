import React from 'react';
import { Flag, Target, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Dennis' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
    { id: 'compliance', label: 'Compliance' },
  ];

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

          {/* Navigation */}
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

          {/* Phone Number */}
          <div className="hidden lg:flex items-center space-x-2 text-white">
            <Phone className="h-5 w-5 text-red-400" />
            <span className="text-lg font-semibold">(555) 123-4567</span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;