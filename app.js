/**
 * ATLÉTICO NACIONAL - CAMPEÓN COPA LIBERTADORES 2016
 * Lógica Interactiva, Filtros, Modal y Celebración
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderStats();
  renderTimelineFilters();
  renderMatches('todas');
  renderHeroes();
  setupModalEvents();
  setupNavigation();
  setupConfetti();
  setupSoundEffects();
}

/* ==========================================================================
   1. ESTADÍSTICAS & CONTADORES ANIMADOS
   ========================================================================== */
function renderStats() {
  const statsContainer = document.getElementById('stats-grid');
  if (!statsContainer) return;

  const stats = COPA_DATA.estadisticas_globales;
  const statItems = [
    { num: stats.partidos_jugados, label: "Partidos Jugados", sub: "10 Victorias - 3 Empates", gold: false },
    { num: stats.goles_favor, label: "Goles a Favor", sub: "1.78 goles por partido", gold: false },
    { num: stats.vallas_invictas, label: "Vallas Invictas", sub: "Franco Armani supremo", gold: false },
    { num: 78.6, label: "% Rendimiento", sub: "Campaña casi perfecta", isPercent: true, gold: false },
    { num: 2, label: "Corona Continental", sub: "1989 & 2016 Bicampeón", gold: true }
  ];

  statsContainer.innerHTML = statItems.map(item => `
    <div class="stat-card">
      <div class="stat-number ${item.gold ? 'gold' : ''}" data-target="${item.num}">
        0${item.isPercent ? '%' : ''}
      </div>
      <div class="stat-label">${item.label}</div>
      <div class="stat-subtext">${item.sub}</div>
    </div>
  `).join('');

  animateCounters();
}

function animateCounters() {
  const counterElements = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const isPercent = el.textContent.includes('%');
        let current = 0;
        const step = target / 40;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + (isPercent ? '%' : '');
        }, 30);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   2. FILTROS Y PARTIDOS (TIMELINE)
   ========================================================================== */
function renderTimelineFilters() {
  const filterContainer = document.getElementById('timeline-filters');
  if (!filterContainer) return;

  filterContainer.innerHTML = COPA_DATA.fases.map((fase, idx) => `
    <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-fase="${fase.id}">
      <span>${fase.nombre}</span>
      <span class="badge-pill">${fase.badge}</span>
    </button>
  `).join('');

  filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const faseId = btn.getAttribute('data-fase');
      renderMatches(faseId);
    });
  });
}

function renderMatches(faseFilter = 'todas') {
  const matchesGrid = document.getElementById('matches-grid');
  if (!matchesGrid) return;

  const matches = faseFilter === 'todas'
    ? COPA_DATA.partidos
    : COPA_DATA.partidos.filter(m => m.fase === faseFilter);

  matchesGrid.innerHTML = matches.map(match => {
    const isFinalMatch = match.fase === 'final';
    const isWinnerNacional = (match.local === 'Atlético Nacional' && match.marcador_local > match.marcador_visitante) ||
                             (match.visitante === 'Atlético Nacional' && match.marcador_visitante > match.marcador_local);
    
    // Goles destacados preview
    const goalsPreview = match.goles.length > 0 
      ? match.goles.slice(0, 2).map(g => `
          <div class="goal-item">
            <span class="goal-minute">⚽ ${g.minuto}</span>
            <span>${g.autor}</span>
          </div>
        `).join('') + (match.goles.length > 2 ? `<div class="goal-item" style="color: var(--text-muted); font-size:0.75rem;">+${match.goles.length - 2} gol(es) más...</div>` : '')
      : `<div class="goal-item" style="color: var(--text-muted);">Empate sin goles</div>`;

    return `
      <article class="match-card ${isFinalMatch ? 'is-final' : ''}" data-id="${match.id}">
        <div class="match-header">
          <span class="match-phase">${match.fase_nombre}</span>
          <span class="match-date">${match.fecha}</span>
        </div>

        <div class="match-scoreboard">
          <div class="team-block ${match.local === 'Atlético Nacional' ? 'nacional' : ''}">
            <span class="team-tag">Local</span>
            <span class="team-name">${match.local}</span>
          </div>

          <div class="score-display">
            <span class="score-val">${match.marcador_local}</span>
            <span class="score-separator">-</span>
            <span class="score-val">${match.marcador_visitante}</span>
          </div>

          <div class="team-block ${match.visitante === 'Atlético Nacional' ? 'nacional' : ''}">
            <span class="team-tag">Visita</span>
            <span class="team-name">${match.visitante}</span>
          </div>
        </div>

        <div class="match-venue">
          <span>🏟️</span>
          <span>${match.estadio}</span>
        </div>

        <div class="match-goals-preview">
          ${goalsPreview}
        </div>

        <button class="match-btn-detail" onclick="openMatchModal(${match.id})">
          <span>Ver Ficha Técnica Completa</span>
          <span>→</span>
        </button>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   3. MODAL DE DETALLES DEL PARTIDO
   ========================================================================== */
function setupModalEvents() {
  const modalOverlay = document.getElementById('match-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalOverlay) return;

  closeBtn?.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

window.openMatchModal = function(matchId) {
  const match = COPA_DATA.partidos.find(m => m.id === matchId);
  if (!match) return;

  const modalOverlay = document.getElementById('match-modal');
  const modalContent = document.getElementById('modal-dynamic-content');

  const goalsHtml = match.goles.length > 0 
    ? match.goles.map(g => `
        <li class="modal-goal-row">
          <span class="modal-goal-minute">${g.minuto}</span>
          <div class="modal-goal-text">
            <strong>${g.autor}</strong> (${g.equipo})
            <p style="font-size:0.85rem; color:var(--text-secondary); margin-top:2px;">${g.descripcion}</p>
          </div>
        </li>
      `).join('')
    : `<p style="color:var(--text-muted); font-size:0.9rem;">No hubo anotaciones en este encuentro.</p>`;

  const lineupHtml = match.alineacion.map(player => `
    <span class="lineup-player-tag">${player}</span>
  `).join('');

  modalContent.innerHTML = `
    <div class="modal-header-banner">
      <span class="modal-phase-badge">${match.fase_nombre}</span>
      <div class="modal-teams-score">
        <div class="modal-team-block">
          <h3 class="modal-team-name">${match.local}</h3>
        </div>
        <div class="modal-score-box">
          ${match.marcador_local} - ${match.marcador_visitante}
        </div>
        <div class="modal-team-block">
          <h3 class="modal-team-name">${match.visitante}</h3>
        </div>
      </div>
    </div>

    <div class="modal-meta-grid">
      <div class="modal-meta-item">
        <strong>Fecha y Hora</strong>
        <span>${match.fecha} (${match.hora})</span>
      </div>
      <div class="modal-meta-item">
        <strong>Estadio</strong>
        <span>${match.estadio}</span>
      </div>
      <div class="modal-meta-item">
        <strong>Árbitro Principal</strong>
        <span>${match.arbitro}</span>
      </div>
      <div class="modal-meta-item">
        <strong>Figura del Partido</strong>
        <span style="color:var(--gold-primary); font-weight:700;">${match.figura}</span>
      </div>
    </div>

    <div class="modal-body-content">
      <div class="modal-section-title">
        <span>📖</span> Crónica y Momento Clave
      </div>
      <p class="modal-cronica">${match.cronica}</p>

      <div class="modal-section-title">
        <span>⚽</span> Goles del Partido
      </div>
      <ul class="modal-goals-list">
        ${goalsHtml}
      </ul>

      <div class="modal-section-title">
        <span>📋</span> Nómina Verdolaga
      </div>
      <div class="modal-lineup-tags">
        ${lineupHtml}
      </div>

      <div class="modal-curiosity-box">
        <span style="font-size:1.4rem;">💡</span>
        <div>
          <strong>Dato Histórico:</strong> ${match.dato_curioso}
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  const modalOverlay = document.getElementById('match-modal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/* ==========================================================================
   4. HÉROES / PLANTEL CAMPEÓN
   ========================================================================== */
function renderHeroes() {
  const heroesGrid = document.getElementById('heroes-grid');
  if (!heroesGrid) return;

  heroesGrid.innerHTML = COPA_DATA.heroes.map(hero => `
    <article class="hero-card">
      <div>
        <div class="hero-card-header">
          <span class="hero-dorsal">${hero.dorsal === 0 ? 'DT' : '#' + hero.dorsal}</span>
          <span class="hero-badge-pos">${hero.posicion}</span>
        </div>
        <div class="hero-info">
          <h4>${hero.nombre}</h4>
          <div class="hero-apodo">${hero.apodo}</div>
          <p class="hero-rol">${hero.rol}</p>
        </div>
      </div>
      <blockquote class="hero-quote">
        ${hero.cita}
      </blockquote>
    </article>
  `).join('');
}

/* ==========================================================================
   5. NAVEGACIÓN Y COMPORTAMIENTO SCROLL
   ========================================================================== */
function setupNavigation() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    highlightCurrentSection();
  });

  // Mobile menu toggle
  mobileToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
    });
  });
}

function highlightCurrentSection() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (link) {
      if (scrollPosition >= top && scrollPosition < top + height) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

/* ==========================================================================
   6. CELEBRACIÓN DE CAMPEONES: MOTOR DE CONFETI NATIVO
   ========================================================================== */
let confettiEngine = null;

function setupConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId = null;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const colors = [
    '#00843D', // Verde verdolaga
    '#00FF85', // Verde neón
    '#FFFFFF', // Blanco puro
    '#FFD700', // Oro brillante
    '#059669', // Esmeralda
    '#FFE55C'  // Oro suave
  ];

  class ConfettiParticle {
    constructor(x, y) {
      this.x = x ?? Math.random() * canvas.width;
      this.y = y ?? (Math.random() * -canvas.height * 0.5);
      this.size = Math.random() * 9 + 5;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.speedX = (Math.random() - 0.5) * 6;
      this.speedY = Math.random() * 4 + 3;
      this.angle = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 8;
      this.wobble = 0;
      this.wobbleSpeed = Math.random() * 0.08 + 0.03;
      this.opacity = 1;
    }

    update() {
      this.wobble += this.wobbleSpeed;
      this.x += this.speedX + Math.sin(this.wobble) * 2;
      this.y += this.speedY;
      this.angle += this.rotationSpeed;
      if (this.y > canvas.height - 20) {
        this.opacity -= 0.02;
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.angle * Math.PI) / 180);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.7);
      ctx.restore();
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.opacity > 0 && p.y < canvas.height + 50);

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    if (particles.length > 0) {
      animationId = requestAnimationFrame(loop);
    } else {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  confettiEngine = {
    burst: function(count = 120) {
      for (let i = 0; i < count; i++) {
        particles.push(new ConfettiParticle(
          Math.random() * canvas.width,
          Math.random() * (canvas.height * 0.2)
        ));
      }
      if (!animationId) {
        loop();
      }
    }
  };

  // Botón de festejo en el header y en el hero
  const celebrateBtns = document.querySelectorAll('.btn-celebrate, #btn-hero-celebrate');
  celebrateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      confettiEngine.burst(160);
      playChampionFanfare();
    });
  });
}

/* ==========================================================================
   7. SINTETIZADOR DE AUDIO WEB API (FANFARRIA CONTINENTAL)
   ========================================================================== */
function setupSoundEffects() {
  // Inicialización de sonido reactiva con interacción de usuario
}

function playChampionFanfare() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // Notas de fanfarria deportiva victoriosa (Do-Mi-Sol-Do agudo)
    const notes = [
      { freq: 261.63, time: 0.0, duration: 0.18 }, // C4
      { freq: 329.63, time: 0.2, duration: 0.18 }, // E4
      { freq: 392.00, time: 0.4, duration: 0.22 }, // G4
      { freq: 523.25, time: 0.65, duration: 0.48 }  // C5 (sostenido)
    ];

    notes.forEach(n => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.freq, ctx.currentTime + n.time);

      gain.gain.setValueAtTime(0.2, ctx.currentTime + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + n.time + n.duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + n.time);
      osc.stop(ctx.currentTime + n.time + n.duration);
    });
  } catch (err) {
    // Si el navegador bloquea audio sin clic, se ignora silenciosamente
    console.log("Audio not allowed or blocked");
  }
}
