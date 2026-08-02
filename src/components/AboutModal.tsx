import React, { useEffect } from 'react';
import { X, Shield, Award, CheckCircle2, Lock, Lightbulb, Target, Eye, Building2, Quote } from 'lucide-react';
import { DIRECTOR_DATA } from '../data/gilisData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white text-[#06090B] rounded-2xl shadow-2xl overflow-y-auto border border-[#0E2232]/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0E2232] text-white border-b border-[#F5C51B]/30">
          <div className="flex items-center space-x-3">
            <Building2 className="w-6 h-6 text-[#F5C51B]" />
            <div>
              <h3 className="font-title text-lg md:text-xl font-bold tracking-tight text-white">
                GILIS BTP — Plaquette Institutionnelle
              </h3>
              <p className="font-subtitle text-xs text-[#F5C51B]">
                Présentation, mot du Directeur Général, mission, vision &amp; valeurs
              </p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-sm transition-colors cursor-pointer"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-10">
          
          {/* Mot du Directeur Général Block */}
          <div className="p-6 sm:p-8 bg-[#0E2232] text-white rounded-2xl border-l-4 border-[#F5C51B] shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5C51B] animate-pulse"></span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F5C51B]">
                  Le Mot du Directeur Général
                </span>
              </div>
              <span className="text-[11px] font-title italic text-gray-400 hidden sm:inline-block">
                « Bâtir l'excellence »
              </span>
            </div>

            <div className="grid md:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Photo & Title */}
              <div className="md:col-span-4 relative flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                <div className="relative w-40 sm:w-48 h-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#F5C51B]/50 shadow-2xl shrink-0">
                  <img
                    src={DIRECTOR_DATA.image}
                    alt={DIRECTOR_DATA.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2232]/80 via-transparent to-transparent"></div>
                </div>
                <div>
                  <h4 className="font-title font-extrabold text-base sm:text-lg text-white">
                    {DIRECTOR_DATA.name}
                  </h4>
                  <p className="font-subtitle text-xs text-[#F5C51B] font-medium">
                    {DIRECTOR_DATA.title}
                  </p>
                </div>
              </div>

              {/* Quote text */}
              <div className="md:col-span-8 space-y-3.5 text-xs sm:text-sm text-gray-200 leading-relaxed md:border-l border-white/10 md:pl-6">
                <Quote className="w-7 h-7 text-[#F5C51B]/60 mb-1" />
                <p>
                  Chez GILIS BTP, chaque projet représente une responsabilité majeure et une opportunité de bâtir durablement pour nos territoires.
                </p>
                <p>
                  Nous avons fait le choix d’une approche fondée sur la rigueur technique, la qualité d’exécution et le respect scrupuleux de nos engagements. Notre ambition ne se limite pas à réaliser des ouvrages. Nous voulons contribuer à la transformation socio-économique à travers des infrastructures utiles, résilientes et adaptées aux besoins réels.
                </p>
                <p className="font-bold text-white text-sm sm:text-base text-[#F5C51B] pt-1 italic">
                  « L’excellence ne se proclame pas, elle se construit à chaque étape du chantier. »
                </p>
              </div>
            </div>
          </div>

          {/* Présentation Générale */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
            <h4 className="font-title text-xl font-extrabold text-[#0E2232]">
              Présentation de l'Entreprise
            </h4>
            <p className="font-medium text-[#0E2232] text-base sm:text-lg border-l-4 border-[#F5C51B] pl-4 italic">
              GILIS BTP est une entreprise de bâtiment et travaux publics spécialisée dans la conception, la construction, l’aménagement, la réhabilitation et l’entretien d’infrastructures majeures.
            </p>
            <p>
              Notre expertise couvre notamment la construction de routes, de bâtiments, d’ouvrages de génie civil, de voiries et réseaux divers, de châteaux d’eau et d’infrastructures hydrauliques.
            </p>
            <p>
              Nous accompagnons les acteurs publics, les entreprises privées, les collectivités, les promoteurs et les partenaires institutionnels dans la réalisation de projets répondant à des exigences élevées de qualité, de sécurité et de performance.
            </p>
            <p>
              Chaque projet est abordé avec une méthodologie rigoureuse, depuis l’analyse des besoins et la préparation technique jusqu’à l’exécution des travaux et à la livraison de l’ouvrage.
            </p>
            <p>
              GILIS BTP s’engage à construire des infrastructures solides, fonctionnelles et durables, capables de répondre aux besoins actuels tout en accompagnant le développement futur des territoires.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            
            {/* Mission Card */}
            <div className="p-6 bg-[#F6F6F3] border border-[#0E2232]/10 rounded-2xl space-y-3">
              <div className="flex items-center space-x-3 text-[#0E2232]">
                <div className="p-2.5 bg-[#0E2232] text-[#F5C51B] rounded-xl">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-title text-xl font-bold">Notre mission</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Concevoir et réaliser des infrastructures fiables, performantes et durables, dans le respect des exigences techniques, humaines et environnementales.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-6 bg-[#0E2232] text-white rounded-2xl space-y-3 border border-[#F5C51B]/20">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-[#F5C51B] text-[#0E2232] rounded-xl">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-title text-xl font-bold text-white">Notre vision</h4>
              </div>
              <p className="text-sm text-gray-200 leading-relaxed">
                Devenir une référence du BTP en Afrique, reconnue pour la qualité de ses ouvrages, la rigueur de son organisation et sa contribution au développement des territoires.
              </p>
            </div>

          </div>

          {/* Values Section */}
          <div className="space-y-6 pt-4 border-t border-gray-200">
            <div>
              <span className="font-subtitle text-xs text-[#666A6D] uppercase tracking-wider font-bold">
                Nos Principes Fondateurs
              </span>
              <h4 className="font-title text-2xl font-extrabold text-[#0E2232]">
                Nos valeurs
              </h4>
              <div className="gold-line-h w-12 my-2"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Value 1: Rigueur */}
              <div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-[#F5C51B] transition-colors space-y-2">
                <div className="flex items-center space-x-2 text-[#0E2232]">
                  <Shield className="w-5 h-5 text-[#F5C51B]" />
                  <h5 className="font-title font-bold text-base">Rigueur</h5>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Nous travaillons avec précision, méthode et discipline, de la préparation du projet jusqu’à la livraison de l’ouvrage.
                </p>
              </div>

              {/* Value 2: Excellence */}
              <div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-[#F5C51B] transition-colors space-y-2">
                <div className="flex items-center space-x-2 text-[#0E2232]">
                  <Award className="w-5 h-5 text-[#F5C51B]" />
                  <h5 className="font-title font-bold text-base">Excellence</h5>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Nous recherchons constamment le plus haut niveau de qualité dans nos méthodes, nos réalisations et nos relations professionnelles.
                </p>
              </div>

              {/* Value 3: Intégrité */}
              <div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-[#F5C51B] transition-colors space-y-2">
                <div className="flex items-center space-x-2 text-[#0E2232]">
                  <CheckCircle2 className="w-5 h-5 text-[#F5C51B]" />
                  <h5 className="font-title font-bold text-base">Intégrité</h5>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Nous construisons des relations fondées sur la transparence, la responsabilité et le respect de nos engagements.
                </p>
              </div>

              {/* Value 4: Sécurité */}
              <div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-[#F5C51B] transition-colors space-y-2">
                <div className="flex items-center space-x-2 text-[#0E2232]">
                  <Lock className="w-5 h-5 text-[#F5C51B]" />
                  <h5 className="font-title font-bold text-base">Sécurité</h5>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Nous plaçons la protection des collaborateurs, des partenaires, des usagers et des communautés au cœur de nos opérations.
                </p>
              </div>

              {/* Value 5: Innovation */}
              <div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-[#F5C51B] transition-colors space-y-2 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-2 text-[#0E2232]">
                  <Lightbulb className="w-5 h-5 text-[#F5C51B]" />
                  <h5 className="font-title font-bold text-base">Innovation</h5>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Nous adoptons des méthodes, des équipements et des solutions permettant d’améliorer durablement la performance des projets.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#F6F6F3] border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#0E2232] hover:bg-[#1a3850] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Fermer la présentation
          </button>
        </div>

      </div>
    </div>
  );
};
