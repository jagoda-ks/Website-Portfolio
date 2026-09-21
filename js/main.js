(function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector("#nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  const sections = ["about", "projects", "interests", "cv"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  const navAnchors = Array.from(document.querySelectorAll(".nav-links a"));

  function setActive() {
    const y = window.scrollY + 90;
    let current = sections[0];
    sections.forEach(function (section) {
      if (section.offsetTop <= y) current = section;
    });
    navAnchors.forEach(function (anchor) {
      const match = current && anchor.getAttribute("href") === "#" + current.id;
      anchor.classList.toggle("is-active", Boolean(match));
    });
  }

  if (sections.length) {
    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }

  document.querySelectorAll(".art-gallery").forEach(function (gallery) {
    gallery.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });
    gallery.addEventListener("dragstart", function (event) {
      event.preventDefault();
    });
  });
})();
