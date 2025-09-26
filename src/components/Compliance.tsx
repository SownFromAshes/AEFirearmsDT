import React from 'react';
import { Shield, FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react';

const Compliance: React.FC = () => {
  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('/dtamerica.webp')" }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-10 w-10 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">Legal Compliance</h2>
            <Shield className="h-10 w-10 text-blue-600" />
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            American Eagle Firearms LLC operates under full Federal Firearms License compliance with 
            absolute commitment to lawful, ethical service. Your trust is earned through transparency and integrity.
          </p>
        </div>

        {/* FFL License Information */}
        <div className="bg-gradient-to-br from-red-600 to-blue-600 text-white rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-serif">Federal Firearms License</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span>FFL Type 01 - Dealer in Firearms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span>License #: [5-43-XXX-XX-XX-17324]</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span>Licensed by: Bureau of Alcohol, Tobacco, Firearms and Explosives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-300" />
                  <span>Current through: [01/01/2028]</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <FileText className="h-16 w-16 mx-auto mb-4 text-amber-300" />
              <p className="text-center text-lg">
                Our FFL license is displayed prominently in our workshop and is available 
                for inspection by customers and law enforcement at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Areas */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200 hover:border-red-300 transition-all duration-300">
            <Scale className="h-12 w-12 text-red-600 mb-6" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Federal Compliance</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>ATF Form 4473 processing for all transfers</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>NICS background check system compliance</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Bound book record keeping requirements</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Trace request cooperation with law enforcement</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300">
            <FileText className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4 font-serif">State Compliance</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>State dealer licensing requirements</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Local zoning and business permit compliance</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Sales tax collection and remittance</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Interstate commerce regulations</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200 hover:border-amber-300 transition-all duration-300">
            <AlertTriangle className="h-12 w-12 text-amber-600 mb-6" />
            <h3 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Safety & Security</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>ATF-approved security and storage systems</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Professional liability insurance coverage</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Secure firearms transportation protocols</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Customer privacy protection measures</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Transfer Process */}
        <div className="bg-slate-900 rounded-2xl p-8 text-white mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 font-serif">FFL Transfer Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h4 className="text-xl font-bold mb-2">Initial Contact</h4>
              <p className="text-slate-300">Customer contacts us to initiate transfer</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h4 className="text-xl font-bold mb-2">Documentation</h4>
              <p className="text-slate-300">Complete Form 4473 and required paperwork</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h4 className="text-xl font-bold mb-2">Background Check</h4>
              <p className="text-slate-300">Dennis personally conducts NICS check</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h4 className="text-xl font-bold mb-2">Transfer Complete</h4>
              <p className="text-slate-300">Legal transfer completed, records maintained</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Important Legal Notice</h3>
              <div className="text-amber-700 space-y-3">
                <p>
                  All firearm transactions must comply with federal, state, and local laws. American Eagle Firearms LLC 
                  reserves the right to refuse any transaction that does not meet legal requirements or our ethical standards.
                </p>
                <p>
                  Customers are responsible for knowing and complying with all applicable laws in their jurisdiction. 
                  When in doubt, consult with legal counsel or contact your local law enforcement agency.
                </p>
                <p className="font-semibold">
                  We are committed to supporting law enforcement and will fully cooperate with all legal investigations 
                  and compliance inspections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
