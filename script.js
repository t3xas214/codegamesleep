// CodeGameSleep — Last War Game Logic
document.addEventListener('DOMContentLoaded', () => {

  /* =========================================
     0. LOCALIZATION (i18n)
     ========================================= */
  const translations = {
    en: {
      power: "Power",
      nav_info: "Info",
      nav_duel: "VS Duel",
      nav_mail: "Mail",
      nav_base: "Base",

      alliance_status: "ALLIANCE STATUS",
      status_active: "ACTIVE",
      subtitle: "Just Built. Under Construction.",
      label_members: "MEMBERS",
      label_power: "POWER",
      label_server: "SERVER",

      motd_title: "NOTICE",
      motd_msg: "Focus on Radar tasks today! Don't forget to donate to tech. Capital war Sunday!",

      join_discord: "Join Discord",

      // VS Guide
      vs_title: "VS LEAGUE GUIDE",
      day_mon: "MON", day_radar: "Radar",
      day_tue: "TUE", day_base: "Base",
      day_wed: "WED", day_tech: "Tech",
      day_thu: "THU", day_hero: "Hero",
      day_fri: "FRI", day_train: "Train",
      day_sat: "SAT", day_kill: "Kill",

      card_radar_title: "Radar Expansion", card_radar_desc: "Use Stamina on Radar Tasks. Save Drone Data.",
      card_base_title: "City Expansion", card_base_desc: "Use Building Speedups. Buy UR Shards.",
      card_tech_title: "Scientific Research", card_tech_desc: "Use Tech Speedups. Open Valor chests.",
      card_hero_title: "Hero Training", card_hero_desc: "Use EXP and Recruit Tickets (Hero Day).",
      card_train_title: "Total Mobilization", card_train_desc: "Train Troops. Survivor Tokens.",
      card_kill_title: "Enemy Buster", card_kill_desc: "Kill Enemy Troops. Shield up if offline!",

      // Base
      commander_squad: "COMMANDER SQUAD",
      lvl: "Lvl 150",

      // Mail
      mail_title: "ALLIANCE MAIL",
      mail_1_title: "Victory vs. Zombie Lvl 50", mail_1_desc: "Loot: 50k Gold, 20k Steel", time_10m: "10m ago",
      mail_2_title: "Alliance Gift Lvl 5", mail_2_desc: "From: CommanderX", time_2h: "2h ago",
      btn_claim: "Claim",

      // Footer
      enlist_now: "Enlist Now",
      reqs: "Requirements: HQ Lvl 25+, 10M Power."
    },

    es: {
      power: "Poder",
      nav_info: "Info",
      nav_duel: "Duelo VS",
      nav_mail: "Correo",
      nav_base: "Base",

      alliance_status: "ESTADO ALIANZA",
      status_active: "ACTIVO",
      subtitle: "Recién Construido. En Construcción.",
      label_members: "MIEMBROS",
      label_power: "PODER",
      label_server: "SERVIDOR",

      motd_title: "AVISO",
      motd_msg: "¡Concentraos en el Radar hoy! No olvidéis donar tecnología. Guerra Capital el domingo!",

      join_discord: "Unirse a Discord",

      vs_title: "GUÍA LIGA VS",
      day_mon: "LUN", day_radar: "Radar",
      day_tue: "MAR", day_base: "Base",
      day_wed: "MIE", day_tech: "Tecno",
      day_thu: "JUE", day_hero: "Héroe",
      day_fri: "VIE", day_train: "Entreno",
      day_sat: "SAB", day_kill: "Matar",

      card_radar_title: "Expansión Radar", card_radar_desc: "Usa Resistencia en tareas de Radar. Guarda Datos de Dron.",
      card_base_title: "Expansión Ciudad", card_base_desc: "Usa Aceleradores de Construcción. Compra Fragmentos UR.",
      card_tech_title: "Investigación", card_tech_desc: "Usa Aceleradores de Tecno. Abre cofres de Valor.",
      card_hero_title: "Entreno Héroe", card_hero_desc: "Usa EXP y Tickets de Reclutamiento.",
      card_train_title: "Movilización Total", card_train_desc: "Entrena Tropas. Fichas de Superviviente.",
      card_kill_title: "Caza Enemigos", card_kill_desc: "Mata tropas enemigas. ¡Escudo si estás desconectado!",

      commander_squad: "ESCUADRÓN",
      lvl: "Nv 150",

      mail_title: "CORREO ALIANZA",
      mail_1_title: "Victoria vs. Zombi Nv 50", mail_1_desc: "Botín: 50k Oro, 20k Acero", time_10m: "10m atrás",
      mail_2_title: "Regalo Alianza Nv 5", mail_2_desc: "De: CommanderX", time_2h: "2h atrás",
      btn_claim: "Reclamar",

      enlist_now: "¡Alístate!",
      reqs: "Requisito: CG Nv 25+, 10M Poder."
    },

    pt: {
      power: "Poder",
      nav_info: "Info",
      nav_duel: "Duelo VS",
      nav_mail: "Correio",
      nav_base: "Base",

      alliance_status: "STATUS ALIANÇA",
      status_active: "ATIVO",
      subtitle: "Recém Construído. Em Construção.",
      label_members: "MEMBROS",
      label_power: "PODER",
      label_server: "SERVIDOR",

      motd_title: "AVISO",
      motd_msg: "Foco no Radar hoje! Não esqueçam de doar tecnologia. Guerra da Capital Domingo!",

      join_discord: "Entrar Discord",

      vs_title: "GUIA LIGA VS",
      day_mon: "SEG", day_radar: "Radar",
      day_tue: "TER", day_base: "Base",
      day_wed: "QUA", day_tech: "Tecno",
      day_thu: "QUI", day_hero: "Herói",
      day_fri: "SEX", day_train: "Treino",
      day_sat: "SAB", day_kill: "Matar",

      card_radar_title: "Expansão Radar", card_radar_desc: "Use Energia no Radar. Guarde Dados de Drone.",
      card_base_title: "Expansão Cidade", card_base_desc: "Use Aceleradores. Compre Fragmentos UR.",
      card_tech_title: "Investigação", card_tech_desc: "Use Acel. Tecno. Abra baús de Valor.",
      card_hero_title: "Treino Herói", card_hero_desc: "Use EXP e Tickets de Recrutamento.",
      card_train_title: "Mobilização Total", card_train_desc: "Treine Tropas. Tokens de Sobrevivente.",
      card_kill_title: "Caça Inimigos", card_kill_desc: "Mate tropas inimigas. Use escudo se offline!",

      commander_squad: "ESQUADRÃO",
      lvl: "Nv 150",

      mail_title: "CORREIO ALIANÇA",
      mail_1_title: "Vitória vs. Zumbi Nv 50", mail_1_desc: "Saque: 50k Ouro, 20k Aço", time_10m: "10m atrás",
      mail_2_title: "Presente Aliança Nv 5", mail_2_desc: "De: CommanderX", time_2h: "2h atrás",
      btn_claim: "Resgatar",

      enlist_now: "Aliste-se!",
      reqs: "Requisito: CG Nv 25+, 10M Poder."
    }
  };

  const langBtns = document.querySelectorAll('.lang-btn');
  const translatableElements = document.querySelectorAll('[data-i18n]');

  function setLanguage(lang) {
    // 1. Update Buttons
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // 2. Update Text
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerText = translations[lang][key];
      }
    });

    // 3. Save Preference
    localStorage.setItem('lang', lang);
  }

  // Init
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);

  // Listeners
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });


  // ==========================================
  // 1. SPA TAB SYSTEM (App Mode)
  // ==========================================
  const navLinks = document.querySelectorAll('.bottom-nav .nav-item');
  const panels = document.querySelectorAll('.game-panel');

  // Function to switch tabs
  function switchTab(targetId) {
    // Hide all panels
    panels.forEach(p => p.classList.add('hidden'));

    // Deactivate all nav links
    navLinks.forEach(l => l.classList.remove('active'));

    // Show target panel
    const targetPanel = document.getElementById(targetId);
    if (targetPanel) {
      targetPanel.classList.remove('hidden');

      // Animate entry
      targetPanel.style.opacity = '0';
      targetPanel.style.transform = 'translateY(10px)';
      requestAnimationFrame(() => {
        targetPanel.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        targetPanel.style.opacity = '1';
        targetPanel.style.transform = 'translateY(0)';
      });
    }

    // Activate corresponding link
    const activeLink = document.querySelector(`.bottom-nav a[href="#${targetId}"]`);
    if (activeLink) activeLink.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
  }

  // Event Listeners for Tabs
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); // remove #
      switchTab(targetId);
    });
  });

  // Handle URL hash on load (Deep linking)
  const hash = window.location.hash.substring(1);
  if (hash && document.getElementById(hash)) {
    switchTab(hash);
  } else {
    // Default to Welcome
    switchTab('welcome');
  }


  // ==========================================
  // 2. DAILY VS EVENT HIGHLIGHTER
  // ==========================================
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const todayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday...

  // Map JS Day IndexIn to our Card Index (Our HTML order: Mon, Tue, Wed, Thu, Fri, Sat)
  // Mon(1) -> 0, Tue(2) -> 1 ... Sat(6) -> 5. Sunday is usually Day 7 or break.

  const vsCards = document.querySelectorAll('.vs-card');
  let activeCardIndex = -1;

  if (todayIndex >= 1 && todayIndex <= 6) {
    activeCardIndex = todayIndex - 1; // 0-indexed for NodeList
  } else if (todayIndex === 0) {
    // Handle Sunday if needed (maybe show all or nothing?)
    // For now, let's assume Sunday is Break day or free choice
  }

  if (activeCardIndex >= 0 && vsCards[activeCardIndex]) {
    const card = vsCards[activeCardIndex];
    card.classList.add('active-day');

    // Add "TODAY" badge
    const badge = document.createElement('div');
    badge.className = 'today-badge';
    badge.innerText = 'ACTIVE';
    card.appendChild(badge);
  }


  // ==========================================
  // 3. INTERACTIVE BUTTONS
  // ==========================================

  // "Claim" Buttons
  const claimBtns = document.querySelectorAll('.btn-claim');
  claimBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (this.disabled) return;

      // Success State
      this.innerText = 'CLAIMED';
      this.classList.add('btn-disabled'); // If we have a class, otherwise inline style
      this.style.background = '#333';
      this.style.color = '#888';
      this.style.boxShadow = 'none';
      this.style.transform = 'translateY(2px)';
      this.disabled = true;

      // Floating text effect
      showFloatingText(this, '+REWARDS', '#ffd700');
    });
  });

  // Resource "+" Buttons
  const addResources = document.querySelectorAll('.res-add');
  addResources.forEach(btn => {
    btn.addEventListener('click', function () {
      showFloatingText(this, 'Purchased!', '#00ff00');
    });
  });


  // Helper: Floating Text Animation
  function showFloatingText(element, text, color) {
    const rect = element.getBoundingClientRect();
    const floatEl = document.createElement('div');
    floatEl.innerText = text;
    floatEl.style.position = 'fixed';
    floatEl.style.left = rect.left + 'px';
    floatEl.style.top = rect.top + 'px';
    floatEl.style.color = color;
    floatEl.style.fontWeight = 'bold';
    floatEl.style.fontSize = '12px';
    floatEl.style.textShadow = '0 2px 4px rgba(0,0,0,0.5)';
    floatEl.style.pointerEvents = 'none';
    floatEl.style.zIndex = '9999';
    floatEl.style.transition = 'all 1s ease-out';

    document.body.appendChild(floatEl);

    requestAnimationFrame(() => {
      floatEl.style.transform = 'translateY(-30px)';
      floatEl.style.opacity = '0';
    });

    setTimeout(() => {
      floatEl.remove();
    }, 1000);
  }

});
