'use strict';

/* ============================================================
   WASABI — SIMULATEUR DE MANQUE À GAGNER
   ------------------------------------------------------------
   Module autonome. Ouvre une modale (même principe que la modale
   contact), calcule le manque à gagner mensuel et propose une
   bascule vers le contact.

   Branchement — 2 étapes :

   1) Charger ce fichier APRÈS solutions.js, AVANT main.js :
        <script src="solutions.js"></script>
        <script src="wasabi-simulator.js"></script>
        <script src="main.js"></script>

   2) Dans main.js, là où tu traites déjà action === 'contact',
      ajouter la branche 'simulator' :

        if (sol.action === 'simulator') {
          window.openWasabiSimulator(currentLang, btn);
          return;
        }

   Le bouton « Nous contacter » de la modale appelle
   window.WASABI_SIM_CONTACT() si tu la définis. Une ligne suffit,
   par exemple dans main.js :

        window.WASABI_SIM_CONTACT = openContactModal;

   Si elle n'est pas définie, le bouton n'est pas affiché.
   ============================================================ */

(function () {

  /* ---------- Réglages (tout est modifiable ici) ---------- */

  const DEFAULTS = {
    revenue: 10000,   // CA mensuel via plateformes tierces, en €
    conversion: 50,   // % de clients convertibles
    commission: 30    // % de commission payée
  };

  const CONVERSION_OPTIONS = range(10, 90, 10);   // 10 % → 90 %
  const COMMISSION_OPTIONS = range(15, 30, 5);    // 15 % → 30 %

  const SHOW_ANNUAL = true;   // passer à false pour masquer la projection annuelle

  const T = {
    fr: {
      title: 'Votre manque à gagner',
      intro: 'Estimation indicative, en trois chiffres.',
      revenue: 'Chiffre d\'affaires mensuel réalisé via les plateformes tierces',
      conversion: 'Part de ces clients que vous pensez convertir',
      commission: 'Commission que vous payez',
      result: 'Manque à gagner mensuel',
      annual: 'soit %s sur douze mois',
      compute: 'Calculer',
      stale: 'Valeurs modifiées — recalculez',
      disclaimer: 'Calcul simplifié : chiffre d\'affaires × commission × part convertie. Il ne tient compte ni de la TVA ni des frais de livraison.',
      contact: 'Discuter de ces chiffres',
      close: 'Fermer'
    },
    en: {
      title: 'Your lost margin',
      intro: 'A rough estimate, in three figures.',
      revenue: 'Monthly revenue generated through third-party platforms',
      conversion: 'Share of those customers you expect to convert',
      commission: 'Commission you pay',
      result: 'Lost margin per month',
      annual: 'that is %s over twelve months',
      compute: 'Calculate',
      stale: 'Values changed — run the calculation again',
      disclaimer: 'Simplified calculation: revenue × commission × converted share. VAT and delivery fees are not included.',
      contact: 'Discuss these figures',
      close: 'Close'
    }
  };

  /* ---------- Styles (hérités du site s'il définit ces variables) ---------- */

  const CSS = `
  .wsim-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;
    justify-content:center;padding:1rem;background:rgba(0,0,0,.72);
    backdrop-filter:blur(3px);opacity:0;transition:opacity .18s ease}
  .wsim-overlay.is-open{opacity:1}
  .wsim-modal{width:min(30rem,100%);max-height:90vh;overflow-y:auto;
    background:var(--bg-elev,#141416);color:var(--text,#f4f4f5);
    border:1px solid var(--border,rgba(255,255,255,.12));border-radius:var(--radius,14px);
    padding:1.5rem;transform:translateY(8px);transition:transform .18s ease}
  .wsim-overlay.is-open .wsim-modal{transform:none}
  .wsim-head{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem}
  .wsim-title{margin:0;font-size:1.15rem;font-weight:600;letter-spacing:-.01em}
  .wsim-intro{margin:.35rem 0 1.25rem;font-size:.85rem;color:var(--muted,#9a9aa2)}
  .wsim-close{flex:none;background:none;border:0;color:var(--muted,#9a9aa2);
    font-size:1.4rem;line-height:1;cursor:pointer;padding:.1rem .3rem;border-radius:6px}
  .wsim-close:hover{color:var(--text,#f4f4f5)}
  .wsim-field{margin-bottom:1rem}
  .wsim-field label{display:block;margin-bottom:.4rem;font-size:.8rem;
    color:var(--muted,#9a9aa2);line-height:1.35}
  .wsim-input,.wsim-select{width:100%;padding:.65rem .75rem;font:inherit;font-size:.95rem;
    color:var(--text,#f4f4f5);background:var(--bg,#0b0b0d);
    border:1px solid var(--border,rgba(255,255,255,.14));border-radius:10px;
    appearance:none;-webkit-appearance:none}
  .wsim-select{background-image:linear-gradient(45deg,transparent 50%,currentColor 50%),
    linear-gradient(135deg,currentColor 50%,transparent 50%);
    background-position:calc(100% - 18px) 55%,calc(100% - 13px) 55%;
    background-size:5px 5px,5px 5px;background-repeat:no-repeat;padding-right:2.2rem}
  .wsim-input:focus-visible,.wsim-select:focus-visible,.wsim-btn:focus-visible,
  .wsim-close:focus-visible{outline:2px solid var(--accent,#f4f4f5);outline-offset:2px}
  .wsim-input::-webkit-outer-spin-button,.wsim-input::-webkit-inner-spin-button{
    -webkit-appearance:none;margin:0}
  .wsim-input[type=number]{-moz-appearance:textfield}
  .wsim-result{margin:1.25rem 0 .5rem;padding:1rem;border-radius:12px;
    background:var(--bg,#0b0b0d);border:1px solid var(--border,rgba(255,255,255,.14));
    transition:opacity .15s ease}
  .wsim-result.is-stale{opacity:.4}
  .wsim-result-label{font-size:.78rem;color:var(--muted,#9a9aa2);text-transform:uppercase;
    letter-spacing:.06em}
  .wsim-amount{margin-top:.3rem;font-size:2rem;font-weight:600;letter-spacing:-.02em;
    color:var(--accent,#f4f4f5);font-variant-numeric:tabular-nums}
  .wsim-annual{margin-top:.15rem;font-size:.82rem;color:var(--muted,#9a9aa2)}
  .wsim-note{min-height:1rem;margin:.15rem 0 .9rem;font-size:.75rem;color:var(--muted,#9a9aa2)}
  .wsim-btn{width:100%;padding:.75rem 1rem;font:inherit;font-size:.9rem;font-weight:500;
    border-radius:10px;cursor:pointer;border:1px solid var(--border,rgba(255,255,255,.14));
    background:transparent;color:var(--text,#f4f4f5);transition:background .15s ease}
  .wsim-btn:hover{background:rgba(255,255,255,.06)}
  .wsim-btn--primary{background:var(--accent,#f4f4f5);color:var(--bg,#0b0b0d);border-color:transparent}
  .wsim-btn--primary:hover{opacity:.88;background:var(--accent,#f4f4f5)}
  .wsim-btn+.wsim-btn{margin-top:.5rem}
  .wsim-disclaimer{margin:1rem 0 0;font-size:.72rem;line-height:1.5;color:var(--muted,#9a9aa2)}
  @media (prefers-reduced-motion:reduce){.wsim-overlay,.wsim-modal{transition:none}}
  `;

  /* ---------- Implémentation ---------- */

  let overlay = null;
  let lastFocus = null;
  let lang = 'fr';

  function range(from, to, step) {
    const out = [];
    for (let v = from; v <= to; v += step) out.push(v);
    return out;
  }

  function money(value) {
    return new Intl.NumberFormat(lang === 'en' ? 'en-IE' : 'fr-BE', {
      style: 'currency', currency: 'EUR', maximumFractionDigits: 0
    }).format(value);
  }

  function injectStyles() {
    if (document.getElementById('wsim-styles')) return;
    const el = document.createElement('style');
    el.id = 'wsim-styles';
    el.textContent = CSS;
    document.head.appendChild(el);
  }

  function options(values, selected) {
    return values.map(function (v) {
      return '<option value="' + v + '"' + (v === selected ? ' selected' : '') + '>' + v + ' %</option>';
    }).join('');
  }

  function markup(t) {
    const hasContact = typeof window.WASABI_SIM_CONTACT === 'function';
    return '' +
      '<div class="wsim-modal" role="dialog" aria-modal="true" aria-labelledby="wsim-title">' +
        '<div class="wsim-head">' +
          '<h2 class="wsim-title" id="wsim-title">' + t.title + '</h2>' +
          '<button type="button" class="wsim-close" data-wsim-close aria-label="' + t.close + '">&times;</button>' +
        '</div>' +
        '<p class="wsim-intro">' + t.intro + '</p>' +

        '<div class="wsim-field">' +
          '<label for="wsim-revenue">' + t.revenue + '</label>' +
          '<input class="wsim-input" id="wsim-revenue" type="number" inputmode="numeric" ' +
            'min="0" step="100" value="' + DEFAULTS.revenue + '">' +
        '</div>' +

        '<div class="wsim-field">' +
          '<label for="wsim-conversion">' + t.conversion + '</label>' +
          '<select class="wsim-select" id="wsim-conversion">' +
            options(CONVERSION_OPTIONS, DEFAULTS.conversion) +
          '</select>' +
        '</div>' +

        '<div class="wsim-field">' +
          '<label for="wsim-commission">' + t.commission + '</label>' +
          '<select class="wsim-select" id="wsim-commission">' +
            options(COMMISSION_OPTIONS, DEFAULTS.commission) +
          '</select>' +
        '</div>' +

        '<div class="wsim-result" id="wsim-result">' +
          '<div class="wsim-result-label">' + t.result + '</div>' +
          '<div class="wsim-amount" id="wsim-amount">—</div>' +
          (SHOW_ANNUAL ? '<div class="wsim-annual" id="wsim-annual"></div>' : '') +
        '</div>' +
        '<p class="wsim-note" id="wsim-note"></p>' +

        '<button type="button" class="wsim-btn wsim-btn--primary" data-wsim-compute>' + t.compute + '</button>' +
        (hasContact ? '<button type="button" class="wsim-btn" data-wsim-contact>' + t.contact + '</button>' : '') +

        '<p class="wsim-disclaimer">' + t.disclaimer + '</p>' +
      '</div>';
  }

  function compute() {
    const t = T[lang];
    const revenue = Math.max(0, Number(document.getElementById('wsim-revenue').value) || 0);
    const conversion = Number(document.getElementById('wsim-conversion').value);
    const commission = Number(document.getElementById('wsim-commission').value);

    const lost = revenue * (commission / 100) * (conversion / 100);

    document.getElementById('wsim-amount').textContent = money(lost);
    if (SHOW_ANNUAL) {
      document.getElementById('wsim-annual').textContent =
        lost > 0 ? t.annual.replace('%s', money(lost * 12)) : '';
    }
    document.getElementById('wsim-result').classList.remove('is-stale');
    document.getElementById('wsim-note').textContent = '';
  }

  function markStale() {
    const t = T[lang];
    document.getElementById('wsim-result').classList.add('is-stale');
    document.getElementById('wsim-note').textContent = t.stale;
  }

  function onKeydown(e) {
    if (e.key === 'Escape') close();
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.removeEventListener('keydown', onKeydown);
    document.documentElement.style.overflow = '';
    const node = overlay;
    overlay = null;
    setTimeout(function () { node.remove(); }, 180);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function open(language, trigger) {
    if (overlay) return;
    lang = language === 'en' ? 'en' : 'fr';
    lastFocus = trigger || document.activeElement;

    injectStyles();

    overlay = document.createElement('div');
    overlay.className = 'wsim-overlay';
    overlay.innerHTML = markup(T[lang]);
    document.body.appendChild(overlay);
    document.documentElement.style.overflow = 'hidden';

    // Calcul de base affiché à l'ouverture.
    compute();

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.closest('[data-wsim-close]')) return close();
      if (e.target.closest('[data-wsim-compute]')) return compute();
      if (e.target.closest('[data-wsim-contact]')) {
        close();
        return window.WASABI_SIM_CONTACT();
      }
    });

    overlay.addEventListener('input', markStale);
    overlay.addEventListener('change', markStale);
    document.addEventListener('keydown', onKeydown);

    requestAnimationFrame(function () {
      overlay.classList.add('is-open');
      const first = document.getElementById('wsim-revenue');
      if (first) first.focus({ preventScroll: true });
    });
  }

  window.openWasabiSimulator = open;
  window.closeWasabiSimulator = close;

})();
