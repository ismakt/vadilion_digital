'use strict';

/* ============================================================
   SOLUTIONS & RÉALISATIONS — SOURCE UNIQUE DE VÉRITÉ
   ------------------------------------------------------------
   SOLUTIONS : ce que Vadilion Digital propose aux clients.
   WORKS     : ce qui a déjà été construit (onglet Réalisations).
   Le français est la source de vérité. L'anglais suit.

   Tout est affiché directement sur la carte (pas de fiche).

   SOLUTIONS — champs : id, art (clé art.js)
     Par langue : name, line, items ([titre, ' — détail'] ou [titre])

   WORKS — champs : id, art, cat
     Par langue : kind, state, name, line, text (essence du
                  projet, 2 phrases max)
   ============================================================ */

const SOLUTIONS = [
  {
    id: 'business-essentials', art: 'essentials',
    fr: {
      name: 'Business Essentials',
      line: 'Le package de solutions essentielles pour tout business.',
      items: [
        ['Site web et/ou application'],
        ['Logo et cartes de visite'],
        ['Réseaux sociaux'],
        ['Fiche Google + cartes NFC']
      ]
    },
    en: {
      name: 'Business Essentials',
      line: 'The essential solutions package for any business.',
      items: [
        ['Website and/or app'],
        ['Logo and business cards'],
        ['Social media'],
        ['Google profile + NFC cards']
      ]
    }
  },
  {
    id: 'sur-mesure', art: 'flow',
    fr: {
      name: 'Solutions sur mesure',
      line: 'Des outils internes conçus autour de vos besoins.',
      items: [
        ['Applications internes', ' — planning, suivi, gestion de stock, outils métier.'],
        ['Automatisation', " — plus d'efficacité, sans tâches répétitives."],
        ['Sur mesure', ' — des solutions conçues pour répondre à vos besoins spécifiques.']
      ]
    },
    en: {
      name: 'Custom solutions',
      line: 'Internal tools built around your needs.',
      items: [
        ['Internal apps', ' — scheduling, tracking, stock management, business tools.'],
        ['Automation', ' — more efficiency, no repetitive tasks.'],
        ['Tailor-made', ' — solutions designed around your specific needs.']
      ]
    }
  },
  {
    id: 'analyse-donnees', art: 'dash',
    fr: {
      name: 'Analyse des données',
      line: 'Visualiser, suivre et comprendre votre activité.',
      items: [
        ['Organisation des données', ' — vos fichiers et outils centralisés et fiabilisés.'],
        ['Tableaux de bord', ' — suivi de vos indicateurs en temps réel.'],
        ['Analyse', ' — ce qui marche, ce qui ne marche pas, et pourquoi.']
      ]
    },
    en: {
      name: 'Data analysis',
      line: 'See, track and understand your business.',
      items: [
        ['Data organisation', ' — your files and tools centralised and made reliable.'],
        ['Dashboards', ' — your indicators tracked in real time.'],
        ['Analysis', ' — what works, what does not, and why.']
      ]
    }
  },
  {
    id: 'etude-emplacement', art: 'locality',
    fr: {
      name: "Étude d'emplacement",
      line: 'Intelligence territoriale et géomarketing.',
      items: [
        ['Ouverture / expansion', ' — premier point de vente ou nouveau site.'],
        ['Clientèle et localité', " — qui vit, passe et consomme autour de l'adresse."],
        ['Immobilier / déménagement', ' — le quartier vu sans filtre commercial.']
      ]
    },
    en: {
      name: 'Location study',
      line: 'Location intelligence and geomarketing.',
      items: [
        ['Opening / expansion', ' — first store or a new site.'],
        ['Customers and area', ' — who lives, passes by and spends around the address.'],
        ['Property / relocation', ' — the neighbourhood without a sales filter.']
      ]
    }
  }
];

const FILTERS = [
  { id: 'all',      fr: 'Tout',         en: 'All' },
  { id: 'platform', fr: 'Plateformes',  en: 'Platforms' },
  { id: 'saas',     fr: 'Applications', en: 'Apps' },
  { id: 'commerce', fr: 'E-commerce',   en: 'E-commerce' },
  { id: 'data',     fr: 'Données',      en: 'Data' }
];

const WORKS = [
  {
    id: 'bullet-train', art: 'delivery', cat: 'platform',
    fr: { kind: 'Plateforme', state: 'Livraison locale', name: 'Bullet Train',
      line: 'App de livraison locale.',
      text: "Les boutiques l'utilisent pour livrer leurs clients, les particuliers pour envoyer et recevoir des colis. Livraison dans l'heure." },
    en: { kind: 'Platform', state: 'Local delivery', name: 'Bullet Train',
      line: 'Local delivery app.',
      text: 'Shops use it to deliver their customers, individuals to send and receive parcels. Delivery within the hour.' }
  },
  {
    id: 'smart-in', art: 'map', cat: 'data',
    fr: { kind: 'Application', state: 'Géomarketing', name: 'Smart-In',
      line: "L'outil d'intelligence territoriale.",
      text: "Une adresse suffit pour analyser le quartier : qui y vit, qui y passe, qui y consomme, et quelle concurrence est déjà présente." },
    en: { kind: 'App', state: 'Geomarketing', name: 'Smart-In',
      line: 'The location intelligence tool.',
      text: 'One address is enough to analyse the neighbourhood: who lives there, who passes by, who spends there, and what competition is already present.' }
  },
  {
    id: 'wasabi', art: 'order', cat: 'saas',
    fr: { kind: 'Application', state: 'Restauration', name: 'Wasabi',
      line: 'La commande directe pour restaurants.',
      text: "Plateforme indépendante vers laquelle le restaurant dirige ses clients réguliers : de meilleurs prix pour eux, et moins de commissions versées aux grandes plateformes." },
    en: { kind: 'App', state: 'Restaurants', name: 'Wasabi',
      line: 'Direct ordering for restaurants.',
      text: 'An independent platform where the restaurant sends its regular customers: better prices for them, and less commission paid to the big platforms.' }
  },
  {
    id: 'city-eats', art: 'homefood', cat: 'platform',
    fr: { kind: 'Plateforme', state: 'Cuisine maison', name: 'City Eats',
      line: 'App de livraison de la cuisine faite maison.',
      text: "Les bons cuisiniers du quartier publient leur plat du jour, les voisins commandent puis récupèrent ou se font livrer." },
    en: { kind: 'Platform', state: 'Home cooking', name: 'City Eats',
      line: 'Home-made food delivery app.',
      text: 'Good home cooks nearby list their dish of the day, neighbours order then pick up or get it delivered.' }
  },
  {
    id: 'tuneyourcar', art: 'car', cat: 'commerce',
    fr: { kind: 'E-commerce', state: 'Automobile', name: 'TuneYourCar',
      line: "Boutique en ligne d'accessoires automobiles.",
      text: "Le client choisit son véhicule, voit les pièces compatibles et passe commande en ligne." },
    en: { kind: 'E-commerce', state: 'Automotive', name: 'TuneYourCar',
      line: 'Online car accessories store.',
      text: 'The customer picks their car, sees the compatible parts and orders online.' }
  },
  {
    id: 'auto-perfs', art: 'auto', cat: 'data',
    fr: { kind: 'Mission', state: 'Automobile', name: 'Auto-Perfs',
      line: 'La veille automatisée du marché automobile pour les concessions.',
      text: "Les annonces des grandes plateformes sont collectées automatiquement. Chaque matin, la concession voit quels modèles partent sous le prix du marché, et lesquels de son stock sont affichés trop cher." },
    en: { kind: 'Project', state: 'Automotive', name: 'Auto-Perfs',
      line: 'Automated car market monitoring for dealerships.',
      text: 'Listings from the major platforms are collected automatically. Every morning the dealer sees which models sell below market price, and which cars in its own stock are listed too high.' }
  }
];

(function validate() {
  const cats = FILTERS.map(function (f) { return f.id; });
  SOLUTIONS.concat(WORKS).forEach(function (w) {
    if (w.cat && cats.indexOf(w.cat) === -1) console.warn('[works] catégorie inconnue :', w.cat, '→', w.id);
    if (window.ART && !window.ART[w.art]) console.warn('[works] illustration manquante :', w.art, '→', w.id);
    ['fr', 'en'].forEach(function (l) {
      if (!w[l]) console.warn('[works] traduction manquante :', l, '→', w.id);
    });
  });
})();

window.SOLUTIONS    = Object.freeze(SOLUTIONS);
window.WORKS        = Object.freeze(WORKS);
window.WORK_FILTERS = Object.freeze(FILTERS);
