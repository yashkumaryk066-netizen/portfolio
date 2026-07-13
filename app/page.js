
"use client";
import React, { useEffect } from 'react';

export default function Page() {
  return (
    <div suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: `

<!-- ===== PREMIUM PRELOADER ===== -->
<div id="preloader" class="preloader">
  <!-- Futuristic Data Stream Backdrop -->
  <div class="preloader-backdrop"></div>
  <div class="loader-inner">
    <div class="loader-visual">
       <div class="loader-pulse"></div>
       <div class="loader-ring"></div>
       <div class="loader-ring"></div>
       <div class="loader-logo-wrap">
         <span class="logo-ysm">Y</span><span class="logo-dot">.</span><span class="logo-ysm">A</span><span class="logo-dot">.</span><span class="logo-ysm">M</span>
       </div>
    </div>
    <div class="loader-progress-container">
      <div id="loader-bar" class="loader-bar"></div>
    </div>
    <div class="loader-status-container">
       <span class="loader-status">Initializing Neural Systems...</span>
    </div>
  </div>
</div>

<!-- ===== SCROLL PROGRESS BAR ===== -->
<div id="scroll-progress"></div>

<!-- ===== HERO CANVAS (THREE.JS) ===== -->
<div id="hero-canvas-container" class="hero-canvas-container">
  <canvas id="hero-three-canvas"></canvas>
  <div class="hero-skyline-silhouette" id="hero-skyline"></div>
</div>

<!-- ===== CRYSTAL SPOTLIGHT OVERLAY ===== -->
<div id="crystal-spotlight" class="crystal-spotlight" aria-hidden="true"></div>

<!-- ===== CUSTOM FLUID CURSOR 2.0 ===== -->
<div id="fluid-cursor" class="fluid-cursor"></div>

<!-- ===== NOISE OVERLAY ===== -->
<div class="noise-overlay" aria-hidden="true"></div>

<!-- ===== PARTICLES CANVAS ===== -->
<canvas id="particles-canvas"></canvas>

<!-- ===== NAVBAR ===== -->
<nav id="navbar" role="navigation" aria-label="Main navigation">
  <div class="nav-inner">
    <a href="#hero" class="nav-logo" id="nav-logo-link">
      <span class="logo-ysm">Y</span><span class="logo-dot">.</span><span class="logo-ysm">A</span><span class="logo-dot">.</span><span class="logo-ysm">M</span>
    </a>
    <ul class="nav-links" id="nav-menu">
      <li><a href="#about" class="nav-link" id="nav-about">About</a></li>
      <li><a href="#projects" class="nav-link" id="nav-projects">Projects</a></li>
      <li><a href="#skills" class="nav-link" id="nav-skills">Skills</a></li>
      <li><a href="#experience" class="nav-link" id="nav-experience">Experience</a></li>
      <li><a href="#hiring-hub" class="nav-link" id="nav-hiring">Hiring</a></li>
      <li><button class="nav-link resume-nav-btn" id="nav-resume-btn" style="background:none;border:none;cursor:pointer;color:white;">CV / Resume</button></li>
      <li><a href="#contact" class="nav-link" id="nav-contact">Contact</a></li>
      <li><a href="blog.html" class="nav-link" id="nav-blog">Blog</a></li>
    </ul>
    <div class="hamburger" id="hamburger" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <a href="#contact" class="btn-hire" id="hire-btn">Hire Me</a>
  </div>
</nav>

<!-- ===== HERO ===== -->
<section id="hero" aria-label="Hero section">
  <div class="hero-inner">
    <div class="hero-badge animate-fade-in" id="hero-badge">
      <span class="badge-dot"></span>
      Available for Opportunities
    </div>

    <!-- Modern Web App Compliance -->
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
  
    <div id="waving-guy" class="hero-avatar-person waving-guy-container">
      <svg width="220" height="220" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2E5BFF" />
            <stop offset="100%" stop-color="#1A3AA1" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FFD2B1" />
            <stop offset="100%" stop-color="#F7A973" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        <!-- BODY / PREMIUM SUIT -->
        <rect x="90" y="160" width="120" height="130" rx="40" fill="url(#suitGrad)" /> 
        <path d="M125 160H175L150 220L125 160Z" fill="white" fill-opacity="0.9" /> <!-- SHIRT -->
        
        <!-- Y.A.M LOGO ON SUIT -->
        <text x="140" y="250" fill="white" font-family="Arial" font-size="12" font-weight="bold" opacity="0.3">Y.A.M</text>

        <!-- NECK -->
        <rect x="140" y="145" width="20" height="20" fill="url(#skinGrad)" />

        <!-- HEAD -->
        <circle cx="150" cy="110" r="38" fill="url(#skinGrad)" />
        
        <!-- HAIR (STYLISH) -->
        <path d="M112 110C112 80 188 80 188 110C188 100 112 100 112 110Z" fill="#1A1A1A" />
        <path d="M115 105Q130 70 185 105" stroke="#1A1A1A" stroke-width="8" stroke-linecap="round" />

        <!-- GLASSES (INTELLIGENT LOOK) -->
        <g opacity="0.8">
          <circle cx="135" cy="115" r="8" stroke="#1A1A1A" stroke-width="2" />
          <circle cx="165" cy="115" r="8" stroke="#1A1A1A" stroke-width="2" />
          <path d="M143 115H157" stroke="#1A1A1A" stroke-width="2" />
        </g>

        <!-- WAVING ARM (NAMASTE) -->
        <g id="waving-arm-group" style="transform-origin: 210px 180px; animation: namaste-wave 2.5s infinite ease-in-out;">
          <rect x="200" y="100" width="25" height="90" rx="12" fill="url(#suitGrad)" /> <!-- SLEEVE -->
          <circle cx="212" cy="85" r="18" fill="url(#skinGrad)" /> <!-- HAND -->
        </g>
      </svg>
    </div>

    <h1 class="hero-name animate-slide-up gsap-hero-name" id="hero-name">
      YASH A <span class="gradient-text name-shimmer">MISHRA</span>
    </h1>
    <p class="hero-tagline reveal">
      Best Software Developer in <span class="text-white">Bhagalpur</span> & <span class="gradient-text">Jaipur</span>
    </p>

    <div class="hero-role animate-slide-up" id="hero-role">
      <span>I build </span>
      <span class="typed-wrapper">
        <span id="typed-text" class="typed-text"></span>
        <span class="typed-cursor">|</span>
      </span>
    </div>

    <p class="hero-sub animate-fade-in" id="hero-sub">
      <strong>Django Developer India</strong> | <strong>Next.js Developer for Startups</strong><br />
      Freelance Web Developer in <strong>Bihar</strong> & Software Engineer at <strong>Telepathy Infotech</strong><br />
      Delivering excellence from <span class="city-highlight">🏰 Jaipur, Bhagalpur & Rangra</span>
    </p>

    <div class="hero-stats animate-fade-in" id="hero-stats">
      <div class="stat-item">
        <span class="stat-number" data-target="5">0</span>
        <span class="stat-label">Live Products</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number" data-target="3">0</span>
        <span class="stat-label">Years Experience</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat-item">
        <span class="stat-number" data-target="10">0</span>
        <span class="stat-label">Technologies</span>
      </div>
    </div>

    <div class="hero-ctas animate-fade-in" id="hero-ctas">
      <a href="#projects" class="btn-primary magnetic-btn" id="view-work-btn">
        <i class="fas fa-rocket"></i> View My Work
        <span class="btn-sparkle"></span>
      </a>
      <button class="btn-secondary magnetic-btn" id="open-resume-btn">
        <i class="fas fa-file-pdf"></i> View Resume
      </button>

      <!-- MAGIC AI HELPER -->
      <div class="ai-helper-hero" id="ai-chat-toggle">
        <div class="ai-helper-pulse"></div>
        <i class="fas fa-robot"></i>
        <span class="ai-helper-label">Ask Yash-AI</span>
      </div>
    </div>

    <div class="hero-socials animate-fade-in" id="hero-socials">
      <a href="https://linkedin.com/in/yash-kumar-342330213" target="_blank" rel="noopener noreferrer" class="social-icon" id="linkedin-hero" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="mailto:yashkumaryk066@gmail.com" class="social-icon" id="gmail-hero" aria-label="Email">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="https://wa.me/918356926231" target="_blank" rel="noopener noreferrer" class="social-icon" id="whatsapp-hero" aria-label="WhatsApp">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>

  <!-- Lottie Hero Animation -->
  <div class="hero-lottie" id="hero-lottie" aria-hidden="true">
    <lottie-player
      src="https://assets5.lottiefiles.com/packages/lf20_fcfjwiyb.json"
      background="transparent"
      speed="1"
      loop
      autoplay
      style="width:380px;height:380px;"
    ></lottie-player>
    <div class="lottie-glow"></div>
  </div>

  <!-- ===== SOUND TOGGLE (UX BEEPS) ===== -->
  <button id="sound-toggle" class="sound-toggle" aria-label="Toggle Sound Effects">
    <i class="fas fa-volume-up" id="sound-icon"></i>
  </button>

  <div class="hero-scroll-hint" id="scroll-hint">
    <span>Scroll</span>
    <div class="scroll-line"></div>
  </div>

  <!-- Floating tech badges -->
  <div class="floating-badge fb-python" id="fb1">🐍 Python</div>
  <div class="floating-badge fb-react" id="fb2">⚛️ React</div>
  <div class="floating-badge fb-firebase" id="fb3">🔥 Firebase</div>
  <div class="floating-badge fb-django" id="fb4">🎸 Django</div>
  <div class="floating-badge fb-ai" id="fb5">🤖 AI/ML</div>
</section>

<!-- ===== INFINITE TECH SLIDER ===== -->
<div class="infinite-slider-container">
  <div class="infinite-slider">
    <div class="slider-track">
      <span>🐍 Python</span><span>⚛️ React Native</span><span>🎸 Django</span><span>🔥 Firebase</span><span>💎 Gemini AI</span><span>🚀 GSAP</span><span>🌐 WebGL</span><span>🤖 OpenAI</span><span>📦 Expo</span><span>📬 REST APIs</span>
      <!-- Duplicate for seamless scroll -->
      <span>🐍 Python</span><span>⚛️ React Native</span><span>🎸 Django</span><span>🔥 Firebase</span><span>💎 Gemini AI</span><span>🚀 GSAP</span><span>🌐 WebGL</span><span>🤖 OpenAI</span><span>📦 Expo</span><span>📬 REST APIs</span>
    </div>
  </div>
</div>

<!-- ===== ABOUT ===== -->
<section id="about" class="section" aria-label="About Yash Ankush Mishra">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Who I Am</span>
      <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
    </div>
    <div class="about-grid-new">
      <div class="about-content-col reveal-left">
        <h3 class="about-heading">Building the Future, One Product at a Time</h3>
        <p class="about-desc" id="about-text-content">
          I’m a <strong>Software Developer</strong> who thrives on building mission-critical products. From Bihar to Bengaluru, 
          my journey has been a relentless pursuit of engineering excellence. Whether it’s architecting complex AI-Vision 
          systems like <strong>Scan Khana</strong> or managing financial transparency in <strong>SettleStack</strong>, I turn 
          challenging problems into seamless, high-performance code.
        </p>

        <!-- ===== CAREER JOURNEY TIMELINE (MAGIC FEATURE) ===== -->
        <div class="journey-section">
          <h3 class="journey-title"><i class="fas fa-map-marker-alt"></i> The Career Journey</h3>
          <div class="journey-map">
            <div class="journey-dot active" data-city="Bihar">
              <span class="city-name">Bihar</span>
              <span class="city-edu">BCA Grad @ Bhagalpur</span>
            </div>
            <div class="journey-line"></div>
            <div class="journey-dot active" data-city="Bengaluru">
              <span class="city-name">Bengaluru</span>
              <span class="city-edu">MCA Grad @ Bengaluru Uni</span>
            </div>
            <div class="journey-line"></div>
            <div class="journey-dot active" data-city="Jaipur">
              <span class="city-name">Jaipur</span>
              <span class="city-edu">Dev @ Telepathy Infotech</span>
            </div>
          </div>
        </div>

        <p class="about-para" style="margin-top:20px;">
          Over the years, I've independently designed and launched <strong>5 live products</strong> spanning
          AI, EdTech, FinTech, Food-Tech, and Communication — reaching real users and solving real problems.
        </p>
        
        <!-- ===== HOLOGRAPHIC TERMINAL ===== -->
        <div class="holographic-terminal-container" id="terminal-container">
          <div class="terminal-header">
            <div class="terminal-dots"><span></span><span></span><span></span></div>
            <span class="terminal-title">yash@telepathy_infotech:~/story</span>
          </div>
          <div class="terminal-body" id="holographic-terminal">
            <div class="terminal-line"><span class="terminal-prompt">$</span> <span class="terminal-typing" data-static="true">Opening origin_story.sh...</span></div>
            <div class="terminal-line"><span class="terminal-prompt">$</span> <span class="terminal-typing" data-static="true">Product: Scan Khana — AI FoodTech launched.</span></div>
            <div class="terminal-line"><span class="terminal-prompt">$</span> <span class="terminal-typing" data-static="true">Product: SettleStack — React Native splitbill shipped.</span></div>
            <div class="terminal-line"><span class="terminal-prompt">$</span> <span class="terminal-typing" data-static="true">Status: Building the future... [Ready]</span></div>
          </div>
        </div>

        <div class="about-highlights">
          <div class="highlight-item" id="hl-location">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <span class="hl-label">Location</span>
              <span class="hl-value">Jaipur, Rajasthan / Rangra, Bihar 🏰</span>
            </div>
          </div>
          <div class="highlight-item" id="hl-company">
            <i class="fas fa-building"></i>
            <div>
              <span class="hl-label">Company</span>
              <span class="hl-value">Telepathy Infotech Pvt. Ltd.</span>
            </div>
          </div>
          <div class="highlight-item" id="hl-products">
            <i class="fas fa-layer-group"></i>
            <div>
              <span class="hl-label">Products Launched</span>
              <span class="hl-value">5 Live Products</span>
            </div>
          </div>
        </div>

        <div class="about-ctas" style="justify-content:center; margin-top:30px;">
          <a href="mailto:yashkumaryk066@gmail.com" class="btn-primary" id="email-btn">
            <i class="fas fa-envelope"></i> Email Me
          </a>
          <a href="https://linkedin.com/in/yash-kumar-342330213" target="_blank" rel="noopener noreferrer" class="btn-outline" id="linkedin-btn">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>

      <div class="about-photo-col reveal-right">
        <div class="about-photo-glow"></div>
        <div class="about-photo-frame">
          <img src="yash.jpg" alt="Yash Ankush Mishra - Best Software Developer in Rangra, Katihar, Bhagalpur & Bihar | Rangra Developer" title="Yash Ankush Mishra - Best Software Developer in Katihar & Rangra" fetchpriority="high" decoding="async" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== AUTHORITY RANKING SECTION (SEO POWERHOUSE) ===== -->
<section id="authority-ranking" class="section ranking-section" aria-label="Why Yash Ankush Mishra is the best software developer in Bihar">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Market Dominance</span>
      <h2 class="section-title">Best Software Developer in <span class="gradient-text">Bihar</span></h2>
      <p class="section-sub">Recognized for delivering industrial-grade AI and Web solutions across Patna, Bhagalpur, and Jaipur.</p>
    </div>

    <div class="ranking-grid">
      <div class="ranking-card reveal-left">
        <div class="ranking-icon"><i class="fas fa-award"></i></div>
        <h3>Top-Rated Authority</h3>
        <p>Ranked among the <strong>best software developers in Bihar</strong> for custom ERP and AI integration. Proven track record with 5+ live industrial products.</p>
      </div>
      <div class="ranking-card reveal-up">
        <div class="ranking-icon"><i class="fas fa-map-marked-alt"></i></div>
        <h3>Local SEO Dominance</h3>
        <p>Serving as the leading <strong>freelance web developer in Bhagalpur</strong>, <strong>Katihar</strong>, and <strong>Naugachia</strong>. Deep understanding of local business needs.</p>
      </div>
      <div class="ranking-card reveal-right">
        <div class="ranking-icon"><i class="fas fa-microchip"></i></div>
        <h3>Elite Tech Stack</h3>
        <p>Expertise in <strong>Django</strong>, <strong>Next.js</strong>, and <strong>Gemini AI</strong>. Building the next generation of software in <strong>Rangra</strong> and <strong>Patna</strong>.</p>
      </div>
    </div>

    <!-- Comparison with Agencies (Targeting Google AI Overview) -->
    <div class="comparison-block reveal">
      <h3>Why Individual Elite Expertise Beats Generic Agencies</h3>
      <div class="comparison-grid">
        <div class="comp-item">
          <span class="comp-label">Personalized Architecture</span>
          <p>Unlike generic firms in Patna or Bhagalpur, I provide direct, high-level architectural consultation for every project.</p>
        </div>
        <div class="comp-item">
          <span class="comp-label">AI-First Approach</span>
          <p>Specializing in <strong>neural networks</strong> and <strong>AI Vision</strong>, which most local developers in Bihar have yet to master.</p>
        </div>
        <div class="comp-item">
          <span class="comp-label">Industrial Speed</span>
          <p>Delivering production-ready code for <strong>Telepathy Infotech</strong> and global startups with zero overhead.</p>
        </div>
      </div>
    </div>
  </div>
</section>



<!-- ===== PROJECTS ===== -->
<section id="projects" class="section" aria-label="Projects by Yash Ankush Mishra">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">What I've Built</span>
      <h2 class="section-title gsap-title">Live <span class="gradient-text">Products</span></h2>
      <p class="section-sub">5 independently built & deployed products — all live, all real users.</p>
    </div>

    <div class="projects-grid" id="projects-grid">

      <!-- Vibe Talk (NEW) -->
      <div class="project-card glass-card reveal" id="project-vibetalk">
        <div class="project-glow glow-orange"></div>
        <div class="project-header">
          <div class="project-icon pi-orange"><span>💬</span></div>
          <div class="project-meta">
            <span class="live-badge"><span class="live-dot"></span>LIVE</span>
            <span class="project-type">Real-time · Communication</span>
          </div>
        </div>
        <h3 class="project-name">Vibe Talk</h3>

        <div class="project-case-study">
          <div class="project-label">🚩 The Problem</div>
          <p class="case-text">Standard chat apps lack a focus on real-time engagement and monetization for creators in local regions like Bihar.</p>
          
          <div class="project-label">💡 My Solution</div>
          <p class="case-text">Built a high-performance real-time messaging platform using WebSockets with a focus on speed and earn-per-interaction features.</p>
          
          <div class="project-impact">
            <i class="fas fa-rocket"></i> <strong>Impact:</strong> Shipped a production-ready communication engine reaching global users from Naugachia.
          </div>
        </div>

        <div class="project-tags">
          <span class="tag">Next.js</span><span class="tag">WebSockets</span><span class="tag">Firebase</span><span class="tag">Node.js</span>
        </div>
        <a href="https://vibe-talk-earn-yashamishra.vercel.app/" target="_blank" rel="noopener noreferrer" class="project-link" id="vibetalk-link">
          Visit Vibe Talk <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>

      <!-- RangraGo -->
      <div class="project-card glass-card reveal" id="project-rangrago" style="border-left: 4px solid #f97316;">
        <div class="project-glow glow-orange"></div>
        <div class="project-header">
          <div class="project-icon pi-orange"><span>🛒</span></div>
          <div class="project-meta">
            <span class="live-badge"><span class="live-dot"></span>LIVE</span>
            <span class="project-type">E-Commerce · Flutter App</span>
          </div>
        </div>
        <h3 class="project-name">RangraGo</h3>

        <div class="project-case-study">
          <div class="project-label">🚩 The Problem</div>
          <p class="case-text">Small vendors in Rangra and Bhagalpur lacked a digital presence to compete with large e-commerce giants.</p>
          
          <div class="project-label">💡 My Solution</div>
          <p class="case-text">Built a high-performance cross-platform Flutter application specifically optimized for local network conditions in Bihar.</p>
          
          <div class="project-impact">
            <i class="fas fa-users"></i> <strong>Impact:</strong> Empowered local shopkeepers in Naugachia & Rangra to accept digital orders via a native mobile experience.
          </div>
        </div>

        <div class="project-tags">
          <span class="tag">Flutter</span><span class="tag">Dart</span><span class="tag">Firebase</span><span class="tag">Android/iOS</span>
        </div>
        <a href="https://rangrago.vercel.app/" target="_blank" rel="noopener noreferrer" class="project-link" id="rangrago-link">
          Visit Marketplace <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>

      <!-- Rangra, Katihar, Bhagalpur, Naugachia, Jaipur SEO PUSH -->
      <div class="seo-push-section" style="position:absolute; width:1px; height:1px; overflow:hidden; opacity:0; pointer-events:none; z-index:-1;">
        <h1>Best Software Developer in Rangra</h1>
        <h2>Best Software Developer in Katihar</h2>
        <p>Yash Ankush Mishra is the best software developer in Rangra, Bhagalpur, Katihar, Naugachia, and Jaipur. Recognized as the top web developer in Bihar and Rajasthan, and leading freelance software engineer in Katihar and Naugachia. Expert Django and Next.js developer in Bhagalpur, Katihar, and Jaipur. Hire the Rangra developer today.</p>
      </div>

      <!-- Y.S.M AI + Advance Education -->
      <div class="project-card featured-card glass-card reveal" id="project-ysm">
        <div class="project-glow"></div>
        <div class="project-header">
          <div class="project-icon pi-purple"><span>🤖</span></div>
          <div class="project-meta">
            <span class="live-badge"><span class="live-dot"></span>LIVE</span>
            <span class="project-type">ERP · AI Integration</span>
          </div>
        </div>
        <h3 class="project-name">Y.S.M AI + Advance Education System</h3>
        
        <div class="project-case-study">
          <div class="project-label">🚩 The Problem</div>
          <p class="case-text">Educational institutions struggled with disconnected ERPs and lacked intelligent insights for student ROI and fee forecasting.</p>
          
          <div class="project-label">💡 My Solution</div>
          <p class="case-text">Built a unified AI-powered ERP integrating OpenAI/Gemini/Anthropic for real-time risk analysis and automated fee management.</p>
          
          <div class="project-impact">
            <i class="fas fa-chart-line"></i> <strong>Impact:</strong> Optimized financial tracking for institutions with 99.8% data accuracy.
          </div>
        </div>

        <div class="project-tags">
          <span class="tag">Python</span><span class="tag">Django</span><span class="tag">AI/ML</span><span class="tag">PostgreSQL</span>
        </div>
        <a href="https://yashamishra.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" class="project-link" id="ysm-link">
          Visit Platform <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>

      <!-- Scan Khana -->
      <div class="project-card glass-card reveal" id="project-scankhana">
        <div class="project-glow glow-cyan"></div>
        <div class="project-header">
          <div class="project-icon pi-cyan"><span>🍽️</span></div>
          <div class="project-meta">
            <span class="live-badge"><span class="live-dot"></span>LIVE</span>
            <span class="project-type">FoodTech · Computer Vision</span>
          </div>
        </div>
        <h3 class="project-name">Scan Khana</h3>

        <div class="project-case-study">
          <div class="project-label">🚩 The Problem</div>
          <p class="case-text">Calorie tracking is tedious and manual, leading to 70% of users quitting within a week.</p>
          
          <div class="project-label">💡 My Solution</div>
          <p class="case-text">Implemented an AI Vision engine that detects food from photos and provides instant nutritional data without manual input.</p>
          
          <div class="project-impact">
            <i class="fas fa-bolt"></i> <strong>Impact:</strong> Reduced meal-logging time by 90% using automated AI detection.
          </div>
        </div>

        <div class="project-tags">
          <span class="tag">AI Vision</span><span class="tag">Python</span><span class="tag">Vercel</span><span class="tag">REST API</span>
        </div>
        <a href="https://scan-khana.vercel.app/" target="_blank" rel="noopener noreferrer" class="project-link" id="scankhana-link">
          Visit App <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>

      <!-- SettleStack -->
      <div class="project-card glass-card reveal" id="project-settlestack">
        <div class="project-glow glow-green"></div>
        <div class="project-header">
          <div class="project-icon pi-green"><span>💰</span></div>
          <div class="project-meta">
            <span class="live-badge"><span class="live-dot"></span>LIVE</span>
            <span class="project-type">FinTech · Mobile App</span>
          </div>
        </div>
        <h3 class="project-name">SettleStack</h3>

        <div class="project-case-study">
          <div class="project-label">🚩 The Problem</div>
          <p class="case-text">Managing group expenses is messy, and users often forget settlements or lose receipt proofs.</p>
          
          <div class="project-label">💡 My Solution</div>
          <p class="case-text">Created a React Native app with Firebase for real-time sync, receipt OCR, and Gemini AI for smart financial advice.</p>
          
          <div class="project-impact">
            <i class="fas fa-users"></i> <strong>Impact:</strong> Successfully handled thousands of dollars in shared transactions with automated debt clearing.
          </div>
        </div>

        <div class="project-tags">
          <span class="tag">React Native</span><span class="tag">Firebase</span><span class="tag">Expo</span><span class="tag">OCR</span>
        </div>
        <a href="https://splitbalance-b552b.web.app/" target="_blank" rel="noopener noreferrer" class="project-link" id="settlestack-link">
          Open App <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>


    </div>
  </div>
</section>


<!-- ===== HIRING HUB SECTION (PROFESSIONAL GROWTH) ===== -->
<section id="hiring-hub" class="section hiring-section" aria-label="Job Opportunities in Jaipur">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Join the Team</span>
      <h2 class="section-title">We are <span class="gradient-text">Hiring</span></h2>
      <p class="section-sub">Looking for talent in Jaipur. Join Yash Ankush Mishra's mission to build elite tech products.</p>
    </div>

    <div class="hiring-grid">
      <!-- Role 1 -->
      <div class="hiring-card glass-card reveal">
        <div class="role-icon">💻</div>
        <h3>Senior Python Dev</h3>
        <p>Minimum 5+ Years Exp. Lead technical architecture.</p>
        <span class="location-badge"><i class="fas fa-map-marker-alt"></i> Jaipur</span>
        <a href="blog/hiring-jaipur-python-sales-hr.html" class="btn-role" style="position: relative; z-index: 10;">View Details</a>
      </div>

      <!-- Role 2 -->
      <div class="hiring-card glass-card reveal">
        <div class="role-icon">📈</div>
        <h3>Software Sales</h3>
        <p>B2B Tech Sales. Interns & Experienced welcome.</p>
        <span class="location-badge"><i class="fas fa-map-marker-alt"></i> Jaipur</span>
        <a href="blog/hiring-jaipur-python-sales-hr.html" class="btn-role" style="position: relative; z-index: 10;">View Details</a>
      </div>

      <!-- Role 3 -->
      <div class="hiring-card glass-card reveal">
        <div class="role-icon">👩‍💼</div>
        <h3>HR Recruiter Intern</h3>
        <p>Recruitment & Interviewing. <strong>Female Only</strong>.</p>
        <span class="location-badge"><i class="fas fa-map-marker-alt"></i> Jaipur</span>
        <a href="blog/hiring-jaipur-python-sales-hr.html" class="btn-role" style="position: relative; z-index: 10;">View Details</a>
      </div>
    </div>

    <div class="hiring-cta-wrap reveal">
      <p>Click "View Details" to see requirements and submit your application.</p>
    </div>
  </div>
</section>

<style>
  .hiring-section { background: radial-gradient(circle at top right, rgba(139, 92, 246, 0.05), transparent); }
  .hiring-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 50px; }
  .hiring-card { padding: 40px; text-align: center; transition: var(--transition); border: 1px solid rgba(255,255,255,0.05); }
  .hiring-card:hover { transform: translateY(-10px); border-color: var(--primary); background: rgba(139, 92, 246, 0.05); }
  .role-icon { font-size: 3rem; margin-bottom: 20px; }
  .hiring-card h3 { font-size: 1.5rem; margin-bottom: 10px; color: #fff; }
  .hiring-card p { font-size: 0.95rem; color: var(--text-muted); margin-bottom: 20px; }
  .location-badge { display: inline-block; padding: 5px 15px; background: rgba(139, 92, 246, 0.1); color: var(--primary-light); border-radius: 100px; font-size: 0.85rem; font-weight: 700; margin-bottom: 25px; }
  .btn-role { display: block; padding: 12px; border: 1px solid var(--primary); border-radius: 12px; color: #fff; text-decoration: none; font-weight: 600; transition: 0.3s; }
  .btn-role:hover { background: var(--primary); color: #fff; }
  .hiring-cta-wrap { margin-top: 60px; text-align: center; }
  .hiring-cta-wrap p { margin-bottom: 20px; color: var(--text-muted); }
  .hiring-btns { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
</style>

<!-- ===== SKILLS ===== -->
<section id="skills" class="section" aria-label="Technical skills of Yash Ankush Mishra">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Tech Arsenal</span>
      <h2 class="section-title">Skills & <span class="gradient-text">Technologies</span></h2>
    </div>
    <!-- ===== 3D SKILL SPHERE CONTAINER ===== -->
    <div class="skill-sphere-wrapper reveal" id="skill-sphere-wrapper">
      <div id="skill-sphere-container" class="skill-sphere-container">
        <!-- Three.js will inject canvas here -->
      </div>
      <div class="skill-sphere-overlay">
        <p>✦ My universe of skills — always expanding</p>
      </div>
    </div>
  </div>
</section>

<!-- ===== EXPERIENCE ===== -->
<section id="experience" class="section" aria-label="Work experience of Yash Ankush Mishra">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Career Journey</span>
      <h2 class="section-title">Work <span class="gradient-text">Experience</span></h2>
    </div>
    <div class="timeline" id="timeline">
      <div class="timeline-item reveal" id="exp-ave">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <div>
              <h3 class="exp-role">Software Developer</h3>
              <span class="exp-company">Telepathy Infotech Private Limited</span>
            </div>
            <div class="exp-period">
              <span class="exp-current">Current</span>
              <span class="exp-location"><i class="fas fa-map-marker-alt"></i> Jaipur</span>
            </div>
          </div>
          <ul class="exp-points">
            <li>Building scalable software products and features end-to-end</li>
            <li>Collaborating on technical architecture and solution design</li>
            <li>Developing AI-integrated tools and automation systems</li>
            <li>Leading product delivery from concept to production</li>
          </ul>
          <div class="exp-tags">
            <span class="tag">Full Stack</span>
            <span class="tag">AI Integration</span>
            <span class="tag">DevOps</span>
            <span class="tag">Cybersecurity</span>
            <span class="tag">Linux Scripting</span>
          </div>
        </div>
      </div>

      <div class="timeline-item reveal" id="exp-independent">
        <div class="timeline-dot timeline-dot-secondary"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <div>
              <h3 class="exp-role">Independent Product Builder</h3>
              <span class="exp-company">Self — 5 Live Products</span>
            </div>
            <div class="exp-period">
              <span class="exp-location"><i class="fas fa-globe"></i> Remote / Jaipur / Rangra</span>
            </div>
          </div>
          <ul class="exp-points">
            <li>Designed, built & deployed Y.S.M AI — multi-provider AI ERP platform</li>
            <li>Launched Scan Khana — AI food detection web app on Vercel</li>
            <li>Shipped SettleStack — React Native group expense app with Firebase</li>
            <li>Building VibeTalk — real-time communication platform</li>
          </ul>
          <div class="exp-tags">
            <span class="tag">Entrepreneur</span>
            <span class="tag">Python</span>
            <span class="tag">React Native</span>
            <span class="tag">Firebase</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<!-- ===== LOCATION & MAP (LOCAL SEO BOOST) ===== -->
<section id="location-map" class="section location-section" aria-label="Find Yash Ankush Mishra on Google Maps">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Visit Us</span>
      <h2 class="section-title">Where <span class="gradient-text">I'm Located</span></h2>
      <p class="section-sub">Physical presence in Bihar and Rajasthan to serve you better. Reach out for local meetings.</p>
    </div>

    <div class="map-wrapper reveal">
      <div class="map-info-card">
        <div class="map-info-item">
          <i class="fas fa-map-marker-alt"></i>
          <div>
            <h4>Bihar Office</h4>
            <p>Rangra Chowk, Bhagalpur, Bihar - 853205</p>
          </div>
        </div>
        <div class="map-info-item">
          <i class="fas fa-building"></i>
          <div>
            <h4>Corporate Hub</h4>
            <p>Telepathy Infotech, Jaipur, Rajasthan</p>
          </div>
        </div>
      </div>
      <div class="map-container">
        <!-- Google Maps Embed (Bhagalpur/Rangra Region) -->
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.728!2d87.16!3d25.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIyJzQ4LjAiTiA4N8KwMDknMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</section>

<style>
  .map-wrapper { display: grid; grid-template-columns: 350px 1fr; gap: 40px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 32px; overflow: hidden; margin-top: 50px; }
  .map-info-card { padding: 40px; background: rgba(139, 92, 246, 0.05); display: flex; flex-direction: column; gap: 30px; }
  .map-info-item { display: flex; gap: 20px; align-items: flex-start; }
  .map-info-item i { color: var(--primary-light); font-size: 1.5rem; margin-top: 5px; }
  .map-info-item h4 { font-size: 1.2rem; color: white; margin-bottom: 5px; font-family: 'Outfit', sans-serif; }
  .map-info-item p { font-size: 0.95rem; color: var(--text-muted); line-height: 1.5; }
  .map-container { position: relative; }
  .map-container iframe { filter: grayscale(1) invert(0.9) contrast(1.2); }
  @media (max-width: 992px) { .map-wrapper { grid-template-columns: 1fr; } }
</style>

<!-- ===== CONTACT SECTION ===== -->
<section id="contact" class="section" aria-label="Contact Yash Ankush Mishra">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Let's Connect</span>
      <h2 class="section-title">Get In <span class="gradient-text">Touch</span></h2>
      <p class="section-sub">Have a project idea, collaboration, or just want to say hi? I'm always open!</p>
    </div>

    <div class="contact-grid">
      <div class="contact-info reveal">
        <div class="contact-card">
          <div class="cc-icon"><i class="fas fa-phone"></i></div>
          <div class="cc-content">
            <span class="cc-label">Phone / WhatsApp</span>
            <a href="tel:+918356926231" class="cc-value">+91 8356926231</a>
          </div>
        </div>
        <div class="contact-card">
          <div class="cc-icon"><i class="fas fa-envelope"></i></div>
          <div class="cc-content">
            <span class="cc-label">Email</span>
            <a href="mailto:yashkumaryk066@gmail.com" class="cc-value">yashkumaryk066@gmail.com</a>
          </div>
        </div>
        <div class="contact-card">
          <div class="cc-icon"><i class="fab fa-linkedin-in"></i></div>
          <div class="cc-content">
            <span class="cc-label">LinkedIn</span>
            <a href="https://linkedin.com/in/yash-kumar-342330213" target="_blank" rel="noopener noreferrer" class="cc-value">yash-kumar-342330213</a>
          </div>
        </div>
        <div class="contact-card">
          <div class="cc-icon"><i class="fas fa-map-marker-alt"></i></div>
          <div class="cc-content">
            <span class="cc-label">Location</span>
            <span class="cc-value">Jaipur, Rajasthan / Rangra, Bihar 🏰</span>
          </div>
        </div>
      </div>

      <div class="contact-form-wrap reveal">
        <h3 class="contact-title">Send a Message</h3>
        <form id="contact-form" action="https://formspree.io/f/mdaplkny" method="POST" onsubmit="handleFormSubmit(event)" class="contact-form">
          <div class="form-group">
            <input type="text" name="name" id="form-name" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <input type="email" name="email" id="form-email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <textarea name="message" id="form-message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn-primary form-submit" id="submit-btn" style="width: 100%;">
            <span id="submit-text"><i class="fas fa-paper-plane" style="margin-right: 8px;"></i> Send Message</span>
            <span id="submit-loading" style="display: none;"><i class="fas fa-spinner fa-spin"></i> Sending...</span>
          </button>
          <div id="form-success" class="form-success" style="display: none;">
            <i class="fas fa-check-circle"></i> Message sent successfully!
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ===== SUPREME FOOTER & TRUST CENTER ===== -->
<footer id="footer" role="contentinfo">
  <div class="footer-magic-wrap">
    <div class="footer-magic-inner">
      
      <!-- WALL OF TRUST (INTEGRATED) -->
      <div class="recommendations-container container" style="margin-top: 0; padding-bottom: 60px; border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div class="section-header reveal">
          <span class="section-tag">Endorsements</span>
          <h2 class="section-title">Wall of <span class="gradient-text">Trust</span></h2>
        </div>
        <div class="trust-grid">
            <div class="trust-card reveal">
              <i class="fas fa-quote-right trust-quote-icon"></i>
              <div class="trust-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
              <p class="trust-text">"Yash's vision for Scan Khana changed how we view AI in food-tech. His ability to turn complex logic into a seamless user experience is rare."</p>
              <div class="trust-author"><h4>Senior Tech Manager</h4><p>Telepathy Infotech</p></div>
            </div>
            <div class="trust-card reveal">
              <i class="fas fa-quote-right trust-quote-icon"></i>
              <div class="trust-stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
              <p class="trust-text">"SettleStack reflects Yash's precision in FinTech. The transparency and efficiency he built are truly industrial standard."</p>
              <div class="trust-author"><h4>Development Partner</h4><p>Scan Khana AI</p></div>
            </div>
        </div>
      </div>

      <!-- FAQ SECTION (INTEGRATED) -->
      <div id="faq" class="section faq-section" style="padding: 60px 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
        <div class="section-header reveal">
          <span class="section-tag">Helpful Info</span>
          <h2 class="section-title">Common <span class="gradient-text">Questions</span></h2>
        </div>
        <div class="faq-grid">
          <div class="faq-item reveal">
            <div class="faq-question"><h4>Best software developer in Bhagalpur or Rangra?</h4><i class="fas fa-plus"></i></div>
            <div class="faq-answer"><p>Yash Ankush Mishra is the leading software engineer in Bihar, specializing in AI-integrated ERPs and custom web solutions.</p></div>
          </div>
          <div class="faq-item reveal">
            <div class="faq-question"><h4>Why hire a freelance web developer in Bihar?</h4><i class="fas fa-plus"></i></div>
            <div class="faq-answer"><p>Hiring a local expert like Yash ensures personalized communication with global engineering standards.</p></div>
          </div>
        </div>
      </div>

      <!-- LOCATION AUTHORITY (INTEGRATED) -->
      <div id="locations" class="section location-section" style="padding: 60px 0;">
        <div class="location-grid">
          <div class="location-card reveal">
            <div class="loc-icon"><i class="fas fa-map-marked-alt"></i></div>
            <h3>Developer in Bhagalpur & Rangra</h3>
            <p>Providing high-end web solutions in Bhagalpur, Rangra, and surrounding Bihar districts.</p>
          </div>
          <div class="location-card reveal">
            <div class="loc-icon"><i class="fas fa-city"></i></div>
            <h3>Web Developer in Jaipur</h3>
            <p>Building premium applications for Jaipur's growing tech ecosystem.</p>
          </div>
        </div>
      </div>

      <!-- CORE FOOTER LINKS -->
      <div class="footer-inner" style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 50px;">
        <div class="footer-brand">
          <span class="footer-logo">Yash <span class="gradient-text">Ankush Mishra</span></span>
          <p class="footer-tagline">Building mission-critical products globally from Jaipur 🏰 and Bihar.</p>
          <div class="footer-socials">
            <a href="https://linkedin.com/in/yash-kumar-342330213" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="mailto:yashkumaryk066@gmail.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
            <a href="https://wa.me/918356926231" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="blog.html">Blog</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Live Products</h4>
          <ul>
            <li><a href="https://yashamishra.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">Y.S.M AI + Edu System</a></li>
            <li><a href="https://scan-khana.vercel.app/" target="_blank" rel="noopener noreferrer">Scan Khana</a></li>
            <li><a href="https://splitbalance-b552b.web.app/login" target="_blank" rel="noopener noreferrer">SettleStack</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Yash Ankush Mishra. All rights reserved.</p>
        <p>Crafted with <span class="heart">❤️</span> in Jaipur and Rangra</p>
      </div>
    </div>
  <!-- ===== LOCAL SEO AUTHORITY SECTION ===== -->
  <section class="local-seo-authority" style="padding: 40px 0; border-top: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.01);">
    <div class="container" style="text-align: center; color: rgba(255,255,255,0.4); font-size: 0.85rem; line-height: 1.8;">
      <h4 style="color: rgba(255,255,255,0.6); margin-bottom: 15px; font-size: 1rem;">Premier Tech Solutions Across Bihar & Rajasthan</h4>
      <p>
        Leading Software Development in <strong>Bhagalpur</strong> | Top Web Developer in <strong>Katihar</strong> | 
        Expert Flutter Developer in <strong>Naugachia</strong> | Best Software Engineer in <strong>Rangra</strong> | 
        Django Consultant in <strong>Jaipur</strong>. 
        Providing world-class <strong>Custom Software Development</strong>, 
        <strong>AI Integration</strong>, and <strong>Secure DevOps</strong> for startups in Bihar and Rajasthan.
      </p>
    </div>
  </section>
</footer>


<!-- ===== FLOATING BUTTONS ===== -->
<a href="https://wa.me/918356926231" target="_blank" rel="noopener noreferrer" class="fab-btn fab-wa draggable-fab" id="fab-whatsapp" aria-label="Chat on WhatsApp">
  <i class="fab fa-whatsapp"></i>
  <span class="fab-tooltip">Chat on WhatsApp</span>
</a>
<button class="fab-btn fab-top draggable-fab" id="back-to-top" aria-label="Back to top" onclick="scrollToTop()" style="display:none;">
  <svg class="progress-circle" width="100%" height="100%" viewBox="0 0 100 100">
    <circle class="progress-bg" cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.1)" stroke-width="8" fill="none" />
    <circle class="progress-bar" cx="50" cy="50" r="45" stroke="white" stroke-width="8" fill="none" stroke-dasharray="283" stroke-dashoffset="283" stroke-linecap="round" />
  </svg>
  <i class="fas fa-arrow-up"></i>
</button>

<!-- ===== AI CHAT WINDOW ===== -->
<div class="ai-chat-window" id="ai-chat-window">
  <div class="ai-chat-header">
    <div class="bot-info">
      <div class="bot-status-dot"></div>
      <strong>Yash-AI (v2.0)</strong>
    </div>
    <button class="ai-chat-close" id="ai-chat-close">&times;</button>
  </div>
  <div class="ai-chat-body" id="ai-chat-body">
    <div class="bot-msg">👋 Hi! I'm Yash's AI clone. Want to know about his Tech Stack or Education?</div>
  </div>
  <div class="ai-chat-footer">
    <input type="text" placeholder="Ask about MCA or Projects..." id="ai-chat-input" />
    <button id="ai-chat-send"><i class="fas fa-paper-plane"></i></button>
  </div>
</div>

<!-- ===== RESUME MODAL ===== -->
<div id="resume-modal" class="resume-modal">
  <div class="resume-modal-content">
    <button class="resume-close-btn" id="close-resume-btn">&times;</button>
    <div class="resume-preview-container">
      <div class="resume-page">
        <div class="resume-header-row">
          <img src="yash.jpg" alt="Yash Ankush Mishra - Rangra Developer & Best Software Developer in Katihar" title="Best Software Developer in Katihar" class="resume-photo-small" loading="lazy" decoding="async" />
          <div class="resume-title-group">
            <h2 class="res-name">Yash Ankush Mishra</h2>
            <p class="res-subtitle">Software Developer | Full Stack & AI Specialist</p>
          </div>
        </div>
        <div class="res-summary">
          Product-focused Software Developer with 3+ years of experience. Expertise in architecting scalable AI-powered ecosystems and FinTech solutions. Committed to high-performance delivery and seamless user-centric design.
        </div>
        <div class="resume-grid">
          <div class="resume-col-left">
            <h4 class="res-section-title">Professional Experience</h4>
            <div class="res-item">
              <strong class="res-highlight">Software Developer</strong>
              <p class="res-meta">Telepathy Infotech | 2025 - Present</p>
              <p class="res-text">Building high-end web products. Leading development of AI integrated modules and cloud architecture.</p>
            </div>
            
            <h4 class="res-section-title">Major Products Built</h4>
            <div class="res-item">
              <strong class="res-highlight">Scan Khana</strong>
              <p class="res-meta">AI FoodTech Platform</p>
              <p class="res-text">Spearheaded development of a real-time AI food detection engine with automated nutrition tracking.</p>
            </div>
            <div class="res-item">
              <strong class="res-highlight">SettleStack</strong>
              <p class="res-meta">FinTech Billing Ecosystem</p>
              <p class="res-text">Architected a complete bill-splitting mobile system with secure real-time sync.</p>
            </div>
          </div>
          <div class="resume-col-right">
            <h4 class="res-section-title">Education</h4>
            <div class="res-item">
              <strong class="res-highlight">MCA (Post-Graduation)</strong>
              <p class="res-meta">Bengaluru University</p>
            </div>
            <div class="res-item">
              <strong class="res-highlight">BCA (Graduation)</strong>
              <p class="res-meta">Bhagalpur University</p>
            </div>

            <h4 class="res-section-title">Tech Toolkit</h4>
            <div class="res-tech-grid">
              <span>Python</span><span>Django</span><span>AI/ML</span><span>React/Native</span>
              <span>Node.js</span><span>Firebase</span><span>PostgreSQL</span><span>WebGL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="resume-footer">
      <a href="yash_mishra_resume.html" download class="btn-primary">Download Full Resume</a>
    </div>
  </div>
</div>
</div>


<!-- ===== HYPER-LOCAL SEO HUB (JUSTDIAL STYLE RANKING) ===== -->
<section id="local-hub" class="section local-hub-section" aria-label="Regional Software Services in Bihar">
  <div class="container">
    <div class="section-header reveal">
      <span class="section-tag">Regional Service Hub</span>
      <h2 class="section-title">Best Software Services <span class="gradient-text">Across Bihar</span></h2>
      <p class="section-sub">Providing elite technical expertise in every district. Your search for "best software developer near me" ends here.</p>
    </div>

    <div class="local-directory-grid">
      <div class="dir-item">
        <h4><i class="fas fa-city"></i> Patna</h4>
        <p>Top Software Developer in Patna specializing in Enterprise ERP and AI solutions.</p>
      </div>
      <div class="dir-item">
        <h4><i class="fas fa-city"></i> Bhagalpur</h4>
        <p>Best Web Developer in Bhagalpur for high-end startups and e-commerce platforms.</p>
      </div>
      <div class="dir-item">
        <h4><i class="fas fa-city"></i> Katihar</h4>
        <p>Leading Software Engineer in Katihar building robust mobile and web applications.</p>
      </div>
      <div class="dir-item">
        <h4><i class="fas fa-city"></i> Naugachia</h4>
        <p>Premier Tech Solutions in Naugachia for local businesses and digital growth.</p>
      </div>
      <div class="dir-item">
        <h4><i class="fas fa-city"></i> Muzaffarpur</h4>
        <p>Expert Software Development Muzaffarpur for scalable industrial systems.</p>
      </div>
      <div class="dir-item">
        <h4><i class="fas fa-city"></i> Gaya</h4>
        <p>Top-rated Freelance Web Developer in Gaya with global standards.</p>
      </div>
    </div>

    <!-- Hidden SEO Anchor for Google Snippets -->
    <div class="seo-anchor-list" style="opacity: 0.05; font-size: 0.5rem; pointer-events: none;">
      Best Software Developer in Arrah, Begusarai, Munger, Saharsa, Sasaram, Hajipur, Bettiah, Motihari, Siwan, Chapra, Jehanabad, Aurangabad, Banka, Jamui, Kishanganj, Madhepura, Madhubani, Nawada, Rohtas, Samastipur, Sheohar, Sitamarhi, Supaul, Vaishali.
    </div>
  </div>
</section>

<style>
  .local-hub-section { background: rgba(139, 92, 246, 0.02); border-top: 1px solid rgba(255, 255, 255, 0.05); padding: 80px 0; }
  .local-directory-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 25px; margin-top: 40px; }
  .dir-item { padding: 30px; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 20px; transition: var(--transition); backdrop-filter: blur(10px); }
  .dir-item:hover { background: rgba(139, 92, 246, 0.05); border-color: var(--primary); transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
  .dir-item h4 { font-size: 1.2rem; margin-bottom: 12px; color: white; display: flex; align-items: center; gap: 12px; font-family: 'Outfit', sans-serif; }
  .dir-item h4 i { color: var(--primary-light); font-size: 1rem; }
  .dir-item p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
</style>
` }} />
  );
}
