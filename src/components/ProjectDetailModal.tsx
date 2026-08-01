import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, CheckCircle2, UserCheck, Clock, Award, FileText } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        class="relative w-full max-w-5xl max-h-[92vh] bg-white text-[#06090B] rounded-sm shadow-2xl overflow-y-auto border border-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div class="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0E2232] text-white border-b border-[#F5C51B]/30">
          <div>
            <div class="flex items-center space-x-2 text-xs text-[#F5C51B]">
              <span class="font-subtitle uppercase tracking-wider">{project.category}</span>
              <span>•</span>
              <span>{project.status}</span>
            </div>
            <h3 class="font-title text-lg md:text-xl font-bold tracking-tight text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            class="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
            aria-label="Fermer la fenêtre"
          >
            <X class="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div class="p-6 sm:p-8 space-y-8">
          
          {/* Main Large Gallery Image Carousel */}
          <div class="relative bg-black rounded-sm overflow-hidden h-72 sm:h-96 md:h-[420px] group shadow-inner">
            <img
              src={project.images[activeImageIndex]}
              alt={`${project.title} - Image ${activeImageIndex + 1}`}
              class="w-full h-full object-cover transition-opacity duration-300"
            />

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-[#F5C51B] text-white hover:text-[#0E2232] rounded-sm transition-colors shadow-lg"
                  aria-label="Image précédente"
                >
                  <ChevronLeft class="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-[#F5C51B] text-white hover:text-[#0E2232] rounded-sm transition-colors shadow-lg"
                  aria-label="Image suivante"
                >
                  <ChevronRight class="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image counter tag */}
            <div class="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-sm border border-white/20">
              {activeImageIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* Thumbnails Row */}
          {project.images.length > 1 && (
            <div class="flex items-center space-x-3 overflow-x-auto pb-2">
              {project.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  class={`relative w-20 h-16 sm:w-24 sm:h-18 rounded-sm overflow-hidden border-2 transition-all shrink-0 ${
                    idx === activeImageIndex ? 'border-[#F5C51B] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="Vignette" class="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Project Details Meta Bar */}
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#F6F6F3] border border-gray-200 rounded-sm text-xs sm:text-sm">
            <div class="space-y-1">
              <span class="text-gray-500 font-subtitle flex items-center">
                <UserCheck class="w-3.5 h-3.5 mr-1 text-[#0E2232]" /> Client
              </span>
              <p class="font-bold text-[#0E2232]">{project.client}</p>
            </div>

            <div class="space-y-1">
              <span class="text-gray-500 font-subtitle flex items-center">
                <MapPin class="w-3.5 h-3.5 mr-1 text-[#0E2232]" /> Localisation
              </span>
              <p class="font-bold text-[#0E2232]">{project.location}</p>
            </div>

            <div class="space-y-1">
              <span class="text-gray-500 font-subtitle flex items-center">
                <Calendar class="w-3.5 h-3.5 mr-1 text-[#0E2232]" /> Année
              </span>
              <p class="font-bold text-[#0E2232]">{project.year}</p>
            </div>

            <div class="space-y-1">
              <span class="text-gray-500 font-subtitle flex items-center">
                <Clock class="w-3.5 h-3.5 mr-1 text-[#0E2232]" /> Durée des travaux
              </span>
              <p class="font-bold text-[#0E2232]">{project.duration}</p>
            </div>
          </div>

          {/* Mission & Description */}
          <div class="space-y-3">
            <h4 class="font-title text-lg font-bold text-[#0E2232] flex items-center">
              <FileText class="w-5 h-5 text-[#F5C51B] mr-2" />
              Mission confiée à GILIS BTP
            </h4>
            <p class="text-sm text-gray-700 leading-relaxed font-medium">
              {project.mission}
            </p>
          </div>

          {/* Works Executed */}
          <div class="space-y-3 pt-4 border-t border-gray-200">
            <h4 class="font-title text-lg font-bold text-[#0E2232]">
              Travaux réalisés
            </h4>
            <ul class="grid sm:grid-cols-2 gap-2">
              {project.works.map((work, idx) => (
                <li key={idx} class="flex items-start text-xs sm:text-sm text-gray-700 bg-gray-50 p-2.5 rounded-sm border border-gray-100">
                  <CheckCircle2 class="w-4 h-4 text-[#F5C51B] mr-2 mt-0.5 shrink-0" />
                  <span>{work}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Data Table */}
          <div class="space-y-3 pt-4 border-t border-gray-200">
            <h4 class="font-title text-lg font-bold text-[#0E2232]">
              Données techniques du projet
            </h4>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {Object.entries(project.technicalData).map(([key, val], idx) => (
                <div key={idx} class="p-3 bg-[#0E2232] text-white rounded-sm space-y-1">
                  <span class="text-[11px] text-[#F5C51B] font-subtitle block uppercase">{key}</span>
                  <span class="font-title font-bold text-sm">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results Obtained */}
          <div class="p-5 bg-[#F6F6F3] border-l-4 border-[#F5C51B] rounded-sm space-y-2">
            <div class="flex items-center space-x-2 text-[#0E2232]">
              <Award class="w-5 h-5 text-[#F5C51B]" />
              <h4 class="font-title text-base font-bold">Résultats &amp; Impact territorial</h4>
            </div>
            <p class="text-sm text-gray-700 leading-relaxed">
              {project.results}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div class="p-6 bg-[#F6F6F3] border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            class="px-6 py-2.5 bg-[#0E2232] hover:bg-[#183952] text-white rounded-sm text-sm font-medium transition-colors cursor-pointer"
          >
            Fermer le projet
          </button>
        </div>

      </div>
    </div>
  );
};
