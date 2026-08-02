import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'mentions' | 'confidentialite' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        class="relative w-full max-w-3xl max-h-[90vh] bg-white text-[#06090B] rounded-sm shadow-2xl overflow-y-auto border border-gray-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div class="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0E2232] text-white border-b border-[#F5C51B]/30">
          <div class="flex items-center space-x-2">
            <Shield class="w-5 h-5 text-[#F5C51B]" />
            <h3 class="font-title text-lg font-bold text-white">
              {type === 'mentions' ? 'Mentions Légales' : 'Politique de Confidentialité'}
            </h3>
          </div>
          <button onClick={onClose} class="p-2 text-gray-300 hover:text-white" aria-label="Fermer">
            <X class="w-6 h-6" />
          </button>
        </div>

        <div class="p-6 sm:p-8 space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {type === 'mentions' ? (
            <>
              <div className="space-y-2">
                <h4 className="font-title font-bold text-[#0E2232] text-base">1. Éditeur du site &amp; Identifiants légaux</h4>
                <p>
                  Le site internet GILIS BTP est édité par la société <strong>GILIS BTP SARL</strong>, Société à Responsabilité Limitée.
                </p>
                <div className="p-4 bg-slate-50 border border-gray-200 rounded-sm space-y-1.5 text-xs text-gray-800">
                  <p><strong>Siège Social :</strong> C / 383 Quartier Aïdjedo, Cotonou - BENIN</p>
                  <p><strong>Boîte Postale :</strong> 06 BP 1771 PK3, Cotonou - BENIN</p>
                  <p><strong>N° RCCM :</strong> RB / COT / 17 B 19856</p>
                  <p><strong>N° IFU :</strong> 3201710108299</p>
                  <p><strong>Téléphones :</strong> 00229 0197086645 / 0167676757</p>
                  <p><strong>Email :</strong> gilisbtp33@gmail.com</p>
                  <p><strong>Compte Bancaire :</strong> NSIA BANK S.A. — Compte n° 260457498027</p>
                </div>
              </div>

              <div class="space-y-2">
                <h4 class="font-title font-bold text-[#0E2232] text-base">2. Directeur de la publication</h4>
                <p>
                  Le Directeur de la publication est le Directeur Général de GILIS BTP SARL.
                </p>
              </div>

              <div class="space-y-2">
                <h4 class="font-title font-bold text-[#0E2232] text-base">3. Propriété intellectuelle</h4>
                <p>
                  L'ensemble des contenus (textes, visuels, photographies, charte graphique, logos et éléments architecturaux) figurant sur ce site sont la propriété exclusive de GILIS BTP SARL ou font l'objet d'un droit d'utilisation régulièrement concédé. Toute reproduction partielle ou totale est strictement interdite.
                </p>
              </div>

              <div class="space-y-2">
                <h4 class="font-title font-bold text-[#0E2232] text-base">4. Hébergement</h4>
                <p>
                  Le site est hébergé sur des infrastructures sécurisées Cloud Run conformes aux standards ISO 27001 et RGPD.
                </p>
              </div>
            </>
          ) : (
            <>
              <div class="space-y-2">
                <h4 class="font-title font-bold text-[#0E2232] text-base">1. Collecte des données personnelles</h4>
                <p>
                  GILIS BTP s'engage à protéger la vie privée des utilisateurs. Les informations recueillies via les formulaires de contact, de demande de devis et de candidature spontanée font l'objet d'un traitement informatique destiné exclusivement aux équipes commerciales et RH de GILIS BTP.
                </p>
              </div>

              <div class="space-y-2">
                <h4 class="font-title font-bold text-[#0E2232] text-base">2. Finalité des traitements</h4>
                <p>
                  Vos données sont traitées pour :
                </p>
                <ul class="list-disc pl-5 space-y-1">
                  <li>L'étude et l'élaboration de devis techniques et financiers ;</li>
                  <li>L'instruction des propositions de projets d'infrastructures ;</li>
                  <li>La gestion de la base de talents et des candidatures RH ;</li>
                  <li>L'envoi d'informations institutionnelles relatives à nos chantiers.</li>
                </ul>
              </div>

              <div class="space-y-2">
                <h4 class="font-title font-bold text-[#0E2232] text-base">3. Durée de conservation</h4>
                <p>
                  Les données des formulaires de contact sont conservées pendant une durée maximale de 3 ans après le dernier échange. Les candidatures RH sont conservées au maximum 2 ans.
                </p>
              </div>

              <div class="space-y-2">
                <h4 class="font-title font-bold text-[#0E2232] text-base">4. Droits d'accès et de rectification</h4>
                <p>
                  Conformément aux réglementations applicables, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Pour exercer ce droit, écrivez à : dpo@gilis-btp.com.
                </p>
              </div>
            </>
          )}
        </div>

        <div class="p-4 bg-[#F6F6F3] border-t border-gray-200 flex justify-end">
          <button onClick={onClose} class="px-5 py-2 bg-[#0E2232] text-white text-xs rounded-sm cursor-pointer">
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
