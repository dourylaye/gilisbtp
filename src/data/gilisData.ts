import { Project, Expertise, MethodStep, PartnerLogo } from '../types';

export const EXPERTISES: Expertise[] = [
  {
    id: 'routes',
    number: '01',
    title: 'Routes et infrastructures routières',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200',
    summary: 'Conception, bitumage, aménagement et modernisation des axes routiers urbains et interurbains.',
    services: [
      'Études géotechniques et tracé routier',
      'Terrassements généraux et chaussées',
      'Revêtements en béton bitumineux et enrobés',
      'Signalisation verticale et marquage au sol',
      'Ouvrages d’assainissement pluvial et bordures'
    ]
  },
  {
    id: 'batiments',
    number: '02',
    title: 'Construction de bâtiments',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    summary: 'Édification d’immeubles administratifs, commerciaux, résidentiels et d’équipements publics.',
    services: [
      'Gros œuvre et structures en béton armé',
      'Bâtiments tertiaires, scolaires et hospitaliers',
      'Second œuvre et finitions architecturales',
      'Génie électrique, fluide et climatisation',
      'Aménagements extérieurs et parkings'
    ]
  },
  {
    id: 'genie-civil',
    number: '03',
    title: 'Ouvrages d’art et génie civil',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
    summary: 'Réalisation d’infrastructures majeures : ponts, viaducs, dalles de franchissement et structures lourdes.',
    services: [
      'Ponts à poutres, dalles et ouvrages d’art',
      'Fondations spéciales et pieux de fondation',
      'Soutènements, murs d’appui et gabions',
      'Dalots et passages sous-terrain',
      'Génie civil industriel et fondations d’engins'
    ]
  },
  {
    id: 'vrd',
    number: '04',
    title: 'Voiries et réseaux divers (VRD)',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
    summary: 'Viabilisation de terrains, aménagement urbain et pose de réseaux techniques souterrains.',
    services: [
      'Terrassement et nivellement de grandes surfaces',
      'Pose de réseaux d’assainissement pluvial et usé',
      'Réseaux d’électrification et éclairage public',
      'Télécommunications et réseaux de fibre optique',
      'Pavage, trottoirs et voies piétonnes'
    ]
  },
  {
    id: 'hydraulique',
    number: '05',
    title: 'Hydraulique et adduction d’eau',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    summary: 'Construction de châteaux d’eau, stations de pompage et réseaux d’adduction d’eau potable.',
    services: [
      'Construction de châteaux d’eau en béton armé',
      'Forages d’eau à gros débit et unités de traitement',
      'Pose de conduites de refoulement et distribution',
      'Stations de pompage et réservoirs au sol',
      'Périmètres d’irrigation et infrastructures d’eau'
    ]
  },
  {
    id: 'rehabilitation',
    number: '06',
    title: 'Réhabilitation et entretien',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    summary: 'Diagnostic, réparation structurelle, rénovation et maintenance préventive des ouvrages.',
    services: [
      'Diagnostic technique et expertise de vétusté',
      'Renforcement de structures en béton et métal',
      'Réparation de chaussées et rechargement d’enrobé',
      'Étanchéité et réfection de toitures/façades',
      'Entretien récurrent et contrats de maintenance'
    ]
  }
];

export const METHOD_STEPS: MethodStep[] = [
  {
    number: '01',
    title: 'Comprendre',
    description: 'Nous commençons par écouter le maître d’ouvrage et analyser précisément ses attentes. Cette étape permet d’identifier les objectifs du projet, les besoins fonctionnels, les contraintes du terrain, les exigences techniques, les délais et les ressources disponibles.'
  },
  {
    number: '02',
    title: 'Étudier et planifier',
    description: 'Nous transformons les besoins identifiés en un plan d’exécution structuré. Les études techniques, les métrés, la planification des travaux, l’organisation des équipes, la mobilisation des équipements et l’approvisionnement en matériaux sont définis avant le démarrage du chantier.'
  },
  {
    number: '03',
    title: 'Mobiliser et construire',
    description: 'Nous déployons les équipes, les équipements et les ressources nécessaires à l’exécution du projet. Les travaux sont réalisés conformément aux plans, aux spécifications techniques, au calendrier établi et aux règles de sécurité applicables.'
  },
  {
    number: '04',
    title: 'Contrôler et sécuriser',
    description: 'Nous assurons un suivi permanent de l’avancement, de la qualité des travaux et de la sécurité du chantier. Les matériaux, les méthodes d’exécution et les ouvrages réalisés font l’objet de vérifications régulières afin de garantir leur conformité et leur durabilité.'
  },
  {
    number: '05',
    title: 'Livrer et accompagner',
    description: 'Nous préparons la réception de l’ouvrage, réalisons les dernières vérifications et remettons les documents nécessaires au maître d’ouvrage. Notre accompagnement peut se poursuivre après la livraison à travers des interventions de maintenance, d’entretien ou d’assistance technique.'
  }
];

export const PROJECTS: Project[] = [
  // SECTION 1: Routes, Voiries & VRD (2020 -> 2025)
  {
    id: 'proj-10',
    title: 'Voiries Urbaines & Assainissement Pluvial Local',
    category: 'Routes',
    location: 'Secteur Communal Ouest',
    year: '2020',
    status: 'Livré',
    description: 'Aménagement de 12 km de voies urbaines avec caniveaux bétonnés et éclairage public.',
    client: 'Municipalité & Programme de Voiries',
    duration: '10 mois',
    mission: 'Terrassement, pose de bordures P1/T2, chaussée en béton bitumineux et réseau de drainage.',
    works: [
      'Terrassement général de 120 000 m³',
      'Pose de 12 km de caniveaux couverts en béton armé',
      'Bitumage de chaussée bicouche 7 mètres',
      'Signalisation horizontale et panneaux rétro-réfléchissants'
    ],
    technicalData: {
      'Longueur': '12 km',
      'Largeur': '7.00 m',
      'Caniveaux': '12 km en béton armé',
      'Postes créés': '85 emplois locaux'
    },
    results: 'Élimination des inondations saisonnières et amélioration de la mobilité urbaine pour 35 000 habitants.',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'proj-11',
    title: 'Gare Routière & Plateforme Multimodale Fret',
    category: 'VRD',
    location: 'Zone Périurbaine Sud',
    year: '2021',
    status: 'Livré',
    description: 'Aménagement VRD de 18 hectares comprenant voies lourdes pour semi-remorques et quais de déchargement.',
    client: 'Conseil Régional des Transports',
    duration: '14 mois',
    mission: 'Viabilisation globale, dallage béton à haute résistance et éclairage solaire.',
    works: [
      'Terrassement et viabilisation de 180 000 m²',
      'Pose de pavés autobloquants 10 cm pour charges lourdes',
      'Réseau d’assainissement pluvial et débourbeurs d’hydrocarbures',
      'Installation de 60 mâts solaires autonettoyants'
    ],
    technicalData: {
      'Superficie': '18 hectares',
      'Capacité': '250 poids lourds / jour',
      'Revêtement': 'Pavés lourds 10 cm',
      'Eclairage': '100% Solaire LED'
    },
    results: 'Fluidification majeure du trafic marchandises régional et pôle économique sécurisé.',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'proj-1',
    title: 'Autoroute de Desserte Régionale - Tronçon Nord',
    category: 'Routes',
    location: 'Axe Interurbain Nord',
    year: '2024',
    status: 'Livré',
    description: 'Construction et bitumage d’un axe autoroutier de 45 km avec aménagement des carrefours et éclairage solaire.',
    client: 'Ministère des Infrastructures Routières',
    duration: '22 mois',
    mission: 'Maîtrise d’exécution globale, terrassement, chaussée en béton bitumineux et signalisation.',
    works: [
      'Terrassement de plus de 850 000 m³ de déblais/remblais',
      'Pose de 45 km de couche de base en grave bitume',
      'Application de revêtement Béton Bitumineux (BB) 6 cm',
      'Réalisation de 32 dalots en béton armé',
      'Installation de signalisation haute visibilité et candélabres solaires'
    ],
    technicalData: {
      'Longueur totale': '45 km',
      'Largeur chaussée': '2x2 voies (14 mètres)',
      'Volume d’enrobé': '92 000 tonnes',
      'Ouvrages d’assainissement': '32 dalots mixtes'
    },
    results: 'Désenclavement majeur de la région, réduction du temps de trajet de 40% et sécurité routière renforcée.',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'proj-12',
    title: 'Boulevard Périphérique & Échangeur Urbain 3 Niveaux',
    category: 'Routes',
    location: 'Axe Métropolitain',
    year: '2025',
    status: 'En cours',
    description: 'Projet d’envergure comprenant un boulevard 2x3 voies et un échangeur dénivelé pour décongestionner la métropole.',
    client: 'Ministère de l’Équipement & Métropole',
    duration: '24 mois',
    mission: 'Terrassement de grande masse, réalisation des structures en béton armé précontraint et asphaltage.',
    works: [
      'Terrassement de 1 200 000 m³ de roches et terres',
      'Fondations profondes sur 84 pieux forés de 30 mètres',
      'Viaduc d’accès en poutres précontraintes de 280 mètres',
      'Chausse lourde renforcée en enrobé à haute rigidité'
    ],
    technicalData: {
      'Longueur': '18 km',
      'Echangeur': '3 niveaux de franchissement',
      'Pieux': '84 unités ø1500mm',
      'Avancement': '55% réalisé'
    },
    results: 'Capacité de transit estimée à 80 000 véhicules/jour à la livraison fin 2025.',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200'
    ]
  },

  // SECTION 2: Bâtiments & Équipements (2021 -> 2025)
  {
    id: 'proj-13',
    title: 'Lycée Technique & Centre de Formation Professionnelle',
    category: 'Bâtiments',
    location: 'District Scolaire Régional',
    year: '2021',
    status: 'Livré',
    description: 'Construction d’un campus scolaire comprenant 24 salles de classe, ateliers de génie civil et dortoirs.',
    client: 'Ministère de l’Éducation Nationale',
    duration: '12 mois',
    mission: 'Gros œuvre en béton armé, second œuvre, câblage informatique et aménagements paysagers.',
    works: [
      'Construction de 6 bâtiments R+1 en maçonnerie chaînée',
      'Aménagement d’ateliers mécaniques et laboratoires BTP',
      'Installation de centrale solaire de 50 kWp',
      'Clôture périphérique de 1,2 km et terrain de sport'
    ],
    technicalData: {
      'Surface': '7 800 m²',
      'Capacité': '1 500 élèves',
      'Ateliers': '4 blocs spécialisés',
      'Énergie': 'Solaire hybride'
    },
    results: 'Inauguration dans les délais pour la rentrée scolaire avec 100% de conformité aux normes sécurité.',
    images: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'proj-2',
    title: 'Complexe Administratif & Cité des Finances',
    category: 'Bâtiments',
    location: 'District Administratif Central',
    year: '2023',
    status: 'Achevé',
    description: 'Construction d’un immeuble de bureau R+7 avec parking souterrain, auditorium et certification haute efficacité.',
    client: 'Direction Générale du Patrimoine de l’État',
    duration: '18 mois',
    mission: 'Construction clé en main comprenant le gros œuvre, le second œuvre et les installations fluides.',
    works: [
      'Fondations profondes sur pieux forés de 25m',
      'Structure R+7 en béton armé haute résistance',
      'Façade mur-rideau vitrée thermo-isolante',
      'Aménagement de 12 000 m² de bureaux modulables'
    ],
    technicalData: {
      'Surface construite': '14 500 m²',
      'Niveaux': 'R+7 + 2 sous-sols',
      'Capacité d’accueil': '1 200 agents',
      'Autonomie énergétique': '35% via solaire'
    },
    results: 'Livraison dans les délais impartis, zéro incident avec arrêt de travail, bâtiment moderne.',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'proj-6',
    title: 'Réhabilitation Lourd & Rénovation du Centre Hospitalier',
    category: 'Bâtiments',
    location: 'Centre Médical Régional',
    year: '2023',
    status: 'Livré',
    description: 'Remise aux normes, renforcement de structure, réfection des toitures et modernisation des blocs opératoires.',
    client: 'Ministère de la Santé et de l’Hygiène Publique',
    duration: '10 mois',
    mission: 'Travaux de réhabilitation en site occupé sans perturbation de l’activité médicale d’urgence.',
    works: [
      'Reprise en sous-œuvre et traitement des fissures structurelles',
      'Réfection complète de 4 500 m² de toitures avec étanchéité bicouche',
      'Création de sas d’isolement et traitement d’air stérile',
      'Remplacement des réseaux fluides médicaux'
    ],
    technicalData: {
      'Surface rénovée': '8 200 m²',
      'Salles d’opération': '4 blocs stérilisés',
      'Réseau secours': 'Groupe 800 kVA',
      'Maintien d’activité': '100% opérationnel'
    },
    results: 'Centre hospitalier moderne, répondant aux normes sanitaires internationales, livré en avance de 3 semaines.',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'proj-14',
    title: 'Tour Siège & Centre d’Affaires Éco-Conçu R+12',
    category: 'Bâtiments',
    location: 'Quartier des Affaires',
    year: '2025',
    status: 'En cours',
    description: 'Édification d’une tour bioclimatique de 12 étages avec façades végétalisées et héliport technique.',
    client: 'Consortium Immobilier & Tertiaire',
    duration: '20 mois',
    mission: 'Gros œuvre lourd, voiles en béton architectural et intégration des fluides intelligents.',
    works: [
      'Radié général en béton armé de 2,20m d’épaisseur',
      'Noyau central de contreventement coulé à coffrage glissant',
      'Façade double peau vitrée avec brise-soleil orientables',
      'Système de récupération des eaux de pluie et toiture végétalisée'
    ],
    technicalData: {
      'Hauteur': '52 mètres',
      'Surface': '22 000 m²',
      'Niveaux': 'R+12 + 3 sous-sols',
      'Avancement': '40% réalisé'
    },
    results: 'Futur bâtiment repère d’efficacité énergétique pour la capitale d’affaires.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
    ]
  },

  // SECTION 3: Génie Civil & Hydraulique (2022 -> 2024)
  {
    id: 'proj-15',
    title: 'Station de Pompage & Refoulement d’Eau Brute',
    category: 'Hydraulique',
    location: 'Bassin Fleuve Comoé',
    year: '2022',
    status: 'Livré',
    description: 'Infrastructures d’exhaure et station de pompage d’une capacité de 3 500 m³/heure pour l’alimentation urbaine.',
    client: 'Société Nationale de Distribution d’Eau',
    duration: '11 mois',
    mission: 'Génie civil étanche en béton BAP, pose des conduites de refoulement en fonte ductile ø800.',
    works: [
      'Coulage de bassin circulaire d’exhaure en béton armé étanche',
      'Pose de 3 pompes submersibles haute pression 450 kW',
      'Pose de 8,5 km de conduites de refoulement en fonte',
      'Poste de transformation électrique dédié et télégestion'
    ],
    technicalData: {
      'Débit': '3 500 m³/h',
      'Conduites': 'Fonte ø800 mm',
      'Profondeur exhaure': '14 mètres',
      'Fiabilité': '100% continu'
    },
    results: 'Renforcement décisif de la sécurité hydraulique pour une population de 120 000 résidents.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'proj-4',
    title: 'Château d’Eau & Réseau d’Adduction Potable (AEP)',
    category: 'Hydraulique',
    location: 'Zone Périurbaine Est',
    year: '2023',
    status: 'Livré',
    description: 'Château d’eau de 1 000 m³ sur 30m de hauteur avec station de pompage solaire et réseau d’adduction de 28 km.',
    client: 'Office National de l’Eau Potable',
    duration: '12 mois',
    mission: 'Génie civil du réservoir surélevé, forages à fort débit et pose de conduites PEHD/Fonte.',
    works: [
      'Coulage continu du fût en béton armé (30m)',
      'Fabrication et étanchéité de la cuve de 1 000 m³',
      'Équipement de 3 forages profonds (180m) avec pompes solaires',
      'Pose de 28 km de canalisations d’adduction et distribution'
    ],
    technicalData: {
      'Capacité cuve': '1 000 m³',
      'Hauteur': '30 mètres',
      'Réseau posé': '28 km PEHD / Fonte',
      'Population': '+65 000 habitants'
    },
    results: 'Accès pérenne et sécurisé à l’eau potable pour plus de 65 000 habitants avec zéro interruption.',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 'proj-3',
    title: 'Pont Mixte Béton-Acier de Franchissement',
    category: 'Génie civil',
    location: 'Vallée de la Comoé',
    year: '2024',
    status: 'Livré',
    description: 'Ouvrage d’art à 4 travées de 160 mètres de portée totale pour sécuriser la traverse d’une rivière stratégique.',
    client: 'Agence Nationale d’Appui au Développement',
    duration: '14 mois',
    mission: 'Études d’exécution d’ouvrage d’art, coulage de culées en béton armé et lançage de charpente métallique.',
    works: [
      'Réalisation de fondations sur pieux de grand diamètre (1 200 mm)',
      'Coulage des culées et piles en zone inondable',
      'Assemblage et lançage de tablier métallique de 420 tonnes',
      'Hourdis en béton armé précontraint'
    ],
    technicalData: {
      'Longueur totale': '160 mètres',
      'Travées': '4 travées de 40m',
      'Acier': '420 tonnes',
      'Classe de charge': 'Convoi (100t)'
    },
    results: 'Franchissement permanent accessible toute l’année, reliant 15 localités auparavant isolées.',
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];


export const PARTNERS: PartnerLogo[] = [
  { id: 'p1', name: 'Ministère des Equipements', category: 'Institutionnel', logoText: 'MINISTÈRE DES ÉQUIPEMENTS' },
  { id: 'p2', name: 'Agence Nationale des Routes', category: 'Public', logoText: 'AGENCE NATIONALE DES ROUTES' },
  { id: 'p3', name: 'Banque Ouest Africaine de Développement', category: 'Financeur', logoText: 'BOAD PARTNER' },
  { id: 'p4', name: 'Office National de l’Eau', category: 'Public', logoText: 'OFFICE DE L’EAU POTABLE' },
  { id: 'p5', name: 'Société d’Aménagement Urbain', category: 'Foncier', logoText: 'SOCIÉTÉ D’AMÉNAGEMENT' },
  { id: 'p6', name: 'Cemex Lafarge Holcim', category: 'Fournisseur', logoText: 'CIMENT & BÉTONS' },
  { id: 'p7', name: 'Caterpillar Bergerat Monnoyeur', category: 'Équipements', logoText: 'CAT MACHINERY' },
  { id: 'p8', name: 'TotalEnergies Infrastructure', category: 'Énergie', logoText: 'TOTALENERGIES BTP' },
  { id: 'p9', name: 'SGS Contrôle Technique', category: 'Qualité', logoText: 'SGS QUALITY CONTROL' },
  { id: 'p10', name: 'Sodeci Hydro Services', category: 'Hydraulique', logoText: 'HYDRO SERVICES' }
];

export const DIRECTOR_DATA = {
  name: 'M. Jean-Baptiste GILIS',
  title: 'Directeur Général de GILIS BTP',
  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
  quote: 'Chez GILIS BTP, chaque projet représente une responsabilité et une occasion de construire durablement. Nous avons fait le choix d’une approche fondée sur la rigueur, la qualité d’exécution et le respect de nos engagements. Notre ambition ne se limite pas à réaliser des ouvrages. Nous voulons contribuer à la transformation des territoires à travers des infrastructures utiles, solides et adaptées aux besoins des populations.\n\nLa réussite de nos projets repose sur la compétence de nos équipes, la confiance de nos clients et partenaires, ainsi que notre capacité à rechercher constamment des solutions plus performantes.\n\nNous avançons avec une conviction forte : l’excellence ne se proclame pas, elle se construit à chaque étape.'
};
