// ===================================
// DRAGON STORM ALLIANCE HUB v3.0
// Interactive Features & Localization
// ===================================

// ===== TRANSLATION DATA =====
const translations = {
    en: {
        // Nav
        navStaff: "STAFF", navRules: "RULES", navGear: "GEAR",
        navHeroes: "HEROES", navSchedule: "SCHEDULE", navTools: "TOOLS",

        // Hero
        tagline: "🔥 BORAAAAA! 🔥",
        server: "SERVER",
        systemOnline: "SYSTEM ONLINE",
        allianceTag: "ALLIANCE TAG",
        serverNum: "SERVER",
        activeStatus: "ACTIVE",
        status: "STATUS",

        // MOTD
        motdTitle: "MESSAGE OF THE DAY",
        motdText: "Welcome to Dragon Storm! Check the schedule daily and coordinate with your R4/R5. Shield up during Enemy Buster if you can't be active!",

        // Clock
        systemTime: "SYSTEM TIME",
        gameTime: "UTC / GAME TIME",

        // Staff
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
        specStrategy: "Strategy",
        specCombat: "Combat",
        specDiplomacy: "Diplomacy",
        specRecruitment: "Recruitment",
        specLogistics: "Logistics",

        // Rules
        rulesTitle: "ALLIANCE PROTOCOLS",
        rulesCombatTitle: "COMBAT RULES",
        rulesResourceTitle: "RESOURCE RULES",
        rulesCommsTitle: "COMMUNICATION",
        rulesCombat: [
            "🛡️ Shield up when offline or during Enemy Buster",
            "⚔️ Always join alliance rallies when online",
            "🚫 Never attack alliance members or NAP alliances",
            "📍 Stay near the hive — don't solo far away",
            "🎯 Focus targets called by R4/R5 during wars"
        ],
        rulesResource: [
            "📦 Donate to alliance tech daily",
            "🏗️ Use alliance help for all builds & research",
            "🚫 Don't farm tiles inside the hive zone",
            "💰 Share excess resources with struggling members",
            "🎁 Participate in alliance gift events"
        ],
        rulesComms: [
            "💬 Check alliance chat at least once daily",
            "📢 Report enemy scouts to R4/R5 immediately",
            "🤝 Be respectful to all members — no drama",
            "📋 Read pinned messages and announcements"
        ],

        // Gear
        gearTitle: "TACTICAL GEAR GUIDE",
        gearRuleTitle: "THE GOLDEN RULES",
        gearBuildTitle: "GEAR TYPES & PRIORITY",
        gearLevelTitle: "UPGRADE STRATEGY",
        gearRarityTitle: "RARITY & BLUEPRINTS",
        gearDpsTitle: "DPS HERO GEAR",
        gearTankTitle: "TANK HERO GEAR",
        viewGearStats: "▶ VIEW FULL GEAR STATS",
        gearRules: [
            "⚠️ <span class='gear-highlight'>HQ LEVEL</span> is ALWAYS your #1 Priority",
            "🛡️ Focus on <span class='gear-highlight'>ONE Main Squad</span> of 5 heroes only",
            "🚫 Don't open resource chests until you actually need them",
            "🔧 Upgrade gear in increments of <span class='gear-highlight'>10 levels</span> to unlock bonus attributes",
            "📦 Save crafting materials (screws) for <span class='gear-highlight'>Epic (purple)</span> or <span class='gear-highlight'>Legendary (gold)</span> gear only",
            "🎯 Specialize your heroes for one troop type (Tanks, Aircraft, or Missiles)"
        ],
        gearBuild: [
            "🔫 <span class='gear-highlight'>Cannon/Railgun</span> — Boosts Attack power. Priority for all DPS heroes.",
            "📡 <span class='gear-highlight'>Radar</span> — Boosts Energy Defense & reduces skill damage. Universal must-have.",
            "🛡️ <span class='gear-highlight'>Armor</span> — Boosts Physical Defense. Essential for frontline tanks.",
            "💾 <span class='gear-highlight'>Chip</span> — Boosts HP & survivability. Good for tanks and bruisers."
        ],
        gearPhases: [
            { title: "PHASE 1 — EARLY GAME", text: "Get all gear to <span class='gear-highlight'>Level 10</span>, then pause and invest in drones & research" },
            { title: "PHASE 2 — MID GAME", text: "Rush your 3 main DPS heroes' <span class='gear-highlight'>Guns to Level 40</span> for star promotion" },
            { title: "PHASE 3 — TANKS", text: "Level tanks' <span class='gear-highlight'>Armor & Radar to 40</span> for durability" },
            { title: "PHASE 4 — STAR PROMOTION", text: "At Lvl 40, promote gear with <span class='gear-highlight'>Legendary Blueprints</span> (Honor Shop & events)" },
            { title: "PHASE 5 — MYTHIC", text: "5th star requires <span class='gear-highlight'>Mythic Blueprints</span>. Needs Gear Factory Lvl 20+" }
        ],
        gearRarity: [
            "🟢 <span class='gear-highlight'>Common (Green)</span> — Starter gear. Don't invest.",
            "🔵 <span class='gear-highlight'>Rare (Blue)</span> — Temporary. Replace ASAP.",
            "🟣 <span class='gear-highlight'>Epic (Purple)</span> — Good mid-game. Worth leveling.",
            "🟡 <span class='gear-highlight'>Legendary (Gold)</span> — End-game gear. Craft and star promote these.",
            "🔴 <span class='gear-highlight'>Mythic</span> — Max power. Requires 5-star Legendary + Mythic Blueprints."
        ],
        gearDps: [
            "🔫 Priority 1: <span class='gear-highlight'>Cannon to 40</span> — Raw damage is king",
            "📡 Priority 2: <span class='gear-highlight'>Radar to 40</span> — Survivability so they stay alive",
            "🛡️ Priority 3: <span class='gear-highlight'>Armor</span> — Physical defense",
            "💾 Priority 4: <span class='gear-highlight'>Chip</span> — HP buffer"
        ],
        gearTank: [
            "🛡️ Priority 1: <span class='gear-highlight'>Armor to 40</span> — Physical damage reduction",
            "📡 Priority 2: <span class='gear-highlight'>Radar to 40</span> — Energy/skill damage reduction",
            "💾 Priority 3: <span class='gear-highlight'>Chip</span> — Max HP for lasting longer",
            "🔫 Priority 4: <span class='gear-highlight'>Cannon</span> — Moderate damage boost"
        ],

        // Heroes
        heroesTitle: "RECOMMENDED HEROES",
        heroesSubtitle: "Based on current meta — focus resources on S-tier first",

        // Schedule
        scheduleTitle: "OPERATIONS SCHEDULE",
        mon: "MON", tue: "TUE", wed: "WED", thu: "THU", fri: "FRI", sat: "SAT", sun: "SUN",
        showEnds: "▶ ACCESS TARGET GUIDE",
        hideEnds: "▼ CLOSE TARGET GUIDE",
        f2pTitle: "💎 F2P STRATEGY",
        vipTitle: "💰 VIP STRATEGY",
        days: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"],
        events: [
            "RADAR & EXPANSION", "BUILDING DAY", "TECH & RESEARCH", "HERO DAY", "TOTAL MOBILIZATION", "ENEMY BUSTER", "REST DAY"
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
        ],

        // Tools
        toolsTitle: "TACTICAL TOOLS",
        armsRaceTitle: "ARMS RACE COUNTDOWN",
        nextBlock: "NEXT EVENT BLOCK",

        // Links
        linksTitle: "QUICK LINKS",
        linkGuides: "Guides",

        // Footer
        footerVersion: "Alliance Hub v3.0"
    },
    es: {
        navStaff: "EQUIPO", navRules: "REGLAS", navGear: "EQUIPO",
        navHeroes: "HÉROES", navSchedule: "AGENDA", navTools: "HERRAM.",
        tagline: "🔥 BORAAAAA! 🔥",
        server: "SERVIDOR",
        systemOnline: "SISTEMA EN LÍNEA",
        allianceTag: "ETIQUETA",
        serverNum: "SERVIDOR",
        activeStatus: "ACTIVO",
        status: "ESTADO",
        motdTitle: "MENSAJE DEL DÍA",
        motdText: "¡Bienvenido a Dragon Storm! Revisa el calendario diario y coordina con tu R4/R5. ¡Escudo durante Enemy Buster si no puedes estar activo!",
        systemTime: "HORA DEL SISTEMA",
        gameTime: "UTC / HORA DE JUEGO",
        commandStaff: "ESTADO MAYOR",
        roleLeader: "LÍDER", roleWarlord: "GENERAL", roleMuse: "DIPLOMÁTICO",
        roleRecruiter: "RECLUTADOR", roleButler: "MAYORDOMO",
        descLeader: "Cerebro estratégico. Comandante de la Alianza.",
        descWarlord: "Operaciones Militares y Estrategia de Guerra.",
        descMuse: "Diplomacia y Relaciones Públicas.",
        descRecruiter: "Reclutamiento y Adquisición de Talento.",
        descButler: "Gestión de Recursos y Logística.",
        specStrategy: "Estrategia", specCombat: "Combate", specDiplomacy: "Diplomacia",
        specRecruitment: "Reclutamiento", specLogistics: "Logística",
        rulesTitle: "PROTOCOLOS DE ALIANZA",
        rulesCombatTitle: "REGLAS DE COMBATE",
        rulesResourceTitle: "REGLAS DE RECURSOS",
        rulesCommsTitle: "COMUNICACIÓN",
        rulesCombat: [
            "🛡️ Escudo activo cuando estés offline o en Enemy Buster",
            "⚔️ Únete siempre a los rallies cuando estés online",
            "🚫 Nunca ataques a miembros o alianzas NAP",
            "📍 Mantente cerca de la colmena",
            "🎯 Enfócate en objetivos señalados por R4/R5"
        ],
        rulesResource: [
            "📦 Dona a la tecnología de alianza diariamente",
            "🏗️ Pide ayuda para construcción e investigación",
            "🚫 No recolectes dentro de la zona de la colmena",
            "💰 Comparte recursos con miembros que lo necesiten",
            "🎁 Participa en eventos de regalo"
        ],
        rulesComms: [
            "💬 Revisa el chat al menos una vez al día",
            "📢 Reporta espías enemigos a R4/R5 inmediatamente",
            "🤝 Sé respetuoso — sin dramas",
            "📋 Lee los mensajes fijados"
        ],
        gearTitle: "GUÍA DE EQUIPO TÁCTICO",
        gearRuleTitle: "REGLAS DE ORO",
        gearBuildTitle: "TIPOS DE EQUIPO Y PRIORIDAD",
        gearLevelTitle: "ESTRATEGIA DE MEJORA",
        gearRarityTitle: "RAREZA Y PLANOS",
        gearDpsTitle: "EQUIPO PARA DPS",
        gearTankTitle: "EQUIPO PARA TANQUES",
        viewGearStats: "▶ VER ESTADÍSTICAS COMPLETAS",
        gearRules: [
            "⚠️ <span class='gear-highlight'>Nivel de CG</span> es SIEMPRE Prioridad #1",
            "🛡️ Enfócate en <span class='gear-highlight'>UN Escuadrón</span> de 5 héroes",
            "🚫 No abras cofres hasta que los necesites",
            "🔧 Mejora equipo en incrementos de <span class='gear-highlight'>10 niveles</span> para atributos extra",
            "📦 Guarda materiales para equipo <span class='gear-highlight'>Épico (morado)</span> o <span class='gear-highlight'>Legendario (dorado)</span>",
            "🎯 Especializa tus héroes en un tipo de tropa (Tanques, Aviones o Misiles)"
        ],
        gearBuild: [
            "🔫 <span class='gear-highlight'>Cañón/Railgun</span> — Aumenta Ataque. Prioridad para DPS.",
            "📡 <span class='gear-highlight'>Radar</span> — Def. Energía y reduce daño de habilidades. Universal.",
            "🛡️ <span class='gear-highlight'>Armadura</span> — Def. Física. Esencial para tanques.",
            "💾 <span class='gear-highlight'>Chip</span> — Aumenta HP. Bueno para tanques."
        ],
        gearPhases: [
            { title: "FASE 1 — INICIO", text: "Sube todo a <span class='gear-highlight'>Nivel 10</span>, luego invierte en drones e investigación" },
            { title: "FASE 2 — MEDIO", text: "Sube <span class='gear-highlight'>Cañones de DPS a Nivel 40</span> para promoción de estrellas" },
            { title: "FASE 3 — TANQUES", text: "Sube <span class='gear-highlight'>Armadura y Radar de tanques a 40</span>" },
            { title: "FASE 4 — ESTRELLAS", text: "A Nvl 40, promociona con <span class='gear-highlight'>Planos Legendarios</span> (Tienda de Honor)" },
            { title: "FASE 5 — MÍTICO", text: "5ta estrella requiere <span class='gear-highlight'>Planos Míticos</span>. Fábrica de Equipo Nvl 20+" }
        ],
        gearRarity: [
            "🟢 <span class='gear-highlight'>Común (Verde)</span> — Inicial. No inviertas.",
            "🔵 <span class='gear-highlight'>Raro (Azul)</span> — Temporal. Reemplaza pronto.",
            "🟣 <span class='gear-highlight'>Épico (Morado)</span> — Buen medio juego.",
            "🟡 <span class='gear-highlight'>Legendario (Dorado)</span> — Equipo final. Fabrica y promociona.",
            "🔴 <span class='gear-highlight'>Mítico</span> — Máximo poder. Requiere 5 estrellas + Planos Míticos."
        ],
        gearDps: [
            "🔫 Prioridad 1: <span class='gear-highlight'>Cañón a 40</span> — Daño bruto",
            "📡 Prioridad 2: <span class='gear-highlight'>Radar a 40</span> — Supervivencia",
            "🛡️ Prioridad 3: <span class='gear-highlight'>Armadura</span> — Def. física",
            "💾 Prioridad 4: <span class='gear-highlight'>Chip</span> — HP extra"
        ],
        gearTank: [
            "🛡️ Prioridad 1: <span class='gear-highlight'>Armadura a 40</span> — Reducción de daño físico",
            "📡 Prioridad 2: <span class='gear-highlight'>Radar a 40</span> — Reducción de daño de habilidad",
            "💾 Prioridad 3: <span class='gear-highlight'>Chip</span> — HP máximo",
            "🔫 Prioridad 4: <span class='gear-highlight'>Cañón</span> — Daño moderado"
        ],
        heroesTitle: "HÉROES RECOMENDADOS",
        heroesSubtitle: "Basado en el meta actual — enfoca recursos en S-tier primero",
        scheduleTitle: "CALENDARIO DE OPERACIONES",
        mon: "LUN", tue: "MAR", wed: "MIÉ", thu: "JUE", fri: "VIE", sat: "SÁB", sun: "DOM",
        showEnds: "▶ VER GUÍA",
        hideEnds: "▼ CERRAR GUÍA",
        f2pTitle: "💎 ESTRATEGIA F2P",
        vipTitle: "💰 ESTRATEGIA VIP",
        days: ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO", "DOMINGO"],
        events: [
            "RADAR Y EXPANSIÓN", "DÍA DE CONSTRUCCIÓN", "TEC. E INVESTIGACIÓN", "DÍA DE HÉROES", "MOVILIZACIÓN TOTAL", "DESTRUCTOR DE ENEMIGOS", "DÍA DE DESCANSO"
        ],
        tips: [
            {
                f2p: ['📦 Guarda cofres de expansión de recompensas diarias', '⏩ Usa aceleradores gratuitos estratégicamente', '📡 Prioriza mejoras de radar para explorar', '🤝 Completa tareas de alianza para recursos'],
                vip: ['🛍️ Mejor paquete: Expansión (70% descuento)', '⚡ Considera VIP para construcciones instantáneas', '💎 Paquetes de recursos valen la pena hoy', '🏗️ Acumula aceleradores de construcción']
            },
            {
                f2p: ['🏗️ Guarda aceleradores de construcción hasta hoy', '🏠 Mejora edificios de recursos primero', '👷 Únete a eventos de construcción', '🚀 Usa impulsos de constructor gratuitos'],
                vip: ['👷‍♂️ Mejor paquete: Constructor', '🏗️ VIP 8+ da segunda cola de construcción', '⏩ Aceleradores al 50% descuento', '📅 Tarjeta mensual para aceleradores diarios']
            },
            {
                f2p: ['🔬 Guarda aceleradores de investigación', '⚔️ Enfócate en tecnología militar', '🧪 Completa tareas de investigación', '🤝 Pide ayuda a la alianza para reducir tiempo'],
                vip: ['🧪 Mejor paquete: Acelerador de Investigación', '⚡ Aceleradores de tecnología son clave', '🧠 Considera impulso permanente', '💎 Bonos VIP se suman a eventos']
            },
            {
                f2p: ['🦸 Guarda todo ítem de XP de héroe', '🎯 Enfócate en un héroe a la vez', '🧩 Misiones de héroe para fragmentos', '🛒 Tienda de alianza para fragmentos'],
                vip: ['🎁 Mejor paquete: Cofre de Héroe', '🌟 Fragmentos legendarios en oferta', '📈 Potenciadores de XP al 60% descuento', '👕 Skins de héroe para bonificaciones']
            },
            {
                f2p: ['🎖️ Acumula aceleradores de entrenamiento', '💪 Entrena tropas de mayor nivel', '🚀 Usa impulsos de entrenamiento', '✅ Completa tareas para recompensas'],
                vip: ['⚔️ Mejor paquete: Movilización', '⏩ Aceleradores de entrenamiento al 70%', '🍞 Paquetes de recursos mantienen el ritmo', '📈 Impulso VIP se suma a eventos']
            },
            {
                f2p: ['🛡️ USA ESCUDO 24H al reinicio si no peleas', '🚀 Ve al servidor enemigo con aliados', '🎯 Ataca enemigos de nivel bajo', '🤝 Únete a rallies para ganar sin perder escudo'],
                vip: ['🛡️ USA ESCUDO 24H si no estarás activo 24/7', '🚀 Ve al servidor enemigo con el grupo', '🔥 Haz rallies a objetivos fuertes', '🏰 Ayuda a defender bases aliadas']
            },
            {
                f2p: ['🛡️ MANTÉN EL ESCUDO - No hay eventos mayores hoy', '📦 Buen día para organizar inventario', '🎯 Planea tu estrategia para la semana', '🤝 Ayuda a compañeros de alianza'],
                vip: ['🛡️ Mantén escudo y descansa', '📊 Revisa progreso semanal', '💎 Revisa ofertas de fin de semana', '🏰 Coordina con R4/R5 para la próxima semana']
            }
        ],
        toolsTitle: "HERRAMIENTAS TÁCTICAS",
        armsRaceTitle: "CUENTA REGRESIVA",
        nextBlock: "PRÓXIMO BLOQUE",
        linksTitle: "ENLACES RÁPIDOS",
        linkGuides: "Guías",
        footerVersion: "Hub de Alianza v3.0"
    },
    pt: {
        navStaff: "EQUIPE", navRules: "REGRAS", navGear: "EQUIP.",
        navHeroes: "HERÓIS", navSchedule: "AGENDA", navTools: "FERRAM.",
        tagline: "🔥 BORAAAAA! 🔥",
        server: "SERVIDOR",
        systemOnline: "SISTEMA ONLINE",
        allianceTag: "TAG DA ALIANÇA",
        serverNum: "SERVIDOR",
        activeStatus: "ATIVO",
        status: "STATUS",
        motdTitle: "MENSAGEM DO DIA",
        motdText: "Bem-vindo ao Dragon Storm! Verifique a agenda diariamente e coordene com seu R4/R5. Escudo durante Enemy Buster se não puder estar ativo!",
        systemTime: "HORA DO SISTEMA",
        gameTime: "UTC / HORA DO JOGO",
        commandStaff: "COMANDO",
        roleLeader: "LÍDER", roleWarlord: "GENERAL", roleMuse: "DIPLOMATA",
        roleRecruiter: "RECRUTADOR", roleButler: "MORDOMO",
        descLeader: "Mente estratégica. Comandante da Aliança.",
        descWarlord: "Operações Militares e Estratégia de Guerra.",
        descMuse: "Diplomacia e Relações Públicas.",
        descRecruiter: "Recrutamento e Gestão de Talentos.",
        descButler: "Gestão de Recursos e Logística.",
        specStrategy: "Estratégia", specCombat: "Combate", specDiplomacy: "Diplomacia",
        specRecruitment: "Recrutamento", specLogistics: "Logística",
        rulesTitle: "PROTOCOLOS DA ALIANÇA",
        rulesCombatTitle: "REGRAS DE COMBATE",
        rulesResourceTitle: "REGRAS DE RECURSOS",
        rulesCommsTitle: "COMUNICAÇÃO",
        rulesCombat: [
            "🛡️ Escudo ativo quando offline ou durante Enemy Buster",
            "⚔️ Sempre participe dos rallies quando online",
            "🚫 Nunca ataque membros ou alianças NAP",
            "📍 Fique perto da colmeia",
            "🎯 Foque nos alvos indicados pelo R4/R5"
        ],
        rulesResource: [
            "📦 Doe para a tecnologia da aliança diariamente",
            "🏗️ Peça ajuda para construções e pesquisas",
            "🚫 Não colete dentro da zona da colmeia",
            "💰 Compartilhe recursos com membros necessitados",
            "🎁 Participe de eventos de presente"
        ],
        rulesComms: [
            "💬 Verifique o chat pelo menos uma vez por dia",
            "📢 Reporte espiões inimigos ao R4/R5 imediatamente",
            "🤝 Seja respeitoso — sem dramas",
            "📋 Leia as mensagens fixadas"
        ],
        gearTitle: "GUIA DE EQUIPAMENTO TÁTICO",
        gearRuleTitle: "REGRAS DE OURO",
        gearBuildTitle: "TIPOS DE EQUIPAMENTO E PRIORIDADE",
        gearLevelTitle: "ESTRATÉGIA DE MELHORIA",
        gearRarityTitle: "RARIDADE E PROJETOS",
        gearDpsTitle: "EQUIPAMENTO PARA DPS",
        gearTankTitle: "EQUIPAMENTO PARA TANQUES",
        viewGearStats: "▶ VER ESTATÍSTICAS COMPLETAS",
        gearRules: [
            "⚠️ <span class='gear-highlight'>Nível do QG</span> é SEMPRE Prioridade #1",
            "🛡️ Foque em <span class='gear-highlight'>UM Esquadrão</span> de 5 heróis",
            "🚫 Não abra baús sem necessidade real",
            "🔧 Melhore equipamento em incrementos de <span class='gear-highlight'>10 níveis</span> para atributos bônus",
            "📦 Guarde materiais para equipamento <span class='gear-highlight'>Épico (roxo)</span> ou <span class='gear-highlight'>Lendário (dourado)</span>",
            "🎯 Especialize seus heróis em um tipo de tropa (Tanques, Aeronaves ou Mísseis)"
        ],
        gearBuild: [
            "🔫 <span class='gear-highlight'>Canhão/Railgun</span> — Aumenta Ataque. Prioridade para DPS.",
            "📡 <span class='gear-highlight'>Radar</span> — Def. Energia e reduz dano de habilidades. Universal.",
            "🛡️ <span class='gear-highlight'>Armadura</span> — Def. Física. Essencial para tanques.",
            "💾 <span class='gear-highlight'>Chip</span> — Aumenta HP. Bom para tanques."
        ],
        gearPhases: [
            { title: "FASE 1 — INÍCIO", text: "Suba tudo para <span class='gear-highlight'>Nível 10</span>, depois invista em drones e pesquisa" },
            { title: "FASE 2 — MEIO", text: "Suba <span class='gear-highlight'>Canhões de DPS para Nível 40</span> para promoção de estrelas" },
            { title: "FASE 3 — TANQUES", text: "Suba <span class='gear-highlight'>Armadura e Radar de tanques a 40</span>" },
            { title: "FASE 4 — ESTRELAS", text: "No Nvl 40, promova com <span class='gear-highlight'>Projetos Lendários</span> (Loja de Honra)" },
            { title: "FASE 5 — MÍTICO", text: "5ª estrela requer <span class='gear-highlight'>Projetos Míticos</span>. Fábrica de Equipamento Nvl 20+" }
        ],
        gearRarity: [
            "🟢 <span class='gear-highlight'>Comum (Verde)</span> — Inicial. Não invista.",
            "🔵 <span class='gear-highlight'>Raro (Azul)</span> — Temporário. Substitua logo.",
            "🟣 <span class='gear-highlight'>Épico (Roxo)</span> — Bom meio de jogo.",
            "🟡 <span class='gear-highlight'>Lendário (Dourado)</span> — Equipamento final. Fabrique e promova.",
            "🔴 <span class='gear-highlight'>Mítico</span> — Poder máximo. Requer 5 estrelas + Projetos Míticos."
        ],
        gearDps: [
            "🔫 Prioridade 1: <span class='gear-highlight'>Canhão a 40</span> — Dano bruto",
            "📡 Prioridade 2: <span class='gear-highlight'>Radar a 40</span> — Sobrevivência",
            "🛡️ Prioridade 3: <span class='gear-highlight'>Armadura</span> — Def. física",
            "💾 Prioridade 4: <span class='gear-highlight'>Chip</span> — HP extra"
        ],
        gearTank: [
            "🛡️ Prioridade 1: <span class='gear-highlight'>Armadura a 40</span> — Redução de dano físico",
            "📡 Prioridade 2: <span class='gear-highlight'>Radar a 40</span> — Redução de dano de habilidade",
            "💾 Prioridade 3: <span class='gear-highlight'>Chip</span> — HP máximo",
            "🔫 Prioridade 4: <span class='gear-highlight'>Canhão</span> — Dano moderado"
        ],
        heroesTitle: "HERÓIS RECOMENDADOS",
        heroesSubtitle: "Baseado no meta atual — foque recursos em S-tier primeiro",
        scheduleTitle: "AGENDA DE OPERAÇÕES",
        mon: "SEG", tue: "TER", wed: "QUA", thu: "QUI", fri: "SEX", sat: "SÁB", sun: "DOM",
        showEnds: "▶ VER GUIA",
        hideEnds: "▼ FECHAR GUIA",
        f2pTitle: "💎 ESTRATÉGIA F2P",
        vipTitle: "💰 ESTRATÉGIA VIP",
        days: ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO", "DOMINGO"],
        events: [
            "RADAR E EXPANSÃO", "DIA DE CONSTRUÇÃO", "TEC. E PESQUISA", "DIA DE HERÓIS", "MOBILIZAÇÃO TOTAL", "DESTRUIDOR DE INIMIGOS", "DIA DE DESCANSO"
        ],
        tips: [
            {
                f2p: ['📦 Guarde baús de expansão das recompensas diárias', '⏩ Use aceleradores grátis estrategicamente', '📡 Foque em radar para melhor exploração', '🤝 Complete tarefas da aliança'],
                vip: ['🛍️ Melhor pacote: Expansão (70% off)', '⚡ Considere VIP para construções instantâneas', '💎 Pacotes de recursos valem a pena', '🏗️ Acumule aceleradores de loja']
            },
            {
                f2p: ['🏗️ Guarde aceleradores de construção até hoje', '🏠 Melhore edifícios de recursos primeiro', '👷 Participe de eventos de construção', '🚀 Use boosts grátis'],
                vip: ['👷‍♂️ Melhor pacote: Construtor', '🏗️ VIP 8+ dá segunda fila de construção', '⏩ Aceleradores com 50% de desconto', '📅 Cartão mensal para aceleradores diários']
            },
            {
                f2p: ['🔬 Guarde aceleradores de pesquisa', '⚔️ Foque na árvore de tecnologia militar', '🧪 Complete tarefas de pesquisa', '🤝 Peça ajuda da aliança'],
                vip: ['🧪 Melhor pacote: Acelerador de Pesquisa', '⚡ Aceleradores tech são essenciais', '🧠 Considere boost permanente', '💎 Bônus VIP acumulam']
            },
            {
                f2p: ['🦸 Guarde itens de XP de herói', '🎯 Foque em um herói por vez', '🧩 Missões de herói para fragmentos', '🛒 Loja da aliança para shards'],
                vip: ['🎁 Melhor pacote: Baú de Herói', '🌟 Fragmentos lendários em promoção', '📈 Boosters de XP com 60% off', '👕 Skins de herói para bônus']
            },
            {
                f2p: ['🎖️ Acumule aceleradores de treino', '💪 Treine tropas de maior nível', '🚀 Use boosts de treino da aliança', '✅ Complete tarefas por recompensas'],
                vip: ['⚔️ Melhor pacote: Mobilização', '⏩ Aceleradores de treino com 70% off', '🍞 Pacotes de recursos ajudam no treino', '📈 Boost VIP acumula com eventos']
            },
            {
                f2p: ['🛡️ USE ESCUDO 24H no reset se não for lutar', '🚀 Vá para o servidor inimigo com aliados', '🎯 Ataque inimigos de nível baixo', '🤝 Junte-se a rallies para ganhar sem perder escudo'],
                vip: ['🛡️ USE ESCUDO 24H se não estiver 100% ativo', '🚀 Vá ao servidor inimigo com o grupo principal', '🔥 Faça rallies em alvos fortes', '🏰 Ajude a defender bases aliadas']
            },
            {
                f2p: ['🛡️ MANTENHA O ESCUDO - Sem eventos grandes hoje', '📦 Bom dia para organizar inventário', '🎯 Planeje sua estratégia para a semana', '🤝 Ajude companheiros da aliança'],
                vip: ['🛡️ Mantenha escudo e descanse', '📊 Revise progresso semanal', '💎 Confira ofertas de fim de semana', '🏰 Coordene com R4/R5 para a próxima semana']
            }
        ],
        toolsTitle: "FERRAMENTAS TÁTICAS",
        armsRaceTitle: "CONTAGEM REGRESSIVA",
        nextBlock: "PRÓXIMO BLOCO",
        linksTitle: "LINKS RÁPIDOS",
        linkGuides: "Guias",
        footerVersion: "Hub da Aliança v3.0"
    }
};

// ===== HERO RECOMMENDATION DATA =====
const heroData = [
    // S-Tier — Must-have heroes
    { icon: '💥', name: 'Kimberly', role: 'TANK — AoE DPS', tier: 'S', desc: 'Devastating AoE attacker. Excels at clearing waves in PvE & PvP. Must-have.' },
    { icon: '✈️', name: 'DVA', role: 'AIRCRAFT — Single Target', tier: 'S', desc: 'Exceptional burst damage. Ideal for eliminating priority targets and bosses.' },
    { icon: '🛡️', name: 'Williams', role: 'TANK — Defense', tier: 'S', desc: 'Ultimate defensive tank. Team-wide damage reduction. Essential frontline.' },
    { icon: '🚀', name: 'Tesla', role: 'MISSILE — Energy DPS', tier: 'S', desc: 'High energy damage. Destroys armored enemies. Indispensable late-game.' },
    { icon: '⭐', name: 'Marshall', role: 'TANK — Support', tier: 'S', desc: 'Amplifies team attack & shields allies. Core mid-to-late game support.' },
    { icon: '🏰', name: 'Murphy', role: 'TANK — Defense', tier: 'S', desc: 'Strong defensive stats. HP & attack team buffs. Scales with battle pressure.' },
    // A-Tier — Strong picks
    { icon: '⚡', name: 'Schuyler', role: 'AIRCRAFT — CC', tier: 'A', desc: 'Stuns and paralyzes enemies. Great PvP disruption and crowd control.' },
    { icon: '🎯', name: 'Fiona', role: 'MISSILE — Multi-target', tier: 'A', desc: 'Versatile multi-target DPS. Effective in PvE missions and mid-scale PvP.' },
    { icon: '🔥', name: 'Morrison', role: 'AIRCRAFT — DPS', tier: 'A', desc: 'Strong damage dealer for aircraft compositions. Versatile attacker.' },
    // B-Tier — Situational
    { icon: '☠️', name: 'Venom', role: 'MISSILE — Poison DoT', tier: 'B', desc: 'Poison damage specialist. Best in long endurance battles and PvE raids.' },
    { icon: '⚔️', name: 'Richard', role: 'TANK — Bruiser', tier: 'B', desc: 'Moderate AoE damage as frontline bruiser. Good for PvE wave clearing.' }
];

// ===== VS DUEL SCHEDULE DATA =====
const scheduleData = [
    { dayNum: 0, icon: '📡' },  // Monday
    { dayNum: 1, icon: '🏗️' },  // Tuesday
    { dayNum: 2, icon: '🔬' },  // Wednesday
    { dayNum: 3, icon: '🦸' },  // Thursday
    { dayNum: 4, icon: '🎖️' },  // Friday
    { dayNum: 5, icon: '💀' },  // Saturday
    { dayNum: 6, icon: '🛡️' }   // Sunday
];

// ===== STATE MANAGEMENT =====
let currentLang = localStorage.getItem('dstm_lang') || 'en';
let currentDay = getCurrentDayOfWeek();
let lastScrollY = 0;

// ===== UTILITY FUNCTIONS =====
function getCurrentUTCTime() {
    return new Date();
}

function formatUTCTime(date) {
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function getCurrentDayOfWeek() {
    const now = new Date();
    const utcDay = now.getUTCDay();
    return utcDay === 0 ? 6 : utcDay - 1;
}

function getTimeUntilNextArmsRace() {
    const now = new Date();
    const currentHour = now.getUTCHours();
    const currentMinute = now.getUTCMinutes();
    const currentSecond = now.getUTCSeconds();

    const currentBlock = Math.floor(currentHour / 4) * 4;
    const nextBlock = (currentBlock + 4) % 24;

    let hoursRemaining = nextBlock - currentHour;
    if (hoursRemaining <= 0) hoursRemaining += 24;
    hoursRemaining -= 1;

    const minutesRemaining = 59 - currentMinute;
    const secondsRemaining = 59 - currentSecond;

    // Calculate total seconds remaining and elapsed for progress bar
    const totalSecondsInBlock = 4 * 60 * 60;
    const secondsElapsed = ((currentHour % 4) * 3600) + (currentMinute * 60) + currentSecond;
    const progress = (secondsElapsed / totalSecondsInBlock) * 100;

    return {
        hours: hoursRemaining,
        minutes: minutesRemaining,
        seconds: secondsRemaining,
        progress: progress,
        totalMinutesRemaining: (hoursRemaining * 60) + minutesRemaining
    };
}

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
    const timerContainer = document.querySelector('.arms-race-timer');
    const progressFill = document.getElementById('timerProgressFill');

    if (timerElement) {
        const { hours, minutes, seconds, progress, totalMinutesRemaining } = getTimeUntilNextArmsRace();
        timerElement.textContent = formatCountdown(hours, minutes, seconds);

        // Update progress bar
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }

        // Update urgency class
        if (timerContainer) {
            timerContainer.classList.remove('urgency-high', 'urgency-mid', 'urgency-low');
            if (totalMinutesRemaining <= 30) {
                timerContainer.classList.add('urgency-high');
            } else if (totalMinutesRemaining <= 120) {
                timerContainer.classList.add('urgency-mid');
            } else {
                timerContainer.classList.add('urgency-low');
            }
        }
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

    // Update dynamic content
    updateScheduleContent(currentDay);
    updateRulesContent(t);
    updateGearContent(t);
    updateHeroesContent();
}

function updateRulesContent(t) {
    const combatList = document.getElementById('rulesCombatList');
    const resourceList = document.getElementById('rulesResourceList');
    const commsList = document.getElementById('rulesCommsList');

    if (combatList && t.rulesCombat) {
        combatList.innerHTML = t.rulesCombat.map(r => `<li>${r}</li>`).join('');
    }
    if (resourceList && t.rulesResource) {
        resourceList.innerHTML = t.rulesResource.map(r => `<li>${r}</li>`).join('');
    }
    if (commsList && t.rulesComms) {
        commsList.innerHTML = t.rulesComms.map(r => `<li>${r}</li>`).join('');
    }
}

function updateGearContent(t) {
    if (document.getElementById('gearRulesList')) {
        document.getElementById('gearRulesList').innerHTML = t.gearRules.map(rule => `<li>${rule}</li>`).join('');
        document.getElementById('gearBuildList').innerHTML = t.gearBuild.map(item => `<li>${item}</li>`).join('');
        document.getElementById('gearLevelContent').innerHTML = t.gearPhases.map(phase =>
            `<div class="gear-phase"><span class="gear-phase-title">${phase.title}</span>${phase.text}</div>`
        ).join('');
    }
    // New cards
    const rarityList = document.getElementById('gearRarityList');
    if (rarityList && t.gearRarity) {
        rarityList.innerHTML = t.gearRarity.map(item => `<li>${item}</li>`).join('');
    }
    const dpsList = document.getElementById('gearDpsList');
    if (dpsList && t.gearDps) {
        dpsList.innerHTML = t.gearDps.map(item => `<li>${item}</li>`).join('');
    }
    const tankList = document.getElementById('gearTankList');
    if (tankList && t.gearTank) {
        tankList.innerHTML = t.gearTank.map(item => `<li>${item}</li>`).join('');
    }
}

function updateHeroesContent() {
    const grid = document.getElementById('heroesGrid');
    if (!grid) return;

    grid.innerHTML = heroData.map(hero => `
        <div class="hero-card">
            <span class="hero-tier-badge tier-${hero.tier.toLowerCase()}">${hero.tier}</span>
            <div class="hero-card-icon">${hero.icon}</div>
            <div class="hero-card-name">${hero.name}</div>
            <div class="hero-card-role">${hero.role}</div>
            <div class="hero-card-desc">${hero.desc}</div>
        </div>
    `).join('');
}

function initLanguage() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.getAttribute('data-lang'));
        });
    });
    updateLanguage(currentLang);
}

// ===== VS DUEL SCHEDULE =====
function updateScheduleContent(dayNum) {
    const schedule = scheduleData[dayNum];
    const t = translations[currentLang];

    document.getElementById('eventIcon').textContent = schedule.icon;
    document.getElementById('eventDay').textContent = t.days[dayNum];
    document.getElementById('eventName').textContent = t.events[dayNum];

    // F2P tips
    const f2pList = document.getElementById('f2pTips');
    if (t.tips && t.tips[dayNum]) {
        f2pList.innerHTML = t.tips[dayNum].f2p.map(tip => `<li>${tip}</li>`).join('');
    }

    // VIP tips
    const spenderList = document.getElementById('spenderTips');
    if (t.tips && t.tips[dayNum]) {
        spenderList.innerHTML = t.tips[dayNum].vip.map(tip => `<li>${tip}</li>`).join('');
    }

    // Update active tab state
    const tabs = document.querySelectorAll('.day-tab');
    tabs.forEach(tab => {
        const tabDay = parseInt(tab.getAttribute('data-day'));
        tab.classList.toggle('active', tabDay === dayNum);
    });

    // Toggle button text
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
    const todayNum = getCurrentDayOfWeek();

    tabs.forEach(tab => {
        const dayNum = parseInt(tab.getAttribute('data-day'));
        // Mark today's tab
        if (dayNum === todayNum) {
            tab.classList.add('today');
        }
        tab.addEventListener('click', () => {
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

    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

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

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ===== NAV SCROLL SPY =====
function initNavScrollSpy() {
    const nav = document.getElementById('mainNav');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');

    // Hide/show nav on scroll
    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;

        // Show/hide nav
        if (currentY > lastScrollY && currentY > 200) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        lastScrollY = currentY;

        // Show/hide back to top
        if (backToTop) {
            backToTop.classList.toggle('visible', currentY > 500);
        }
    });

    // Active section highlighting
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'))}px 0px -40% 0px`
    });

    sections.forEach(section => sectionObserver.observe(section));

    // Back to top click
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ===== HAMBURGER MENU =====
function initHamburger() {
    const hamburger = document.getElementById('navHamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close menu on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Particles
    initParticles();

    // Time & Timer
    updateClock();
    setInterval(updateClock, 1000);
    updateArmsRaceTimer();
    setInterval(updateArmsRaceTimer, 1000);

    // Schedule & Tips
    initDayTabs();
    initTipsToggle();

    // Localization (must be called last to set initial state)
    initLanguage();

    // Scroll Effects
    initScrollReveal();
    initNavScrollSpy();
    initHamburger();

    // Check for day change every minute
    setInterval(() => {
        const newDay = getCurrentDayOfWeek();
        if (newDay !== currentDay) {
            setActiveDay(newDay);
        }
    }, 60000);

    console.log('🎮 DRAGON STORM SYSTEM v3.0 ONLINE');
});
