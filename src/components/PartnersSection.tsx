import React from 'react';
import { Home, Building2, Factory, Landmark, HardHat, ShieldCheck, Award, Briefcase, Quote, FileCheck } from 'lucide-react';
import { RequestType } from '../types';

interface PartnersSectionProps {
  onSelectRequestType?: (type: RequestType) => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onSelectRequestType }) => {
  const handleAction = (type: RequestType) => {
    if (onSelectRequestType) {
      onSelectRequestType(type);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const row1Squares = [
    {
      id: 'sq1',
      title: 'Particuliers',
      subtitle: 'Maisons & Villas de standing',
      icon: Home,
      badge: 'Résidentiel'
    },
    {
      id: 'sq2',
      title: 'Promoteurs Immobiliers',
      subtitle: 'Résidences & Bâtiments R+X',
      icon: Building2,
      badge: 'Immobilier'
    },
    {
      id: 'sq3',
      title: 'Entreprises & Industries',
      subtitle: 'Sièges, Entrepôts & Usines',
      icon: Factory,
      badge: 'Tertiaire'
    },
    {
      id: 'sq4',
      title: 'Institutions Publiques',
      subtitle: 'Infrastructures & Ministères',
      icon: Landmark,
      badge: 'Public'
    }
  ];

  const row2Squares = [
    {
      id: 'sq5',
      title: 'Génie Civil & VRD',
      subtitle: 'Routes, Ponts & Réseaux',
      icon: HardHat,
      badge: 'Ouvrages'
    },
    {
      id: 'sq6',
      title: 'BOAD & Financeurs',
      subtitle: 'Partenaires Financiers',
      icon: ShieldCheck,
      badge: 'Bailleurs'
    },
    {
      id: 'sq7',
      title: 'Maîtres d’Ouvrage',
      subtitle: 'Projets Majeurs d’Envergure',
      icon: Award,
      badge: 'Supervision'
    },
    {
      id: 'sq8',
      title: 'Fournisseurs Agrées',
      subtitle: 'Ciment, Béton & Équipements',
      icon: Briefcase,
      badge: 'Qualité'
    }
  ];

  // Duplicate for seamless infinite scrolling loop
  const dupRow1 = [...row1Squares, ...row1Squares, ...row1Squares];
  const dupRow2 = [...row2Squares, ...row2Squares, ...row2Squares];

  return (
    <section id="partenaires" className="py-20 lg:py-28 bg-[#F6F6F3] text-[#06090B] relative overflow-hidden border-t border-b border-gray-200">
      {/* Background subtleties */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0E2232_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F5C51B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F5C51B] animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#0E2232]">
              Ils nous font confiance
            </span>
          </div>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2232] tracking-tight">
            Des Partenariats Solides, une Même Exigence
          </h2>
          <div className="gold-line-h w-20 mx-auto my-3"></div>
        </div>

        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Requested Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200/90 shadow-md relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#F5C51B]"></div>
              
              <div className="space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p className="font-medium text-[#0E2232]">
                  Des particuliers nous confient la construction de leurs espaces de vie. Des promoteurs immobiliers font appel à notre expertise pour bâtir leurs résidences, bâtiments et immeubles. Des entreprises et institutions comptent sur nous pour réaliser des infrastructures solides, fonctionnelles et durables.
                </p>

                <p className="text-gray-600">
                  Du projet familial au chantier d’envergure, GILIS BTP transforme chaque ambition en une réalisation conçue pour durer.
                </p>

                {/* Styled Highlight Banner */}
                <div className="mt-6 pt-6 border-t border-gray-100 bg-gradient-to-r from-[#0E2232] to-[#122A3F] text-white p-5 rounded-xl relative shadow-sm">
                  <Quote className="w-8 h-8 text-[#F5C51B]/30 absolute top-3 right-3 pointer-events-none" />
                  <p className="font-title text-base sm:text-lg font-bold text-[#F5C51B] tracking-wide relative z-10">
                    « Des projets différents. Une même exigence : bâtir l’excellence. »
                  </p>
                </div>

                {/* Soumettre un projet Button */}
                <div className="pt-2 flex justify-start">
                  <button
                    onClick={() => handleAction('Soumission de projet')}
                    className="px-6 py-3.5 bg-[#F5C51B] hover:bg-[#e0b213] text-[#0A1622] font-extrabold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2.5 cursor-pointer group"
                  >
                    <span>Soumettre un projet</span>
                    <FileCheck className="w-4 h-4 text-[#0A1622] group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Auto-Scrolling Squares (Carrés) */}
          <div className="lg:col-span-6 space-y-4 overflow-hidden relative py-2">
            
            {/* Gradient Edge Masks for soft fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F6F6F3] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F6F6F3] to-transparent z-10 pointer-events-none"></div>

            {/* Row 1: Scrolling Left */}
            <div className="flex items-center space-x-4 w-max animate-infinite-scroll">
              {dupRow1.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className="w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-2xl bg-white border border-gray-200/90 shadow-xs p-4 flex flex-col justify-between items-center text-center hover:border-[#F5C51B] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-[10px] font-bold text-[#0E2232] bg-amber-50 px-2 py-0.5 rounded-full border border-[#F5C51B]/30 group-hover:bg-[#F5C51B] group-hover:text-[#0E2232] transition-colors">
                      {item.badge}
                    </span>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-gray-100 group-hover:bg-[#0E2232] group-hover:text-[#F5C51B] transition-colors">
                      <IconComponent className="w-6 h-6 text-[#0E2232] group-hover:text-[#F5C51B] transition-colors" />
                    </div>

                    <div>
                      <h4 className="font-title font-bold text-xs sm:text-sm text-[#0E2232] leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-0.5 truncate max-w-[130px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Row 2: Scrolling Right */}
            <div className="flex items-center space-x-4 w-max animate-infinite-scroll-reverse">
              {dupRow2.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={`${item.id}-${idx}`}
                    className="w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-2xl bg-white border border-gray-200/90 shadow-xs p-4 flex flex-col justify-between items-center text-center hover:border-[#F5C51B] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                  >
                    <span className="text-[10px] font-bold text-[#0E2232] bg-amber-50 px-2 py-0.5 rounded-full border border-[#F5C51B]/30 group-hover:bg-[#F5C51B] group-hover:text-[#0E2232] transition-colors">
                      {item.badge}
                    </span>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-gray-100 group-hover:bg-[#0E2232] group-hover:text-[#F5C51B] transition-colors">
                      <IconComponent className="w-6 h-6 text-[#0E2232] group-hover:text-[#F5C51B] transition-colors" />
                    </div>

                    <div>
                      <h4 className="font-title font-bold text-xs sm:text-sm text-[#0E2232] leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-gray-500 mt-0.5 truncate max-w-[130px]">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
