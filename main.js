(function () {
  "use strict";
  const C = window.CONTENT;
  const LANGS = ["fr", "en", "it"];
  const $ = (sel) => document.querySelector(sel);

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  const tags = (list) => `<ul class="tags">${list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

  function pickInitialLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem("lang");
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* storage unavailable */ }
    const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : "en";
  }

  function render(lang) {
    const t = (key) => (C.ui[key] ? C.ui[key][lang] : key);
    document.documentElement.lang = lang;

    // Texte manquant (ex. ancien fichier en cache) : on garde le texte déjà présent dans la page.
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const entry = C.ui[el.getAttribute("data-i18n")];
      if (entry && entry[lang]) el.textContent = entry[lang];
    });
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });

    const cv = $("#cv-link");
    cv.href = C.cv[lang];

    $("#facts").innerHTML = C.facts.map((f) =>
      `<div class="fact reveal"><strong>${esc(f.value)}</strong><span>${esc(f.label[lang])}</span></div>`).join("");

    $("#skills-grid").innerHTML = C.skills.map((s) =>
      `<div class="skill-card reveal"><h3>${esc(s.title[lang])}</h3>${tags(s.items)}</div>`).join("");

    $("#timeline").innerHTML = C.experience.map((j) => `
      <li class="job reveal">
        <div class="job-head"><h3>${esc(j.title[lang])}</h3><span class="job-meta">${esc(j.dates[lang])}</span></div>
        <div class="job-org">${esc(j.org)} <span class="job-meta">· ${esc(j.place[lang])}</span></div>
        <ul>${j.bullets[lang].map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        ${tags(j.tags)}
      </li>`).join("");

    $("#cards").innerHTML = C.projects.map((p) => {
      const links = [
        p.site ? `<a href="${esc(p.site)}" target="_blank" rel="noopener">${esc(t("link.site"))} ↗</a>` : "",
        p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">${esc(t("link.code"))} ↗</a>` : ""
      ].join("");
      return `
      <article class="card reveal">
        <div class="card-top">
          <h3>${esc(p.name)}${p.pro ? `<span class="badge">${esc(t("badge.pro"))}</span>` : ""}</h3>
          <span class="year">${esc(p.year)}</span>
        </div>
        <div class="kind">${esc(p.kind[lang])}</div>
        <p>${esc(p.desc[lang])}</p>
        ${tags(p.tags)}
        ${links ? `<div class="card-links">${links}</div>` : ""}
      </article>`;
    }).join("");

    $("#edu").innerHTML = C.education.map((e) =>
      `<li class="reveal"><strong>${esc(e.title[lang])}</strong><span class="meta">${esc(e.school[lang])} · ${esc(e.dates)}</span></li>`).join("");

    $("#certs").innerHTML = C.certs.map((c) =>
      `<li class="reveal"><strong>${esc(c.name[lang])}</strong><span class="meta">${esc(c.year)} · <a href="${esc(c.url)}" target="_blank" rel="noopener">${esc(t("link.cert"))} ↗</a></span></li>`).join("");

    $("#languages").textContent = C.languages[lang];

    observeReveal();
    document.dispatchEvent(new CustomEvent("content:rendered"));
  }

  let observer;
  function observeReveal() {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); observer.unobserve(en.target); } });
      }, { threshold: 0.08 });
    }
    els.forEach((el) => observer.observe(el));
  }

  function setLang(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
    render(lang);
  }

  document.querySelectorAll("[data-lang]").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang)));

  $("#year").textContent = new Date().getFullYear();
  render(pickInitialLang());
})();
