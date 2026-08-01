import React, { useState } from 'react';
import { METHOD_STEPS } from '../data/gilisData';
import { 
  Search, 
  Ruler, 
  HardHat, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Truck,
  FileCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const MethodSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Search, Ruler, HardHat, ShieldCheck, CheckCircle2];
  
  const stepDetails = [
    {
      subtitle: 'Audit, Faisabilité & Analyse Topographique',
      deliverables: ['Relevés topographiques 3D', 'Analyse du cahier des charges', 'Identification des contraintes du site'],
      resources: ['Équipe d’Ingénieurs Géomètres', 'Drones de cartographie', 'Laboratoire géotechnique agréé'],
      qualityCheck: 'Validation des données de terrain & plan d’impact environnemental'
    },
    {
      subtitle: 'Ingénierie, Modélisation & Calculs de Structure',
      deliverables: ['Essais géotechniques en laboratoire', 'Dimensionnement des chaussées & ouvrages', 'Planning d’exécution & budgétisation'],
      resources: ['Bureau d’Études GILIS BTP', 'Logiciels de DAO/CAO BTP', 'Experts en Génie Civil'],
      qualityCheck: 'Validation du Plan d’Assurance Qualité (PAQ) & études de sol'
    },
    {
      subtitle: 'Mobilisation des Engins Lourds & Déploiement',
      deliverables: ['Installation de la base-vie', 'Acheminement des engins lourds', 'Terrassement & préparation des assises'],
      resources: ['Parc de +1 000 engins en propre', 'Centrales mobiles d’enrobé & béton', 'Conducteurs de travaux spécialisés'],
      qualityCheck: 'Contrôle quotidien de la sécurité chantier & zéro accident'
    },
    {
      subtitle: 'Exécution, Pose des Matériaux & Essais Continus',
      deliverables: ['Couche de roulement & enrobé à chaud', 'Ouvrages d’art & assainissement', 'Essais de compacité & carottage'],
      resources: ['Laboratoire itinérant sur chantier', 'Finisseurs d’asphalte à guidage laser', 'Équipes d’application de nuit/jour'],
      qualityCheck: 'Contrôle continu de la température d’enrobé & tolérance de nivellement'
    },
    {
      subtitle: 'Inspection, Réception & Livrable Final',
      deliverables: ['Procès-verbal de réception des travaux', 'Dossier d’Ouvrage Exécuté (DOE)', 'Garantie de parfait achèvement'],
      resources: ['Missions de contrôle externes', 'Direction Générale GILIS BTP', 'Service Maintenance & Suivi'],
      qualityCheck: 'Conformité totale aux exigences contractuelles & mise en service immédiate'
    }
  ];

  const currentStep = METHOD_STEPS[activeStep];
  const currentDetail = stepDetails[activeStep];
  const CurrentIcon = stepIcons[activeStep] || CheckCircle2;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % METHOD_STEPS.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + METHOD_STEPS.length) % METHOD_STEPS.length);
  };

  return (
    <section 
      id="methode" 
      className="py-16 md:py-20 bg-[#0E2232] text-white relative overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#F5C51B_1px,transparent_1px),linear-gradient(to_bottom,#F5C51B_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F5C51B]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 bg-white/10 text-[#F5C51B] px-3 py-1 rounded-full border border-[#F5C51B]/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C51B]" />
              <span className="text-xs uppercase tracking-widest font-extrabold">Méthodologie Opérationnelle</span>
            </div>
            <h2 className="font-title text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Processus d’Exécution en 5 Étapes
            </h2>
          </div>

          <p className="max-w-md text-gray-300 text-xs sm:text-sm leading-relaxed">
            Une approche scientifique et structurée garantissant le respect des normes, des délais et des exigences techniques.
          </p>
        </div>

        {/* Horizontal Interactive Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {METHOD_STEPS.map((step, idx) => {
            const IconComponent = stepIcons[idx] || CheckCircle2;
            const isActive = activeStep === idx;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center space-x-3 p-3 rounded-xl border text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-[#0A1622] border-[#F5C51B] text-white shadow-lg shadow-[#F5C51B]/10 ring-1 ring-[#F5C51B]/30'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#F5C51B]"></div>
                )}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                  isActive ? 'bg-[#F5C51B] text-[#0E2232]' : 'bg-white/10 text-gray-300'
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className={`block text-[10px] font-extrabold uppercase tracking-wider ${
                    isActive ? 'text-[#F5C51B]' : 'text-gray-400'
                  }`}>
                    Étape 0{step.number}
                  </span>
                  <span className="block text-xs font-bold truncate">
                    {step.title.split(' ')[0]} {step.title.split(' ')[1] || ''}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Display Panel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0A1622]/90 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Background Accent Pill */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F5C51B]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Left Column: Core Info & Deliverables */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-[#F5C51B] text-[#0E2232] flex items-center justify-center font-bold shadow-md shrink-0">
                      <CurrentIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="inline-block bg-[#F5C51B]/15 text-[#F5C51B] px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wider border border-[#F5C51B]/30">
                        Étape {currentStep.number} sur 5 • {currentDetail.subtitle}
                      </span>
                      <h3 className="font-title text-xl sm:text-2xl font-extrabold text-white mt-1">
                        {currentStep.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {currentStep.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                    <div className="flex items-center space-x-2 text-[#F5C51B] text-xs font-extrabold uppercase tracking-wider">
                      <Layers className="w-4 h-4" />
                      <span>Livrables Clés</span>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {currentDetail.deliverables.map((dItem, dIdx) => (
                        <li key={dIdx} className="flex items-start space-x-2 text-xs text-gray-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F5C51B] shrink-0 mt-0.5" />
                          <span>{dItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Means & Quality Control */}
                <div className="lg:col-span-5 space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    {/* Equipment & Human Resources */}
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
                      <div className="flex items-center space-x-2 text-[#F5C51B] text-xs font-extrabold uppercase tracking-wider">
                        <Truck className="w-4 h-4" />
                        <span>Moyens Mobilisés</span>
                      </div>
                      <ul className="space-y-1.5">
                        {currentDetail.resources.map((rItem, rIdx) => (
                          <li key={rIdx} className="flex items-start space-x-2 text-xs text-gray-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F5C51B] shrink-0 mt-1.5"></span>
                            <span>{rItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quality Control Check */}
                    <div className="p-3.5 bg-[#F5C51B]/10 rounded-xl border border-[#F5C51B]/25 flex items-start space-x-3 text-xs text-gray-200">
                      <FileCheck className="w-5 h-5 text-[#F5C51B] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-[#F5C51B] uppercase block text-[10px] tracking-wider">
                          Contrôle Qualité &amp; Sécurité
                        </span>
                        <span className="text-gray-200">{currentDetail.qualityCheck}</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation controls */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <button
                      onClick={handlePrev}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Étape Précédente</span>
                    </button>

                    <div className="text-xs text-gray-400 font-bold">
                      {activeStep + 1} / 5
                    </div>

                    <button
                      onClick={handleNext}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0E2232] bg-[#F5C51B] hover:bg-yellow-400 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer shadow"
                    >
                      <span>Étape Suivante</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

