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
    id: 'appandsite',
    art: 'essentials',
    action: 'contact',

    fr: {
      kind: 'Offre',
      state: '///',
      name: 'Solutions sur mesure pour votre business',
      line: "Vous imaginez, nous developpons.",
      items: [
        ['Applications et Site web', 'Développée sur mesure, pensée pour le travail réel de votre équipe et la facilité de vos clients.']      ],
      cta: 'Prendre rendez-vous'
    },

    en: {
      kind: 'Offer',
      state: '///',
      name: 'Business tailored solutions',
      line: 'You imagine, we build',
      items: [
        ['App', 'A clear, fast storefront that gets you found and makes people want to call.'],
        ['Internal app', 'Built around how your team actually works, not a generic tool to work around.'],
        ['Automation', 'Quotes, invoices, reminders, data entry: repetitive work running on its own.'],
        ['Analytics and reporting', 'Your numbers in one place, readable at a glance, so you decide on facts.']
      ],
      cta: 'Book a meeting'
    }
  },




{
    id: 'automation',
    art: 'essentials',
    action: 'contact',

    fr: {
      kind: 'Offre',
      state: '///',
      name: 'Automatisation',
      line: "Vous imaginez, nous developpons.",
      items: [
        ['Automatisation', 'Les tâches répétitives tournent sans vous.']      ],
      cta: 'Prendre rendez-vous'
    },

    en: {
      kind: 'Offer',
      state: '///',
      name: 'Business tailored solutions',
      line: 'You imagine, we build',
      items: [
        ['App', 'A clear, fast storefront that gets you found and makes people want to call.'],
        ['Internal app', 'Built around how your team actually works, not a generic tool to work around.'],
        ['Automation', 'Quotes, invoices, reminders, data entry: repetitive work running on its own.'],
        ['Analytics and reporting', 'Your numbers in one place, readable at a glance, so you decide on facts.']
      ],
      cta: 'Book a meeting'
    }
  },









{
    id: 'data',
    art: 'essentials',
    action: 'contact',

    fr: {
      kind: 'Offre',
      state: '///',
      name: 'Data Analysis and Reporting',
      line: "Decisions claires.",
      items: [
        ['Analytics and reporting', 'Your numbers in one place, readable at a glance, so you decide on facts.']
      cta: 'Prendre rendez-vous'
    },

    en: {
      kind: 'Offer',
      state: '///',
      name: 'Data  Analysis and Reporting',
      line: 'You imagine, we build',
      items: [

        ['Analytics and reporting', 'Your numbers in one place, readable at a glance, so you decide on facts.']
      ],
      cta: 'Book a meeting'
    }
  },




   
   
];

/* Garde-fou : signale en console les erreurs de saisie. */
(function validate() {
  const seen = Object.create(null);
  const required = ['kind', 'state', 'name', 'proof', 'line', 'items', 'cta'];

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
