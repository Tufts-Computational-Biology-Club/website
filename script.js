document.addEventListener('DOMContentLoaded', () => {
  const menuToggleButton = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const yearSpan = document.getElementById('year');

  if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());

  if (menuToggleButton && navMenu) {
    const setOpen = (open) => {
      navMenu.setAttribute('data-open', String(open));
      menuToggleButton.setAttribute('aria-expanded', String(open));
    };
    setOpen(false);
    menuToggleButton.addEventListener('click', () => {
      const open = navMenu.getAttribute('data-open') === 'true';
      setOpen(!open);
    });
    navMenu.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.tagName === 'A') setOpen(false);
    });
  }

  const setExternalLinksNewTab = (container) => {
    if (!container) return;
    const anchors = container.querySelectorAll('a[href]');
    anchors.forEach((a) => {
      const href = a.getAttribute('href') || '';
      const isExternal = /^(?:https?:)?\/\//i.test(href) || href.startsWith('mailto:');
      if (isExternal) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
      }
    });
  };

  const fetchFirstSuccessful = async (paths) => {
    for (const path of paths) {
      try {
        const res = await fetch(path, { cache: 'no-cache' });
        if (res.ok) {
          const text = await res.text();
          return { text, path };
        }
      } catch (_) {
        // try next
      }
    }
    throw new Error('No content found for paths: ' + paths.join(', '));
  };

  // Markdown/HTML loader (requires serving over HTTP/HTTPS)
  const mdTargets = document.querySelectorAll('[data-md]');
  if (mdTargets.length) {
    /** Preference: try .html first where likely, then .md fallback */
    const sectionToPaths = {
      about: ['content/about.md', 'content/about.html'],
      events: ['content/events.md', 'content/events.html'],
      team: ['content/team.md', 'content/team.html'],
      resources: ['content/resources.html', 'content/resources.md'],
      join: ['content/join.md', 'content/join.html'],
    };

    mdTargets.forEach(async (el) => {
      const key = el.getAttribute('data-md');
      const candidates = key ? sectionToPaths[key] : null;
      if (!candidates) return;
      try {
        const { text, path } = await fetchFirstSuccessful(candidates);
        if (/\.md$/i.test(path) && window.marked) {
          el.innerHTML = window.marked.parse(text);
        } else {
          el.innerHTML = text;
        }
        setExternalLinksNewTab(el);
      } catch (err) {
        console.warn('Content load failed:', err);
        setExternalLinksNewTab(el);
      }
    });
  }
});
