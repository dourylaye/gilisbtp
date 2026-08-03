import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { SmartImage } from './SmartImage';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto slide every 4.5 seconds unless hovered
  useEffect(() => {
    if (isHovered || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swipe left -> Next image
        setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
      } else {
        // Swipe right -> Prev image
        setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="group bg-white border border-gray-200 hover:border-[#0E2232] rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-2xl flex flex-col justify-between transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {/* Image Slider Header */}
        <div 
          className="relative h-60 overflow-hidden bg-black cursor-pointer"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => onOpenDetails(project)}
        >
          <SmartImage
            src={project.images[currentImgIndex]}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1622]/90 via-transparent to-black/20"></div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-[#0E2232]/95 backdrop-blur-md text-[#F5C51B] text-[11px] font-title font-bold px-3 py-1 rounded-full shadow-md border border-[#F5C51B]/30">
            {project.category}
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 right-3 bg-[#F5C51B] text-[#0E2232] text-[11px] font-title font-bold px-3 py-1 rounded-full shadow-md">
            {project.status}
          </div>

          {/* Slider Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 hover:bg-[#F5C51B] text-white hover:text-[#0E2232] rounded-full opacity-0 group-hover:opacity-100 transition-all z-10 cursor-pointer"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 hover:bg-[#F5C51B] text-white hover:text-[#0E2232] rounded-full opacity-0 group-hover:opacity-100 transition-all z-10 cursor-pointer"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Slider Indicator Dots */}
          {project.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-10">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentImgIndex ? 'bg-[#F5C51B] w-5' : 'bg-white/60 hover:bg-white w-1.5'
                  }`}
                  aria-label={`Aller à l'image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6 space-y-3">
          <div className="flex items-center space-x-4 text-xs font-semibold text-gray-500">
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#F5C51B]" />
              {project.location}
            </span>
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1 text-[#F5C51B]" />
              {project.year}
            </span>
          </div>

          <h3 
            onClick={() => onOpenDetails(project)}
            className="font-title text-lg font-bold text-[#0E2232] group-hover:text-[#0E2232] transition-colors cursor-pointer line-clamp-2"
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Button Footer */}
      <div className="p-6 pt-0 mt-auto">
        <button
          onClick={() => onOpenDetails(project)}
          className="w-full py-2.5 px-4 bg-[#0E2232] hover:bg-[#183952] text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer group-hover:bg-[#F5C51B] group-hover:text-[#0E2232]"
        >
          <span>Découvrir la Fiche Technique</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

