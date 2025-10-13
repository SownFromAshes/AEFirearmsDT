import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'ArrowLeft') {
        onPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-red-400 transition-colors z-50"
        aria-label="Close image gallery"
      >
        <X className="h-10 w-10" />
      </button>

      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 text-white hover:text-blue-400 transition-colors z-50 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === 0}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-blue-400 transition-colors z-50 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentIndex === images.length - 1}
        aria-label="Next image"
      >
        <ChevronRight className="h-12 w-12" />
      </button>

      {/* Image Container */}
      <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;

