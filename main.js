/* ============================================================
   AFFICHAGE — remplit la page à partir de content.js (FR / EN / IT).
   Les animations sont dans animations.js.
   ============================================================ */
(function () {
  "use strict";
  const C = window.CONTENT;
  const LANGS = ["fr", "en", "it"];
  const $ = (sel) => document.querySelector(sel);

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  /* texte simple ou { fr, en, it } ou "fr:..|en:..|it:.." */
  function L(v, lang) {
    if (v == null) return "";
    if (typeof v === "object") return v[lang] || v.fr || "";
    if (/^fr:/.test(v)) {
      const parts = Object.fromEntries(v.split("|").map((p) => [p.slice(0, 2), p.slice(3)]));
      return parts[lang] || parts.fr;
    }
    return v;
  }
  /* **mot** → mise en valeur */
  const md = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<mark class="hl">$1</mark>');
  const tags = (list) => list && list.length ? `<ul class="tags">${list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : "";

  function pickInitialLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem("lang");
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* stockage indisponible */ }
    const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : "en";
  }

  function film(c, lang, t) {
    const f = c.film;
    const slides = f.frames.map(([src, cap], i) => `
      <li class="film-slide${i === 0 ? " is-current" : ""}">
        <button type="button" class="film-open" data-index="${i}" aria-label="${esc(t("film.open"))} : ${esc(L(cap, lang))}">
          <img src="${esc(src)}" alt="${esc(c.name)} — ${esc(L(cap, lang))}" ${i ? 'loading="lazy"' : ""} decoding="async">
        </button>
      </li>`).join("");
    return `
      <div class="film film-${f.device}" data-film data-autoplay="${f.device === "phone" ? 2600 : 3400}"
           data-captions='${esc(JSON.stringify(f.frames.map(([src, cap]) => [src, L(cap, lang)])))}'>
        <div class="device device-${f.device}">
          ${f.device === "laptop" ? '<div class="cam"></div>' : '<div class="notch"></div>'}
          <div class="film-viewport"><ul class="film-track">${slides}</ul></div>
          ${f.device === "laptop" ? '<div class="device-base"></div>' : ""}
        </div>
        <div class="film-foot">
          <button type="button" class="film-btn film-prev" aria-label="${esc(t("film.prev"))}">‹</button>
          <p class="film-cap" aria-live="polite">${esc(L(f.frames[0][1], lang))}</p>
          <button type="button" class="film-btn film-next" aria-label="${esc(t("film.next"))}">›</button>
        </div>
        <div class="film-dots" data-label="${esc(t("film.go"))}"></div>
        <p class="film-note">${esc(L(f.note, lang))}</p>
      </div>`;
  }

  function flow(c, lang) {
    return `<ol class="flow" aria-hidden="true">${c.flow.map(([label, kind], i) =>
      `<li class="node node-${kind}" style="--n:${i}"><span>${esc(L(label, lang))}</span></li>`).join("")}</ol>`;
  }

  function render(lang) {
    const t = (key) => (C.ui[key] ? C.ui[key][lang] : "");
    document.documentElement.lang = lang;

    /* textes fixes — si une clé manque, on garde le texte déjà présent */
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const entry = C.ui[el.getAttribute("data-i18n")];
      if (entry && entry[lang]) el.textContent = entry[lang];
    });
    document.querySelectorAll("[data-i18n-label]").forEach((el) => {
      const v = t(el.getAttribute("data-i18n-label"));
      if (v) { el.setAttribute("aria-label", v); el.title = v; }
    });
    /* grand titre découpé mot par mot */
    document.querySelectorAll("[data-i18n-split]").forEach((el) => {
      const text = t(el.getAttribute("data-i18n-split")) || el.textContent;
      el.setAttribute("aria-label", text + ".");
      const words = text.split(/\s+/);
      el.innerHTML = words.map((w, i) =>
        `<span class="w" aria-hidden="true"><span style="--i:${i}">${esc(w)}${i === words.length - 1 ? '<em class="dot">.</em>' : ""}</span></span>`
      ).join(" ");
    });
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    $("#cv-link").href = C.cv[lang];
    $("#cv-top").href = C.cv[lang];

    $("#proof").innerHTML = md(t("proof"));

    $("#clients").innerHTML = C.clients.map((c, i) => {
      const inner = `${c.logo ? `<img src="${esc(c.logo)}" alt="${esc(c.name)}" loading="lazy">` : ""}${c.label ? `<span>${esc(c.label)}</span>` : ""}`;
      const cls = `client reveal${c.dark ? " is-dark" : ""}${c.logo && !c.label ? " logo-only" : ""}`;
      return c.url
        ? `<li class="${cls}" style="--s:${i}"><a href="${esc(c.url)}" target="_blank" rel="noopener" aria-label="${esc(c.name)}">${inner}</a></li>`
        : `<li class="${cls}" style="--s:${i}"><div>${inner}</div></li>`;
    }).join("");

    $("#glance").innerHTML = C.glance.map((g, i) =>
      `<div class="g-row reveal" style="--s:${i % 2}"><dt>${esc(L(g.k, lang))}</dt><dd>${esc(L(g.v, lang))}</dd></div>`).join("");

    /* filtres */
    const count = (id) => C.cases.filter((c) => c.stack.includes(id)).length + C.projects.filter((p) => p.stack.includes(id)).length;
    $("#chips").innerHTML =
      `<button type="button" class="chip" data-filter="all" aria-pressed="true">${esc(t("work.all"))} <b>${C.cases.length + C.projects.length}</b></button>` +
      Object.entries(C.stacks).map(([id, label]) =>
        `<button type="button" class="chip" data-filter="${id}" aria-pressed="false">${esc(L(label, lang))} <b>${count(id)}</b></button>`).join("");

    /* grands projets */
    $("#cases").innerHTML = C.cases.map((c, i) => {
      const links = [
        c.site ? `<a class="btn small" href="${esc(c.site)}" target="_blank" rel="noopener">${esc(t("link.site"))} ↗</a>` : "",
        c.code ? `<a class="btn small ghost" href="${esc(c.code)}" target="_blank" rel="noopener">${esc(t("link.code"))} ↗</a>` : ""
      ].join("");
      return `
      <article class="case${i % 2 ? " flip" : ""}" id="case-${c.id}" data-stack="${c.stack.join(" ")}">
        <div class="case-widget reveal">
          <div class="glow" aria-hidden="true"></div>
          ${film(c, lang, t)}
          <div class="pills" aria-hidden="true">${c.pills.map((p, k) => `<span class="pill" style="--k:${k}"><i></i>${esc(p)}</span>`).join("")}</div>
        </div>
        <div class="case-body">
          <div class="case-side reveal">
            ${c.logo ? `<div class="case-logo${c.id === "chalet" ? " is-dark" : ""}"><img src="${esc(c.logo)}" alt="${esc(c.name)}" loading="lazy">${c.id === "synap" ? "<span>Synapsystem</span>" : ""}</div>` : ""}
            ${flow(c, lang)}
          </div>
          <div class="case-text reveal">
            <p class="case-meta">${esc(L(c.meta, lang))}</p>
            <h3 class="case-title">${esc(c.name)}</h3>
            <p class="case-desc">${esc(L(c.desc, lang))}</p>
            <p class="case-did-title">${esc(t("work.did"))}</p>
            <ul class="case-did">${L(c.did, lang).map((d) => `<li>${md(d)}</li>`).join("")}</ul>
            ${tags(c.tags)}
            ${links ? `<div class="case-links">${links}</div>` : ""}
          </div>
        </div>
      </article>`;
    }).join("");

    /* autres projets */
    $("#cards").innerHTML = C.projects.map((p, i) => `
      <article class="card reveal" style="--s:${i}" data-stack="${p.stack.join(" ")}">
        <div class="card-top"><h4>${esc(p.name)}</h4><span class="year">${esc(p.year)}</span></div>
        <div class="kind">${esc(L(p.kind, lang))}</div>
        <p>${esc(L(p.desc, lang))}</p>
        ${tags(p.tags)}
        ${p.code ? `<a class="card-link" href="${esc(p.code)}" target="_blank" rel="noopener">${esc(t("link.code"))} ↗</a>` : ""}
      </article>`).join("");

    /* parcours */
    $("#timeline").innerHTML = C.experience.map((j, i) => `
      <li class="step reveal${i === 0 ? " now" : ""}">
        <span class="step-dot" aria-hidden="true"></span>
        <p class="step-date">${esc(L(j.dates, lang))}</p>
        <div>
          <h3>${esc(L(j.title, lang))}</h3>
          <p class="step-place">${esc(L(j.place, lang))}</p>
          <p>${esc(L(j.text, lang))}</p>
          ${tags(j.tags)}
        </div>
      </li>`).join("");

    $("#certs").innerHTML = C.certs.map((c, i) =>
      `<li class="reveal" style="--s:${i}"><a href="${esc(c.url)}" target="_blank" rel="noopener"><strong>${esc(L(c.name, lang))}</strong><span>${esc(c.year)} · ${esc(t("link.cert"))} ↗</span></a></li>`).join("");

    $("#hire-table").innerHTML = C.hire.map((h) =>
      `<div class="h-row reveal"><dt>${esc(L(h.k, lang))}</dt><dd>${esc(L(h.v, lang))}</dd></div>`).join("");

    document.dispatchEvent(new CustomEvent("content:rendered", { detail: { lang } }));
  }

  function setLang(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
    render(lang);
  }

  document.querySelectorAll("[data-lang]").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang)));

  $("#year").textContent = new Date().getFullYear();
  window.__initialLang = pickInitialLang();
  render(window.__initialLang);
})();
