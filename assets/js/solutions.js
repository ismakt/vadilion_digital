'use strict';

/* ============================================================
   SOLUTIONS — SOURCE UNIQUE DE VÉRITÉ
   ------------------------------------------------------------
   Pour ajouter une solution : copier un objet, changer l'id.
   Rien d'autre à modifier (ni HTML, ni CSS).

   Champs :
     id       : identifiant unique (slug, sans espace)
     group    : 'products' | 'services'
     icon     : clé d'icône (voir ICONS ci-dessous)
     url      : lien externe (optionnel)
     action   : 'contact' pour ouvrir la modale contact (optionnel)
     fr / en  : { name, tagline, body, tags[], cta }
   ============================================================ */

const SOLUTION_GROUPS = {
  products: { fr: 'Produits',  en: 'Products' },
  services: { fr: 'Services',  en: 'Services' }
};

const ICONS = {
map: '<path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7"/>',
order: '<path d="M3 15.5c0-1.4 1.1-2.5 2.5-2.5h13c1.4 0 2.5 1.1 2.5 2.5S19.9 18 18.5 18h-13C4.1 18 3 16.9 3 15.5z"/><path d="M4.5 13c.6-2.6 3.6-4.5 7.5-4.5s6.9 1.9 7.5 4.5"/><path d="M9 8.9V13M15 8.9V13"/>',
globe: '<circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
code: '<path d="m8 6-6 6 6 6M16 6l6 6-6 6"/>'
};

const SOLUTIONS = [
  
 {
    id: 'toki-eats',
    group: 'products',
    icon: 'order',
    action: 'contact',
    fr: {
      name: 'Wasabi',
      tagline: 'Reprenez le contrôle de vos commandes',
      body: "Chaque mois, les commissions des plateformes tierces amputent votre marge sur des clients qui sont déjà les vôtres.<br><br>Avec Wasabi, nous mettons à votre disposition notre plateforme ou adaptons votre propre site web, pour convertir vos clients réguliers vers votre canal direct — et réduire durablement votre dépendance aux acteurs dominants du marché.",
      tags: ['Sans commission', 'Vos données', 'Écran cuisine'],
      cta: 'Demander une démonstration'
    },
    en: {
      name: 'Wasabi',
      tagline: 'Take back control of your orders',
      body: 'Every month, third-party commissions eat into your margin on customers who are already yours.<br><br>With Wasabi, we provide our platform or your own ordering website, to move your regular customers onto your direct channel — and durably reduce your dependence on the dominant players in the market.',
      tags: ['No commission', 'Your data', 'Kitchen display'],
      cta: 'Request a demo'
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
      body: "Une vision indépendante du marché, libre de toute spéculation.<br><br>Explorez l'essentiel des données — prix, tendances, projets à venir et leur impact — grâce à une carte intuitive ou à notre agent IA intégré. Le tout en 5 minutes, sous forme de rapport sur mesure, adapté à votre situation et à votre projet.",
      tags: ['Cartographie', 'Rapports IA', 'Immobilier'],
      cta: 'Découvrir Smart-In'
    },
    en: {
      name: 'Smart-In',
      tagline: 'Location intelligence',
      body: 'An independent view of the market, free from speculation.<br><br>Explore the essential data — prices, trends, upcoming projects and their impact — through an intuitive map or our integrated AI agent. All in 5 minutes, delivered as a tailored report adapted to your situation and project.',
      tags: ['Mapping', 'AI reports', 'Real estate'],
      cta: 'Discover Smart-In'
    }
  },

   
  {
    id: 'presence',
    group: 'services',
    icon: 'globe',
    action: 'contact',
    fr: {
      name: 'Business Essentials',
      tagline: 'Branding en ligne',
      body: "Les essentiels d'une bonne présentation enn ligne : site web, branding, systeme de collecte d'avis.",
      tags: ['Site web', 'Google Business', 'Avis clients'],
      cta: 'Nous contacter'
    },
    en: {
      name: 'Local presence',
      tagline: 'Web, Google, reviews',
      body: 'The visible infrastructure of an established business: showcase website, optimised Google listing, structured customer review collection.<br><br>Full setup, then complete client autonomy over their own tools.',
      tags: ['Website', 'Google Business', 'Reviews'],
      cta: 'Get in touch'
    }
  },
  {
    id: 'sur-mesure',
    group: 'services',
    icon: 'code',
    action: 'contact',
    fr: {
      name: 'Sur mesure',
      tagline: 'Développement dédié',
      body: "Lorsque aucun outil du marché ne répond au besoin, nous concevons la solution.<br><br>Automatisation de processus, traitement de données, interfaces métier et intégrations entre vos systèmes existants.",
      tags: ['Automatisation', 'Données', 'Intégrations'],
      cta: 'Décrire votre besoin'
    },
    en: {
      name: 'Bespoke',
      tagline: 'Dedicated development',
      body: 'When no off-the-shelf tool fits the need, we design the solution.<br><br>Process automation, data processing, business interfaces and integrations across your existing systems.',
      tags: ['Automation', 'Data', 'Integrations'],
      cta: 'Describe your need'
    }
  }
];

window.SOLUTIONS = SOLUTIONS;
window.SOLUTION_GROUPS = SOLUTION_GROUPS;
window.SOLUTION_ICONS = ICONS;
