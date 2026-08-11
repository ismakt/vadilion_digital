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
  url: 'https://platform-for-restaurants-omega.vercel.app',
  fr: {
    name: 'Wasabi',
    tagline: 'Reprenez le contrôle de vos commandes',
    body: "Il existe un manque à gagner important : les commissions que vous payez aux plateformes sur chaque commande.<br><br>Une partie de vos clients fidélisés peut pourtant commander directement, via un canal indépendant de ces plateformes.<br><br>C’est exactement ce que Wasabi vous apporte : une plateforme prête à accueillir votre établissement et vos clients, pour des commandes simples, intuitives et sécurisées.<br><br>Un prix mensuel fixe, inférieur à 2 % de vos ventes.<br><br>Vous pouvez également choisir votre propre site : nous l’adaptons pour permettre à vos clients de commander directement en ligne. Prix sur demande.",
    tags: ['Indépendance', 'Manque à gagner', 'Conversion clients'],
    cta: 'Explorer'
  },
  en: {
    name: 'Wasabi',
    tagline: 'Take back control of your orders',
    body: 'There is a significant loss of revenue: the commissions you pay platforms on every order.<br><br>Yet, some of your loyal customers can order directly, through a channel independent of these platforms.<br><br>That is exactly what Wasabi provides: a platform ready to host your business and your customers, for simple, intuitive and secure orders.<br><br>A fixed monthly price, below 2% of your sales.<br><br>You can also choose your own website: we adapt it to allow your customers to order directly online. Price on request.',
    tags: ['Independence', 'Lost revenue', 'Customer conversion'],
    cta: 'Explore'
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
      tags: ['Carte interactive', 'Agent IA integré', 'Immobilier'],
      cta: 'Explorer'
    },
    en: {
      name: 'Smart-In',
      tagline: 'Location intelligence',
      body: 'An independent read of the market in 5 minutes.<br><br>Prices, trends, upcoming projects and their impact: everything that drives a neighbourhood\'s value, in a single interface.',
      tags: ['Interactive map', 'Integrated AI agent', 'Real estate'],
      cta: 'Explore'
    }
  },
  {
    id: 'presence',
    group: 'services',
    icon: 'globe',
    action: 'contact',
    fr: {
      name: 'Business Essentials',
      tagline: 'Votre image en ligne',
      body: "L'image cohérente d'une entreprise qui inspire confiance : site web, logo, réseaux sociaux, collecte d'avis, cartes de visite et plus.",
      tags: ['Identité visuelle', 'Site web', 'Avis clients'],
      cta: 'Nous contacter'
    },
    en: {
      name: 'Business Essentials',
      tagline: 'Your online image',
      body: 'The coherent image of a business that inspires trust: website, logo, social profiles, review collection, business cards and more.',
      tags: ['Visual identity', 'Website', 'Reviews'],
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
      body: "Décrivez le problème, nous concevons la solution.<br><br>Site web, application, automatisation, traitement de données, interfaces métier et plus.",
      tags: ['Automatisation', 'Données', 'Intégrations'],
      cta: 'Décrire votre besoin'
    },
    en: {
      name: 'Bespoke',
      tagline: 'Dedicated development',
      body: 'Describe the problem, we design the solution.<br><br>Website, app, automation, data processing, business interfaces and more.',
      tags: ['Automation', 'Data', 'Integrations'],
      cta: 'Describe the problem'
    }
  }
];

window.SOLUTIONS = SOLUTIONS;
window.SOLUTION_GROUPS = SOLUTION_GROUPS;
window.SOLUTION_ICONS = ICONS;
