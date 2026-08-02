import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onSelectRequestType?: (type: any) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLightBg, setIsLightBg] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { id: 'hero', label: t('ACCUEIL', 'HOME') },
    { id: 'apropos', label: t('À PROPOS', 'ABOUT') },
    { id: 'expertises', label: t('EXPERTISES', 'SERVICES') },
    { id: 'methode', label: t('MÉTHODE', 'METHOD') },
    { id: 'projets', label: t('PROJETS', 'PROJECTS') },
    { id: 'engagements', label: t('ENGAGEMENTS', 'COMMITMENTS') },
    { id: 'carrieres', label: t('CARRIÈRES', 'CAREERS') },
    { id: 'contact', label: t('CONTACT', 'CONTACT') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      // Track active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      let currentSectionId = 'hero';

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          currentSectionId = navLinks[i].id;
          break;
        }
      }
      setActiveSection(currentSectionId);

      // Map sections to light vs dark background
      const lightSections = ['apropos', 'expertises', 'projets', 'carrieres', 'engagements', 'atouts', 'avis', 'partenaires'];
      const darkSections = ['hero', 'methode', 'chiffres-cles', 'lancement', 'contact'];

      if (lightSections.includes(currentSectionId)) {
        setIsLightBg(true);
      } else if (darkSections.includes(currentSectionId)) {
        setIsLightBg(false);
      } else {
        // Fallback: DOM element computed background color detection
        const header = document.getElementById('main-header');
        if (header) header.style.pointerEvents = 'none';
        const el = document.elementFromPoint(window.innerWidth / 2, 60);
        if (header) header.style.pointerEvents = 'auto';

        if (el) {
          let curr: HTMLElement | null = el as HTMLElement;
          let foundLight = false;
          while (curr && curr !== document.body) {
            const bg = window.getComputedStyle(curr).backgroundColor;
            if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
              const m = bg.match(/\d+/g);
              if (m && m.length >= 3) {
                const r = parseInt(m[0], 10);
                const g = parseInt(m[1], 10);
                const b = parseInt(m[2], 10);
                const alpha = m[3] !== undefined ? parseFloat(m[3]) : 1;
                if (alpha > 0.4) {
                  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                  foundLight = brightness > 150;
                  break;
                }
              }
            }
            curr = curr.parentElement;
          }
          setIsLightBg(foundLight);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isLightBg
          ? 'bg-gradient-to-b from-white/95 via-white/70 to-transparent backdrop-blur-md py-3 md:py-4 border-b border-gray-200/30'
          : 'bg-gradient-to-b from-[#0A1622]/90 via-[#0A1622]/50 to-transparent backdrop-blur-md py-3 md:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Horizontal GILIS BTP */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center group cursor-pointer py-1 shrink-0"
            id="header-logo"
          >
            {!logoError ? (
              <img 
                src={isLightBg ? "Images/LogoHorizontal.webp" : "Images/LogoHorizontal_white.webp"} 
                alt="GILIS BTP" 
                referrerPolicy="no-referrer"
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex items-center space-x-1.5 font-black font-title text-xl tracking-wider">
                <span className="text-[#F5C51B] font-black">GILIS</span>
                <span className={isLightBg ? 'text-[#0E2232]' : 'text-white'}>BTP</span>
              </div>
            )}
          </a>

          {/* Desktop Navigation Links - Uppercase & Aligned Right (Compact space) */}
          <nav className="hidden lg:flex items-center justify-end space-x-1 xl:space-x-2 ml-auto" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-2 py-1 text-xs xl:text-[13px] font-extrabold tracking-normal transition-all duration-200 relative uppercase ${
                    isActive
                      ? isLightBg
                        ? 'text-[#B8860B] font-black'
                        : 'text-[#F5C51B] font-black'
                      : isLightBg
                        ? 'text-[#0E2232]/85 hover:text-[#B8860B] hover:bg-black/5 rounded-sm'
                        : 'text-white/90 hover:text-[#F5C51B] hover:bg-white/10 rounded-sm'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className={`absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full transition-colors duration-200 ${
                      isLightBg ? 'bg-[#B8860B]' : 'bg-[#F5C51B]'
                    }`}></span>
                  )}
                </a>
              );
            })}

            {/* Language Switcher Button (FR / EN) */}
            <div className="flex items-center space-x-1 ml-2 pl-2 border-l border-white/20">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 text-xs font-black rounded transition-all duration-200 ${
                  language === 'fr'
                    ? 'bg-[#F5C51B] text-[#0E2232] shadow-sm'
                    : isLightBg
                      ? 'text-[#0E2232]/70 hover:text-[#0E2232] hover:bg-black/5'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title="Français"
                aria-label="Passer en français"
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-black rounded transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-[#F5C51B] text-[#0E2232] shadow-sm'
                    : isLightBg
                      ? 'text-[#0E2232]/70 hover:text-[#0E2232] hover:bg-black/5'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
                title="English"
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile menu button & Language switch */}
          <div className="flex lg:hidden items-center space-x-2 ml-auto">
            {/* Mobile language switch */}
            <div className="flex items-center bg-black/10 rounded-lg p-0.5 border border-white/10">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2 py-1 text-[11px] font-black rounded ${
                  language === 'fr' ? 'bg-[#F5C51B] text-[#0E2232]' : isLightBg ? 'text-gray-800' : 'text-white'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-[11px] font-black rounded ${
                  language === 'en' ? 'bg-[#F5C51B] text-[#0E2232]' : isLightBg ? 'text-gray-800' : 'text-white'
                }`}
              >
                EN
              </button>
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-sm focus:outline-none transition-colors ${
                isLightBg
                  ? 'text-[#0E2232] hover:bg-black/5'
                  : 'text-white hover:text-[#F5C51B] hover:bg-white/10'
              }`}
              aria-label={t("Ouvrir le menu", "Open menu")}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden backdrop-blur-xl border-b shadow-2xl animate-fadeIn ${
          isLightBg 
            ? 'bg-white/98 text-[#0E2232] border-gray-200' 
            : 'bg-[#0E2232]/95 text-white border-[#F5C51B]/20'
        }`}>
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-3 py-2.5 rounded-sm text-sm font-extrabold tracking-wider uppercase transition-colors ${
                  activeSection === link.id
                    ? isLightBg
                      ? 'text-[#B8860B] bg-amber-50/80 border-l-4 border-[#B8860B]'
                      : 'text-[#F5C51B] bg-white/5 border-l-2 border-[#F5C51B]'
                    : isLightBg
                      ? 'text-gray-700 hover:text-[#B8860B] hover:bg-gray-50'
                      : 'text-gray-200 hover:text-[#F5C51B] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-200/20 flex items-center justify-between px-3">
              <span className="text-xs font-semibold flex items-center space-x-1.5 opacity-80">
                <Globe className="w-4 h-4 text-[#F5C51B]" />
                <span>{t('Langue / Language', 'Language / Langue')}</span>
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 text-xs font-bold rounded ${
                    language === 'fr' ? 'bg-[#F5C51B] text-[#0E2232]' : 'bg-white/10 text-gray-300'
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-bold rounded ${
                    language === 'en' ? 'bg-[#F5C51B] text-[#0E2232]' : 'bg-white/10 text-gray-300'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

