import React from 'react';
import { Flag, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/abouthero.png')" }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"> {/* Added text-white for better contrast */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Flag className="h-10 w-10 text-red-400" /> {/* Adjusted color for contrast */}
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">About Dennis Thompson</h2>
            </div>
            
            <div className="space-y-6 text-lg text-slate-200 leading-relaxed"> {/* Adjusted color for contrast */}
              <p>
                Dennis Thompson is a master gunsmith whose reputation for precision and integrity has earned trust 
                from firearm enthusiasts and companies nationwide. With full Federal Firearms License (FFL) certification, 
                Dennis personally conducts every background check and ensures complete legal compliance.
              </p>
              
              <p>
                A proud American who embodies the spirit of traditional craftsmanship, Dennis believes in the values 
                that built this great nation: hard work, honesty, and respect for our constitutional rights. Every 
                firearm that leaves his shop is a testament to old-school American quality.
              </p>
              
              <p>
                When companies across the United States need firearms restored, they ship them to Dennis knowing 
                they'll return in flawless condition. His state-of-the-art precision equipment combined with 
                decades of experience ensures every project meets the highest standards.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Star className="h-6 w-6 text-amber-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white text-lg">Precision Craftsmanship</h3>
                  <p className="text-slate-200">Every detail matters, every measurement perfect</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" /> {/* Adjusted color for contrast */}
                <div>
                  <h3 className="font-bold text-white text-lg">American Values</h3>
                  <p className="text-slate-200">Patriotism, freedom, and constitutional rights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Placeholder & Credentials */}
          <div className="space-y-8">
            {/* Portrait Placeholder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-96 flex items-center justify-center border-4 border-white/20 shadow-xl"> {/* Adjusted colors for contrast */}
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👨‍🔧</div>
                <p className="text-xl font-semibold">Dennis Thompson</p>
                <p className="text-lg">Master Gunsmith</p>
              </div>
            </div>

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
          <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"> {/* Adjusted background for contrast */}
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
