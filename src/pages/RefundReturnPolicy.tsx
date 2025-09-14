import React from 'react';

const RefundReturnPolicy: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center font-serif">Refund & Return Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200 text-slate-700 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">Firearms</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Non-returnable per ATF and legal requirements.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">Parts/Accessories</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Returns accepted within 30 days, unused, in original packaging.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">Refunds</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Issued after inspection and approval.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 font-serif">Shipping Costs</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Non-refundable unless error on our part.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RefundReturnPolicy;
