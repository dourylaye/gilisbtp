import React from 'react';
import { ChevronRight, FileCheck } from 'lucide-react';
import { RequestType } from '../types';

interface CallToActionBannerProps {
  onSelectRequestType?: (type: RequestType) => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({ onSelectRequestType }) => {
  const handleAction = (type: RequestType) => {
    if (onSelectRequestType) {
      onSelectRequestType(type);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#0A1622] text-white relative overflow-hidden border-t-2 border-[#F5C51B]">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5C51B_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="font-subtitle text-xs text-[#F5C51B] uppercase tracking-widest font-bold">
              Lancement &amp; Étude de vos chantiers
            </span>
            <h2 className="font-title text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Vous avez un projet d’infrastructure ou de bâtiment ?
            </h2>
            <p className="text-sm sm:text-base text-gray-300">
              Nos ingénieurs et métreurs étudient votre dossier sous 48h. Soumettez vos plans ou demandez une estimation financière gratuite.
            </p>
          </div>

          <div className="flex flex-col items-stretch sm:items-end gap-3.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => handleAction('Demande de devis')}
              className="w-full sm:w-72 px-7 py-4 bg-[#F5C51B] hover:bg-[#e0b213] text-[#0A1622] font-bold text-sm rounded-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Demander un Devis Gratuit</span>
              <ChevronRight className="w-4 h-4 text-[#0A1622]" />
            </button>

            <button
              onClick={() => handleAction('Soumission de projet')}
              className="w-full sm:w-72 px-7 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-lg border border-white/20 hover:border-[#F5C51B] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer backdrop-blur-md"
            >
              <span>Soumettre un Projet</span>
              <FileCheck className="w-4 h-4 text-[#F5C51B]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

