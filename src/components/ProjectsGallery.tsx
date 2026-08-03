import React, { useState, useEffect, useRef } from 'react';
import { PARTICULIERS_PROJECTS, ENTREPRISES_PROJECTS } from '../data/gilisData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { MapPin, Calendar, Sparkles } from 'lucide-react';
import { SmartImage } from './SmartImage';

interface GalleryRowProps {
  title: string;
  projects: Project[];
  onSelectProject: (p: Project) => void;
}

const GalleryRow: React.FC<GalleryRowProps> = ({ title, projects, onSelectProject }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate projects to create a seamless infinite horizontal loop
  const displayProjects = [...projects, ...projects];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;

    const scrollStep = () => {
      if (!isPaused && el) {
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        } else {
          el.scrollLeft += 0.7; // Smooth continuous scroll speed
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="space-y-4 py-4">
      {/* Section Sub-header */}
      <div className="flex items-center space-x-3 border-b border-gray-200/80 pb-3">
        <div className="w-2.5 h-8 bg-[#F5C51B] rounded-r-md"></div>
        <h3 className="font-title text-xl sm:text-2xl font-extrabold text-[#0E2232] tracking-tight">
          {title}
        </h3>
      </div>

      {/* Single Horizontal Row - Auto-scrolling - Large Cards */}
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex space-x-6 overflow-x-auto pb-4 pt-2 scrollbar-none cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayProjects.map((project, idx) => (
          <div
            key={`${project.id}-${idx}`}
            onClick={() => onSelectProject(project)}
            className="group relative w-[320px] sm:w-[420px] md:w-[460px] shrink-0 bg-white border border-gray-200 hover:border-[#0E2232] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between transform hover:-translate-y-2"
          >
            {/* Big Prominent Image */}
            <div className="relative h-72 sm:h-80 md:h-88 overflow-hidden bg-slate-950">
              <SmartImage
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2232]/95 via-[#0E2232]/35 to-transparent"></div>

              {/* Chronological Year Badge */}
              <div className="absolute top-4 left-4 bg-[#F5C51B] text-[#0E2232] text-xs font-title font-extrabold px-3.5 py-1.5 rounded-full shadow-lg border border-[#0E2232]/20 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>An {project.year}</span>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 bg-[#0E2232]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 shadow-md">
                {project.status}
              </div>

              {/* Title & Location Overlay on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5">
                <div className="flex items-center text-xs font-bold text-[#F5C51B] space-x-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                </div>
                <h4 className="font-title text-base sm:text-lg md:text-xl font-extrabold leading-snug line-clamp-2 text-white group-hover:text-[#F5C51B] transition-colors">
                  {project.title}
                </h4>
              </div>
            </div>

            {/* Clean Card Footer */}
            <div className="p-4 bg-white flex items-center justify-between text-xs font-bold text-[#0E2232]">
              <span className="text-[#0E2232] font-extrabold tracking-wide uppercase text-[11px]">{project.category}</span>
              <span className="text-xs text-gray-400 font-semibold">{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectsGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const entreprisesProjects = [...ENTREPRISES_PROJECTS].sort((a, b) => parseInt(a.year) - parseInt(b.year));
  const particuliersProjects = [...PARTICULIERS_PROJECTS].sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <section id="projets" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#06090B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#0E2232]/10 text-[#0E2232] px-4 py-1.5 rounded-full border border-[#0E2232]/15 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0E2232]" />
            <span className="text-xs uppercase tracking-widest font-extrabold">
              Galerie de Nos Réalisations
            </span>
          </div>

          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2232] tracking-tight leading-tight">
            Chantiers, Villas &amp; Grands Ouvrages
          </h2>
        </div>

        {/* 2 Main Rows: PARTICULIERS & ENTREPRISES */}
        <div className="space-y-10">
          <GalleryRow
            title="PARTICULIERS"
            projects={particuliersProjects}
            onSelectProject={(p) => setSelectedProject(p)}
          />

          <GalleryRow
            title="ENTREPRISES"
            projects={entreprisesProjects}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        </div>

      </div>

      {/* Pop-up detail modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};


