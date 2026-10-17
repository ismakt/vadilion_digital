'use strict';

/* ============================================================
   ILLUSTRATIONS — SVG inline, aucune image externe.
   ------------------------------------------------------------
   Chaque clé est référencée par le champ `art` d'une solution
   (solutions.js) ou d'une réalisation (works.js).

   Contraintes pour en ajouter une :
     - viewBox="0 0 320 200" et preserveAspectRatio="xMidYMid slice"
     - cadrage : réalisations en 2:1 (y 20 → 180 visible),
       solutions en 5:2 (y 36 → 164 visible)
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

  /* Business Essentials — site, carte de visite NFC, réseaux sociaux, fiche Google */
  essentials: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<ellipse cx="160" cy="150" rx="150" ry="26" fill="#c9a24d" opacity=".05"/>'
    + '<rect x="22" y="40" width="148" height="86" rx="9" fill="#111" stroke="#332c22"/>'
    + '<path d="M22 49a9 9 0 0 1 9-9h130a9 9 0 0 1 9 9v6H22z" fill="#171310"/>'
    + '<g fill="#3f382e"><circle cx="32" cy="47.5" r="2.2"/><circle cx="40" cy="47.5" r="2.2"/><circle cx="48" cy="47.5" r="2.2"/></g>'
    + '<rect x="34" y="66" width="64" height="6" rx="3" fill="#4a4238"/><rect x="34" y="78" width="48" height="4.5" rx="2.2" fill="#332c22"/><rect x="34" y="87" width="40" height="4.5" rx="2.2" fill="#332c22"/>'
    + '<rect x="34" y="101" width="42" height="12" rx="5" fill="#c9a24d" opacity=".9"/>'
    + '<rect x="112" y="64" width="46" height="50" rx="5" fill="#171310" stroke="#3a3128"/>'
    + '<path d="M116 110l12-15 9 9 7-6 10 12z" fill="#c9a24d" opacity=".45"/><circle cx="148" cy="75" r="4" fill="#d9b56b" opacity=".7"/>'
    + '<g transform="translate(36 128) rotate(-5)"><rect width="96" height="34" rx="5" fill="#15120e" stroke="#d9b56b" stroke-opacity=".55"/>'
    + '<circle cx="16" cy="17" r="8" fill="none" stroke="#c9a24d" stroke-width="1.3"/><path d="M16 12l4 5-4 5-4-5z" fill="#d9b56b"/>'
    + '<rect x="30" y="11" width="40" height="4.5" rx="2.2" fill="#4a4238"/><rect x="30" y="20" width="26" height="3.5" rx="1.7" fill="#332c22"/>'
    + '<path d="M80 12a7 7 0 0 1 0 10M84 9a11 11 0 0 1 0 16" fill="none" stroke="#d9b56b" stroke-width="1.3" stroke-linecap="round"/></g>'
    + '<path d="M170 84h16M246 76h18" stroke="#c9a24d" stroke-opacity=".45" stroke-dasharray="3 4"/>'
    + '<rect x="186" y="40" width="60" height="118" rx="11" fill="#111" stroke="#332c22"/>'
    + '<rect x="206" y="46" width="20" height="3.5" rx="1.7" fill="#2a2620"/>'
    + '<circle cx="216" cy="66" r="9" fill="none" stroke="#c9a24d" stroke-width="1.3"/><circle cx="216" cy="66" r="3.5" fill="#d9b56b" opacity=".8"/>'
    + '<rect x="203" y="80" width="26" height="4" rx="2" fill="#4a4238"/>'
    + '<g fill="#171310" stroke="#3a3128"><rect x="195" y="92" width="13" height="13" rx="2"/><rect x="227" y="92" width="13" height="13" rx="2"/>'
    + '<rect x="195" y="108" width="13" height="13" rx="2"/><rect x="211" y="108" width="13" height="13" rx="2"/><rect x="227" y="108" width="13" height="13" rx="2"/></g>'
    + '<rect x="211" y="92" width="13" height="13" rx="2" fill="#c9a24d" opacity=".8"/>'
    + '<path d="M216 145c-5-3.5-8-6-8-9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 3-3 5.5-8 9z" fill="#c9a24d" opacity=".8"/>'
    + '<ellipse cx="284" cy="96" rx="16" ry="4" fill="none" stroke="#c9a24d" stroke-opacity=".35"/><ellipse cx="284" cy="96" rx="26" ry="7" fill="none" stroke="#c9a24d" stroke-opacity=".16"/>'
    + '<g transform="translate(284 96)"><path d="M0-4s-14-13-14-24c0-8 6-14 14-14s14 6 14 14c0 11-14 24-14 24z" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.5"/>'
    + '<path transform="translate(0 -28) scale(1.2)" d="M0-5L1.23-1.7 4.76-1.55 2 .65 2.94 4.05 0 2.1-2.94 4.05-2 .65-4.76-1.55-1.23-1.7Z" fill="#d9b56b"/></g>'
    + '<g fill="#d9b56b"><path transform="translate(262 122)" d="M0-5L1.23-1.7 4.76-1.55 2 .65 2.94 4.05 0 2.1-2.94 4.05-2 .65-4.76-1.55-1.23-1.7Z"/><path transform="translate(273 122)" d="M0-5L1.23-1.7 4.76-1.55 2 .65 2.94 4.05 0 2.1-2.94 4.05-2 .65-4.76-1.55-1.23-1.7Z"/><path transform="translate(284 122)" d="M0-5L1.23-1.7 4.76-1.55 2 .65 2.94 4.05 0 2.1-2.94 4.05-2 .65-4.76-1.55-1.23-1.7Z"/><path transform="translate(295 122)" d="M0-5L1.23-1.7 4.76-1.55 2 .65 2.94 4.05 0 2.1-2.94 4.05-2 .65-4.76-1.55-1.23-1.7Z"/><path transform="translate(306 122)" opacity=".3" d="M0-5L1.23-1.7 4.76-1.55 2 .65 2.94 4.05 0 2.1-2.94 4.05-2 .65-4.76-1.55-1.23-1.7Z"/></g>'
    + '</svg>',

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

  /* Wasabi — QR code de table → commande sur mobile → ticket en cuisine */
  order: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<ellipse cx="160" cy="100" rx="120" ry="60" fill="#c9a24d" opacity=".04"/>'
    + '<rect x="40" y="52" width="72" height="72" rx="8" fill="#111" stroke="#332c22"/>'
    + '<g fill="none" stroke="#c9a24d" stroke-width="1.5"><rect x="48" y="60" width="12" height="12" rx="2"/><rect x="92" y="60" width="12" height="12" rx="2"/><rect x="48" y="104" width="12" height="12" rx="2"/></g>'
    + '<g fill="#d9b56b"><rect x="52" y="64" width="4" height="4"/><rect x="96" y="64" width="4" height="4"/><rect x="52" y="108" width="4" height="4"/></g>'
    + '<g fill="#c9a24d" opacity=".7"><rect x="66" y="62" width="4" height="4"/><rect x="72" y="68" width="4" height="4"/><rect x="66" y="74" width="4" height="4"/><rect x="78" y="80" width="4" height="4"/><rect x="90" y="78" width="4" height="4"/><rect x="66" y="86" width="4" height="4"/><rect x="84" y="92" width="4" height="4"/><rect x="72" y="98" width="4" height="4"/><rect x="90" y="98" width="4" height="4"/><rect x="78" y="104" width="4" height="4"/><rect x="66" y="104" width="4" height="4"/><rect x="90" y="86" width="4" height="4"/><rect x="72" y="80" width="4" height="4"/></g>'
    + '<path d="M112 92h14M194 92h24" stroke="#c9a24d" stroke-opacity=".7" stroke-dasharray="3 4"/>'
    + '<path d="M212 87l6 5-6 5" fill="none" stroke="#d9b56b" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<rect x="128" y="34" width="64" height="132" rx="12" fill="#111" stroke="#2f2a22" stroke-width="1.4"/>'
    + '<rect x="150" y="40" width="20" height="3.5" rx="1.7" fill="#2a2620"/>'
    + '<rect x="136" y="54" width="48" height="18" rx="5" fill="#171310" stroke="#3a3128"/><rect x="142" y="59" width="22" height="4" rx="2" fill="#4a4238"/><rect x="142" y="65" width="14" height="3" rx="1.5" fill="#3a332b"/><circle cx="176" cy="63" r="4.5" fill="#c9a24d" opacity=".85"/><path d="M174 63h4M176 61v4" stroke="#100c04" stroke-width="1.3" stroke-linecap="round"/><rect x="136" y="78" width="48" height="18" rx="5" fill="#171310" stroke="#3a3128"/><rect x="142" y="83" width="22" height="4" rx="2" fill="#4a4238"/><rect x="142" y="89" width="14" height="3" rx="1.5" fill="#3a332b"/><circle cx="176" cy="87" r="4.5" fill="#c9a24d" opacity=".85"/><path d="M174 87h4M176 85v4" stroke="#100c04" stroke-width="1.3" stroke-linecap="round"/><rect x="136" y="102" width="48" height="18" rx="5" fill="#171310" stroke="#3a3128"/><rect x="142" y="107" width="22" height="4" rx="2" fill="#4a4238"/><rect x="142" y="113" width="14" height="3" rx="1.5" fill="#3a332b"/><circle cx="176" cy="111" r="4.5" fill="#c9a24d" opacity=".85"/><path d="M174 111h4M176 109v4" stroke="#100c04" stroke-width="1.3" stroke-linecap="round"/>'
    + '<rect x="136" y="132" width="48" height="16" rx="6" fill="#c9a24d" opacity=".9"/>'
    + '<path d="M154 140l4 4 8-8" fill="none" stroke="#100c04" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<path d="M222 50h62v88l-7.75 6-7.75-6-7.75 6-7.75-6-7.75 6-7.75-6-7.75 6-7.75-6z" fill="#171310" stroke="#332c22" stroke-linejoin="round"/>'
    + '<rect x="232" y="60" width="30" height="5" rx="2.5" fill="#4a4238"/>'
    + '<g fill="#332c22"><rect x="232" y="74" width="42" height="3.5" rx="1.7"/><rect x="232" y="84" width="34" height="3.5" rx="1.7"/><rect x="232" y="94" width="42" height="3.5" rx="1.7"/></g>'
    + '<rect x="232" y="110" width="26" height="6" rx="2" fill="#c9a24d" opacity=".85"/>'
    + '<circle cx="284" cy="50" r="8" fill="#d9b56b"/><path d="M280.5 50l2.5 2.5 4.5-5" fill="none" stroke="#100c04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
    + '</svg>',

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

  /* Analyse des données — indicateurs + histogramme hebdomadaire */
  dash: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g fill="#171310" stroke="#2f2a22"><rect x="22" y="40" width="88" height="42" rx="8"/><rect x="118" y="40" width="88" height="42" rx="8"/><rect x="214" y="40" width="84" height="42" rx="8"/></g>'
    + '<g fill="#3f382e"><rect x="34" y="50" width="30" height="4" rx="2"/><rect x="130" y="50" width="34" height="4" rx="2"/><rect x="226" y="54" width="20" height="4" rx="2"/></g>'
    + '<rect x="34" y="61" width="44" height="11" rx="3" fill="#c9a24d" opacity=".9"/>'
    + '<path d="M86 72l5-5 4 3 7-8" fill="none" stroke="#d9b56b" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<rect x="130" y="61" width="36" height="11" rx="3" fill="#c9a24d" opacity=".45"/>'
    + '<path d="M176 62l5 5 4-3 7 8" fill="none" stroke="#6a5f50" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<rect x="226" y="63" width="16" height="9" rx="2.5" fill="#c9a24d" opacity=".65"/>'
    + '<circle cx="274" cy="61" r="11" fill="none" stroke="#2f2a22" stroke-width="5"/>'
    + '<circle cx="274" cy="61" r="11" fill="none" stroke="#c9a24d" stroke-width="5" stroke-dasharray="46 69.1" transform="rotate(-90 274 61)"/>'
    + '<rect x="22" y="90" width="276" height="72" rx="9" fill="#111" stroke="#2f2a22"/>'
    + '<path d="M34 122H286" stroke="#4a4238" stroke-dasharray="3 4"/>'
    + '<g fill="#c9a24d"><rect x="38" y="134" width="18" height="18" rx="3" opacity=".3"/><rect x="71" y="122" width="18" height="30" rx="3" opacity=".4"/><rect x="104" y="130" width="18" height="22" rx="3" opacity=".3"/><rect x="137" y="112" width="18" height="40" rx="3" opacity=".5"/><rect x="170" y="124" width="18" height="28" rx="3" opacity=".35"/><rect x="203" y="116" width="18" height="36" rx="3" opacity=".45"/><rect x="236" y="102" width="18" height="50" rx="3" opacity=".95"/><rect x="269" y="126" width="18" height="26" rx="3" opacity=".35"/></g>'
    + '<circle cx="245" cy="94" r="3" fill="#d9b56b"/>'
    + '</svg>',

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

  /* Solutions sur mesure — saisie mobile → automatisation → facture */
  flow: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<ellipse cx="160" cy="100" rx="70" ry="50" fill="#c9a24d" opacity=".05"/>'
    + '<rect x="34" y="42" width="62" height="116" rx="11" fill="#111" stroke="#332c22"/>'
    + '<rect x="55" y="48" width="20" height="3.5" rx="1.7" fill="#2a2620"/>'
    + '<g fill="#4a4238"><rect x="44" y="60" width="30" height="4" rx="2"/><rect x="44" y="86" width="24" height="4" rx="2"/></g>'
    + '<g fill="#171310" stroke="#3a3128"><rect x="44" y="68" width="42" height="10" rx="3"/><rect x="44" y="94" width="42" height="10" rx="3"/></g>'
    + '<rect x="44" y="112" width="8" height="8" rx="2" fill="none" stroke="#c9a24d"/><path d="M45.5 116l2 2 3-3.5" fill="none" stroke="#d9b56b" stroke-width="1.2" stroke-linecap="round"/>'
    + '<rect x="56" y="114" width="26" height="4" rx="2" fill="#332c22"/>'
    + '<rect x="44" y="134" width="42" height="12" rx="5" fill="#c9a24d" opacity=".9"/>'
    + '<g fill="none" stroke="#c9a24d" stroke-width="1.4"><path d="M100 100h30M190 100h32" stroke-dasharray="3 4" stroke-opacity=".7"/>'
    + '<path d="M124 95l6 5-6 5M216 95l6 5-6 5" stroke="#d9b56b" stroke-linecap="round" stroke-linejoin="round"/></g>'
    + '<circle cx="160" cy="100" r="40" fill="none" stroke="#c9a24d" stroke-opacity=".25" stroke-dasharray="2 5"/>'
    + '<circle cx="160" cy="100" r="26" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.5"/>'
    + '<g transform="translate(160 100)" fill="none" stroke="#d9b56b" stroke-width="1.6" stroke-linecap="round"><circle r="9"/><circle r="3"/><path d="M0-14v4M0 10v4M-14 0h4M10 0h4M-10-10l3 3M7 7l3 3M10-10l-3 3M-7 7l-3 3"/></g>'
    + '<circle cx="160" cy="60" r="2.6" fill="#d9b56b"/><circle cx="200" cy="100" r="2" fill="#d9b56b" opacity=".6"/>'
    + '<path d="M226 42h44l16 16v100h-60z" fill="#111" stroke="#332c22"/><path d="M270 42v16h16" fill="#171310" stroke="#332c22"/>'
    + '<rect x="236" y="56" width="24" height="5" rx="2.5" fill="#4a4238"/>'
    + '<g fill="#332c22"><rect x="236" y="74" width="40" height="3.5" rx="1.7"/><rect x="236" y="84" width="34" height="3.5" rx="1.7"/><rect x="236" y="94" width="40" height="3.5" rx="1.7"/></g>'
    + '<rect x="236" y="110" width="40" height="7" rx="2" fill="#c9a24d" opacity=".85"/>'
    + '<circle cx="270" cy="140" r="11" fill="#c9a24d"/><path d="M265 140l3.5 3.5 6.5-7" fill="none" stroke="#100c04" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '</svg>',

  /* City Eats — plat fait maison partagé entre voisins */
  homefood: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<g stroke="#242019"><path d="M0 60h320M0 158h320M20 0v200M300 0v200"/></g>'
    + '<ellipse cx="160" cy="150" rx="96" ry="14" fill="#c9a24d" opacity=".07"/>'
    + '<g transform="translate(30 104)"><path d="M0 22 22 4l22 18z" fill="#171310" stroke="#4a4238" stroke-linejoin="round"/>'
    + '<rect x="4" y="22" width="36" height="32" fill="#111" stroke="#332c22"/><rect x="10" y="30" width="10" height="10" rx="1" fill="#c9a24d" opacity=".75"/>'
    + '<rect x="26" y="38" width="8" height="16" fill="#171310" stroke="#3a3128"/></g>'
    + '<g transform="translate(246 104)"><path d="M0 22 22 4l22 18z" fill="#171310" stroke="#4a4238" stroke-linejoin="round"/>'
    + '<rect x="4" y="22" width="36" height="32" fill="#111" stroke="#332c22"/><rect x="24" y="30" width="10" height="10" rx="1" fill="#c9a24d" opacity=".4"/>'
    + '<rect x="10" y="38" width="8" height="16" fill="#171310" stroke="#3a3128"/></g>'
    + '<path d="M96 132H76M224 132h20" stroke="#c9a24d" stroke-opacity=".55" stroke-dasharray="3 4"/>'
    + '<ellipse cx="160" cy="146" rx="66" ry="9" fill="#111" stroke="#332c22"/>'
    + '<path d="M110 106h100v20a18 18 0 0 1-18 18h-64a18 18 0 0 1-18-18z" fill="#171310" stroke="#d9b56b" stroke-width="1.4"/>'
    + '<path d="M118 106a42 18 0 0 1 84 0" fill="#111" stroke="#c9a24d" stroke-width="1.3"/>'
    + '<path d="M104 106h112M110 116h-10M210 116h10" stroke="#d9b56b" stroke-width="2.4" stroke-linecap="round"/>'
    + '<circle cx="160" cy="86" r="4" fill="#d9b56b"/>'
    + '<path d="M146 74c-5-6 5-10 0-16s5-10 0-16M160 70c-5-6 5-10 0-16s5-10 0-16M174 74c-5-6 5-10 0-16s5-10 0-16" fill="none" stroke="#6a5f50" stroke-width="1.4" stroke-linecap="round"/>'
    + '<g transform="translate(268 92)"><path d="M0 0s-10-9-10-17c0-6 4-10 10-10s10 4 10 10c0 8-10 17-10 17z" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.4"/><circle cy="-17" r="3.4" fill="#d9b56b"/></g>'
    + '</svg>',

  /* 24/7 Shop — épicerie éclairée la nuit + horloge */
  shop: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<path d="M20 166h280" stroke="#2a2620"/>'
    + '<ellipse cx="124" cy="166" rx="96" ry="10" fill="#c9a24d" opacity=".07"/>'
    + '<rect x="48" y="80" width="150" height="86" rx="3" fill="#111" stroke="#332c22"/>'
    + '<path d="M56 54h138l12 26H44z" fill="#171310" stroke="#c9a24d" stroke-opacity=".6"/>'
    + '<g fill="#c9a24d" opacity=".75"><path d="M56 54h23l-8 26H44z"/><path d="M102 54h23v26H98z"/><path d="M148 54h23l8 26h-27z"/></g>'
    + '<path d="M44 80a13.5 6 0 0 0 27 0a13.5 6 0 0 0 27 0a13.5 6 0 0 0 27 0a13.5 6 0 0 0 27 0a13.5 6 0 0 0 27 0a13.5 6 0 0 0 27 0z" fill="#171310" stroke="#c9a24d" stroke-opacity=".6"/>'
    + '<rect x="62" y="100" width="38" height="66" rx="2" fill="#171310" stroke="#3a3128"/>'
    + '<rect x="68" y="106" width="26" height="30" rx="2" fill="#c9a24d" fill-opacity=".14" stroke="#3a3128"/>'
    + '<circle cx="94" cy="142" r="1.8" fill="#d9b56b"/>'
    + '<rect x="112" y="100" width="74" height="46" rx="3" fill="#c9a24d" fill-opacity=".1" stroke="#3a3128"/>'
    + '<path d="M112 116h74M112 131h74" stroke="#3a3128"/>'
    + '<g fill="#c9a24d"><rect x="118" y="106" width="8" height="10" rx="1" opacity=".7"/><rect x="146" y="104" width="7" height="12" rx="1" opacity=".5"/><rect x="174" y="106" width="6" height="10" rx="1" opacity=".6"/>'
    + '<rect x="134" y="121" width="8" height="10" rx="1" opacity=".55"/><rect x="168" y="120" width="9" height="11" rx="1" opacity=".7"/></g>'
    + '<g fill="#4a4238"><rect x="130" y="109" width="10" height="7" rx="1"/><rect x="158" y="108" width="12" height="8" rx="1"/><rect x="118" y="123" width="12" height="8" rx="1"/><rect x="148" y="124" width="14" height="7" rx="1"/></g>'
    + '<circle cx="252" cy="108" r="42" fill="none" stroke="#c9a24d" stroke-opacity=".25" stroke-dasharray="2 5"/>'
    + '<g transform="translate(252 108)"><circle r="33" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.5"/><circle r="27" fill="none" stroke="#2f2a22"/>'
    + '<path d="M0-27v6M27 0h-6M0 27v-6M-27 0h6" stroke="#c9a24d" stroke-width="1.6"/>'
    + '<path d="M0 0V-17M0 0l11 7" stroke="#d9b56b" stroke-width="2.2" stroke-linecap="round"/><circle r="2.5" fill="#d9b56b"/></g>'
    + '<path transform="translate(290 50)" d="M0-10A10 10 0 1 0 10 0 8 8 0 0 1 0-10Z" fill="#d9b56b" opacity=".85"/>'
    + '<g fill="#d9b56b" opacity=".6"><circle cx="262" cy="42" r="1.3"/><circle cx="308" cy="74" r="1.1"/><circle cx="306" cy="30" r="1.2"/></g>'
    + '</svg>',

  /* TuneYourCar — coupé sportif, roue « compatible » ciblée */
  car: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<path d="M20 158h280" stroke="#2a2620"/>'
    + '<ellipse cx="165" cy="159" rx="128" ry="6" fill="#c9a24d" opacity=".1"/>'
    + '<path d="M296 96h18M300 108h14M294 120h20" stroke="#4a4238" stroke-width="1.4" stroke-linecap="round"/>'
    + '<path d="M44 138l2-12q2-9 12-11l44-8q20-19 44-26l50-2q20 0 36 13l18 14 22 4q12 2 13 14l1 14h-24a26 26 0 0 0-52 0h-86a26 26 0 0 0-52 0z" fill="#111" stroke="#d9b56b" stroke-width="1.4" stroke-linejoin="round"/>'
    + '<g fill="#171310" stroke="#3a3128"><path d="M110 106q16-13 38-19l20-1v20z"/><path d="M174 86h22q14 1 26 12l6 8h-54z"/></g>'
    + '<path d="M60 121h216" stroke="#c9a24d" stroke-opacity=".45" stroke-width="1.2"/><path d="M171 108v28" stroke="#2f2a22"/>'
    + '<path d="M47 120h12l-2 5H46z" fill="#d9b56b"/><rect x="277" y="114" width="8" height="6" rx="1.5" fill="#c9a24d" opacity=".8"/>'
    + '<circle cx="236" cy="138" r="29" fill="none" stroke="#c9a24d" stroke-opacity=".45" stroke-dasharray="3 4"/>'
    + '<g transform="translate(98 138)"><circle r="20" fill="#0d0d0d" stroke="#c9a24d" stroke-width="1.6"/><circle r="12" fill="none" stroke="#4a4238" stroke-width="1.2"/>'
    + '<path d="M0-12V12M-12 0H12M-8.5-8.5 8.5 8.5M8.5-8.5-8.5 8.5" stroke="#3a3128"/><circle r="3.5" fill="#c9a24d"/></g>'
    + '<g transform="translate(236 138)"><circle r="20" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.8"/><circle r="12" fill="none" stroke="#c9a24d" stroke-width="1.2" stroke-opacity=".7"/>'
    + '<path d="M0-12V12M-12 0H12M-8.5-8.5 8.5 8.5M8.5-8.5-8.5 8.5" stroke="#4a4238"/><circle r="3.5" fill="#d9b56b"/></g>'
    + '</svg>',

  /* Best Piece — une demande, des offres concurrentes, la meilleure retenue */
  parts: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<circle cx="78" cy="100" r="54" fill="#c9a24d" opacity=".05"/>'
    + '<g transform="translate(78 100)"><circle r="40" fill="#111" stroke="#332c22"/><circle r="33" fill="none" stroke="#2a2620" stroke-dasharray="2 4"/>'
    + '<circle r="26" fill="none" stroke="#d9b56b" stroke-width="1.4"/><circle r="10" fill="#c9a24d" opacity=".85"/>'
    + '<g fill="#111"><circle cx="-0.0" cy="-17.0" r="2.2"/><circle cx="16.2" cy="-5.3" r="2.2"/><circle cx="10.0" cy="13.8" r="2.2"/><circle cx="-10.0" cy="13.8" r="2.2"/><circle cx="-16.2" cy="-5.3" r="2.2"/></g>'
    + '<circle r="3" fill="#100c04"/></g>'
    + '<path d="M100 61.9A44 44 0 0 1 119.3 85L106.2 89.7A30 30 0 0 0 93 74Z" fill="#c9a24d" opacity=".75"/>'
    + '<path d="M122 100C145 100 145 61 168 61M122 100C145 100 145 139 168 139" fill="none" stroke="#3a3128" stroke-dasharray="3 4"/>'
    + '<path d="M122 100h46" stroke="#d9b56b" stroke-opacity=".8" stroke-width="1.4"/>'
    + '<g fill="#111" stroke="#332c22"><rect x="168" y="46" width="118" height="30" rx="8"/><rect x="168" y="124" width="118" height="30" rx="8"/></g>'
    + '<rect x="168" y="85" width="118" height="30" rx="8" fill="#171310" stroke="#d9b56b" stroke-width="1.3"/>'
    + '<g fill="#4a4238"><rect x="180" y="54" width="40" height="5" rx="2.5"/><rect x="180" y="132" width="34" height="5" rx="2.5"/></g>'
    + '<g fill="#332c22"><rect x="180" y="64" width="26" height="4" rx="2"/><rect x="180" y="142" width="24" height="4" rx="2"/><rect x="248" y="55" width="28" height="12" rx="6"/><rect x="248" y="133" width="28" height="12" rx="6"/></g>'
    + '<rect x="180" y="93" width="46" height="5" rx="2.5" fill="#d9b56b"/><rect x="180" y="103" width="28" height="4" rx="2" fill="#4a4238"/>'
    + '<rect x="248" y="94" width="28" height="12" rx="6" fill="#c9a24d" opacity=".85"/>'
    + '<circle cx="286" cy="85" r="8" fill="#d9b56b"/><path d="M282.5 85l2.5 2.5 4.5-5" fill="none" stroke="#100c04" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>'
    + '</svg>',

};

/** Renvoie l'illustration demandée, ou celle de l'accueil en secours. */
function getArt(key) {
  return ART[key] || ART.hero;
}

window.ART = Object.freeze(ART);
window.getArt = getArt;
