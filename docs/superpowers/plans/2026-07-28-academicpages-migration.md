# Academicpages Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the current `hao-wang1216.github.io` repository into an `academicpages`-based academic website with About, Publications, and Projects sections populated from the current site content.

**Architecture:** Replace the ad hoc static homepage with the upstream `academicpages` Jekyll repository structure, then customize the template configuration, navigation, pages, publications, portfolio entries, and images for Hao Wang. Keep the migration focused on the initial academic structure rather than custom design work.

**Tech Stack:** GitHub Pages, Jekyll, academicpages template, Markdown, YAML, static images

---

## File Structure

- Create or replace from template:
  - `_config.yml`
  - `_data/navigation.yml`
  - `_pages/`
  - `_publications/`
  - `_portfolio/`
  - `images/`
  - other template support files required by `academicpages`
- Preserve and migrate from current repo:
  - `WangHao1.jpg`
  - `UniCOD/Overview.png`
  - `UniSAM_COD/overview.png`
  - `CPGNet/overview.png`
- Retire from active use:
  - `index.html`

### Task 1: Snapshot Current Content and Import the Upstream Template

**Files:**
- Modify: repository root structure
- Verify: local file tree after import

- [ ] **Step 1: Record the current site content that must be migrated**

Capture these content items from the current homepage:

```text
Name: Hao Wang
Affiliation: Dalian Maritime University
Location: Dalian, China
Email: King.Whao@outlook.com
GitHub: https://github.com/hao-wang1216?tab=repositories
Biography paragraph
Research interests list
Three research works with title, authors, status, summary, image, paper/code links
```

- [ ] **Step 2: Clone the upstream template into a temporary local directory**

Run:

```powershell
git clone https://github.com/academicpages/academicpages.github.io.git "$env:TEMP\\academicpages-template"
```

Expected:

```text
Cloning into a temporary directory succeeds
The cloned directory contains template files such as _config.yml, _pages, _publications, and _portfolio
```

- [ ] **Step 3: Remove the temporary clone's .git directory so only template files remain**

Run:

```powershell
Remove-Item -LiteralPath "$env:TEMP\\academicpages-template\\.git" -Recurse -Force
```

Expected:

```text
The template copy no longer contains upstream git history
```

- [ ] **Step 4: Copy the template files into the current repository**

Run:

```powershell
Get-ChildItem -Force -LiteralPath "$env:TEMP\\academicpages-template" | ForEach-Object {
  Copy-Item -LiteralPath $_.FullName -Destination "D:\\Git-Repository\\hao-wang1216" -Recurse -Force
}
```

Expected:

```text
The current repository now contains the academicpages file structure
```

- [ ] **Step 5: Verify the imported structure**

Run:

```powershell
Get-ChildItem -Force -LiteralPath "D:\\Git-Repository\\hao-wang1216"
```

Expected:

```text
Template directories such as _pages, _publications, _portfolio, assets, and images are visible in the repository root
```

### Task 2: Configure Site Identity and Navigation

**Files:**
- Modify: `_config.yml`
- Modify: `_data/navigation.yml`
- Verify: file contents

- [ ] **Step 1: Replace the template identity fields in `_config.yml`**

Set the configuration to values like:

```yml
title: "Hao Wang"
name: "Hao Wang"
description: "Academic homepage for Hao Wang"
url: "https://hao-wang1216.github.io"
baseurl: ""
repository: "hao-wang1216/hao-wang1216.github.io"
email: "King.Whao@outlook.com"
github_username: "hao-wang1216"
location: "Dalian, China"
employer: "Dalian Maritime University"
```

- [ ] **Step 2: Remove or disable template owner/demo data that does not belong to Hao Wang**

Clean out placeholder values such as:

```text
Template author names
Demo biographies
Placeholder academic affiliations
Unused social links
```

- [ ] **Step 3: Simplify navigation to the initial site scope**

Set `_data/navigation.yml` to only include:

```yml
main:
  - title: "About"
    url: /about/
  - title: "Publications"
    url: /publications/
  - title: "Projects"
    url: /projects/
```

- [ ] **Step 4: Verify configuration files are customized for the current repository**

Run:

```powershell
Select-String -Path "D:\\Git-Repository\\hao-wang1216\\_config.yml","D:\\Git-Repository\\hao-wang1216\\_data\\navigation.yml" -Pattern "Hao Wang|hao-wang1216|academicpages|About|Publications|Projects"
```

Expected:

```text
Hao Wang and hao-wang1216 values are present
Navigation only includes About, Publications, and Projects
Template placeholder identity strings are no longer the active site identity
```

### Task 3: Create the About Page and Migrate Personal Profile Content

**Files:**
- Modify: `_pages/about.md` or template-equivalent about page
- Create or modify: `images/` portrait asset path
- Verify: Markdown content and image placement

- [ ] **Step 1: Place the portrait image into the template image directory**

Copy the image into the site image path, for example:

```powershell
Copy-Item -LiteralPath "D:\\Git-Repository\\hao-wang1216\\WangHao1.jpg" -Destination "D:\\Git-Repository\\hao-wang1216\\images\\WangHao1.jpg" -Force
```

Expected:

```text
The portrait image exists under images/
```

- [ ] **Step 2: Write the About page using the current profile content**

The About page should include:

```markdown
# Hao Wang

Researcher / Undergraduate Student at Dalian Maritime University, Dalian, China.

I am currently an undergraduate student at Dalian Maritime University, majoring in Computer Science and Technology.

## Research Interests

- Camouflaged object detection and salient object detection
- Visual multimodal large models and multimodal representation learning
- Weakly supervised learning for remote sensing change detection

## Contact

- Email: [King.Whao@outlook.com](mailto:King.Whao@outlook.com)
- GitHub: [hao-wang1216](https://github.com/hao-wang1216?tab=repositories)
```

- [ ] **Step 3: Point the About page front matter to the portrait image if the template supports profile metadata**

Use front matter shaped like:

```yml
---
layout: archive
title: "About"
permalink: /about/
author_profile: true
---
```

If the template uses author metadata instead, put the portrait there instead of duplicating it in body content.

- [ ] **Step 4: Verify the About page content exists and references the correct image path**

Run:

```powershell
Select-String -Path "D:\\Git-Repository\\hao-wang1216\\_pages\\about.md" -Pattern "Hao Wang|Dalian Maritime University|King.Whao@outlook.com|Research Interests"
```

Expected:

```text
The page contains Hao Wang's profile details and research interests
```

### Task 4: Create Publication Entries for Current Works

**Files:**
- Create: `_publications/*.md`
- Verify: publication entry contents

- [ ] **Step 1: Create one publication Markdown file per current research work**

Create entries for:

```text
Toward Unified Cross-Modal Camouflaged Object Detection
Modality-Agnostic Prompt Learning for Multi-Modal Camouflaged Object Detection
Conditional Polarization Guidance for Camouflaged Object Detection
```

- [ ] **Step 2: Use template-compatible front matter for publication entries**

Each file should contain front matter like:

```yml
---
title: "Toward Unified Cross-Modal Camouflaged Object Detection"
collection: publications
permalink: /publication/unified-cross-modal-cod
date: 2026-01-01
venue: "Under review"
paperurl: ""
citation: "Hao Wang. Toward Unified Cross-Modal Camouflaged Object Detection. Under review."
---
```

Use the actual available paper URL where present, and omit empty links from the body if there is no URL.

- [ ] **Step 3: Add short body summaries to each publication**

Use body content like:

```markdown
This work addresses camouflaged object detection by developing a unified multimodal framework that adapts to varying auxiliary modality availability.
```

- [ ] **Step 4: Verify the publication files were created**

Run:

```powershell
Get-ChildItem -LiteralPath "D:\\Git-Repository\\hao-wang1216\\_publications"
```

Expected:

```text
Three Hao Wang publication entries exist in the collection directory
```

### Task 5: Create Project Showcase Entries

**Files:**
- Create: `_portfolio/*.md`
- Verify: project entry contents

- [ ] **Step 1: Move or reference project overview images from stable paths**

Keep using the existing image assets:

```text
UniCOD/Overview.png
UniSAM_COD/overview.png
CPGNet/overview.png
```

If the template expects a different static asset location, copy them to a portfolio-friendly image directory.

- [ ] **Step 2: Create one project entry per research work**

Each file should use front matter like:

```yml
---
title: "Toward Unified Cross-Modal Camouflaged Object Detection"
collection: portfolio
permalink: /project/unified-cross-modal-cod
excerpt: "Unified multimodal camouflaged object detection under varying auxiliary modality availability."
---
```

- [ ] **Step 3: Add body content with image, summary, and available links**

Use Markdown content like:

```markdown
![Toward Unified Cross-Modal Camouflaged Object Detection](/images/projects/unified-cross-modal-cod.png)

This work addresses camouflaged object detection by developing a unified multimodal framework that adapts to varying auxiliary modality availability.

- Paper: available when released
- Code: available when released
```

Only include `Paper` or `Code` list items when a real URL exists.

- [ ] **Step 4: Verify the portfolio files were created**

Run:

```powershell
Get-ChildItem -LiteralPath "D:\\Git-Repository\\hao-wang1216\\_portfolio"
```

Expected:

```text
Three project entries exist in the portfolio collection
```

### Task 6: Remove Template Sample Content and Verify the Migrated Site Structure

**Files:**
- Modify or delete: template sample files not needed for first release
- Verify: final repository structure and content references

- [ ] **Step 1: Remove unused or distracting sample content from template collections and pages**

Clean out template demo content so that the live site emphasizes only:

```text
About
Publications
Projects
```

- [ ] **Step 2: Retire the old custom static homepage from active use**

Either delete `index.html` or leave it non-authoritative if the template requires a different landing page.

Preferred command:

```powershell
Remove-Item -LiteralPath "D:\\Git-Repository\\hao-wang1216\\index.html" -Force
```

- [ ] **Step 3: Verify the final repository state**

Run:

```powershell
Get-ChildItem -Force -LiteralPath "D:\\Git-Repository\\hao-wang1216"
git status --short
```

Expected:

```text
The repository clearly looks like an academicpages site
The current content is present in About, Publications, and Projects
The old custom homepage is no longer the primary site implementation
```

- [ ] **Step 4: If a local Jekyll preview toolchain is available, run a local build**

Run:

```powershell
bundle exec jekyll serve
```

Expected:

```text
The site builds successfully
If bundler or Ruby is unavailable, report that limitation instead of claiming the build passed
```
