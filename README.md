# Assignment 1 – Portfolio Website

## Project Description
This project is a responsive **single-page portfolio website** built with **HTML, CSS, and JavaScript**.  
It includes the required sections:

- **About Me** (short intro + profile image + tagline)
- **Projects** (at least 2 projects with descriptions and images/placeholders)
- **Achievements**
- **Hobbies**
- **Contact** (form with Name, Email, Message — no backend)

The layout is designed to display well on **desktop, tablet, and mobile** using **CSS Grid/Flexbox**. The site also includes small interactive enhancements such as **smooth scrolling**, a **dark/light theme toggle**, and a **time-based greeting**.

---

## Setup Instructions (Run Locally)

### Option 1: Open directly in a browser
1. Download or clone this repository.
2. Open `index.html` in your browser.

### Option 2: Run using a local server (recommended)
**VS Code (Live Server):**
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (if needed).
3. Right-click `index.html` → **Open with Live Server**.

**Python HTTP Server:**
```bash
cd assignment-1
python3 -m http.server 8000
```
Then open:
http://localhost:8000

## Performance
This site is lightweight (plain HTML/CSS/JS) and optimized for fast loading:
- Images use native lazy loading (`loading="lazy"`) to reduce initial page load work.
- No heavy frameworks or large libraries are used, keeping file sizes and runtime overhead low.


## AI Use Summary
AI was used as a support tool during development (planning, responsive layout guidance, and implementing specific JavaScript features).
A full, detailed report (tools used, benefits/challenges, learning outcomes, and how AI suggestions were reviewed and modified) is available here: docs/ai-usage-report.md