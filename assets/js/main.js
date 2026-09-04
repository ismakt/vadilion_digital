'use strict';

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
  close: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  cap:   '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 9 12 5 2 9l10 4 10-4z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>'
};

function art(key) { return window.getArt ? window.getArt(key) : ''; }

/* Carte illustrée — utilisée par les solutions et les réalisations. */
function cardHtml(o, withBricks) {
  const t = o[currentLang];
  return '<article class="card" data-id="' + o.id + '" role="button" tabindex="0">'
    +   '<div class="thumb">' + art(o.art) + '</div>'
    +   '<div class="meta"><span class="kind">' + t.kind + '</span>'
    +     '<span class="sep" aria-hidden="true">·</span><span class="state">' + t.state + '</span></div>'
    +   '<h3>' + t.name + '</h3>'
    +   '<p class="line">' + t.line + '</p>'
    +   (withBricks
          ? '<ul class="bricks">' + t.items.map(function (i) { return '<li><b>' + i[0] + '</b></li>'; }).join('') + '</ul>'
          : '')
    +   '<div class="foot"><span class="proof">' + t.proof + '</span><span>' + L('details') + '</span></div>'
    + '</article>';
}

/* ============================================================
   RENDU DES SECTIONS
   ============================================================ */
function renderHeroArt() {
  const el = $('#hero-art');
  if (el) el.innerHTML = art('hero');
}

function renderSolutions() {
  const rail = $('#sol-rail');
  if (!rail || !window.SOLUTIONS) return;
  rail.innerHTML = window.SOLUTIONS.map(function (s) { return cardHtml(s, true); }).join('');
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
    .map(function (w) { return cardHtml(w, false); })
    .join('');
  rail.scrollLeft = 0;
}

function renderCredentials() {
  const wrap = $('#creds');
  if (!wrap || !window.CREDENTIALS) return;
  wrap.innerHTML = window.CREDENTIALS.map(function (c) {
    const t = c[currentLang];
    return '<div class="cred"><span class="cred-ic">' + ICO.cap + '</span>'
         + '<div><b>' + t[0] + '</b><span>' + t[1] + '</span></div>'
         + '<span class="yr">' + c.year + '</span></div>';
  }).join('');
}

function renderAll() {
  renderHeroArt();
  renderSolutions();
  renderFilters();
  renderWorks();
  renderCredentials();
}

/* ============================================================
   FICHE (bottom sheet)
   ============================================================ */
function findItem(id) {
  const all = (window.SOLUTIONS || []).concat(window.WORKS || []);
  return all.find(function (x) { return x.id === id; }) || null;
}

function buildCta(action, url, label, variant) {
  if (!label) return '';
  const cls = variant === 'secondary' ? 'btn-ghost' : 'btn-solid';
  if (url) {
    return '<a class="' + cls + '" href="' + url + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
  }
  const attr = action === 'simulator' ? 'data-open-simulator' : 'data-open-contact';
  return '<button type="button" class="' + cls + '" ' + attr + '>' + label + ICO.arrow + '</button>';
}

function openSheet(id) {
  const o = findItem(id);
  if (!o) return;
  const t = o[currentLang];

  const ctas = [
    buildCta(o.action,  null, t.cta,  'primary'),
    buildCta(o.action2, null, t.cta2, 'secondary'),
    o.url ? '<a class="btn-ghost" href="' + o.url + '" target="_blank" rel="noopener noreferrer">' + t.urlLabel + '</a>' : ''
  ].filter(Boolean).join('');

  $('#sheetBody').innerHTML =
      '<div class="sheet-head">'
    +   '<div><h3>' + t.name + '</h3><div class="status">' + t.kind + ' · ' + t.state + '</div></div>'
    +   '<button type="button" class="icon-btn" data-close-sheet aria-label="' + L('close') + '">' + ICO.close + '</button>'
    + '</div>'
    + '<div class="thumb">' + art(o.art) + '</div>'
    + (t.text  ? '<p class="sheet-text">' + t.text + '</p>' : '')
    + (t.items ? '<ul class="items">' + t.items.map(function (i) { return '<li><b>' + i[0] + '</b>' + i[1] + '</li>'; }).join('') + '</ul>' : '')
    + (t.note  ? '<div class="note">' + t.note + '</div>' : '')
    + (t.tags  ? '<div class="tags">' + t.tags.map(function (x) { return '<span class="tag">' + x + '</span>'; }).join('') + '</div>' : '')
    + (t.proof && !t.items ? '<div class="note"><b>' + L('brick') + '</b> — ' + t.proof + '</div>' : '')
    + (ctas ? '<div class="sheet-ctas">' + ctas + '</div>' : '');

  $('#sheetWrap').classList.add('is-open');
  $('#sheetWrap').setAttribute('aria-hidden', 'false');
}

function closeSheet() {
  $('#sheetWrap').classList.remove('is-open');
  $('#sheetWrap').setAttribute('aria-hidden', 'true');
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
  closeSheet();
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
  if (t.closest('[data-close-sheet]') || t.id === 'sheetWrap') { closeSheet(); return; }
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
  if (navBtn) { showView(navBtn.dataset.view); return; }

  /* Carte → fiche */
  const card = t.closest('.card');
  if (card) openSheet(card.dataset.id);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    $$('.modal.is-open').forEach(function (m) { closeModal(m.id); });
    closeSheet();
    closeDrawer();
    return;
  }
  if (e.key !== 'Enter' && e.key !== ' ') return;

  const card = e.target.closest && e.target.closest('.card');
  if (card) { e.preventDefault(); openSheet(card.dataset.id); }
});

mqDesktop.addEventListener('change', function () {
  if (mqDesktop.matches) { closeSheet(); closeDrawer(); }
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
  fr: { details: 'Détails →', close: 'Fermer', brick: 'Brique démontrée',
        fillAll: 'Veuillez remplir tous les champs.', sending: 'Envoi…',
        sent: 'Message envoyé ✅', sendError: "Erreur lors de l'envoi ❌" },
  en: { details: 'Details →', close: 'Close', brick: 'Skill demonstrated',
        fillAll: 'Please fill in all fields.', sending: 'Sending…',
        sent: 'Message sent ✅', sendError: 'Sending failed ❌' }
};

function L(key) { return STRINGS[currentLang][key]; }

const translations = {
  fr: {
    'nav-home': 'Accueil', 'nav-solutions': 'Solutions', 'nav-works': 'Réalisations', 'nav-about': 'À propos',

    'kicker-1': 'PME et indépendants',
    'kicker-2': 'Belgique',
    'hero-title': 'Le digital qui vous fait gagner du temps.',
    'hero-lede': "Site web, application interne, automatisation, reporting. Et une lecture précise du quartier où vous travaillez, pour décider sur des données plutôt que sur une impression.",
    'hero-cta1': 'Voir les solutions',
    'hero-cta2': 'Nos réalisations',

    'sol-title': 'Deux façons de travailler ensemble',
    'sol-sub': "On installe ce qui vous manque, on ne vend pas ce qui ne vous servira pas.",
    'sol-hint': "Faites glisser pour voir l'autre →",

    'works-title': 'Ce que nous avons déjà construit',
    'works-sub': 'Chaque réalisation correspond à une des briques que nous proposons.',
    'works-hint': 'Faites glisser pour voir les autres →',

    'about-title': 'À propos',
    'about-text': "Vadilion Digital conçoit des outils digitaux pour des PME et des indépendants en Belgique. Nous travaillons sur rendez-vous, chez vous quand c'est utile, et nous commençons toujours par la brique qui vous coûte le plus de temps.",
    'about-cta': 'Nous contacter',

    'dnav-home': 'Accueil', 'dnav-solutions': 'Solutions', 'dnav-works': 'Réalisations',
    'dnav-about': 'À propos', 'dnav-offices': 'Bureaux', 'dnav-cta': 'Prendre rendez-vous',

    'offices-link': 'Bureaux', 'contact-footer-link': 'Contact',

    'contact-text': 'Contactez-nous', 'contact-text2': 'Comment pouvons-nous vous aider ?', 'btn-send': 'Envoyer',
    'offices': 'Bureaux', 'office1-city': 'Bruxelles',
    'office-note': '*Uniquement sur rendez-vous. Nous privilégions le déplacement chez nos clients et le remote.'
  },

  en: {
    'nav-home': 'Home', 'nav-solutions': 'Solutions', 'nav-works': 'Work', 'nav-about': 'About',
    'head-cta': 'Book a meeting',

    'kicker-1': 'Small businesses and independents',
    'kicker-2': 'Belgium',
    'hero-title': 'Digital work that gives you time back.',
    'hero-lede': 'Website, internal app, automation, reporting. Plus a precise read of the area you work in, so you decide on data instead of impressions.',
    'hero-cta1': 'See solutions',
    'hero-cta2': 'Our work',

    'sol-title': 'Two ways to work together',
    'sol-sub': 'We install what you are missing, and we do not sell what will not serve you.',
    'sol-hint': 'Swipe to see the other one →',

    'works-title': 'What we have already built',
    'works-sub': 'Each piece of work matches one of the building blocks we offer.',
    'works-hint': 'Swipe to see the others →',

    'about-title': 'About',
    'about-text': 'Vadilion Digital builds digital tools for small businesses and independents in Belgium. We work by appointment, at your place when it helps, and we always start with the block that costs you the most time.',
    'about-cta': 'Get in touch',

    'dnav-home': 'Home', 'dnav-solutions': 'Solutions', 'dnav-works': 'Work',
    'dnav-about': 'About', 'dnav-offices': 'Offices', 'dnav-cta': 'Book a meeting',

    'offices-link': 'Offices', 'contact-footer-link': 'Contact',

    'contact-text': 'Contact us', 'contact-text2': 'How can we help you?', 'btn-send': 'Send',
    'offices': 'Offices', 'office1-city': 'Brussels',
    'office-note': '*By appointment only. We prefer meeting at your place, or remote.'
  }
};

const placeholders = {
  fr: { 'contact-name': 'Nom',  'contact-info': 'Coordonnées de contact', 'contact-message': 'Comment pouvons-nous vous aider ?' },
  en: { 'contact-name': 'Name', 'contact-info': 'Contact details',        'contact-message': 'How can we help you?' }
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

  closeSheet();
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
   ============================================================ */
renderAll();
initContactForm();
showView('home');
