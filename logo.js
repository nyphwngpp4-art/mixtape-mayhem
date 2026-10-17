// Original artwork for Mixtape Mayhem (not official Notre Dame marks)
const SHAMROCK=(x,y,s,c='#2E8B3E')=>`<g transform="translate(${x} ${y}) scale(${s})"><circle cx="0" cy="-9" r="8" fill="${c}"/><circle cx="-8" cy="2" r="8" fill="${c}"/><circle cx="8" cy="2" r="8" fill="${c}"/><path d="M0 2 Q2 14 6 20" stroke="${c}" stroke-width="3" fill="none"/></g>`;
// Gold-helmet-inspired mixtape: gold cassette with a navy center stripe
const TAPE=(x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="-50" y="-32" width="100" height="64" rx="10" fill="#C99700" stroke="#0C2340" stroke-width="4"/>
<rect x="-6" y="-32" width="12" height="64" fill="#0C2340"/><rect x="-38" y="-20" width="76" height="26" rx="6" fill="#F3E3A6" stroke="#0C2340" stroke-width="3"/>
<circle cx="-20" cy="-7" r="8" fill="#0C2340"/><circle cx="20" cy="-7" r="8" fill="#0C2340"/><circle cx="-20" cy="-7" r="3" fill="#C99700"/><circle cx="20" cy="-7" r="3" fill="#C99700"/>
<path d="M-30 32 L-24 16 H24 L30 32" fill="#A87E00" stroke="#0C2340" stroke-width="3"/></g>`;
// Original friendly cartoon leprechaun in a playful fighting stance, holding a microphone
const LEP=(x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})">
<rect x="-14" y="58" width="11" height="26" rx="4" fill="#0C2340"/><rect x="5" y="58" width="11" height="26" rx="4" fill="#0C2340"/>
<ellipse cx="-12" cy="86" rx="12" ry="6" fill="#3a2a14"/><ellipse cx="14" cy="86" rx="12" ry="6" fill="#3a2a14"/>
<path d="M-24 20 Q0 10 24 20 L22 62 H-22 Z" fill="#2E8B3E" stroke="#174d22" stroke-width="3"/><rect x="-22" y="48" width="44" height="7" fill="#3a2a14"/><rect x="-5" y="47" width="10" height="9" fill="#C99700"/>
<path d="M22 26 Q40 20 44 4" stroke="#2E8B3E" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="44" cy="0" r="7" fill="#f4c7a1"/>
<rect x="40" y="-22" width="8" height="20" rx="3" fill="#333"/><circle cx="44" cy="-26" r="8" fill="#C99700" stroke="#0C2340" stroke-width="2"/>
<path d="M-22 26 Q-40 30 -38 14" stroke="#2E8B3E" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="-38" cy="10" r="8" fill="#f4c7a1"/>
<circle cx="0" cy="-2" r="20" fill="#f4c7a1"/><path d="M-20 0 Q-22 26 0 30 Q22 26 20 0 Q10 12 0 10 Q-10 12 -20 0Z" fill="#d9692b"/>
<circle cx="-7" cy="-6" r="3" fill="#0C2340"/><circle cx="7" cy="-6" r="3" fill="#0C2340"/><path d="M-6 6 Q0 11 6 6" stroke="#0C2340" stroke-width="2.5" fill="none"/>
<ellipse cx="0" cy="-20" rx="30" ry="6" fill="#174d22"/><path d="M-17 -20 L-14 -50 H14 L17 -20Z" fill="#2E8B3E" stroke="#174d22" stroke-width="2"/><rect x="-15" y="-30" width="30" height="7" fill="#0C2340"/><rect x="-5" y="-31" width="10" height="9" fill="none" stroke="#C99700" stroke-width="2.5"/>
${SHAMROCK(10,-40,.35,'#C99700')}</g>`;
document.querySelectorAll('.top').forEach(t=>t.insertAdjacentHTML('afterbegin',`
<svg class="logo" viewBox="0 0 340 190" aria-label="Mixtape Mayhem">
 <path d="M0 150 Q170 95 340 150 V190 H0Z" fill="#174d22" opacity=".55"/><g fill="#C99700" opacity=".35"><rect x="10" y="20" width="4" height="60"/><rect x="326" y="20" width="4" height="60"/><circle cx="12" cy="18" r="8"/><circle cx="328" cy="18" r="8"/></g>
 ${SHAMROCK(40,60,1.1)}${SHAMROCK(300,70,.9)}${TAPE(120,62,.75)}${LEP(235,58,.62)}
 <text x="170" y="140" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="38" fill="#C99700" stroke="#061428" stroke-width="2">MIXTAPE</text>
 <text x="170" y="180" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="38" fill="#fff" stroke="#061428" stroke-width="2">MAYHEM</text></svg>
 <div class="tag">☘ Go Irish! Play like a champion ☘</div>`));
const WIN_ART=`<svg viewBox="0 0 220 170" style="width:200px;height:auto">${SHAMROCK(30,40,1)}${SHAMROCK(190,50,.8)}${LEP(110,80,1)}${TAPE(40,140,.45)}${TAPE(180,140,.45)}</svg>`;
