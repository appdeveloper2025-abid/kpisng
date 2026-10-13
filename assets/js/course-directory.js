(() => {
  const currentScript = document.currentScript;
  if (!currentScript) return;
  const siteRoot = new URL("../../", currentScript.src);
  const courseRoot = new URL("courses/dit/", siteRoot);
  const ditIndexUrl = new URL("index.html", courseRoot).href;
  const daeIndexUrl = new URL("courses/dae/index.html", siteRoot).href;
  const vocationalIndexUrl = new URL("courses/technical-vocational/index.html", siteRoot).href;
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = new URL("../css/course-directory.css", currentScript.src).href;
  stylesheet.addEventListener("load", syncStickyOffsets, { once: true });
  document.head.append(stylesheet);
  const subjects = [
    { name: "Introduction to ICT", slug: "ict", part: "Part I", description: "Core information and communication technology concepts." },
    { name: "MS Office", slug: "ms-office", part: "Part I", description: "Practical productivity skills with office applications." },
    { name: "Computer Networks", slug: "computer-networks", part: "Part I", description: "Network concepts, devices, connections, and troubleshooting." },
    { name: "Operating Systems", slug: "operating-systems", part: "Part I", description: "Operating system foundations and practical computer management." },
    { name: "Introduction to Programming", slug: "programming", part: "Part I", description: "Programming logic, problem solving, and hands-on coding." },
    { name: "Database Systems", slug: "database-systems", part: "Part II", description: "Database concepts, data modelling, and practical queries." },
    { name: "Video Editing", slug: "video-editing", part: "Part II", description: "Plan, edit, and export clear video content." },
    { name: "Web Development Essentials", slug: "web-development", part: "Part II", description: "Build and publish the foundations of a responsive website." },
    { name: "Graphics Design", slug: "graphics-design", part: "Part II", description: "Learn visual communication and create digital design work." },
    { name: "Capstone Project", slug: "capstone-project", part: "Part II", description: "Plan and document an integrated, supervised practical project." }
  ];
  const localLessons = [
    "Introduction to Local E-Commerce",
    "Product Hunting for Local E-Commerce",
    "Sourcing Products Locally and Internationally",
    "Creating an Online Store",
    "Shipment and COD Accounts",
    "Advertising Through Different Platforms",
    "Ad Creation and Promotional Strategies",
    "Customer Dealing and Experience"
  ];
  const aiModules = [
    "Foundation & E-Commerce Market Intelligence",
    "AI Fundamentals for Business & Generative AI Applications",
    "AI-Powered Product Research & Opportunity Validation",
    "AI Content Creation for E-Commerce",
    "AI Product Photography, Visual Content & Creative Asset Development",
    "Shopify Store Development & E-Commerce Store Setup",
    "WooCommerce & WordPress E-Commerce Development",
    "AI-Powered SEO & Search Optimization",
    "AI-Powered Digital Marketing & Advertising",
    "Social Commerce, Influencer Marketing & Marketplace Selling",
    "Customer Support Automation, WhatsApp Commerce & Email Marketing",
    "Data Analytics, Business Intelligence, Automation & Business Launch"
  ];
  const catalog = [
    { title: "KPI Learning Platform", detail: "Learning platform home", url: siteRoot.href, terms: "home main platform" },
    { title: "Local E-Commerce Curriculum", detail: "Eight practical learning steps", url: new URL("curriculum.html", siteRoot).href, terms: "ecommerce local curriculum" },
    { title: "AI-Powered E-Commerce Course", detail: "12 modules and 60 practical sessions", url: new URL("ai-learning/index.html", siteRoot).href, terms: "ai artificial intelligence ecommerce" },
    { title: "Diploma in Information Technology (DIT)", detail: "Explore all ten DIT subjects", url: ditIndexUrl, terms: "dit diploma information technology" },
    { title: "DAE Subjects", detail: "Diploma of Associate Engineer course information", url: daeIndexUrl, terms: "dae diploma associate engineer subjects" },
    { title: "Technical & Vocational Training", detail: "Explore institute programs and learning paths", url: vocationalIndexUrl, terms: "technical vocational training courses" },
    ...localLessons.map((title, index) => ({
      title,
      detail: `Local E-Commerce · Step ${String(index + 1).padStart(2, "0")}`,
      url: new URL(`lesson-${String(index + 1).padStart(2, "0")}.html`, siteRoot).href,
      terms: `${title} local pakistan ecommerce ${window.kpiLocalLessons?.[index]?.topics?.join(" ") || ""} ${window.kpiLocalLessons?.[index]?.short || ""}`
    })),
    ...aiModules.map((title, index) => ({
      title,
      detail: `AI E-Commerce · Module ${String(index + 1).padStart(2, "0")}`,
      url: new URL(`ai-learning/module-${String(index + 1).padStart(2, "0")}.html`, siteRoot).href,
      terms: `${title} artificial intelligence ecommerce`
    })),
    ...subjects.map((subject) => ({
      title: subject.name,
      detail: `${subject.part} · DIT`,
      url: new URL(`subjects/${subject.slug}/index.html`, courseRoot).href,
      terms: `${subject.name} ${subject.part} DIT ${subject.description}`
    }))
  ];
  window.kpiDitSubjects = subjects;

  function renderPrimaryNavigation() {
    const nav = document.querySelector(".site-header .main-nav");
    if (!nav) return;
    const isDitPage = location.pathname.toLowerCase().includes("/courses/dit/");
    const isDaePage = location.pathname.toLowerCase().includes("/courses/dae/");
    const isVocationalPage = location.pathname.toLowerCase().includes("/courses/technical-vocational/");
    const moreLinks = [
      { label: "Platform home", href: siteRoot.href },
      { label: "AI E-Commerce Academy", href: new URL("ai-learning/index.html", siteRoot).href },
      { label: "Local E-Commerce course", href: new URL("curriculum.html", siteRoot).href },
      { label: "About Us", href: new URL("about.html", siteRoot).href },
      { label: "Learning resources", href: new URL("resources.html", siteRoot).href },
      { label: "Kurram Polytechnic Institute", href: "https://www.facebook.com/kpisng/", external: true }
    ];
    const ditLinks = [
      { label: "DIT course overview", href: ditIndexUrl, description: "Browse all ten DIT subjects" },
      ...subjects.map((subject) => ({
        label: subject.name,
        href: new URL(`subjects/${subject.slug}/index.html`, courseRoot).href,
        description: `${subject.part} · DIT`
      }))
    ];
    const vocationalLinks = [
      { label: "Training programs overview", href: vocationalIndexUrl, description: "Explore programs and course areas" },
      { label: "Diploma in Information Technology (DIT)", href: ditIndexUrl, description: "Browse all ten DIT subjects" },
      { label: "DAE subjects", href: daeIndexUrl, description: "Course information and syllabus status" },
      { label: "Local E-Commerce course", href: new URL("curriculum.html", siteRoot).href },
      { label: "AI E-Commerce Academy", href: new URL("ai-learning/index.html", siteRoot).href }
    ];
    const daeLinks = [
      { label: "DAE course information", href: daeIndexUrl, description: "Diploma of Associate Engineer" },
      { label: "View institute programs", href: vocationalIndexUrl, description: "Technical and vocational training" },
      { label: "Contact the instructor", href: "mailto:abidmehmoodpk25@gmail.com?subject=DAE%20subject%20outline", description: "Request the current DAE subject outline" }
    ];
    const makeDropdown = (label, id, href, links, active = false) => {
      const wrapper = document.createElement("div");
      wrapper.className = "nav-dropdown";
      const trigger = document.createElement("a");
      trigger.className = `dropdown-trigger${active ? " active" : ""}`;
      trigger.href = href;
      trigger.setAttribute("aria-expanded", "false");
      trigger.setAttribute("aria-controls", id);
      trigger.setAttribute("aria-haspopup", "true");
      if (active) trigger.setAttribute("aria-current", "page");
      trigger.innerHTML = `${label}<span class="dropdown-chevron" aria-hidden="true">⌄</span>`;
      const panel = document.createElement("div");
      panel.className = "nav-dropdown-panel";
      panel.id = id;
      panel.setAttribute("aria-label", `${label} options`);
      links.forEach((item) => {
        const link = document.createElement("a");
        link.href = item.href;
        link.textContent = item.label;
        if (item.external) {
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        }
        if (item.description) {
          const description = document.createElement("small");
          description.textContent = item.description;
          link.append(description);
        }
        panel.append(link);
      });
      const setOpen = (open) => {
        trigger.setAttribute("aria-expanded", String(open));
        wrapper.classList.toggle("is-open", open);
      };
      let suppressFocusOpen = false;
      wrapper.addEventListener("focusin", () => {
        if (!suppressFocusOpen && matchMedia("(min-width: 1321px)").matches) setOpen(true);
      });
      trigger.addEventListener("click", (event) => {
        if (!matchMedia("(max-width: 1320px)").matches) return;
        if (wrapper.classList.contains("is-open")) return;
        event.preventDefault();
        nav.querySelectorAll(".nav-dropdown.is-open").forEach((dropdown) => {
          dropdown.classList.remove("is-open");
          dropdown.querySelector(".dropdown-trigger")?.setAttribute("aria-expanded", "false");
        });
        setOpen(true);
      });
      wrapper.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "mouse" && matchMedia("(hover: hover) and (min-width: 1321px)").matches) setOpen(true);
      });
      wrapper.addEventListener("pointerleave", (event) => {
        if (event.pointerType === "mouse" && matchMedia("(hover: hover) and (min-width: 1321px)").matches) setOpen(false);
      });
      wrapper.addEventListener("focusout", (event) => {
        if (!wrapper.contains(event.relatedTarget)) setOpen(false);
      });
      wrapper.addEventListener("keydown", (event) => {
        if (event.key !== "Escape" || !wrapper.classList.contains("is-open")) return;
        event.preventDefault();
        event.stopPropagation();
        setOpen(false);
        suppressFocusOpen = true;
        trigger.focus();
        suppressFocusOpen = false;
      });
      wrapper.append(trigger, panel);
      return wrapper;
    };
    nav.replaceChildren(
      makeDropdown("DIT Subjects", "primary-dit-menu", ditIndexUrl, ditLinks, isDitPage),
      makeDropdown("Technical & Vocational Training", "primary-vocational-menu", vocationalIndexUrl, vocationalLinks, isVocationalPage),
      makeDropdown("DAE Subjects", "primary-dae-menu", daeIndexUrl, daeLinks, isDaePage),
      makeDropdown("More", "primary-more-menu", new URL("resources.html", siteRoot).href, moreLinks)
    );
    nav.classList.add("primary-course-nav");
    document.addEventListener("click", (event) => {
      if (event.target instanceof Element && !event.target.closest(".primary-course-nav .nav-dropdown")) {
        nav.querySelectorAll(".nav-dropdown.is-open").forEach((dropdown) => {
          dropdown.classList.remove("is-open");
          dropdown.querySelector(".dropdown-trigger")?.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  function addSearch() {
    const header = document.querySelector(".site-header");
    if (!header || header.querySelector(".course-search")) return;
    const search = document.createElement("div");
    search.className = "course-search";
    search.innerHTML = `<label class="visually-hidden" for="course-search-input">Search all courses and topics</label><input id="course-search-input" type="search" placeholder="Search courses and topics…" autocomplete="off" aria-controls="course-search-panel" aria-expanded="false"><button class="course-search-button" type="button" aria-label="Focus course search" title="Search courses and topics"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg></button><div class="course-search-panel" id="course-search-panel" role="listbox" aria-label="Course search results" hidden><div class="course-search-results"></div></div>`;
    const nav = header.querySelector(".main-nav");
    header.insertBefore(search, nav || null);
    const panel = search.querySelector(".course-search-panel");
    const input = search.querySelector("#course-search-input");
    const searchButton = search.querySelector(".course-search-button");
    const results = search.querySelector(".course-search-results");
    const close = () => {
      panel.hidden = true;
      input.setAttribute("aria-expanded", "false");
    };
    const showResults = (query) => {
      const value = query.trim().toLowerCase();
      if (!value) {
        panel.hidden = true;
        input.setAttribute("aria-expanded", "false");
        return;
      }
      const normalizeToken = (token) => token.replace(/ies$/i, "y").replace(/s$/i, "");
      const queryTerms = value.split(/\s+/).map(normalizeToken);
      const matches = catalog.filter((item) => {
        const searchable = `${item.title} ${item.detail} ${item.terms}`
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, " ")
          .split(/\s+/)
          .map(normalizeToken)
          .join(" ");
        return queryTerms.every((term) => searchable.includes(term));
      }).slice(0, 8);
      results.innerHTML = matches.length
        ? matches.map((item) => `<a role="option" href="${item.url}"><strong>${item.title}</strong><span>${item.detail}</span></a>`).join("")
        : `<p class="course-search-hint">No matching courses found. Try a different search.</p>`;
      panel.hidden = false;
      input.setAttribute("aria-expanded", "true");
    };
    input.addEventListener("input", () => showResults(input.value));
    searchButton.addEventListener("click", () => {
      input.focus();
      if (input.value.trim()) showResults(input.value);
    });
    input.addEventListener("focus", () => {
      if (input.value.trim()) showResults(input.value);
    });
    document.addEventListener("click", (event) => {
      if (event.target instanceof Node && !search.contains(event.target)) close();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) {
        close();
        input.blur();
      }
    });
  }

  function updateFooterContact() {
    const contact = document.querySelector(".site-footer .footer-contact");
    if (!contact) return;
    contact.innerHTML = `<strong>KPI · CONTACT &amp; SOCIAL</strong>
      <a href="tel:+923119095542">Institute phone: +92 311 9095542</a>
      <a href="https://wa.me/923119095542" target="_blank" rel="noopener noreferrer">KPI WhatsApp ↗</a>
      <a href="https://www.facebook.com/kpisng/" target="_blank" rel="noopener noreferrer">KPI Facebook ↗</a>
      <a href="https://www.google.com/maps/search/?api=1&amp;query=Kurram+Polytechnic+Institute+Serai+Naurang" target="_blank" rel="noopener noreferrer">Main GT Road, opposite Freshway Bakery, Sabzi Mandi Branch, Serai Naurang ↗</a>
      <a href="tel:+923029382306">Instructor: +92 302 9382306</a>
      <a href="mailto:abidmehmoodpk25@gmail.com">abidmehmoodpk25@gmail.com</a>
      <span>Abid Mehmood</span>`;
  }

  function syncStickyOffsets() {
    const announcement = document.querySelector(".institute-announcement");
    const header = document.querySelector(".site-header");
    if (!announcement || !header) return;
    const root = document.documentElement;
    const announcementHeight = 36;
    root.style.setProperty("--kpi-announcement-height", `${announcementHeight}px`);
    root.style.setProperty("--kpi-sticky-stack-height", `${announcementHeight + header.offsetHeight}px`);
    if (header.dataset.stickyOffsetBound === "true") return;
    header.dataset.stickyOffsetBound = "true";
    window.addEventListener("resize", syncStickyOffsets, { passive: true });
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(syncStickyOffsets);
      observer.observe(header);
      observer.observe(announcement);
    }
  }

  function addGoogleSearchDialog() {
    if (document.querySelector("#kpi-google-search-dialog")) return;
    const launcher = document.createElement("button");
    launcher.className = "google-search-launch";
    launcher.type = "button";
    launcher.setAttribute("aria-haspopup", "dialog");
    launcher.setAttribute("aria-controls", "kpi-google-search-dialog");
    launcher.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="m16 16 5 5"></path></svg><span>Google Search</span>`;
    const dialog = document.createElement("dialog");
    dialog.className = "google-search-dialog";
    dialog.id = "kpi-google-search-dialog";
    dialog.setAttribute("aria-labelledby", "google-search-title");
    dialog.innerHTML = `<div class="google-dialog-heading"><div><span>SEARCH THE WEB</span><h2 id="google-search-title">Ask Google anything</h2></div><button class="google-dialog-close" type="button" aria-label="Close Google search">×</button></div>
      <form class="google-search-form" role="search"><label for="google-search-query">Search topic</label><div class="google-search-field"><input id="google-search-query" type="search" name="q" placeholder="e.g. HTML forms for beginners" required><button type="submit">Search</button></div></form>
      <p class="google-search-help">Search details appear here. Google does not reliably allow its live result page to be embedded in other websites.</p>
      <section class="google-search-result" aria-live="polite" hidden><strong class="google-search-summary"></strong><p>Open Google to view current results, then return here and close this dialog whenever you are ready.</p><a class="google-search-external" href="https://www.google.com/" target="_blank" rel="noopener noreferrer">Open Google results in a new tab ↗</a></section>`;
    document.body.append(launcher, dialog);
    const form = dialog.querySelector(".google-search-form");
    const input = dialog.querySelector("#google-search-query");
    const closeButton = dialog.querySelector(".google-dialog-close");
    const external = dialog.querySelector(".google-search-external");
    const result = dialog.querySelector(".google-search-result");
    const summary = dialog.querySelector(".google-search-summary");
    const openDialog = () => {
      dialog.showModal();
      input.focus();
    };
    launcher.addEventListener("click", openDialog);
    document.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest(".kpi-google-launch")) openDialog();
    });
    closeButton.addEventListener("click", () => dialog.close());
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dialog.close();
      }
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = input.value.trim();
      if (!query) return;
      external.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      summary.textContent = `Google search: “${query}”`;
      result.hidden = false;
    });
    dialog.addEventListener("close", () => {
      launcher.focus();
    });
  }

  function addAnnouncement() {
    if (document.querySelector(".institute-announcement")) return;
    const strip = document.createElement("div");
    strip.className = "institute-announcement";
    strip.setAttribute("role", "region");
    strip.setAttribute("aria-label", "Kurram Polytechnic Institute announcement and contact information");
    const message = `<span>Kurram Polytechnic Institute · Serai Naurang</span><span>DIT · DAE · Technical &amp; Vocational Training</span><span>Computer, English, Web Development &amp; E-Commerce learning</span><span>Main GT Road, opposite Freshway Bakery, Sabzi Mandi Branch</span><a href="tel:+923119095542">Call / WhatsApp: +92 311 9095542</a><a href="https://www.facebook.com/kpisng/" target="_blank" rel="noopener noreferrer">KPI Facebook</a>`;
    strip.innerHTML = `<div class="announcement-track"><div class="announcement-content">${message}</div><div class="announcement-content" aria-hidden="true">${message}</div></div>`;
    document.body.insertAdjacentElement("afterbegin", strip);
  }

  function setupMobileNavigation() {
    const toggle = document.querySelector(".site-header .menu-toggle");
    const nav = document.querySelector(".site-header .main-nav");
    if (!toggle || !nav || toggle.dataset.menuBound === "true") return;
    toggle.dataset.menuBound = "true";
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !expanded);
    });
  }

  function addSubjectNavigation() {
    const header = document.querySelector(".site-header");
    if (!header || document.querySelector(".dit-subject-nav")) return;
    const bar = document.createElement("nav");
    bar.className = "dit-subject-nav course-topic-nav";
    bar.setAttribute("aria-label", "Browse courses and subjects");
    const currentSlug = document.body.dataset.subject || "";
    const isDitPage = location.pathname.toLowerCase().includes("/courses/dit/");
    const makeLink = (label, href, className = "", current = false, external = false) => {
      const link = document.createElement("a");
      link.href = href;
      link.textContent = label;
      if (className) link.className = className;
      if (current) {
        link.classList.add("is-current");
        link.setAttribute("aria-current", "page");
      }
      if (external) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      return link;
    };
    const content = document.createElement("div");
    content.className = "dit-subject-nav-inner";
    content.append(makeLink("DIT Subjects", ditIndexUrl, "course-strip-category", isDitPage && !currentSlug));
    subjects.forEach((subject) => content.append(makeLink(
      subject.name,
      new URL(`subjects/${subject.slug}/index.html`, courseRoot).href,
      "",
      subject.slug === currentSlug
    )));
    content.append(
      makeLink("NAVTTC", "https://navttc.gov.pk/", "course-strip-category", false, true),
      makeLink("AI", new URL("ai-learning/module-02.html", siteRoot).href, "course-strip-category", location.pathname.toLowerCase().includes("/ai-learning/module-02.html")),
      makeLink("AI-Based E-Commerce", new URL("ai-learning/index.html", siteRoot).href, "course-strip-category", location.pathname.toLowerCase().endsWith("/ai-learning/index.html")),
      makeLink("Graphic Designing", new URL("subjects/graphics-design/index.html", courseRoot).href, "course-strip-category", currentSlug === "graphics-design"),
      makeLink("DAE All Subjects", daeIndexUrl, "course-strip-category", location.pathname.toLowerCase().includes("/courses/dae/"))
    );
    bar.append(content);
    header.insertAdjacentElement("afterend", bar);
  }

  function addDesktopSidebars() {
    if (document.querySelector(".kpi-sidebars")) return;
    const sidebars = document.createElement("div");
    sidebars.className = "kpi-sidebars";
    sidebars.innerHTML = `
      <aside class="kpi-sidebar kpi-sidebar-learning" aria-label="Learning shortcuts">
        <span class="kpi-sidebar-eyebrow">LEARNING SHORTCUTS</span>
        <h2>Choose a pathway</h2>
        <a href="${ditIndexUrl}"><span>01</span> DIT subjects</a>
        <a href="${new URL("ai-learning/index.html", siteRoot).href}"><span>02</span> AI learning</a>
        <a href="${new URL("curriculum.html", siteRoot).href}"><span>03</span> E-Commerce</a>
        <a href="${new URL("subjects/graphics-design/index.html", courseRoot).href}"><span>04</span> Graphic design</a>
        <a href="${daeIndexUrl}"><span>05</span> DAE subjects</a>
        <div class="kpi-sidebar-note">Pick a topic, follow the practical steps, and keep learning at your own pace.</div>
      </aside>
      <aside class="kpi-sidebar kpi-sidebar-institute" aria-label="Institute information">
        <span class="kpi-sidebar-eyebrow">YOUR INSTITUTE</span>
        <h2>Kurram Polytechnic Institute</h2>
        <p>Main GT Road, opposite Freshway Bakery, Sabzi Mandi Branch, Serai Naurang.</p>
        <a class="kpi-sidebar-contact" href="tel:+923119095542">Call / WhatsApp<br><strong>+92 311 9095542</strong></a>
        <a class="kpi-sidebar-contact" href="https://www.facebook.com/kpisng/" target="_blank" rel="noopener noreferrer">Institute updates<br><strong>Visit KPI Facebook ↗</strong></a>
        <button class="kpi-google-launch" type="button">Search Google ↗</button>
        <div class="kpi-sidebar-note">Check with the institute for current courses, admissions, schedules, and fees.</div>
      </aside>`;
    document.body.append(sidebars);
    let frameRequested = false;
    const updateLayout = () => {
      frameRequested = false;
      if (!matchMedia("(min-width: 1321px)").matches) return;
      const courseNav = document.querySelector(".course-topic-nav");
      const footer = document.querySelector(".site-footer");
      if (!courseNav || !footer) return;
      const top = Math.ceil(courseNav.getBoundingClientRect().bottom + 10);
      const footerTop = footer.getBoundingClientRect().top;
      const height = Math.max(0, Math.min(window.innerHeight - top - 16, footerTop - top - 20));
      sidebars.style.setProperty("--kpi-sidebar-top", `${top}px`);
      sidebars.style.setProperty("--kpi-sidebar-height", `${height}px`);
      sidebars.classList.toggle("is-footer-adjacent", height < 100);
    };
    const requestLayoutUpdate = () => {
      if (frameRequested) return;
      frameRequested = true;
      requestAnimationFrame(updateLayout);
    };
    window.addEventListener("scroll", requestLayoutUpdate, { passive: true });
    window.addEventListener("resize", requestLayoutUpdate);
    requestLayoutUpdate();
  }

  function normalizeAboutLinks() {
    document.querySelectorAll("a[href]").forEach((link) => {
      const target = new URL(link.href, location.href);
      if (target.pathname.endsWith("/about.html") && /^about\b/i.test(link.textContent.trim())) {
        link.textContent = "About Us";
      }
    });
  }

  function init() {
    addAnnouncement();
    syncStickyOffsets();
    renderPrimaryNavigation();
    addSearch();
    updateFooterContact();
    addGoogleSearchDialog();
    setupMobileNavigation();
    addSubjectNavigation();
    addDesktopSidebars();
    normalizeAboutLinks();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
