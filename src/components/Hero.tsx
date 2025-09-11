import React from 'react';
import { Star, Shield, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-20 overflow-hidden">
      {/* Patriotic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-32 bg-red-600"></div>
        <div className="absolute top-32 left-0 w-full h-32 bg-white"></div>
        <div className="absolute top-64 left-0 w-full h-32 bg-red-600"></div>
      </div>
      
      {/* Stars Pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-white fill-current"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Eagle Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full shadow-2xl border-4 border-white">
              <div className="text-6xl">🦅</div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
            <span className="text-red-400">American Eagle</span>
            <br />
            <span className="text-blue-300">Firearms LLC</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-amber-200 font-semibold mb-8 font-serif">
            "Old-School American Craftsmanship. Built to Last."
          </p>
          
          {/* Credentials */}
          <div className="flex flex-wrap justify-center items-center space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-white">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">FFL Licensed</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Award className="h-8 w-8 text-red-400" />
              <span className="text-xl font-bold">Master Gunsmith</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Star className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold">Nationwide Trusted</span>
            </div>
          </div>

          {/* Feature Boxes */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-red-400 mb-3">Custom Builds</h3>
              <p className="text-white text-lg">Precision-crafted firearms built from scratch with state-of-the-art equipment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Nationwide Repairs</h3>
              <p className="text-white text-lg">Companies across America trust us with their firearms restoration needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-amber-400 mb-3">FFL Transfers</h3>
              <p className="text-white text-lg">Legal transfers with personal background checks and full compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;