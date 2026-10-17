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

  /* Business Essentials — site + mobile, une seule identité */
  essentials: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<defs><linearGradient id="esG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e3c27e"/><stop offset="1" stop-color="#a9853a"/></linearGradient><radialGradient id="esGGl"><stop offset="0" stop-color="#c9a24d" stop-opacity=".22"/><stop offset="1" stop-color="#c9a24d" stop-opacity="0"/></radialGradient></defs>'
    + '<ellipse cx="166" cy="104" rx="120" ry="64" fill="url(#esGGl)"/>'
    + '<rect x="70" y="50" width="150" height="96" rx="11" fill="#111" stroke="#3a3128"/>'
    + '<path d="M70 61a11 11 0 0 1 11-11h128a11 11 0 0 1 11 11v5H70z" fill="#171310"/>'
    + '<g fill="#3f382e"><circle cx="81" cy="58" r="2"/><circle cx="88" cy="58" r="2"/><circle cx="95" cy="58" r="2"/></g>'
    + '<rect x="86" y="82" width="70" height="6" rx="3" fill="#4a4238"/><rect x="86" y="95" width="48" height="5" rx="2.5" fill="#2f2a22"/>'
    + '<rect x="86" y="114" width="44" height="13" rx="6.5" fill="url(#esG)"/>'
    + '<rect x="200" y="70" width="54" height="92" rx="11" fill="#0d0d0d" stroke="#c9a24d" stroke-opacity=".7"/>'
    + '<circle cx="227" cy="96" r="9" fill="url(#esG)"/>'
    + '<rect x="212" y="114" width="30" height="5" rx="2.5" fill="#4a4238"/><rect x="216" y="125" width="22" height="4" rx="2" fill="#2f2a22"/>'
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

  /* Analyse des données — un indicateur qui ressort */
  dash: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<defs><linearGradient id="dsG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e3c27e"/><stop offset="1" stop-color="#a9853a"/></linearGradient><radialGradient id="dsGGl"><stop offset="0" stop-color="#c9a24d" stop-opacity=".22"/><stop offset="1" stop-color="#c9a24d" stop-opacity="0"/></radialGradient></defs>'
    + '<ellipse cx="200" cy="120" rx="110" ry="50" fill="url(#dsGGl)"/>'
    + '<path d="M60 150h200" stroke="#2f2a22"/>'
    + '<g fill="#1a1712" stroke="#2f2a22"><rect x="70" y="120" width="22" height="30" rx="5"/><rect x="102" y="104" width="22" height="46" rx="5"/><rect x="134" y="112" width="22" height="38" rx="5"/><rect x="198" y="98" width="22" height="52" rx="5"/></g>'
    + '<rect x="166" y="78" width="22" height="72" rx="5" fill="url(#dsG)"/>'
    + '<rect x="230" y="108" width="22" height="42" rx="5" fill="#1a1712" stroke="#2f2a22"/>'
    + '<path d="M81 112C110 104 118 96 145 92S166 64 177 62 220 86 241 92" fill="none" stroke="#d9b56b" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round"/>'
    + '<circle cx="177" cy="62" r="4" fill="#0d0d0d" stroke="#d9b56b" stroke-width="1.8"/>'
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

  /* Solutions sur mesure — une saisie, une automatisation, un résultat */
  flow: '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">'
    + '<defs><linearGradient id="flG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e3c27e"/><stop offset="1" stop-color="#a9853a"/></linearGradient><radialGradient id="flGGl"><stop offset="0" stop-color="#c9a24d" stop-opacity=".22"/><stop offset="1" stop-color="#c9a24d" stop-opacity="0"/></radialGradient></defs>'
    + '<ellipse cx="160" cy="100" rx="90" ry="56" fill="url(#flGGl)"/>'
    + '<path d="M110 100h26M184 100h26" stroke="#c9a24d" stroke-opacity=".6" stroke-width="1.3" stroke-dasharray="3 4"/>'
    + '<rect x="54" y="72" width="56" height="56" rx="14" fill="#111" stroke="#3a3128"/>'
    + '<rect x="68" y="90" width="28" height="5" rx="2.5" fill="#4a4238"/><rect x="68" y="102" width="18" height="5" rx="2.5" fill="#2f2a22"/>'
    + '<circle cx="160" cy="100" r="25" fill="url(#flG)"/>'
    + '<path d="M151 100h17m-6-6 6 6-6 6" fill="none" stroke="#100c04" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<rect x="210" y="72" width="56" height="56" rx="14" fill="#111" stroke="#c9a24d" stroke-opacity=".7"/>'
    + '<path d="M228 100l7 7 13-14" fill="none" stroke="#d9b56b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'
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


};

/** Renvoie l'illustration demandée, ou celle de l'accueil en secours. */
function getArt(key) {
  return ART[key] || ART.hero;
}

window.ART = Object.freeze(ART);
window.getArt = getArt;
