# AI Usage Report (Assignment 1)

## Tools Used & Use Cases

### ChatGPT
I used ChatGPT as a support tool to speed up development and reduce trial-and-error while building my portfolio site. Specifically, I used it to:
- **Plan the workflow** for the assignment (HTML → CSS → JavaScript → documentation) and validate that it was time-efficient.
- **Decide the site structure** (single-page `index.html` with sections vs. multiple HTML pages) and choose an approach aligned with typical portfolio layouts.
- **Create a responsive CSS foundation** using Flexbox/Grid and then refine it to match a specific layout style (pill navigation, section spacing, projects layout).
- **Improve the form section** by explaining how form submission data works without a backend and what’s possible in a static site.
- **Implement key JavaScript features** by generating an external JS file to add:
  - smooth scrolling to section anchors,
  - a dark/light theme toggle with persistence,
  - a time-based greeting message in the hero section.
- **Identify required HTML edits** to connect the JS features (IDs/classes for greeting and theme button, adding the script tag).
- **Documentation support:** Used ChatGPT to draft and refine project documentation (README and technical documentation), ensuring the docs clearly describe the project structure, features, and how to run the site locally while keeping the final wording aligned with my implementation.

## Benefits & Challenges

### Benefits
- **Faster layout iteration:** AI suggestions helped me quickly move from a basic layout to a responsive design using Grid/Flexbox.
- **Clear direction on best practices:** It guided me toward a single-page section-based portfolio (common industry pattern) and improved navigation behavior.
- **Reduced debugging time:** AI identified small but important issues such as:
  - correct CSS property usage (e.g., `color` instead of `font-color`),
  - where to place theme overrides in the CSS to ensure they apply correctly,
  - how to structure project cards for reliable grid layouts.

### Challenges / Limitations
- **Design tuning still required manual work:** Even with AI-generated CSS, I needed to adjust spacing, alignment, and visual hierarchy to match the intended design.
- **Static site constraints:** AI clarified that storing form submissions to CSV/text is not possible directly from browser-only HTML/JS due to security limitations; it requires a backend or third-party form handling.
- **Avoiding over-reliance:** AI can generate a lot of code; I had to choose only the parts that fit my design and course requirements.

## Learning Outcomes

### Technical Skills
- Learned how to build a **responsive layout** using:
  - CSS Grid (e.g., two-column project card grid that collapses to one column on mobile),
  - Flexbox for navigation alignment and adaptive spacing,
  - breakpoints and `clamp()` for responsive sizing.
- Learned how to implement **useful front-end JavaScript** patterns:
  - smooth scrolling with sticky-nav offset handling,
  - theme toggling using a `data-theme` attribute and `localStorage`,
  - dynamic greeting messages using the current time.

### Workflow Improvements
- Improved my development process by:
  - building structure first (HTML),
  - styling for layout and responsiveness next (CSS),
  - adding only necessary interactivity (JS),
  - documenting AI usage and changes at the end.

## Responsible Use & Modifications

I used AI as an assistant, not a replacement for my own work. To ensure correctness, originality, and academic integrity, I:

- **Reviewed all AI output** before adding it to my project.
- **Modified AI-generated CSS and JS** to match my specific design goals and assignment requirements.  
  For example, I used AI help mainly for the harder parts such as:
  - structuring the responsive project card grid,
  - implementing theme toggling with persistence and accessible button behavior,
  - implementing smooth scrolling with an offset to account for the sticky navigation bar.
- **Tested changes manually** by resizing the browser and using DevTools to confirm the layout works on desktop, tablet, and mobile.
- **Kept the content and layout decisions my own:** I chose the final site structure (single-page sections), the final copy/wording, and refined styling choices rather than accepting everything AI suggested.
- **Ensured originality:** I treated AI code as a starting point, then rewrote/adjusted it to fit my project’s structure, naming conventions, and intended UI.

Overall, AI improved my speed and helped with tricky implementation details, but I ensured the final result reflects my own understanding and work.
