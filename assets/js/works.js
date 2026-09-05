'use strict';

/* ============================================================
   RÉALISATIONS — SOURCE UNIQUE DE VÉRITÉ
   ------------------------------------------------------------
   Même modèle que solutions.js. Pour ajouter une réalisation :
   copier un objet, changer l'id, choisir une illustration
   existante dans art.js (ou en ajouter une).

   Champs communs :
     id   : slug unique
     art  : clé d'illustration (voir art.js)
     cat  : clé de filtre (voir FILTERS ci-dessous)
     url  : lien public vérifiable, ou null s'il n'y en a pas

   Champs par langue (fr / en) :
     kind     : 'Produit' | 'Mission'
     state    : 'En ligne' | 'En développement' | 'Livré'
     name     : titre
     proof    : brique de l'offre que la réalisation démontre
     line     : une phrase, sur la carte
     text     : paragraphe de la fiche
     tags     : technologies ou méthodes
     urlLabel : libellé du lien (requis si url)

   Règle : ne rien lister ici qui ne soit pas vérifiable.
   Une réalisation sans lien doit rester descriptible en une phrase.
   ============================================================ */

const FILTERS = [
  { id: 'all',  fr: 'Tout',        en: 'All' },
  { id: 'local', fr: 'Local',      en: 'Local' },
  { id: 'app',  fr: 'Applications', en: 'Apps' },
  { id: 'data', fr: 'Données',     en: 'Data' },
  { id: 'auto', fr: 'Automobile',  en: 'Automotive' }
];

const WORKS = [
  {
    id: 'smart-in',
    art: 'map',
    cat: 'local',
    url: 'https://smartinapp.eu',

    fr: {
      kind: 'Produit', state: 'En ligne',
      name: 'Smart-In',
      proof: 'Location intelligence',
      line: 'Plateforme - Intelligence territoriale.',
      text: "Lecture du terrain indépendante et transparente pour une meilleure prise de décision basée sur les données réelles et non biaisées.",
      tags: ['Python', 'PostGIS', 'QGIS', 'API', 'Data visualisation']
    },
    en: {
      kind: 'Product', state: 'Live',
      name: 'Smart-In',
      proof: 'Location intelligence',
      line: 'Neighbourhood intelligence for the Brussels-Capital Region.',
      text: 'Over 130 indicators per neighbourhood, interactive mapping and automatically generated reports. A read of the ground that depends on nobody\u2019s opinion. European expansion planned.',
      tags: ['Python', 'PostGIS', 'QGIS', 'API', 'Data visualisation'],
      urlLabel: 'Open Smart-In'
    }
  },

  {
    id: 'wasabi',
    art: 'order',
    cat: 'app'

    fr: {
      kind: 'Produit', state: 'En développement',
      name: 'Wasabi',
      proof: 'Application interne',
      line: 'Commande en direct pour restaurants, sans commission de plateforme.',
      text: 'Ramener les clients fidèles vers la commande directe au lieu de payer des commissions aux grandes plateformes de livraison. Architecture multi-restaurants, temps réel, données cloisonnées par établissement.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Temps réel', 'Multi-tenant']
    },
    en: {
      kind: 'Product', state: 'In development',
      name: 'Wasabi',
      proof: 'Internal app',
      line: 'Direct ordering for restaurants, without platform commission.',
      text: 'Bringing loyal customers back to direct ordering instead of paying commission to the large delivery platforms. Multi-restaurant architecture, realtime, data isolated per venue.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Realtime', 'Multi-tenant']
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
      text: "Collecte automatique des annonces sur les grandes plateformes pour suivre les prix, les tendances et le stock qui ne tourne pas. Décider d'un achat sur des chiffres du jour plutôt qu'à l'intuition.",
      tags: ['Python', 'Scraping automatisé', 'OSINT', 'Analyse de marché']
    },
    en: {
      kind: 'Project', state: 'Delivered',
      name: 'Auto-Perfs',
      proof: 'Automation',
      line: 'Automated market monitoring for car dealerships.',
      text: 'Automatic collection of listings across the major platforms to track prices, trends and stock that is not moving. Buying decisions made on current figures rather than instinct.',
      tags: ['Python', 'Automated scraping', 'OSINT', 'Market analysis']
    }
  },

  {
    id: 'zus-coffee',
    art: 'dash',
    cat: 'data'

    fr: {
      kind: 'Mission', state: 'Livré',
      name: 'Zus Coffee — analyse des ventes',
      proof: 'Analyse et reporting',
      line: 'Tableau de bord consolidant les ventes de plusieurs pays.',
      text: 'Meilleurs clients, produits les plus vendus, tendances de performance, mis à jour automatiquement. Un seul écran remplace la compilation manuelle de fichiers par pays.',
      tags: ['Excel', 'Conception de tableaux de bord']
    },
    en: {
      kind: 'Project', state: 'Delivered',
      name: 'Zus Coffee — sales analysis',
      proof: 'Analytics and reporting',
      line: 'Dashboard consolidating sales across several countries.',
      text: 'Top clients, best-selling products and performance trends, updated automatically. One screen replaces the manual merging of country files.',
      tags: ['Excel', 'Dashboard design']
    }
  }
];



/* Garde-fou. */
(function validate() {
  const seen = Object.create(null);
  const required = ['kind', 'state', 'name', 'proof', 'line', 'text', 'tags'];
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
      if (w.url && !w[l].urlLabel) console.warn('[works] urlLabel manquant :', l, '→', w.id);
    });
  });
})();

window.WORKS = Object.freeze(WORKS);
window.WORK_FILTERS = Object.freeze(FILTERS);
window.CREDENTIALS = Object.freeze(CREDENTIALS);
