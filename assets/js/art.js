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

  /* Accueil — empilement isométrique des 4 offres : interface, automatisation, données, territoire */
  hero: '<svg class="va-hero" viewBox="0 0 320 220" preserveAspectRatio="xMidYMid meet" aria-hidden="true">'
    + '<defs><linearGradient id="vaPl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f1a12"/><stop offset="1" stop-color="#0e0d0b"/></linearGradient>'
    + '<linearGradient id="vaPg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9b56b"/><stop offset="1" stop-color="#8a6b2c"/></linearGradient>'
    + '<radialGradient id="vaGl"><stop offset="0" stop-color="#c9a24d" stop-opacity=".35"/><stop offset="1" stop-color="#c9a24d" stop-opacity="0"/></radialGradient></defs>'
    + '<ellipse cx="160" cy="150" rx="130" ry="46" fill="url(#vaGl)"/>'
    + '<g class="va-orb" fill="none" stroke="#c9a24d"><ellipse cx="160" cy="112" rx="138" ry="52" stroke-opacity=".18" stroke-dasharray="2 6"/>'
    + '<circle cx="298" cy="112" r="2.5" fill="#d9b56b" stroke="none"/><circle cx="22" cy="112" r="1.8" fill="#d9b56b" stroke="none" opacity=".6"/></g>'
    + '<g class="va-fl va-fl4"><path d="M160 150 248 172 160 194 72 172Z" fill="url(#vaPl)" stroke="#3a3128"/>'
    + '<g stroke="#4a4238" stroke-width=".8"><path d="M116 161 204 183M138 155.5 226 177.5M138 188.5 226 166.5M116 183 204 161"/></g>'
    + '<path d="M182 171c0-4-3-6-6-6s-6 2-6 6c0 5 6 10 6 10s6-5 6-10z" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.2"/></g>'
    + '<g class="va-fl va-fl3"><path d="M160 118 248 140 160 162 72 140Z" fill="url(#vaPl)" stroke="#3a3128"/>'
    + '<g fill="#c9a24d"><path d="M118 140v-8l8 2v8Z" opacity=".35"/><path d="M134 144v-16l8 2v16Z" opacity=".55"/><path d="M150 148v-24l8 2v24Z" opacity=".9"/><path d="M166 152v-14l8 2v14Z" opacity=".45"/></g>'
    + '<polyline points="186,146 200,138 214,142 230,128" fill="none" stroke="#d9b56b" stroke-width="1.4" stroke-linecap="round"/></g>'
    + '<g class="va-fl va-fl2"><path d="M160 86 248 108 160 130 72 108Z" fill="url(#vaPl)" stroke="#3a3128"/>'
    + '<g fill="none" stroke="#d9b56b" stroke-width="1.2" opacity=".85"><circle cx="128" cy="108" r="7"/><circle cx="128" cy="108" r="2.5"/>'
    + '<path d="M140 108h24l8-6h22" stroke-dasharray="3 3"/><circle cx="198" cy="102" r="3" fill="#d9b56b"/></g></g>'
    + '<g class="va-fl va-fl1"><path d="M160 54 248 76 160 98 72 76Z" fill="url(#vaPl)" stroke="#c9a24d" stroke-opacity=".55"/>'
    + '<path d="M118 76 160 65.5 202 76 160 86.5Z" fill="#111" stroke="#3a3128"/>'
    + '<path d="M138 76 160 70.5 182 76 160 81.5Z" fill="url(#vaPg)" opacity=".85"/>'
    + '<path d="M210 80 230 75" stroke="#4a4238" stroke-width="3" stroke-linecap="round"/></g>'
    + '<g stroke="#c9a24d" stroke-width=".8" stroke-opacity=".35"><path d="M72 76v96M248 76v96"/></g>'
    + '<circle class="va-pulse" cx="160" cy="40" r="3" fill="#d9b56b"/><path d="M160 43v11" stroke="#d9b56b" stroke-width=".8" opacity=".5"/>'
    + '</svg>',

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

  /* Bullet Train — course entre une boutique et un client */
  delivery: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g stroke="#242019" stroke-width="1"><path d="M0 50h320M0 100h320M0 150h320M80 0v200M160 0v200M240 0v200"/></g>'
    + '<path d="M84 140C126 140 134 96 178 92S246 66 272 60" fill="none" stroke="#4a4238" stroke-width="1.8" stroke-dasharray="6 6" stroke-linecap="round"/>'
    + '<path d="M84 140C126 140 134 96 178 92" fill="none" stroke="#d9b56b" stroke-width="2.4" stroke-linecap="round"/>'
    + '<g transform="translate(28 118)"><rect x="0" y="0" width="48" height="32" rx="4" fill="#111" stroke="#332c22"/>'
    + '<path d="M-2 0h52l-7-13H5z" fill="#c9a24d" opacity=".8"/>'
    + '<rect x="8" y="12" width="13" height="20" rx="2" fill="#171310" stroke="#3a3128"/>'
    + '<rect x="28" y="12" width="12" height="9" rx="2" fill="#171310" stroke="#3a3128"/></g>'
    + '<g transform="translate(210 120)"><rect x="0" y="0" width="30" height="26" rx="3" fill="#171310" stroke="#3a3128"/>'
    + '<path d="M15 0v26M0 9h30" stroke="#c9a24d" stroke-width="1.6" opacity=".7"/></g>'
    + '<circle cx="178" cy="92" r="6" fill="#0d0d0d" stroke="#d9b56b" stroke-width="2"/>'
    + '<circle cx="178" cy="92" r="15" fill="none" stroke="#c9a24d" stroke-width="1" opacity=".35"/>'
    + '<g transform="translate(272 60)"><path d="M0-18c-6 0-11 5-11 11 0 8 11 18 11 18s11-10 11-18c0-6-5-11-11-11z" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.6"/>'
    + '<circle cy="-7" r="3.6" fill="#d9b56b"/></g></svg>',

  /* Dolce — établissement et calendrier de réservation */
  booking: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<rect x="26" y="34" width="96" height="140" rx="8" fill="#111" stroke="#332c22"/>'
    + '<g fill="#171310" stroke="#3a3128">'
    + '<rect x="40" y="50" width="20" height="16" rx="2"/><rect x="70" y="50" width="20" height="16" rx="2"/>'
    + '<rect x="40" y="78" width="20" height="16" rx="2"/>'
    + '<rect x="40" y="106" width="20" height="16" rx="2"/><rect x="70" y="106" width="20" height="16" rx="2"/></g>'
    + '<rect x="70" y="78" width="20" height="16" rx="2" fill="#c9a24d" opacity=".8"/>'
    + '<rect x="58" y="140" width="32" height="34" rx="4" fill="#171310" stroke="#3a3128"/>'
    + '<rect x="152" y="42" width="142" height="118" rx="10" fill="#111" stroke="#332c22"/>'
    + '<rect x="152" y="42" width="142" height="20" rx="10" fill="#171310"/>'
    + '<rect x="166" y="50" width="34" height="5" rx="2.5" fill="#3f382e"/>'
    + '<g fill="#171310" stroke="#3a3128">'
    + '<rect x="168" y="76" width="18" height="14" rx="3"/><rect x="192" y="76" width="18" height="14" rx="3"/>'
    + '<rect x="216" y="76" width="18" height="14" rx="3"/><rect x="240" y="76" width="18" height="14" rx="3"/>'
    + '<rect x="264" y="76" width="18" height="14" rx="3"/>'
    + '<rect x="168" y="100" width="18" height="14" rx="3"/><rect x="192" y="100" width="18" height="14" rx="3"/>'
    + '<rect x="240" y="100" width="18" height="14" rx="3"/><rect x="264" y="100" width="18" height="14" rx="3"/>'
    + '<rect x="168" y="124" width="18" height="14" rx="3"/><rect x="192" y="124" width="18" height="14" rx="3"/>'
    + '<rect x="216" y="124" width="18" height="14" rx="3"/><rect x="240" y="124" width="18" height="14" rx="3"/>'
    + '<rect x="264" y="124" width="18" height="14" rx="3"/></g>'
    + '<rect x="216" y="100" width="18" height="14" rx="3" fill="#c9a24d" opacity=".9"/>'
    + '<circle cx="225" cy="107" r="14" fill="none" stroke="#c9a24d" stroke-width="1" opacity=".35"/></svg>',

  /* Revolut — courbe de rétention */
  churn: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g stroke="#242019" stroke-width="1"><path d="M26 60h268M26 105h268M26 150h268"/></g>'
    + '<path d="M26 62 C70 66, 96 84, 130 92 S196 118, 230 140 294 166 294 166" fill="none" stroke="#d9b56b" stroke-width="2.4" stroke-linecap="round"/>'
    + '<path d="M26 62 C70 66, 96 84, 130 92 S196 118, 230 140 294 166 294 166 L294 186 L26 186 Z" fill="#c9a24d" opacity=".08"/>'
    + '<path d="M26 84 C74 88, 110 96, 150 100 S230 108, 294 112" fill="none" stroke="#4a4238" stroke-width="1.8" stroke-dasharray="5 5"/>'
    + '<circle cx="230" cy="140" r="4.5" fill="#0d0d0d" stroke="#d9b56b" stroke-width="2"/>'
    + '<circle cx="230" cy="140" r="12" fill="none" stroke="#c9a24d" stroke-width="1" opacity=".35"/></svg>',

  /* Solutions sur mesure — flux automatisé entre outils */
  flow: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g fill="#111" stroke="#332c22"><rect x="30" y="60" width="70" height="80" rx="10"/><rect x="220" y="60" width="70" height="80" rx="10"/></g>'
    + '<g fill="#4a4238"><rect x="42" y="76" width="44" height="5" rx="2.5"/><rect x="42" y="90" width="34" height="5" rx="2.5"/><rect x="42" y="104" width="40" height="5" rx="2.5"/><rect x="232" y="76" width="44" height="5" rx="2.5"/><rect x="232" y="90" width="30" height="5" rx="2.5"/></g>'
    + '<rect x="232" y="112" width="46" height="16" rx="5" fill="#c9a24d" opacity=".85"/>'
    + '<circle cx="160" cy="100" r="24" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.5"/>'
    + '<path d="M152 100h16m-5-5 5 5-5 5" fill="none" stroke="#d9b56b" stroke-width="2" stroke-linecap="round"/>'
    + '<path d="M100 100h36M184 100h36" stroke="#c9a24d" stroke-width="1.4" stroke-dasharray="4 4"/></svg>',

  /* City Eats — plat fait maison + repère de quartier */
  homefood: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g stroke="#242019"><path d="M0 60h320M0 140h320M90 0v200M230 0v200"/></g>'
    + '<ellipse cx="160" cy="118" rx="70" ry="18" fill="#111" stroke="#332c22"/>'
    + '<path d="M100 112a60 40 0 0 1 120 0z" fill="#171310" stroke="#d9b56b" stroke-width="1.4"/>'
    + '<circle cx="160" cy="70" r="4" fill="#d9b56b"/>'
    + '<path d="M140 52c4-8-4-12 0-20M160 46c4-8-4-12 0-20M180 52c4-8-4-12 0-20" fill="none" stroke="#4a4238" stroke-width="1.4" stroke-linecap="round"/>'
    + '<g transform="translate(270 70)"><path d="M0-14c-5 0-9 4-9 9 0 6 9 14 9 14s9-8 9-14c0-5-4-9-9-9z" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.4"/><circle cy="-5" r="3" fill="#d9b56b"/></g></svg>',

  /* 24/7 Shop — vitrine + horloge */
  shop: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<rect x="60" y="70" width="140" height="100" rx="8" fill="#111" stroke="#332c22"/>'
    + '<path d="M54 70l14-28h124l14 28z" fill="#171310" stroke="#c9a24d" stroke-width="1.2"/>'
    + '<rect x="78" y="96" width="44" height="74" rx="4" fill="#171310" stroke="#3a3128"/>'
    + '<g fill="#4a4238"><rect x="138" y="96" width="44" height="6" rx="3"/><rect x="138" y="110" width="30" height="6" rx="3"/></g>'
    + '<g transform="translate(244 90)"><circle r="30" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.5"/><path d="M0-18V0l12 8" fill="none" stroke="#d9b56b" stroke-width="2" stroke-linecap="round"/></g></svg>',

  /* TuneYourCar — silhouette sportive */
  car: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<path d="M0 150h320" stroke="#242019"/>'
    + '<path d="M48 136l10-24 46-10 34-22h62l40 24 30 6c8 2 12 8 12 16v10z" fill="#111" stroke="#d9b56b" stroke-width="1.4" stroke-linejoin="round"/>'
    + '<path d="M144 86h52l28 18h-92z" fill="#171310" stroke="#3a3128"/>'
    + '<g fill="#0d0d0d" stroke="#c9a24d" stroke-width="1.6"><circle cx="98" cy="138" r="17"/><circle cx="234" cy="138" r="17"/></g>'
    + '<g fill="#4a4238"><circle cx="98" cy="138" r="6"/><circle cx="234" cy="138" r="6"/></g></svg>',

  /* Pièces auto — demande + offres concurrentes */
  parts: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g transform="translate(70 100)"><circle r="34" fill="#111" stroke="#332c22"/><circle r="22" fill="none" stroke="#d9b56b" stroke-width="1.4"/><circle r="7" fill="#c9a24d" opacity=".85"/>'
    + '<g fill="#4a4238"><circle cx="0" cy="-14" r="2.5"/><circle cx="14" cy="0" r="2.5"/><circle cx="0" cy="14" r="2.5"/><circle cx="-14" cy="0" r="2.5"/></g></g>'
    + '<g fill="#111" stroke="#332c22"><rect x="160" y="40" width="120" height="32" rx="8"/><rect x="160" y="84" width="120" height="32" rx="8" stroke="#d9b56b"/><rect x="160" y="128" width="120" height="32" rx="8"/></g>'
    + '<g fill="#4a4238"><rect x="172" y="53" width="50" height="6" rx="3"/><rect x="172" y="141" width="44" height="6" rx="3"/></g>'
    + '<rect x="172" y="97" width="56" height="6" rx="3" fill="#d9b56b"/>'
    + '<path d="M108 100h46M108 90l50-34M108 110l50 34" stroke="#3a3128" stroke-dasharray="3 4"/></svg>',

};

/** Renvoie l'illustration demandée, ou celle de l'accueil en secours. */
function getArt(key) {
  return ART[key] || ART.hero;
}

window.ART = Object.freeze(ART);
window.getArt = getArt;
