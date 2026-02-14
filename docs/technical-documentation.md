# Technical Documentation – Portfolio Website (Assignment 1)

## Overview
This project is a responsive, single-page portfolio website built with **HTML**, **CSS**, and **JavaScript**.  
It is designed to display well on **desktop, tablet, and mobile** and includes:
- Anchor-based navigation with smooth scrolling
- A dark/light theme toggle (persistent via localStorage)
- A time-based greeting message in the hero section
- A contact form UI (front-end only; no backend)

---

## Project Structure
```text

assignment-1/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── headshot.png
│       ├── project1.jpg
│       └── project2.png
└── docs/
├── ai-usage-report.md
└── technical-documentation.md
```

---

## Technologies Used
- **HTML5**: Semantic structure, sections, and form elements
- **CSS3**: Responsive design using Grid/Flexbox, CSS variables, and media queries
- **JavaScript (Vanilla)**: Smooth scrolling, theme toggling, and dynamic greeting logic
- **No frameworks**: The project intentionally uses lightweight, plain web technologies

---

## HTML Architecture (index.html)

### Navigation
The `<nav>` contains anchor links pointing to section IDs:
- `#about`, `#projects`, `#achievements`, `#hobbies`, `#contact-me`

A theme toggle button is included in the navigation:
- Button ID: `theme-toggle`
- Class: `nav-btn`
- Used by JavaScript to switch light/dark themes.

### Hero Header
The hero section contains a dynamic greeting and highlighted name:
- Greeting target: `<span id="greeting"></span>`
- The name uses `<span class="accent">Belal Shebl</span>` for accent color styling.
- A subtitle sits below the main heading inside `.subtitle`.

### Main Sections
The `<main>` element includes the following sections:
- **About (`#about`)**: Two-column layout (text + photo frame + tagline)
- **Projects (`#projects`)**: Two project cards inside `.project-grid`
- **Achievements (`#achievements`)**: Headings with bullet lists
- **Hobbies (`#hobbies`)**: Bullet list
- **Contact (`#contact-me`)**: A structured form using `.contact-form` and `.form-row`

---

## CSS Design (css/style.css)

### Design System (CSS Variables)
The site’s theme and sizing are managed through CSS custom properties in `:root`:
- Layout: `--max-width`, `--pad`
- Colors: `--bg`, `--text`, `--muted`, `--line`
- Accent palette: `--accent`, `--accent-soft`
- Styling: `--radius`, `--pill`, `--shadow`

This supports consistency and makes theme changes easier.

### Layout & Responsiveness
The project uses **Flexbox** and **CSS Grid** for responsiveness:

- **Navigation (`nav`)**
  - Uses flex layout with `flex-wrap` so links wrap on smaller screens.
  - `position: sticky` keeps nav visible while scrolling.

- **Hero (`header.hero`)**
  - Centered, responsive typography using `clamp()` for scalable headings.

- **About Section (`.about`)**
  - `grid-template-columns: 1fr auto` places text left and photo right.
  - Collapses to a single column on smaller screens.

- **Projects (`.project-grid`)**
  - Two-column grid on desktop: `repeat(2, minmax(0, 1fr))`
  - Collapses to one column on tablet/mobile.

- **Contact Form (`.contact-form` / `.form-row`)**
  - `.form-row` is a two-column grid for first/last name.
  - Collapses to a single column on small screens.

### Breakpoints
- `@media (max-width: 900px)`:
  - Stacks about section into one column
  - Switches projects grid to single-column
- `@media (max-width: 600px)`:
  - Stacks form row inputs
  - Makes submit button full width for mobile usability

### Visual Style
- Dotted paper background via `body::before` (radial gradient pattern)
- Sections are presented as “cards” (border + shadow + rounded corners)
- Yellow gradient applied to:
  - nav links
  - project cards
  - submit button
- Explicit rule keeps text readable (black) on yellow surfaces:
  - `nav a, .project-card, .btn { color: #141414; }`

### Dark Mode (CSS)
Dark mode is controlled by a `data-theme` attribute on `:root`:
```css
:root[data-theme="dark"] { ... }
```

When enabled, variables update for a dark background and light text:

* `--bg` becomes dark
* `--text` becomes light
* `--muted` and `--line` adjust for contrast

To keep UI readable in dark mode:

* `section` and `nav` backgrounds become darker translucent panels:

  * `:root[data-theme="dark"] section, :root[data-theme="dark"] nav { background: rgba(20,22,28,0.85); }`

The theme toggle button also changes color depending on mode:

* Light mode: dark grey background
* Dark mode: light grey background

---

## JavaScript Functionality (js/script.js)

The JavaScript runs on `DOMContentLoaded` and implements three features:

### 1) Smooth Scrolling

* Targets nav anchors: `nav a[href^="#"]`
* Prevents default jump navigation and performs smooth scroll.
* Applies a scroll offset based on sticky nav height:

  * Prevents section headings from being hidden behind the sticky nav.
* Accessibility improvement:

  * Temporarily sets `tabindex="-1"` and focuses the target section after scrolling.

### 2) Dark/Light Theme Toggle (Persistent)

* Toggle button: `#theme-toggle`
* Theme is applied by setting:

  * `document.documentElement.setAttribute("data-theme", "dark" | "light")`
* Persistence:

  * Saves the selected theme in `localStorage` under key `"theme"`.
* Default theme behavior:

  * If no saved theme exists, uses system preference via:

    * `window.matchMedia("(prefers-color-scheme: dark)")`
* Accessibility:

  * Updates button label and `aria-pressed` to reflect the active theme.

### 3) Greeting Message by Time of Day

* Element target: `#greeting`
* Reads the current hour from the user’s device:

  * Morning (05:00–11:59): `"Good Morning,"`
  * Afternoon (12:00–17:59): `"Good Afternoon,"`
  * Evening (otherwise): `"Good Evening,"`
* Inserts the greeting into the hero heading.

---

## Contact Form Behavior (Front-End Only)

The contact form is currently UI-only:

* It uses standard HTML form fields and `method="POST"`.
* No backend endpoint is provided, so submissions are not stored.
* Persisting submissions would require:

  * a backend server, serverless function, or third-party form service.

---

## Accessibility Notes

* Smooth scrolling focuses the destination section to support keyboard users.
* The theme toggle uses `aria-pressed` to indicate state.
* Images include `alt` text for screen readers.

---
## Performance & Optimization

### What makes the site fast
- **Static site architecture:** The project uses plain HTML/CSS/JS with no framework bundles, which minimizes network requests and parsing/execution time.
- **Small JavaScript footprint:** JavaScript is limited to three UX features (smooth scrolling, theme toggle, time-based greeting), keeping runtime overhead low.

### Image optimization
Images are typically the biggest performance cost for portfolio sites. This project improves image loading behavior by:
- **Lazy loading images:** Non-critical images (e.g., project screenshots) use native browser lazy loading:
  - `loading="lazy"` delays image loading until the user scrolls near them, improving initial load time and reducing bandwidth usage.

Recommended best practice (if additional optimization is needed):
- **Resize/compress images** to reasonable display sizes (e.g., ~800–1200px wide) and compress to keep file sizes low.
- Use appropriate formats:
  - JPEG/WebP for photos and screenshots
  - PNG only when transparency is required

### How to verify performance
- Use browser DevTools:
  - **Network tab** to confirm image sizes and deferred loading
  - **Lighthouse** to check performance and best practices
- Manually test on mobile and by throttling network speed in DevTools to ensure good perceived load time.

---

## How to Run Locally

### Option 1: Open directly

Open `index.html` in any browser.

### Option 2: Run a local server (recommended)

```bash
cd assignment-1
python3 -m http.server 8000
```

Then open:

* `http://localhost:8000`

---

## Future Improvements

* Add client-side form validation and a “message sent” confirmation
* Add active-section highlighting in the nav while scrolling

