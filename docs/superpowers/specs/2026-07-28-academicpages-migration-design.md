# Academicpages Migration Design

## Goal

Convert the current `hao-wang1216.github.io` repository into an `academicpages`-based academic website while preserving the existing homepage content and project assets, and adding a standard academic navigation structure centered on About, Publications, and Projects.

## Scope

This migration will:

- Rebuild the current repository around the `academicpages` Jekyll template structure.
- Keep the current repository as the long-term GitHub Pages site.
- Migrate existing personal profile content into the template's About/homepage flow.
- Add a standard Publications section using the user's current research works.
- Add a Projects section for visual project showcases.
- Re-home image assets and project preview images into template-friendly directories.

This migration will not:

- Preserve the current hand-written `index.html` as the main site entry.
- Add all optional `academicpages` sections such as Talks, Teaching, or Blog in the first pass.
- Introduce any non-template frontend framework or external runtime dependency.

## Template Basis

The target template is `academicpages/academicpages.github.io`, which provides a GitHub Pages and Jekyll-based academic personal website structure with key directories such as `_pages`, `_publications`, `_portfolio`, `images`, and `files`.

Reference:
- GitHub repository: https://github.com/academicpages/academicpages.github.io
- Demo site: https://academicpages.github.io/

## Information Architecture

The migrated site should initially expose this top-level navigation:

- About
- Publications
- Projects

The site's main user journey should be:

1. Land on About page and immediately understand who Hao Wang is.
2. View current research directions and identity information.
3. Navigate to Publications for current papers and under-review works.
4. Navigate to Projects for visual overviews and code/paper links.

## Content Mapping

### About

Current content sources:

- Name, affiliation, email, GitHub
- Biography text
- Research interests
- Portrait image

Target structure:

- Site-wide identity in `_config.yml`
- About page content in `_pages/about.md` or the template's equivalent About/home file
- Portrait image in `images/`
- Short bio and research interests as Markdown content instead of inline HTML

### Publications

Current content sources:

- Three research entries currently shown under Projects
- Titles
- Authors
- Status: under review
- Paper links where available

Target structure:

- One Markdown entry per work in `_publications/`
- Use publication-style metadata fields supported by the template
- Mark unavailable links cleanly rather than showing broken or empty entries
- Keep under-review status visible in the rendered content

### Projects

Current content sources:

- Three research overview images
- Short project descriptions
- Paper/code links

Target structure:

- One Markdown entry per project in `_portfolio/`
- Reuse overview images from the existing repository
- Preserve visual previews and short summaries

## Repository Migration Strategy

The migration should be done in-place inside the current repository.

### Phase 1: Bring in Template Structure

- Replace the repository's single-page static homepage structure with the `academicpages` file layout.
- Preserve current repository-specific assets before restructuring.
- Ensure the resulting repo contains the expected template directories and config files.

### Phase 2: Configure Site Identity

- Update `_config.yml` with:
  - site title
  - name
  - repository path
  - correct GitHub Pages URL
  - email and profile links
  - academic identity details where appropriate

### Phase 3: Migrate Content

- Move portrait and project visuals into template asset locations.
- Rewrite homepage/about content in Markdown.
- Create publication entries from the user's current works.
- Create project entries from the same work set, but with more visual framing.

### Phase 4: Simplify Navigation

- Keep only the pages needed for the initial standard academic site.
- Disable or remove unused top-level pages from navigation if they distract from the first release.

## Proposed File Targets

Expected primary files and directories to touch:

- `_config.yml`
- `_data/navigation.yml`
- `_pages/`
- `_publications/`
- `_portfolio/`
- `images/`
- `files/` if downloadable assets are added later

Likely repository-local legacy files to retire from active use:

- `index.html`
- top-level ad hoc image/layout assumptions tied only to the old page

## Publication Modeling

The current three research items should appear in both of these ways:

- As publication-style scholarly entries in `Publications`
- As visually richer showcase entries in `Projects`

This duplication is intentional because it matches the common academic site pattern:

- Publications answers "what have you written?"
- Projects answers "what have you built or explored visually?"

## Handling Missing Links

Some current Paper/Code links are empty.

Migration rule:

- Do not render broken empty links.
- If a paper or code URL is missing, omit that link from the page output.
- Keep the rest of the entry visible.

## Visual Direction

The migrated site should follow the template's standard academic tone rather than recreate the custom animated card layout from the current `index.html`.

Small visual customizations are acceptable later, but the first migration should prioritize:

- clean academic structure
- template consistency
- easy maintenance
- correct content organization

## Risks and Mitigations

### Risk 1: Template import is larger than current repo

Mitigation:
- Do the migration in a controlled sequence.
- Preserve current content assets before replacing the old page structure.

### Risk 2: Old content does not map one-to-one to template fields

Mitigation:
- Prefer simple Markdown entries over overfitting metadata.
- Use minimal template features first, then enrich later.

### Risk 3: Empty links degrade the site

Mitigation:
- Filter or omit missing links during content migration.

## Success Criteria

The migration is successful when:

- The repository is structured as an `academicpages` site.
- The site can serve as the user's main academic homepage.
- About, Publications, and Projects are visible and coherent.
- Existing research content has been migrated out of the custom static `index.html`.
- No required content from the current homepage is lost.

## Implementation Notes

- The `academicpages` template should be brought in from the upstream repository rather than partially re-created by hand.
- After import, content should be customized for Hao Wang and unnecessary sample content should be removed or replaced.
- The first migration pass should favor correctness and maintainability over deep visual customization.
