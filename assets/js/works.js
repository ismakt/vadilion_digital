'use strict';

/* ============================================================
   SOLUTIONS — SOURCE UNIQUE DE VÉRITÉ
   ------------------------------------------------------------
   Ce que Vadilion Digital propose aux clients.
   Le français est la source de vérité. L'anglais suit.

   Champs : id, art (clé art.js)
     Par langue : name, text
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

(function validate() {
  SOLUTIONS.forEach(function (w) {
    if (w.art && window.ART && !window.ART[w.art]) console.warn('[works] illustration manquante :', w.art, '→', w.id);
    ['fr', 'en'].forEach(function (l) {
      if (!w[l]) console.warn('[works] traduction manquante :', l, '→', w.id);
    });
  });
})();

window.SOLUTIONS = Object.freeze(SOLUTIONS);
