'use strict';

/* ============================
   VANTA BACKGROUND
   ============================ */
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
  size: 3.2,
  spacing: 24,
  showLines: false
});

/* ============================
   MENU PANELS
   ============================ */
const menuButtons = document.querySelectorAll('.menu button');
const panels      = document.querySelectorAll('.panel');
const canHover    = window.matchMedia('(hover: hover)').matches;

menuButtons.forEach(btn => {
  const panelId = btn.id.replace('menu-', '');
  const panel   = document.getElementById(panelId);
  if (!panel) return;

  if (canHover) {
    btn.addEventListener('mouseenter', () => {
      panels.forEach(p => { p.style.display = 'none'; });
      menuButtons.forEach(b => b.classList.remove('active-menu'));
      panel.style.display = 'block';
      btn.classList.add('active-menu');
    });
  }

  btn.addEventListener('click', e => {
    e.preventDefault();
    const isOpen = panel.style.display === 'block';
    panels.forEach(p => { p.style.display = 'none'; });
    menuButtons.forEach(b => b.classList.remove('active-menu'));
    if (!isOpen) {
      panel.style.display = 'block';
      btn.classList.add('active-menu');
    }
  });
});

/* ============================
   MODALS
   ============================ */
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  document.getElementById('main-content')?.classList.add('blur-background');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
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
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal').forEach(m => {
      if (m.style.display === 'flex') closeModal(m.id);
    });
  }
});

/* ============================
   EMAILJS — CONTACT FORM
   ============================ */
(function () { emailjs.init('Y9G1UYj9VZqrRmSG1'); })();

document.getElementById('btn-send').addEventListener('click', function () {
  const name    = document.getElementById('contact-name').value.trim();
  const contact = document.getElementById('contact-info').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (!name || !contact || !message) {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  this.disabled    = true;
  this.textContent = 'Envoi…';

  emailjs.send('service_41z5e5b', 'template_9s39ygw', { name, contact, message })
    .then(() => {
      alert('Message envoyé ✅');
      closeModal('contactModal');
      document.getElementById('contact-name').value    = '';
      document.getElementById('contact-info').value    = '';
      document.getElementById('contact-message').value = '';
    })
    .catch(err => {
      console.error(err);
      alert('Erreur lors de l\'envoi ❌');
    })
    .finally(() => {
      this.disabled    = false;
      this.textContent = 'Envoyer';
    });
});

/* ============================
   TRANSLATIONS
   ============================ */

/* IDs dont le contenu doit être injecté via innerHTML
   (ceux qui contiennent des balises HTML comme <br>) */
const htmlIds = new Set(['locationContentInnerText']);

const translations = {
  fr: {
    'about-text':               'Nous développons des solutions digitales uniques, répondant à des besoins concrets, à partir de données à forte valeur ajoutée.',
    'menu-about':               'À PROPOS',
    'menu-solutions':           'SOLUTIONS',
    'locationBtn':              'SMART-IN',
    'locationContentInnerText': "Fini les semaines de recherche et les décisions à l'instinct. Plus de 130 indicateurs du marché — prix, tendances, sécurité, projets à venir et leur impact, etc. — réunis en un seul endroit, issus de sources officielles. Explorez les données en détail sur une carte intuitive, ou posez directement votre question à l'agent IA intégré pour recevoir un rapport sur mesure, adapté à votre situation. Le tout avec un support multilingue disponible 24h/7.",
    'discoverSmartIn-label':    'Découvrir Smart-In',
    'offices-link':             'Bureaux',
    'contact-footer-link':      'Contact',
    'offices':                  'Bureaux',
    'office1-city':             'Bruxelles',
    'office2-city':             'Paris',
    'office3-city':             'Monaco',
    'our-media':                'Nos réseaux',
    'contact-text':             'Contactez-nous',
    'contact-text2':            'Nous écoutons attentivement vos besoins afin de vous proposer une solution précise et adaptée.',
    'locationBtn':              "SMART-IN - Plateforme d'Intelligence Territoriale."
  },
  en: {
    'about-text':               'We turn high-value data into unique digital solutions that solve real challenges.',
    'menu-about':               'ABOUT',
    'menu-solutions':           'SOLUTIONS',
    'locationBtn':              'SMART-IN',
    'locationContentInnerText': 'No more need for weeks of research or gut-feel decisions. Access 130+ market indicators — prices, trends, safety, upcoming projects and their impact, and more — all in one place, sourced from official data. Explore the data in detail on an intuitive map, or simply ask our integrated AI agent to generate a tailored report for your situation. All backed by multilingual support, available 24/7.',
    'discoverSmartIn-label':    'Discover Smart-In',
    'offices-link':             'Offices',
    'contact-footer-link':      'Contact',
    'offices':                  'Offices',
    'office1-city':             'Brussels',
    'office2-city':             'Paris',
    'office3-city':             'Monaco',
    'our-media':                'Our Media',
    'contact-text':             'Contact us',
    'contact-text2':            'We listen carefully to your needs in order to offer you a precise and tailored solution.',
    'locationBtn':              'SMART-IN - Location Intelligence Platform.'
  }
};

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  Object.entries(dict).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (htmlIds.has(id)) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });
  document.getElementById('fr-btn')?.classList.toggle('active', lang === 'fr');
  document.getElementById('en-btn')?.classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang;
}

document.getElementById('fr-btn').addEventListener('click', () => setLanguage('fr'));
document.getElementById('en-btn').addEventListener('click', () => setLanguage('en'));

/* ============================
   SECURITY — DEVTOOLS BLOCKER (desktop uniquement)
   ============================ */
if (navigator.maxTouchPoints === 0) {

  const devBlock = document.createElement('div');
  devBlock.style.cssText = `
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.97);
    z-index: 999999999;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    font-family: Inter, sans-serif;
    text-align: center;
    padding: 40px;
  `;
  devBlock.innerHTML = `
    <div style="font-size:48px;margin-bottom:20px">🚫</div>
    <div style="font-size:22px;font-weight:600;margin-bottom:12px">Accès refusé</div>
    <div style="font-size:14px;color:rgba(255,255,255,0.5)">Les outils de développement ne sont pas autorisés sur cette application.</div>
  `;
  document.body.appendChild(devBlock);

  document.addEventListener('keydown', e => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I','J','C','U'].includes(e.key.toUpperCase())) ||
      (e.ctrlKey && e.key.toUpperCase() === 'U')
    ) {
      e.preventDefault();
      e.stopPropagation();
      devBlock.style.display = 'flex';
    }
  });

}
