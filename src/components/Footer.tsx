import React from 'react';
import { Flag, Phone, Mail, MapPin, Star } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🦅</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">American Eagle Firearms LLC</h3>
                <p className="text-red-400 font-semibold">Master Gunsmith Services</p>
              </div>
            </div>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Proudly serving American firearm enthusiasts with precision craftsmanship, unwavering integrity, 
              and full legal compliance. Every project is a testament to our commitment to excellence and 
              constitutional values.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-slate-300">Trusted Nationwide</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif">Contact Dennis</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400" />
                <span className="text-slate-300">(816) 800-2939</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">dnnthomps4@aol.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-1" />
                <div className="text-slate-300">
                  <p>10890 NE 264Th Street</p>
                  <p>Lathrop, Missouri 64465</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif">Our Services</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="hover:text-red-400 cursor-pointer transition-colors" onClick={() => setActiveSection('services')}>Custom Firearm Builds</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors" onClick={() => setActiveSection('services')}>Nationwide Repairs</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors" onClick={() => setActiveSection('services')}>Restoration Services</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors" onClick={() => setActiveSection('services')}>FFL Transfers</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors" onClick={() => setActiveSection('services')}>Background Checks</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors" onClick={() => setActiveSection('contact')}>Expert Consultation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-slate-400 text-center lg:text-left">
              <p>&copy; 2025 American Eagle Firearms LLC. All rights reserved.</p>
              <p className="text-sm mt-1">Licensed Federal Firearms Dealer | FFL Compliance Guaranteed</p>
            </div>

            {/* Patriotic Message */}
            <div className="flex items-center space-x-2 text-slate-300">
              <Flag className="h-5 w-5 text-red-400" />
              <span className="font-semibold">Proudly Made in America</span>
              <Flag className="h-5 w-5 text-blue-400" />
            </div>
          </div>
          
          {/* Legal Notice */}
          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm">
              All firearm transactions subject to federal, state, and local laws. 
              American Eagle Firearms LLC reserves the right to refuse service for any reason.
            </p>
          </div>

          {/* New Compliance Section */}
          <div className="mt-8 pt-6 border-t border-slate-700 text-center text-slate-400 text-sm space-y-2">
            <p>
              All firearms must be transferred in person at our licensed FFL location. We comply with all federal, state, and local laws.
              Firearms are dangerous—handle responsibly. Training is recommended.
              Shipping restricted per law; we do not ship firearms to prohibited persons or states.
            </p>
            <div className="flex justify-center space-x-4">
              <button onClick={() => setActiveSection('privacy-policy')} className="text-red-400 hover:text-red-300 transition-colors">Privacy Policy</button>
              <span className="text-slate-600">|</span>
              <button onClick={() => setActiveSection('terms-of-service')} className="text-red-400 hover:text-red-300 transition-colors">Terms of Service</button>
              <span className="text-slate-600">|</span>
              <button onClick={() => setActiveSection('refund-policy')} className="text-red-400 hover:text-red-300 transition-colors">Refund & Return Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
