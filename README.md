# Harun Ar Rasyid — Engineering Portfolio

Static portfolio for Harun Ar Rasyid, focused on selected IoT, embedded-system, and computer-vision work. The visual direction combines industrial product graphics with editorial typography while keeping the site fast and dependency-free.

## Quick start

No install or build step is required.

```powershell
python -m http.server 8000
```

Open `http://localhost:8000` from the `portfolio-harun` directory.

## Validation

```powershell
./verify-portfolio.ps1
node --check ./js/app.js
node --check ./js/config.js
```

The verification script checks the information architecture, selected-project count, SEO metadata, placeholders, reduced-motion support, internal anchors, local resources, and external-link safety.

## Architecture

```text
portfolio-harun/
├── assets/images/       # Profile and project media
├── css/style.css        # Complete responsive visual system
├── js/app.js            # Navigation, reveal behavior, and current year
├── js/config.js         # Full project archive / legacy configuration data
├── index.html           # Semantic, crawlable homepage content
├── robots.txt
├── sitemap.xml
└── verify-portfolio.ps1
```

The homepage keeps selected work in semantic HTML instead of rendering it client-side. This makes the most important project content visible to crawlers and usable when JavaScript is unavailable. JavaScript is limited to progressive enhancement.

The project intentionally stays on native HTML, CSS, and JavaScript. A framework would add a build pipeline and client overhead without improving this single-page portfolio. Project case-study routes can justify revisiting that decision later.

## Content updates

- Selected homepage projects are edited directly in `index.html` so their content remains crawlable.
- The complete 16-project archive remains in `js/config.js` and `../portfolio_projects_nh_iot.md`.
- Use real, optimized local images where available. For work without valid imagery, use the existing technical-diagram treatment rather than generic stock art.
- Do not add metrics, clients, awards, links, or results unless they are supported by repository data.

## Design constraints

- Warm off-white, black, gray, and restrained orange.
- One system sans stack and one system monospace stack; no remote font request.
- No icon library, WebGL, animation dependency, iframe media embed, or scroll hijacking.
- Motion uses only opacity and transforms and honors `prefers-reduced-motion`.
- Responsive coverage is defined from 320px through wide desktop layouts.
