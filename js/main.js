/* ============================================================
   Lógica del sitio: idioma, tema, tarjetas y modal.
   No hace falta tocar este archivo para agregar proyectos.
   ============================================================ */

(function () {
  "use strict";

  var LANG_KEY = "portfolio-lang";
  var THEME_KEY = "portfolio-theme";
  var CATEGORY_ORDER = ["web", "game", "tools"];

  var state = {
    lang: "es",
    filter: "all"
  };

  var grid = document.getElementById("project-grid");
  var filtersBox = document.getElementById("filters");
  var emptyState = document.getElementById("empty-state");
  var modal = document.getElementById("project-modal");
  var modalBody = document.getElementById("modal-body");
  var modalClose = document.getElementById("modal-close");

  /* ---------- utilidades ---------- */

  function t(key) {
    var dict = window.I18N[state.lang] || {};
    return dict[key] !== undefined ? dict[key] : key;
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /* ---------- idioma ---------- */

  function detectLang() {
    var saved = localStorage.getItem(LANG_KEY);
    if (saved === "es" || saved === "en") return saved;
    return (navigator.language || "es").toLowerCase().indexOf("en") === 0 ? "en" : "es";
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      node.textContent = t(node.getAttribute("data-i18n"));
    });

    document.getElementById("theme-toggle").setAttribute("aria-label", t("aria.theme"));
    modalClose.setAttribute("aria-label", t("modal.close"));

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });

    renderFilters();
    renderProjects();

    // Si el modal está abierto, redibujarlo en el nuevo idioma.
    if (modal.open && modal.dataset.projectId) {
      openProject(modal.dataset.projectId);
    }
  }

  /* ---------- tema ---------- */

  function detectTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  /* ---------- filtros ---------- */

  function availableCategories() {
    var present = {};
    window.PROJECTS.forEach(function (p) { present[p.category] = true; });
    return CATEGORY_ORDER.filter(function (c) { return present[c]; });
  }

  function renderFilters() {
    filtersBox.innerHTML = "";
    var cats = ["all"].concat(availableCategories());

    // Con una sola categoría los filtros no aportan nada.
    if (cats.length <= 2) {
      filtersBox.hidden = true;
      return;
    }
    filtersBox.hidden = false;

    cats.forEach(function (cat) {
      var btn = el("button", "filter-btn", t("filter." + cat));
      btn.type = "button";
      btn.dataset.filter = cat;
      btn.setAttribute("aria-pressed", String(state.filter === cat));
      if (state.filter === cat) btn.classList.add("is-active");
      btn.addEventListener("click", function () {
        state.filter = cat;
        renderFilters();
        renderProjects();
      });
      filtersBox.appendChild(btn);
    });
  }

  /* ---------- tarjetas ---------- */

  function visibleProjects() {
    return window.PROJECTS
      .filter(function (p) { return state.filter === "all" || p.category === state.filter; })
      .slice()
      .sort(function (a, b) {
        if (!!b.featured !== !!a.featured) return b.featured ? 1 : -1;
        return (b.year || 0) - (a.year || 0);
      });
  }

  function buildCard(project) {
    var copy = project[state.lang] || project.es;

    var card = el("button", "card");
    card.type = "button";
    card.setAttribute("aria-label", copy.title + " — " + t("aria.openProject"));

    if (project.cover) {
      var img = el("img", "card-cover");
      img.src = project.cover;
      img.alt = "";
      img.loading = "lazy";
      card.appendChild(img);
    }

    var body = el("div", "card-body");

    var meta = el("div", "card-meta");
    meta.appendChild(el("span", "status status-" + project.status, t("status." + project.status)));
    if (project.year) meta.appendChild(el("span", null, String(project.year)));
    if (project.badge) meta.appendChild(el("span", "badge", t("badge." + project.badge)));
    body.appendChild(meta);

    body.appendChild(el("h3", "card-title", copy.title));
    body.appendChild(el("p", "card-tagline", copy.tagline));

    if (project.tags && project.tags.length) {
      var chips = el("ul", "chips");
      project.tags.slice(0, 4).forEach(function (tag) {
        chips.appendChild(el("li", "chip", tag));
      });
      body.appendChild(chips);
    }

    card.appendChild(body);
    card.addEventListener("click", function () { openProject(project.id); });
    return card;
  }

  function renderProjects() {
    var list = visibleProjects();
    grid.innerHTML = "";
    list.forEach(function (p) { grid.appendChild(buildCard(p)); });
    emptyState.hidden = list.length > 0;
  }

  /* ---------- modal de detalle ---------- */

  function openProject(id) {
    var project = window.PROJECTS.find(function (p) { return p.id === id; });
    if (!project) return;

    var copy = project[state.lang] || project.es;
    modal.dataset.projectId = id;
    modalBody.innerHTML = "";

    if (project.cover) {
      var img = el("img", "modal-cover");
      img.src = project.cover;
      img.alt = "";
      modalBody.appendChild(img);
    }

    var content = el("div", "modal-content");

    var meta = el("div", "card-meta");
    meta.appendChild(el("span", "status status-" + project.status, t("status." + project.status)));
    if (project.year) meta.appendChild(el("span", null, String(project.year)));
    if (project.badge) meta.appendChild(el("span", "badge", t("badge." + project.badge)));
    content.appendChild(meta);

    var title = el("h3", null, copy.title);
    title.id = "modal-title";
    content.appendChild(title);
    content.appendChild(el("p", "modal-tagline", copy.tagline));

    if (copy.description) {
      content.appendChild(el("h4", null, t("modal.about")));
      content.appendChild(el("p", null, copy.description));
    }

    if (copy.highlights && copy.highlights.length) {
      content.appendChild(el("h4", null, t("modal.highlights")));
      var ul = el("ul", "highlights");
      copy.highlights.forEach(function (item) { ul.appendChild(el("li", null, item)); });
      content.appendChild(ul);
    }

    if (project.tags && project.tags.length) {
      content.appendChild(el("h4", null, t("modal.tech")));
      var chips = el("ul", "chips");
      project.tags.forEach(function (tag) { chips.appendChild(el("li", "chip", tag)); });
      content.appendChild(chips);
    }

    var links = project.links || {};
    var linkKeys = ["demo", "prototipo", "caso", "repo", "docs"].filter(function (k) { return links[k]; });
    if (linkKeys.length) {
      var box = el("div", "modal-links");
      linkKeys.forEach(function (key, i) {
        var a = el("a", "btn " + (i === 0 ? "btn-primary" : "btn-ghost"), t("link." + key));
        a.href = links[key];
        // El caso de estudio es una página del propio sitio: se abre aquí
        // mismo, no en una pestaña nueva.
        if (key !== "caso") {
          a.target = "_blank";
          a.rel = "noopener";
        }
        box.appendChild(a);
      });
      content.appendChild(box);
    }

    modalBody.appendChild(content);
    if (!modal.open) modal.showModal();
    modalBody.scrollTop = 0;
  }

  /* ---------- copiar el correo ---------- */

  function prepararCopiarCorreo() {
    var boton = document.getElementById("copiar-correo");
    if (!boton) return;

    boton.addEventListener("click", function (e) {
      // El botón vive dentro del enlace mailto: sin esto, copiar
      // dispararía además el cliente de correo.
      e.preventDefault();
      e.stopPropagation();

      var correo = boton.dataset.correo;

      function avisar() {
        boton.textContent = t("contact.copiado");
        boton.classList.add("copiado");
        setTimeout(function () {
          boton.textContent = t("contact.copiar");
          boton.classList.remove("copiado");
        }, 1800);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(correo).then(avisar, respaldoCopiar);
      } else {
        respaldoCopiar();
      }

      // Navegadores viejos, o páginas sin contexto seguro.
      function respaldoCopiar() {
        var campo = document.createElement("textarea");
        campo.value = correo;
        campo.setAttribute("readonly", "");
        campo.style.position = "fixed";
        campo.style.opacity = "0";
        document.body.appendChild(campo);
        campo.select();
        try { document.execCommand("copy"); avisar(); } catch (err) { /* nada que hacer */ }
        document.body.removeChild(campo);
      }
    });
  }

  /* ---------- sección "Sobre mí" ---------- */

  function renderStack() {
    var list = document.getElementById("stack-list");
    if (!list || !window.STACK) return;
    list.innerHTML = "";
    window.STACK.forEach(function (item) { list.appendChild(el("li", "chip", item)); });
  }

  /* ---------- arranque ---------- */

  function init() {
    setTheme(detectTheme());
    renderStack();
    prepararCopiarCorreo();
    setLang(detectLang());

    document.getElementById("year").textContent = new Date().getFullYear();

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () { setLang(btn.dataset.lang); });
    });

    document.getElementById("theme-toggle").addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });

    modalClose.addEventListener("click", function () { modal.close(); });

    // Cerrar al hacer clic fuera de la tarjeta.
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.close();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
