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
// Halloween artwork: original jack-o'-lantern, friendly ghost with a mic, bats and a moon
const PUMPKIN=(x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-2 -30 Q0 -40 8 -42" stroke="#3d6b22" stroke-width="5" fill="none" stroke-linecap="round"/>
<ellipse cx="-16" cy="0" rx="20" ry="28" fill="#E8701A"/><ellipse cx="16" cy="0" rx="20" ry="28" fill="#E8701A"/><ellipse cx="0" cy="0" rx="20" ry="30" fill="#F28C28" stroke="#B5530F" stroke-width="2"/>
<g class="flicker"><path d="M-20 -8 L-10 -16 L-4 -6Z M20 -8 L10 -16 L4 -6Z" fill="#FFE27A"/><path d="M-22 6 Q0 26 22 6 L14 10 L10 4 L4 11 L0 5 L-4 11 L-10 4 L-14 10Z" fill="#FFE27A"/></g></g>`;
const GHOST=(x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-28 50 V-6 Q-28 -40 0 -40 Q28 -40 28 -6 V50 L18 40 L9 50 L0 40 L-9 50 L-18 40Z" fill="#F4F0FF" stroke="#2a1240" stroke-width="3"/>
<ellipse cx="-10" cy="-10" rx="5" ry="8" fill="#2a1240"/><ellipse cx="10" cy="-10" rx="5" ry="8" fill="#2a1240"/><ellipse cx="0" cy="10" rx="7" ry="9" fill="#2a1240"/>
<path d="M26 8 Q42 2 44 -12" stroke="#F4F0FF" stroke-width="9" fill="none" stroke-linecap="round"/><rect x="40" y="-34" width="8" height="20" rx="3" fill="#333"/><circle cx="44" cy="-38" r="8" fill="#F28C28" stroke="#2a1240" stroke-width="2"/></g>`;
const BAT=(x,y,s)=>`<path transform="translate(${x} ${y}) scale(${s})" d="M0 0 Q-6 -8 -14 -4 Q-20 -10 -30 -6 Q-24 0 -26 8 Q-18 4 -12 8 Q-6 2 0 6 Q6 2 12 8 Q18 4 26 8 Q24 0 30 -6 Q20 -10 14 -4 Q6 -8 0 0Z" fill="#0b0614" stroke="#8d5fc4" stroke-width="1.2"/>`;
const HTAPE=(x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect x="-50" y="-32" width="100" height="64" rx="10" fill="#F28C28" stroke="#2a1240" stroke-width="4"/>
<rect x="-6" y="-32" width="12" height="64" fill="#5B2A86"/><rect x="-38" y="-20" width="76" height="26" rx="6" fill="#FFE3C2" stroke="#2a1240" stroke-width="3"/>
<circle cx="-20" cy="-7" r="8" fill="#2a1240"/><circle cx="20" cy="-7" r="8" fill="#2a1240"/><circle cx="-20" cy="-7" r="3" fill="#F28C28"/><circle cx="20" cy="-7" r="3" fill="#F28C28"/>
<path d="M-30 32 L-24 16 H24 L30 32" fill="#C9661A" stroke="#2a1240" stroke-width="3"/></g>`;
const THEMES={
 nd:{cheer:'Go Irish!',round3:'Play like a champion!',icon:'☘',tag:'Go Irish! Play like a champion',
  logo:`<path d="M0 150 Q170 95 340 150 V190 H0Z" fill="#174d22" opacity=".55"/><g fill="#C99700" opacity=".35"><rect x="10" y="20" width="4" height="60"/><rect x="326" y="20" width="4" height="60"/><circle cx="12" cy="18" r="8"/><circle cx="328" cy="18" r="8"/></g>
 <g class="float2">${SHAMROCK(40,60,1.1)}</g><g class="float">${SHAMROCK(300,70,.9)}</g><g class="float2">${TAPE(120,62,.75)}</g><g class="float">${LEP(235,58,.62)}</g>`,word:['#C99700','#fff','#061428'],
  win:`${SHAMROCK(30,40,1)}${SHAMROCK(190,50,.8)}${LEP(110,80,1)}${TAPE(40,140,.45)}${TAPE(180,140,.45)}`},
 halloween:{cheer:'Happy Halloween!',round3:'Fill the whole card if you dare!',icon:'🎃',tag:'Trick or treat · Song bingo',
  logo:`<circle cx="176" cy="30" r="30" fill="#FFF2C7" opacity=".18"/><circle cx="176" cy="30" r="20" fill="#FFF2C7"/><circle cx="170" cy="26" r="3" fill="#E9DDB0"/><circle cx="182" cy="36" r="4" fill="#E9DDB0"/>
 <g class="drift"><g class="flap">${BAT(60,30,.8)}</g></g><g class="drift" style="animation-delay:-4s"><g class="flap">${BAT(250,70,.6)}</g></g><g class="flap">${BAT(305,24,.5)}</g><path d="M0 150 Q170 100 340 150 V190 H0Z" fill="#3b1a5a" opacity=".7"/>
 ${PUMPKIN(42,92,1.05)}<g class="float2">${HTAPE(122,70,.68)}</g><g class="float">${GHOST(238,64,.85)}</g>`,word:['#F28C28','#fff','#120822'],
  win:`${BAT(40,30,.8)}${BAT(180,24,.7)}${GHOST(110,72,1)}${PUMPKIN(40,135,.75)}${PUMPKIN(180,135,.75)}`}};
var WIN_ART='',CHEER='',ROUND3_TAG='';
// Theme follows the game: a Halloween code (H + 4 letters) gets the Halloween look; the join page is always Halloween
function themeFor(code){return typeof SETS!=='undefined'&&SETS[setKey(code)].theme||'nd'}
function applyTheme(t){const T=THEMES[t]||THEMES.nd;document.body.classList.toggle('halloween',t==='halloween');WIN_ART=`<svg viewBox="0 0 220 170" style="width:200px;height:auto">${T.win}</svg>`;CHEER=T.cheer;ROUND3_TAG=T.round3;
 document.querySelectorAll('.top').forEach(top=>{top.innerHTML=`<svg class="logo" viewBox="0 0 340 190" aria-label="Mixtape Mayhem">${T.logo}
 <text x="170" y="140" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="38" fill="${T.word[0]}" stroke="${T.word[2]}" stroke-width="2">MIXTAPE</text>
 <text x="170" y="180" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="38" fill="${T.word[1]}" stroke="${T.word[2]}" stroke-width="2">MAYHEM</text></svg>
 <div class="tag"><i>${T.icon}</i> <span>${T.tag}</span> <i>${T.icon}</i></div>`})}
applyTheme((()=>{const g=new URLSearchParams(location.search).get('g');if(g)return themeFor(g);
 try{const h=JSON.parse(localStorage.jj_host||'null');if(h&&/host/.test(location.pathname))return themeFor(h.code)}catch(e){}return /host/.test(location.pathname)?'nd':'halloween'})());
// confetti burst for a real bingo, in the current theme's colors
function celebrate(){const hw=document.body.classList.contains('halloween'),bits=hw?['🎃','🦇','👻','🍬','✨']:['☘','✨','🎵','🏈','⭐'],cols=hw?['#F28C28','#9B4FD6','#7CFC00']:['#C99700','#2E8B3E','#fff'];
 for(let i=0;i<60;i++){const d=document.createElement('div');d.className='confetti';const e=i%3===0;d.textContent=e?bits[i%bits.length]:'';
  if(!e)Object.assign(d.style,{width:'9px',height:'14px',background:cols[i%cols.length],borderRadius:'2px'});
  Object.assign(d.style,{left:Math.random()*100+'vw',animationDuration:2.4+Math.random()*2.2+'s',animationDelay:Math.random()*.6+'s'});document.body.appendChild(d);setTimeout(()=>d.remove(),5500)}}
