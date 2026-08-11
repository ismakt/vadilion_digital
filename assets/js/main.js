'use strict';

/* ============================================================
   ÉTAT GLOBAL
   ============================================================ */
let currentLang = 'fr';
let activeSolutionId = (window.SOLUTIONS && window.SOLUTIONS[0]) ? window.SOLUTIONS[0].id : null;

const mqDesktop = window.matchMedia('(min-width: 900px)');
const mqHover   = window.matchMedia('(hover: hover) and (pointer: fine)');

/* ============================================================
   FOND ANIMÉ — configuration d'origine (v1)
   ============================================================ */
VANTA.DOTS({
  el: '#vanta-bg',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200,
  minWidth: 200,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xcffb7,
  color2: 0x5520ff,
  backgroundColor: 0x0,
  size: 3,
  spacing: 24,
  showLines: false
});


/* ============================================================
   SOLUTIONS — RENDU
   ============================================================ */
const ARROW_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
const CHEVRON_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

function iconSvg(key) {
  const path = (window.SOLUTION_ICONS || {})[key];
  if (!path) return '';
  return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + path + '</svg>';
}

function buildDetail(sol) {
  const t = sol[currentLang];
  const wrap = document.createElement('div');
  wrap.className = 'sol-detail';
  wrap.id = 'sol-detail-' + sol.id;

  const tags = (t.tags || [])
    .map(tag => '<span class="sol-tag">' + tag + '</span>')
    .join('');

  let cta = '';
  if (sol.url) {
    cta = '<a class="btn-discover" href="' + sol.url + '" target="_blank" rel="noopener noreferrer">'
        + '<span>' + t.cta + '</span>' + ARROW_SVG + '</a>';
  } else if (sol.action === 'contact') {
    cta = '<button type="button" class="btn-discover" data-open-contact>'
        + '<span>' + t.cta + '</span>' + ARROW_SVG + '</button>';
  }

  wrap.innerHTML =
      '<div class="sol-detail-title">' + t.name + ' — ' + t.tagline + '</div>'
    + '<div class="sol-detail-body">' + t.body + '</div>'
    + (tags ? '<div class="sol-tags">' + tags + '</div>' : '')
    + cta;

  return wrap;
}

function buildItem(sol) {
  const t = sol[currentLang];
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'sol-item';
  btn.dataset.solId = sol.id;
  btn.setAttribute('aria-controls', 'sol-detail-' + sol.id);

  btn.innerHTML =
      '<span class="sol-item-icon">' + iconSvg(sol.icon) + '</span>'
    + '<span class="sol-item-text">'
    +   '<span class="sol-item-name">' + t.name + '</span>'
    +   '<span class="sol-item-tagline">' + t.tagline + '</span>'
    + '</span>'
    + '<span class="sol-item-chevron">' + CHEVRON_SVG + '</span>';

  return btn;
}

function renderSolutions() {
  const nav  = document.getElementById('sol-nav');
  const pane = document.getElementById('sol-detail-pane');
  const list = window.SOLUTIONS || [];
  if (!nav || !pane || !list.length) return;

  nav.innerHTML  = '';
  pane.innerHTML = '';

  const isDesktop = mqDesktop.matches;
  const groups    = window.SOLUTION_GROUPS || {};
  let lastGroup   = null;

  list.forEach(sol => {
    if (sol.group && sol.group !== lastGroup && groups[sol.group]) {
      const label = document.createElement('div');
      label.className = 'sol-group-label';
      label.textContent = groups[sol.group][currentLang];
      nav.appendChild(label);
      lastGroup = sol.group;
    }

    const item     = buildItem(sol);
    const isActive = sol.id === activeSolutionId;

    item.classList.toggle('is-active', isActive);
    item.setAttribute('aria-expanded', isDesktop ? 'false' : String(isActive));
    if (isDesktop && isActive) item.setAttribute('aria-current', 'true');

    nav.appendChild(item);

    if (isDesktop) {
      if (isActive) pane.appendChild(buildDetail(sol));
    } else {
      const detail = buildDetail(sol);
      detail.classList.toggle('is-open', isActive);
      nav.appendChild(detail);
    }
  });
}

function selectSolution(id) {
  const isDesktop = mqDesktop.matches;
  /* Sur mobile, retoucher la ligne active la referme. */
  activeSolutionId = (!isDesktop && id === activeSolutionId) ? null : id;
  renderSolutions();
}

document.getElementById('sol-nav')?.addEventListener('click', e => {
  const item = e.target.closest('.sol-item');
  if (item) { selectSolution(item.dataset.solId); return; }
  if (e.target.closest('[data-open-contact]')) openModal('contactModal');
});

document.getElementById('sol-detail-pane')?.addEventListener('click', e => {
  if (e.target.closest('[data-open-contact]')) openModal('contactModal');
});

/* Au changement de format, on garde une solution ouverte sur desktop */
function handleBreakpoint() {
  if (mqDesktop.matches && !activeSolutionId && window.SOLUTIONS?.length) {
    activeSolutionId = window.SOLUTIONS[0].id;
  }
  renderSolutions();
}
mqDesktop.addEventListener('change', handleBreakpoint);

/* ============================================================
   MENU / PANNEAUX
   ============================================================ */
const menuButtons = document.querySelectorAll('.menu button');
const panels      = document.querySelectorAll('.panel');

function openPanel(panelId) {
  panels.forEach(p => p.classList.toggle('is-open', p.id === panelId));
  menuButtons.forEach(b => {
    const isTarget = b.id === 'menu-' + panelId;
    b.classList.toggle('active-menu', isTarget);
    b.setAttribute('aria-expanded', String(isTarget));
  });
}

function closePanels() {
  panels.forEach(p => p.classList.remove('is-open'));
  menuButtons.forEach(b => {
    b.classList.remove('active-menu');
    b.setAttribute('aria-expanded', 'false');
  });
}

menuButtons.forEach(btn => {
  const panelId = btn.id.replace('menu-', '');
  const panel   = document.getElementById(panelId);
  if (!panel) return;

  /* Le survol n'ouvre les panneaux que sur un vrai pointeur */
  if (mqHover.matches) {
    btn.addEventListener('mouseenter', () => openPanel(panelId));
  }

  btn.addEventListener('click', e => {
    e.preventDefault();
    if (panel.classList.contains('is-open')) closePanels();
    else openPanel(panelId);
  });
});

/* ============================================================
   MODALES
   ============================================================ */
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  document.getElementById('main-content')?.classList.add('blur-background');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
  document.getElementById('main-content')?.classList.remove('blur-background');
}

window.openModal  = openModal;
window.closeModal = closeModal;

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal(modal.id);
  });
});

document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.modal.is-open').forEach(m => closeModal(m.id));
});

/* ============================================================
   EMAILJS — FORMULAIRE DE CONTACT
   ============================================================ */
function initContactForm() {
  const btn = document.getElementById('btn-send');
  if (!btn || !window.emailjs) return;

  emailjs.init('Y9G1UYj9VZqrRmSG1');

  btn.addEventListener('click', function () {
    const name    = document.getElementById('contact-name').value.trim();
    const contact = document.getElementById('contact-info').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !contact || !message) {
      alert(currentLang === 'fr' ? 'Veuillez remplir tous les champs.' : 'Please fill in all fields.');
      return;
    }

    const label = this.textContent;
    this.disabled    = true;
    this.textContent = currentLang === 'fr' ? 'Envoi…' : 'Sending…';

    emailjs.send('service_41z5e5b', 'template_9s39ygw', {
      name, contact, message, source: 'Vadilion Digital'
    })
      .then(() => {
        alert(currentLang === 'fr' ? 'Message envoyé ✅' : 'Message sent ✅');
        closeModal('contactModal');
        document.getElementById('contact-name').value    = '';
        document.getElementById('contact-info').value    = '';
        document.getElementById('contact-message').value = '';
      })
      .catch(err => {
        console.error(err);
        alert(currentLang === 'fr' ? "Erreur lors de l'envoi ❌" : 'Sending failed ❌');
      })
      .finally(() => {
        this.disabled    = false;
        this.textContent = label;
      });
  });
}

/* ============================================================
   TRADUCTIONS (hors solutions, gérées dans solutions.js)
   ============================================================ */
const translations = {
  fr: {
    'about-text':          'Nous développons des solutions digitales uniques, répondant à des besoins concrets, à partir de données à forte valeur ajoutée.',
    'menu-about':          'À PROPOS',
    'menu-solutions':      'SOLUTIONS',
    'offices-link':        'Bureaux',
    'contact-footer-link': 'Contact',
    'media-link':          'Media',
    'offices':             'Bureaux',
    'office1-city':        'Bruxelles',
    'office2-city':        'Paris',
    'office3-city':        'Monaco',
    'our-media':           'Nos réseaux',
    'contact-text':        'Contactez-nous',
    'contact-text2':       'Nous écoutons attentivement vos besoins afin de vous proposer une solution précise et adaptée.',
    'btn-send':            'Envoyer'
  },
  en: {
    'about-text':          'We turn high-value data into unique digital solutions that solve real challenges.',
    'menu-about':          'ABOUT',
    'menu-solutions':      'SOLUTIONS',
    'offices-link':        'Offices',
    'contact-footer-link': 'Contact',
    'media-link':          'Media',
    'offices':             'Offices',
    'office1-city':        'Brussels',
    'office2-city':        'Paris',
    'office3-city':        'Monaco',
    'our-media':           'Our media',
    'contact-text':        'Contact us',
    'contact-text2':       'We listen carefully to your needs in order to offer you a precise and tailored solution.',
    'btn-send':            'Send'
  }
};

const placeholders = {
  fr: { 'contact-name': 'Nom', 'contact-info': 'Coordonnées de contact', 'contact-message': 'Comment pouvons-nous vous aider ?' },
  en: { 'contact-name': 'Name', 'contact-info': 'Contact details',       'contact-message': 'How can we help you?' }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  currentLang = lang;

  Object.entries(dict).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });

  Object.entries(placeholders[lang]).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = value;
  });

  document.getElementById('fr-btn')?.classList.toggle('active', lang === 'fr');
  document.getElementById('en-btn')?.classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;

  renderSolutions();
}

document.getElementById('fr-btn')?.addEventListener('click', () => setLanguage('fr'));
document.getElementById('en-btn')?.addEventListener('click', () => setLanguage('en'));

/* ============================================================
   INITIALISATION
   ============================================================ */
initContactForm();
renderSolutions();
openPanel('about');
