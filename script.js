// CodeGameSleep — Last War Game Logic
document.addEventListener('DOMContentLoaded', () => {
  
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
    badge.innerText = 'ACTIVE NOW';
    card.appendChild(badge);
  }


  // ==========================================
  // 3. INTERACTIVE BUTTONS
  // ==========================================
  
  // "Claim" Buttons
  const claimBtns = document.querySelectorAll('.btn-claim');
  claimBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.disabled) return;
      
      // Success State
      this.innerText = 'CLAIMED';
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
    btn.addEventListener('click', function() {
      showFloatingText(this, 'Purchased!', '#00ff00');
    });
  });

  // Research Buttons
  const researchBtns = document.querySelectorAll('.btn-mini');
  researchBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      if(this.innerText === 'MAX') return;
      
      this.innerText = 'Researching...';
      this.style.opacity = '0.7';
      
      setTimeout(() => {
        this.innerText = 'Lv Up!';
        this.style.background = 'var(--intel)';
        setTimeout(() => {
          this.innerText = 'Research';
           this.style.background = '';
           this.style.opacity = '1';
        }, 1000);
      }, 1000);
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
