import React from 'react';
import { PARTNERS } from '../data/gilisData';
import { Building2, ShieldCheck, Award } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  // Duplicate list to ensure continuous infinite marquee scrolling
  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section class="py-20 bg-white text-[#06090B] relative overflow-hidden border-t border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Header */}
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="font-subtitle text-xs sm:text-sm text-[#0E2232] uppercase tracking-wider font-semibold">
            Ils nous font confiance
          </span>
          <h2 class="font-title text-3xl sm:text-4xl font-bold text-[#0E2232] tracking-tight">
            Des relations construites dans la durée
          </h2>
          <div class="gold-line-h w-16 mx-auto my-2"></div>
          <p class="text-gray-600 text-sm sm:text-base">
            GILIS BTP développe des relations durables avec ses clients, partenaires techniques, fournisseurs, institutions et maîtres d’ouvrage.
          </p>
        </div>

      </div>

      {/* Marquee Carousel Container */}
      <div class="relative w-full overflow-hidden py-4 bg-[#F6F6F3]">
        {/* Gradient edge masks for smooth fade */}
        <div class="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F6F6F3] to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F6F6F3] to-transparent z-10 pointer-events-none"></div>

        <div class="flex items-center space-x-8 sm:space-x-12 w-max animate-infinite-scroll hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, idx) => (
            <div
              key={`${partner.id}-${idx}`}
              class="flex flex-col items-center justify-center p-4 px-6 bg-white border border-gray-200 rounded-sm shadow-xs grayscale hover:grayscale-0 hover:border-[#0E2232] hover:shadow-md transition-all duration-300 w-48 sm:w-56 h-24 shrink-0 group cursor-pointer"
            >
              <div class="flex items-center space-x-2 text-[#0E2232]">
                <Building2 class="w-5 h-5 text-gray-400 group-hover:text-[#F5C51B] transition-colors" />
                <span class="font-title font-bold text-xs sm:text-sm tracking-wider text-center group-hover:text-[#0E2232]">
                  {partner.logoText}
                </span>
              </div>
              <span class="text-[10px] text-gray-500 font-subtitle mt-1 group-hover:text-[#0E2232]">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center">
        <p class="text-xs text-gray-500 font-subtitle">
          Institutionnels • Agences nationales de développement • Financeurs internationaux • Leaders industriels
        </p>
      </div>
    </section>
  );
};
