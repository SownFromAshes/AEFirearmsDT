import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startClientX, setStartClientX] = useState(0);
  const [startClientY, setStartClientY] = useState(0);
  const [startPanX, setStartPanX] = useState(0);
  const [startPanY, setStartPanY] = useState(0);

  // Reset zoom and pan when image changes
  useEffect(() => {
    setZoomLevel(1);
    setPanX(0);
    setPanY(0);
  }, [currentIndex]);

  // Keyboard navigation and close
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

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const scaleAmount = 0.1; // How much to zoom per wheel tick
    const newZoomLevel = e.deltaY < 0 ? zoomLevel * (1 + scaleAmount) : zoomLevel / (1 + scaleAmount);

    // Clamp zoom level between 1 (no zoom) and 4 (max zoom)
    const clampedZoomLevel = Math.max(1, Math.min(newZoomLevel, 4));

    if (clampedZoomLevel === 1) {
      setZoomLevel(1);
      setPanX(0);
      setPanY(0);
      return;
    }

    setZoomLevel(clampedZoomLevel);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartClientX(e.clientX);
      setStartClientY(e.clientY);
      setStartPanX(panX);
      setStartPanY(panY);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!isDragging || zoomLevel === 1) return;

    const deltaX = e.clientX - startClientX;
    const deltaY = e.clientY - startClientY;

    setPanX(startPanX + deltaX);
    setPanY(startPanY + deltaY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

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
      <div 
        className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center overflow-hidden"
        onWheel={handleWheel}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          style={{
            transform: `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`,
            cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
            userSelect: 'none',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out', // Smooth zoom, instant pan
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          draggable="false"
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
