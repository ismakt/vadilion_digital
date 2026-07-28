'use strict';

const TRACKER_URL = 'https://script.google.com/macros/s/AKfycbyabu_opHDsFmzr8q-0o8eqbUMfPqdyt_8yGnkhNj9xSGuJSAaUWiNJJofK0wjcy3hcJw/exec';

/* ── Exclusion du trafic perso ──
   1) IP connue (ex: box maison) : à mettre à jour si ton IP change.
   2) Flag manuel, indépendant de l'IP : visite le site une fois avec ?notrack=1
      (depuis n'importe où — 4G, café, VPN...) et le flag reste actif tant que
      tu ne vides pas les données de site (localStorage), même après fermeture du navigateur. */
const EXCLUDED_IPS = [
  // 'xx.xx.xx.xx', // ← remplace par ton IP publique (whatismyip.com)
];

function isExcludedVisitor(ip) {
  try {
    if (new URLSearchParams(location.search).get('notrack') === '1') {
      localStorage.setItem('_sin_notrack', '1');
    }
    if (localStorage.getItem('_sin_notrack') === '1') return true;
  } catch (_) {}
  return EXCLUDED_IPS.includes(ip);
}

/* ════════════════════════════════════════
   SESSION
   ════════════════════════════════════════ */
function getSessionId() {
  try {
    let id = sessionStorage.getItem('_sin_sid');
    if (!id) {
      id = (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`);
      sessionStorage.setItem('_sin_sid', id);
    }
    return id;
  } catch (_) {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

const SESSION_ID = getSessionId();

const IS_NEW_SESSION = (() => {
  try {
    if (sessionStorage.getItem('_sin_seen')) return false;
    sessionStorage.setItem('_sin_seen', '1');
    return true;
  } catch (_) {
    return true;
  }
})();

/* ── Persist device/geo profile once per session (avoid re-fetching ipapi/ip-api on every page nav) ── */
function getCachedProfile() {
  try {
    const raw = sessionStorage.getItem('_sin_profile');
    return raw ? JSON.parse(raw) : null;
  } catch (_) { return null; }
}
function setCachedProfile(profile) {
  try { sessionStorage.setItem('_sin_profile', JSON.stringify(profile)); } catch (_) {}
}

/* ── Bot detection ── */
function detectBot() {
  const reasons = [];
  if (navigator.webdriver)                                    reasons.push('webdriver');
  if ((navigator.plugins?.length ?? 1) === 0)                reasons.push('no-plugins');
  if ((navigator.languages?.length ?? 1) === 0)              reasons.push('no-languages');
  if (!window.chrome && /Chrome/.test(navigator.userAgent))  reasons.push('fake-chrome');
  if (document.documentElement.getAttribute('selenium'))     reasons.push('selenium');
  if (window._phantom || window.callPhantom)                 reasons.push('phantomjs');
  if (/HeadlessChrome/.test(navigator.userAgent))            reasons.push('headless-chrome');
  if (/Puppeteer|puppeteer/.test(navigator.userAgent))       reasons.push('puppeteer');
  return reasons;
}

/* ── Parse UA ── */
function parseBrowser(ua) {
  if (ua.includes('Edg'))     return 'Edge';
  if (ua.includes('Chrome'))  return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari'))  return 'Safari';
  return 'Autre';
}

function parseOS(ua) {
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac'))     return 'MacOS';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  if (ua.includes('Linux'))   return 'Linux';
  return 'Autre';
}

/* ════════════════════════════════════════
   TRANSPORT (batched, beacon-first)
   ════════════════════════════════════════ */
let TRACKING_DISABLED = isExcludedVisitor(); // catches the manual flag immediately; IP check happens once profile is known

function send(payload, preferBeacon = true) {
  if (TRACKING_DISABLED) return;
  const body = JSON.stringify(payload);
  if (preferBeacon) {
    try {
      const blob = new Blob([body], { type: 'text/plain' });
      if (navigator.sendBeacon(TRACKER_URL, blob)) return;
    } catch (_) {}
  }
  fetch(TRACKER_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain' },
    body,
    keepalive: true,
  }).catch(() => {});
}

const eventQueue = [];
const FLUSH_THRESHOLD = 5; // send early if a burst of events happens (e.g. rapid clicks/nav)

function queueEvent(name, meta = {}) {
  if (TRACKING_DISABLED) return;
  eventQueue.push({ ts: Date.now(), name, meta, url: location.pathname + location.search });
  if (eventQueue.length >= FLUSH_THRESHOLD) flushEvents();
}

function flushEvents(preferBeacon = true) {
  if (!eventQueue.length) return;
  const batch = eventQueue.splice(0, eventQueue.length);
  send({ type: 'events', sessionId: SESSION_ID, events: batch }, preferBeacon);
}

/* Public API — call this from the rest of the Smart-In app at real interaction points:
   window.SmartInTracker.track('report_generated', { commune: 'Ixelles', theme: 'Revenu moyen 2023' });
   window.SmartInTracker.track('tier_upgrade_click');
   window.SmartInTracker.track('theme_selected', { theme: 'Revenu moyen 2023' });
   window.SmartInTracker.track('search', { query: 'Ixelles' });
*/
window.SmartInTracker = {
  track: queueEvent,
  sessionId: SESSION_ID,
};

/* ════════════════════════════════════════
   MAIN
   ════════════════════════════════════════ */
(async function initTracking() {

  const sessionStart = Date.now();
  const ua           = navigator.userAgent;
  const botReasons    = detectBot();

  /* ── Behaviour counters (reset per page view, flushed as 'engagement' events) ── */
  const beh = {
    maxScroll: 0, clickCount: 0, rightClicks: 0, copyAttempts: 0, devToolsKeys: [],
  };

  window.addEventListener('scroll', () => {
    const pct = Math.round(
      (window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)) * 100
    );
    if (pct > beh.maxScroll) beh.maxScroll = pct;
  }, { passive: true });

  document.addEventListener('click',       () => beh.clickCount++);
  document.addEventListener('contextmenu', () => beh.rightClicks++);
  document.addEventListener('copy',        () => beh.copyAttempts++);

  document.addEventListener('keydown', e => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'U'].includes(e.key.toUpperCase())) ||
      (e.ctrlKey && e.key.toUpperCase() === 'U')
    ) {
      beh.devToolsKeys.push(e.key === 'F12' ? 'F12' : `Ctrl+Shift+${e.key.toUpperCase()}`);
    }
  });

  function engagementSnapshot() {
    return {
      maxScroll: beh.maxScroll + '%',
      clickCount: beh.clickCount,
      rightClicks: beh.rightClicks,
      copyAttempts: beh.copyAttempts,
      devToolsKeys: beh.devToolsKeys.length ? beh.devToolsKeys.join(', ') : 'aucun',
      accessLevel: (() => { try { return window.currentAccess?.level || ''; } catch (_) { return ''; } })(),
      lastTheme:   (() => { try { return window.activeTheme || ''; } catch (_) { return ''; } })(),
      sessionDuration: Math.round((Date.now() - sessionStart) / 1000) + 's',
    };
  }

  /* ── Build (or reuse cached) device/geo profile — fetched ONCE per session, not per page ── */
  let profile = getCachedProfile();

  if (!profile) {
    const perf = performance.getEntriesByType('navigation')[0];

    profile = {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ip: '', city: '', region: '', country: '', org: '', isp: '', zip: '',
      latitude: '', longitude: '',
      deviceType: navigator.maxTouchPoints > 0 ? 'mobile/tablet' : 'desktop',
      cpuCores: navigator.hardwareConcurrency || '',
      memory: navigator.deviceMemory || '',
      touchPoints: navigator.maxTouchPoints || '',
      connectionType: '', connectionSpeed: '', connectionRtt: '', dataSaver: '',
      batteryLevel: '', batteryCharging: '',
      cookiesEnabled: navigator.cookieEnabled,
      language: navigator.language,
      languages: navigator.languages?.join(', ') || '',
      platform: navigator.platform,
      browser: parseBrowser(ua),
      os: parseOS(ua),
      userAgent: ua,
      screenWidth: screen.width,
      screenHeight: screen.height,
      referrer: document.referrer || '',
      colorScheme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      pageLoadTime: perf ? Math.round(perf.loadEventEnd - perf.startTime) + 'ms' : '',
      domReadyTime: perf ? Math.round(perf.domContentLoadedEventEnd - perf.startTime) + 'ms' : '',
      isBot: botReasons.length ? botReasons.join(', ') : 'non',
    };

    const [ipapiRes, ipApiRes] = await Promise.allSettled([
      fetch('https://ipapi.co/json/').then(r => r.json()),
      fetch('https://ip-api.com/json/?fields=status,country,regionName,city,zip,lat,lon,isp,org,query').then(r => r.json()),
    ]);

    if (ipapiRes.status === 'fulfilled') {
      const d = ipapiRes.value;
      Object.assign(profile, {
        ip: d.ip || '', city: d.city || '', region: d.region || '', country: d.country_name || '',
        org: d.org || '', isp: d.org || '', zip: d.postal || '',
        latitude: d.latitude || '', longitude: d.longitude || '',
      });
    }
    if (ipApiRes.status === 'fulfilled' && ipApiRes.value?.status === 'success') {
      const d = ipApiRes.value;
      Object.assign(profile, {
        ip: d.query || profile.ip, city: d.city || profile.city, region: d.regionName || profile.region,
        country: d.country || profile.country, org: d.org || profile.org, isp: d.isp || profile.isp,
        zip: d.zip || profile.zip, latitude: d.lat || profile.latitude, longitude: d.lon || profile.longitude,
      });
    }

    try {
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (conn) {
        profile.connectionType = conn.type || '';
        profile.connectionSpeed = conn.downlink || '';
        profile.connectionRtt = conn.rtt || '';
        profile.dataSaver = conn.saveData ?? '';
      }
    } catch (_) {}

    try {
      const bat = await navigator.getBattery();
      profile.batteryLevel = Math.round(bat.level * 100) + '%';
      profile.batteryCharging = bat.charging ? 'oui' : 'non';
    } catch (_) {}

    setCachedProfile(profile);
  }

  if (!TRACKING_DISABLED) TRACKING_DISABLED = isExcludedVisitor(profile.ip);

  /* ── session_start: sent once, ties profile to sessionId ── */
  if (IS_NEW_SESSION) {
    send({
      type: 'session_start',
      sessionId: SESSION_ID,
      timestamp: new Date().toLocaleString('fr-BE', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
      }),
      url: location.href,
      profile,
    });
  } else {
    // page_view within an existing session — cheap, no profile refetch
    queueEvent('page_view', { url: location.pathname });
  }

  /* ── Heartbeat: periodic engagement snapshot while tab is visible ── */
  const HEARTBEAT_MS = 20000;
  const heartbeat = setInterval(() => {
    if (TRACKING_DISABLED) { clearInterval(heartbeat); return; }
    if (document.visibilityState === 'visible') {
      queueEvent('engagement', engagementSnapshot());
      flushEvents(); // heartbeat ticks are a good natural flush point
    }
  }, HEARTBEAT_MS);

  /* ── Reliable end-of-session capture: visibilitychange + pagehide cover mobile
         (beforeunload is unreliable on iOS Safari / bfcache) ── */
  let ended = false;
  function endSession(reason) {
    if (ended) return;
    ended = true;
    clearInterval(heartbeat);
    queueEvent('session_end', { ...engagementSnapshot(), reason });
    flushEvents();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') endSession('hidden');
  });
  window.addEventListener('pagehide', () => endSession('pagehide'));
  window.addEventListener('beforeunload', () => endSession('beforeunload'));

})();
