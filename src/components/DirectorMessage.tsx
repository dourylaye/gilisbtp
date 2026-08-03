import React from 'react';
import { DIRECTOR_DATA } from '../data/gilisData';
import { Quote } from 'lucide-react';
import { SmartImage } from './SmartImage';

export const DirectorMessage: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0E2232] text-white relative overflow-hidden">
      
      {/* Background architectural pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5C51B_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Director Photo with Gold framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-2 border-[#F5C51B]/30 max-w-md mx-auto">
              <SmartImage
                src={DIRECTOR_DATA.image}
                alt={DIRECTOR_DATA.name}
                className="w-full h-[400px] sm:h-[480px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2232] via-transparent to-transparent opacity-70"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0E2232]/90 backdrop-blur-md border-l-4 border-[#F5C51B] rounded-sm">
                <p className="font-title font-bold text-lg text-white">{DIRECTOR_DATA.name}</p>
                <p className="font-subtitle text-xs text-[#F5C51B]">{DIRECTOR_DATA.title}</p>
              </div>
            </div>

            {/* Architectural accent box behind */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#F5C51B]/40 rounded-sm -z-0 hidden sm:block max-w-md mx-auto"></div>
          </div>

          {/* Director Quote Content with Vertical Gold Line */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="font-subtitle text-xs sm:text-sm text-[#F5C51B] uppercase tracking-wider">
                Notre vision
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Le mot de la Direction
              </h2>
              <div className="gold-line-h w-16 my-2"></div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-4 border-[#F5C51B] space-y-4 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <Quote className="w-8 h-8 text-[#F5C51B]/40 mb-2" />
              
              <p>
                Chez GILIS BTP, chaque projet représente une responsabilité et une occasion de construire durablement.
              </p>
              
              <p>
                Nous avons fait le choix d’une approche fondée sur la rigueur, la qualité d’exécution et le respect de nos engagements. Notre ambition ne se limite pas à réaliser des ouvrages. Nous voulons contribuer à la transformation des territoires à travers des infrastructures utiles, solides et adaptées aux besoins des populations.
              </p>
              
              <p>
                La réussite de nos projets repose sur la compétence de nos équipes, la confiance de nos clients et partenaires, ainsi que notre capacité à rechercher constamment des solutions plus performantes.
              </p>
              
              <p className="font-semibold text-white pt-2">
                Nous avons une conviction forte : l’excellence ne se proclame pas, elle se construit à chaque étape.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="font-title font-bold text-lg text-white">{DIRECTOR_DATA.name}</p>
                <p className="font-subtitle text-xs text-[#F5C51B]">{DIRECTOR_DATA.title}</p>
              </div>
              <div className="font-subtitle italic text-xs text-gray-400">
                GILIS BTP — Bâtir l'excellence
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
