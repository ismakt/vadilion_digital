'use strict';

/* ============================================================
   ILLUSTRATIONS — SVG inline, aucune image externe.
   ------------------------------------------------------------
   Chaque clé est référencée par le champ `art` d'une solution
   (solutions.js) ou d'une réalisation (works.js).

   Contraintes pour en ajouter une :
     - viewBox="0 0 320 200" et preserveAspectRatio="xMidYMid slice"
     - palette : or #c9a24d / #d9b56b, neutres #171310 → #4a4238
     - pas de texte (impossible à traduire), pas de dégradé lourd
   ============================================================ */

const ART = {

  /* Accueil — écran de données + application mobile + repère */
  hero: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g stroke="#242019" stroke-width="1"><path d="M0 46h320M0 92h320M0 138h320M64 0v200M128 0v200M192 0v200M256 0v200"/></g>'
    + '<rect x="18" y="26" width="150" height="96" rx="10" fill="#111" stroke="#332c22"/>'
    + '<rect x="18" y="26" width="150" height="17" rx="10" fill="#171310"/>'
    + '<g fill="#c9a24d"><rect x="30" y="86" width="16" height="24" rx="3" opacity=".35"/>'
    + '<rect x="54" y="72" width="16" height="38" rx="3" opacity=".5"/>'
    + '<rect x="78" y="60" width="16" height="50" rx="3" opacity=".85"/>'
    + '<rect x="102" y="78" width="16" height="32" rx="3" opacity=".4"/>'
    + '<rect x="126" y="66" width="16" height="44" rx="3" opacity=".6"/></g>'
    + '<rect x="188" y="52" width="76" height="122" rx="13" fill="#111" stroke="#332c22"/>'
    + '<rect x="198" y="70" width="56" height="26" rx="7" fill="#171310" stroke="#3a3128"/>'
    + '<rect x="206" y="80" width="30" height="4" rx="2" fill="#4a4238"/>'
    + '<rect x="198" y="104" width="56" height="26" rx="7" fill="#171310" stroke="#3a3128"/>'
    + '<rect x="206" y="114" width="22" height="4" rx="2" fill="#4a4238"/>'
    + '<rect x="198" y="138" width="56" height="22" rx="7" fill="#c9a24d" opacity=".85"/>'
    + '<g transform="translate(276 140)"><path d="M0-16c-5 0-9 4-9 9 0 7 9 16 9 16s9-9 9-16c0-5-4-9-9-9z" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.5"/>'
    + '<circle cy="-7" r="3" fill="#d9b56b"/></g></svg>',

  /* Business essentials — site, application, automatisation, reporting */
  essentials: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<rect x="26" y="28" width="140" height="84" rx="10" fill="#111" stroke="#332c22"/>'
    + '<rect x="26" y="28" width="140" height="15" rx="10" fill="#171310"/>'
    + '<circle cx="38" cy="35.5" r="2.4" fill="#3f382e"/><circle cx="47" cy="35.5" r="2.4" fill="#3f382e"/>'
    + '<rect x="38" y="56" width="74" height="6" rx="3" fill="#4a4238"/>'
    + '<rect x="38" y="70" width="52" height="5" rx="2.5" fill="#332c22"/>'
    + '<rect x="38" y="86" width="46" height="14" rx="5" fill="#c9a24d" opacity=".85"/>'
    + '<rect x="186" y="28" width="60" height="96" rx="11" fill="#111" stroke="#332c22"/>'
    + '<rect x="196" y="44" width="40" height="18" rx="5" fill="#171310" stroke="#3a3128"/>'
    + '<rect x="196" y="68" width="40" height="18" rx="5" fill="#171310" stroke="#3a3128"/>'
    + '<rect x="196" y="92" width="40" height="14" rx="5" fill="#c9a24d" opacity=".7"/>'
    + '<g transform="translate(276 62)" stroke="#d9b56b" stroke-width="1.6" fill="none" opacity=".8">'
    + '<circle r="10"/><circle r="3.4"/>'
    + '<path d="M0-16v5M0 11v5M-16 0h5M11 0h5M-11-11l3.5 3.5M8 8l3 3M11-11l-3.5 3.5M-8 8l-3 3"/></g>'
    + '<g fill="#c9a24d"><rect x="34" y="152" width="20" height="22" rx="3" opacity=".3"/>'
    + '<rect x="62" y="140" width="20" height="34" rx="3" opacity=".5"/>'
    + '<rect x="90" y="128" width="20" height="46" rx="3" opacity=".85"/>'
    + '<rect x="118" y="146" width="20" height="28" rx="3" opacity=".35"/></g>'
    + '<polyline points="168,166 196,150 224,156 258,132" fill="none" stroke="#4a4238" stroke-width="1.8" stroke-linecap="round"/></svg>',

  /* Location intelligence — quartiers + rayons autour d'une adresse */
  locality: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g stroke="#2a2620" stroke-width="1" fill="none"><path d="M0 58h320M0 104h320M0 150h320M74 0v200M148 0v200M222 0v200M278 0v200"/></g>'
    + '<rect x="74" y="58" width="74" height="46" fill="#c9a24d" opacity=".4"/>'
    + '<rect x="148" y="58" width="74" height="46" fill="#c9a24d" opacity=".2"/>'
    + '<rect x="148" y="104" width="74" height="46" fill="#c9a24d" opacity=".55"/>'
    + '<rect x="74" y="104" width="74" height="46" fill="#c9a24d" opacity=".12"/>'
    + '<rect x="222" y="104" width="56" height="46" fill="#c9a24d" opacity=".26"/>'
    + '<g fill="none" stroke="#d9b56b" opacity=".55"><circle cx="160" cy="104" r="30" stroke-width="1.2"/>'
    + '<circle cx="160" cy="104" r="52" stroke-width="1" opacity=".6"/>'
    + '<circle cx="160" cy="104" r="74" stroke-width="1" opacity=".3"/></g>'
    + '<g transform="translate(160 104)"><path d="M0-20c-6 0-11 5-11 11 0 9 11 20 11 20s11-11 11-20c0-6-5-11-11-11z" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.6"/>'
    + '<circle cy="-9" r="3.8" fill="#d9b56b"/></g>'
    + '<g fill="#4a4238"><circle cx="102" cy="76" r="3"/><circle cx="240" cy="72" r="3"/>'
    + '<circle cx="214" cy="164" r="3"/><circle cx="96" cy="150" r="3"/></g></svg>',

  /* Smart-In — carte choroplèthe */
  map: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g stroke="#2a2620" stroke-width="1" fill="none"><path d="M0 60h320M0 110h320M0 155h320M70 0v200M145 0v200M215 0v200M270 0v200"/></g>'
    + '<rect x="70" y="60" width="75" height="50" fill="#c9a24d" opacity=".42"/>'
    + '<rect x="145" y="60" width="70" height="50" fill="#c9a24d" opacity=".24"/>'
    + '<rect x="145" y="110" width="70" height="45" fill="#c9a24d" opacity=".55"/>'
    + '<rect x="215" y="110" width="55" height="45" fill="#c9a24d" opacity=".16"/>'
    + '<rect x="70" y="110" width="75" height="45" fill="#c9a24d" opacity=".1"/>'
    + '<rect x="215" y="60" width="55" height="50" fill="#c9a24d" opacity=".3"/>'
    + '<g transform="translate(178 118)"><path d="M0-22c-7 0-13 6-13 13 0 10 13 22 13 22s13-12 13-22c0-7-6-13-13-13z" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.6"/>'
    + '<circle cy="-9" r="4.2" fill="#d9b56b"/></g></svg>',

  /* Wasabi — écran de commande */
  order: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<rect x="96" y="26" width="128" height="170" rx="16" fill="#111" stroke="#2f2a22" stroke-width="1.4"/>'
    + '<rect x="132" y="36" width="56" height="5" rx="2.5" fill="#2a2620"/>'
    + '<rect x="110" y="56" width="100" height="30" rx="8" fill="#171310" stroke="#3a3128"/>'
    + '<rect x="119" y="66" width="46" height="4.5" rx="2" fill="#4a4238"/><rect x="119" y="75" width="30" height="4.5" rx="2" fill="#3a332b"/>'
    + '<rect x="110" y="94" width="100" height="30" rx="8" fill="#171310" stroke="#3a3128"/>'
    + '<rect x="119" y="104" width="56" height="4.5" rx="2" fill="#4a4238"/><rect x="119" y="113" width="24" height="4.5" rx="2" fill="#3a332b"/>'
    + '<rect x="110" y="134" width="100" height="30" rx="9" fill="#c9a24d" opacity=".9"/>'
    + '<path d="M146 149l6 6 12-12" stroke="#100c04" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<circle cx="252" cy="70" r="17" fill="none" stroke="#c9a24d" stroke-width="1.3" opacity=".5"/>'
    + '<circle cx="252" cy="70" r="28" fill="none" stroke="#c9a24d" stroke-width="1.1" opacity=".22"/></svg>',

  /* Auto-Perfs — annonces suivies et courbe de prix */
  auto: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g fill="#171310" stroke="#2f2a22"><rect x="28" y="40" width="150" height="26" rx="6"/><rect x="28" y="76" width="150" height="26" rx="6"/>'
    + '<rect x="28" y="112" width="150" height="26" rx="6"/><rect x="28" y="148" width="150" height="26" rx="6"/></g>'
    + '<g fill="#3f382e"><rect x="38" y="50" width="70" height="5" rx="2.5"/><rect x="38" y="86" width="88" height="5" rx="2.5"/>'
    + '<rect x="38" y="122" width="60" height="5" rx="2.5"/><rect x="38" y="158" width="80" height="5" rx="2.5"/></g>'
    + '<g fill="#c9a24d" opacity=".8"><rect x="140" y="48" width="28" height="10" rx="5"/><rect x="140" y="84" width="28" height="10" rx="5"/>'
    + '<rect x="140" y="120" width="28" height="10" rx="5"/><rect x="140" y="156" width="28" height="10" rx="5"/></g>'
    + '<polyline points="205,150 232,128 258,136 286,74" fill="none" stroke="#d9b56b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<g fill="#d9b56b"><circle cx="205" cy="150" r="3"/><circle cx="232" cy="128" r="3"/><circle cx="258" cy="136" r="3"/><circle cx="286" cy="74" r="4"/></g></svg>',

  /* Zus Coffee — tableau de bord */
  dash: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<rect x="26" y="26" width="86" height="52" rx="9" fill="#171310" stroke="#2f2a22"/>'
    + '<rect x="38" y="40" width="30" height="5" rx="2.5" fill="#3f382e"/><rect x="38" y="53" width="52" height="12" rx="3" fill="#c9a24d" opacity=".85"/>'
    + '<rect x="124" y="26" width="86" height="52" rx="9" fill="#171310" stroke="#2f2a22"/>'
    + '<rect x="136" y="40" width="38" height="5" rx="2.5" fill="#3f382e"/><rect x="136" y="53" width="40" height="12" rx="3" fill="#c9a24d" opacity=".45"/>'
    + '<rect x="222" y="26" width="72" height="52" rx="9" fill="#171310" stroke="#2f2a22"/>'
    + '<rect x="234" y="40" width="30" height="5" rx="2.5" fill="#3f382e"/><rect x="234" y="53" width="34" height="12" rx="3" fill="#c9a24d" opacity=".28"/>'
    + '<g fill="#c9a24d"><rect x="34" y="140" width="26" height="34" rx="4" opacity=".3"/><rect x="72" y="120" width="26" height="54" rx="4" opacity=".45"/>'
    + '<rect x="110" y="132" width="26" height="42" rx="4" opacity=".35"/><rect x="148" y="98" width="26" height="76" rx="4" opacity=".85"/>'
    + '<rect x="186" y="126" width="26" height="48" rx="4" opacity=".4"/><rect x="224" y="112" width="26" height="62" rx="4" opacity=".55"/>'
    + '<rect x="262" y="146" width="26" height="28" rx="4" opacity=".25"/></g></svg>',

  /* Revolut — courbe de rétention */
  churn: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g stroke="#242019" stroke-width="1"><path d="M26 60h268M26 105h268M26 150h268"/></g>'
    + '<path d="M26 62 C70 66, 96 84, 130 92 S196 118, 230 140 294 166 294 166" fill="none" stroke="#d9b56b" stroke-width="2.4" stroke-linecap="round"/>'
    + '<path d="M26 62 C70 66, 96 84, 130 92 S196 118, 230 140 294 166 294 166 L294 186 L26 186 Z" fill="#c9a24d" opacity=".08"/>'
    + '<path d="M26 84 C74 88, 110 96, 150 100 S230 108, 294 112" fill="none" stroke="#4a4238" stroke-width="1.8" stroke-dasharray="5 5"/>'
    + '<circle cx="230" cy="140" r="4.5" fill="#0d0d0d" stroke="#d9b56b" stroke-width="2"/>'
    + '<circle cx="230" cy="140" r="12" fill="none" stroke="#c9a24d" stroke-width="1" opacity=".35"/></svg>'
};

/** Renvoie l'illustration demandée, ou celle de l'accueil en secours. */
function getArt(key) {
  return ART[key] || ART.hero;
}

window.ART = Object.freeze(ART);
window.getArt = getArt;
