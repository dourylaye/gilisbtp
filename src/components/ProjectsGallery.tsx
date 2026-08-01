import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/gilisData';
import { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { MapPin, Calendar, ExternalLink, Clock, Sparkles } from 'lucide-react';

interface GalleryRowProps {
  title: string;
  subtitle: string;
  projects: Project[];
  onSelectProject: (p: Project) => void;
}

const GalleryRow: React.FC<GalleryRowProps> = ({ title, subtitle, projects, onSelectProject }) => {
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
        // When we've scrolled past half (the first set of projects), reset by half
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

  const oldestYear = projects[0]?.year || '';
  const newestYear = projects[projects.length - 1]?.year || '';

  return (
    <div className="space-y-4 py-4">
      {/* Section Sub-header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/80 pb-3">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-8 bg-[#F5C51B] rounded-r-md"></div>
          <div>
            <h3 className="font-title text-xl sm:text-2xl font-extrabold text-[#0E2232] tracking-tight">
              {title}
            </h3>
            <p className="text-xs text-gray-500 font-medium">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Single Horizontal Row - Auto-scrolling from oldest to newest - Large Cards */}
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
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2232]/95 via-[#0E2232]/35 to-transparent"></div>

              {/* Chronological Year Badge - Prominent Gold */}
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

            {/* Card Content Footer */}
            <div className="p-5 bg-white space-y-3">
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {project.description}
              </p>
              
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0E2232]">
                <span className="text-gray-500 font-normal">{project.category}</span>
                <span className="text-[#0E2232] group-hover:text-[#B8860B] transition-colors flex items-center space-x-1 uppercase text-[11px] tracking-wider font-extrabold">
                  <span>Découvrir le projet</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProjectsGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Group projects into domain sections sorted strictly from oldest to newest year
  const routesVrdProjects = PROJECTS.filter(
    (p) => p.category === 'Routes' || p.category === 'VRD'
  ).sort((a, b) => parseInt(a.year) - parseInt(b.year));

  const batimentsProjects = PROJECTS.filter(
    (p) => p.category === 'Bâtiments'
  ).sort((a, b) => parseInt(a.year) - parseInt(b.year));

  const genieCivilHydrauliqueProjects = PROJECTS.filter(
    (p) => p.category === 'Génie civil' || p.category === 'Hydraulique'
  ).sort((a, b) => parseInt(a.year) - parseInt(b.year));

  return (
    <section id="projets" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#06090B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#0E2232]/10 text-[#0E2232] px-4 py-1.5 rounded-full border border-[#0E2232]/15 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0E2232]" />
            <span className="text-xs uppercase tracking-widest font-extrabold">
              Galerie Chronologique
            </span>
          </div>

          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2232] tracking-tight leading-tight">
            Chantiers &amp; Ouvrages d'Art Majoritaires
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Défilement continu par secteur, du projet le plus ancien au plus récent. Survolez ou touchez une carte pour consulter les spécifications techniques.
          </p>
        </div>

        {/* Domain Sections - Single Horizontal Row per Section */}
        <div className="space-y-10">
          <GalleryRow
            title="01. Infrastructures Routières & VRD"
            subtitle="Autostrades, voiries urbaines, viabilisation et aménagement de zones industrielles"
            projects={routesVrdProjects}
            onSelectProject={(p) => setSelectedProject(p)}
          />

          <GalleryRow
            title="02. Bâtiments & Équipements Publics"
            subtitle="Cités administratives, centres hospitaliers, campus et tours tertiaires"
            projects={batimentsProjects}
            onSelectProject={(p) => setSelectedProject(p)}
          />

          <GalleryRow
            title="03. Génie Civil, Ouvrages d'Art & Hydraulique"
            subtitle="Ponts mixtes, viaducs, châteaux d'eau, stations de pompage et réseaux AEP"
            projects={genieCivilHydrauliqueProjects}
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


