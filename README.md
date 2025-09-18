Tufts Computational Biology Club — Website

This is a simple, no-build static site you can edit directly in GitHub.

Quick start
- Edit content in `index.html` (sections: About, Events, Team, Resources, Join)
- Tweak styles in `styles.css` (colors and spacing live in `:root` variables)
- Small behaviors live in `script.js` (mobile menu, year)

Local preview (optional)
- Using Python: `python3 -m http.server` then open `http://localhost:8000/website/`
- Or just open `website/index.html` directly in your browser

Publishing with GitHub Pages
- We use a GitHub Actions workflow at `.github/workflows/pages.yml`
- On every push to `main` (or manual run), it deploys the site to Pages
- In your repo settings: Pages → Build and deployment → Source: GitHub Actions

Editing content
- Events: update the example cards under the `#events` section
- Team: duplicate a `.person` block under `#team` and change initials/name/role
- Resources: add links under `.resource-list`
- Join: replace placeholder links with real mailing list/Discord/email

Brand and theme
- Colors are defined in `styles.css` in `:root` (light/dark supported)
- Primary brand color is `--brand`; text colors are `--fg` and `--muted`

Accessibility & mobile
- Skip link, semantic headings, and keyboard-friendly mobile menu are included
- The layout is responsive with simple breakpoints (<900px, <680px)

Questions
- Open an issue or PR in this repo, or contact the club leads
