'use strict';

/* ============================================================
   SOLUTIONS — SOURCE UNIQUE DE VÉRITÉ
   ------------------------------------------------------------
   Pour ajouter une offre : copier un objet, changer l'id.
   Rien d'autre à modifier (ni HTML, ni CSS).

   Champs communs :
     id      : slug unique
     art     : clé d'illustration (voir art.js)
     action  : 'contact' | 'simulator'   → bouton principal de la fiche
     action2 : idem pour le bouton secondaire (optionnel)
     url     : lien externe, prioritaire sur action (optionnel)

   Champs par langue (fr / en) :
     kind    : étiquette dorée au-dessus du titre
     state   : mention grise à côté
     name    : titre
     proof   : ligne affichée en pied de carte
     line    : une phrase, sous le titre
     items   : [[titre, description], ...] — 3 à 4 briques
     note    : encadré de la fiche (HTML léger admis)
     cta     : libellé du bouton principal
     cta2    : libellé du bouton secondaire (optionnel)
   ============================================================ */

const SOLUTIONS = [
  {
    id: 'business-essentials',
    art: 'essentials',
    action: 'contact',

    fr: {
      kind: 'Offre',
      state: '4 briques',
      name: 'Business essentials',
      proof: 'Site, app, automatisation, reporting',
      line: "Les outils de base d'une activité qui tourne.",
      items: [
        ['Site web', 'Une vitrine claire, rapide, qui vous trouve sur Google et donne envie de vous appeler.'],
        ['Application interne', 'Commandes, stocks, clients, planning. Fait pour votre métier, pas un logiciel générique à contourner.'],
        ['Automatisation', 'Les tâches répétitives — devis, factures, relances, encodages — exécutées seules.'],
        ['Analyse et reporting', 'Vos chiffres réunis au même endroit, lisibles en une minute, pour décider sur des faits.']
      ],
      note: "<b>On commence par une seule brique</b> : celle qui vous coûte le plus de temps aujourd'hui.",
      cta: 'Prendre rendez-vous'
    },

    en: {
      kind: 'Offer',
      state: '4 building blocks',
      name: 'Business essentials',
      proof: 'Site, app, automation, reporting',
      line: 'The basic tools of a business that runs.',
      items: [
        ['Website', 'A clear, fast storefront that gets you found on Google and makes people want to call.'],
        ['Internal app', 'Orders, stock, clients, scheduling. Built for your trade, not a generic tool to work around.'],
        ['Automation', 'Repetitive work — quotes, invoices, reminders, data entry — running on its own.'],
        ['Analytics and reporting', 'Your numbers in one place, readable in a minute, so you decide on facts.']
      ],
      note: '<b>We start with one block</b>: whichever one costs you the most time today.',
      cta: 'Book a meeting'
    }
  },

  {
    id: 'location-intelligence',
    art: 'locality',
    action: 'contact',
    action2: 'contact',

    fr: {
      kind: 'Offre',
      state: 'Sur votre adresse',
      name: 'Location intelligence',
      proof: 'Clients, concurrence, tendances',
      line: 'Connaître le quartier où vous travaillez.',
      items: [
        ['Profil des clients autour de vous', 'Qui habite, qui travaille, qui passe : âges, revenus, ménages, flux.'],
        ['Concurrence', "Qui est déjà là, ce qu'il couvre, ce qui manque, où vous ajuster."],
        ['Publicité ciblée', 'Où et à qui dépenser votre budget, rue par rue.'],
        ['Tendances du quartier', 'Ce qui bouge, ce qui arrive, pour anticiper au lieu de subir.']
      ],
      note: "<b>Pertinent si</b> vous ouvrez bientôt, venez d'ouvrir, ou êtes installé depuis longtemps dans un quartier qui a changé. Aussi pour un événement ou une boutique éphémère.<br><br><b>Inutile si</b> votre clientèle n'est pas locale — nous vous le dirons.",
      cta: 'Demander une analyse',
      cta2: 'Voir un exemple'
    },

    en: {
      kind: 'Offer',
      state: 'On your address',
      name: 'Location intelligence',
      proof: 'Customers, competition, trends',
      line: 'Know the area you work in.',
      items: [
        ['Who your customers are', 'Who lives, works and walks past: ages, incomes, households, footfall.'],
        ['Competition', 'Who is already there, what they cover, what is missing, where to adjust.'],
        ['Targeted advertising', 'Where and to whom to spend your budget, street by street.'],
        ['Local trends', 'What is shifting, what is coming, so you anticipate instead of react.']
      ],
      note: '<b>Relevant if</b> you are about to open, just opened, or have been in a neighbourhood that has changed. Also for events and pop-up shops.<br><br><b>Not for you if</b> your customers are not local — we will tell you.',
      cta: 'Request an analysis',
      cta2: 'See an example'
    }
  }
];

/* Garde-fou : signale en console les erreurs de saisie. */
(function validate() {
  const seen = Object.create(null);
  const required = ['kind', 'state', 'name', 'proof', 'line', 'items', 'note', 'cta'];

  SOLUTIONS.forEach(function (s) {
    if (seen[s.id]) console.warn('[solutions] id dupliqué :', s.id);
    seen[s.id] = true;
    if (window.ART && !window.ART[s.art]) console.warn('[solutions] illustration manquante :', s.art, '→', s.id);

    ['fr', 'en'].forEach(function (l) {
      if (!s[l]) return console.warn('[solutions] traduction manquante :', l, '→', s.id);
      required.forEach(function (f) {
        if (!s[l][f]) console.warn('[solutions] champ vide :', l + '.' + f, '→', s.id);
      });
      if (s.action2 && !s[l].cta2) console.warn('[solutions] cta2 manquant :', l, '→', s.id);
    });
  });
})();

window.SOLUTIONS = Object.freeze(SOLUTIONS);
