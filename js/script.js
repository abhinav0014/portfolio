document.addEventListener(
  "click",
  function (e) {
    
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    // Allow default for in-page anchors
    if (href.startsWith("#")) return;

    // Pages that should map to .html
    const pages = ["home", "about", "contact", "projects", "blog","resume","privacy","terms","sitemap","archives"];

    // Prevent normal navigation
    e.preventDefault();
    e.stopPropagation();

    // Clean the href (remove leading/trailing slashes)
    const cleanHref = href.replace(/^\/|\/$/g, "");

    if (pages.includes(cleanHref)) {
      window.location.href = cleanHref + ".html";
    } else {
      // fallback for external or other links
      window.location.href = href;
    }
  },
  true // capture phase
);