import React from 'react';
import { EXPERTISES } from '../data/gilisData';
import { 
  Building2, 
  Truck, 
  Landmark, 
  Network, 
  Droplets, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  FileText
} from 'lucide-react';
import { RequestType } from '../types';

interface ExpertisesSectionProps {
  onSelectRequestType?: (type: RequestType, customDetails?: string) => void;
}

export const ExpertisesSection: React.FC<ExpertisesSectionProps> = ({ onSelectRequestType }) => {

  const handleSoumettreProject = (expertiseTitle?: string) => {
    if (onSelectRequestType) {
      onSelectRequestType('devis', expertiseTitle ? `Étude demandée pour le pôle : ${expertiseTitle}` : undefined);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper function to map expertise ID to a distinct Lucide Icon
  const getExpertiseIcon = (id: string) => {
    switch (id) {
      case 'routes':
        return <Truck className="w-6 h-6 text-[#F5C51B]" />;
      case 'batiments':
        return <Building2 className="w-6 h-6 text-[#F5C51B]" />;
      case 'genie-civil':
        return <Landmark className="w-6 h-6 text-[#F5C51B]" />;
      case 'vrd':
        return <Network className="w-6 h-6 text-[#F5C51B]" />;
      case 'hydraulique':
        return <Droplets className="w-6 h-6 text-[#F5C51B]" />;
      case 'rehabilitation':
        return <RefreshCw className="w-6 h-6 text-[#F5C51B]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#F5C51B]" />;
    }
  };

  return (
    <section 
      id="expertises" 
      className="py-20 lg:py-28 bg-[#F8FAFC] text-[#06090B] relative overflow-hidden border-y border-gray-200"
    >
      {/* Background Ambient Touches */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5C51B]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0E2232]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header - Ultra Clear & Direct */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#0E2232] text-white px-4 py-1.5 rounded-full border border-[#F5C51B]/40 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#F5C51B]" />
            <span className="text-xs font-title uppercase tracking-widest font-extrabold text-[#F5C51B]">
              Nos 6 Domaines de Compétence
            </span>
          </div>

          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2232] tracking-tight">
            Nos Métiers &amp; Expertises BTP
          </h2>

          <div className="h-1 w-20 bg-[#F5C51B] mx-auto rounded-full"></div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Une organisation intégrée capable de prendre en charge tous vos chantiers et infrastructures de A à Z.
          </p>
        </div>

        {/* 6 Direct Cards - Clear Grid with Smooth Hover Animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTISES.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#0E2232] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden group relative before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#F5C51B] before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left z-0"
            >
              <div>
                {/* Image Header with Number & Domain Icon */}
                <div className="relative h-52 overflow-hidden bg-[#0E2232]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2232] via-[#0E2232]/40 to-transparent"></div>

                  {/* Top Bar on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    {/* Number Badge */}
                    <span className="bg-[#F5C51B] text-[#0E2232] text-xs font-title font-extrabold px-3 py-1 rounded-full shadow-md group-hover:scale-105 transition-transform">
                      Pôle {item.number}
                    </span>

                    {/* Domain Icon Circle */}
                    <div className="p-2.5 bg-[#0E2232]/90 backdrop-blur-md rounded-xl border border-white/20 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {getExpertiseIcon(item.id)}
                    </div>
                  </div>

                  {/* Title directly over image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-title text-xl font-extrabold text-white leading-snug drop-shadow-md group-hover:text-[#F5C51B] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                    {item.summary}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-title font-extrabold text-[#0E2232] uppercase tracking-wider block">
                      Prestations &amp; Travaux inclus :
                    </span>
                    <ul className="space-y-2">
                      {item.services.map((service, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#B8860B] group-hover:text-[#F5C51B] mr-2 mt-0.5 shrink-0 transition-colors" />
                          <span className="leading-tight">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Direct Card Action Button */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  onClick={() => handleSoumettreProject(item.title)}
                  className="w-full py-3.5 px-4 bg-[#0E2232] hover:bg-[#183952] text-white font-title text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center space-x-2 cursor-pointer group-hover:bg-[#F5C51B] group-hover:text-[#0E2232]"
                >
                  <span>Demander une étude / Devis</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Direct CTA Strip */}
        <div className="bg-[#0E2232] text-white rounded-2xl p-6 sm:p-8 shadow-xl border-l-8 border-[#F5C51B] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-[#F5C51B] text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantie Décennale &amp; Conformité Aux Normes BTP</span>
            </div>
            <h3 className="font-title text-lg sm:text-xl font-bold text-white">
              Besoin d'une offre globale combinant plusieurs métiers ?
            </h3>
            <p className="text-xs text-gray-300">
              Nos bureaux d'études chiffrent vos projets d'aménagement complets et appels d'offres en 48h.
            </p>
          </div>

          <button
            onClick={() => handleSoumettreProject()}
            className="shrink-0 px-7 py-3.5 bg-[#F5C51B] hover:bg-[#e0b213] text-[#0E2232] font-title font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Soumettre un projet global</span>
          </button>
        </div>

      </div>
    </section>
  );
};




