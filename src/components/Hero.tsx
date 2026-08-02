import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { RequestType } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSelectRequestType?: (type: RequestType) => void;
}

const HERO_IMAGES = [
  'Images/slider1.webp',
  'Images/slider2.webp',
  'Images/slider3.webp'
];

export const Hero: React.FC<HeroProps> = ({ onSelectRequestType }) => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSoumettreClick = () => {
    if (onSelectRequestType) {
      onSelectRequestType('Soumission de projet');
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExpertisesClick = () => {
    const element = document.getElementById('expertises');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 lg:pt-40 lg:pb-20 bg-[#0A1622] overflow-hidden text-white"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((imgUrl, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-70 scale-100' : 'opacity-0 scale-105'
            } transform transition-transform duration-[7000ms]`}
          >
            <img
              src={imgUrl}
              alt="Chantier GILIS BTP"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            />
          </div>
        ))}

        {/* Architectural Gradient Overlays - Softened for higher image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1622]/80 via-[#0A1622]/50 to-[#0A1622]/25"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1622]/95 via-transparent to-[#0A1622]/40"></div>
        
        {/* Dynamic Geometric Dot Grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F5C51B_1.5px,transparent_1.5px)] [background-size:28px_28px]"></div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#F5C51B]/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center space-y-6">
        
        {/* Live Status Badge */}
        <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-[#F5C51B]/40 px-4 py-2 rounded-full shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C51B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5C51B]"></span>
          </span>
          <span className="font-subtitle text-xs sm:text-sm text-[#F5C51B] font-semibold tracking-wider uppercase">
            {t("24 Chantiers Actifs • Bénin et Afrique de l’Ouest", "24 Active Worksites • Benin & West Africa")}
          </span>
        </div>

        {/* Titre Principal H1 - Modéré & Élégant */}
        <h1 className="font-title text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          {t("Bâtir ", "Building ")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C51B] via-amber-300 to-[#F5C51B]">
            {t("l’Excellence", "Excellence")}
          </span>
          {t(" d’Infrastructures Durables.", " for Sustainable Infrastructure.")}
        </h1>

        {/* Texte descriptif - Réduit et lisible */}
        <p className="text-sm sm:text-base text-gray-200 font-normal leading-relaxed max-w-2xl mx-auto">
          {t(
            "GILIS BTP déploie son ingénierie de pointe pour la conception, la construction et la réhabilitation d’ouvrages routiers, de bâtiments majeurs et de réseaux hydrauliques.",
            "GILIS BTP delivers high-level engineering for the design, construction, and rehabilitation of roads, major buildings, and hydraulic networks."
          )}
        </p>

        {/* Boutons d'action */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="hero-btn-soumettre"
            onClick={handleSoumettreClick}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#F5C51B] hover:bg-[#e0b213] text-[#0A1622] rounded-md font-bold text-sm sm:text-base transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center space-x-2 group cursor-pointer"
          >
            <span>{t("Soumettre un projet", "Submit a project")}</span>
            <ChevronRight className="w-5 h-5 text-[#0A1622] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-btn-expertises"
            onClick={handleExpertisesClick}
            className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-[#F5C51B] rounded-md font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer backdrop-blur-md"
          >
            <span>{t("Explorer nos domaines d’intervention", "Explore our areas of expertise")}</span>
            <ChevronRight className="w-5 h-5 text-[#F5C51B] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center space-x-2 pt-2">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlide ? 'w-8 bg-[#F5C51B]' : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 text-center pt-4">
        <a 
          href="#apropos" 
          className="inline-flex flex-col items-center text-xs text-gray-300 hover:text-[#F5C51B] transition-colors group cursor-pointer"
        >
          <span className="mb-1.5 uppercase tracking-widest text-[11px] font-semibold text-gray-300 group-hover:text-[#F5C51B]">
            {t("Découvrir notre site", "Discover our site")}
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#F5C51B]" />
        </a>
      </div>

    </section>
  );
};

