export type RequestType = 
  | 'Soumission de projet'
  | 'Demande de devis'
  | 'Demande de partenariat'
  | 'Demande d’information'
  | 'Autre';

export type ProjectCategory = 
  | 'Tous'
  | 'Routes'
  | 'Bâtiments'
  | 'Génie civil'
  | 'Hydraulique'
  | 'VRD'
  | 'Particuliers'
  | 'Entreprises';

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Tous'>;
  location: string;
  year: string;
  status: 'Achevé' | 'En cours' | 'Livré';
  description: string;
  client: string;
  duration: string;
  mission: string;
  works: string[];
  technicalData: Record<string, string>;
  results: string;
  images: string[];
}

export interface Expertise {
  id: string;
  number: string;
  title: string;
  image: string;
  summary: string;
  services: string[];
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
  category: string;
  logoText: string;
  iconName?: string;
  imageUrl?: string;
}

export interface ContactFormData {
  typeDemande: RequestType;
  fullName: string;
  company: string;
  function: string;
  phone: string;
  email: string;
  country: string;
  projectType: string;
  location: string;
  desiredDate: string;
  budget: string;
  message: string;
  fileName?: string;
}

export interface CareerFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  targetRole: string;
  expertiseArea: string;
  educationLevel: string;
  experienceYears: string;
  availability: string;
  cvFile: File | null;
  cvFileName?: string;
  coverLetterFile?: File | null;
  coverLetterFileName?: string;
  linkedInUrl?: string;
  message: string;
  privacyAccepted: boolean;
}
