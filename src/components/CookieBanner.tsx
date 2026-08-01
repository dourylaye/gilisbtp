import React, { useState, useEffect } from 'react';
import { Cookie, Check, X, Shield } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gilis_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gilis_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gilis_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div class="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-[#0E2232] text-white p-5 rounded-sm shadow-2xl border border-[#F5C51B]/30 animate-fadeIn">
      <div class="flex items-start space-x-3">
        <Cookie class="w-6 h-6 text-[#F5C51B] shrink-0 mt-0.5" />
        <div class="space-y-2 text-xs">
          <p class="font-title font-bold text-sm text-white">
            Gestion de vos cookies
          </p>
          <p class="text-gray-300 leading-relaxed">
            GILIS BTP utilise des cookies strictement nécessaires au bon fonctionnement de la landing page et à la mesure d'audience anonyme.
          </p>
          <div class="pt-2 flex items-center space-x-2">
            <button
              onClick={handleAccept}
              class="px-4 py-1.5 bg-[#F5C51B] hover:bg-[#e0b213] text-[#0E2232] font-semibold text-xs rounded-sm cursor-pointer"
            >
              Tout accepter
            </button>
            <button
              onClick={handleDecline}
              class="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-gray-300 font-medium text-xs rounded-sm cursor-pointer"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
