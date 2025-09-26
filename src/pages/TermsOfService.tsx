import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('/dtamerica.webp')" }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center font-serif">Terms of Service</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 text-slate-700 space-y-6">
          <p className="text-sm text-slate-500">Effective Date: September 14, 2025</p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">1. Compliance</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All users must be legally allowed to purchase firearms</li>
            <li>All sales comply with federal, state, and local laws</li>
            <li>Firearms transactions must be completed in person at our FFL location</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">2. Limitation of Liability</h2>
          <p>American Eagle Firearms LLC is not responsible for:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Misuse of firearms or products</li>
            <li>Accidents, theft, or illegal possession</li>
            <li>Indirect or consequential damages</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">3. Intellectual Property</h2>
          <p>
            All site content (text, images, logos) is owned by American Eagle Firearms LLC. Unauthorized use is prohibited.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">4. Dispute Resolution</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Governed by the laws of Missouri</li>
            <li>Disputes resolved in state or federal courts in Clinton County, Missouri</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">5. Modifications</h2>
          <p>
            Terms may be updated without notice; continued use indicates agreement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
