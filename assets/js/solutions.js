'use strict';

/* ============================================================
   SOLUTIONS — SOURCE UNIQUE DE VÉRITÉ
   ------------------------------------------------------------
   Pour ajouter une solution : copier un objet, changer l'id.
   Rien d'autre à modifier (ni HTML, ni CSS).

   Champs d'une solution :
     id       : slug unique, sans espace (sert aussi d'ancre URL)
     group    : 'products' | 'services'
     icon     : clé d'icône (voir ICONS ci-dessous)
     url      : lien externe          (optionnel, '' = pas de lien)
     action   : 'contact'   → ouvre la modale contact   (optionnel)
                'simulator' → ouvre le simulateur Wasabi (optionnel)
     badge    : { fr, en } petit label d'état, ex. « Bientôt »
                (optionnel — ne s'affiche que si main.js le gère)
     fr / en  : { name, tagline, body, tags[], cta }

   Le body accepte du HTML léger (<br>, <strong>, <em>).
   ============================================================ */

/* Ordre d'affichage des groupes = ordre des clés ci-dessous. */
const SOLUTION_GROUPS = {
  services: { fr: 'Services', en: 'Services' },
  products: { fr: 'Réalisations', en: 'Portfolio' }
  
};

const ICONS = {
  map:   '<path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7"/>',
  order: '<path d="M3 15.5c0-1.4 1.1-2.5 2.5-2.5h13c1.4 0 2.5 1.1 2.5 2.5S19.9 18 18.5 18h-13C4.1 18 3 16.9 3 15.5z"/><path d="M4.5 13c.6-2.6 3.6-4.5 7.5-4.5s6.9 1.9 7.5 4.5"/><path d="M9 8.9V13M15 8.9V13"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
  code:  '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>'
};

const SOLUTIONS = [
   {
    id: 'sur-mesure',
    group: 'services',
    icon: 'code',
    action: 'contact',
    fr: {
      name: 'Développement dédié',
      tagline: 'Sur mesure',
      body: 'Décrivez votre problème, nous concevons la solution sur mesure.<br><br>Pour nos clients B2B, nous développons des sites, applications et outils adaptés à leurs besoins spécifiques, conçus pour automatiser, simplifier et structurer leurs opérations internes afin de gagner en efficacité au quotidien.',
      tags: ['Site web', 'Application', 'Automatisation', 'Efficacité'],
      cta: 'En discuter'
    },
    en: {
      name: 'Bespoke',
      tagline: 'Dedicated development',
      body: 'Describe the problem, we design the solution.<br><br>Online presence (website, app, visual identity), automation of repetitive tasks, data analysis and reporting.',
      tags: ['Website', 'App', 'Automation', 'Data analysis'],
      cta: 'Describe your need'
    },
      },
       
   {
    id: 'wasabi',
    group: 'products',
    icon: 'order',
    action: 'simulator',
     action2: 'contact',
    fr: {
      name: 'Wasabi',
      tagline: 'Controlez votre marge',
      body: "Les plateformes tierces sont utiles pour attirer de nouveaux clients. Mais lorsqu'ils deviennent réguliers, continuer à payer des commissions sur chaque commande et chaque réservation réduit inutilement votre marge.<br>Wasabi vous aide à les convertir vers vos propres canaux — site web ou application — avec une expérience d'utilisation au top niveau du marché et des rappels réguliers pour favoriser la commande directe.<br>À la clé : plusieurs centaines, voire milliers d'euros économisés chaque mois.",
      tags: ['Marge', 'Clients directs', 'Indépendance'],
      cta: 'Estimer votre manque à gagner',
             cta2: 'En savoir plus'
    },
    en: {
  name: 'Wasabi',
  tagline: 'Take back control of your margin',
  body: "Third-party platforms are useful for attracting new customers. But once those customers become regulars, continuing to pay commissions on every order and reservation unnecessarily cuts into your margin.<br>Wasabi helps you convert them to your own channels — website or app — with an experience that matches the best platforms, combined with regular reminders to encourage direct orders and bookings.<br>The result: savings of hundreds, or even thousands, of euros every month.",
  tags: ['Margin', 'Direct Customers', 'Independence'],
  cta: 'Estimate your lost margin',
             cta2: 'Learn more'
    }
  },

  {
    id: 'smart-in',
    group: 'products',
    icon: 'map',
    url: 'https://smartinapp.eu',
    fr: {
      name: 'Smart-In',
      tagline: 'Intelligence territoriale',
      body: "Une lecture indépendante du marché en 5 minutes.<br><br>Prix, tendances, projets à venir et leur impact : tout ce qui décide de la valeur d'un quartier, dans une seule interface.",
      tags: ['Carte interactive', 'Agent IA intégré', 'Immobilier'],
      cta: 'Explorer'
    },
    en: {
      name: 'Smart-In',
      tagline: 'Location intelligence',
      body: "An independent read of the market in 5 minutes.<br><br>Prices, trends, upcoming projects and their impact: everything that drives a neighbourhood's value, in a single interface.",
      tags: ['Interactive map', 'Integrated AI agent', 'Real estate'],
      cta: 'Explore'
    }
  },
  
];

/* ============================================================
   HELPERS — utilisables depuis main.js, sans rien casser.
   ============================================================ */

/** Renvoie une solution par son id, ou null. */
function getSolution(id) {
  return SOLUTIONS.find(function (s) { return s.id === id; }) || null;
}

/** Renvoie [{ key, label, items[] }] dans l'ordre de SOLUTION_GROUPS. */
function getSolutionsByGroup(lang) {
  const l = lang === 'en' ? 'en' : 'fr';
  return Object.keys(SOLUTION_GROUPS).map(function (key) {
    return {
      key: key,
      label: SOLUTION_GROUPS[key][l],
      items: SOLUTIONS.filter(function (s) { return s.group === key; })
    };
  }).filter(function (g) { return g.items.length > 0; });
}

/** Renvoie le SVG interne d'une icône, ou celui de 'code' en secours. */
function getSolutionIcon(key) {
  return ICONS[key] || ICONS.code;
}

/* Garde-fou : signale en console les erreurs de saisie (id dupliqué,
   groupe inconnu, icône manquante, traduction incomplète). */
(function validate() {
  const seen = Object.create(null);
  const required = ['name', 'tagline', 'body', 'tags', 'cta'];

  SOLUTIONS.forEach(function (s) {
    if (seen[s.id]) console.warn('[solutions] id dupliqué :', s.id);
    seen[s.id] = true;

    if (!SOLUTION_GROUPS[s.group]) console.warn('[solutions] groupe inconnu :', s.group, '→', s.id);
    if (!ICONS[s.icon]) console.warn('[solutions] icône manquante :', s.icon, '→', s.id);

    ['fr', 'en'].forEach(function (l) {
      if (!s[l]) return console.warn('[solutions] traduction manquante :', l, '→', s.id);
      required.forEach(function (f) {
        if (!s[l][f]) console.warn('[solutions] champ vide :', l + '.' + f, '→', s.id);
      });
    });
  });
})();

/* Exposition globale (lecture seule). */
window.SOLUTIONS = Object.freeze(SOLUTIONS);
window.SOLUTION_GROUPS = Object.freeze(SOLUTION_GROUPS);
window.SOLUTION_ICONS = Object.freeze(ICONS);
window.getSolution = getSolution;
window.getSolutionsByGroup = getSolutionsByGroup;
window.getSolutionIcon = getSolutionIcon;
