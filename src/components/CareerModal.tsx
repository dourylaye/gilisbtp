import React, { useState, useEffect } from 'react';
import { X, Upload, CheckCircle2, FileText, User, Mail, Phone, Briefcase, MapPin, GraduationCap, Calendar, Check } from 'lucide-react';
import { CareerFormData } from '../types';

interface CareerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareerModal: React.FC<CareerModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<CareerFormData>({
    fullName: '',
    email: '',
    phone: '',
    country: 'Côte d’Ivoire',
    city: '',
    targetRole: '',
    expertiseArea: 'Génie Civil & Bâtiments',
    educationLevel: 'BAC+5 / Ingénieur',
    experienceYears: '3-5 ans',
    availability: 'Immédiate',
    cvFile: null,
    cvFileName: '',
    coverLetterFile: null,
    coverLetterFileName: '',
    linkedInUrl: '',
    message: '',
    privacyAccepted: false,
  });

  const [cvError, setCvError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        cvFile: file,
        cvFileName: file.name
      }));
      setCvError('');
    }
  };

  const handleLetterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({
        ...prev,
        coverLetterFile: file,
        coverLetterFileName: file.name
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cvFile && !formData.cvFileName) {
      setCvError('Veuillez joindre votre CV (obligatoire).');
      return;
    }
    if (!formData.privacyAccepted) {
      return;
    }

    // Simulate submission
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        class="relative w-full max-w-3xl max-h-[92vh] bg-white text-[#06090B] rounded-sm shadow-2xl overflow-y-auto border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div class="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0E2232] text-white border-b border-[#F5C51B]/30">
          <div class="flex items-center space-x-3">
            <Briefcase class="w-6 h-6 text-[#F5C51B]" />
            <div>
              <h3 class="font-title text-lg md:text-xl font-bold tracking-tight text-white">
                Candidature Spontanée — GILIS BTP
              </h3>
              <p class="font-subtitle text-xs text-[#F5C51B]">
                Rejoignez la base de talents de notre groupe
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            class="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
            aria-label="Fermer"
          >
            <X class="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div class="p-6 sm:p-8">
          
          {submitted ? (
            <div class="py-12 text-center space-y-6">
              <div class="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 class="w-10 h-10" />
              </div>
              <div class="space-y-2 max-w-md mx-auto">
                <h4 class="font-title text-2xl font-bold text-[#0E2232]">
                  Candidature transmise avec succès !
                </h4>
                <p class="text-sm text-gray-700 leading-relaxed font-medium">
                  Votre candidature a bien été transmise. L’équipe RH de GILIS BTP vous contactera si une opportunité correspondant à votre profil se présente.
                </p>
              </div>
              <button
                onClick={handleResetAndClose}
                class="px-8 py-3 bg-[#0E2232] hover:bg-[#183952] text-white rounded-sm text-sm font-semibold transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} class="space-y-6">
              
              <div class="grid sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-[#0E2232]">
                    Nom &amp; Prénom <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <User class="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="ex: M. Kouassi Jean"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      class="w-full pl-9 pr-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-[#0E2232]">
                    Adresse Email <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <Mail class="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="ex: k.jean@email.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      class="w-full pl-9 pr-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-[#0E2232]">
                    Téléphone <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <Phone class="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="ex: +225 07 00 00 00 00"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      class="w-full pl-9 pr-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                    />
                  </div>
                </div>

                {/* Country */}
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-[#0E2232]">
                    Pays de résidence <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <MapPin class="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="ex: Côte d'Ivoire, Sénégal, France..."
                      value={formData.country}
                      onChange={e => setFormData({ ...formData, country: e.target.value })}
                      class="w-full pl-9 pr-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                    />
                  </div>
                </div>

                {/* City */}
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-[#0E2232]">
                    Ville <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Cotonou, Parakou, Porto-Novo..."
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    class="w-full px-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                  />
                </div>

                {/* Target Role */}
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-[#0E2232]">
                    Poste recherché <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Ingénieur Génie Civil, Chef de chantier, Topographe..."
                    value={formData.targetRole}
                    onChange={e => setFormData({ ...formData, targetRole: e.target.value })}
                    class="w-full px-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                  />
                </div>

                {/* Expertise Area */}
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-[#0E2232]">
                    Domaine d’expertise <span class="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.expertiseArea}
                    onChange={e => setFormData({ ...formData, expertiseArea: e.target.value })}
                    class="w-full px-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                  >
                    <option value="Génie Civil & Bâtiments">Génie Civil &amp; Bâtiments</option>
                    <option value="Infrastructures Routières & VRD">Infrastructures Routières &amp; VRD</option>
                    <option value="Hydraulique & AEP">Hydraulique &amp; AEP</option>
                    <option value="Conducteur de Travaux / Chantier">Conducteur de Travaux / Chantier</option>
                    <option value="Qualité, Hygiène, Sécurité & Environnement (QHSE)">QHSE</option>
                    <option value="Mécanique & Engins Lourds">Mécanique &amp; Engins Lourds</option>
                    <option value="Administratif, Finance & Logistique">Administratif, Finance &amp; Logistique</option>
                  </select>
                </div>

                {/* Education Level */}
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-[#0E2232]">
                    Niveau d’études <span class="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.educationLevel}
                    onChange={e => setFormData({ ...formData, educationLevel: e.target.value })}
                    class="w-full px-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                  >
                    <option value="BT / CAP / BEP">BT / CAP / BEP (Ouvrier spécialisé)</option>
                    <option value="BTS / DUT / BAC+2">BTS / DUT / BAC+2 (Technicien)</option>
                    <option value="Licence / BAC+3">Licence / BAC+3</option>
                    <option value="Master / BAC+5 / Ingénieur">Master / BAC+5 / Diplôme d'Ingénieur</option>
                    <option value="Doctorat / Autre">Doctorat / Autre</option>
                  </select>
                </div>

                {/* Experience Years */}
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-[#0E2232]">
                    Années d’expérience <span class="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={e => setFormData({ ...formData, experienceYears: e.target.value })}
                    class="w-full px-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                  >
                    <option value="Débutant / < 1 an">Débutant / &lt; 1 an</option>
                    <option value="1 - 3 ans">1 - 3 ans</option>
                    <option value="3 - 5 ans">3 - 5 ans</option>
                    <option value="5 - 10 ans">5 - 10 ans</option>
                    <option value="+ 10 ans">+ 10 ans (Expert)</option>
                  </select>
                </div>

                {/* Availability */}
                <div class="space-y-1">
                  <label class="block text-xs font-semibold text-[#0E2232]">
                    Disponibilité <span class="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.availability}
                    onChange={e => setFormData({ ...formData, availability: e.target.value })}
                    class="w-full px-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                  >
                    <option value="Immédiate">Immédiate</option>
                    <option value="Sous 1 mois">Sous 1 mois</option>
                    <option value="Sous 2 à 3 mois">Sous 2 à 3 mois</option>
                  </select>
                </div>

              </div>

              {/* Mandatory CV Upload Box */}
              <div class="space-y-1">
                <label class="block text-xs font-semibold text-[#0E2232]">
                  Curriculum Vitae (CV) <span class="text-red-500">* (Obligatoire - PDF / DOCX)</span>
                </label>
                <div class="border-2 border-dashed border-gray-300 hover:border-[#0E2232] rounded-sm p-4 text-center bg-[#F6F6F3] relative cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleCvChange}
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div class="flex flex-col items-center justify-center space-y-1">
                    <Upload class="w-6 h-6 text-[#0E2232]" />
                    {formData.cvFileName ? (
                      <span class="text-xs font-bold text-green-700 flex items-center">
                        <Check class="w-4 h-4 mr-1" /> {formData.cvFileName}
                      </span>
                    ) : (
                      <span class="text-xs text-gray-600">
                        Cliquez ou glissez-déposez votre CV ici
                      </span>
                    )}
                  </div>
                </div>
                {cvError && <p class="text-xs text-red-600 font-medium">{cvError}</p>}
              </div>

              {/* Optional Cover Letter Upload */}
              <div class="space-y-1">
                <label class="block text-xs font-semibold text-[#0E2232]">
                  Lettre de motivation <span class="text-gray-400 font-normal">(Facultatif)</span>
                </label>
                <div class="border border-gray-300 rounded-sm p-3 bg-[#F6F6F3] relative cursor-pointer flex items-center justify-between">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleLetterChange}
                    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <span class="text-xs text-gray-600 truncate">
                    {formData.coverLetterFileName || 'Joindre une lettre de motivation (PDF / DOCX)'}
                  </span>
                  <Upload class="w-4 h-4 text-gray-500 shrink-0" />
                </div>
              </div>

              {/* LinkedIn Link */}
              <div class="space-y-1">
                <label class="block text-xs font-semibold text-[#0E2232]">
                  Lien Profil LinkedIn <span class="text-gray-400 font-normal">(Facultatif)</span>
                </label>
                <input
                  type="url"
                  placeholder="ex: https://linkedin.com/in/mon-profil"
                  value={formData.linkedInUrl}
                  onChange={e => setFormData({ ...formData, linkedInUrl: e.target.value })}
                  class="w-full px-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                />
              </div>

              {/* Motivation Message */}
              <div class="space-y-1">
                <label class="block text-xs font-semibold text-[#0E2232]">
                  Message de motivation
                </label>
                <textarea
                  rows={3}
                  placeholder="Présentez brièvement votre parcours et vos aspirations chez GILIS BTP..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  class="w-full px-3 py-2.5 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                ></textarea>
              </div>

              {/* Privacy Policy Acceptance */}
              <div class="flex items-start space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="privacy-accepted"
                  required
                  checked={formData.privacyAccepted}
                  onChange={e => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                  class="mt-1 w-4 h-4 text-[#0E2232] rounded-xs border-gray-300 focus:ring-[#0E2232]"
                />
                <label htmlFor="privacy-accepted" class="text-xs text-gray-600">
                  J'accepte que les données personnelles soumises dans ce formulaire soient stockées et traitées par GILIS BTP dans le cadre strict de l'étude de ma candidature, conformément à la politique de confidentialité.
                </label>
              </div>

              {/* Submit Button */}
              <div class="pt-4 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  class="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-semibold rounded-sm transition-colors cursor-pointer"
                >
                  Annuler
                </button>

                <button
                  type="submit"
                  class="px-7 py-2.5 bg-[#0E2232] hover:bg-[#183952] text-white text-xs font-semibold rounded-sm shadow-md transition-colors cursor-pointer"
                >
                  Soumettre ma candidature
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
