import React, { useState } from 'react';
import { Eye, Target, Rocket, ArrowUpRight, CheckCircle2, Truck } from 'lucide-react';
import { AboutModal } from './AboutModal';
import { useLanguage } from '../context/LanguageContext';
import { SmartImage } from './SmartImage';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      icon: Eye,
      badge: '01 • Vision',
      title: t('Notre Vision', 'Our Vision'),
      desc: t(
        'Être la référence sous-régionale en matière d’ingénierie, de construction durable et de modernisation des infrastructures routières et urbaines en Afrique de l’Ouest.',
        'To be the sub-regional reference in engineering, sustainable construction, and modernization of road and urban infrastructure in West Africa.'
      )
    },
    {
      id: 2,
      icon: Target,
      badge: '02 • Mission',
      title: t('Notre Mission', 'Our Mission'),
      desc: t(
        'Concevoir et réaliser des grands travaux de haute qualité technique en mobilisant des équipements de pointe, des expertises éprouvées et un engagement constant sur le terrain.',
        'To design and execute high-tech civil works using state-of-the-art machinery, proven technical expertise, and continuous field commitment.'
      )
    },
    {
      id: 3,
      icon: Rocket,
      badge: '03 • Ambition',
      title: t('Notre Ambition', 'Our Ambition'),
      desc: t(
        'Étendre notre empreinte géographique, renforcer l’autonomie industrielle locale et bâtir des ouvrages d’art résilients qui façonnent le développement économique durable.',
        'To expand our regional reach, strengthen local industrial capabilities, and construct resilient civil structures shaping sustainable economic growth.'
      )
    }
  ];

  return (
    <section id="apropos" className="py-20 lg:py-28 bg-[#FFFFFF] text-[#06090B] relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#0E2232_1px,transparent_1px),linear-gradient(to_bottom,#0E2232_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#F5C51B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-gray-100">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 bg-slate-50 text-[#0E2232] px-3.5 py-1.5 rounded-full border border-gray-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F5C51B] animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#0E2232]">
                {t("Qui sommes-nous ?", "About Us")}
              </span>
            </div>
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2232] tracking-tight leading-tight">
              {t("Bâtir l’Avenir avec Rigueur, Puissance & Vision", "Building the Future with Precision, Power & Vision")}
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              {t(
                "Acteur majeur du BTP, des Travaux Publics et du Génie Civil, GILIS BTP SARL conçoit et réalise les infrastructures stratégiques qui transforment le paysage du Bénin et d’Afrique de l’Ouest.",
                "A leading player in civil engineering, road works, and general construction, GILIS BTP SARL designs and constructs strategic infrastructures transforming Benin and West Africa."
              )}
            </p>

            <button
              id="about-btn-presentation"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center space-x-2.5 px-6 py-3.5 bg-[#0E2232] hover:bg-[#183952] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer group"
            >
              <span>{t("Découvrir notre plaquette institutionnelle", "Discover our corporate brochure")}</span>
              <ArrowUpRight className="w-4 h-4 text-[#F5C51B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Asymmetric 2-Column Core Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Refined Pillars List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-[#F5C51B] bg-[#0E2232] px-3 py-1 rounded-md tracking-wider uppercase">
                {t("Notre ADN Opérationnel", "Our Operational DNA")}
              </span>
              <h3 className="font-title text-2xl sm:text-3xl font-extrabold text-[#0E2232] leading-snug">
                {t("Une maîtrise complète de la chaîne de construction.", "Complete mastery across the entire construction lifecycle.")}
              </h3>
            </div>

            {/* Interactive Pillar List Cards */}
            <div className="space-y-4 pt-2">
              {pillars.map((item, idx) => {
                const IconComp = item.icon;
                const isHovered = hoveredPillar === idx;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredPillar(idx)}
                    onMouseLeave={() => setHoveredPillar(null)}
                    className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                      isHovered
                        ? 'bg-[#0E2232] text-white border-[#0E2232] shadow-xl translate-x-1'
                        : 'bg-slate-50/80 hover:bg-slate-100 text-[#0E2232] border-gray-200/80'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-xl transition-colors shrink-0 ${
                          isHovered
                            ? 'bg-[#F5C51B] text-[#0E2232]'
                            : 'bg-[#0E2232] text-[#F5C51B]'
                        }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>

                      <div className="space-y-1.5 flex-1">
                        <h4 className={`font-title font-extrabold text-base sm:text-lg ${isHovered ? 'text-white' : 'text-[#0E2232]'}`}>
                          {item.title}
                        </h4>
                        <p className={`text-xs sm:text-sm leading-relaxed ${isHovered ? 'text-gray-300' : 'text-gray-600'}`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Material Capacity Highlight Image Showcase */}
          <div className="lg:col-span-5 relative flex flex-col h-full min-h-[380px]">
            <div className="relative rounded-3xl overflow-hidden border border-gray-200/80 shadow-2xl bg-[#0A1622] group h-full flex flex-col justify-between p-6 sm:p-7">
              <SmartImage
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"
                alt="Capacité matérielle et engins lourds GILIS BTP"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1622] via-[#0A1622]/30 to-transparent"></div>

              {/* Floating Top Badge */}
              <div className="relative z-10 flex justify-between items-center">
                <span className="bg-[#0E2232]/90 backdrop-blur-md text-[#F5C51B] text-xs font-extrabold px-3.5 py-1.5 rounded-full border border-[#F5C51B]/30 shadow-lg">
                  GILIS BTP SARL
                </span>
                <span className="bg-white/10 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                  {t("Autonomie Logistique", "Logistics Autonomy")}
                </span>
              </div>

              {/* Floating Dark Glass Overlay */}
              <div className="relative z-10 p-5 sm:p-6 bg-[#0A1622]/95 backdrop-blur-md text-white rounded-2xl border-l-4 border-[#F5C51B] shadow-2xl space-y-2 mt-auto">
                <div className="flex items-center space-x-2 text-[#F5C51B] text-xs font-extrabold uppercase tracking-wider">
                  <Truck className="w-4 h-4" />
                  <span>{t("Puissance Matérielle & Logistique", "Equipment & Logistics Fleet")}</span>
                </div>
                <h4 className="font-title text-lg font-extrabold text-white">
                  {t("+50 engins et équipements", "50+ Machinery & Fleet Units")}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {t(
                    "Un parc performant comprenant 20 bétonnières, des panneaux de coffrage et des équipements adaptés à la réalisation de chantiers de toutes envergures.",
                    "A high-capacity fleet featuring 20 concrete mixers, shuttering panels, and heavy machinery for projects of all sizes."
                  )}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-[11px] text-gray-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F5C51B]" />
                  <span>{t("20 bétonnières • Coffrages • Équipements de chantier", "20 concrete mixers • Shuttering • On-site machinery")}</span>
                </div>
              </div>
            </div>

            {/* Subtle Architectural Backing Border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#F5C51B]/40 rounded-3xl -z-10 hidden sm:block"></div>
          </div>

        </div>

      </div>

      {/* Presentation Modal */}
      <AboutModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
};
