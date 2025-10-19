// CodeGameSleep — Interactive Features
document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', currentTheme);
  
  themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add a little bounce animation
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
      themeToggle.style.transform = '';
    }, 150);
  });

  // Active Navigation Link Tracking
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  
  function setActiveLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // Call on load

  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Project filter functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      // Filter cards with animation
      cards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Scroll reveal animation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards for scroll reveal
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });

  // Typing effect for tagline (optional enhancement)
  const tagline = document.querySelector('.tagline');
  if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    setTimeout(typeWriter, 500);
  }

  // Gaming Clip Submission Form
  const clipForm = document.getElementById('clipSubmitForm');
  const submitSuccess = document.getElementById('submitSuccess');

  if (clipForm) {
    clipForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('clipperName').value,
        game: document.getElementById('clipGame').value,
        url: document.getElementById('clipUrl').value,
        description: document.getElementById('clipDescription').value,
        tiktokConsent: document.getElementById('tiktokConsent').checked,
        creditConsent: document.getElementById('creditConsent').checked,
        timestamp: new Date().toISOString()
      };

      // In production, you'd send this to a backend API
      // For now, we'll simulate the submission
      console.log('Clip Submission:', formData);

      // Show loading state
      const submitBtn = clipForm.querySelector('.submit-btn');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Submitting...</span>';

      // Simulate API call
      setTimeout(() => {
        // Hide form and show success message
        clipForm.style.display = 'none';
        submitSuccess.style.display = 'block';

        // Optional: Store in localStorage for demo purposes
        const submissions = JSON.parse(localStorage.getItem('clipSubmissions') || '[]');
        submissions.push(formData);
        localStorage.setItem('clipSubmissions', JSON.stringify(submissions));

        // Reset form after 5 seconds
        setTimeout(() => {
          clipForm.reset();
          clipForm.style.display = 'flex';
          submitSuccess.style.display = 'none';
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }, 5000);
      }, 1500);
    });
  }
});
