'use strict';

/* ============================================================
   SOLUTIONS & RÉALISATIONS — SOURCE UNIQUE DE VÉRITÉ
   ------------------------------------------------------------
   SOLUTIONS : ce que Vadilion Digital propose aux clients.
   WORKS     : ce qui a déjà été construit (onglet Réalisations).
   Le français est la source de vérité. L'anglais suit.

   Tout est affiché directement sur la carte (pas de fiche).

   SOLUTIONS — champs : id, art (clé art.js)
     Par langue : name, text

   WORKS — champs : id, art, cat, url (lien public, optionnel)
     Par langue : kind, state, name, line, text (essence du
                  projet, 2 phrases max)
   ============================================================ */

const SOLUTIONS = [
  {
    id: 'applications-sites', art: 'apps',
    fr: { name: 'Applications & sites', text: 'Applications web et mobiles, sites vitrines, espaces clients.' },
    en: { name: 'Apps & websites',      text: 'Web and mobile apps, showcase websites, customer portals.' }
  },
  {
    id: 'outils-internes', art: 'tools',
    fr: { name: 'Outils internes', text: 'Des outils métier adaptés à vos process\u00a0: planning, suivi, gestion.' },
    en: { name: 'Internal tools',  text: 'Business tools built around your processes: scheduling, tracking, management.' }
  },
  {
    id: 'automatisation', art: 'flow',
    fr: { name: 'Automatisation', text: "Gain de temps et de productivité.<br>Moins d'erreurs, plus de résultat." },
    en: { name: 'Automation',     text: 'Save time, boost productivity.<br>Fewer errors, better results.' }
  },
  {
    id: 'tableaux-de-bord', art: 'dash',
    fr: { name: 'Tableaux de bord', text: 'Vos données centralisées, vos indicateurs suivis en temps réel.' },
    en: { name: 'Dashboards',       text: 'Your data in one place, your indicators tracked in real time.' }
  }
];

const FILTERS = [
  { id: 'all',      fr: 'Tout',         en: 'All' },
  { id: 'platform', fr: 'Plateformes',  en: 'Platforms' },
  { id: 'saas',     fr: 'Applications', en: 'Apps' },
  { id: 'data',     fr: 'Données',      en: 'Data' }
];

const WORKS = [
  {
    id: 'bullet-train', art: 'delivery', cat: 'platform', url: 'https://bullet-train-xi.vercel.app/',
    fr: { kind: 'Plateforme', state: 'Livraison locale', name: 'Bullet Train',
      line: 'App de livraison locale.',
      text: "Les boutiques l'utilisent pour livrer leurs clients, les particuliers pour envoyer et recevoir des colis. Livraison dans l'heure." },
    en: { kind: 'Platform', state: 'Local delivery', name: 'Bullet Train',
      line: 'Local delivery app.',
      text: 'Shops use it to deliver their customers, individuals to send and receive parcels. Delivery within the hour.' }
  },
  {
    id: 'smart-in', art: 'map', cat: 'data', url: 'https://smartinapp.eu',
    fr: { kind: 'Application', state: 'Géomarketing', name: 'Smart-In',
      line: "L'outil d'intelligence territoriale.",
      text: "Une adresse suffit pour analyser le quartier\u00a0: qui y vit, qui y passe, qui y consomme, et quelle concurrence est déjà présente." },
    en: { kind: 'App', state: 'Geomarketing', name: 'Smart-In',
      line: 'The location intelligence tool.',
      text: 'One address is enough to analyse the neighbourhood: who lives there, who passes by, who spends there, and what competition is already present.' }
  },
  {
    id: 'prospection-tool', art: 'route', cat: 'saas', url: 'https://demo.vadiliondigital.be/af-prospection',
    fr: { kind: 'Application', state: 'Prospection terrain', name: 'Prospection Tool',
      line: "L'outil des tournées commerciales.",
      text: "Les visites sont classées dans l'ordre de la route, lancées dans Waze et suivies jusqu'à la relance. Chaque commercial retrouve sa progression sur tous ses appareils." },
    en: { kind: 'App', state: 'Field sales', name: 'Prospection Tool',
      line: 'The field sales round planner.',
      text: 'Visits are sorted in road order, launched in Waze and tracked through to follow-up. Each sales rep picks up their progress on any device.' }
  },



];

(function validate() {
  const cats = FILTERS.map(function (f) { return f.id; });
  SOLUTIONS.concat(WORKS).forEach(function (w) {
    if (w.cat && cats.indexOf(w.cat) === -1) console.warn('[works] catégorie inconnue :', w.cat, '→', w.id);
    if (w.art && window.ART && !window.ART[w.art]) console.warn('[works] illustration manquante :', w.art, '→', w.id);
    ['fr', 'en'].forEach(function (l) {
      if (!w[l]) console.warn('[works] traduction manquante :', l, '→', w.id);
    });
  });
})();

window.SOLUTIONS    = Object.freeze(SOLUTIONS);
window.WORKS        = Object.freeze(WORKS);
window.WORK_FILTERS = Object.freeze(FILTERS);
