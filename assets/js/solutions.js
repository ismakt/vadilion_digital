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
        ['Site web', 'Votre vitrine en ligne : professionnelle, rapide et à votre image.'],
        ['Application', 'Développée sur mesure, pensée pour le travail réel de votre équipe.'],
        ['Automatisation', 'Les tâches répétitives tournent sans vous.'],
        ['Analyse et reporting', "Les chiffres de votre activité réunis au même endroit et lisibles en un coup d'œil, pour décider sur des faits."]
      ],
      cta: 'Prendre rendez-vous'
    },

    en: {
      kind: 'Offer',
      state: '4 building blocks',
      name: 'Business essentials',
      proof: 'Site, app, automation, reporting',
      line: 'The essentials of a business that runs properly.',
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
    id: 'location-intelligence',
    art: 'locality',
    action: 'contact',

    fr: {
      kind: 'Offre',
      state: 'Sur adresse ou zone de votre choix',
      name: 'Location intelligence',
      proof: 'Clients, concurrence, tendances',
      line: 'Connaître le présent et le futur du quartier où vous travaillez.',
      items: [
        ['Clients', 'Qui habite, travaille et passe devant chez vous : âges, revenus, ménages, flux.'],
        ['Concurrence', "Qui est déjà là, ce qu'il couvre, ce qui manque, et où vous positionner."],
        ['Publicité ciblée', 'Où et à qui dépenser votre budget, rue par rue.'],
        ['Tendances', 'Projets immobiliers et urbains à venir, pour anticiper plutôt que subir.']
      ],
      cta: 'Demander une analyse'
    },

    en: {
      kind: 'Offer',
      state: 'On your address',
      name: 'Location intelligence',
      proof: 'Customers, competition, trends',
      line: 'Know the area you work in.',
      items: [
        ['Customers', 'Who lives, works and walks past: ages, incomes, households, footfall.'],
        ['Competition', 'Who is already there, what they cover, what is missing, where to position yourself.'],
        ['Targeted advertising', 'Where and to whom to spend your budget, street by street.'],
        ['Local trends', 'Property and urban projects ahead, so you anticipate instead of react.']
      ],
      cta: 'Request an analysis'
    }
  }
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
