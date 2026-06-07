'use strict';

const TRACKER_URL = 'https://script.google.com/macros/s/AKfycbyqYpE-rTBtyVn0fdz2FfvmTWg8kYGqKxea5NWZExP6oFLtwfkHBaa9MRBZBI3DeN9BUg/exec';

/* ── Bot detection (non-blocking — just labels, doesn't stop execution) ── */
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

/* ── Send helper — used both mid-session and on close ── */
function sendPayload(data) {
  // navigator.sendBeacon requires a Blob with content-type for the Apps Script
  // to parse request body correctly (fetch no-cors doesn't send body on unload)
  try {
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    navigator.sendBeacon(TRACKER_URL, blob);
  } catch (_) {
    // Fallback for browsers without sendBeacon
    fetch(TRACKER_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      keepalive: true,
    }).catch(() => {});
  }
}

/* ════════════════════════════════════════
   MAIN — async IIFE so we can await
   ════════════════════════════════════════ */
(async function collectAndSendVisit() {

  const sessionStart = Date.now();
  const ua           = navigator.userAgent;
  const botReasons   = detectBot();

  /* ── Behaviour counters (shared object so both closures see live values) ── */
  const beh = {
    maxScroll:      0,
    clickCount:     0,
    rightClicks:    0,
    copyAttempts:   0,
    suspiciousKeys: [],
    devTools:       false,
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
      (e.ctrlKey && e.shiftKey && ['I','J','C','U'].includes(e.key.toUpperCase())) ||
      (e.ctrlKey && e.key.toUpperCase() === 'U')
    ) beh.suspiciousKeys.push(e.key === 'F12' ? 'F12' : `Ctrl+Shift+${e.key.toUpperCase()}`);
  });

  setInterval(() => {
    beh.devTools = window.outerWidth - window.innerWidth > 160 ||
                   window.outerHeight - window.innerHeight > 160;
  }, 2000);

  /* ── Static data snapshot ── */
  const perf = performance.getEntriesByType('navigation')[0];

  const data = {
    // Time
    timestamp:    new Date().toLocaleString('fr-BE', {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    }),
    timezone:     Intl.DateTimeFormat().resolvedOptions().timeZone,

    // Network (filled below)
    ip: '', city: '', region: '', country: '', org: '', isp: '', zip: '',
    latitude: '', longitude: '', accuracy: '',

    // Device
    deviceType:      navigator.maxTouchPoints > 0 ? 'mobile/tablet' : 'desktop',
    cpuCores:        navigator.hardwareConcurrency || '',
    memory:          navigator.deviceMemory        || '',
    touchPoints:     navigator.maxTouchPoints      || '',
    connectionType:  '', connectionSpeed: '', connectionRtt: '', dataSaver: '',
    batteryLevel:    '', batteryCharging:  '',

    // Browser
    cookiesEnabled: navigator.cookieEnabled,
    language:       navigator.language,
    languages:      navigator.languages?.join(', ') || '',
    platform:       navigator.platform,
    browser:        parseBrowser(ua),
    os:             parseOS(ua),
    userAgent:      ua,

    // Page
    screenWidth:   screen.width,
    screenHeight:  screen.height,
    windowWidth:   window.innerWidth,
    windowHeight:  window.innerHeight,
    referrer:      document.referrer || '',
    url:           window.location.href,
    colorScheme:   window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',

    // Performance
    pageLoadTime: perf ? Math.round(perf.loadEventEnd            - perf.startTime) + 'ms' : '',
    domReadyTime: perf ? Math.round(perf.domContentLoadedEventEnd - perf.startTime) + 'ms' : '',

    // App context
    accessLevel: '', accessLabel: '', lastTheme: '',

    // Bot
    isBot: botReasons.length ? botReasons.join(', ') : 'non',

    // Behaviour (filled at send time)
    maxScroll: '', clickCount: 0, rightClicks: 0,
    copyAttempts: 0, suspiciousKeys: '', devToolsDetected: false,
    sessionDuration: '',
  };

  /* ── App context (may not exist on this page) ── */
  try { data.accessLevel = window.currentAccess?.level || ''; } catch (_) {}
  try { data.accessLabel = window.currentAccess?.label || ''; } catch (_) {}
  try { data.lastTheme   = window.activeTheme          || ''; } catch (_) {}

  /* ── Network / Geo — parallel to save time ── */
  const [ipapiRes, ipApiRes] = await Promise.allSettled([
    fetch('https://ipapi.co/json/').then(r => r.json()),
    fetch('https://ip-api.com/json/?fields=status,country,regionName,city,zip,lat,lon,isp,org,query')
      .then(r => r.json()),
  ]);

  if (ipapiRes.status === 'fulfilled') {
    const d = ipapiRes.value;
    data.ip        = d.ip           || '';
    data.city      = d.city         || '';
    data.region    = d.region       || '';
    data.country   = d.country_name || '';
    data.org       = d.org          || '';
    data.isp       = d.org          || '';
    data.zip       = d.postal       || '';
    data.latitude  = d.latitude     || '';
    data.longitude = d.longitude    || '';
  }

  // ip-api can override with more precise values
  if (ipApiRes.status === 'fulfilled' && ipApiRes.value?.status === 'success') {
    const d = ipApiRes.value;
    data.ip        = d.query      || data.ip;
    data.city      = d.city       || data.city;
    data.region    = d.regionName || data.region;
    data.country   = d.country    || data.country;
    data.org       = d.org        || data.org;
    data.isp       = d.isp        || data.isp;
    data.zip       = d.zip        || data.zip;
    data.latitude  = d.lat        || data.latitude;
    data.longitude = d.lon        || data.longitude;
  }

  /* ── GPS (precise, optional) ── */
  await new Promise(resolve => {
    if (!navigator.geolocation) return resolve();
    navigator.geolocation.getCurrentPosition(
      pos => {
        data.latitude  = pos.coords.latitude;
        data.longitude = pos.coords.longitude;
        data.accuracy  = Math.round(pos.coords.accuracy) + 'm';
        resolve();
      },
      () => resolve(),
      { timeout: 8000, maximumAge: 0 }
    );
  });

  /* ── Connection info ── */
  try {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn) {
      data.connectionType  = conn.type     || '';
      data.connectionSpeed = conn.downlink || '';
      data.connectionRtt   = conn.rtt      || '';
      data.dataSaver       = conn.saveData ?? '';
    }
  } catch (_) {}

  /* ── Battery ── */
  try {
    const bat = await navigator.getBattery();
    data.batteryLevel    = Math.round(bat.level * 100) + '%';
    data.batteryCharging = bat.charging ? 'oui' : 'non';
  } catch (_) {}

  /* ── Snapshot behaviour then send ── */
  function applyBehaviour(d) {
    d.maxScroll        = beh.maxScroll + '%';
    d.clickCount       = beh.clickCount;
    d.rightClicks      = beh.rightClicks;
    d.copyAttempts     = beh.copyAttempts;
    d.suspiciousKeys   = beh.suspiciousKeys.join(', ') || 'aucun';
    d.devToolsDetected = beh.devTools ? 'oui' : 'non';
    try { d.lastTheme = window.activeTheme || ''; } catch (_) {}
  }

  applyBehaviour(data);
  sendPayload(data);

  /* ── Final send on page close ── */
  window.addEventListener('beforeunload', () => {
    data.sessionDuration = Math.round((Date.now() - sessionStart) / 1000) + 's';
    applyBehaviour(data);
    sendPayload(data);
  });

})();
