import React, { useState } from 'react';
import { ChevronRight, HardHat, Award, ShieldCheck, TrendingUp, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { CareerModal } from './CareerModal';

export const CareersSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const engineeringProfiles = [
    'Ingénieurs en Génie Civil',
    'Conducteurs de travaux',
    'Chefs de chantier',
    'Topographes & Mètreurs',
    'Responsables QHSE'
  ];

  const technicalProfiles = [
    'Spécialistes VRD & Routes',
    'Ingénieurs Hydraulique & AEP',
    'Techniciens bâtiment',
    'Mécaniciens d’engins lourds',
    'Conducteurs d’engins'
  ];

  const supportProfiles = [
    'Logisticiens de chantier',
    'Ouvriers qualifiés',
    'Administratifs & Financiers'
  ];

  return (
    <section id="carrieres" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#06090B] relative overflow-hidden border-t border-gray-200">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#F5C51B]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0E2232]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: HR Pitch & Value Pillars */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#0E2232] text-[#F5C51B] px-3.5 py-1.5 rounded-full border border-[#F5C51B]/30 text-xs font-title uppercase tracking-widest font-extrabold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#F5C51B]" />
                <span>Ressources Humaines &amp; Carrières</span>
              </div>

              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2232] tracking-tight leading-tight">
                Construisons l’avenir de nos territoires ensemble.
              </h2>

              <div className="h-1 w-20 bg-[#F5C51B] rounded-full"></div>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                GILIS BTP recherche en permanence des hommes et des femmes de valeur : rigoureux, passionnés et engagés dans l’exécution de chantiers d’exception.
              </p>
            </div>

            {/* 3 HR Value Pillars Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-2.5 shadow-sm hover:shadow-md hover:border-[#0E2232] transition-all group">
                <div className="p-2.5 bg-[#0E2232] w-fit rounded-xl text-[#F5C51B] group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-title text-xs font-extrabold text-[#0E2232]">Chantiers Majeurs</h4>
                <p className="text-[11px] text-gray-500 leading-tight">
                  Projets d'infrastructures d'envergure nationale et régionale.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-2.5 shadow-sm hover:shadow-md hover:border-[#0E2232] transition-all group">
                <div className="p-2.5 bg-[#0E2232] w-fit rounded-xl text-[#F5C51B] group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-title text-xs font-extrabold text-[#0E2232]">Sécurité QHSE</h4>
                <p className="text-[11px] text-gray-500 leading-tight">
                  Environnement de travail normé, équipements et santé au cœur.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 space-y-2.5 shadow-sm hover:shadow-md hover:border-[#0E2232] transition-all group">
                <div className="p-2.5 bg-[#0E2232] w-fit rounded-xl text-[#F5C51B] group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-title text-xs font-extrabold text-[#0E2232]">Promotion Interne</h4>
                <p className="text-[11px] text-gray-500 leading-tight">
                  Accompagnement continu, formations et évolution de carrière.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                id="careers-btn-modal"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center px-8 py-4 bg-[#0E2232] hover:bg-[#183952] text-white font-title font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <Send className="w-4 h-4 mr-2 text-[#F5C51B]" />
                <span>Déposer une candidature spontanée</span>
                <ChevronRight className="w-4 h-4 ml-2 text-[#F5C51B] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Categorized Profiles & Recruitment Hub */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 space-y-8 shadow-xl relative">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center space-x-3 text-[#0E2232]">
                <div className="p-2.5 bg-[#0E2232] text-[#F5C51B] rounded-2xl">
                  <HardHat className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-title text-lg sm:text-xl font-extrabold text-[#0E2232]">
                    Profils &amp; Métiers
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    Grandes familles de compétences recherchées
                  </p>
                </div>
              </div>
            </div>

            {/* Profiles Lists Categorized */}
            <div className="space-y-6">
              
              {/* Category 1: Ingénierie & Encadrement */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-title font-extrabold text-[#0E2232] uppercase tracking-wider flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5C51B]"></span>
                  <span>Ingénierie &amp; Direction de Chantier</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {engineeringProfiles.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-slate-50 hover:bg-[#0E2232] hover:text-white text-gray-700 border border-gray-200 rounded-xl text-xs font-medium transition-all flex items-center space-x-1.5 cursor-default group"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] group-hover:text-[#F5C51B]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2: Métiers Techniques & Ouvrages */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-title font-extrabold text-[#0E2232] uppercase tracking-wider flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5C51B]"></span>
                  <span>Opérations &amp; Spécialités Techniques</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technicalProfiles.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-slate-50 hover:bg-[#0E2232] hover:text-white text-gray-700 border border-gray-200 rounded-xl text-xs font-medium transition-all flex items-center space-x-1.5 cursor-default group"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] group-hover:text-[#F5C51B]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3: Logistique & Support */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-title font-extrabold text-[#0E2232] uppercase tracking-wider flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5C51B]"></span>
                  <span>Logistique &amp; Fonctions Support</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {supportProfiles.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-slate-50 hover:bg-[#0E2232] hover:text-white text-gray-700 border border-gray-200 rounded-xl text-xs font-medium transition-all flex items-center space-x-1.5 cursor-default group"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] group-hover:text-[#F5C51B]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <CareerModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};

