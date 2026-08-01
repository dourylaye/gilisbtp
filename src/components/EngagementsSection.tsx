import React from 'react';
import { ShieldCheck, HardHat, Clock, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const EngagementsSection: React.FC = () => {
  const engagements = [
    {
      title: 'Qualité & Conformité Technique',
      icon: ShieldCheck,
      badge: 'Normes ISO / BTP',
      description: 'Respect scrupuleux des normes BTP internationales, des règles de l’art et des cahiers des charges les plus exigeants.'
    },
    {
      title: 'Sécurité QHSE & Protection',
      icon: HardHat,
      badge: 'Zéro Accident',
      description: 'Politique zéro accident sur nos chantiers. Formations continues, équipements de protection et contrôles préventifs quotidiens.'
    },
    {
      title: 'Respect des Délais Contractuels',
      icon: Clock,
      badge: 'Gestion Temps Réel',
      description: 'Planification rigoureuse, logiciels de suivi de chantier avancés et optimisation logistique pour des livraisons toujours à temps.'
    },
    {
      title: 'Éco-Responsabilité & Durabilité',
      icon: Leaf,
      badge: 'Chantiers Verts',
      description: 'Gestion contrôlée des déchets, choix de matériaux durables et préservation des écosystèmes locaux pendant les travaux.'
    }
  ];

  return (
    <section 
      id="engagements" 
      className="py-24 text-[#0E2232] relative overflow-hidden bg-[#F7F4EE]"
    >
      {/* Background High Quality BTP Construction Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=2000"
          alt="Chantier BTP - Nos Engagements"
          className="w-full h-full object-cover object-center opacity-40 filter brightness-95 contrast-105"
        />
        {/* Soft Warm Gradients for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EE] via-[#F7F4EE]/70 to-[#F7F4EE]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EE]/80 via-transparent to-[#F7F4EE]/80"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#B8860B_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
      </div>

      {/* Floating Animated Light Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-[#F5C51B]/20 rounded-full blur-3xl pointer-events-none z-0"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-[#0E2232]/10 rounded-full blur-3xl pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header with Motion Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-[#0E2232]/10 text-[#0E2232] px-4 py-1.5 rounded-full border border-[#0E2232]/15 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0E2232]" />
            <span className="text-xs uppercase tracking-widest font-extrabold">
              Déontologie &amp; Responsabilité
            </span>
          </div>

          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2232] tracking-tight leading-tight">
            Nos Engagements Stratégiques
          </h2>

          <div className="h-1.5 w-16 bg-[#F5C51B] mx-auto rounded-full"></div>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
            Parce que la confiance de nos partenaires institutionnels et privés se gagne sur le terrain par des actes mesurables et une rigueur sans faille.
          </p>
        </motion.div>

        {/* Dynamic Animated Glass Card Grid with Motion */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {engagements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/95 backdrop-blur-xl border border-amber-900/10 hover:border-[#0E2232] p-7 rounded-2xl transition-shadow duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Glowing Top Gold Border Bar Effect */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F5C51B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Subtle Ambient Light Corner Glow */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#F5C51B]/20 rounded-full blur-2xl group-hover:bg-[#F5C51B]/40 transition-all duration-500 pointer-events-none"></div>

                <div className="space-y-5 relative z-10">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-[#0E2232] group-hover:bg-[#F5C51B] text-[#F5C51B] group-hover:text-[#0E2232] rounded-xl flex items-center justify-center transition-all duration-300 shadow-md transform group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-7 h-7 transition-transform duration-300" />
                    </div>

                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#0E2232]/10 group-hover:bg-[#0E2232] text-[#0E2232] group-hover:text-[#F5C51B] px-2.5 py-1 rounded-full border border-[#0E2232]/15 transition-all">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-title text-lg sm:text-xl font-extrabold text-[#0E2232] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Indicator */}
                <div className="pt-6 mt-4 border-t border-gray-200/80 flex items-center space-x-2 text-xs font-bold text-[#0E2232] opacity-85 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-4 h-4 text-[#0E2232]" />
                  <span className="uppercase text-[11px] tracking-wider font-extrabold">Engagement Garanti</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

