import React, { useState } from 'react';
import { RequestType } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExpertisesSection } from './components/ExpertisesSection';
import { MethodSection } from './components/MethodSection';
import { EngagementsSection } from './components/EngagementsSection';
import { KeyStatsSection } from './components/KeyStatsSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { PartnersSection } from './components/PartnersSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CareersSection } from './components/CareersSection';
import { CallToActionBanner } from './components/CallToActionBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { ScrollToTopButton } from './components/ScrollToTopButton';

export default function App() {
  const [requestType, setRequestType] = useState<RequestType>('Soumission de projet');
  const [legalModalType, setLegalModalType] = useState<'mentions' | 'confidentialite' | null>(null);

  const handleSelectRequestType = (type: RequestType) => {
    setRequestType(type);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F3] text-[#06090B] selection:bg-[#F5C51B] selection:text-[#0E2232]">
      {/* 1. Fixed Header & Navigation */}
      <Navbar onSelectRequestType={handleSelectRequestType} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onSelectRequestType={handleSelectRequestType} />

        {/* 3. Section À Propos (with modal trigger containing Director's Message) */}
        <AboutSection />

        {/* 4. Section Nos expertises */}
        <ExpertisesSection onSelectRequestType={handleSelectRequestType} />

        {/* 5. Section Notre méthode */}
        <MethodSection />

        {/* 6. Section Nos engagements */}
        <EngagementsSection />

        {/* 7. Section Chiffres clés */}
        <KeyStatsSection />

        {/* 8. Section Pourquoi choisir GILIS BTP (Nos atouts) */}
        <WhyChooseUs />

        {/* 9. Section Clients et partenaires (Ils nous font confiance) */}
        <PartnersSection />

        {/* 10. Section Lancement & Étude de vos chantiers */}
        <CallToActionBanner onSelectRequestType={handleSelectRequestType} />

        {/* 11. Section Carrières (Rejoignez-nous) */}
        <CareersSection />

        {/* 12. Section Galerie de projets */}
        <ProjectsGallery />

        {/* 13. Section Contact & Devis */}
        <ContactSection selectedRequestType={requestType} />
      </main>

      {/* 14. Footer */}
      <Footer 
        onOpenLegal={(type) => setLegalModalType(type)} 
        onSelectRequestType={handleSelectRequestType} 
      />

      {/* Floating Scroll To Top Button */}
      <ScrollToTopButton />

      {/* Cookie Consent Banner */}
      <CookieBanner />

      {/* Legal Notice / Privacy Modal */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </div>
  );
}

