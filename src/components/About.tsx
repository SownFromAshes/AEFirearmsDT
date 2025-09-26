import React from 'react';
import { Flag, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Flag className="h-10 w-10 text-red-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 font-serif">About Dennis Thompson</h2>
            </div>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Dennis Thompson is a master gunsmith known nationwide for his precision, integrity, and unwavering commitment to the law. As a fully licensed FFL holder, he personally oversees every background check and ensures complete compliance.
              </p>
              
              <p>
                A proud American craftsman, Dennis stands by the values of hard work, honesty, and respect for our constitutional rights. Every firearm leaving his shop reflects traditional quality paired with modern precision.
              </p>
              
              <p>
                From individual enthusiasts to companies across the country, clients trust Dennis to restore and perfect their firearms, knowing his decades of experience and advanced equipment deliver flawless results.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Precision Craftsmanship</h3>
                  <p className="text-slate-600">Every detail matters, every measurement perfect</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">American Values</h3>
                  <p className="text-slate-600">Patriotism, freedom, and constitutional rights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder & Credentials */}
          <div className="space-y-8">
            {/* Portrait Image */}
            <img 
              src="/dtself.jpg" 
              alt="Dennis Thompson, Master Gunsmith" 
              className="rounded-2xl h-96 w-full object-cover border-4 border-slate-400 shadow-xl"
            />

            {/* Credentials Card */}
            <div className="bg-gradient-to-br from-red-600 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-center font-serif">Credentials & Experience</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-amber-300" />
                  <span>Federal Firearms License (FFL) Certified</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-amber-300" />
                  <span>Master Gunsmith Certification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-amber-300" />
                  <span>Decades of Professional Experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-amber-300" />
                  <span>Nationwide Repair Network</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-amber-300" />
                  <span>State-of-the-Art Equipment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-serif text-white italic mb-4">
              "Every firearm tells a story of American heritage. My job is to honor that legacy 
              with the precision and respect it deserves."
            </blockquote>
            <p className="text-xl text-red-400 font-semibold">— Dennis Thompson, Master Gunsmith</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
