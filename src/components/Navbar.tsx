import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onSelectRequestType?: (type: any) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLightBg, setIsLightBg] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'ACCUEIL' },
    { id: 'apropos', label: 'À PROPOS' },
    { id: 'expertises', label: 'EXPERTISES' },
    { id: 'methode', label: 'MÉTHODE' },
    { id: 'projets', label: 'PROJETS' },
    { id: 'engagements', label: 'ENGAGEMENTS' },
    { id: 'carrieres', label: 'CARRIÈRES' },
    { id: 'contact', label: 'CONTACT' },
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
            <img 
              src="/Images/LogoHorizontal.webp" 
              alt="GILIS BTP" 
              className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isLightBg ? 'brightness-100 invert-0' : 'brightness-0 invert'
              }`}
            />
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
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center ml-auto">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-sm focus:outline-none transition-colors ${
                isLightBg
                  ? 'text-[#0E2232] hover:bg-black/5'
                  : 'text-white hover:text-[#F5C51B] hover:bg-white/10'
              }`}
              aria-label="Ouvrir le menu"
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
          </div>
        </div>
      )}
    </header>
  );
};

