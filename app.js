// ===================================
// LAST WAR ALLIANCE WEBSITE
// Interactive Features & Localization
// ===================================

// ===== TRANSLATION DATA =====
const translations = {
    en: {
        server: "SERVER",
        systemTime: "SYSTEM TIME",
        gameTime: "UTC / GAME TIME",
        commandStaff: "COMMAND STAFF",
        roleLeader: "LEADER",
        roleWarlord: "WARLORD",
        roleMuse: "MUSE",
        roleRecruiter: "RECRUITER",
        roleButler: "BUTLER",
        descLeader: "Strategic mastermind. Alliance Commander.",
        descWarlord: "Military Operations & War Strategy.",
        descMuse: "Diplomacy & Public Relations.",
        descRecruiter: "Recruitment & Talent Acquisition.",
        descButler: "Resource Management & Logistics.",
        scheduleTitle: "OPERATIONS SCHEDULE",
        gearTitle: "[ TACTICAL GEAR GUIDE ]",
        gearRuleTitle: "THE GOLDEN RULES",
        gearBuildTitle: "BUILD ORDER",
        gearLevelTitle: "LEVELING STRATEGY",
        viewGearStats: "▶ VIEW FULL GEAR STATS",
        mon: "MON", tue: "TUE", wed: "WED", thu: "THU", fri: "FRI", sat: "SAT",
        showEnds: "▶ ACCESS TARGET GUIDE",
        hideEnds: "▼ CLOSE TARGET GUIDE",
        f2pTitle: "💎 F2P STRATEGY",
        vipTitle: "💰 VIP STRATEGY",
        toolsTitle: "TACTICAL TOOLS",
        armsRaceTitle: "ARMS RACE COUNTDOWN",
        nextBlock: "NEXT EVENT BLOCK",
        days: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"],
        events: [
            "RADAR & EXPANSION", "BUILDING DAY", "TECH & RESEARCH", "HERO DAY", "TOTAL MOBILIZATION", "ENEMY BUSTER", "REST DAY"
        ],
        gearRules: [
            "⚠️ <span class='gear-highlight'>HQ LEVEL</span> is #1 Priority",
            "🛡️ Focus on <span class='gear-highlight'>ONE Main Squad</span> only",
            "🚫 Don't open resource chests until needed"
        ],
        gearBuild: [
            "1. <span class='gear-highlight'>Gun</span> (Attack)",
            "2. <span class='gear-highlight'>Radar</span> (Energy Def)",
            "3. <span class='gear-highlight'>Armor</span> (Phys Def)",
            "4. <span class='gear-highlight'>Chip</span> (HP)"
        ],
        gearPhases: [
            { title: "PHASE 1", text: "Get everything to <span class='gear-highlight'>Level 10</span>" },
            { title: "PHASE 2", text: "Attackers' Guns -> Lvl 40" },
            { title: "PHASE 3", text: "Defenders' Radar/Armor -> Lvl 40" }
        ],
        tips: [
            { // Mon
                f2p: ['📦 Save all expansion chests from daily rewards', '⏩ Use free speedups strategically', '📡 Focus on radar upgrades first for better scouting', '🤝 Complete alliance tasks for bonus resources'],
                vip: ['🛍️ Best pack: Expansion Bundle (70% off)', '⚡ Consider VIP boost for instant builds', '💎 Resource packs provide best value today', '🏗️ Stack construction speedups from store']
            },
            { // Tue
                f2p: ['🏗️ Hoard all building speedups until today', '🏠 Upgrade resource buildings first', '👷 Join alliance building events', '🚀 Use free builder boosts wisely'],
                vip: ['👷‍♂️ Best pack: Builder\'s Bundle', '🏗️ VIP 8+ gets second builder queue', '⏩ Speedup packs are 50% off', '📅 Consider monthly card for daily speedups']
            },
            { // Wed
                f2p: ['🔬 Save research speedups all week', '⚔️ Focus on military tech tree', '🧪 Complete research tasks for alliance points', '🤝 Use alliance help to reduce time'],
                vip: ['🧪 Best pack: Research Accelerator', '⚡ Tech speedups give best value today', '🧠 Consider permanent research boost', '💎 VIP bonuses stack with research events']
            },
            { // Thu
                f2p: ['🦸 Save all hero XP items', '🎯 Focus on one hero at a time', '🧩 Complete hero missions for fragments', '🛒 Use alliance shop for hero shards'],
                vip: ['🎁 Best pack: Hero Chest Bundle', '🌟 Legendary hero fragments on sale', '📈 XP boosters are 60% off', '👕 Consider hero skin packs for bonuses']
            },
            { // Fri
                f2p: ['🎖️ Hoard all training speedups', '💪 Train highest tier troops you can', '🚀 Use alliance training boosts', '✅ Complete training tasks for rewards'],
                vip: ['⚔️ Best pack: Mobilization Bundle', '⏩ Training speedups are 70% off', '🍞 Resource packs help sustain training', '📈 VIP training boost stacks with events']
            },
            { // Sat (Enemy Buster)
                f2p: [
                    '🛡️ USE 24H SHIELD immediately after reset if not fighting',
                    '🚀 Teleport to enemy server with allies to support rallies safely',
                    '🎯 Target lower level enemies for efficiency',
                    '🤝 Join rallies for better rewards without losing shield'
                ],
                vip: [
                    '🛡️ USE 24H SHIELD if you cannot be active 24/7',
                    '🚀 Port to enemy server with the main attack wave',
                    '🔥 Rally strong targets: You can rally while shielded on enemy server!',
                    '🏰 Help defend friendly bases near the hive'
                ]
            },
            { // Sun (Rest Day)
                f2p: [
                    '🛡️ KEEP YOUR SHIELD UP - No major events today',
                    '📦 Good day to organize inventory and claim rewards',
                    '🎯 Plan your strategy for the week ahead',
                    '🤝 Help alliance mates with their activities'
                ],
                vip: [
                    '🛡️ Maintain shield and relax',
                    '📊 Review weekly progress and plan purchases',
                    '💎 Check for special weekend deals',
                    '🏰 Coordinate with R4/R5 for next week strategy'
                ]
            }
        ]
    },
    es: {
        server: "SERVIDOR",
        systemTime: "HORA DEL SISTEMA",
        gameTime: "UTC / HORA DE JUEGO",
        commandStaff: "ESTADO MAYOR",
        roleLeader: "LÍDER",
        roleWarlord: "GENERAL",
        roleMuse: "DIPLOMÁTICO",
        roleRecruiter: "RECLUTADOR",
        roleButler: "MAYORDOMO",
        descLeader: "Cerebro estratégico. Comandante de la Alianza.",
        descWarlord: "Operaciones Militares y Estrategia de Guerra.",
        descMuse: "Diplomacia y Relaciones Públicas.",
        descRecruiter: "Reclutamiento y Adquisición de Talento.",
        descButler: "Gestión de Recursos y Logística.",
        scheduleTitle: "CALENDARIO DE OPERACIONES",
        gearTitle: "[ GUÍA DE EQUIPO TÁCTICO ]",
        gearRuleTitle: "REGLAS DE ORO",
        gearBuildTitle: "ORDEN DE CONSTRUCCIÓN",
        gearLevelTitle: "ESTRATEGIA DE NIVEL",
        viewGearStats: "▶ VER ESTADÍSTICAS COMPLETAS",
        mon: "LUN", tue: "MAR", wed: "MIÉ", thu: "JUE", fri: "VIE", sat: "SÁB",
        showEnds: "▶ VER GUÍA",
        hideEnds: "▼ CERRAR GUÍA",
        f2pTitle: "💎 ESTRATEGIA F2P",
        vipTitle: "💰 ESTRATEGIA VIP",
        toolsTitle: "HERRAMIENTAS TÁCTICAS",
        armsRaceTitle: "CUENTA REGRESIVA",
        nextBlock: "PRÓXIMO BLOQUE",
        days: ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO", "DOMINGO"],
        events: [
            "RADAR Y EXPANSIÓN", "DÍA DE CONSTRUCCIÓN", "TEC. E INVESTIGACIÓN", "DÍA DE HÉROES", "MOVILIZACIÓN TOTAL", "DESTRUCTOR DE ENEMIGOS", "DÍA DE DESCANSO"
        ],
        gearRules: [
            "⚠️ <span class='gear-highlight'>Nivel de CG</span> es Prioridad #1",
            "🛡️ Enfócate en <span class='gear-highlight'>UN Escuadrón</span>",
            "🚫 No abras cofres hasta necesitarlos"
        ],
        gearBuild: [
            "1. <span class='gear-highlight'>Cañón</span> (Ataque)",
            "2. <span class='gear-highlight'>Radar</span> (Def. Energía)",
            "3. <span class='gear-highlight'>Armadura</span> (Def. Física)",
            "4. <span class='gear-highlight'>Chip</span> (PS)"
        ],
        gearPhases: [
            { title: "FASE 1", text: "Sube todo a <span class='gear-highlight'>Nivel 10</span>" },
            { title: "FASE 2", text: "Cañones Atacantes -> Nvl 40" },
            { title: "FASE 3", text: "Radar/Armadura Defensores -> Nvl 40" }
        ],
        tips: [
            { // Mon
                f2p: ['📦 Guarda cofres de expansión de recompensas diarias', '⏩ Usa aceleradores gratuitos estratégicamente', '📡 Prioriza mejoras de radar para explorar', '🤝 Completa tareas de alianza para recursos'],
                vip: ['🛍️ Mejor paquete: Expansión (70% descuento)', '⚡ Considera VIP para construcciones instantáneas', '💎 Paquetes de recursos valen la pena hoy', '🏗️ Acumula aceleradores de construcción']
            },
            { // Tue
                f2p: ['🏗️ Guarda aceleradores de construcción hasta hoy', '🏠 Mejora edificios de recursos primero', '👷 Únete a eventos de construcción', '🚀 Usa impulsos de constructor gratuitos'],
                vip: ['👷‍♂️ Mejor paquete: Constructor', '🏗️ VIP 8+ da segunda cola de construcción', '⏩ Aceleradores al 50% descuento', '📅 Tarjeta mensual para aceleradores diarios']
            },
            { // Wed
                f2p: ['🔬 Guarda aceleradores de investigación', '⚔️ Enfócate en tecnología militar', '🧪 Completa tareas de investigación', '🤝 Pide ayuda a la alianza para reducir tiempo'],
                vip: ['🧪 Mejor paquete: Acelerador de Investigación', '⚡ Aceleradores de tecnología son clave', '🧠 Considera impulso permanente', '💎 Bonos VIP se suman a eventos']
            },
            { // Thu
                f2p: ['🦸 Guarda todo ítem de XP de héroe', '🎯 Enfócate en un héroe a la vez', '🧩 Misiones de héroe para fragmentos', '🛒 Tienda de alianza para fragmentos'],
                vip: ['🎁 Mejor paquete: Cofre de Héroe', '🌟 Fragmentos legendarios en oferta', '📈 Potenciadores de XP al 60% descuento', '👕 Skins de héroe para bonificaciones']
            },
            { // Fri
                f2p: ['🎖️ Acumula aceleradores de entrenamiento', '💪 Entrena tropas de mayor nivel', '🚀 Usa impulsos de entrenamiento', '✅ Completa tareas para recompensas'],
                vip: ['⚔️ Mejor paquete: Movilización', '⏩ Aceleradores de entrenamiento al 70%', '🍞 Paquetes de recursos mantienen el ritmo', '📈 Impulso VIP se suma a eventos']
            },
            { // Sat (Enemy Buster) - UPDATED
                f2p: [
                    '🛡️ USA ESCUDO 24H al reinicio si no peleas',
                    '🚀 Ve al servidor enemigo con aliados para apoyo seguro',
                    '🎯 Ataca enemigos de nivel bajo',
                    '🤝 Únete a rallies para ganar sin perder escudo'
                ],
                vip: [
                    '🛡️ USA ESCUDO 24H si no estarás activo 24/7',
                    '🚀 Ve al servidor enemigo con el grupo de ataque',
                    '🔥 Haz rallies a objetivos fuertes (¡mantienes escudo!)',
                    '🏰 Ayuda a defender bases aliadas cerca de la colmena'
                ]
            }
        ]
    },
    pt: {
        server: "SERVIDOR",
        systemTime: "HORA DO SISTEMA",
        gameTime: "UTC / HORA DO JOGO",
        commandStaff: "COMANDO",
        roleLeader: "LÍDER",
        roleWarlord: "GENERAL",
        roleMuse: "DIPLOMATA",
        roleRecruiter: "RECRUTADOR",
        roleButler: "MORDOMO",
        descLeader: "Mente estratégica. Comandante da Aliança.",
        descWarlord: "Operações Militares e Estratégia de Guerra.",
        descMuse: "Diplomacia e Relações Públicas.",
        descRecruiter: "Recrutamento e Gestão de Talentos.",
        descButler: "Gestão de Recursos e Logística.",
        scheduleTitle: "AGENDA DE OPERAÇÕES",
        gearTitle: "[ GUIA DE EQUIPAMENTO TÁTICO ]",
        gearRuleTitle: "REGRAS DE OURO",
        gearBuildTitle: "ORDEM DE CONSTRUÇÃO",
        gearLevelTitle: "ESTRATÉGIA DE NÍVEL",
        viewGearStats: "▶ VER ESTATÍSTICAS COMPLETAS",
        mon: "SEG", tue: "TER", wed: "QUA", thu: "QUI", fri: "SEX", sat: "SÁB",
        showEnds: "▶ VER GUIA",
        hideEnds: "▼ FECHAR GUIA",
        f2pTitle: "💎 ESTRATÉGIA F2P",
        vipTitle: "💰 ESTRATÉGIA VIP",
        toolsTitle: "FERRAMENTAS TÁTICAS",
        armsRaceTitle: "CONTAGEM REGRESSIVA",
        nextBlock: "PRÓXIMO BLOCO",
        days: ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO", "DOMINGO"],
        events: [
            "RADAR E EXPANSÃO", "DIA DE CONSTRUÇÃO", "TEC. E PESQUISA", "DIA DE HERÓIS", "MOBILIZAÇÃO TOTAL", "DESTRUIDOR DE INIMIGOS", "DIA DE DESCANSO"
        ],
        gearRules: [
            "⚠️ <span class='gear-highlight'>Nível do QG</span> é Prioridade #1",
            "🛡️ Foque em <span class='gear-highlight'>UM Esquadrão</span>",
            "🚫 Não abra baús sem necessidade"
        ],
        gearBuild: [
            "1. <span class='gear-highlight'>Canhão</span> (Ataque)",
            "2. <span class='gear-highlight'>Radar</span> (Def. Energia)",
            "3. <span class='gear-highlight'>Armadura</span> (Def. Física)",
            "4. <span class='gear-highlight'>Chip</span> (PV)"
        ],
        gearPhases: [
            { title: "FASE 1", text: "Suba tudo para <span class='gear-highlight'>Nível 10</span>" },
            { title: "FASE 2", text: "Canhões Atacantes -> Nvl 40" },
            { title: "FASE 3", text: "Radar/Armadura Defensores -> Nvl 40" }
        ],
        tips: [
            { // Mon
                f2p: ['📦 Guarde baús de expansão das recompensas diárias', '⏩ Use aceleradores grátis estrategicamente', '📡 Foque em radar para melhor exploração', '🤝 Complete tarefas da aliança'],
                vip: ['🛍️ Melhor pacote: Expansão (70% off)', '⚡ Considere VIP para construções instantâneas', '💎 Pacotes de recursos valem a pena', '🏗️ Acumule aceleradores de loja']
            },
            { // Tue
                f2p: ['🏗️ Guarde aceleradores de construção até hoje', '🏠 Melhore edifícios de recursos primeiro', '👷 Participe de eventos de construção', '🚀 Use boosts grátis'],
                vip: ['👷‍♂️ Melhor pacote: Construtor', '🏗️ VIP 8+ dá segunda fila de construção', '⏩ Aceleradores com 50% de desconto', '📅 Cartão mensal para aceleradores diários']
            },
            { // Wed
                f2p: ['🔬 Guarde aceleradores de pesquisa', '⚔️ Foque na árvore de tecnologia militar', '🧪 Complete tarefas de pesquisa', '🤝 Peça ajuda da aliança'],
                vip: ['🧪 Melhor pacote: Acelerador de Pesquisa', '⚡ Aceleradores tech são essenciais', '🧠 Considere boost permanente', '💎 Bônus VIP acumulam']
            },
            { // Thu
                f2p: ['🦸 Guarde itens de XP de herói', '🎯 Foque em um herói por vez', '🧩 Missões de herói para fragmentos', '🛒 Loja da aliança para shards'],
                vip: ['🎁 Melhor pacote: Baú de Herói', '🌟 Fragmentos lendários em promoção', '📈 Boosters de XP com 60% off', '👕 Skins de herói para bônus']
            },
            { // Fri
                f2p: ['🎖️ Acumule aceleradores de treino', '💪 Treine tropas de maior nível', '🚀 Use boosts de treino da aliança', '✅ Complete tarefas por recompensas'],
                vip: ['⚔️ Melhor pacote: Mobilização', '⏩ Aceleradores de treino com 70% off', '🍞 Pacotes de recursos ajudam no treino', '📈 Boost VIP acumula com eventos']
            },
            { // Sat (Enemy Buster) - UPDATED
                f2p: [
                    '🛡️ USE ESCUDO 24H no reset se não for lutar',
                    '🚀 Vá para o servidor inimigo com aliados para apoio',
                    '🎯 Ataque inimigos de nível baixo',
                    '🤝 Junte-se a rallies para ganhar sem perder escudo'
                ],
                vip: [
                    '🛡️ USE ESCUDO 24H se não estiver 100% ativo',
                    '🚀 Vá ao servidor inimigo com o grupo principal',
                    '🔥 Faça rallies em alvos fortes (mantém o escudo!)',
                    '🏰 Ajude a defender bases aliadas'
                ]
            }
        ]
    }
};

// ===== VS DUEL SCHEDULE DATA (Icons Only) =====
const scheduleData = [
    { dayNum: 0, icon: '📡' },  // Monday
    { dayNum: 1, icon: '🏗️' },  // Tuesday
    { dayNum: 2, icon: '🔬' },  // Wednesday
    { dayNum: 3, icon: '🦸' },  // Thursday
    { dayNum: 4, icon: '🎖️' },  // Friday
    { dayNum: 5, icon: '💀' },  // Saturday
    { dayNum: 6, icon: '🛡️' }   // Sunday (Rest Day)
];

// ===== REMAINDER OF FILE UNCHANGED =====

// ===== STATE MANAGEMENT =====
let currentLang = localStorage.getItem('dstm_lang') || 'en';
let currentDay = getCurrentDayOfWeek();

// ===== UTILITY FUNCTIONS =====

// Get current UTC time
function getCurrentUTCTime() {
    return new Date();
}

// Format UTC time as HH:MM:SS
function formatUTCTime(date) {
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Get current day of week in UTC (0 = Monday, 6 = Sunday)
function getCurrentDayOfWeek() {
    const now = new Date();
    const utcDay = now.getUTCDay();
    // Convert Sunday (0) to 6, and shift Monday-Saturday to 0-5
    return utcDay === 0 ? 6 : utcDay - 1;
}

// Calculate time remaining until next Arms Race (4-hour block)
function getTimeUntilNextArmsRace() {
    const now = new Date();
    const currentHour = now.getUTCHours();
    const currentMinute = now.getUTCMinutes();
    const currentSecond = now.getUTCSeconds();

    // Calculate current 4-hour block (0, 4, 8, 12, 16, 20)
    const currentBlock = Math.floor(currentHour / 4) * 4;
    const nextBlock = (currentBlock + 4) % 24;

    // Calculate time until next block
    let hoursRemaining = nextBlock - currentHour;
    if (hoursRemaining <= 0) {
        hoursRemaining += 24;
    }
    hoursRemaining -= 1; // Subtract 1 because we're counting from current minute

    const minutesRemaining = 59 - currentMinute;
    const secondsRemaining = 59 - currentSecond;

    return {
        hours: hoursRemaining,
        minutes: minutesRemaining,
        seconds: secondsRemaining
    };
}

// Format countdown as HH:MM:SS
function formatCountdown(hours, minutes, seconds) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ===== CORE UPDATE FUNCTIONS =====

function updateClock() {
    const clockElement = document.getElementById('utcClock');
    if (clockElement) {
        clockElement.textContent = formatUTCTime(getCurrentUTCTime());
    }
}

function updateArmsRaceTimer() {
    const timerElement = document.getElementById('armsRaceTimer');
    if (timerElement) {
        const { hours, minutes, seconds } = getTimeUntilNextArmsRace();
        timerElement.textContent = formatCountdown(hours, minutes, seconds);
    }
}

// ===== LOCALIZATION LOGIC =====

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('dstm_lang', lang);
    const t = translations[lang];

    // Update static elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    // Update language buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update dynamic content (Schedule)
    updateScheduleContent(currentDay);

    // Update Gear Guide Content
    if (document.getElementById('gearRulesList')) {
        document.getElementById('gearRulesList').innerHTML = t.gearRules.map(rule => `<li>${rule}</li>`).join('');
        document.getElementById('gearBuildList').innerHTML = t.gearBuild.map(item => `<li>${item}</li>`).join('');
        document.getElementById('gearLevelContent').innerHTML = t.gearPhases.map(phase =>
            `<div class="gear-phase"><span class="gear-phase-title">${phase.title}</span>${phase.text}</div>`
        ).join('');
    }
}

function initLanguage() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.getAttribute('data-lang'));
        });
    });
    // Set initial language
    updateLanguage(currentLang);
}

// ===== VS DUEL SCHEDULE =====

function updateScheduleContent(dayNum) {
    const schedule = scheduleData[dayNum];
    const t = translations[currentLang];

    document.getElementById('eventIcon').textContent = schedule.icon;

    // Use translated Day and Event Name
    document.getElementById('eventDay').textContent = t.days[dayNum];
    document.getElementById('eventName').textContent = t.events[dayNum];

    // Update F2P tips from translation object
    const f2pList = document.getElementById('f2pTips');
    if (t.tips && t.tips[dayNum]) {
        f2pList.innerHTML = t.tips[dayNum].f2p.map(tip => `<li>${tip}</li>`).join('');
    }

    // Update Spender tips from translation object
    const spenderList = document.getElementById('spenderTips');
    if (t.tips && t.tips[dayNum]) {
        spenderList.innerHTML = t.tips[dayNum].vip.map(tip => `<li>${tip}</li>`).join('');
    }

    // Update active tab state
    const tabs = document.querySelectorAll('.day-tab');
    tabs.forEach(tab => {
        const tabDay = parseInt(tab.getAttribute('data-day'));
        if (tabDay === dayNum) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Reset tips state on day switch (optional)
    const tipsContent = document.getElementById('tipsContent');
    const tipsToggle = document.getElementById('tipsToggle');
    if (tipsContent.classList.contains('show')) {
        tipsToggle.textContent = t.hideEnds;
    } else {
        tipsToggle.textContent = t.showEnds;
    }
}

function setActiveDay(dayNum) {
    currentDay = dayNum;
    updateScheduleContent(dayNum);
}

function initDayTabs() {
    const tabs = document.querySelectorAll('.day-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const dayNum = parseInt(tab.getAttribute('data-day'));
            setActiveDay(dayNum);
        });
    });
}

function initTipsToggle() {
    const tipsToggle = document.getElementById('tipsToggle');
    const tipsContent = document.getElementById('tipsContent');

    tipsToggle.addEventListener('click', () => {
        const t = translations[currentLang];
        tipsContent.classList.toggle('show');
        tipsToggle.classList.toggle('active');

        if (tipsContent.classList.contains('show')) {
            tipsToggle.textContent = t.hideEnds;
        } else {
            tipsToggle.textContent = t.showEnds;
        }
    });
}

// ===== PARTICLE SYSTEM =====
const particleContainer = document.getElementById('particles-js');
const particleCount = 50;

function initParticles() {
    if (!particleContainer) return;

    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // Random properties
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}vw`;
    particle.style.top = `${y}vh`;
    particle.style.position = 'absolute';
    particle.style.background = 'var(--neon-blue)';
    particle.style.borderRadius = '50%';
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    particle.style.animation = `floatParticle ${duration}s linear infinite`;
    particle.style.animationDelay = `-${delay}s`;

    particleContainer.appendChild(particle);
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize systems
    initParticles();

    // Time & Timer
    updateClock();
    setInterval(updateClock, 1000);

    updateArmsRaceTimer();
    setInterval(updateArmsRaceTimer, 1000);

    // Schedule & Tips
    initDayTabs();
    initTipsToggle();

    // Localization (Must be called last to set initial state text)
    initLanguage();

    // Update current day every minute to keep highlight accurate
    // (Note: updateScheduleContent respects current language)
    setInterval(() => {
        const newDay = getCurrentDayOfWeek();
        if (newDay !== currentDay) {
            setActiveDay(newDay);
        }
    }, 60000);

    console.log('🎮 DRAGON STORM SYSTEM ONLINE');
});
