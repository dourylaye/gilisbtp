import React from 'react';
import { Compass, Hammer, Wrench, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SmartImage } from './SmartImage';

export const InterventionAxes: React.FC = () => {
  const axes = [
    {
      number: '01',
      title: 'Études, Ingénierie & VRD',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
      tag: 'FASE PRÉPARATOIRE',
      description: 'Nous préparons chaque chantier avec une rigueur géotechnique et topographique absolue pour anticiper les défis du terrain.',
      details: 'Analyse d’impact, études de sol, levés topographiques au drone, métrés détaillés et dimensionnement des voies et réseaux divers (VRD).'
    },
    {
      number: '02',
      title: 'Construction & Génie Civil',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=800',
      tag: 'RÉALISATION LOURDE',
      description: 'Déploiement de notre parc d’engins lourds pour la construction de routes bitumées, ponts, bâtiments et châteaux d’eau.',
      details: 'Coordination d’ateliers d’asphaltage, coffrage béton armé, montage de structures métalliques et pose de canalisations haute pression.'
    },
    {
      number: '03',
      title: 'Entretien & Réhabilitation',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      tag: 'PÉRENNISATION',
      description: 'Preservation et modernisation des infrastructures existantes pour prolonger leur durée de vie opérationnelle.',
      details: 'Diagnostique structurel, reprofilage routier, rechargement de chaussées, renforcement de ponts et mise aux normes environnementales.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] text-[#06090B] border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="font-subtitle text-xs sm:text-sm text-[#0E2232] uppercase tracking-widest font-bold bg-[#F5C51B]/15 px-3 py-1 rounded-full border border-[#F5C51B]/30 inline-block">
            Chaîne de Valeur Intégrée
          </span>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2232] tracking-tight">
            Une Maîtrise Totale du Cycle de Construction
          </h2>
          <div className="h-1 w-20 bg-[#F5C51B] mx-auto my-3 rounded-full"></div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            De la première étude géotechnique à la livraison des clés, une prise en charge globale, rigoureuse et normée.
          </p>
        </div>

        {/* 3 Axes Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {axes.map((axis) => {
            const Icon = axis.icon;
            return (
              <div 
                key={axis.number}
                className="group bg-[#F8FAFC] border border-gray-200 hover:border-[#F5C51B] rounded-xl transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-2xl transform hover:-translate-y-1"
              >
                {/* Image Header */}
                <div className="relative h-52 overflow-hidden bg-[#0A1622]">
                  <SmartImage
                    src={axis.image}
                    alt={axis.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1622] via-[#0A1622]/40 to-transparent"></div>
                  
                  {/* Tag Badge */}
                  <span className="absolute top-4 left-4 font-subtitle text-[10px] font-bold text-[#0A1622] bg-[#F5C51B] px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    {axis.tag}
                  </span>

                  {/* Number Badge */}
                  <span className="absolute top-4 right-4 font-title text-xl font-bold text-white bg-black/50 px-3 py-1 rounded-md border border-white/20 backdrop-blur-md">
                    {axis.number}
                  </span>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4 p-3 bg-[#0E2232] text-[#F5C51B] rounded-lg shadow-lg border border-[#F5C51B]/30 group-hover:bg-[#F5C51B] group-hover:text-[#0E2232] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-title text-xl font-bold text-[#0E2232]">
                      {axis.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#0E2232] leading-relaxed">
                      {axis.description}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed pt-3 border-t border-gray-200">
                      {axis.details}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center text-xs font-bold text-[#0E2232] group-hover:text-[#0E2232]">
                    <ShieldCheck className="w-4 h-4 text-[#F5C51B] mr-2" />
                    <span>Procédures Qualité &amp; Sécurité</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

