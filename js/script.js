// js/script.js

document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // Smooth scrolling (JS fallback + offset support)
  // ---------------------------
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      // If you have a sticky nav, this prevents hiding the section title behind it
      const nav = document.querySelector("nav");
      const offset = nav ? nav.offsetHeight + 12 : 0;

      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: "smooth" });

      // Improve accessibility: move focus to the section
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    });
  });

  // ---------------------------
  // Dark/Light theme toggle (saved in localStorage)
  // ---------------------------
  const themeBtn = document.getElementById("theme-toggle");
  const root = document.documentElement;

  const applyTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    if (themeBtn) {
      const isDark = theme === "dark";
      themeBtn.textContent = isDark ? "Light mode" : "Dark mode";
      themeBtn.setAttribute("aria-pressed", String(isDark));
    }
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    // Default: match system preference
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  themeBtn?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  // ---------------------------
  // Greeting message by time of day
  // ---------------------------
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = "Hi";

    if (hour >= 5 && hour < 12) greeting = "Good Morning";
    else if (hour >= 12 && hour < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    greetingEl.textContent = `${greeting},`;
  }
});
