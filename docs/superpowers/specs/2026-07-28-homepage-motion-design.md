# Homepage Motion Design

## Goal

Enhance the academic homepage in `index.html` with tasteful motion and light visual polish while keeping the site fully static and GitHub Pages friendly.

## Constraints

- No external dependencies, build tools, or CDN libraries.
- Keep the existing content structure and academic tone.
- All behavior must work from a single static `index.html`.
- Motion should feel professional and restrained rather than flashy.

## Approach

Use native HTML, CSS, and JavaScript only.

- CSS handles transitions, hover states, spacing, cards, and responsive polish.
- JavaScript uses `IntersectionObserver` to reveal sections and project entries on scroll.
- Initial page load animation is handled by CSS classes applied after load.

## Motion Design

### Header

- Profile image fades in and moves slightly upward on page load.
- Name and contact details appear in sequence with short staggered delays.
- Total intro animation duration should remain around 0.8s to 1.2s.

### Section Reveal

- `Biography`, `Research Interests`, `News`, and `Projects` start slightly offset with lower opacity.
- Each section becomes visible when it enters the viewport.
- Animation timing should be smooth and short, around 0.6s.

### Project Reveal and Hover

- Each project item reveals independently as the user scrolls.
- Project rows gain a subtle card background, rounded corners, and soft shadow.
- Project images scale slightly on hover.
- Project links gain a color and underline transition on hover.

## Visual Polish

- Improve section spacing and rhythm.
- Add a consistent content width and responsive behavior for smaller screens.
- Use a restrained accent color suitable for an academic personal website.
- Preserve the page’s current information hierarchy.

## Technical Notes

- Replace layout assumptions tied to fixed width where needed with a more flexible responsive layout.
- Add semantic classes to the header, sections, and project entries so motion logic is easy to target.
- Keep JavaScript small and inline unless separation becomes necessary later.

## Out of Scope

- No framework migration.
- No backend or data-source changes.
- No heavy parallax, sliders, or animation libraries.
- No redesign into a portfolio-style commercial landing page.
