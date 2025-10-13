import React, { useState } from 'react';
import { Camera, Award, Star } from 'lucide-react';
import ImageModal from './ImageModal'; // Import the new ImageModal component

interface GalleryProps {
  setActiveSection: (section: string) => void;
}

const Gallery: React.FC<GalleryProps> = ({ setActiveSection }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    { 
      title: "Winchester 1885 High Wall", 
      category: "Restoration", 
      description: "Stock Repair, Firing Pin Fix, and Sight Install",
      images: ["/winch-1885-1.webp", "/winch-1885-2.webp", "/winch-1885-3.webp"] 
    },
    { 
      title: "Antique Rifle Restoration", 
      category: "Restoration", 
      description: "Civil War era Springfield restored to perfection",
      images: ["/1885-winch-1.webp", "/rifle-restoration-2.webp", "/rifle-restoration-3.webp"] 
    },
    { 
      title: "Modern Tactical Build", 
      category: "Custom Build", 
      description: "State-of-the-art precision rifle system",
      images: ["/tactical-build-1.webp", "/tactical-build-2.webp", "/tactical-build-3.webp"] 
    },
    { 
      title: "Workshop Precision Equipment", 
      category: "Workshop", 
      description: "CNC machinery and precision tools",
      images: ["/workshop-1.webp", "/workshop-2.webp"] 
    },
    { 
      title: "Competition Pistol", 
      category: "Custom Build", 
      description: "Match-grade accuracy and reliability",
      images: ["/comp-pistol-1.webp", "/comp-pistol-2.webp"] 
    },
    { 
      title: "Vintage Shotgun Repair", 
      category: "Restoration", 
      description: "Classic American hunting heritage preserved",
      images: ["/shotgun-repair-1.webp", "/shotgun-repair-2.webp", "/shotgun-repair-3.webp"] 
    },
    { 
      title: "Quality Control Station", 
      category: "Workshop", 
      description: "Every firearm tested for perfection",
      images: ["/qc-station-1.webp"] 
    },
    { 
      title: "Custom Engraving Work", 
      category: "Craftsmanship", 
      description: "Artistic detail meets functional beauty",
      images: ["/engraving-1.webp", "/engraving-2.webp"] 
    },
    { 
      title: "Before & After Restoration", 
      category: "Restoration", 
      description: "Bringing history back to life",
      images: ["/before-after-1.webp", "/before-after-2.webp", "/before-after-3.webp", "/before-after-4.webp"] 
    }
  ];

  const handleContactClick = () => {
    setActiveSection('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (images: string[], index: number) => {
    setSelectedImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
    setCurrentImageIndex(0);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
  };

  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedImages.length) % selectedImages.length);
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
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-200 hover:border-red-300 cursor-pointer"
              onClick={() => openModal(item.images, 0)} // Open modal with first image
            >
              {/* Image Display */}
              <div className="h-64 overflow-hidden rounded-t-xl">
                {item.images && item.images.length > 0 ? (
                  <img 
                    src={item.images[0]} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <div className="text-center text-slate-500">
                      <Camera className="h-16 w-16 mx-auto mb-2" />
                      <p className="font-semibold text-lg">No Image Available</p>
                    </div>
                  </div>
                )}
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
              <div className="text-4xl font-bold text-red-400 mb-2">500+</div>
              <p className="text-white text-lg">Custom Builds Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">1000+</div>
              <p className="text-white text-lg">Firearms Restored</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">50</div>
              <p className="text-white text-lg">States Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
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
              onClick={handleContactClick} 
              className="bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Contact Dennis Today
            </button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <ImageModal
          images={selectedImages}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          onNext={goToNextImage}
          onPrev={goToPrevImage}
        />
      )}
    </section>
  );
};

export default Gallery;

