import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center font-serif">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 text-slate-700 space-y-6">
          <p className="text-sm text-slate-500">Effective Date: September 14, 2025</p>

          <p>
            American Eagle Firearms LLC (“we,” “us,” or “our”) respects your privacy and is committed to protecting your personal information.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Personal info:</strong> name, email, phone, mailing address (from forms or purchases)</li>
            <li><strong>Payment info:</strong> securely processed via PCI-compliant gateways</li>
            <li><strong>Analytics:</strong> IP, browser type, pages visited (via cookies or third-party services)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Process orders, service requests, and communication</li>
            <li>Send marketing or update emails (with opt-out)</li>
            <li>Analyze website performance and improve user experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">Sharing & Third Parties</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Data is never sold.</li>
            <li>Shared only with payment processors, analytics, or marketing partners</li>
            <li>May be disclosed to comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">Cookies</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Functional and analytics cookies used</li>
            <li>Users can accept all, reject non-essential, or manage preferences</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">User Rights</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Access, correction, or deletion of personal data</li>
            <li>Opt-out of marketing communications</li>
            <li>California users: CCPA rights</li>
            <li>EU users: GDPR rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">Data Security</h2>
          <p>
            SSL encryption, secure servers, regular backups, PCI-compliant payments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
