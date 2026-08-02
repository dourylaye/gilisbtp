import React, { useState, useEffect } from 'react';
import { RequestType, ContactFormData } from '../types';
import { MapPin, Phone, Mail, Clock, Send, Paperclip, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  selectedRequestType?: RequestType;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedRequestType = 'Soumission de projet' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    typeDemande: selectedRequestType,
    fullName: '',
    company: '',
    function: '',
    phone: '',
    email: '',
    country: 'Bénin',
    projectType: 'Construction de routes / Voiries',
    location: '',
    desiredDate: '',
    budget: '',
    message: '',
    fileName: ''
  });

  // Sync when prop changes (e.g. user clicked "Soumettre un projet" or "Demander un devis" elsewhere)
  useEffect(() => {
    if (selectedRequestType) {
      setFormData(prev => ({ ...prev, typeDemande: selectedRequestType }));
    }
  }, [selectedRequestType]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F6F6F3] text-[#06090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="font-subtitle text-xs sm:text-sm text-[#0E2232] uppercase tracking-wider font-semibold">
            Prise de contact &amp; Devis
          </span>
          <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2232] tracking-tight">
            Confiez-nous la réalisation de vos ouvrages
          </h2>
          <div className="gold-line-h w-16 mx-auto my-2"></div>
          <p className="text-gray-600 text-sm sm:text-base">
            Notre direction technique et nos chargés d'affaires se tiennent à votre disposition pour analyser vos cahiers des charges.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 h-full">
            
            <div className="bg-[#0E2232] text-white p-7 sm:p-8 rounded-sm space-y-5 shadow-lg border-t-4 border-[#F5C51B] flex-1">
              <div>
                <h3 className="font-title text-2xl font-bold text-white">
                  Siège Social &amp; Direction Technique
                </h3>
                <p className="font-subtitle text-xs text-[#F5C51B] mt-1 font-semibold">
                  GILIS BTP SARL
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-200">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#F5C51B] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium block">C / 383 Quartier Aïdjedo, Cotonou — BENIN</span>
                    <span className="block text-gray-300 text-xs mt-0.5">06 BP 1771 PK3</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#F5C51B] shrink-0" />
                  <span className="text-white font-medium">00229 0197086645 / 0167676757</span>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#F5C51B] mt-0.5 shrink-0" />
                  <div className="flex flex-col space-y-0.5">
                    <a href="mailto:direction@gilisbtp.com" className="text-white font-semibold hover:text-[#F5C51B] transition-colors">
                      direction@gilisbtp.com
                    </a>
                    <a href="mailto:gilisbtp33@gmail.com" className="text-gray-300 hover:text-[#F5C51B] transition-colors text-xs">
                      gilisbtp33@gmail.com
                    </a>
                  </div>
                </div>

                {/* Registration & Bank info box */}
                <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2 text-gray-300">
                    <div>
                      <span className="text-[#F5C51B] font-bold block">N° RCCM</span>
                      <span className="font-mono text-[11px] text-white">RB / COT / 17 B 19856</span>
                    </div>
                    <div>
                      <span className="text-[#F5C51B] font-bold block">N° IFU</span>
                      <span className="font-mono text-[11px] text-white">3201710108299</span>
                    </div>
                  </div>

                  <div className="pt-1.5 border-t border-white/5">
                    <span className="text-[#F5C51B] font-bold block">Règlement Bancaire</span>
                    <span className="text-white block font-medium">NSIA BANK S.A.</span>
                    <span className="font-mono text-[11px] text-gray-300">Compte n° 260457498027</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-3 border-t border-white/10">
                  <Clock className="w-5 h-5 text-[#F5C51B] shrink-0" />
                  <span className="text-white text-xs">Lundi - Vendredi : 07h30 - 18h00 | Samedi : 08h00 - 13h00</span>
                </div>
              </div>
            </div>

            {/* Simulated Map Visual */}
            <div className="bg-white p-4 border border-gray-200 rounded-sm shadow-xs space-y-3 shrink-0">
              <span className="text-xs font-title font-bold text-[#0E2232] block">Localisation &amp; Emplacement</span>
              <div className="relative h-44 bg-gray-200 rounded-sm overflow-hidden border border-gray-300 flex items-center justify-center">
                <iframe
                  title="Carte de localisation GILIS BTP"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126868.21980860882!2d2.348612!3d6.3702928!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023556041a7e4e1%3A0x6b4eb5648f572791!2sCotonou%2C%20B%C3%A9nin!5e0!3m2!1sfr!2sbj!4v1620000000000!5m2!1sfr!2sbj"
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-90"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Contact Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 md:p-10 rounded-sm border border-gray-200 shadow-md flex flex-col justify-between h-full">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6 my-auto">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="font-title text-2xl font-bold text-[#0E2232]">
                    Demande transmise avec succès !
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    Merci d'avoir contacté GILIS BTP. Notre direction technique étudie votre message et vous recontactera sous 24 à 48 heures ouvrées.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0E2232] hover:bg-[#183952] text-white rounded-sm text-xs font-semibold cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
                
                <div className="space-y-5">
                  {/* Type de Demande Dropdown */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-[#0E2232] uppercase tracking-wider">
                      Type de demande <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="type-demande-select"
                      value={formData.typeDemande}
                      onChange={e => setFormData({ ...formData, typeDemande: e.target.value as RequestType })}
                      className="w-full px-4 py-2.5 bg-[#F6F6F3] border-2 border-[#0E2232]/20 font-semibold text-[#0E2232] rounded-sm text-sm focus:outline-none focus:border-[#0E2232]"
                    >
                      <option value="Soumission de projet">Soumission de projet</option>
                      <option value="Demande de devis">Demande de devis</option>
                      <option value="Demande de partenariat">Demande de partenariat</option>
                      <option value="Demande d’information">Demande d’information</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Nom &amp; Prénom <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="votre nom complet"
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Entreprise / Organisation
                      </label>
                      <input
                        type="text"
                        placeholder="nom de l'entreprise ou ministère"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                      />
                    </div>

                    {/* Function */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Fonction / Titre
                      </label>
                      <input
                        type="text"
                        placeholder="ex: Directeur Technique, Chef de projet..."
                        value={formData.function}
                        onChange={e => setFormData({ ...formData, function: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Téléphone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="ex: +225 07 00 00 00 00"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Email professionnel <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="votre.email@domaine.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Pays <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="ex: Bénin, Togo, Niger, Sénégal..."
                        value={formData.country}
                        onChange={e => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Domaine de l'ouvrage
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                      >
                        <option value="Construction de routes / Voiries">Construction de routes / Voiries</option>
                        <option value="Construction de Bâtiments">Construction de Bâtiments</option>
                        <option value="Ouvrages d'Art & Génie Civil">Ouvrages d'Art &amp; Génie Civil</option>
                        <option value="Voiries et Réseaux Divers (VRD)">Voiries et Réseaux Divers (VRD)</option>
                        <option value="Infrastructures Hydrauliques & Châteaux d'eau">Infrastructures Hydrauliques &amp; Châteaux d'eau</option>
                        <option value="Réhabilitation & Entretien">Réhabilitation &amp; Entretien</option>
                      </select>
                    </div>

                    {/* Location */}
                    <div className="space-y-1">
                      <label className="block text-xs font-semibold text-gray-700">
                        Localisation prévisionnelle
                      </label>
                      <input
                        type="text"
                        placeholder="ex: Cotonou, Porto-Novo, Parakou..."
                        value={formData.location}
                        onChange={e => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                      />
                    </div>

                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700">
                      Description détaillée du projet / Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Précisez les caractéristiques, linéaires, contraintes techniques et délais attendus..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 bg-[#F6F6F3] border border-gray-300 rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#0E2232]"
                    ></textarea>
                  </div>

                  {/* File Attachment */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-700">
                      Joindre un document (Cahier des charges, Plans, Métrés) <span className="text-gray-400 font-normal">(Facultatif)</span>
                    </label>
                    <div className="border border-gray-300 rounded-sm p-2.5 bg-[#F6F6F3] relative cursor-pointer flex items-center justify-between">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <span className="text-xs text-gray-600 truncate">
                        {formData.fileName || 'Joindre un fichier PDF, DWG, ZIP ou image'}
                      </span>
                      <Paperclip className="w-4 h-4 text-gray-500 shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#0E2232] hover:bg-[#183952] text-white font-bold text-sm rounded-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Transmettre ma demande à la Direction Technique</span>
                    <Send className="w-4 h-4 text-[#F5C51B]" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
