// CodeGameSleep — Interactive Features
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('main-nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      nav.classList.toggle('open');
      document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        mobileMenuToggle.focus();
      }
    });
  }
  
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

  // Enhanced Scroll reveal animation with Intersection Observer
  const revealObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
        // Add staggered delay for multiple items
        const delayClass = `reveal-delay-${(index % 3) + 1}`;
        entry.target.classList.add(delayClass);
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  // Observe sections and cards for scroll reveal
  document.querySelectorAll('section, .card, .clip-card, .stat-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    revealObserver.observe(el);
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

  // Enhanced Form Validation
  const clipForm = document.getElementById('clipSubmitForm');
  const submitSuccess = document.getElementById('submitSuccess');

  if (clipForm) {
    const formFields = {
      clipperName: {
        element: document.getElementById('clipperName'),
        error: document.getElementById('clipperName-error'),
        validate: (value) => {
          if (!value.trim()) return 'Name is required';
          if (value.trim().length < 2) return 'Name must be at least 2 characters';
          if (value.length > 50) return 'Name must be less than 50 characters';
          return '';
        }
      },
      clipGame: {
        element: document.getElementById('clipGame'),
        error: document.getElementById('clipGame-error'),
        validate: (value) => {
          if (!value.trim()) return 'Game name is required';
          if (value.trim().length < 2) return 'Game name must be at least 2 characters';
          return '';
        }
      },
      clipUrl: {
        element: document.getElementById('clipUrl'),
        error: document.getElementById('clipUrl-error'),
        validate: (value) => {
          if (!value.trim()) return 'URL is required';
          try {
            const url = new URL(value);
            const validDomains = ['youtube.com', 'youtu.be', 'twitch.tv', 'tiktok.com', 'instagram.com', 'twitter.com', 'x.com'];
            const hostname = url.hostname.replace('www.', '');
            if (!validDomains.some(domain => hostname.includes(domain))) {
              return 'Please enter a valid URL from YouTube, Twitch, TikTok, Instagram, or Twitter';
            }
          } catch {
            return 'Please enter a valid URL';
          }
          return '';
        }
      },
      clipDescription: {
        element: document.getElementById('clipDescription'),
        error: document.getElementById('clipDescription-error'),
        validate: (value) => {
          if (!value.trim()) return 'Description is required';
          if (value.trim().length < 10) return 'Description must be at least 10 characters';
          if (value.length > 500) return 'Description must be less than 500 characters';
          return '';
        }
      }
    };

    // Real-time validation
    Object.entries(formFields).forEach(([fieldName, field]) => {
      if (field.element && field.error) {
        // Validate on blur
        field.element.addEventListener('blur', () => {
          const error = field.validate(field.element.value);
          field.error.textContent = error;
          if (error) {
            field.element.setAttribute('aria-invalid', 'true');
          } else {
            field.element.setAttribute('aria-invalid', 'false');
          }
        });

        // Clear error on input
        field.element.addEventListener('input', () => {
          if (field.element.getAttribute('aria-invalid') === 'true') {
            const error = field.validate(field.element.value);
            field.error.textContent = error;
            if (!error) {
              field.element.setAttribute('aria-invalid', 'false');
            }
          }
        });
      }
    });

    // Form submission with validation
    clipForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      let isValid = true;
      
      // Validate all fields
      Object.entries(formFields).forEach(([fieldName, field]) => {
        if (field.element && field.error) {
          const error = field.validate(field.element.value);
          field.error.textContent = error;
          if (error) {
            field.element.setAttribute('aria-invalid', 'true');
            isValid = false;
            field.element.focus();
          } else {
            field.element.setAttribute('aria-invalid', 'false');
          }
        }
      });

      if (!isValid) {
        // Focus first invalid field
        const firstInvalid = Object.values(formFields).find(field => 
          field.element && field.element.getAttribute('aria-invalid') === 'true'
        );
        if (firstInvalid) {
          firstInvalid.element.focus();
        }
        return;
      }
      
      const formData = {
        name: formFields.clipperName.element.value.trim(),
        game: formFields.clipGame.element.value.trim(),
        url: formFields.clipUrl.element.value.trim(),
        description: formFields.clipDescription.element.value.trim(),
        tiktokConsent: document.getElementById('tiktokConsent').checked,
        creditConsent: document.getElementById('creditConsent').checked,
        timestamp: new Date().toISOString()
      };

      // In production, you'd send this to a backend API
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
        submitSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

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
          
          // Clear all error messages
          Object.values(formFields).forEach(field => {
            if (field.element) {
              field.element.setAttribute('aria-invalid', 'false');
            }
            if (field.error) {
              field.error.textContent = '';
            }
          });
        }, 5000);
      }, 1500);
    });
  }

  // Keyboard navigation improvements (already handled in mobile menu section, but kept for consistency)

  // Improved card keyboard navigation
  document.querySelectorAll('.card, .clip-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const link = card.querySelector('a');
        if (link) {
          link.click();
        }
      }
    });
  });
});
