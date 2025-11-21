// javascript.js - simple corporate-style enhancements

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for internal links
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Collapsible sections for readability
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const header = section.querySelector("h2");
    if (header) {
      header.style.cursor = "pointer";
      header.addEventListener("click", () => {
        section.classList.toggle("collapsed");
      });
    }
  });
});

// Optional: style for collapsed sections
// Add this to canvas.css if you want collapsible behavior
/*
section.collapsed ul,
section.collapsed p {
  display: none;
}
section.collapsed h2::after {
  content: " (click to expand)";
  font-size: 0.9em;
  color: #666;
}
*/
