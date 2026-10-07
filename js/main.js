// Main UI Logic for Dina Salah Aldin Saber's Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initNavbar();
  initDatabaseExplorer();
  initProjects();
  initProjectModal();
  initContactForm();
  initCopyButtons();
  initScrollAnimations();
});

/* ========================================================
   1. Theme Management (Light / Dark Mode)
   ======================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  
  // Check localStorage or system preference
  const savedTheme = localStorage.getItem('dina_portfolio_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const activeTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'dark'); // Default to dark developer theme
  setTheme(activeTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dina_portfolio_theme', theme);
    if (themeIcon) {
      if (theme === 'dark') {
        themeIcon.className = 'fa-solid fa-sun';
        themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
      } else {
        themeIcon.className = 'fa-solid fa-moon';
        themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
        themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
      }
    }
  }
}

/* ========================================================
   2. Typing Effect in Hero Section
   ======================================================== */
function initTypingEffect() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return;

  const roles = [
    "Junior Full Stack .NET Developer",
    "ASP.NET Core MVC & C# Developer",
    "Relational Database & ERD Architect",
    "2x ICPC / ECPC Contestant",
    "Proven University Team Leader"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before new word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ========================================================
   3. Navbar, Mobile Menu, & Scroll-Spy
   ======================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  // Sticky navbar shadow and back-to-top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scroll-Spy
    let currentSection = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Back to top click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ========================================================
   4. Interactive Database Explorer
   ======================================================== */
function initDatabaseExplorer() {
  const tabButtons = document.querySelectorAll('.db-tab-btn');
  const codeDisplay = document.getElementById('db-code-display');
  const codeTitle = document.getElementById('db-code-title');
  const codeTech = document.getElementById('db-code-tech');
  const codeDesc = document.getElementById('db-code-desc');
  const copyBtn = document.getElementById('copy-db-code-btn');

  function renderSnippet(key) {
    const snippet = databaseSnippets[key];
    if (!snippet) return;

    if (codeTitle) codeTitle.textContent = snippet.title;
    if (codeTech) codeTech.textContent = snippet.tech;
    if (codeDesc) codeDesc.textContent = snippet.description;
    if (codeDisplay) {
      codeDisplay.textContent = snippet.code;
    }
  }

  // Initial render with Pharos
  renderSnippet('pharos');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const snippetKey = btn.getAttribute('data-snippet');
      renderSnippet(snippetKey);
    });
  });

  if (copyBtn && codeDisplay) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeDisplay.textContent).then(() => {
        const originalHtml = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        copyBtn.classList.add('btn-success');
        setTimeout(() => {
          copyBtn.innerHTML = originalHtml;
          copyBtn.classList.remove('btn-success');
        }, 2200);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    });
  }
}

/* ========================================================
   5. Projects Filtering & Grid
   ======================================================== */
function initProjects() {
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ========================================================
   6. Project Modal Deep Dive
   ======================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContent = document.getElementById('modal-body-content');
  const openButtons = document.querySelectorAll('.view-project-btn');

  if (!modal || !modalContent) return;

  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    modalContent.innerHTML = `
      <div class="modal-project-header">
        <div class="modal-badge-wrapper">
          <span class="project-badge">${project.badge}</span>
        </div>
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-subtitle">${project.subtitle}</p>
        
        <div class="modal-tags">
          ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <!-- Interactive Screenshot Gallery -->
      <div class="modal-gallery-container">
        <div class="modal-gallery-main">
          <img id="gallery-active-img" src="${project.screenshots[0].url}" alt="${project.screenshots[0].title}" class="gallery-active-img">
          <div class="gallery-caption" id="gallery-active-caption">
            <div class="gallery-caption-title">${project.screenshots[0].title}</div>
            <div class="gallery-caption-desc">${project.screenshots[0].caption}</div>
          </div>
        </div>

        ${project.screenshots && project.screenshots.length > 1 ? `
          <div class="gallery-thumbs-row">
            ${project.screenshots.map((s, idx) => `
              <button class="gallery-thumb-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}" title="${s.title}">
                <img src="${s.url}" alt="${s.title}">
                <span class="thumb-label">${s.title}</span>
              </button>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <div class="modal-section">
        <h3><i class="fa-solid fa-circle-info"></i> Project Overview</h3>
        <p>${project.shortDesc}</p>
      </div>

      <div class="modal-grid-features">
        <div class="modal-col">
          <h4><i class="fa-solid fa-user"></i> Core User Features</h4>
          <ul class="modal-bullet-list">
            ${project.userFeatures.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
        
        <div class="modal-col">
          <h4><i class="fa-solid fa-shield-halved"></i> Admin & Management Features</h4>
          <ul class="modal-bullet-list">
            ${project.adminFeatures.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="modal-section highlight-box">
        <h3><i class="fa-solid fa-crown" style="color: #fbbf24;"></i> Dina's Leadership & Technical Role</h3>
        <ul class="modal-bullet-list lead-list">
          ${project.dinaRole.map(r => `<li><strong>${r.split(':')[0]}:</strong> ${r.split(':').slice(1).join(':')}</li>`).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h3><i class="fa-solid fa-database"></i> Database Design & Relational Highlights</h3>
        <p style="margin-bottom: 10px;">${project.databaseNotes}</p>
        <div class="erd-pills-container">
          ${project.erdHighlights.map(e => `<span class="erd-pill"><i class="fa-solid fa-diagram-project"></i> ${e}</span>`).join('')}
        </div>
      </div>
    `;

    // Initialize thumbnail click handlers
    const thumbButtons = modalContent.querySelectorAll('.gallery-thumb-btn');
    const activeImg = document.getElementById('gallery-active-img');
    const captionTitle = modalContent.querySelector('.gallery-caption-title');
    const captionDesc = modalContent.querySelector('.gallery-caption-desc');

    thumbButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        thumbButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        const selected = project.screenshots[idx];
        if (selected && activeImg) {
          activeImg.style.opacity = '0.3';
          setTimeout(() => {
            activeImg.src = selected.url;
            activeImg.alt = selected.title;
            if (captionTitle) captionTitle.textContent = selected.title;
            if (captionDesc) captionDesc.textContent = selected.caption;
            activeImg.style.opacity = '1';
          }, 120);
        }
      });
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scrolling
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project-id');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Close on outside click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ========================================================
   7. Contact Form Handling
   ======================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notification');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    // Trigger Mailto compose
    const mailtoSubject = encodeURIComponent(subject || `Portfolio Inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(`Hello Dina,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`);
    const mailtoLink = `mailto:dinasalah15122005@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    showToast('Opening your email app to send message directly to Dina...', 'success');
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      form.reset();
    }, 1200);
  });

  function showToast(msg, type = 'success') {
    if (!toast) return;
    toast.textContent = msg;
    toast.className = `toast-notification visible ${type}`;
    setTimeout(() => {
      toast.className = 'toast-notification';
    }, 4500);
  }
}

/* ========================================================
   8. One-Click Copy Buttons (Email, Phone)
   ======================================================== */
function initCopyButtons() {
  const copyEmailButtons = document.querySelectorAll('.copy-email-btn');

  copyEmailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'dinasalah15122005@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      });
    });
  });
}

/* ========================================================
   9. Scroll Animations & Counter
   ======================================================== */
function initScrollAnimations() {
  // Intersection Observer for fade-in animations
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  animatedElements.forEach(el => observer.observe(el));
}
