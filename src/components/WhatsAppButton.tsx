import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/2290197086645?text=Bonjour%20GILIS%20BTP,%20je%20souhaite%20soumettre%20un%20projet%20d'infrastructure.";

  return (
    <a
      id="fixed-whatsapp-btn"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 z-40 p-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 group cursor-pointer border-2 border-white/40"
      aria-label="Contacter GILIS BTP sur WhatsApp"
    >
      <MessageSquare class="w-6 h-6 fill-current" />
      <span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold pl-1">
        Echanger sur WhatsApp
      </span>
    </a>
  );
};
