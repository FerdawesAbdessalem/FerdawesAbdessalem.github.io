/* ============================================================
   ANIMATIONS — ciel animé, titre mot par mot, scène 3D, films
   d'écrans (carrousels), schémas, filtres, frise,
   thème clair/sombre, visionneuse plein écran.
   Tout est réduit si le visiteur a demandé « moins d'animations ».
   ============================================================ */
(function () {
  "use strict";

  const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const FINE = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const C = window.CONTENT;
  const root = document.documentElement;
  const lang = () => root.lang || "fr";
  const ui = (k) => (C.ui[k] && C.ui[k][lang()]) || "";
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  function onView(el, cb, opts) {
    if (!("IntersectionObserver" in window)) { cb(true); return { disconnect() {} }; }
    const io = new IntersectionObserver((es) => es.forEach((e) => cb(e.isIntersecting, e)), opts || { threshold: 0.25 });
    io.observe(el);
    return io;
  }

  /* ---------- 0. Lancement de l'entrée du hero ---------- */
  const go = () => root.classList.add("ready");
  if (document.fonts && document.fonts.ready) {
    Promise.race([document.fonts.ready, sleep(900)]).then(go);
  } else go();

  /* ---------- 1. En-tête : verre dépoli, barre de lecture, onglet actif ---------- */
  const top = document.querySelector(".top");
  const bar = document.querySelector(".progress i");
  const nav = document.querySelector(".nav");
  const ink = nav && nav.querySelector(".ink");
  const links = nav ? [...nav.querySelectorAll("a")] : [];
  const darkBands = () => [...document.querySelectorAll("section.dark, footer.dark")];
  let ticking = false;

  function inkTo(a) {
    if (!ink) return;
    if (!a) { ink.style.opacity = 0; return; }
    const r = a.getBoundingClientRect(), n = nav.getBoundingClientRect();
    ink.style.opacity = 1;
    ink.style.width = r.width + "px";
    ink.style.transform = `translateX(${r.left - n.left}px)`;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const max = root.scrollHeight - root.clientHeight;
      const p = max > 0 ? root.scrollTop / max : 0;
      if (bar) { bar.style.transform = `scaleX(${p})`; bar.style.setProperty("--inv", p > 0 ? 1 / p : 1); }

      /* en-tête : transparent sur le hero, puis verre clair ou sombre selon la bande dessous */
      const y = 34;
      const scrolled = root.scrollTop > 40;
      const overDark = darkBands().some((s) => { const r = s.getBoundingClientRect(); return r.top <= y && r.bottom > y; });
      top.classList.toggle("is-stuck", scrolled && !overDark);
      top.classList.toggle("on-dark", scrolled && overDark);

      /* section active */
      let cur = null;
      links.forEach((a) => {
        const t = document.querySelector(a.getAttribute("href"));
        if (t) { const r = t.getBoundingClientRect(); if (r.top < innerHeight * 0.45 && r.bottom > innerHeight * 0.3) cur = a; }
      });
      links.forEach((a) => a.classList.toggle("active", a === cur));
      inkTo(cur);

      /* frise */
      const tl = document.getElementById("timeline");
      if (tl) {
        const r = tl.getBoundingClientRect(), line = innerHeight * 0.6;
        tl.style.setProperty("--tl", REDUCE ? 1 : clamp((line - r.top) / r.height, 0, 1).toFixed(3));
        tl.querySelectorAll(".step").forEach((li) => li.classList.toggle("passed", REDUCE || li.getBoundingClientRect().top + 40 < line));
      }

      /* appareils qui « se posent » en 3D */
      if (!REDUCE) document.querySelectorAll(".case-widget .device").forEach((d) => {
        const r = d.getBoundingClientRect();
        const k = clamp((innerHeight - r.top) / (innerHeight * 0.75), 0, 1);
        d.style.setProperty("--land", (1 - Math.pow(1 - k, 3)).toFixed(3));
      });
    });
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);

  /* ---------- 2. Ciel animé du hero (étoiles + réseau + étoiles filantes) ---------- */
  function sky() {
    const cv = document.querySelector(".sky");
    const hero = document.querySelector(".hero");
    if (!cv || !hero) return;
    const ctx = cv.getContext("2d");
    let w = 0, h = 0, stars = [], nodes = [], streaks = [], raf = 0, running = false, t = 0;
    const mouse = { x: -9999, y: -9999 };

    function size() {
      const dpr = Math.min(2, devicePixelRatio || 1);
      w = hero.clientWidth; h = hero.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: Math.round((w * h) / 5200) }, () => ({
        x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.2 + .2, p: Math.random() * 6.28, s: Math.random() * .02 + .005
      }));
      nodes = Array.from({ length: clamp(Math.round((w * h) / 26000), 14, 60) }, () => ({
        x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25
      }));
    }
    function draw(move) {
      t++;
      ctx.clearRect(0, 0, w, h);
      const light = root.dataset.theme !== "dark";
      const star = light ? "60,80,140" : "220,230,255";
      const net = light ? "91,75,214" : "139,125,255";
      for (const s of stars) {
        const a = .25 + .55 * (0.5 + 0.5 * Math.sin(s.p + t * s.s));
        ctx.fillStyle = `rgba(${star},${light ? a * .55 : a})`;
        ctx.fillRect(s.x, s.y, s.r, s.r);
      }
      for (const n of nodes) {
        if (move) { n.x += n.vx; n.y += n.vy; if (n.x < 0 || n.x > w) n.vx *= -1; if (n.y < 0 || n.y > h) n.vy *= -1; }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
          if (d < 150) { ctx.strokeStyle = `rgba(${net},${(light ? .22 : .16) * (1 - d / 150)})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 190) { ctx.strokeStyle = `rgba(45,212,191,${.45 * (1 - md / 190)})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
        ctx.fillStyle = md < 190 ? "rgba(45,212,191,.9)" : (light ? "rgba(91,75,214,.45)" : "rgba(160,170,255,.5)");
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.6, 0, 6.283); ctx.fill();
      }
      /* étoiles filantes */
      if (move && Math.random() < .012 && streaks.length < 3) {
        streaks.push({ x: Math.random() * w * .8, y: Math.random() * h * .5, vx: 7 + Math.random() * 5, vy: 2.2 + Math.random() * 2, life: 1 });
      }
      streaks = streaks.filter((s) => s.life > 0);
      for (const s of streaks) {
        s.x += s.vx; s.y += s.vy; s.life -= .018;
        const g = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 14, s.y - s.vy * 14);
        g.addColorStop(0, `rgba(246,183,74,${s.life})`); g.addColorStop(1, "rgba(246,183,74,0)");
        ctx.strokeStyle = g; ctx.lineWidth = 1.6;
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.vx * 14, s.y - s.vy * 14); ctx.stroke();
        ctx.lineWidth = 1;
      }
    }
    const loop = () => { draw(true); raf = requestAnimationFrame(loop); };
    const start = () => { if (!running && !REDUCE) { running = true; raf = requestAnimationFrame(loop); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };
    size(); draw(false);
    document.addEventListener("theme:changed", () => { if (!running) draw(false); });
    let rt;
    addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { size(); draw(false); }, 150); });
    if (REDUCE) return;
    hero.addEventListener("pointermove", (e) => { const r = hero.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    hero.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
    onView(hero, (v) => (v && !document.hidden ? start() : stop()), { threshold: 0 });
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  }

  /* ---------- 3. Scène du hero : parallaxe, paquets sur les fils, mini-films ---------- */
  function stage() {
    const st = document.querySelector(".stage");
    if (!st) return;
    /* mini-films : ordinateur = Chalet Montagne, téléphone = Secure Appart */
    st.querySelectorAll("[data-film-src]").forEach((box, k) => {
      const c = C.cases.find((x) => x.id === box.dataset.filmSrc);
      if (!c) return;
      const frames = c.film.frames.map((f) => f[0]);
      box.innerHTML = frames.map((src, i) => `<img src="${src}" alt="" ${i ? 'loading="lazy"' : ""} class="${i ? "" : "on"}">`).join("");
      if (REDUCE) return;
      const imgs = [...box.children];
      let i = 0;
      setTimeout(() => setInterval(() => {
        if (document.hidden) return;
        imgs[i].classList.remove("on");
        i = (i + 1) % imgs.length;
        imgs[i].classList.add("on");
      }, k ? 2300 : 3200), k * 900);
    });
    if (REDUCE) return;
    if (FINE) {
      const hero = document.querySelector(".hero");
      hero.addEventListener("pointermove", (e) => {
        st.style.setProperty("--px", ((e.clientX / innerWidth) - .5).toFixed(3));
        st.style.setProperty("--py", ((e.clientY / innerHeight) - .5).toFixed(3));
      });
      hero.addEventListener("pointerleave", () => { st.style.setProperty("--px", 0); st.style.setProperty("--py", 0); });
    }
    /* paquets lumineux qui voyagent sur les fils pointillés */
    const svg = st.querySelector(".wires");
    const paths = [...svg.querySelectorAll("path")];
    const packets = paths.map(() => {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("r", "4"); c.setAttribute("class", "packet");
      svg.appendChild(c); return c;
    });
    let t0 = performance.now(), raf = 0, on = false;
    function frame(now) {
      const t = (now - t0) / 1000;
      paths.forEach((p, i) => {
        const len = p.getTotalLength();
        const k = ((t * 0.45 + i * 0.33) % 1);
        const pt = p.getPointAtLength(len * k);
        packets[i].setAttribute("cx", pt.x); packets[i].setAttribute("cy", pt.y);
        packets[i].setAttribute("opacity", Math.sin(k * Math.PI).toFixed(2));
      });
      raf = requestAnimationFrame(frame);
    }
    onView(st, (v) => { if (v && !on) { on = true; raf = requestAnimationFrame(frame); } else if (!v && on) { on = false; cancelAnimationFrame(raf); } }, { threshold: 0 });
  }

  /* ---------- 4. Machine à écrire ---------- */
  let typeTimer = 0;
  function typewriter() {
    const el = document.getElementById("typing-text");
    if (!el) return;
    clearTimeout(typeTimer);
    const all = [...(C.ui["hero.typing"] ? C.ui["hero.typing"][lang()] : [])];
    if (!all.length) return;
    if (REDUCE) { el.textContent = all[0]; return; }
    let i = 0, j = 0, del = false;
    const tick = () => {
      const p = all[i];
      if (!del) {
        el.textContent = p.slice(0, ++j);
        if (j === p.length) { del = true; typeTimer = setTimeout(tick, 1900); return; }
        typeTimer = setTimeout(tick, 50 + Math.random() * 40);
      } else {
        el.textContent = p.slice(0, --j);
        if (j === 0) { del = false; i = (i + 1) % all.length; typeTimer = setTimeout(tick, 350); return; }
        typeTimer = setTimeout(tick, 24);
      }
    };
    typeTimer = setTimeout(tick, 1400);
  }

  /* ---------- 5. Apparition au défilement ---------- */
  let revealIO = null;
  function reveal() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (REDUCE || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    if (!revealIO) revealIO = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); revealIO.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach((e) => revealIO.observe(e));
  }

  /* ---------- 6. Films d'écrans (carrousels) ---------- */
  let films = [];
  function filmsInit() {
    films.forEach((f) => f.destroy());
    films = [...document.querySelectorAll("[data-film]")].map(makeFilm);
  }
  function makeFilm(el) {
    const track = el.querySelector(".film-track");
    const slides = [...el.querySelectorAll(".film-slide")];
    const cap = el.querySelector(".film-cap");
    const dotsWrap = el.querySelector(".film-dots");
    const caps = JSON.parse(el.dataset.captions || "[]");
    const delay = parseInt(el.dataset.autoplay || "3000", 10);
    let index = 0, timer = 0, taken = false, visible = false;

    const dots = slides.map((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", `${dotsWrap.dataset.label} ${i + 1}`);
      b.addEventListener("click", () => manual(i));
      dotsWrap.appendChild(b);
      return b;
    });
    function show(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((s, k) => { s.classList.toggle("is-current", k === index); s.inert = k !== index; });
      dots.forEach((d, k) => d.setAttribute("aria-current", String(k === index)));
      if (caps[index]) { cap.textContent = caps[index][1]; cap.classList.remove("swap"); void cap.offsetWidth; cap.classList.add("swap"); }
      /* précharge l'image suivante */
      const nx = slides[(index + 1) % slides.length].querySelector("img");
      if (nx && nx.loading === "lazy") nx.loading = "eager";
    }
    function stop() { clearInterval(timer); timer = 0; el.classList.remove("is-playing"); }
    function play() {
      if (REDUCE || taken || !visible || timer) return;
      el.style.setProperty("--autoplay", delay + "ms");
      el.classList.add("is-playing");
      /* relance l'animation de remplissage du point courant */
      dots.forEach((d) => d.setAttribute("aria-current", "false")); void el.offsetWidth; dots[index].setAttribute("aria-current", "true");
      timer = setInterval(() => { show(index + 1); restartFill(); }, delay);
    }
    function restartFill() { const d = dots[index]; d.setAttribute("aria-current", "false"); void d.offsetWidth; d.setAttribute("aria-current", "true"); }
    function manual(i) { taken = true; stop(); el.classList.add("is-taken"); show(i); }

    el.querySelector(".film-prev").addEventListener("click", () => manual(index - 1));
    el.querySelector(".film-next").addEventListener("click", () => manual(index + 1));
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", play);
    el.addEventListener("focusin", stop);
    el.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); manual(index + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); manual(index - 1); }
    });
    /* glisser au doigt */
    let sx = null, sy = null;
    el.addEventListener("pointerdown", (e) => { sx = e.clientX; sy = e.clientY; }, { passive: true });
    el.addEventListener("pointerup", (e) => {
      if (sx == null) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      sx = null;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { el._swiped = true; manual(index + (dx < 0 ? 1 : -1)); setTimeout(() => (el._swiped = false), 50); }
    });
    /* clic = plein écran */
    slides.forEach((s, i) => s.querySelector(".film-open").addEventListener("click", () => {
      if (el._swiped) return;
      stop(); lightbox.open(caps, i);
    }));
    const io = onView(el, (v) => { visible = v; v ? play() : stop(); }, { threshold: 0.35 });
    show(0);
    return { destroy() { stop(); io.disconnect(); } };
  }

  /* ---------- 7. Visionneuse plein écran ---------- */
  const lightbox = (function () {
    const box = document.getElementById("lightbox");
    const img = box.querySelector("img"), capEl = box.querySelector("figcaption");
    let list = [], i = 0, last = null;
    function show(k) {
      i = (k + list.length) % list.length;
      img.src = list[i][0]; img.alt = list[i][1];
      capEl.textContent = `${list[i][1]} · ${i + 1} / ${list.length}`;
    }
    function open(l, k) { last = document.activeElement; list = l; box.hidden = false; document.body.style.overflow = "hidden"; show(k); box.querySelector(".lb-close").focus(); }
    function close() { box.hidden = true; document.body.style.overflow = ""; if (last) last.focus(); }
    box.querySelector(".lb-close").addEventListener("click", close);
    box.querySelector(".lb-prev").addEventListener("click", () => show(i - 1));
    box.querySelector(".lb-next").addEventListener("click", () => show(i + 1));
    box.addEventListener("click", (e) => { if (e.target === box) close(); });
    addEventListener("keydown", (e) => {
      if (box.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(i + 1);
      if (e.key === "ArrowLeft") show(i - 1);
    });
    let sx = null;
    box.addEventListener("pointerdown", (e) => (sx = e.clientX));
    box.addEventListener("pointerup", (e) => { if (sx != null && Math.abs(e.clientX - sx) > 40) show(i + (e.clientX < sx ? 1 : -1)); sx = null; });
    return { open };
  })();

  /* ---------- 7b. Photos du prix : ouverture en plein écran ---------- */
  function awards() {
    document.querySelectorAll(".award-photos").forEach((box) => {
      const list = JSON.parse(box.dataset.photos || "[]");
      box.querySelectorAll("button").forEach((b) =>
        b.addEventListener("click", () => lightbox.open(list, parseInt(b.dataset.index, 10))));
    });
  }

  /* ---------- 8. Schémas : les étapes s'allument tour à tour ---------- */
  let flowTimers = [];
  function flows() {
    flowTimers.forEach(clearInterval); flowTimers = [];
    document.querySelectorAll(".flow").forEach((f) => {
      const nodes = [...f.querySelectorAll(".node")];
      if (REDUCE) { nodes.forEach((n) => n.classList.add("hot")); return; }
      let k = -1, timer = 0;
      const step = () => { k = (k + 1) % (nodes.length + 1); nodes.forEach((n, i) => n.classList.toggle("hot", i < k)); };
      onView(f, (v) => {
        if (v && !timer) { timer = setInterval(step, 650); flowTimers.push(timer); }
        else if (!v && timer) { clearInterval(timer); timer = 0; }
      }, { threshold: 0.4 });
    });
  }

  /* ---------- 9. Filtres des projets ---------- */
  function filters() {
    const chips = [...document.querySelectorAll(".chip")];
    chips.forEach((c) => c.addEventListener("click", () => {
      const f = c.dataset.filter;
      chips.forEach((x) => x.setAttribute("aria-pressed", String(x === c)));
      document.querySelectorAll(".case, .card").forEach((el) => {
        const show = f === "all" || el.dataset.stack.split(" ").includes(f);
        const was = !el.classList.contains("is-hidden");
        el.classList.toggle("is-hidden", !show);
        if (show && !was && !REDUCE) { el.classList.remove("fade-in"); void el.offsetWidth; el.classList.add("fade-in"); }
        if (show) el.querySelectorAll(".reveal").forEach((r) => r.classList.add("in"));
        if (show && el.classList.contains("reveal")) el.classList.add("in");
      });
      onScroll();
    }));
  }

  /* ---------- 10. Cartes : inclinaison 3D + reflet ; boutons magnétiques ---------- */
  function tilt() {
    if (REDUCE || !FINE) return;
    document.querySelectorAll(".card").forEach((c) => {
      c.addEventListener("pointermove", (e) => {
        const r = c.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-4px)`;
        c.style.setProperty("--gx", `${x * 100}%`); c.style.setProperty("--gy", `${y * 100}%`);
      });
      c.addEventListener("pointerleave", () => { c.style.transform = ""; });
    });
  }
  function magnetic() {
    if (REDUCE || !FINE) return;
    document.addEventListener("pointermove", (e) => {
      const b = e.target.closest && e.target.closest(".btn.primary");
      document.querySelectorAll(".btn.primary").forEach((x) => { if (x !== b) x.style.transform = ""; });
      if (!b) return;
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.15}px, ${(e.clientY - r.top - r.height / 2) * 0.25}px)`;
    });
  }

  /* ---------- 12. Thème clair / sombre ---------- */
  function theme() {
    const b = document.getElementById("theme-btn");
    b.addEventListener("click", () => {
      const t = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = t;
      try { localStorage.setItem("theme", t); } catch (e) { /* ignore */ }
      document.dispatchEvent(new CustomEvent("theme:changed"));
      onScroll();
    });
  }

  /* ---------- 12b. Menu mobile ---------- */
  function menu() {
    const btn = document.getElementById("menu-btn");
    if (!btn || !nav) return;
    const set = (open) => { nav.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open)); };
    btn.addEventListener("click", () => set(!nav.classList.contains("open")));
    links.forEach((l) => l.addEventListener("click", () => set(false)));
    addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
    document.addEventListener("click", (e) => { if (!nav.contains(e.target) && !btn.contains(e.target)) set(false); });
  }

  /* ---------- 13. Copier l'adresse e-mail ---------- */
  function copy() {
    document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(b.dataset.copy); } catch (e) { return; }
      b.dataset.done = ui("copied");
      setTimeout(() => b.removeAttribute("data-done"), 1600);
    }));
  }

  /* ---------- Lancement ---------- */
  function onRendered() {
    typewriter();
    reveal();
    filmsInit();
    awards();
    flows();
    filters();
    tilt();
    onScroll();
  }
  sky();
  stage();
  magnetic();
  theme();
  menu();
  copy();
  onRendered();
  document.addEventListener("content:rendered", onRendered);
})();
