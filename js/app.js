/* =====================================================================
   APP.JS — le moteur du site.
   Il lit data/site.js et data/projects.js et construit chaque page.
   Tu n'as normalement JAMAIS besoin de modifier ce fichier.
   ===================================================================== */
(function () {
  "use strict";

  const SITE = window.SITE;
  const PROJECTS = Array.isArray(window.PROJECTS) ? window.PROJECTS : null;
  const page = document.body.dataset.page;
  const root = document.documentElement;
  const $ = (id) => document.getElementById(id);
  const $$ = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

  /* Fichier de données cassé (virgule ou guillemet manquant) : message clair au lieu d'une page vide */
  if (!SITE || !PROJECTS) {
    const file = !SITE ? "data/site.js" : "data/projects.js";
    $("page").innerHTML =
      `<div class="data-error"><strong>Oups — le fichier ${file} contient une erreur.</strong><br><br>` +
      `Annule ta dernière modification ou vérifie les virgules et les guillemets autour de la ligne modifiée. ` +
      `Appuie sur F12 puis onglet « Console » : le numéro de ligne exact y est indiqué. (Voir GUIDE.md → « En cas de problème ».)</div>`;
    return;
  }
  root.classList.add("js");

  // Projets affichés dans les listes (listed: false = page accessible, mais absente de l'accueil et de Work)
  const LISTED = PROJECTS.filter((p) => p.listed !== false);

  /* ------------------------------------------------------------------
     Langue
     ------------------------------------------------------------------ */
  const LANGS = ["en", "fr"];
  let lang = LANGS.includes(SITE.defaultLang) ? SITE.defaultLang : "en";
  if (SITE.showLangSwitch) {
    try { const saved = localStorage.getItem("lang"); if (LANGS.includes(saved)) lang = saved; } catch (e) { /* stockage indisponible */ }
  }

  /* ------------------------------------------------------------------
     Petits outils
     ------------------------------------------------------------------ */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Texte bilingue { en, fr } ou simple texte
  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en ?? "" : v ?? "");
  const ui = (key) => SITE.ui?.[lang]?.[key] ?? SITE.ui?.en?.[key] ?? key;
  const list = (v) => (v == null || v === "" ? [] : Array.isArray(v) ? v : [v]);
  const pad = (n) => String(n).padStart(2, "0");
  const slugify = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const paragraphs = (s) => esc(s).split(/\n\s*\n/).map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`).join("");
  const cats = (p) => list(p.category);
  const projectUrl = (p) => `project.html?p=${encodeURIComponent(p.slug)}`;

  const ICON = {
    arrow: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5"/></svg>',
    down: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M6 1v8M2.5 5.5 6 9l3.5-3.5M1.5 11h9"/></svg>',
  };

  // "cover.webp" → assets/images/projects/<slug>/cover.webp ; chemins complets et liens laissés tels quels
  function resolve(src, project) {
    if (!src) return "";
    if (/^(https?:)?\/\//.test(src) || src.includes("/")) return src;
    return project ? `assets/images/projects/${project.slug}/${src}` : src;
  }

  function parseSize(size, fallback = "1920x1080") {
    const m = String(size || "").match(/(\d+)\s*[x×*]\s*(\d+)/i) || fallback.match(/(\d+)x(\d+)/);
    return { w: +m[1], h: +m[2] };
  }

  /* ------------------------------------------------------------------
     Images, placeholders, vidéos
     ------------------------------------------------------------------ */
  function placeholder(size, label, decorative) {
    const { w, h } = parseSize(size);
    const text = label || ui("placeholder");
    const a11y = decorative ? 'aria-hidden="true"' : `role="img" aria-label="${esc(text)} — ${w} × ${h}"`;
    return `<div class="ph" style="aspect-ratio:${w}/${h}" ${a11y}>` +
      `<span class="ph__cross" aria-hidden="true"></span>` +
      `<span class="ph__label" aria-hidden="true">${esc(text)}</span>` +
      `<span class="ph__size" aria-hidden="true">${w} × ${h}</span></div>`;
  }

  function img(src, { size, alt = "", label = "", eager = false } = {}) {
    if (!src) return placeholder(size, label, !alt);
    const { w, h } = parseSize(size);
    return `<img src="${esc(src)}" alt="${esc(alt)}" width="${w}" height="${h}" ` +
      (eager ? 'fetchpriority="high" ' : 'loading="lazy" ') +
      `decoding="async" data-size="${w}x${h}" data-label="${esc(label)}" onerror="Portfolio.imgFail(this)">`;
  }

  // Appelé quand une image / vidéo est introuvable : on la remplace par un placeholder
  function imgFail(el) {
    el.onerror = null;
    const target = el.closest(".zoom") || el;
    target.outerHTML = placeholder(el.dataset.size, el.dataset.label || "", el.tagName === "IMG" && !el.alt);
  }

  // Lien YouTube / Vimeo → adresse d'intégration (sinon "")
  function embedUrl(url, background = false) {
    const s = String(url);
    const yt = s.match(/(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
    if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0` + (background ? `&autoplay=1&mute=1&loop=1&playlist=${yt[1]}&controls=0` : "");
    const vm = s.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}?dnt=1` + (background ? "&background=1" : "");
    return "";
  }

  // RGPD : une vidéo YouTube / Vimeo n'est chargée qu'après un clic du visiteur (aucune donnée envoyée avant)
  function consentEmbed(src, title) {
    const provider = /vimeo/.test(src) ? "Vimeo" : "YouTube";
    return `<button type="button" class="embed-consent" data-embed="${esc(src)}" data-title="${esc(title)}">` +
      `<span class="embed-consent__play">${esc(ui("embed_play"))}</span>` +
      `<span class="embed-consent__note">${esc(ui("embed_note").replace("{provider}", provider))}</span></button>`;
  }

  /* ------------------------------------------------------------------
     En-tête et pied de page (communs à toutes les pages)
     ------------------------------------------------------------------ */
  function langSwitch() {
    if (!SITE.showLangSwitch) return "";
    return `<div class="lang" role="group" aria-label="${esc(ui("lang_label"))}">` +
      LANGS.map((l) => `<button type="button" data-lang="${l}" lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join("") +
      `</div>`;
  }

  function renderHeader() {
    const current = page === "project" ? "work" : page;
    const links = [["work", "work.html", "nav_work"], ["about", "about.html", "nav_about"], ["contact", "contact.html", "nav_contact"]];
    $("site-header").innerHTML = `
      <div class="container site-header__inner">
        <a class="brand" href="index.html">${esc(SITE.name)}</a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">${esc(ui("menu"))}</button>
        <nav class="nav" id="site-nav" aria-label="Main">
          <ul class="nav__list">
            ${links.map(([key, href, label]) => `<li><a class="nav__link" href="${href}"${key === current ? ' aria-current="page"' : ""}>${esc(ui(label))}</a></li>`).join("")}
          </ul>
          ${langSwitch()}
        </nav>
      </div>`;
  }

  function socials(cls) {
    return `<ul class="${cls}">` + list(SITE.socials).map((s) =>
      `<li><a class="link-arrow" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ${ICON.arrow}<span class="visually-hidden"> (new tab)</span></a></li>`
    ).join("") + `</ul>`;
  }

  function renderFooter() {
    $("site-footer").innerHTML = `
      <div class="container">
        <div class="site-footer__top">
          <a class="footer-mail" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
          ${socials("socials")}
        </div>
        <div class="site-footer__bottom eyebrow">
          <span>© ${new Date().getFullYear()} ${esc(SITE.name)} — ${esc(ui("rights"))}</span>
          <nav class="site-footer__legal" aria-label="${esc(ui("legal_nav"))}">
            <a class="u-line" href="legal.html">${esc(ui("legal_link"))}</a>
            <a class="u-line" href="terms.html">${esc(ui("terms_link"))}</a>
          </nav>
          <a class="u-line" href="#">${esc(ui("back_top"))} ↑</a>
        </div>
      </div>`;
  }

  /* ------------------------------------------------------------------
     Carte projet (accueil + page Work)
     ------------------------------------------------------------------ */
  function card(p, i, withIndex) {
    const thumb = resolve(p.thumbnail || p.cover, p);
    return `
      <li class="reveal" style="--d:${(i % 3) * 0.08}s" data-cats="${esc(cats(p).map(slugify).join(" "))}">
        <a class="card__link" href="${projectUrl(p)}">
          <div class="card__media frame">${img(thumb, { size: "1200x1500" })}</div>
          <div class="card__meta">
            <h3 class="card__title">${withIndex ? `<span class="card__index eyebrow">${pad(i + 1)}</span>` : ""}<span class="t">${esc(t(p.title))}</span></h3>
            <span class="card__info eyebrow">${esc(cats(p).join(" / "))}<br>${esc(p.year ?? "")}</span>
          </div>
        </a>
      </li>`;
  }

  /* ------------------------------------------------------------------
     ACCUEIL
     ------------------------------------------------------------------ */
  function renderHome() {
    document.title = `${SITE.name} — ${t(SITE.role)}`;
    const words = SITE.name.split(/\s+/);
    const tools = list(SITE.tools);
    // un mot = un bloc qui flotte (profondeur, durée et décalage différents pour chacun)
    const DEPTH = [1, -0.7, 1.3, -1.1, 0.8];
    const word = (w, i) =>
      `<span class="hero__word" style="--depth:${DEPTH[i % DEPTH.length]}">` +
      `<span class="hero__float" style="--dur:${(6 + (i * 1.4) % 3).toFixed(1)}s;--delay:${(-i * 1.9).toFixed(1)}s">` +
      `<span class="hero__in" style="--in:${(i * 0.09).toFixed(2)}s">${esc(w)}</span></span></span>`;
    const featured = LISTED.filter((p) => p.featured).slice(0, SITE.featuredLimit || 6);
    const role = esc(t(SITE.role)).replace(" — ", ' <span class="accent">—</span> ');
    const reel = SITE.showreel || {};
    const reelPage = reel.page && PROJECTS.find((p) => p.slug === reel.page);
    return `
      <section class="hero container${SITE.heroImage ? "" : " hero--centered"}" aria-labelledby="hero-title">
        <div class="hero__meta eyebrow"><span class="eyebrow--dot">${esc(ui("portfolio"))} — ${new Date().getFullYear()}</span><span>${esc(SITE.location)}</span></div>
        <div class="hero__stage">
          <div class="hero__text">
            <h1 class="hero__name" id="hero-title" aria-label="${esc(SITE.name)}">${words.map(word).join("")}</h1>
            ${tools.length ? `
            <ul class="hero__tools" aria-label="${esc(ui("software"))}">
              ${tools.map((tool, i) => `
              <li class="hero__tool" style="--in:${(0.35 + i * 0.06).toFixed(2)}s;--dur:${(4.5 + (i * 0.7) % 2).toFixed(1)}s;--delay:${(-i * 0.8).toFixed(1)}s">
                <img src="${esc(tool.icon)}" alt="${esc(tool.name)}" title="${esc(tool.name)}" width="40" height="40" onerror="this.parentElement.remove()">
              </li>`).join("")}
            </ul>` : ""}
          </div>
          ${SITE.heroImage ? `
          <div class="hero__visual" aria-hidden="true">
            <div class="hero__visual-float"><img src="${esc(SITE.heroImage)}" alt="" fetchpriority="high" onerror="this.closest('.hero__visual').remove()"></div>
          </div>` : ""}
        </div>
        <div class="hero__bottom">
          <p class="hero__role">${role}</p>
          <p class="lead">${esc(t(SITE.tagline))}</p>
        </div>
      </section>

      ${reel.type && reel.type !== "none" ? `
      <section class="reel container" aria-label="${esc(t(reel.label) || "Showreel")}">
        <div class="reel__head eyebrow"><span class="eyebrow--dot">${esc(t(reel.label))}</span><span>${reel.type === "model" ? esc(ui("drag_rotate")) : ""}</span></div>
        <div class="frame reveal" id="reel-frame"></div>
        <div class="reel__bar">
          <div class="reel__controls" id="reel-controls"></div>
          ${reelPage ? `<a class="btn btn--accent" href="${projectUrl(reelPage)}">${esc(ui("reel_page"))} ${ICON.arrow}</a>` : ""}
        </div>
      </section>` : ""}

      ${featured.length ? `
      <section class="section container" aria-labelledby="selected-title">
        <div class="section-head reveal">
          <h2 class="display" id="selected-title">${esc(ui("selected_work"))}</h2>
          <a class="eyebrow u-line" href="work.html">${esc(ui("all_projects"))} (${LISTED.length})</a>
        </div>
        <ul class="selected">${featured.map((p, i) => card(p, i, true)).join("")}</ul>
        <div class="home-more reveal"><a class="btn" href="work.html">${esc(ui("all_projects"))} ${ICON.arrow}</a></div>
      </section>` : ""}`;
  }

  // Showreel : vidéo en boucle, YouTube/Vimeo, ou modèle 3D — placeholder si absent
  // <model-viewer> et son décodeur Draco sont hébergés sur le site (js/vendor) : aucun appel à un serveur tiers (RGPD)
  const MODEL_VIEWER_URL = "js/vendor/model-viewer.min.js";
  const localUrl = (p) => new URL(p, location.href).href;
  let modelViewerReady;

  function mountShowreel() {
    const frame = $("reel-frame");
    if (!frame) return;
    const r = SITE.showreel;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controls = $("reel-controls");
    const fail = (label) => { frame.innerHTML = placeholder("1920x1080", label); controls?.replaceChildren(); };

    if (r.type === "model") {
      if (!r.model) return fail(ui("model_soon"));
      modelViewerReady = modelViewerReady || new Promise((ok, ko) => {
        if (customElements.get("model-viewer")) return ok();
        // lu par model-viewer au démarrage : remplace ses adresses par défaut (serveurs Google / jsDelivr)
        window.ModelViewerElement = {
          dracoDecoderLocation: localUrl("js/vendor/draco/"),
          ktx2TranscoderLocation: localUrl("js/vendor/basis/"),        // non fourni : évite la compression KTX2
          lottieLoaderLocation: localUrl("js/vendor/LottieLoader.js"), // non fourni : pas de textures Lottie
        };
        const s = document.createElement("script");
        s.type = "module"; s.src = MODEL_VIEWER_URL; s.onload = ok; s.onerror = ko;
        document.head.appendChild(s);
      });
      modelViewerReady.then(() => {
        const mv = document.createElement("model-viewer");
        mv.setAttribute("src", r.model);
        mv.setAttribute("alt", t(r.label) || "3D model");
        mv.setAttribute("camera-controls", "");
        mv.setAttribute("touch-action", "pan-y");
        mv.setAttribute("shadow-intensity", "1");
        mv.setAttribute("interaction-prompt", "none");
        if (!reduce) mv.setAttribute("auto-rotate", "");
        if (r.poster) mv.setAttribute("poster", r.poster);
        mv.addEventListener("error", () => fail(ui("model_soon")));
        frame.replaceChildren(mv);
      }, () => fail(ui("model_soon")));
      return;
    }

    if (!r.video) return fail(ui("showreel_soon"));
    const embed = embedUrl(r.video, true);
    if (embed) {
      frame.innerHTML = consentEmbed(embed, t(r.label));
      return;
    }
    const v = document.createElement("video");
    Object.assign(v, { muted: true, loop: true, playsInline: true, autoplay: !reduce, preload: "metadata" });
    if (r.poster) v.poster = r.poster;
    v.setAttribute("aria-label", t(r.label));
    v.addEventListener("error", () => fail(ui("showreel_soon")));
    // Boutons lecture/pause et son, sous la vidéo (elle démarre en muet : les navigateurs l'exigent)
    const btn = document.createElement("button");
    btn.type = "button"; btn.className = "reel__toggle";
    const sound = document.createElement("button");
    sound.type = "button"; sound.className = "reel__toggle";
    const sync = () => {
      btn.textContent = v.paused ? ui("play") : ui("pause");
      sound.textContent = v.muted ? ui("sound_on") : ui("sound_off");
      sound.setAttribute("aria-pressed", String(!v.muted));
    };
    btn.addEventListener("click", () => (v.paused ? v.play() : v.pause()));
    sound.addEventListener("click", () => {
      v.muted = !v.muted;
      if (!v.muted && v.paused) v.play();
    });
    v.addEventListener("play", sync); v.addEventListener("pause", sync); v.addEventListener("volumechange", sync);
    v.src = r.video;
    frame.replaceChildren(v);
    controls?.replaceChildren(sound, btn);
    sync();
  }

  /* ------------------------------------------------------------------
     WORK — grille + filtres
     ------------------------------------------------------------------ */
  function categoryList() {
    const found = [...new Set(LISTED.flatMap(cats))];
    const order = list(SITE.categoriesOrder);
    return [...order.filter((c) => found.includes(c)), ...found.filter((c) => !order.includes(c))];
  }

  function renderWork() {
    document.title = `${ui("work_title")} — ${SITE.name}`;
    const count = (c) => LISTED.filter((p) => cats(p).includes(c)).length;
    return `
      <section class="page-head container">
        <h1 class="page-head__title display">${esc(ui("work_title"))}<sup>(${pad(LISTED.length)})</sup></h1>
      </section>
      <section class="container">
        <div class="filters" role="group" aria-label="${esc(ui("filter_label"))}">
          <button class="filter" type="button" data-filter="all" aria-pressed="true">${esc(ui("filter_all"))}<sup>${LISTED.length}</sup></button>
          ${categoryList().map((c) => `<button class="filter" type="button" data-filter="${slugify(c)}" aria-pressed="false">${esc(c)}<sup>${count(c)}</sup></button>`).join("")}
        </div>
        <h2 class="visually-hidden">${esc(ui("all_projects"))}</h2>
        <ul class="grid" id="work-grid">${LISTED.map((p, i) => card(p, i, false)).join("")}</ul>
      </section>`;
  }

  function applyFilter(f, fromUser) {
    const grid = $("work-grid");
    if (!grid) return;
    if (!$$(".filter").some((b) => b.dataset.filter === f)) f = "all";
    $$(".filter").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === f)));
    $$("li", grid).forEach((li) => {
      const show = f === "all" || li.dataset.cats.split(" ").includes(f);
      li.hidden = !show;
      li.classList.remove("is-filtered-in");
      if (show && fromUser) { void li.offsetWidth; li.classList.add("is-filtered-in", "is-visible"); }
    });
    if (fromUser) history.replaceState(null, "", f === "all" ? location.pathname : `#${f}`);
  }

  /* ------------------------------------------------------------------
     PAGE PROJET (un seul modèle pour tous les projets)
     ------------------------------------------------------------------ */
  const normImg = (g) => (typeof g === "string" ? { src: g } : g || {});

  function figure(g, p, fallbackAlt) {
    const src = resolve(g.src, p);
    const alt = t(g.alt) || t(g.caption) || fallbackAlt;
    const size = g.size || "1920x1080";
    const inner = src
      ? `<button type="button" class="zoom" aria-label="${esc(ui("open_image"))} — ${esc(alt)}">${img(src, { size, alt })}</button>`
      : placeholder(size);
    return `<figure class="reveal${g.half ? " half" : ""}">${inner}${g.caption ? `<figcaption class="eyebrow">${esc(t(g.caption))}</figcaption>` : ""}</figure>`;
  }

  function videoFigure(v, p) {
    const cap = t(v.caption);
    const embed = embedUrl(v.url);
    const inner = embed
      ? consentEmbed(embed, cap || t(p.title))
      : `<video controls playsinline preload="metadata" src="${esc(resolve(v.url, p))}"${v.poster ? ` poster="${esc(resolve(v.poster, p))}"` : ""} data-size="1920x1080" data-label="${esc(ui("placeholder_video"))}" onerror="Portfolio.imgFail(this)"></video>`;
    return `<figure class="reveal"><div class="video frame">${inner}</div>${cap ? `<figcaption class="eyebrow">${esc(cap)}</figcaption>` : ""}</figure>`;
  }

  // Slider avant / après : « après » à gauche, « avant » à droite. On fait glisser la ligne.
  function compareSlider(c, p) {
    const { w, h } = parseSize(c.size);
    return `
      <figure class="compare reveal" style="aspect-ratio:${w}/${h}">
        ${img(resolve(c.after, p), { size: c.size, alt: `${t(p.title)} — ${ui("compare_after")}` })}
        <div class="compare__before">${img(resolve(c.before, p), { size: c.size, alt: `${t(p.title)} — ${ui("compare_before")}` })}</div>
        <span class="compare__tag compare__tag--after eyebrow" aria-hidden="true">${esc(ui("compare_after"))}</span>
        <span class="compare__tag compare__tag--before eyebrow" aria-hidden="true">${esc(ui("compare_before"))}</span>
        <span class="compare__line" aria-hidden="true"></span>
        <input class="compare__range" type="range" min="0" max="100" step="0.5" value="50" aria-label="${esc(ui("compare_label"))}">
      </figure>`;
  }

  function block(key, inner) {
    return `<section class="block"><div class="block__head reveal"><h2>${esc(ui(key))}</h2></div>${inner}</section>`;
  }

  function renderProject() {
    const slug = new URLSearchParams(location.search).get("p");
    const i = PROJECTS.findIndex((p) => p.slug === slug);
    if (i < 0) {
      document.title = `${ui("not_found")} — ${SITE.name}`;
      return `<section class="container notice"><h1 class="page-head__title display">404</h1><p>${esc(ui("not_found"))}</p><a class="btn" href="work.html">${esc(ui("back_to_work"))}</a></section>`;
    }
    const p = PROJECTS[i];
    const title = t(p.title);
    document.title = `${title} — ${SITE.name}`;

    const gallery = list(p.gallery).map(normImg);
    const videos = list(p.videos).map((v) => (typeof v === "string" ? { url: v } : v)).filter((v) => v && v.url);
    const breakdown = list(p.breakdown).filter((s) => s && (s.title || s.text || list(s.images).length));
    const meta = [["year", p.year], ["role", t(p.role)], ["context", t(p.context)], ["software", list(p.software).join(", ")]].filter(([, v]) => v);
    // précédent / suivant parmi les projets listés (pas de navigation sur une page non listée)
    const li = LISTED.indexOf(p);
    const prev = LISTED[(li - 1 + LISTED.length) % LISTED.length];
    const next = LISTED[(li + 1) % LISTED.length];

    return `
      <article>
        <div class="cover frame">${img(resolve(p.cover, p), { size: "2560x1440", alt: `${title} — cover`, eager: true })}</div>

        <header class="container project-head">
          <p class="eyebrow eyebrow--dot">${esc(cats(p).join(" / "))}</p>
          <h1 class="project-head__title display">${esc(title)}</h1>
        </header>

        <div class="container">
          ${meta.length ? `<dl class="meta">${meta.map(([k, v]) => `<div><dt class="eyebrow">${esc(ui(k))}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>` : ""}

          ${t(p.description) ? `
          <div class="project-body">
            <p class="eyebrow">${esc(ui("overview"))}</p>
            <div class="prose reveal">${paragraphs(t(p.description))}</div>
          </div>` : `<div class="project-body"></div>`}

          ${(() => {
            const g = gallery.length ? block("gallery", `<div class="gallery">${gallery.map((img, n) => figure(img, p, `${title} — ${n + 1}`)).join("")}</div>`) : "";
            const v = videos.length ? block("videos", `<div class="videos">${videos.map((vid) => videoFigure(vid, p)).join("")}</div>`) : "";
            return p.videosFirst ? v + g : g + v;   // videosFirst: true = vidéo avant la galerie
          })()}

          ${breakdown.length ? block("breakdown", breakdown.map((s, n) => `
            <div class="breakdown__step reveal">
              <div>
                <span class="eyebrow">${pad(n + 1)}</span>
                <h3>${esc(t(s.title))}</h3>
                ${s.text ? `<p>${esc(t(s.text))}</p>` : ""}
              </div>
              <div>
                ${s.compare ? compareSlider(s.compare, p) : ""}
                ${list(s.images).length ? `<div class="gallery">${list(s.images).map(normImg).map((g, m) => figure(g, p, `${title} — ${t(s.title)} ${m + 1}`)).join("")}</div>` : ""}
              </div>
            </div>`).join("")) : ""}
        </div>

        ${li >= 0 && LISTED.length > 1 ? `
        <nav class="container" aria-label="${esc(ui("prev"))} / ${esc(ui("next"))}">
          <div class="pager${prev === next ? " pager--single" : ""}">
            ${prev !== next ? `<a href="${projectUrl(prev)}" rel="prev"><span class="eyebrow">← ${esc(ui("prev"))}</span><span class="pager__title">${esc(t(prev.title))}</span></a>` : ""}
            <a href="${projectUrl(next)}" rel="next"><span class="eyebrow">${esc(ui("next"))} →</span><span class="pager__title">${esc(t(next.title))}</span></a>
          </div>
        </nav>` : ""}
      </article>`;
  }

  /* ------------------------------------------------------------------
     ABOUT
     ------------------------------------------------------------------ */
  function renderAbout() {
    document.title = `${ui("about_title")} — ${SITE.name}`;
    const a = SITE.about || {};
    const [lead = "", ...rest] = t(a.bio).split(/\n\s*\n/);
    const edu = list(a.education);
    const skills = list(t(a.skills));
    const software = list(a.software);
    return `
      <section class="page-head container"><h1 class="page-head__title display">${esc(ui("about_title"))}</h1></section>
      <section class="container about">
        <div class="about__portrait reveal">
          <div class="frame">${img(a.portrait, { size: "1200x1500", alt: `Portrait — ${SITE.name}`, label: ui("placeholder_portrait") })}</div>
        </div>
        <div>
          <p class="about__lead reveal">${esc(lead)}</p>
          ${rest.length ? `<div class="prose reveal">${paragraphs(rest.join("\n\n"))}</div>` : ""}
          ${a.cv ? `<p class="reveal" style="margin-top:2.5rem"><a class="btn btn--accent" href="${esc(a.cv)}" download>${esc(ui("download_cv"))} ${ICON.down}</a></p>` : ""}

          ${edu.length ? `<div class="about__section reveal"><h2 class="eyebrow">${esc(ui("education"))}</h2>
            <ul class="edu list-lines">${edu.map((e) => `<li><span>${esc(e.years)}</span><div><strong>${esc(t(e.school))}</strong><span>${esc(t(e.title))}</span></div></li>`).join("")}</ul></div>` : ""}

          ${skills.length ? `<div class="about__section reveal"><h2 class="eyebrow">${esc(ui("skills"))}</h2>
            <ul class="list-lines">${skills.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>` : ""}

          ${software.length ? `<div class="about__section reveal"><h2 class="eyebrow">${esc(ui("software"))}</h2>
            <ul class="tags">${software.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>` : ""}

          ${t(a.languages) ? `<div class="about__section reveal"><h2 class="eyebrow">${esc(ui("languages"))}</h2><p>${esc(t(a.languages))}</p></div>` : ""}
        </div>
      </section>`;
  }

  /* ------------------------------------------------------------------
     CONTACT
     ------------------------------------------------------------------ */
  function renderContact() {
    document.title = `${ui("nav_contact")} — ${SITE.name}`;
    const c = SITE.contact || {};
    const form = c.formspreeId ? `
      <div class="about__section">
        <h2 class="eyebrow">${esc(ui("form_title"))}</h2>
        <form class="form" id="contact-form" action="https://formspree.io/f/${esc(c.formspreeId)}" method="POST">
          <div class="field"><label class="eyebrow" for="f-name">${esc(ui("form_name"))}</label><input id="f-name" name="name" autocomplete="name" required></div>
          <div class="field"><label class="eyebrow" for="f-email">${esc(ui("form_email"))}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label class="eyebrow" for="f-msg">${esc(ui("form_message"))}</label><textarea id="f-msg" name="message" required></textarea></div>
          <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" class="visually-hidden" aria-hidden="true">
          <p class="form__privacy">${esc(ui("form_privacy"))} <a class="u-line" href="legal.html">${esc(ui("legal_link"))}</a></p>
          <div class="contact__row"><button class="btn btn--accent" type="submit">${esc(ui("form_send"))} ${ICON.arrow}</button><p class="form__status" role="status"></p></div>
        </form>
      </div>` : "";
    return `
      <section class="page-head container"><h1 class="page-head__title display">${esc(ui("contact_title"))}</h1></section>
      <section class="container contact">
        <div class="contact__main reveal">
          <p class="lead">${esc(t(c.intro))}</p>
          <p class="eyebrow" style="margin-top:3rem">${esc(ui("email"))}</p>
          <a class="contact__mail" href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
          <div class="contact__row">
            <button class="btn" type="button" data-copy="${esc(SITE.email)}">${esc(ui("copy"))}</button>
            <span class="eyebrow" id="copy-status" role="status"></span>
          </div>
          ${form}
        </div>
        <div class="reveal" style="--d:.1s">
          <h2 class="eyebrow" style="margin-bottom:1.25rem">${esc(ui("elsewhere"))}</h2>
          ${socials("contact__socials")}
        </div>
      </section>`;
  }

  /* ------------------------------------------------------------------
     PAGES LÉGALES (textes dans data/legal.js)
     ------------------------------------------------------------------ */
  // échappe le texte puis rend cliquables les emails et les liens https://
  const linkify = (s) => esc(s)
    .replace(/https:\/\/[^\s<]+[^\s<.,;:)]/g, (u) => `<a class="u-line" href="${u}" target="_blank" rel="noopener">${u.replace(/^https:\/\/(www\.)?/, "")}</a>`)
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+[\w]/g, (m) => `<a class="u-line" href="mailto:${m}">${m}</a>`);

  function renderLegal() {
    const doc = window.LEGAL && window.LEGAL[page];
    if (!doc) return renderNotFound();
    document.title = `${t(doc.title)} — ${SITE.name}`;
    return `
      <section class="page-head container">
        <h1 class="page-head__title page-head__title--small display">${esc(t(doc.title))}</h1>
        <p class="eyebrow" style="margin-top:1.5rem">${esc(ui("updated"))} — ${esc(t(doc.updated))}</p>
      </section>
      <section class="container legal">
        ${list(doc.sections).map((s, n) => `
          <div class="legal__section reveal">
            <h2 class="legal__title"><span class="eyebrow">${pad(n + 1)}</span>${esc(t(s.title))}</h2>
            <div class="prose">${list(t(s.body)).map((p) => `<p>${linkify(p)}</p>`).join("")}</div>
          </div>`).join("")}
      </section>`;
  }

  function renderNotFound() {
    document.title = `404 — ${SITE.name}`;
    return `<section class="container notice"><h1 class="page-head__title display">404</h1><p>${esc(ui("page_404"))}</p><a class="btn" href="index.html">${esc(ui("home"))}</a></section>`;
  }

  /* ------------------------------------------------------------------
     Apparition au scroll
     ------------------------------------------------------------------ */
  let observer;
  function observeReveal() {
    const items = $$(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) return items.forEach((el) => el.classList.add("is-visible"));
    observer = observer || new IntersectionObserver((entries) => {
      // visible à l'écran, ou déjà dépassé (saut rapide en bas de page)
      entries.forEach((e) => {
        if (e.isIntersecting || e.boundingClientRect.bottom < 0) { e.target.classList.add("is-visible"); observer.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.06 });
    items.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------
     Rendu global
     ------------------------------------------------------------------ */
  const renderers = { home: renderHome, work: renderWork, project: renderProject, about: renderAbout, contact: renderContact, legal: renderLegal, terms: renderLegal };

  function renderAll() {
    root.lang = lang;
    document.body.classList.remove("menu-open");
    renderHeader();
    $("page").innerHTML = (renderers[page] || renderNotFound)();
    renderFooter();
    const skip = document.querySelector(".skip-link");
    if (skip) skip.textContent = ui("skip");
    if (page === "home") mountShowreel();
    if (page === "work") applyFilter(decodeURIComponent(location.hash.slice(1)) || "all", false);
    observeReveal();
  }

  /* ------------------------------------------------------------------
     Interactions (une seule fois, par délégation)
     ------------------------------------------------------------------ */
  function toggleMenu(force) {
    const nav = $("site-nav"), btn = document.querySelector(".menu-btn");
    if (!nav || !btn) return;
    const open = force ?? !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? ui("close") : ui("menu");
    document.body.classList.toggle("menu-open", open);
  }

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".menu-btn")) return toggleMenu();

    const langBtn = target.closest("[data-lang]");
    if (langBtn && langBtn.dataset.lang !== lang) {
      lang = langBtn.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (err) { /* ignore */ }
      renderAll();
      document.querySelector(`[data-lang="${lang}"]`)?.focus();
      return;
    }

    const filter = target.closest(".filter");
    if (filter) return applyFilter(filter.dataset.filter, true);

    const zoom = target.closest(".zoom");
    if (zoom && window.Lightbox) {
      const all = $$(".zoom");
      const items = all.map((b) => {
        const im = b.querySelector("img");
        return { src: im.currentSrc || im.src, alt: im.alt, caption: b.parentElement.querySelector("figcaption")?.textContent || "" };
      });
      return window.Lightbox.open(items, all.indexOf(zoom), { close: ui("close"), prev: ui("prev"), next: ui("next") });
    }

    const consent = target.closest(".embed-consent");
    if (consent) {
      const iframe = document.createElement("iframe");
      iframe.src = consent.dataset.embed + (consent.dataset.embed.includes("autoplay=1") ? "" : "&autoplay=1");
      iframe.title = consent.dataset.title;
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.allowFullscreen = true;
      consent.replaceWith(iframe);
      return;
    }

    const copy = target.closest("[data-copy]");
    if (copy) {
      navigator.clipboard?.writeText(copy.dataset.copy).then(() => {
        const s = $("copy-status");
        if (s) { s.textContent = ui("copied"); setTimeout(() => (s.textContent = ""), 2000); }
      }).catch(() => {});
    }
  });

  // Slider avant / après
  document.addEventListener("input", (e) => {
    const range = e.target.closest(".compare__range");
    if (range) range.parentElement.style.setProperty("--pos", `${range.value}%`);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
      toggleMenu(false);
      document.querySelector(".menu-btn")?.focus();
    }
  });

  // Formulaire Formspree (envoi sans quitter la page)
  document.addEventListener("submit", async (e) => {
    const form = e.target.closest("#contact-form");
    if (!form) return;
    e.preventDefault();
    const status = form.querySelector(".form__status");
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    status.textContent = ui("form_sending");
    try {
      const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      status.textContent = ui("form_ok");
    } catch (err) {
      status.textContent = ui("form_error");
    }
    btn.disabled = false;
  });

  // Accueil : le nom et l'image suivent très légèrement la souris
  if (matchMedia("(pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let frame = 0;
    addEventListener("pointermove", (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const hero = document.querySelector(".hero");
        if (!hero) return;
        hero.style.setProperty("--mx", (e.clientX / innerWidth - 0.5).toFixed(3));
        hero.style.setProperty("--my", (e.clientY / innerHeight - 0.5).toFixed(3));
      });
    }, { passive: true });
  }

  // En-tête : se cache en descendant, réapparaît en remontant
  let lastY = 0;
  addEventListener("scroll", () => {
    const header = $("site-header");
    const y = scrollY;
    header.classList.toggle("is-scrolled", y > 8);
    header.classList.toggle("is-hidden", y > lastY && y > 240 && !document.body.classList.contains("menu-open"));
    lastY = y;
  }, { passive: true });

  // Vérification utile : deux projets avec le même slug
  const seen = new Set();
  PROJECTS.forEach((p) => {
    if (!p.slug) console.warn("[portfolio] Un projet n'a pas de slug :", p.title);
    else if (seen.has(p.slug)) console.warn(`[portfolio] Slug en double : "${p.slug}" — chaque projet doit avoir un slug unique.`);
    seen.add(p.slug);
  });

  window.Portfolio = { imgFail, render: renderAll };
  renderAll();
})();
