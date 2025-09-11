import React from 'react';
import { Wrench, Target, FileCheck, Star, Shield, Award } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Target,
      title: "Custom Firearm Builds",
      description: "Every firearm is precision-crafted from the ground up using state-of-the-art equipment and decades of expertise. Each build is a testament to American craftsmanship.",
      features: ["Precision machining", "Custom specifications", "Quality materials", "Heritage design"]
    },
    {
      icon: Wrench,
      title: "Nationwide Repairs & Restoration",
      description: "Companies across America ship their firearms to us for restoration. Every gun returns in flawless condition, backed by our reputation for perfection.",
      features: ["Expert diagnosis", "Complete restoration", "Nationwide shipping", "Guaranteed results"]
    },
    {
      icon: FileCheck,
      title: "FFL Transfers & Background Checks",
      description: "Full Federal Firearms License compliance with personal background checks conducted by Dennis himself. Complete legal compliance guaranteed.",
      features: ["FFL licensed", "Background checks", "Legal compliance", "Personal service"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Star className="h-8 w-8 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 font-serif">Our Services</h2>
            <Star className="h-8 w-8 text-blue-600" />
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Precision craftsmanship meets unwavering integrity. Every service backed by decades of experience 
            and absolute commitment to American values.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl border-2 border-slate-200 hover:border-red-300 transition-all duration-300 hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-blue-600 rounded-full mb-6 mx-auto">
                  <service.icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center font-serif">{service.title}</h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-8 font-serif">Why Choose American Eagle Firearms?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Full Legal Compliance</h4>
              <p className="text-slate-300">FFL licensed with complete adherence to all federal and state regulations</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-amber-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Master Craftsmanship</h4>
              <p className="text-slate-300">Decades of experience with precision equipment and old-school attention to detail</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-red-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Nationwide Trust</h4>
              <p className="text-slate-300">Companies across America rely on our reputation for excellence and integrity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;