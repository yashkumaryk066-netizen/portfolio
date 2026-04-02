/* =============================================
   MAIN.JS — Yash Ankush Mishra Portfolio
   Premium Interactions & Animations
   ============================================= */

// ===== LOADING =====
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  initAll();
});

function initAll() {
  initCursor();
  initParticles();
  initNavbar();
  initTyped();
  initReveal();
  initCounters();
  initContactForm();
  initBackToTop();
  initMobileMenu();
  setYear();
  // ===== ADVANCED EFFECTS =====
  initScrollProgress();
  initGSAP();
  initVanillaTilt();
  initMagneticButtons();
  initGSAPTitles();
  initHeroParallax();
  initDraggableBadges();
  initFuturisticBackground();
}

// ===== YEAR =====
function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}

// ===== CUSTOM CURSOR =====
function initCursor() {
  if (window.innerWidth <= 768) return;
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX - 4 + 'px';
    dot.style.top = mouseY - 4 + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX - 18) * 0.12;
    ringY += (mouseY - ringY - 18) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effects
  document.querySelectorAll('a, button, .project-card, .skill-pill').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.transform = 'scale(2)';
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.borderColor = 'rgba(139, 92, 246, 0.8)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform = 'scale(1)';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(139, 92, 246, 0.5)';
    });
  });
}

// ===== PARTICLES =====
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 90;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '139, 92, 246' : '6, 182, 212';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }
  animate();
}

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active section highlight
    let current = '';
    sections.forEach(sec => {
      const sTop = sec.offsetTop - 120;
      if (window.scrollY >= sTop) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// ===== TYPED TEXT ANIMATION =====
function initTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const words = [
    'AI Systems',
    'Web Apps',
    'Mobile Apps',
    'EdTech Products',
    'FinTech Tools',
    'Full Stack Magic',
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const word = words[wordIndex];
    if (isDeleting) {
      el.textContent = word.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = word.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === word.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }
  setTimeout(type, 800);
}

// ===== SCROLL REVEAL =====
function initReveal() {
  const elements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ===== COUNTER ANIMATION =====
function initCounters() {
  const counters = document.querySelectorAll('[data-target]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        let current = 0;
        const step = target / 40;

        const update = () => {
          current += step;
          if (current >= target) {
            el.textContent = target + '+';
            return;
          }
          el.textContent = Math.floor(current) + '+';
          requestAnimationFrame(update);
        };
        update();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ===== CONTACT FORM — Formspree Backend =====
// Formspree se messages seedha Gmail pe aate hain (FREE backend)
// Setup: formspree.io → account banao → form banao → ID yahan dalo
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdaplkny'; // yashkumaryk066@gmail.com

function handleFormSubmit(e) {
  e.preventDefault();
  const submitText = document.getElementById('submit-text');
  const submitLoading = document.getElementById('submit-loading');
  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('submit-btn');

  const name = document.getElementById('form-name').value.trim();
  const email = document.getElementById('form-email').value.trim();
  const subject = document.getElementById('form-subject').value.trim();
  const message = document.getElementById('form-message').value.trim();

  // Show loading
  submitText.style.display = 'none';
  submitLoading.style.display = 'inline-flex';
  btn.disabled = true;

  if (formError) formError.style.display = 'none';

  // Send via Formspree (real backend — stores in dashboard + emails you)
  fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify({ name, email, subject, message,
      _replyto: email,
      _subject: `📮 Portfolio Contact: ${subject} — from ${name}`
    })
  })
  .then(res => res.json())
  .then(data => {
    submitText.style.display = 'inline-flex';
    submitLoading.style.display = 'none';
    btn.disabled = false;

    if (data.ok || data.next) {
      // SUCCESS
      formSuccess.style.display = 'flex';
      form.reset();
      // Confetti burst on success
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(formSuccess,
          { opacity: 0, scale: 0.8, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
        );
      }
      setTimeout(() => { formSuccess.style.display = 'none'; }, 6000);
    } else {
      throw new Error('Formspree not activated');
    }
  })
  .catch(() => {
    // FALLBACK: Open Gmail directly
    submitText.style.display = 'inline-flex';
    submitLoading.style.display = 'none';
    btn.disabled = false;

    const mailtoLink = `mailto:yashkumaryk066@gmail.com?subject=${encodeURIComponent('📮 ' + subject + ' — from ' + name)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
    window.open(mailtoLink, '_blank');
    formSuccess.style.display = 'flex';
    form.reset();
    setTimeout(() => { formSuccess.style.display = 'none'; }, 6000);
  });
}

function initContactForm() {
  // Handled by handleFormSubmit via onsubmit attribute
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const menu = document.getElementById('nav-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (menu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

// ===== SMOOTH ACTIVE NAV HIGHLIGHT ON CLICK =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// ===================================================
// ADVANCED PREMIUM EFFECTS
// ===================================================

// ===== SCROLL PROGRESS BAR =====
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = progress + '%';
  }, { passive: true });
}

// ===== GSAP SCROLL ANIMATIONS =====
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Hero name entrance
  gsap.fromTo('.gsap-hero-name',
    { opacity: 0, y: 60, skewY: 3 },
    { opacity: 1, y: 0, skewY: 0, duration: 1.2, ease: 'power4.out', delay: 0.3 }
  );

  // Hero badge
  gsap.fromTo('.hero-badge',
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.1 }
  );

  // Stats stagger
  gsap.fromTo('.stat-item',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '.hero-stats', start: 'top 85%', once: true } }
  );

  // About
  gsap.fromTo('.about-heading',
    { opacity: 0, x: -40 },
    { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '#about', start: 'top 70%', once: true } }
  );

  gsap.fromTo('.about-para',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: '#about', start: 'top 65%', once: true } }
  );

  gsap.fromTo('.highlight-item',
    { opacity: 0, y: 20, scale: 0.97 },
    { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.4)',
      scrollTrigger: { trigger: '.about-highlights', start: 'top 80%', once: true } }
  );

  // Skills
  gsap.fromTo('.skill-category',
    { opacity: 0, y: 40, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
      scrollTrigger: { trigger: '#skills', start: 'top 70%', once: true } }
  );

  gsap.fromTo('.skill-pill',
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 0.4, stagger: 0.04, ease: 'back.out(1.5)',
      scrollTrigger: { trigger: '#skills', start: 'top 60%', once: true } }
  );

  // Projects
  gsap.fromTo('.project-card',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: '#projects', start: 'top 72%', once: true } }
  );

  // Timeline
  gsap.fromTo('.timeline-item',
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out',
      scrollTrigger: { trigger: '#experience', start: 'top 72%', once: true } }
  );

  // Contact
  gsap.fromTo('.contact-card',
    { opacity: 0, x: -30 },
    { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '#contact', start: 'top 72%', once: true } }
  );

  gsap.fromTo('.contact-form-wrap',
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '#contact', start: 'top 72%', once: true } }
  );

  // Floating badge parallax on scroll
  ScrollTrigger.create({
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    onUpdate: self => {
      const p = self.progress;
      document.querySelectorAll('.floating-badge').forEach((el, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        el.style.transform = `translateY(${p * 60 * dir}px)`;
      });
    }
  });

  // Section tags
  gsap.utils.toArray('.section-tag').forEach(tag => {
    gsap.fromTo(tag,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: tag, start: 'top 85%', once: true } }
    );
  });
}

// ===== VANILLA TILT 3D =====
function initVanillaTilt() {
  if (typeof VanillaTilt === 'undefined') return;

  VanillaTilt.init(document.querySelectorAll('.project-card'), {
    max: 6, speed: 400, glare: true, 'max-glare': 0.12,
    perspective: 1000, scale: 1.02,
  });

  VanillaTilt.init(document.querySelectorAll('.skill-category'), {
    max: 8, speed: 500, glare: false, perspective: 800, scale: 1.01,
  });

  VanillaTilt.init(document.querySelectorAll('.avatar-frame'), {
    max: 10, speed: 400, glare: true, 'max-glare': 0.08, perspective: 600,
  });
}

// ===== MAGNETIC BUTTONS =====
function initMagneticButtons() {
  if (window.innerWidth <= 768) return;

  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.04)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0) scale(1)';
      btn.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    });

    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'transform 0.1s linear';
    });
  });
}

// ===== GSAP TITLE UNDERLINE =====
function initGSAPTitles() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('underline-active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.gsap-title').forEach(t => observer.observe(t));
}

// ===== HERO PARALLAX ON MOUSE =====
function initHeroParallax() {
  if (window.innerWidth <= 768) return;
  const hero = document.getElementById('hero');
  if (!hero) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (e.clientX - rect.left - cx) / cx;
    const dy = (e.clientY - rect.top - cy) / cy;
    const depth = 15;

    const inner = document.querySelector('.hero-inner');
    if (inner) {
      inner.style.transform = `translate(${dx * depth * 0.3}px, ${dy * depth * 0.3}px)`;
      inner.style.transition = 'transform 0.2s linear';
    }

    const lottie = document.querySelector('.hero-lottie');
    if (lottie) {
      lottie.style.transform = `translateY(-50%) translate(${dx * -10}px, ${dy * 8}px)`;
      lottie.style.transition = 'transform 0.15s linear';
    }
  });

  hero.addEventListener('mouseleave', () => {
    const inner = document.querySelector('.hero-inner');
    const lottie = document.querySelector('.hero-lottie');
    if (inner) {
      inner.style.transform = '';
      inner.style.transition = 'transform 0.8s cubic-bezier(0.4,0,0.2,1)';
    }
    if (lottie) {
      lottie.style.transform = 'translateY(-50%)';
      lottie.style.transition = 'transform 0.8s cubic-bezier(0.4,0,0.2,1)';
    }
  });
}

// ===== DRAGGABLE FLOATING BADGES =====
function initDraggableBadges() {
  const badges = document.querySelectorAll('.floating-badge');
  if (!badges.length) return;
  badges.forEach(badge => {
    let isDragging = false;
    let startX = 0, startY = 0, currentX = 0, currentY = 0;
    let velX = 0, velY = 0, animFrameId = null;
    badge.style.cursor = 'grab';
    badge.style.userSelect = 'none';
    badge.style.touchAction = 'none';
    badge.title = 'Drag me! 🎯';
    function onDown(e) {
      e.preventDefault();
      isDragging = true;
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      const cy = e.touches ? e.touches[0].clientY : e.clientY;
      startX = cx - currentX; startY = cy - currentY;
      badge.style.cursor = 'grabbing';
      badge.style.transition = 'none';
      badge.style.zIndex = '200';
      badge.style.boxShadow = '0 16px 48px rgba(139,92,246,0.55)';
      badge.style.borderColor = 'rgba(139,92,246,0.8)';
      badge.style.background = 'rgba(139,92,246,0.18)';
      badge.style.transform = `translate(${currentX}px,${currentY}px) scale(1.18)`;
      if (animFrameId) cancelAnimationFrame(animFrameId);
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      document.addEventListener('touchmove', onMove, {passive:false});
      document.addEventListener('touchend', onUp);
    }
    function onMove(e) {
      if (!isDragging) return;
      e.preventDefault();
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      const cy = e.touches ? e.touches[0].clientY : e.clientY;
      const nx = cx - startX, ny = cy - startY;
      velX = nx - currentX; velY = ny - currentY;
      currentX = nx; currentY = ny;
      badge.style.transform = `translate(${currentX}px,${currentY}px) scale(1.14)`;
    }
    function onUp() {
      isDragging = false;
      badge.style.cursor = 'grab';
      badge.style.boxShadow = ''; badge.style.borderColor = ''; badge.style.background = '';
      document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp);
      document.removeEventListener('touchmove', onMove); document.removeEventListener('touchend', onUp);
      springReturn();
    }
    function springReturn() {
      const k = 0.10, d = 0.72;
      function tick() {
        if (isDragging) return;
        velX = (velX + (0 - currentX) * k) * d;
        velY = (velY + (0 - currentY) * k) * d;
        currentX += velX; currentY += velY;
        badge.style.transform = `translate(${currentX}px,${currentY}px) scale(1)`;
        if (Math.abs(currentX) < 0.4 && Math.abs(currentY) < 0.4 && Math.abs(velX) < 0.2 && Math.abs(velY) < 0.2) {
          currentX = 0; currentY = 0;
          badge.style.transform = ''; badge.style.zIndex = ''; return;
        }
        animFrameId = requestAnimationFrame(tick);
      }
      animFrameId = requestAnimationFrame(tick);
    }
    badge.addEventListener('mousedown', onDown);
    badge.addEventListener('touchstart', onDown, {passive:false});
    badge.addEventListener('mouseenter', () => { if (!isDragging) badge.style.transform = `translate(${currentX}px,${currentY}px) scale(1.1)`; });
    badge.addEventListener('mouseleave', () => { if (!isDragging) badge.style.transform = `translate(${currentX}px,${currentY}px) scale(1)`; });
  });
  // Bounce hint after 2.5s
  setTimeout(() => {
    badges.forEach((b,i) => setTimeout(() => {
      b.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
      b.style.transform = 'scale(1.2)';
      setTimeout(() => { b.style.transform = ''; }, 350);
    }, i * 200));
  }, 2500);
}

// ===== PREMIUM FUTURISTIC BACKGROUND (Three.js) =====
function initFuturisticBackground() {
  const canvas = document.getElementById('hero-three-canvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // --- LIGHTS ---
  const ambientLight = new THREE.AmbientLight(0x443366, 0.5);
  scene.add(ambientLight);
  const pointLight = new THREE.PointLight(0x8b5cf6, 1.5, 100);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  // --- FLOATING AURORA GEOMETRY ---
  const auroraGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  const auroraMaterial = new THREE.MeshPhongMaterial({
    color: 0x8b5cf6,
    wireframe: true,
    transparent: true,
    opacity: 0.1,
    emissive: 0x06b6d4,
  });
  const aurora = new THREE.Mesh(auroraGeometry, auroraMaterial);
  aurora.position.z = -15;
  scene.add(aurora);

  // --- CODE ELEMENTS (Floating Particles) ---
  const particlesCount = 2000;
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);
  const color1 = new THREE.Color(0x8b5cf6); // Purple
  const color2 = new THREE.Color(0x06b6d4); // Cyan

  for (let i = 0; i < particlesCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 10;

    const mixedColor = color1.clone().lerp(color2, Math.random());
    colors[i] = mixedColor.r;
    colors[i + 1] = mixedColor.g;
    colors[i + 2] = mixedColor.b;
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
  });

  const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleSystem);

  // --- CODE RAIN EFFECT (Background binary) ---
  const binaryGeometry = new THREE.PlaneGeometry(1, 1);
  const binaryGroup = new THREE.Group();
  for (let i = 0; i < 150; i++) {
    const isOne = Math.random() > 0.5;
    const canvasB = document.createElement('canvas');
    const ctxB = canvasB.getContext('2d');
    canvasB.width = 64; canvasB.height = 64;
    ctxB.fillStyle = '#06b6d4';
    ctxB.font = 'bold 48px monospace';
    ctxB.fillText(isOne ? '1' : '0', 20, 50);
    
    const texture = new THREE.CanvasTexture(canvasB);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.3 });
    const mesh = new THREE.Mesh(binaryGeometry, material);
    mesh.position.set((Math.random() - 0.5) * 30, Math.random() * 20, (Math.random() - 0.5) * 20 - 10);
    mesh.userData.speed = 0.02 + Math.random() * 0.05;
    binaryGroup.add(mesh);
  }
  scene.add(binaryGroup);

  // --- INTERACTION / MOUSE PARALLAX ---
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) / 100;
    mouseY = (e.clientY - window.innerHeight / 2) / 100;
  });

  // --- ANIMATION LOOP ---
  function animate() {
    requestAnimationFrame(animate);

    aurora.rotation.x += 0.001;
    aurora.rotation.y += 0.002;
    particleSystem.rotation.y += 0.0005;

    // Move binary rain
    binaryGroup.children.forEach(b => {
      b.position.y -= b.userData.speed;
      if (b.position.y < -15) b.position.y = 15;
    });

    // Parallax
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }

  animate();

  // --- HANDLE RESIZE ---
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
