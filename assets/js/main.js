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
  close: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'
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

function renderAll() {
  renderHeroArt();
  renderFilters();
  renderWorks();
}

/* ============================================================
   FICHE (bottom sheet)
   ============================================================ */
function findItem(id) {
  const all = window.WORKS || [];
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
    + (t.tags  ? '<div class="tags">' + t.tags.map(function (x) { return '<span class="tag">' + x + '</span>'; }).join('') + '</div>' : '')
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
  en: { details: 'Details →', close: 'Close', brick: 'Building block demonstrated',
        fillAll: 'Please fill in all fields.', sending: 'Sending…',
        sent: 'Message sent ✅', sendError: 'Sending failed ❌' }
};

function L(key) { return STRINGS[currentLang][key]; }

const translations = {
  fr: {
    'nav-home': 'Accueil', 'nav-works': 'Solutions',

    'kicker-1': 'B2B',
    'hero-title': 'Développement de solutions sur mesure.',
    'hero-lede': "Applications, sites web, automatisations, analyse de données, reporting et plus encore.",
    'hero-cta1': 'Voir nos solutions',
    'hero-cta2': 'Prendre rendez-vous',

    'works-title': 'Nos solutions',
    'works-sub': 'Ce que nous avons déjà construit, et ce que nous pouvons construire pour vous.',
    'works-hint': 'Glissez pour voir les autres →',


    'dnav-home': 'Accueil', 'dnav-works': 'Solutions',
    'dnav-offices': 'Bureaux', 'dnav-cta': 'Prendre rendez-vous',

    'offices-link': 'Bureaux', 'contact-footer-link': 'Contact',

    'contact-text': 'Contactez-nous', 'contact-text2': 'Décrivez votre besoin, nous revenons vers vous rapidement.', 'btn-send': 'Envoyer',
    'offices': 'Bureaux', 'office1-city': 'Bruxelles',
    'office-note': '*Uniquement sur rendez-vous. Nous privilégions les rendez-vous chez nos clients, ou à distance.'
  },

  en: {
    'nav-home': 'Home', 'nav-works': 'Solutions',

    'kicker-1': 'B2B',
    'hero-title': 'Custom-built digital solutions.',
    'hero-lede': 'Apps, websites, automations, data analysis, reporting and more.',
    'hero-cta1': 'See our solutions',
    'hero-cta2': 'Book a meeting',

    'works-title': 'Our solutions',
    'works-sub': 'What we have already built, and what we can build for you.',
    'works-hint': 'Swipe to see the others →',



    'dnav-home': 'Home', 'dnav-works': 'Solutions',
    'dnav-offices': 'Offices', 'dnav-cta': 'Book a meeting',

    'offices-link': 'Offices', 'contact-footer-link': 'Contact',

    'contact-text': 'Contact us', 'contact-text2': 'Tell us what you need and we will get back to you quickly.', 'btn-send': 'Send',
    'offices': 'Offices', 'office1-city': 'Brussels',
    'office-note': '*By appointment only. We prefer meeting at your place, or remote.'
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
   ------------------------------------------------------------
   setLanguage('fr') applique les traductions dès le premier
   chargement : le HTML statique et translations.fr ne peuvent
   plus diverger.
   ============================================================ */
setLanguage('fr');
initContactForm();
showView('home');
