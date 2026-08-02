import { Project, Expertise, MethodStep, PartnerLogo } from '../types';

export const EXPERTISES: Expertise[] = [
  {
    id: 'routes',
    number: '01',
    title: 'Routes et infrastructures routières',
    image: '/Images/Pole1.webp',
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
    image: '/Images/Pole2.webp',
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
    image: '/Images/Pole3.webp',
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
    image: '/Images/Pole4.webp',
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
    image: '/Images/Pole5.webp',
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
    image: '/Images/Pole6.webp',
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


export const PARTICULIERS_PROJECTS: Project[] = [
  {
    id: 'pat-1',
    title: 'Villa Résidentielle Contemporaine R+1',
    category: 'Particuliers',
    location: 'Cotonou, Bénin',
    year: '2021',
    status: 'Livré',
    description: 'Construction intégrale d’une villa moderne R+1 alliant lignes architecturales épurées, finitions haut de gamme et optimisation de la lumière naturelle.',
    client: 'Client Particulier',
    duration: '8 mois',
    mission: 'Conception, gros œuvre, second œuvre, étanchéité et aménagement des abords.',
    works: [
      'Structure et dalles béton armé',
      'Maçonnerie de haute précision et enduits fins',
      'Menuiseries alu double vitrage & baies vitrées',
      'Terrasse aménagée et étanchéité haute durabilité'
    ],
    technicalData: {
      'Surface bâtie': '350 m²',
      'Niveaux': 'R+1',
      'Style': 'Moderne / Contemporain'
    },
    results: 'Villa clé en main d’une grande finesse architecturale, livrée dans les délais.',
    images: ['Galerie/PAT1.webp']
  },
  {
    id: 'pat-2',
    title: 'Demeure Familiale avec Parement de Pierre',
    category: 'Particuliers',
    location: 'Abomey-Calavi, Bénin',
    year: '2022',
    status: 'Livré',
    description: 'Édification d’une demeure individuelle haut de standing sublimée par des façades en parement de pierre naturelle et une intégration paysagère soignée.',
    client: 'Client Particulier',
    duration: '7 mois',
    mission: 'Études de structure, terrassement, maçonnerie, revêtements extérieurs et second œuvre.',
    works: [
      'Fondations profondes et ossature béton armé',
      'Pose de parements de pierre naturelle en façade',
      'Éclairage architectural extérieur et spots LED',
      'Aménagement de la cour pavée et clôture de sécurité'
    ],
    technicalData: {
      'Surface bâtie': '280 m²',
      'Niveaux': 'Rez-de-chaussée & Mezzanine',
      'Finition': 'Pierre naturelle & Enduit lisse'
    },
    results: 'Ouvrage résidentiel chaleureux et élégant offrant des performances acoustiques et thermiques d’excellence.',
    images: ['Galerie/PAT2.webp']
  },
  {
    id: 'pat-3',
    title: 'Villa Duplex de Standing avec Balcon Verrière',
    category: 'Particuliers',
    location: 'Porto-Novo, Bénin',
    year: '2023',
    status: 'Livré',
    description: 'Réalisation d’une villa duplex moderne avec balcon panoramique en garde-corps vitré, pièces de vie spacieuses et terrasse couverte.',
    client: 'Client Particulier',
    duration: '10 mois',
    mission: 'Gros œuvre complet, installation des fluides/électricité, second œuvre et finitions décoratives.',
    works: [
      'Structure autoporteuse et planchers précontraints',
      'Revêtement de sol en grès cérame grand format',
      'Garde-corps en verre trempé et menuiseries noires mat',
      'Réseaux électriques encastrés et domotique de base'
    ],
    technicalData: {
      'Surface bâtie': '420 m²',
      'Niveaux': 'R+1 avec terrasse rooftop',
      'Style': 'Architectural contemporain'
    },
    results: 'Duplex d’exception alliant confort moderne, sécurité et esthétique soignée.',
    images: ['Galerie/PAT3.webp']
  },
  {
    id: 'pat-4',
    title: 'Résidence Privée Haut Standing',
    category: 'Particuliers',
    location: 'Cotonou (Zone Résidentielle), Bénin',
    year: '2023',
    status: 'Livré',
    description: 'Construction sur-mesure d’une résidence privée haut de gamme dotée d’une architecture géométrique affirmée et de grands volumes ouverts.',
    client: 'Client Particulier',
    duration: '9 mois',
    mission: 'Terrassement, gros œuvre, étanchéité de toiture terrasse, second œuvre et peinture.',
    works: [
      'Fondations isolées sur semelles béton',
      'Élévations en agglos haute densité et maçonnerie',
      'Baies coulissantes panoramiques et brise-soleil',
      'Revêtements de sol et travaux de finitions haut de gamme'
    ],
    technicalData: {
      'Surface bâtie': '390 m²',
      'Niveaux': 'R+1',
      'Finition': 'Luxe épuré'
    },
    results: 'Résidence de prestige au style affirmation contemporain et à l’étanchéité optimale.',
    images: ['Galerie/PAT4.webp']
  },
  {
    id: 'pat-5',
    title: 'Villa Individuelle & Aménagements Extérieurs',
    category: 'Particuliers',
    location: 'Ouidah, Bénin',
    year: '2024',
    status: 'Livré',
    description: 'Projet de construction d’une villa individuelle élégante avec cour pavée, accès viabilisé et clôture périphérique ouvragée.',
    client: 'Client Particulier',
    duration: '6 mois',
    mission: 'Terrassement, gros œuvre, second œuvre et pavage de cour.',
    works: [
      'Terrassement et viabilisation de la parcelle',
      'Structure béton armé et maçonnerie',
      'Pose de pavés autobloquants et cour aménagée',
      'Portail métallique sur mesure et clôture'
    ],
    technicalData: {
      'Surface bâtie': '310 m²',
      'Niveaux': 'Rez-de-chaussée élevé',
      'Aménagement': 'Cour pavée & Jardin'
    },
    results: 'Villa très fonctionnelle au cadre de vie agréable, livrée clé en main.',
    images: ['Galerie/PAT5.webp']
  },
  {
    id: 'pat-6',
    title: 'Grande Propriété Résidentielle Familiale',
    category: 'Particuliers',
    location: 'Cotonou, Bénin',
    year: '2024',
    status: 'Achevé',
    description: 'Conception et réalisation d’une grande propriété familiale R+1 comprenant plusieurs suites, espaces de réception et dépendances.',
    client: 'Client Particulier',
    duration: '11 mois',
    mission: 'Maîtrise d’œuvre globale, terrassement, gros œuvre, électricité, plomberie et finitions.',
    works: [
      'Terrassement général, fondations et dalles armées',
      'Réseau d’assainissement complet et drainage pluvial',
      'Enduits décoratifs de façade et peinture haute résistance',
      'Installation de sécurité, portail motorisé et clôture'
    ],
    technicalData: {
      'Surface bâtie': '480 m²',
      'Niveaux': 'R+1',
      'Capacité': 'Grandes réceptions & Dépendance'
    },
    results: 'Superbe propriété d’une solidité exemplaire et au confort optimal pour toute la famille.',
    images: ['Galerie/PAT6.png']
  }
];

export const ENTREPRISES_PROJECTS: Project[] = [
  {
    id: 'ent-1',
    title: 'Complexe Immobilier & Siège Administratif',
    category: 'Entreprises',
    location: 'Cotonou, Bénin',
    year: '2021',
    status: 'Livré',
    description: 'Construction intégrale du siège administratif et commercial d’une entreprise régionale, intégrant espaces tertiaires modulables et salles de conférence.',
    client: 'Société Commerciale Privée',
    duration: '12 mois',
    mission: 'Études architecturales, gros œuvre, second œuvre, climatisation centralisée et sécurité incendie.',
    works: [
      'Fondations profondes et structure en béton armé',
      'Façades architecturales modernes et vitrages mur rideau',
      'Aménagement de bureaux, salles de réunion et réception',
      'Installation de groupe électrogène et centrale solaire'
    ],
    technicalData: {
      'Surface utile': '1 200 m²',
      'Niveaux': 'R+2',
      'Postes de travail': '120 emplois'
    },
    results: 'Livraison clé en main d’un bâtiment tertiaire de haute valeur patrimoniale.',
    images: ['Galerie/E1.png']
  },
  {
    id: 'ent-2',
    title: 'Plateforme Logistique & Piste Industrielle',
    category: 'Entreprises',
    location: 'Zone Industrielle, Bénin',
    year: '2022',
    status: 'Livré',
    description: 'Aménagement lourd de pistes d’accès, terrassement et viabilisation pour un hub logistique réservé aux poids lourds.',
    client: 'Consortium Industriel',
    duration: '8 mois',
    mission: 'Terrassement général, assainissement pluvial et pose de revêtement bicouche haute résistance.',
    works: [
      'Terrassement et décapage sur 45 000 m²',
      'Construction de fossés bétonnés et ouvrages de décharge',
      'Chaussée renforcée pour forte charge à l’essieu (13 tonnes)',
      'Signalisation industrielle et éclairage autonome'
    ],
    technicalData: {
      'Longueur piste': '4.5 km',
      'Portance': 'Très forte charge',
      'Superficie plateforme': '30 000 m²'
    },
    results: 'Fluidification des flux logistiques et accès sécurisé 24h/24 pour engins lourds.',
    images: ['Galerie/E2.png']
  },
  {
    id: 'ent-3',
    title: 'Infrastructures VRD & Réseaux d’Entreprises',
    category: 'Entreprises',
    location: 'Abomey-Calavi, Bénin',
    year: '2023',
    status: 'Livré',
    description: 'Travaux complets de voiries et réseaux divers (VRD) pour la viabilisation d’un parc d’activités économiques.',
    client: 'Opérateur Foncier & Industriel',
    duration: '9 mois',
    mission: 'Pose de caniveaux grand gabarit, réseaux d’eau potable, électrification et pavage des voies.',
    works: [
      'Pose de 3 500 mètres de caniveaux préfabriqués',
      'Adduction d’eau industrielle et réservoir tampon',
      'Réseaux de câbles électriques et réservations fibre optique',
      'Pavage des trottoirs et axes de circulation'
    ],
    technicalData: {
      'Réseau assainissement': '3.5 km',
      'Superficie couverte': '15 hectares',
      'Type d’ouvrage': 'VRD complet'
    },
    results: 'Parc d’activités entièrement viabilisé conforme aux normes environnementales.',
    images: ['Galerie/E3.png']
  },
  {
    id: 'ent-4',
    title: 'Bâtiment Industriel & Entrepôt de Stockage',
    category: 'Entreprises',
    location: 'Porto-Novo, Bénin',
    year: '2023',
    status: 'Livré',
    description: 'Édification d’un entrepôt de stockage à grande portée avec dallage industriel quartzé et quai de déchargement.',
    client: 'Entreprise d’Import-Export',
    duration: '7 mois',
    mission: 'Gros œuvre béton, dallage à haute résistance, charpente métallique et bardage.',
    works: [
      'Coulage de dallage industriel lissé au quartz (5 t/m²)',
      'Montage de charpente métallique à portée libre',
      'Quais de chargement autonivelants',
      'Étanchéité et isolation thermique de toiture'
    ],
    technicalData: {
      'Surface couverte': '2 500 m²',
      'Hauteur sous plafond': '9 mètres',
      'Charge dallage': '5 tonnes/m²'
    },
    results: 'Entrepôt moderne opérationnel offrant un volume de stockage optimal.',
    images: ['Galerie/E4.png']
  },
  {
    id: 'ent-5',
    title: 'Ouvrage de Génie Civil & Fondations Spéciales',
    category: 'Entreprises',
    location: 'Ouidah, Bénin',
    year: '2024',
    status: 'Livré',
    description: 'Réalisation d’ouvrages de génie civil lourd comprenant massifs de fondation d’engins et murs de soutènement.',
    client: 'Groupe BTP & Transport',
    duration: '10 mois',
    mission: 'Études géotechniques approfondies, forage de pieux et coulage de massifs de fondation.',
    works: [
      'Forage et coulage de pieux armés ancrés en profondeur',
      'Massifs en béton armé vibré haute performance',
      'Murs de soutènement et stabilisation de talus',
      'Essais de portance et contrôle ultrasons'
    ],
    technicalData: {
      'Pieux de fondation': '48 unités',
      'Volume béton': '1 800 m³',
      'Classe béton': 'C35/45'
    },
    results: 'Infrastructure de génie civil certifiée pour résister aux sollicitations extrêmes.',
    images: ['Galerie/E5.png']
  },
  {
    id: 'ent-6',
    title: 'Zone Tertiaire & Campus d’Innovation',
    category: 'Entreprises',
    location: 'Cotonou, Bénin',
    year: '2024',
    status: 'Achevé',
    description: 'Construction d’un complexe immobilier d’affaires moderne accueillant des espaces de coworking et sièges d’entreprises.',
    client: 'Groupe Privé Partenaire',
    duration: '11 mois',
    mission: 'Gros œuvre, second œuvre, intégration énergétique et aménagements paysagers.',
    works: [
      'Structure poteaux-poutres et dalles alvéolaires',
      'Agencements intérieurs acoustiques et modulables',
      'Espaces extérieurs paysagers et terrasses en teck',
      'Contrôle d’accès biométrique et vidéosurveillance'
    ],
    technicalData: {
      'Surface bâtie': '1 800 m²',
      'Niveaux': 'R+3',
      'Certification': 'HQE / Efficacité énergétique'
    },
    results: 'Campus d’innovation emblématique livré dans le respect des exigences esthétiques et techniques.',
    images: ['Galerie/E6.png']
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

export const COMPANY_INFO = {
  name: 'GILIS BTP SARL',
  rccm: 'RB / COT / 17 B 19856',
  ifu: '3201710108299',
  address: 'C / 383 Quartier Aïdjedo Cotonou BENIN',
  boitePostale: '06 BP 1771 PK3',
  phones: ['00229 0197086645', '00229 0167676757'],
  phoneDisplay: '00229 0197086645 / 0167676757',
  email: 'gilisbtp33@gmail.com',
  bank: {
    name: 'NSIA BANK S.A.',
    accountNumber: '260457498027'
  }
};

