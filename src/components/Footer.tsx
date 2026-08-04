import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { RequestType } from '../types';
import { SmartImage } from './SmartImage';

interface FooterProps {
  onOpenLegal: (type: 'mentions' | 'confidentialite') => void;
  onSelectRequestType?: (type: RequestType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onSelectRequestType }) => {
  const [logoError, setLogoError] = React.useState(false);
  const [logoIndex, setLogoIndex] = React.useState(0);

  const footerLogos = [
    '/images/logogilis.png',
    '/Images/logogilis.png',
    './images/logogilis.png',
    './Images/logogilis.png'
  ];

  const handleLogoError = () => {
    if (logoIndex < footerLogos.length - 1) {
      setLogoIndex(prev => prev + 1);
    } else {
      setLogoError(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0E2232] text-white pt-16 pb-12 border-t border-[#F5C51B]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simplified Main Footer Grid */}
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-center justify-between">
          
          {/* Left: Logo & Slogan */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center space-x-4">
              <SmartImage 
                src="/Images/logogilis_dark.png" 
                alt="GILIS BTP Logo" 
                className="h-14 md:h-16 w-auto object-contain" 
              />
              <div>
                <h4 className="font-title text-base font-extrabold text-white tracking-wide">
                  GILIS BTP SARL
                </h4>
                <p className="text-xs text-[#F5C51B] font-subtitle italic">
                  Rigueur technique. Maîtrise opérationnelle. Excellence durable.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-xl">
              Entreprise de Bâtiment et Travaux Publics spécialisée dans la réalisation d'infrastructures routières, bâtiments, génie civil, réseaux VRD et ouvrages hydrauliques.
            </p>


          </div>

          {/* Right: Essential Contact Information */}
          <div className="md:col-span-5 bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2.5">
            <h5 className="font-title text-xs font-extrabold uppercase tracking-widest text-[#F5C51B]">
              Siège Social &amp; Coordonnées
            </h5>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-start">
                <MapPin className="w-3.5 h-3.5 text-[#F5C51B] mr-2 mt-0.5 shrink-0" />
                <span>C / 383 Quartier Aïdjedo Cotonou BENIN — Boîte postale 06 BP 1771 PK3</span>
              </p>
              <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                <p className="flex items-center">
                  <Phone className="w-3.5 h-3.5 text-[#F5C51B] mr-2 shrink-0" />
                  <span>00229 0197086645 / 0167676757</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-3.5 h-3.5 text-[#F5C51B] mr-2 shrink-0" />
                  <span className="space-x-2">
                    <a href="mailto:direction@gilisbtp.com" className="hover:text-[#F5C51B] transition-colors font-medium">direction@gilisbtp.com</a>
                    <span className="text-gray-500">•</span>
                    <a href="mailto:gilisbtp33@gmail.com" className="hover:text-[#F5C51B] transition-colors text-gray-400">gilisbtp33@gmail.com</a>
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-bold">GILIS BTP SARL</span>. Tous droits réservés.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onOpenLegal('mentions')}
              className="hover:text-[#F5C51B] transition-colors cursor-pointer"
            >
              Mentions Légales
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('confidentialite')}
              className="hover:text-[#F5C51B] transition-colors cursor-pointer"
            >
              Politique de Confidentialité
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/10 hover:bg-[#F5C51B] text-white hover:text-[#0E2232] rounded-sm transition-colors cursor-pointer ml-2"
              title="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
