'use strict';

/* ============================================================
   SOLUTIONS & RÉALISATIONS — SOURCE UNIQUE DE VÉRITÉ
   ------------------------------------------------------------
   SOLUTIONS : ce que Vadilion Digital propose aux clients.
   WORKS     : ce qui a déjà été construit (onglet Réalisations).
   Le français est la source de vérité. L'anglais suit.

   Tout est affiché directement sur la carte (pas de fiche).

   SOLUTIONS — champs : id, art (clé art.js), action ('contact'),
               url (lien public, optionnel)
     Par langue : name, line, items ([titre, ' — détail'] ou [titre]),
                  example (court, optionnel),
                  cta (si action), urlLabel (si url)

   WORKS — champs : id, art, cat
     Par langue : kind, state, name, line, text (essence du
                  projet, 2 phrases max)
   ============================================================ */

const SOLUTIONS = [
  {
    id: 'business-essentials', art: 'essentials', action: 'contact', url: null,
    fr: {
      name: 'Business Essentials',
      line: 'Le package de solutions essentielles pour tout business.',
      items: [
        ['Site web et/ou application'],
        ['Logo et cartes de visite'],
        ['Réseaux sociaux'],
        ['Fiche Google + cartes NFC']
      ],
      cta: 'Demander un devis'
    },
    en: {
      name: 'Business Essentials',
      line: 'The essential solutions package for any business.',
      items: [
        ['Website and/or app'],
        ['Logo and business cards'],
        ['Social media'],
        ['Google profile + NFC cards']
      ],
      cta: 'Request a quote'
    }
  },
  {
    id: 'sur-mesure', art: 'flow', action: 'contact', url: null,
    fr: {
      name: 'Solutions sur mesure',
      line: 'Des outils internes conçus autour de vos besoins.',
      items: [
        ['Applications internes', ' — planning, suivi, gestion de stock, outils métier.'],
        ['Automatisation', " — plus d'efficacité, sans tâches répétitives."],
        ['Sur mesure', ' — des solutions conçues pour répondre à vos besoins spécifiques.']
      ],
      cta: 'Parler de votre besoin'
    },
    en: {
      name: 'Custom solutions',
      line: 'Internal tools built around your needs.',
      items: [
        ['Internal apps', ' — scheduling, tracking, stock management, business tools.'],
        ['Automation', ' — more efficiency, no repetitive tasks.'],
        ['Tailor-made', ' — solutions designed around your specific needs.']
      ],
      cta: 'Discuss your needs'
    }
  },
  {
    id: 'analyse-donnees', art: 'dash', action: 'contact', url: null,
    fr: {
      name: 'Analyse des données',
      line: 'Visualiser, suivre et comprendre votre activité.',
      items: [
        ['Organisation des données', ' — vos fichiers et outils centralisés et fiabilisés.'],
        ['Tableaux de bord', ' — suivi de vos indicateurs en temps réel.'],
        ['Analyse', ' — ce qui marche, ce qui ne marche pas, et pourquoi.']
      ],
      cta: 'Demander un audit'
    },
    en: {
      name: 'Data analysis',
      line: 'See, track and understand your business.',
      items: [
        ['Data organisation', ' — your files and tools centralised and made reliable.'],
        ['Dashboards', ' — your indicators tracked in real time.'],
        ['Analysis', ' — what works, what does not, and why.']
      ],
      cta: 'Request an audit'
    }
  },
  {
    id: 'etude-emplacement', art: 'locality', action: 'contact', url: 'https://smartinapp.eu',
    fr: {
      name: "Étude d'emplacement",
      line: 'Intelligence territoriale et géomarketing.',
      example: "Deux adresses en balance : l'étude montre que le loyer le plus bas coûterait bien plus en chiffre d'affaires.",
      items: [
        ['Ouverture / expansion', ' — premier point de vente ou nouveau site.'],
        ['Clientèle et localité', " — qui vit, passe et consomme autour de l'adresse."],
        ['Immobilier / déménagement', ' — le quartier vu sans filtre commercial.']
      ],
      cta: 'Demander une étude',
      urlLabel: 'Smart-In, notre outil'
    },
    en: {
      name: 'Location study',
      line: 'Location intelligence and geomarketing.',
      example: 'Two addresses on the table: the study shows the cheaper rent would cost far more in revenue.',
      items: [
        ['Opening / expansion', ' — first store or a new site.'],
        ['Customers and area', ' — who lives, passes by and spends around the address.'],
        ['Property / relocation', ' — the neighbourhood without a sales filter.']
      ],
      cta: 'Request a study',
      urlLabel: 'Smart-In, our tool'
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
      text: "Commandez une course à tout moment pour livrer un colis ou un document. Les boutiques l'utilisent pour livrer leurs clients, et chacun peut commander auprès des boutiques partenaires pour être livré dans l'heure, 24h/24 et 7j/7." },
    en: { kind: 'Platform', state: 'Local delivery', name: 'Bullet Train',
      line: 'Local delivery app.',
      text: 'Book a courier at any time to deliver a parcel or a document. Shops use it to deliver their customers, and anyone can order from partner shops and get it within the hour, 24/7.' }
  },
  {
    id: 'dolce', art: 'booking', cat: 'saas',
    fr: { kind: 'Application', state: 'Hôtellerie', name: 'Dolce',
      line: 'La réservation directe pour hôtels.',
      text: "Plateforme indépendante vers laquelle l'hôtel dirige ses clients réguliers : de meilleurs prix pour eux, et moins de commissions versées aux grandes plateformes." },
    en: { kind: 'App', state: 'Hospitality', name: 'Dolce',
      line: 'Direct booking for hotels.',
      text: 'An independent platform where the hotel sends its regular guests: better prices for them, and less commission paid to the big platforms.' }
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
      line: "Liège Eats : l'Uber de la cuisine faite maison.",
      text: "Les bons cuisiniers du quartier publient leur plat du jour, les voisins commandent puis récupèrent ou se font livrer." },
    en: { kind: 'Platform', state: 'Home cooking', name: 'City Eats',
      line: 'Liège Eats: Uber for home-made food.',
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
