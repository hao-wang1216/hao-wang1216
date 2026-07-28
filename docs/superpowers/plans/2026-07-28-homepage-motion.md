# Homepage Motion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the academic homepage with polished native motion effects, responsive layout improvements, and project hover interactions without introducing any external dependencies.

**Architecture:** Keep everything inside the existing static `index.html` file. Add semantic classes and section wrappers in the HTML, replace the fixed-width presentation with responsive CSS, and attach a small inline script that uses `IntersectionObserver` plus load-state classes to control animations.

**Tech Stack:** Static HTML, native CSS, native JavaScript, GitHub Pages-compatible deployment

---

## File Structure

- Modify: `index.html`
  - Add semantic structure for header, sections, and project cards
  - Replace old presentational styling with responsive layout and animation styles
  - Add native JavaScript for initial reveal and scroll-triggered animation
- Verify: local browser preview of `index.html`

### Task 1: Restructure the Static Markup for Animation Targets

**Files:**
- Modify: `index.html`
- Test: `index.html` in a browser

- [ ] **Step 1: Back up the original semantic content mentally and preserve all existing sections**

Confirm these content blocks remain present after the edit:

```text
Header with profile image and contact info
Biography
Research Interests
News
Projects
```

- [ ] **Step 2: Replace table-first page structure with semantic wrappers that are easy to animate**

Update `index.html` so the body content follows this shape:

```html
<body>
  <div class="page-shell">
    <header class="hero reveal-on-load">
      <div class="hero-media">
        <img src="WangHao1.jpg" alt="Hao Wang portrait" width="180">
      </div>
      <div class="hero-content">
        <p class="hero-kicker">Researcher / Undergraduate Student</p>
        <h1>Hao Wang</h1>
        <p class="hero-name">王浩</p>
        <p class="hero-meta">
          Dalian Maritime University<br>
          Dalian, China
        </p>
        <p class="hero-links">
          <a href="mailto:King.Whao@outlook.com">King.Whao@outlook.com</a>
          <a href="https://github.com/hao-wang1216?tab=repositories" target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </div>
    </header>

    <main>
      <section class="content-section reveal-on-scroll">...</section>
      <section class="content-section reveal-on-scroll">...</section>
      <section class="content-section reveal-on-scroll">...</section>
      <section class="content-section reveal-on-scroll projects-section">
        <div class="project-card reveal-on-scroll">...</div>
      </section>
    </main>
  </div>
</body>
```

- [ ] **Step 3: Convert each existing project row into a standalone `.project-card` block**

For each project, use a structure like:

```html
<article class="project-card reveal-on-scroll">
  <div class="project-year">2026</div>
  <div class="project-media">
    <img src="UniCOD/Overview.png" alt="Overview of Toward Unified Cross-Modal Camouflaged Object Detection">
  </div>
  <div class="project-copy">
    <div class="project-index">1.</div>
    <h3>Toward Unified Cross-Modal Camouflaged Object Detection</h3>
    <p class="project-authors">Hao Wang</p>
    <p class="project-desc">This work addresses camouflaged object detection by developing a unified multimodal framework that adapts to varying auxiliary modality availability.</p>
    <p class="project-status"><em>under review</em></p>
    <p class="project-links">[<a href="" target="_blank">Paper</a> | <a href="" target="_blank">Code</a>]</p>
  </div>
</article>
```

- [ ] **Step 4: Preview the page structure to confirm that content still renders in the correct order**

Run in PowerShell:

```powershell
Start-Process "index.html"
```

Expected: the browser opens the page and shows the same core content with the new semantic structure, even before styling is finalized.

### Task 2: Add Responsive Styling and Motion-Friendly Visual Polish

**Files:**
- Modify: `index.html`
- Test: `index.html` in a browser

- [ ] **Step 1: Replace the old fixed-width body CSS with a responsive page shell**

Add CSS in the `<style>` block similar to:

```css
:root {
  --bg: #f5f7fb;
  --panel: #ffffff;
  --text: #18212f;
  --muted: #5e6a7d;
  --line: #d8e0ea;
  --accent: #1f4e79;
  --accent-soft: rgba(31, 78, 121, 0.12);
  --shadow: 0 18px 45px rgba(24, 33, 47, 0.08);
  --radius: 20px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  color: var(--text);
  background: linear-gradient(180deg, #f7f9fc 0%, #eef3f8 100%);
}

.page-shell {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 48px 0 72px;
}
```

- [ ] **Step 2: Style the hero area as a modern academic introduction block**

Add CSS like:

```css
.hero {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  align-items: center;
  padding: 36px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(216, 224, 234, 0.9);
  border-radius: 28px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(8px);
}

.hero img {
  width: 180px;
  border-radius: 18px;
  display: block;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.12);
}

.hero-kicker,
.hero-meta,
.hero-links,
.hero-name {
  color: var(--muted);
}
```

- [ ] **Step 3: Style sections and project cards with restrained elevation**

Add CSS like:

```css
.content-section {
  margin-top: 28px;
  padding: 28px 30px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(216, 224, 234, 0.85);
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(24, 33, 47, 0.05);
}

.project-card {
  display: grid;
  grid-template-columns: 84px minmax(260px, 520px) 1fr;
  gap: 24px;
  align-items: start;
  padding: 22px;
  border: 1px solid transparent;
  border-radius: 22px;
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease, background-color 0.35s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 42px rgba(24, 33, 47, 0.10);
  border-color: rgba(31, 78, 121, 0.18);
  background: rgba(248, 251, 255, 0.95);
}
```

- [ ] **Step 4: Add image and link hover transitions**

Add CSS like:

```css
.project-media {
  overflow: hidden;
  border-radius: 18px;
}

.project-media img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.45s ease;
}

.project-card:hover .project-media img {
  transform: scale(1.035);
}

a {
  color: var(--accent);
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0 1px;
  transition: color 0.25s ease, background-size 0.25s ease;
}

a:hover {
  background-size: 100% 1px;
}
```

- [ ] **Step 5: Add responsive breakpoints for tablet and mobile widths**

Add CSS like:

```css
@media (max-width: 900px) {
  .hero,
  .project-card {
    grid-template-columns: 1fr;
  }

  .hero {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .page-shell {
    width: min(100% - 20px, 1120px);
    padding: 20px 0 48px;
  }

  .content-section,
  .hero {
    padding: 22px 18px;
  }
}
```

- [ ] **Step 6: Preview the styled page and confirm readability on a narrow viewport**

Run in PowerShell:

```powershell
Start-Process "index.html"
```

Expected: the page opens with card-based spacing, clear visual hierarchy, and no horizontal overflow when the browser width is reduced.

### Task 3: Add Native Load and Scroll Reveal Animations

**Files:**
- Modify: `index.html`
- Test: `index.html` in a browser

- [ ] **Step 1: Define hidden and visible animation states in CSS**

Add CSS like:

```css
.reveal-on-load,
.reveal-on-scroll,
.hero-media,
.hero-content > * {
  opacity: 0;
  transform: translateY(22px);
}

body.is-ready .reveal-on-load,
body.is-ready .hero-media,
body.is-ready .hero-content > * {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.is-visible {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
```

- [ ] **Step 2: Stagger the hero text so it enters in sequence**

Apply inline custom properties or nth-child delays with CSS like:

```css
.hero-content > *:nth-child(1) { transition-delay: 0.08s; }
.hero-content > *:nth-child(2) { transition-delay: 0.16s; }
.hero-content > *:nth-child(3) { transition-delay: 0.24s; }
.hero-content > *:nth-child(4) { transition-delay: 0.32s; }
.hero-content > *:nth-child(5) { transition-delay: 0.40s; }

.hero-media {
  transition-delay: 0.05s;
}
```

- [ ] **Step 3: Add a small inline script that activates load and scroll animations**

Place this before `</body>`:

```html
<script>
  window.addEventListener('load', function () {
    document.body.classList.add('is-ready');

    var observer = new IntersectionObserver(function (entries, instance) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.16,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal-on-scroll').forEach(function (element) {
      observer.observe(element);
    });
  });
</script>
```

- [ ] **Step 4: Respect users who prefer reduced motion**

Add CSS like:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }

  .reveal-on-load,
  .reveal-on-scroll,
  .hero-media,
  .hero-content > * {
    opacity: 1 !important;
    transform: none !important;
  }
}
```

- [ ] **Step 5: Verify the motion behavior manually**

Run in PowerShell:

```powershell
Start-Process "index.html"
```

Expected:

```text
Header content fades in once on load
Sections reveal as they enter the viewport
Each project card appears smoothly and only once
Hovering a project image produces a subtle zoom
```

### Task 4: Final QA and Cleanup

**Files:**
- Modify: `index.html` if fixes are needed
- Verify: `index.html` in a browser

- [ ] **Step 1: Scan for broken attributes and malformed links after restructuring**

Check that all image and anchor tags still use valid attributes like:

```html
<img src="CPGNet/overview.png" alt="Conditional Polarization Guidance for Camouflaged Object Detection overview">
<a href="https://arxiv.org/pdf/2604.12380v1" target="_blank" rel="noreferrer">Paper</a>
```

- [ ] **Step 2: Check for invalid nested block markup left over from the original file**

Remove old structures such as:

```html
<p>
  <font size="4">
    <p>...</p>
  </font>
</p>
```

Replace with clean markup like:

```html
<div class="section-body">
  <p>...</p>
</div>
```

- [ ] **Step 3: Validate final visual behavior in a browser**

Run in PowerShell:

```powershell
Start-Process "index.html"
```

Expected:

```text
The page feels more modern and dynamic
The academic tone remains intact
No external requests or dependency errors occur
Layout remains readable on desktop and mobile widths
```

- [ ] **Step 4: Stage and commit only after manual review if a commit is desired**

Use:

```bash
git add index.html
git commit -m "feat: add native motion to homepage"
```

Skip this step if the user does not want a commit yet.
