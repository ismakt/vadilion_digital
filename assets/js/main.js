'use strict';

/* Empêche les navigateurs mobiles de restaurer eux-mêmes la position de
   scroll d'une visite précédente (retour arrière, onglet remis au premier
   plan, etc.). Sans ça, le navigateur peut réappliquer sa propre position
   avant ou après notre reset, ce qui donne l'impression que la page
   s'ouvre "scrollée". */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function resetPageScroll() {
  window.scrollTo(0, 0);

  document.querySelectorAll('.view').forEach(view => {
    view.scrollTop = 0;
    view.scrollLeft = 0;
  });
}

/* "load" couvre le premier chargement classique de la page. */
window.addEventListener('load', resetPageScroll);

/* "pageshow" couvre les cas où le navigateur restaure la page depuis son
   cache (bfcache) au lieu de la recharger — très courant sur mobile quand
   on revient sur l'onglet, qu'on navigue en arrière, ou que le navigateur
   remet l'appli au premier plan. Dans ces cas-là, "load" ne se redéclenche
   PAS, donc resetPageScroll() ne serait jamais rappelé sans ce listener. */
window.addEventListener('pageshow', function (e) {
  if (e.persisted) resetPageScroll();
});

/* ============================================================
   ÉTAT GLOBAL
   ============================================================ */
let currentLang = 'fr';
let currentView = 'home';
let currentCat  = 'all';

const mqDesktop = window.matchMedia('(min-width: 860px)');

const $  = function (sel) { return document.querySelector(sel); };
const $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

/* ============================================================
   FRAGMENTS RÉUTILISABLES
   ============================================================ */
const ICO = {
  arrow: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h13m-5-6 6 6-6 6"/></svg>',
  out:   '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>',

  /* Icônes des solutions (clé `icon` dans works.js) */
  screen: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  grid:   '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  sync:   '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5.3M18 3v4h-4M20 12a8 8 0 0 1-14 5.3M6 21v-4h4"/></svg>',
  chart:  '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>'
};

function art(key) { return window.getArt ? window.getArt(key) : ''; }

/* Carte solution — icône, titre, une phrase. */
function solutionCardHtml(o) {
  const t = o[currentLang];
  return '<article class="sol-card">'
    +   (ICO[o.icon] || '')
    +   '<h3>' + t.name + '</h3>'
    +   '<p>' + t.text + '</p>'
    + '</article>';
}

/* Étape du déroulé — numérotée 01, 02… */
function stepHtml(s, i) {
  const t = s[currentLang];
  return '<li class="step">'
    +   '<span class="step-num">' + String(i + 1).padStart(2, '0') + '</span>'
    +   '<h3>' + t.name + '</h3>'
    +   '<p>' + t.text + '</p>'
    + '</li>';
}

/* Carte réalisation — l'essence du projet en deux phrases. */
function workCardHtml(w) {
  const t = w[currentLang];
  return '<article class="card work-card">'
    +   '<div class="thumb">' + art(w.art) + '</div>'
    +   '<div class="card-body">'
    +     '<div class="meta"><span class="kind">' + t.kind + '</span>'
    +       '<span class="sep" aria-hidden="true">·</span><span class="state">' + t.state + '</span></div>'
    +     '<h3>' + t.name + '</h3>'
    +     '<p class="line">' + t.line + '</p>'
    +     '<p class="desc">' + t.text + '</p>'
    +     (w.url ? '<a class="card-link" href="' + w.url + '" target="_blank" rel="noopener noreferrer">'
    +         L('visit') + ICO.out + '</a>' : '')
    +   '</div>'
    + '</article>';
}

/* ============================================================
   RENDU DES SECTIONS
   ============================================================ */
function renderHeroArt() {
  const el = $('#hero-art');
  if (el) el.innerHTML = art('hero');
}

function renderFilters() {
  const wrap = $('#work-filters');
  if (!wrap || !window.WORK_FILTERS) return;
  wrap.innerHTML = window.WORK_FILTERS.map(function (f) {
    return '<button type="button" class="chip' + (f.id === currentCat ? ' is-on' : '') + '" data-cat="' + f.id + '">'
         + f[currentLang] + '</button>';
  }).join('');
}

function renderWorks() {
  const rail = $('#work-rail');
  if (!rail || !window.WORKS) return;
  rail.innerHTML = window.WORKS
    .filter(function (w) { return currentCat === 'all' || w.cat === currentCat; })
    .map(workCardHtml)
    .join('');
  rail.scrollLeft = 0;
}

function renderSolutions() {
  const grid = $('#solution-grid');
  if (grid && window.SOLUTIONS) grid.innerHTML = window.SOLUTIONS.map(solutionCardHtml).join('');

  const steps = $('#steps-list');
  if (steps && window.STEPS) steps.innerHTML = window.STEPS.map(stepHtml).join('');
}

function renderAll() {
  renderHeroArt();
  renderSolutions();
  renderFilters();
  renderWorks();
}

/* ============================================================
   VUES / TIROIR / MODALES
   ============================================================ */
function showView(view) {
  if (!$('#v-' + view)) return;
  currentView = view;
  $$('.view').forEach(function (v) { v.classList.toggle('is-on', v.id === 'v-' + view); });
  $$('.nav-d button').forEach(function (b) { b.classList.toggle('is-on', b.dataset.view === view); });
  $$('.drawer .nav-link').forEach(function (b) { b.classList.toggle('is-on', b.dataset.view === view); });
  closeDrawer();
}

function openDrawer() {
  $('#drawerWrap').classList.add('is-open');
  $('#drawerWrap').setAttribute('aria-hidden', 'false');
  $('#burger').setAttribute('aria-expanded', 'true');
}

function closeDrawer() {
  $('#drawerWrap').classList.remove('is-open');
  $('#drawerWrap').setAttribute('aria-hidden', 'true');
  $('#burger').setAttribute('aria-expanded', 'false');
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  closeDrawer();
  modal.classList.add('is-open');
  const main = $('#main-content');
  if (main) main.classList.add('blur-background');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('is-open');
  const main = $('#main-content');
  if (main) main.classList.remove('blur-background');
}

window.openModal  = openModal;
window.closeModal = closeModal;
window.WASABI_SIM_CONTACT = function () { openModal('contactModal'); };

function openSimulator(trigger) {
  if (typeof window.openWasabiSimulator === 'function') {
    window.openWasabiSimulator(currentLang, trigger);
  } else {
    console.warn('[main] wasabi_simulator.js non chargé — bascule sur la modale contact.');
    openModal('contactModal');
  }
}

/* ============================================================
   ÉVÉNEMENTS
   ============================================================ */
document.addEventListener('click', function (e) {
  const t = e.target;

  /* Liens externes : on laisse faire */
  if (t.closest('a[href^="http"]')) return;

  /* Fermetures */
  if (t.id === 'drawerWrap' || t.closest('#drawer-close'))     { closeDrawer(); return; }

  const closeBtn = t.closest('[data-close-modal]');
  if (closeBtn) { closeModal(closeBtn.dataset.closeModal); return; }
  if (t.classList && t.classList.contains('modal')) { closeModal(t.id); return; }

  /* Ouvertures */
  if (t.closest('#burger')) { openDrawer(); return; }

  const openBtn = t.closest('[data-open-modal]');
  if (openBtn) { openModal(openBtn.dataset.openModal); return; }

  if (t.closest('[data-open-contact]'))   { openModal('contactModal'); return; }
  if (t.closest('[data-open-simulator]')) { openSimulator(t); return; }

  /* Filtres */
  const chip = t.closest('.chip');
  if (chip) {
    currentCat = chip.dataset.cat;
    $$('.chip').forEach(function (c) { c.classList.toggle('is-on', c === chip); });
    renderWorks();
    return;
  }

  /* Navigation */
  const navBtn = t.closest('[data-view]');
  if (navBtn) showView(navBtn.dataset.view);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    $$('.modal.is-open').forEach(function (m) { closeModal(m.id); });
    closeDrawer();
  }
});

mqDesktop.addEventListener('change', function () {
  if (mqDesktop.matches) closeDrawer();
});

/* ============================================================
   EMAILJS — FORMULAIRE DE CONTACT
   ============================================================ */
function initContactForm() {
  const btn = $('#btn-send');
  if (!btn || !window.emailjs) return;

  emailjs.init('Y9G1UYj9VZqrRmSG1');

  btn.addEventListener('click', function () {
    const name    = $('#contact-name').value.trim();
    const contact = $('#contact-info').value.trim();
    const message = $('#contact-message').value.trim();

    if (!name || !contact || !message) {
      alert(L('fillAll'));
      return;
    }

    const label = btn.textContent;
    btn.disabled    = true;
    btn.textContent = L('sending');

    emailjs.send('service_41z5e5b', 'template_9s39ygw', {
      name: name, contact: contact, message: message, source: 'Vadilion Digital'
    })
      .then(function () {
        alert(L('sent'));
        closeModal('contactModal');
        $('#contact-name').value    = '';
        $('#contact-info').value    = '';
        $('#contact-message').value = '';
      })
      .catch(function (err) {
        console.error(err);
        alert(L('sendError'));
      })
      .finally(function () {
        btn.disabled    = false;
        btn.textContent = label;
      });
  });
}

/* ============================================================
   TRADUCTIONS
   ------------------------------------------------------------
   Clés = id d'élément dans index.html.
   Les chaînes générées par le JS sont dans STRINGS, lues par L().
   ============================================================ */
const STRINGS = {
  fr: { visit: 'Voir le projet', fillAll: 'Veuillez remplir tous les champs.', sending: 'Envoi…',
        sent: 'Message envoyé ✅', sendError: "Erreur lors de l'envoi ❌" },
  en: { visit: 'View project', fillAll: 'Please fill in all fields.', sending: 'Sending…',
        sent: 'Message sent ✅', sendError: 'Sending failed ❌' }
};

function L(key) { return STRINGS[currentLang][key]; }

const translations = {
  fr: {
    'nav-home': 'Accueil', 'nav-solutions': 'Solutions', 'nav-works': 'Réalisations',

    'kicker-1': 'B2B',
    'hero-title': 'Des solutions digitales sur mesure pour les entreprises.',
    'hero-lede': 'Applications, sites web, automatisation et analyse de données : nous concevons des solutions adaptées à vos besoins.',
    'hero-cta1': 'Voir nos solutions',
    'hero-cta2': 'Prendre rendez-vous',

    'solutions-kicker': 'Nos solutions',
    'solutions-title': 'Développement sur mesure',
    'solutions-sub': "Un seul interlocuteur, de l'idée à la mise en ligne.",
    'steps-title': 'Comment ça se passe',
    'cta-title': 'Un projet en tête ?',
    'cta-text': 'Contactez-nous et obtenez une idée claire du prix et du délai.',
    'cta-btn': 'Contactez-nous',

    'works-title': 'Réalisations',
    'works-sub': 'Quelques-uns de nos projets.',
    'works-hint': 'Glissez pour voir les autres →',


    'dnav-home': 'Accueil', 'dnav-solutions': 'Solutions', 'dnav-works': 'Réalisations',
    'dnav-offices': 'Bureaux', 'dnav-cta': 'Prendre rendez-vous',

    'offices-link': 'Bureaux', 'contact-footer-link': 'Contact',

    'contact-text': 'Contactez-nous', 'contact-text2': 'Décrivez votre besoin, nous revenons vers vous rapidement.', 'btn-send': 'Envoyer',
    'offices': 'Bureaux', 'office1-city': 'Bruxelles', 'office2-city': 'Liège', 'office3-city': 'Paris', 'office4-city': 'Monaco',
    'office-note': '*Uniquement sur rendez-vous.'
  },

  en: {
    'nav-home': 'Home', 'nav-solutions': 'Solutions', 'nav-works': 'Our work',

    'kicker-1': 'B2B',
    'hero-title': 'Custom digital solutions for businesses.',
    'hero-lede': 'Apps, websites, automation and data analysis: we design solutions tailored to your needs.',
    'hero-cta1': 'See our solutions',
    'hero-cta2': 'Book a meeting',

    'solutions-kicker': 'Our solutions',
    'solutions-title': 'Custom development',
    'solutions-sub': 'One point of contact, from idea to launch.',
    'steps-title': 'How it works',
    'cta-title': 'Have a project in mind?',
    'cta-text': 'Get in touch for a clear idea of price and timeline.',
    'cta-btn': 'Contact us',

    'works-title': 'Our work',
    'works-sub': 'A few of our projects.',
    'works-hint': 'Swipe to see the others →',



    'dnav-home': 'Home', 'dnav-solutions': 'Solutions', 'dnav-works': 'Our work',
    'dnav-offices': 'Offices', 'dnav-cta': 'Book a meeting',

    'offices-link': 'Offices', 'contact-footer-link': 'Contact',

    'contact-text': 'Contact us', 'contact-text2': 'Tell us what you need and we will get back to you quickly.', 'btn-send': 'Send',
    'offices': 'Offices', 'office1-city': 'Brussels', 'office2-city': 'Liège', 'office3-city': 'Paris', 'office4-city': 'Monaco',
    'office-note': '*By appointment only.'
  }
};

const placeholders = {
  fr: { 'contact-name': 'Nom',  'contact-info': 'E-mail ou téléphone', 'contact-message': 'Comment pouvons-nous vous aider ?' },
  en: { 'contact-name': 'Name', 'contact-info': 'Email or phone',      'contact-message': 'How can we help you?' }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  currentLang = lang;

  Object.keys(dict).forEach(function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    /* Boutons avec icône : on ne remplace que le premier nœud texte. */
    const textNode = Array.prototype.find.call(el.childNodes, function (n) {
      return n.nodeType === 3 && n.textContent.trim();
    });
    if (textNode) textNode.textContent = dict[id];
    else el.textContent = dict[id];
  });

  Object.keys(placeholders[lang]).forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.placeholder = placeholders[lang][id];
  });

  const fr = $('#fr-btn'), en = $('#en-btn');
  if (fr) fr.classList.toggle('is-on', lang === 'fr');
  if (en) en.classList.toggle('is-on', lang === 'en');
  document.documentElement.lang = lang;

  if (typeof window.closeWasabiSimulator === 'function') window.closeWasabiSimulator();

  renderAll();
}

['fr', 'en'].forEach(function (lang) {
  const el = $('#' + lang + '-btn');
  if (!el) return;
  el.addEventListener('click', function () { setLanguage(lang); });
  el.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLanguage(lang); }
  });
});

/* ============================================================
   INITIALISATION
   ------------------------------------------------------------
   setLanguage('fr') applique les traductions dès le premier
   chargement : le HTML statique et translations.fr ne peuvent
   plus diverger.
   ============================================================ */
setLanguage('fr');
initContactForm();
showView('home');
