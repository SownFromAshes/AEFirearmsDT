import React from 'react';
import { Camera, Award, Star } from 'lucide-react';

interface GalleryProps {
  setActiveSection: (section: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ setActiveSection }) => {
  const galleryItems = [
    { title: "Custom 1911 Build", category: "Custom Build", description: "Precision-crafted with premium materials" },
    { title: "Antique Rifle Restoration", category: "Restoration", description: "Civil War era Springfield restored to perfection" },
    { title: "Modern Tactical Build", category: "Custom Build", description: "State-of-the-art precision rifle system" },
    { title: "Workshop Precision Equipment", category: "Workshop", description: "CNC machinery and precision tools" },
    { title: "Competition Pistol", category: "Custom Build", description: "Match-grade accuracy and reliability" },
    { title: "Vintage Shotgun Repair", category: "Restoration", description: "Classic American hunting heritage preserved" },
    { title: "Quality Control Station", category: "Workshop", description: "Every firearm tested for perfection" },
    { title: "Custom Engraving Work", category: "Craftsmanship", description: "Artistic detail meets functional beauty" },
    { title: "Before & After Restoration", category: "Restoration", description: "Bringing history back to life" }
  ];

  const handleContactClick = () => {
    setActiveSection('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('/dtamerica.webp')" }}
    >
      {/* Overlay for text readability - Reduced opacity to make background image more visible */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Camera className="h-10 w-10 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">Gallery</h2>
            <Camera className="h-10 w-10 text-blue-600" />
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Witness the precision and artistry that goes into every project. From custom builds to 
            complete restorations, each piece reflects our commitment to American craftsmanship.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200 hover:border-red-300">
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-slate-200 to-slate-300 rounded-t-xl flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <Camera className="h-16 w-16 mx-auto mb-2" />
                  <p className="font-semibold text-lg">{item.title}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                    {item.category}
                  </span>
                  <Star className="h-5 w-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Statistics */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">150+</div>
              <p className="text-white text-lg">Custom Builds Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <p className="text-white text-lg">Firearms Restored</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">50</div>
              <p className="text-white text-lg">States Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">30+</div>
              <p className="text-white text-lg">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-200 max-w-2xl mx-auto">
            <Award className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-slate-800 mb-4 font-serif">Ready to Start Your Project?</h3>
            <p className="text-lg text-slate-600 mb-6">
              Whether it's a custom build, restoration, or FFL transfer, we're ready to deliver 
              the precision and quality you expect from American craftsmanship.
            </p>
            <button 
              onClick={handleContactClick} // Add onClick handler
              className="bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Contact Dennis Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

