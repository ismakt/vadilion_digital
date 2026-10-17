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
     Par langue : name, proof, line, items, example (court),
                  cta (si action), urlLabel (si url)

   WORKS — champs : id, art, cat
     Par langue : kind, state, name, line, text (essence du
                  projet + exemple, 2 phrases max), tags
   ============================================================ */

const SOLUTIONS = [
  {
    id: 'business-essentials', art: 'essentials', action: 'contact', url: null,
    fr: {
      name: 'Business Essentials',
      proof: 'Identité en ligne complète',
      line: 'Le package de solutions essentielles pour tout business.',
      example: "Un restaurant qui ouvre : site avec réservation, logo, Instagram, fiche Google et cartes NFC sur les tables pour les avis.",
      items: [
        ['Site web et/ou application', ' — vitrine, réservation ou commande, selon votre activité.'],
        ['Logo et cartes de visite', ' — une identité visuelle nette et cohérente.'],
        ['Réseaux sociaux', ' — création et configuration des comptes professionnels.'],
        ['Fiche Google + cartes NFC', ' — visible sur Maps, avis clients en un geste.']
      ],
      cta: 'Demander un devis'
    },
    en: {
      name: 'Business Essentials',
      proof: 'Complete online identity',
      line: 'The essential solutions package for any business.',
      example: 'A restaurant opening: website with booking, logo, Instagram, Google profile and NFC cards on the tables for reviews.',
      items: [
        ['Website and/or app', ' — showcase, booking or ordering, depending on your business.'],
        ['Logo and business cards', ' — a clean, consistent visual identity.'],
        ['Social media', ' — professional accounts created and configured.'],
        ['Google profile + NFC cards', ' — visible on Maps, customer reviews in one tap.']
      ],
      cta: 'Request a quote'
    }
  },
  {
    id: 'sur-mesure', art: 'flow', action: 'contact', url: null,
    fr: {
      name: 'Solutions sur mesure',
      proof: 'Applications & automatisation',
      line: 'Des outils internes conçus autour de vos besoins.',
      example: "Des bons d'intervention papier retapés dans Excel ? Le technicien les remplit sur mobile, la facture part toute seule.",
      items: [
        ['Applications internes', ' — planning, suivi, gestion de stock, outils métier.'],
        ['Automatisation', ' — fini les copier-coller, exports et relances manuelles.'],
        ['Intégrations', ' — vos outils existants connectés entre eux.']
      ],
      cta: 'Parler de votre besoin'
    },
    en: {
      name: 'Custom solutions',
      proof: 'Apps & automation',
      line: 'Internal tools built around your needs.',
      example: 'Paper job sheets retyped into Excel? The technician fills them in on mobile and the invoice goes out by itself.',
      items: [
        ['Internal apps', ' — scheduling, tracking, stock management, business tools.'],
        ['Automation', ' — no more copy-paste, manual exports or reminders.'],
        ['Integrations', ' — your existing tools connected together.']
      ],
      cta: 'Discuss your needs'
    }
  },
  {
    id: 'analyse-donnees', art: 'dash', action: 'contact', url: null,
    fr: {
      name: 'Analyse des données',
      proof: 'Reporting clair et utilisable',
      line: 'Visualiser, suivre et comprendre votre activité.',
      example: "Trois magasins, un tableau de bord chaque lundi : ventes, produits qui décrochent, heures creuses.",
      items: [
        ['Organisation des données', ' — vos fichiers et outils centralisés et fiabilisés.'],
        ['Tableaux de bord', ' — les bons indicateurs, mis à jour automatiquement.'],
        ['Analyse', ' — ce qui marche, ce qui ne marche pas, et pourquoi.']
      ],
      cta: 'Demander un audit'
    },
    en: {
      name: 'Data analysis',
      proof: 'Clear, usable reporting',
      line: 'See, track and understand your business.',
      example: 'Three stores, one dashboard every Monday: sales, products losing ground, quiet hours.',
      items: [
        ['Data organisation', ' — your files and tools centralised and made reliable.'],
        ['Dashboards', ' — the right indicators, updated automatically.'],
        ['Analysis', ' — what works, what does not, and why.']
      ],
      cta: 'Request an audit'
    }
  },
  {
    id: 'etude-emplacement', art: 'locality', action: 'contact', url: 'https://smartinapp.eu',
    fr: {
      name: "Étude d'emplacement",
      proof: 'Vision indépendante du marché',
      line: 'Le bon emplacement, décidé sur des faits.',
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
      proof: 'Independent market view',
      line: 'The right location, decided on facts.',
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
      line: 'La livraison locale à la demande, entre commerces et clients.',
      text: "Le commerçant crée une course en quelques secondes, un coursier disponible la prend en charge et le client suit son colis en direct sur la carte. Prix fixé d'avance, remise validée par un code.",
      tags: ['Application sur mesure', 'Temps réel', 'PostGIS'] },
    en: { kind: 'Platform', state: 'Local delivery', name: 'Bullet Train',
      line: 'On-demand local delivery between shops and their customers.',
      text: 'The shop creates a delivery in seconds, an available courier picks it up and the customer follows the parcel live on the map. Price set upfront, hand-over confirmed by a code.',
      tags: ['Custom app', 'Real time', 'PostGIS'] }
  },
  {
    id: 'dolce', art: 'booking', cat: 'saas',
    fr: { kind: 'Application', state: 'Hôtellerie', name: 'Dolce',
      line: 'La réservation directe pour hôtels, sans commission.',
      text: "Calendrier, disponibilités et paiement sur le canal propre de l'hôtel. Cent nuits à 120 € réservées en direct plutôt que via une plateforme à 15 % : environ 1 800 € gardés.",
      tags: ['Réservation directe', 'Paiement en ligne'] },
    en: { kind: 'App', state: 'Hospitality', name: 'Dolce',
      line: 'Direct booking for hotels, commission-free.',
      text: "Calendar, availability and payment on the hotel's own channel. A hundred nights at €120 booked direct instead of via a 15% platform: around €1,800 kept.",
      tags: ['Direct booking', 'Online payment'] }
  },
  {
    id: 'wasabi', art: 'order', cat: 'saas',
    fr: { kind: 'Application', state: 'Restauration', name: 'Wasabi',
      line: 'Commande et gestion réunies pour les restaurants.',
      text: "Le client scanne le QR code de sa table, commande et paie ; la commande s'affiche aussitôt en cuisine. Menu, commandes et suivi dans un seul outil, sans commission de plateforme.",
      tags: ['SaaS B2B', 'QR code', 'Paiement'] },
    en: { kind: 'App', state: 'Restaurants', name: 'Wasabi',
      line: 'Ordering and management in one place for restaurants.',
      text: 'The guest scans the table QR code, orders and pays; the order shows up in the kitchen instantly. Menu, orders and tracking in one tool, with no platform commission.',
      tags: ['B2B SaaS', 'QR code', 'Payment'] }
  },
  {
    id: 'city-eats', art: 'homefood', cat: 'platform',
    fr: { kind: 'Plateforme', state: 'Cuisine maison', name: 'City Eats',
      line: "Liège Eats : l'Uber de la cuisine faite maison.",
      text: "Les bons cuisiniers du quartier publient leur plat du jour, les voisins commandent puis récupèrent ou se font livrer. À midi, 12 portions de couscous à 9 € en ligne ; à 18h, tout est réservé.",
      tags: ['Marketplace locale'] },
    en: { kind: 'Platform', state: 'Home cooking', name: 'City Eats',
      line: 'Liège Eats: Uber for home-made food.',
      text: 'Good home cooks nearby list their dish of the day, neighbours order then pick up or get it delivered. At noon, 12 portions of couscous at €9 go online; by 6 pm they are all booked.',
      tags: ['Local marketplace'] }
  },
  {
    id: 'shop-247', art: 'shop', cat: 'commerce',
    fr: { kind: 'E-commerce', state: 'Supermarché en ligne', name: '24/7 Shop',
      line: 'Le supermarché en ligne ouvert 24h/24, 7j/7.',
      text: "Les courses du quotidien commandées à toute heure et livrées à domicile. Dimanche, 22h30, plus de lait pour le lendemain : commande en deux minutes depuis le téléphone, livraison à la porte.",
      tags: ['Boutique en ligne', 'Livraison'] },
    en: { kind: 'E-commerce', state: 'Online supermarket', name: '24/7 Shop',
      line: 'The online supermarket open 24/7.',
      text: 'Everyday groceries ordered at any hour and delivered to the door. Sunday, 10:30 pm, out of milk for the morning: ordered in two minutes from the phone, delivered to the door.',
      tags: ['Online store', 'Delivery'] }
  },
  {
    id: 'tuneyourcar', art: 'car', cat: 'commerce',
    fr: { kind: 'E-commerce', state: 'Automobile', name: 'TuneYourCar',
      line: 'Tuning et accessoires auto, toutes marques.',
      text: "Le client choisit son véhicule et ne voit que les pièces compatibles, avec la pose réservable en ligne. Une Golf 7 GTI ? Seuls les échappements, jantes et kits qui lui vont s'affichent.",
      tags: ['Boutique spécialisée', 'Prise de rendez-vous'] },
    en: { kind: 'E-commerce', state: 'Automotive', name: 'TuneYourCar',
      line: 'Car tuning and accessories, all brands.',
      text: 'The customer picks their car and only sees compatible parts, with fitting bookable online. A Golf 7 GTI? Only the exhausts, wheels and kits that fit it show up.',
      tags: ['Specialist store', 'Online booking'] }
  },
  {
    id: 'best-piece', art: 'parts', cat: 'platform',
    fr: { kind: 'Plateforme', state: 'Pièces auto', name: 'Best Piece',
      line: 'Les garages publient leur besoin, les fournisseurs se font concurrence.',
      text: "« Plaquettes avant BMW Série 3, pour demain » : les fournisseurs répondent avec prix et délai (62 € en 24h, 55 € en 48h…) et le garage choisit l'offre qui lui convient en un clic.",
      tags: ['Marketplace B2B'] },
    en: { kind: 'Platform', state: 'Car parts', name: 'Best Piece',
      line: 'Garages post their need, suppliers compete for it.',
      text: '"Front brake pads, BMW 3 Series, needed tomorrow": suppliers reply with price and lead time (€62 in 24 h, €55 in 48 h…) and the garage picks the offer that suits it in one click.',
      tags: ['B2B marketplace'] }
  },
  {
    id: 'auto-perfs', art: 'auto', cat: 'data',
    fr: { kind: 'Mission', state: 'Automobile', name: 'Auto-Perfs',
      line: 'La veille automatisée du marché automobile pour les concessions.',
      text: "Les annonces des grandes plateformes sont collectées automatiquement. Chaque matin, la concession voit quels modèles partent sous le prix du marché, et lesquels de son stock sont affichés trop cher.",
      tags: ['Python', 'Scraping', 'Analyse de marché'] },
    en: { kind: 'Project', state: 'Automotive', name: 'Auto-Perfs',
      line: 'Automated car market monitoring for dealerships.',
      text: 'Listings from the major platforms are collected automatically. Every morning the dealer sees which models sell below market price, and which cars in its own stock are listed too high.',
      tags: ['Python', 'Scraping', 'Market analysis'] }
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
