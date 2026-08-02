import React, { useState, useEffect, useRef } from 'react';
import { Truck, Building2, ShieldCheck, Clock, Globe, Handshake, Users, Waypoints } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface StatItemProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel?: string;
  icon: React.ElementType;
}

const StatCounter: React.FC<StatItemProps> = ({ value, prefix = '', suffix = '', label, sublabel, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const steps = 50;
          const increment = value / steps;
          const stepTime = duration / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div 
      ref={counterRef} 
      className="p-6 bg-white/5 border border-white/10 hover:border-[#F5C51B]/50 rounded-2xl text-center space-y-3 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
    >
      <div className="inline-flex p-3 bg-[#F5C51B]/10 text-[#F5C51B] rounded-xl border border-[#F5C51B]/20 mb-1 group-hover:bg-[#F5C51B] group-hover:text-[#0E2232] transition-colors">
        <Icon className="w-6 h-6" />
      </div>

      <div className="font-title text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#F5C51B] tracking-tight group-hover:scale-105 transition-transform">
        {prefix}{count.toLocaleString('fr-FR')}{suffix}
      </div>

      <div className="font-title text-sm sm:text-base font-bold text-white leading-snug">
        {label}
      </div>

      {sublabel && (
        <div className="text-xs text-gray-300 font-medium leading-relaxed">
          {sublabel}
        </div>
      )}
    </div>
  );
};

export const KeyStatsSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="chiffres-cles" className="py-20 lg:py-24 bg-[#0E2232] text-white relative overflow-hidden">
      {/* Background Subtle Grid & Accent Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5C51B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5C51B]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-[#F5C51B] uppercase tracking-widest bg-[#F5C51B]/10 px-4 py-1.5 rounded-full border border-[#F5C51B]/20 inline-block shadow-sm">
            {t("Chiffres Clés & Envergure", "Key Figures & Scale")}
          </span>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t("Des Capacités & Moyens à la Hauteur de Vos Ambitions", "Capabilities Matching Your Scale & Ambition")}
          </h2>
          <div className="h-1.5 w-16 bg-[#F5C51B] mx-auto my-3 rounded-full"></div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {t(
              "Notre puissance d’intervention reposant sur nos équipes d'ingénieurs, nos partenaires régionaux et notre matériel en propre au Bénin et en Afrique de l’Ouest.",
              "Our operational strength is built on engineering teams, regional partners, and dedicated machinery across Benin and West Africa."
            )}
          </p>
        </div>

        {/* 8 Key Stats Counters Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter
            value={5}
            prefix="+"
            label={t("Pays d’Intervention", "Countries of Operation")}
            sublabel={t("Présence stratégique en Afrique de l’Ouest", "Strategic presence across West Africa")}
            icon={Globe}
          />
          <StatCounter
            value={1000}
            prefix="+ "
            suffix=" km"
            label={t("Km de Routes Réalisées", "Km of Roads Constructed")}
            sublabel={t("Ouvrages routiers & pistes d’aménagement", "Roadworks & rural development tracks")}
            icon={Waypoints}
          />
          <StatCounter
            value={50}
            prefix="+"
            label={t("Collaborateurs & Experts", "Staff & Technical Experts")}
            sublabel={t("Ingénieurs & spécialistes mobilisés", "Engineers & specialists deployed")}
            icon={Users}
          />
          <StatCounter
            value={100}
            prefix="+"
            label={t("Fournisseurs sous-région", "Regional Suppliers")}
            sublabel={t("Réseau de partenaires logistiques & matériaux", "Logistics & materials supply network")}
            icon={Handshake}
          />
          <StatCounter
            value={15}
            prefix="+"
            suffix={t(" Ans", " Yrs")}
            label={t("D’Expérience BTP", "Construction Experience")}
            sublabel={t("Savoir-faire reconnu dans la construction", "Recognized expertise in civil engineering")}
            icon={Clock}
          />
          <StatCounter
            value={50}
            prefix="+"
            label={t("Engins & Équipements", "Heavy Machinery Units")}
            sublabel={t("Bétonnières, engins & matériel lourd", "Mixers, earthmovers & site equipment")}
            icon={Truck}
          />
          <StatCounter
            value={150}
            prefix="+"
            label={t("Grands Ouvrages Livrés", "Major Projects Handed Over")}
            sublabel={t("Routes, ponts & génie civil", "Roads, structures & civil works")}
            icon={Building2}
          />
          <StatCounter
            value={100}
            suffix="%"
            label={t("Conformité & Sécurité", "Safety & Compliance Rate")}
            sublabel={t("Plan d'Assurance Qualité & Zéro Accident", "Quality Assurance & Zero Accident target")}
            icon={ShieldCheck}
          />
        </div>

      </div>
    </section>
  );
};
