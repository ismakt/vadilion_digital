'use strict';

/* ============================================================
   SOLUTIONS / RÉALISATIONS — SOURCE UNIQUE DE VÉRITÉ
   ------------------------------------------------------------
   Le français est la source de vérité. L'anglais suit.
   Pour ajouter une entrée : copier un objet, changer l'id,
   choisir une illustration existante dans art.js.

   Champs communs :
     id      : slug unique
     art     : clé d'illustration (voir art.js)
     cat     : clé de filtre (voir FILTERS ci-dessous)
     url     : lien public vérifiable, ou null s'il n'y en a pas
     action  : 'contact' → bouton principal de la fiche (optionnel)

   Champs par langue (fr / en) :
     kind     : 'Produit' | 'Mission' | 'Offre'
     state    : 'En ligne' | 'En développement' | 'Livré' | 'Sur mesure'
     name     : titre
     proof    : brique de l'offre que l'entrée démontre
     line     : une phrase, sur la carte
     text     : paragraphe de la fiche
     items    : [[titre, description], ...] — optionnel (offres)
     tags     : technologies ou méthodes — optionnel
     cta      : libellé du bouton principal (requis si action)
     urlLabel : libellé du lien (requis si url)

   Règle : ne rien lister ici qui ne soit pas vérifiable.
   L'ordre du tableau = l'ordre d'affichage.
   ============================================================ */

const FILTERS = [
  { id: 'all',   fr: 'Tout',           en: 'All' },
  { id: 'app',   fr: 'Applications',   en: 'Apps' },
  { id: 'data',  fr: 'Données',        en: 'Data' },
  { id: 'auto',  fr: 'Automatisation', en: 'Automation' },
  { id: 'local', fr: 'Territoire',     en: 'Location' },
  { id: 'offre', fr: 'Offre',          en: 'Offer' }
];

const WORKS = [
  {
    id: 'bullet-train',
    art: 'delivery',
    cat: 'app',
    url: null,

    fr: {
      kind: 'Produit', state: 'En développement',
      name: 'Bullet Train',
      proof: 'Application sur mesure',
      line: 'Service de livraison rapide entre les boutiques et les clients particuliers.',
      text: "Plateforme de livraison locale à la demande qui relie les commerces à leurs clients. La boutique crée la course, le coursier disponible la prend en charge, le client suit la livraison en temps réel. Le prix est figé dès la création de la course et chaque étape est confirmée par un code : personne ne discute le tarif ni la remise du colis après coup.",
      tags: ['PostgreSQL', 'PostGIS', 'Temps réel', 'Géolocalisation', 'Traçabilité']
    },
    en: {
      kind: 'Product', state: 'In development',
      name: 'Bullet Train',
      proof: 'Custom application',
      line: 'Fast delivery between local shops and their customers.',
      text: 'An on-demand local delivery platform connecting shops to their customers. The shop creates the job, an available courier picks it up, the customer follows the delivery in real time. The price is locked in when the job is created and every handover is confirmed by a code, so neither the fare nor the drop-off can be disputed afterwards.',
      tags: ['PostgreSQL', 'PostGIS', 'Realtime', 'Geolocation', 'Traceability']
    }
  },

  {
    id: 'dolce',
    art: 'booking',
    cat: 'app',
    url: null,

    fr: {
      kind: 'Produit', state: 'En développement',
      name: 'Dolce',
      proof: 'Application sur mesure',
      line: 'App de réservation directe pour les hôtels, sans commission de plateforme.',
      text: "Permettre aux hôtels de faire réserver leurs clients réguliers en direct, plutôt que de céder une commission aux grandes plateformes sur chaque nuitée. Réservation en quelques étapes, historique du client conservé, et un canal de vente qui appartient à l'établissement.",
      tags: ['Application mobile', 'Réservation en ligne', 'Multi-établissements']
    },
    en: {
      kind: 'Product', state: 'In development',
      name: 'Dolce',
      proof: 'Custom application',
      line: 'Direct booking for hotels, without platform commission.',
      text: 'Letting hotels take bookings from their regular guests directly, instead of handing a commission to the large platforms on every night booked. Booking in a few steps, guest history kept in-house, and a sales channel the property actually owns.',
      tags: ['Mobile app', 'Online booking', 'Multi-property']
    }
  },

  {
    id: 'smart-in',
    art: 'map',
    cat: 'local',
    url: 'https://smartinapp.eu',

    fr: {
      kind: 'Produit', state: 'En ligne',
      name: 'Smart-In',
      proof: 'Location intelligence',
      line: "Plateforme d'intelligence territoriale pour évaluer un emplacement avant d'investir.",
      text: "Smart-In donne aux entrepreneurs une vision réelle du marché et de l'emplacement avant d'engager du temps et du capital.<br>Plus de 130 indicateurs par quartier, cartographie interactive et rapports générés automatiquement : une lecture du terrain fondée sur des données réelles plutôt que sur des impressions.",
      tags: ['Python', 'PostGIS', 'QGIS', 'API', 'Data visualisation'],
      urlLabel: 'Voir le site'
    },
    en: {
      kind: 'Product', state: 'Live',
      name: 'Smart-In',
      proof: 'Location intelligence',
      line: 'Neighbourhood intelligence to assess a location before investing.',
      text: 'Smart-In gives founders a real read of the market and the location before committing time and capital.<br>Over 130 indicators per neighbourhood, interactive mapping and automatically generated reports: a read of the ground based on real data rather than impressions.',
      tags: ['Python', 'PostGIS', 'QGIS', 'API', 'Data visualisation'],
      urlLabel: 'Visit the site'
    }
  },

  {
    id: 'wasabi',
    art: 'order',
    cat: 'app',
    url: null,

    fr: {
      kind: 'Produit', state: 'En développement',
      name: 'Wasabi',
      proof: 'Application sur mesure',
      line: 'App de commande directe pour restaurants, sans commission de plateforme.',
      text: "Ramener les clients fidèles vers la commande directe, sans payer de commission aux grandes plateformes. Architecture multi-restaurants, mise à jour en temps réel, données cloisonnées par établissement.",
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Temps réel', 'Multi-tenant']
    },
    en: {
      kind: 'Product', state: 'In development',
      name: 'Wasabi',
      proof: 'Custom application',
      line: 'Direct ordering for restaurants, without platform commission.',
      text: 'Bringing loyal customers back to direct ordering, without paying commission to the large delivery platforms. Multi-restaurant architecture, realtime updates, data isolated per venue.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Realtime', 'Multi-tenant']
    }
  },

  {
    id: 'business-essentials',
    art: 'essentials',
    cat: 'offre',
    url: null,
    action: 'contact',

    fr: {
      kind: 'Offre', state: 'Sur mesure',
      name: 'Business Essentials',
      proof: 'Offre complète',
      line: "Les outils de base dont une entreprise a besoin, développés sur mesure.",
      text: "Quatre briques qui couvrent l'essentiel du digital d'une entreprise. On installe ce qui vous manque, pas ce qui ne vous servira pas.",
      items: [
        ['Site web', "Une vitrine claire et rapide, qui vous rend visible et donne envie de vous appeler."],
        ['Application interne', "Construite autour de la façon dont votre équipe travaille vraiment, pas un outil générique à contourner."],
        ['Automatisation', "Devis, factures, relances, saisie de données : le travail répétitif tourne sans vous."],
        ['Analyse et reporting', "Vos chiffres au même endroit, lisibles d'un coup d'œil, pour décider sur des faits."]
      ],
      cta: 'Prendre rendez-vous'
    },
    en: {
      kind: 'Offer', state: 'Tailored',
      name: 'Business Essentials',
      proof: 'Complete offer',
      line: 'The core tools a business needs, built to measure.',
      text: 'Four building blocks covering the essentials of a company\'s digital setup. We install what you are missing, not what will not serve you.',
      items: [
        ['Website', 'A clear, fast storefront that gets you found and makes people want to call.'],
        ['Internal app', 'Built around how your team actually works, not a generic tool to work around.'],
        ['Automation', 'Quotes, invoices, reminders, data entry: repetitive work running on its own.'],
        ['Analytics and reporting', 'Your numbers in one place, readable at a glance, so you decide on facts.']
      ],
      cta: 'Book a meeting'
    }
  },

  {
    id: 'auto-perfs',
    art: 'auto',
    cat: 'auto',
    url: null,

    fr: {
      kind: 'Mission', state: 'Livré',
      name: 'Auto-Perfs',
      proof: 'Automatisation',
      line: 'Veille automatisée du marché automobile pour les concessions.',
      text: "Collecte automatique des annonces automobiles sur les grandes plateformes pour suivre les prix, les tendances et le stock qui ne tourne pas. Acheter en s'appuyant sur les chiffres du jour plutôt que sur l'intuition.",
      tags: ['Python', 'Scraping automatisé', 'OSINT', 'Analyse de marché']
    },
    en: {
      kind: 'Project', state: 'Delivered',
      name: 'Auto-Perfs',
      proof: 'Automation',
      line: 'Automated market monitoring for car dealerships.',
      text: 'Automatic collection of automobile listings across the major platforms to track prices, trends and stock that is not moving. Buying decisions made on current figures rather than instinct.',
      tags: ['Python', 'Automated scraping', 'OSINT', 'Market analysis']
    }
  },

  {
    id: 'dashboard-ventes',
    art: 'dash',
    cat: 'data',
    url: null,

    fr: {
      kind: 'Mission', state: 'Livré',
      name: "Dashboard d'analyse de ventes",
      proof: 'Analyse et reporting',
      line: "Analyse des données de vente pour une entreprise internationale.",
      text: "Meilleurs clients, produits les plus vendus, tendances de performance, mis à jour automatiquement. Un seul écran remplace la compilation manuelle des fichiers pays par pays.",
      tags: ['Excel', 'Conception de tableaux de bord']
    },
    en: {
      kind: 'Project', state: 'Delivered',
      name: 'Sales analytics dashboard',
      proof: 'Analytics and reporting',
      line: 'Sales data analysis for an international company.',
      text: 'Top clients, best-selling products and performance trends, updated automatically. One screen replaces the manual merging of country files.',
      tags: ['Excel', 'Dashboard design']
    }
  }
];

/* Garde-fou. */
(function validate() {
  const seen = Object.create(null);
  const required = ['kind', 'state', 'name', 'proof', 'line', 'text'];
  const cats = FILTERS.map(function (f) { return f.id; });

  WORKS.forEach(function (w) {
    if (seen[w.id]) console.warn('[works] id dupliqué :', w.id);
    seen[w.id] = true;
    if (cats.indexOf(w.cat) === -1) console.warn('[works] catégorie inconnue :', w.cat, '→', w.id);
    if (window.ART && !window.ART[w.art]) console.warn('[works] illustration manquante :', w.art, '→', w.id);

    ['fr', 'en'].forEach(function (l) {
      if (!w[l]) return console.warn('[works] traduction manquante :', l, '→', w.id);
      required.forEach(function (f) {
        if (!w[l][f]) console.warn('[works] champ vide :', l + '.' + f, '→', w.id);
      });
      if (w.url    && !w[l].urlLabel) console.warn('[works] urlLabel manquant :', l, '→', w.id);
      if (w.action && !w[l].cta)      console.warn('[works] cta manquant :', l, '→', w.id);
    });
  });
})();

window.WORKS = Object.freeze(WORKS);
window.WORK_FILTERS = Object.freeze(FILTERS);
