/* ============================================================
   ANIMATIONS — réseau animé, machine à écrire, compteurs,
   pipeline CI/CD, cartes 3D, progression de lecture.
   Tout est désactivé si le visiteur a demandé « moins d'animations ».
   ============================================================ */
(function () {
  "use strict";

  const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE_POINTER = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const lang = () => document.documentElement.lang || "fr";
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const onVisible = (el, cb, threshold = 0.3) => {
    if (!("IntersectionObserver" in window)) { cb(true); return null; }
    const io = new IntersectionObserver((es) => es.forEach((e) => cb(e.isIntersecting)), { threshold });
    io.observe(el);
    return io;
  };

  /* ---------- 1. Barre de progression, menu actif, frise ---------- */
  const bar = document.querySelector(".progress");
  const navLinks = [...document.querySelectorAll(".nav a")];
  const timeline = document.getElementById("timeline");
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? doc.scrollTop / max : 0})`;

      let current = null;
      navLinks.forEach((a) => {
        const target = document.querySelector(a.getAttribute("href"));
        if (target && target.getBoundingClientRect().top < 140) current = a;
      });
      navLinks.forEach((a) => a.classList.toggle("active", a === current));

      if (timeline) {
        const r = timeline.getBoundingClientRect();
        const line = innerHeight * 0.65;
        const p = Math.min(1, Math.max(0, (line - r.top) / r.height));
        timeline.style.setProperty("--tl", REDUCE ? 1 : p.toFixed(3));
        timeline.querySelectorAll(":scope > li").forEach((li) =>
          li.classList.toggle("passed", REDUCE || li.getBoundingClientRect().top + 10 < line));
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* ---------- 2. Titres : soulignement qui se dessine ---------- */
  document.querySelectorAll("h2").forEach((h) => {
    if (REDUCE) { h.classList.add("in"); return; }
    const io = onVisible(h, (v) => { if (v) { h.classList.add("in"); io && io.disconnect(); } }, 0.6);
  });

  /* ---------- 3. Réseau de nœuds animé dans l'en-tête ---------- */
  function network() {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const cv = document.createElement("canvas");
    cv.className = "hero-canvas";
    cv.setAttribute("aria-hidden", "true");
    hero.prepend(cv);
    const ctx = cv.getContext("2d");
    let w = 0, h = 0, nodes = [], raf = 0, running = false;
    const mouse = { x: -9999, y: -9999 };
    const LINK = 135, MOUSE = 170;

    function size() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = hero.clientWidth; h = hero.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(18, Math.min(85, Math.round((w * h) / 15000)));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1
      }));
    }

    function draw(move) {
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        if (move) {
          n.x += n.vx; n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            ctx.strokeStyle = `rgba(24,79,120,${0.16 * (1 - Math.sqrt(d2) / LINK)})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const mx = a.x - mouse.x, my = a.y - mouse.y, md = Math.sqrt(mx * mx + my * my);
        if (md < MOUSE) {
          ctx.strokeStyle = `rgba(24,79,120,${0.4 * (1 - md / MOUSE)})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        ctx.fillStyle = md < MOUSE ? "rgba(24,79,120,.7)" : "rgba(24,79,120,.35)";
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
    }

    const loop = () => { draw(true); raf = requestAnimationFrame(loop); };
    const start = () => { if (!running && !REDUCE) { running = true; raf = requestAnimationFrame(loop); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };

    size(); draw(false);
    let rt;
    window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { size(); draw(false); }, 150); });
    if (REDUCE) return;

    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    });
    hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
    onVisible(hero, (v) => (v && !document.hidden ? start() : stop()), 0);
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  }

  /* ---------- 4. Machine à écrire ---------- */
  let typeTimer = 0;
  function typewriter() {
    const el = document.getElementById("typing-text");
    if (!el) return;
    clearTimeout(typeTimer);
    const all = (window.CONTENT.ui["hero.typing"] || {})[lang()] || [];
    if (!all.length) return;
    if (REDUCE) { el.textContent = all[0]; return; }
    let i = 0, j = 0, deleting = false;
    const tick = () => {
      const p = all[i];
      if (!deleting) {
        el.textContent = p.slice(0, ++j);
        if (j === p.length) { deleting = true; typeTimer = setTimeout(tick, 1900); return; }
        typeTimer = setTimeout(tick, 55 + Math.random() * 40);
      } else {
        el.textContent = p.slice(0, --j);
        if (j === 0) { deleting = false; i = (i + 1) % all.length; typeTimer = setTimeout(tick, 350); return; }
        typeTimer = setTimeout(tick, 26);
      }
    };
    typeTimer = setTimeout(tick, 900);
  }

  /* ---------- 5. Compteurs des chiffres clés ---------- */
  function counters() {
    document.querySelectorAll(".fact strong").forEach((el) => {
      const target = parseInt(el.textContent, 10);
      if (isNaN(target) || REDUCE) return;
      el.textContent = "0";
      const io = onVisible(el, (v) => {
        if (!v) return;
        io && io.disconnect();
        const t0 = performance.now(), d = 1500;
        const step = (now) => {
          const k = Math.min(1, (now - t0) / d);
          el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }, 0.6);
    });
  }

  /* ---------- 6. Apparition en cascade ---------- */
  function stagger() {
    if (REDUCE) return;
    [".facts-grid .fact", ".skills-grid .skill-card", ".cards .card"].forEach((sel) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        el.style.transitionDelay = `${(i % 3) * 110}ms`;
        setTimeout(() => { el.style.transitionDelay = ""; }, 2500);
      });
    });
  }

  /* ---------- 7. Cartes projets : inclinaison 3D + reflet ---------- */
  function tilt() {
    if (REDUCE || !FINE_POINTER) return;
    document.querySelectorAll(".card").forEach((c) => {
      c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`;
        c.style.setProperty("--gx", `${x * 100}%`);
        c.style.setProperty("--gy", `${y * 100}%`);
      });
      c.addEventListener("pointerleave", () => { c.style.transform = ""; });
    });
  }

  /* ---------- 8. Boutons « magnétiques » ---------- */
  function magnetic() {
    if (REDUCE || !FINE_POINTER) return;
    document.querySelectorAll(".btn.primary").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
        b.style.transform = `translate(${x * 0.15}px, ${y * 0.25}px)`;
      });
      b.addEventListener("pointerleave", () => { b.style.transform = ""; });
    });
  }

  /* ---------- 9. Pipeline CI/CD animé ---------- */
  function pipeline() {
    const sec = document.getElementById("pipeline");
    if (!sec) return;
    const stages = [...sec.querySelectorAll(".stage")];
    const list = sec.querySelector(".stages");
    const term = sec.querySelector(".term-body");
    // [étape, texte, style]
    const LINES = [
      [0, "$ git push origin main", "cmd"],
      [0, "→ pipeline triggered · GitLab CI", "dim"],
      [1, "✓ build        deps installed · assets built", "ok"],
      [2, "✓ unit         PHPUnit · all tests passed", "ok"],
      [2, "✓ integration  REST API + database · passed", "ok"],
      [2, "✓ e2e          Playwright · user journeys passed", "ok"],
      [3, "✓ report       Allure report published", "ok"],
      [4, "✓ deploy       released to production", "ok"],
      [4, "Pipeline passed ✔", "final"]
    ];
    const setStage = (s) => {
      stages.forEach((st, i) => {
        st.classList.toggle("done", i <= s);
        st.classList.toggle("active", i === s + 1);
      });
      list.style.setProperty("--p", s < 0 ? 0 : s / (stages.length - 1));
    };

    if (REDUCE) {
      LINES.forEach(([, t, c]) => { const d = document.createElement("div"); d.className = `tl ${c}`; d.textContent = t; term.appendChild(d); });
      setStage(stages.length - 1);
      return;
    }

    let runId = 0, visible = false;
    async function run() {
      const id = ++runId;
      term.textContent = "";
      setStage(-1);
      stages[0].classList.add("active");
      await sleep(500);
      for (const [s, text, cls] of LINES) {
        if (id !== runId) return;
        const div = document.createElement("div");
        div.className = `tl ${cls}`;
        term.appendChild(div);
        if (cls === "cmd") {
          for (let k = 1; k <= text.length; k++) {
            if (id !== runId) return;
            div.textContent = text.slice(0, k);
            await sleep(45);
          }
          await sleep(350);
        } else {
          div.classList.add("pop");
          div.textContent = text;
          await sleep(cls === "ok" ? 650 : 450);
        }
        setStage(s);
      }
      await sleep(5000);
      if (id === runId && visible) run();
    }
    onVisible(sec, (v) => {
      if (v && !visible) { visible = true; run(); }
      else if (!v && visible) { visible = false; runId++; }
    }, 0.35);
  }

  /* ---------- Lancement ---------- */
  function onRendered() {
    typewriter();
    counters();
    stagger();
    tilt();
    onScroll();
  }
  network();
  pipeline();
  magnetic();
  onRendered();
  document.addEventListener("content:rendered", onRendered);
})();
