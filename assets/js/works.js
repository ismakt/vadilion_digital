'use strict';

/* ============================================================
   SOLUTIONS & RÉALISATIONS — SOURCE UNIQUE DE VÉRITÉ
   ------------------------------------------------------------
   SOLUTIONS : ce que Vadilion Digital propose aux clients.
   WORKS     : ce qui a déjà été construit (onglet Réalisations).
   Le français est la source de vérité. L'anglais suit.

   Champs : id, art (clé art.js), cat (WORKS uniquement),
            action ('contact'), url (lien public, optionnel)
   Par langue : kind, state, name, proof, line, text, example,
                items (optionnel), tags (optionnel),
                cta (si action), urlLabel (si url)
   ============================================================ */

const SOLUTIONS = [
  {
    id: 'business-essentials', art: 'essentials', action: 'contact', url: null,
    fr: {
      kind: 'Offre', state: 'Package',
      name: 'Business Essentials',
      proof: 'Identité en ligne complète',
      line: 'Le package de solutions essentielles pour tout business sérieux.',
      text: "Tout ce qu'il faut pour exister proprement en ligne, livré en un seul projet : un seul interlocuteur, une identité cohérente, rien d'oublié.",
      example: "Un restaurant ouvre ses portes : site avec menu et réservation, logo, cartes de visite, Instagram et fiche Google configurés, et une carte NFC sur chaque table pour laisser un avis en un geste.",
      items: [
        ['Site web et/ou application', ' — vitrine, réservation ou commande, selon votre activité.'],
        ['Logo et cartes de visite', ' — une identité visuelle nette et cohérente.'],
        ['Réseaux sociaux', ' — création et configuration des comptes professionnels.'],
        ['Fiche Google + cartes NFC', ' — visible sur Maps, avis clients en un geste.']
      ],
      cta: 'Demander un devis'
    },
    en: {
      kind: 'Offer', state: 'Package',
      name: 'Business Essentials',
      proof: 'Complete online identity',
      line: 'The essential solutions package for any serious business.',
      text: 'Everything you need to look professional online, delivered as one project: one contact, one consistent identity, nothing forgotten.',
      example: 'A restaurant opens: website with menu and booking, logo, business cards, Instagram and Google profile set up, and an NFC card on every table so guests leave a review in one tap.',
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
      kind: 'Offre', state: 'Sur mesure',
      name: 'Solutions sur mesure',
      proof: 'Applications & automatisation',
      line: 'Des outils internes conçus autour de vos besoins.',
      text: "En interne, vous avez des besoins spécifiques. Nous développons des applications et des automatisations qui facilitent, organisent et rendent plus efficaces vos tâches quotidiennes.",
      example: "Une entreprise de rénovation remplit ses bons d'intervention sur papier, puis les retape dans Excel. Avec une app mobile, le technicien les remplit sur place et la facture part automatiquement.",
      items: [
        ['Applications internes', ' — planning, suivi, gestion de stock, outils métier.'],
        ['Automatisation', ' — fini les copier-coller, exports et relances manuelles.'],
        ['Intégrations', ' — vos outils existants connectés entre eux.']
      ],
      cta: 'Parler de votre besoin'
    },
    en: {
      kind: 'Offer', state: 'Custom',
      name: 'Custom solutions',
      proof: 'Apps & automation',
      line: 'Internal tools built around your needs.',
      text: 'Internally, you have specific needs. We build applications and automations that make your daily tasks easier, better organised and more efficient.',
      example: 'A renovation company fills in job sheets on paper, then retypes them into Excel. With a mobile app, the technician fills them in on site and the invoice goes out automatically.',
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
      kind: 'Offre', state: 'Reporting',
      name: 'Analyse des données',
      proof: 'Reporting clair et utilisable',
      line: 'Visualiser, suivre et comprendre votre activité.',
      text: "Nous organisons et analysons le suivi de votre activité, puis mettons à votre disposition des reportings clairs et utilisables pour mieux la visualiser, la suivre et la comprendre.",
      example: "Un commerce avec trois points de vente reçoit chaque lundi un tableau de bord : ventes par magasin, produits qui décrochent, heures creuses. Sans ouvrir un seul fichier Excel.",
      items: [
        ['Organisation des données', ' — vos fichiers et outils centralisés et fiabilisés.'],
        ['Tableaux de bord', ' — les bons indicateurs, mis à jour automatiquement.'],
        ['Analyse', ' — ce qui marche, ce qui ne marche pas, et pourquoi.']
      ],
      cta: 'Demander un audit'
    },
    en: {
      kind: 'Offer', state: 'Reporting',
      name: 'Data analysis',
      proof: 'Clear, usable reporting',
      line: 'See, track and understand your business.',
      text: 'We organise and analyse how your business is tracked, then give you clear, usable reports to better see, follow and understand it.',
      example: 'A retailer with three stores gets a dashboard every Monday: sales per store, products losing ground, quiet hours. Without opening a single Excel file.',
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
      kind: 'Offre', state: 'Étude',
      name: "Étude d'emplacement",
      proof: 'Vision indépendante du marché',
      line: 'Le bon emplacement, décidé sur des faits.',
      text: "Vous ouvrez votre premier point de vente ou élargissez votre réseau, vous voulez mieux connaître votre clientèle et votre localité, vous envisagez de déménager votre activité ou préparez un investissement immobilier.<br>Nous réalisons une étude sur mesure : une vision claire, indépendante et réaliste du marché, sans embellissement commercial, pour vous aider à vous projeter et à décider si c'est le bon emplacement pour vous.",
      example: "Une enseigne hésite entre deux adresses. L'étude compare passage, concurrence et profil des habitants : l'adresse au loyer le plus bas s'avère mal placée pour sa clientèle, et l'économie aurait coûté bien plus en chiffre d'affaires.",
      items: [
        ['Ouverture / expansion', ' — premier point de vente ou nouveau site.'],
        ['Clientèle et localité', " — qui vit, passe et consomme autour de l'adresse."],
        ['Immobilier / déménagement', ' — le quartier vu sans filtre commercial.']
      ],
      cta: 'Demander une étude',
      urlLabel: 'Découvrir Smart-In, notre outil'
    },
    en: {
      kind: 'Offer', state: 'Study',
      name: 'Location study',
      proof: 'Independent market view',
      line: 'The right location, decided on facts.',
      text: 'You are opening your first store or growing your network, want to know your customers and area better, plan to move your business or are preparing a property investment.<br>We deliver a tailored study: a clear, independent and realistic view of the market, with no sales embellishment, to help you plan ahead and decide whether this is the right location for you.',
      example: 'A brand hesitates between two addresses. The study compares footfall, competition and local profile: the cheaper rent turns out to be badly placed for its customers, and the saving would have cost far more in revenue.',
      items: [
        ['Opening / expansion', ' — first store or a new site.'],
        ['Customers and area', ' — who lives, passes by and spends around the address.'],
        ['Property / relocation', ' — the neighbourhood without a sales filter.']
      ],
      cta: 'Request a study',
      urlLabel: 'Discover Smart-In, our tool'
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
    fr: { kind: 'Plateforme', state: 'Livraison locale', name: 'Bullet Train', proof: 'Application sur mesure',
      line: 'La livraison locale à la demande, entre commerces et clients.',
      text: "Le commerçant crée sa course en quelques secondes, un coursier disponible la prend en charge et le client suit l'arrivée en temps réel. Le prix est fixé dès le départ et chaque remise est validée par un code : aucune discussion après coup.",
      example: "À 14h, une boutique de vêtements crée une course. Dix minutes plus tard, le coursier a le colis ; le client le voit arriver sur la carte et confirme la réception avec son code.",
      tags: ['PostgreSQL', 'PostGIS', 'Temps réel'] },
    en: { kind: 'Platform', state: 'Local delivery', name: 'Bullet Train', proof: 'Custom app',
      line: 'On-demand local delivery between shops and their customers.',
      text: 'The shop creates a delivery in seconds, an available courier takes it and the customer follows it live. The price is set upfront and every hand-over is confirmed by a code: nothing to argue about afterwards.',
      example: 'At 2 pm a clothing shop creates a delivery. Ten minutes later the courier has the parcel; the customer watches it arrive on the map and confirms receipt with a code.',
      tags: ['PostgreSQL', 'PostGIS', 'Real time'] }
  },
  {
    id: 'dolce', art: 'booking', cat: 'saas',
    fr: { kind: 'Application', state: 'Hôtellerie', name: 'Dolce', proof: 'Réservation directe',
      line: 'La réservation directe pour hôtels, sans commission.',
      text: "L'hôtel reçoit ses réservations sur son propre canal, avec calendrier, disponibilités et paiement. Ses clients fidèles réservent en direct, et il garde la totalité du prix de la chambre.",
      example: "Cent nuits à 120 € réservées en direct plutôt que via une plateforme à 15 % : environ 1 800 € restent dans la caisse de l'hôtel." },
    en: { kind: 'App', state: 'Hospitality', name: 'Dolce', proof: 'Direct booking',
      line: 'Direct booking for hotels, commission-free.',
      text: 'The hotel takes bookings on its own channel, with calendar, availability and payment. Regular guests book direct, and the hotel keeps the full room price.',
      example: 'A hundred nights at €120 booked direct instead of through a 15% platform: around €1,800 stays with the hotel.' }
  },
  {
    id: 'wasabi', art: 'order', cat: 'saas',
    fr: { kind: 'Application', state: 'Restauration', name: 'Wasabi', proof: 'SaaS B2B',
      line: 'Commande et gestion réunies pour les restaurants.',
      text: "Menu, commandes et suivi tiennent dans un seul outil, pensé pour le rythme réel d'un service. Les clients commandent en direct, sans plateforme qui prélève sa part.",
      example: "Le client scanne le QR code de sa table, commande et paie. La commande s'affiche aussitôt en cuisine, sans passer par le serveur." },
    en: { kind: 'App', state: 'Restaurants', name: 'Wasabi', proof: 'B2B SaaS',
      line: 'Ordering and management in one place for restaurants.',
      text: 'Menu, orders and tracking live in a single tool, built for the real pace of a service. Guests order direct, with no platform taking a cut.',
      example: 'The guest scans the table QR code, orders and pays. The order shows up in the kitchen instantly, without going through the waiter.' }
  },
  {
    id: 'city-eats', art: 'homefood', cat: 'platform',
    fr: { kind: 'Plateforme', state: 'Cuisine maison', name: 'City Eats', proof: 'Marketplace locale',
      line: "Liège Eats : l'Uber de la cuisine faite maison.",
      text: "Les particuliers qui cuisinent bien publient leurs plats du jour. Les habitants du quartier commandent, puis récupèrent leur portion ou se la font livrer.",
      example: "À midi, une cuisinière publie 12 portions de couscous maison à 9 €. À 18h, ses voisins ont tout réservé." },
    en: { kind: 'Platform', state: 'Home cooking', name: 'City Eats', proof: 'Local marketplace',
      line: 'Liège Eats: Uber for home-made food.',
      text: 'Good home cooks list their dish of the day. People nearby order, then pick up their portion or get it delivered.',
      example: 'At noon a home cook lists 12 portions of couscous at €9. By 6 pm the neighbours have booked them all.' }
  },
  {
    id: 'shop-247', art: 'shop', cat: 'commerce',
    fr: { kind: 'E-commerce', state: 'Supermarché en ligne', name: '24/7 Shop', proof: 'Boutique en ligne',
      line: 'Le supermarché en ligne ouvert 24h/24, 7j/7.',
      text: "Les courses du quotidien, commandées à n'importe quelle heure et livrées directement chez le consommateur, sans passer par un magasin.",
      example: "Dimanche, 22h30 : plus de lait ni de couches pour le lendemain matin. Commande en deux minutes depuis le téléphone, livraison à la porte." },
    en: { kind: 'E-commerce', state: 'Online supermarket', name: '24/7 Shop', proof: 'Online store',
      line: 'The online supermarket open 24/7.',
      text: 'Everyday groceries, ordered at any hour and delivered straight to the consumer, with no store visit.',
      example: 'Sunday, 10:30 pm: out of milk and nappies for the morning. Ordered in two minutes from the phone, delivered to the door.' }
  },
  {
    id: 'tuneyourcar', art: 'car', cat: 'commerce',
    fr: { kind: 'E-commerce', state: 'Automobile', name: 'TuneYourCar', proof: 'Boutique spécialisée',
      line: 'Tuning et accessoires auto, toutes marques.',
      text: "La boutique n'affiche que ce qui est compatible avec le véhicule du client, de la pièce jusqu'à la pose.",
      example: "Le client sélectionne sa Golf 7 GTI : seuls les échappements, jantes et kits compatibles apparaissent, avec un rendez-vous de pose à réserver en ligne." },
    en: { kind: 'E-commerce', state: 'Automotive', name: 'TuneYourCar', proof: 'Specialist store',
      line: 'Car tuning and accessories, all brands.',
      text: "The store only shows what fits the customer's car, from the part to the fitting.",
      example: 'The customer picks a Golf 7 GTI: only compatible exhausts, wheels and kits appear, with a fitting appointment bookable online.' }
  },
  {
    id: 'best-piece', art: 'parts', cat: 'platform',
    fr: { kind: 'Plateforme', state: 'Pièces auto', name: 'Best Piece', proof: 'Marketplace B2B',
      line: 'Les garages publient leur besoin, les fournisseurs se font concurrence.',
      text: "Mécaniciens et garages publient la pièce qu'ils cherchent. Les shops répondent avec leur prix et leur délai, et le garage choisit l'offre qui lui convient.",
      example: "Un garage publie « plaquettes avant BMW Série 3 2018, pour demain ». Trois offres arrivent : 62 € en 24h, 55 € en 48h, 70 € en stock. Le garage choisit en un clic." },
    en: { kind: 'Platform', state: 'Car parts', name: 'Best Piece', proof: 'B2B marketplace',
      line: 'Garages post their need, suppliers compete for it.',
      text: 'Mechanics and garages post the part they need. Shops reply with price and lead time, and the garage picks the offer that suits it.',
      example: 'A garage posts "front brake pads, 2018 BMW 3 Series, needed tomorrow". Three offers come in: €62 in 24 h, €55 in 48 h, €70 in stock. One click to choose.' }
  },
  {
    id: 'auto-perfs', art: 'auto', cat: 'data',
    fr: { kind: 'Mission', state: 'Automobile', name: 'Auto-Perfs', proof: 'Automatisation & données',
      line: 'La veille automatisée du marché automobile pour les concessions.',
      text: "Les annonces des grandes plateformes sont collectées automatiquement pour suivre les prix, les tendances et le stock qui ne tourne pas. La concession achète et fixe ses prix sur des chiffres, pas à l'intuition.",
      example: "Chaque matin, la concession voit quels modèles partent sous le prix du marché, et lesquels de son propre stock sont affichés trop cher.",
      tags: ['Python', 'Scraping', 'Analyse de marché'] },
    en: { kind: 'Project', state: 'Automotive', name: 'Auto-Perfs', proof: 'Automation & data',
      line: 'Automated car market monitoring for dealerships.',
      text: 'Listings from the major platforms are collected automatically to track prices, trends and slow-moving stock. The dealer buys and prices on figures, not gut feeling.',
      example: 'Every morning the dealer sees which models sell below market price, and which cars in its own stock are listed too high.',
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
