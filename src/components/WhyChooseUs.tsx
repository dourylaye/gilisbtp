import React from 'react';
import { ShieldCheck, Cpu, Users, Layers, Zap, Landmark, CheckCircle2, Award, Sparkles, Building2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const atouts = [
    {
      number: '01',
      title: 'Parc d’Équipements en Propre',
      description: 'Plus de 1 000 engins lourds, centrales d’enrobé à chaud et camions de transport mobilisables sans délai intermédiaire.',
      icon: Cpu,
      badge: '+1 000 Engins'
    },
    {
      number: '02',
      title: 'Ingénierie & Capital Humain',
      description: 'Plus de 50 experts, ingénieurs géomètres, conducteurs de travaux et techniciens certifiés dédiés à vos chantiers.',
      icon: Users,
      badge: '50+ Experts'
    },
    {
      number: '03',
      title: 'Maîtrise Absolue des Délais',
      description: 'Planification digitale par chemin critique et pilotage quotidien garantissant la livraison de vos ouvrages sans retard.',
      icon: ShieldCheck,
      badge: '100% Respectés'
    },
    {
      number: '04',
      title: 'Laboratoire Qualité Intégré',
      description: 'Essais systématiques sur les matériaux (bétons, enrobés, sols) et traçabilité certifiée pour une durabilité maximale.',
      icon: Layers,
      badge: 'Normes ISO'
    },
    {
      number: '05',
      title: 'Solidité Financière & Garanties',
      description: 'Capacité de préfinancement importante, garanties décennales et partenariats bancaires de premier ordre.',
      icon: Landmark,
      badge: 'Garantie Décennale'
    },
    {
      number: '06',
      title: 'Ancrage & Logistique Sous-Régionale',
      description: 'Présence dans 5+ pays d’Afrique de l’Ouest appuyée par un réseau réactif de plus de 100 fournisseurs de confiance.',
      icon: Zap,
      badge: '+5 Pays Covered'
    }
  ];

  return (
    <section id="atouts" className="py-20 lg:py-28 bg-[#F8FAFC] text-[#0E2232] relative overflow-hidden">
      {/* Background Subtle Architectural Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0E2232_1px,transparent_1px),linear-gradient(to_bottom,#0E2232_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-[#0E2232]/5 text-[#0E2232] px-4 py-1.5 rounded-full border border-[#0E2232]/10 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C51B]" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#0E2232]">
                Nos Atouts Concurrentiels
              </span>
            </div>

            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2232] tracking-tight leading-tight">
              Pourquoi Accorder Votre Confiance à GILIS BTP ?
            </h2>

            <div className="h-1.5 w-20 bg-[#F5C51B] rounded-full"></div>
          </div>

          <div className="lg:col-span-5">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
              Nous allions la puissance matérielle d'un géant des infrastructures avec la flexibilité et la rigueur technique d'un bureau d'études de premier rang.
            </p>
          </div>
        </div>

        {/* Asymmetric Showcase: Big Highlight Banner Left + 6 Cards Grid Right */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Dark Navy Master Value Card */}
          <div className="lg:col-span-4 bg-[#0E2232] text-white p-8 rounded-3xl border border-[#0E2232] shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            {/* Background Glow inside card */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F5C51B]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F5C51B]/25 transition-all duration-500"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 bg-[#F5C51B] text-[#0E2232] rounded-2xl flex items-center justify-center font-extrabold shadow-lg">
                <Award className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#F5C51B] block">
                  Engagement Institutionnel
                </span>
                <h3 className="font-title text-2xl font-extrabold text-white leading-snug">
                  Zéro Compromis sur la Qualité &amp; la Sécurité
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                Chaque contrat signé avec GILIS BTP est adossé à des garanties décennales, des assurances tous risques chantier et un Plan d’Assurance Qualité (PAQ) certifié par les bureaux de contrôle indépendants.
              </p>

              <ul className="space-y-2.5 pt-2">
                {[
                  'Certification des matériaux en laboratoire',
                  'Garanties décennales & assurances BTP',
                  'Supervision continue QHSE & Sécurité',
                  'Transparence des coûts & reporting digital'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2.5 text-xs text-gray-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#F5C51B] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 relative z-10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Building2 className="w-5 h-5 text-[#F5C51B]" />
                <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                  GILIS BTP SARL
                </span>
              </div>
              <span className="text-[10px] font-bold text-[#F5C51B] bg-[#F5C51B]/10 px-2.5 py-1 rounded-full border border-[#F5C51B]/20">
                AFRIQUE DE L'OUEST
              </span>
            </div>
          </div>

          {/* Right Column: 6 Structured Advantage Cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {atouts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-gray-200/90 hover:border-[#F5C51B] p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Gold Accent Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#F5C51B] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="space-y-4">
                    {/* Number & Icon Header */}
                    <div className="flex items-center justify-between">
                      <span className="font-title text-xl font-extrabold text-gray-300 group-hover:text-[#F5C51B] transition-colors">
                        {item.number}
                      </span>
                      <div className="w-10 h-10 bg-[#0E2232] text-[#F5C51B] rounded-xl flex items-center justify-center group-hover:bg-[#F5C51B] group-hover:text-[#0E2232] transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-title font-extrabold text-base text-[#0E2232] group-hover:text-[#0E2232] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0E2232] bg-gray-100 group-hover:bg-[#F5C51B]/20 group-hover:text-[#0E2232] px-2.5 py-1 rounded-full transition-colors">
                      {item.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
