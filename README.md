Tufts Computational Biology Club — Website

This is a simple, no-build static site. Most content is Markdown in `website/content/`. You can also use HTML files (e.g., `resources.html`).

Edit content (Markdown or HTML)
- About: `website/content/about.md` (or `about.html`)
- Events: `website/content/events.md` (or `events.html`)
- Team: `website/content/team.md` (or `team.html`)
- Resources: `website/content/resources.html`
- Join: `website/content/join.md` (or `join.html`)

The homepage loads these files client-side. If both HTML and Markdown exist for a section, HTML is preferred for `resources`; others prefer Markdown but will fall back to HTML if present.

Local preview
- Recommended: `python3 -m http.server` then open http://localhost:8000/website/
- Or `npx serve website --listen 8000`

Styling
- Tweak colors/spacing in `styles.css`. Minimal, accessible defaults.

Publishing with GitHub Pages
- Workflow at `.github/workflows/pages.yml` deploys the `website/` folder on push to `main`/`master`.

Contributing
- Drop your HTML at `website/content/resources.html` and refresh. For other sections, edit the `.md` files or provide an `.html` file if you need custom markup.
