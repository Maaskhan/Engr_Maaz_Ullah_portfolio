/**
 * MAAZ ULLAH KHAN - PORTFOLIO INTERACTION ENGINE
 * Handles Theme, Smooth Scroll, Micro-Interactions, and Visual Effects
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initTheme();
  initTypingEffect();
  initScrollReveal();
  initImageEffects();
  initContactForm();
});

/* -------------------------------------------------------------
 * 1. Navbar Sticky & Active States
 * ------------------------------------------------------------- */
function initNavbar() {
  const nav = document.getElementById('siteNav');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Active Section Tracking
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    // Close on link click
    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
}

/* -------------------------------------------------------------
 * 2. Dark / Light Theme System
 * ------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme-preference') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme-preference', newTheme);
    });
  }
}

/* -------------------------------------------------------------
 * 3. Dynamic Rotating Text / Typing Animation
 * ------------------------------------------------------------- */
function initTypingEffect() {
  const roleElement = document.getElementById('roleTyping');
  if (!roleElement) return;

  const roles = [
    'AI & Machine Learning Engineer',
    'Deep Learning Specialist',
    'Intelligent Systems Architect',
    'Python & Data Scientist',
    'Computer Vision & NLP Builder'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 45;
    } else {
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      typingDelay = 2000; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400; // Pause before typing next
    }

    setTimeout(type, typingDelay);
  }

  type();
}

/* -------------------------------------------------------------
 * 4. Intersection Observer for Scroll Reveal
 * ------------------------------------------------------------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* -------------------------------------------------------------
 * 5. Interactive 3D Tilt / Micro-Parallax on Profile Images
 * ------------------------------------------------------------- */
function initImageEffects() {
  // Hero Image Frame (IMAGE 1)
  const heroFrame = document.querySelector('.hero-frame-container');
  if (heroFrame && window.innerWidth > 768) {
    heroFrame.addEventListener('mousemove', (e) => {
      const rect = heroFrame.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      heroFrame.style.transform = `perspective(1000px) rotateY(${x * 0.04}deg) rotateX(${-y * 0.04}deg) scale(1.02)`;
    });

    heroFrame.addEventListener('mouseleave', () => {
      heroFrame.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
      heroFrame.style.transition = 'transform 0.5s ease';
    });

    heroFrame.addEventListener('mouseenter', () => {
      heroFrame.style.transition = 'none';
    });
  }

  // About Image Card (IMAGE 2)
  const aboutCard = document.querySelector('.about-main-card');
  if (aboutCard && window.innerWidth > 768) {
    aboutCard.addEventListener('mousemove', (e) => {
      const rect = aboutCard.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      aboutCard.style.transform = `perspective(1000px) rotateY(${x * 0.025}deg) rotateX(${-y * 0.025}deg) translateY(-6px)`;
    });

    aboutCard.addEventListener('mouseleave', () => {
      aboutCard.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)';
      aboutCard.style.transition = 'transform 0.5s ease';
    });

    aboutCard.addEventListener('mouseenter', () => {
      aboutCard.style.transition = 'none';
    });
  }
}

/* -------------------------------------------------------------
 * 6. Contact Form Interaction & Email Copy
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<span>Message Sent Successfully! ✓</span>';
      submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)';
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
      }, 4000);
    });
  }

  // Copy Email Functionality
  const copyBtn = document.getElementById('copyEmailBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'maazullah.engineer@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = 'Copied to Clipboard!';
        setTimeout(() => {
          copyBtn.innerText = originalText;
        }, 2500);
      }).catch(err => {
        console.error('Copy failed:', err);
      });
    });
  }
}
