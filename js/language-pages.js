// Keep the existing hand-written translations and extend the language chooser
// to editorial pages that do not yet have native Portuguese/Spanish editions.
// Long-form articles use Google Translate's consumer website translator, not
// the discontinued embedded Website Translator widget.
(function () {
  'use strict';

  const preferenceKey = 'cw-lang';
  const translatedPages = new Set([
    '/horoscopes',
    '/weekly-horoscope',
    '/november-2026-astrological-overview',
    '/blog'
  ]);

  const normalizedPath = (path) =>
    path.replace(/\.html$/i, '').replace(/\/$/, '') || '/';

  function preferredLanguage() {
    const saved = localStorage.getItem(preferenceKey);
    return saved === 'pt' || saved === 'es' ? saved : 'en';
  }

  function internalArticle(url) {
    if (url.origin !== window.location.origin) return false;
    return translatedPages.has(normalizedPath(url.pathname));
  }

  function translatedUrl(original, language) {
    const link = new URL('https://translate.google.com/translate');
    link.searchParams.set('sl', 'en');
    link.searchParams.set('tl', language);
    link.searchParams.set('u', original.href);
    return link.href;
  }

  // On an article, offer the same EN / PT / ES control as on the homepage.
  // Language selections for these long texts are transparently machine translations.
  const existingSwitch = document.getElementById('langSwitch');
  if (!existingSwitch && internalArticle(new URL(window.location.href))) {
    const nav = document.getElementById('navLinks');
    if (nav) {
      const item = document.createElement('li');
      const group = document.createElement('div');
      group.id = 'langSwitch';
      group.className = 'lang-switch';
      group.setAttribute('role', 'group');
      group.setAttribute('aria-label', 'Language / Idioma');
      [
        ['en', 'EN', 'English original'],
        ['pt', 'PT', 'Português — tradução automática'],
        ['es', 'ES', 'Español — traducción automática']
      ].forEach(([lang, label, description]) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.lang = lang;
        button.textContent = label;
        button.title = description;
        button.setAttribute('aria-label', description);
        if (preferredLanguage() === lang) button.classList.add('active');
        button.addEventListener('click', () => {
          localStorage.setItem(preferenceKey, lang);
          if (lang === 'en') {
            window.location.assign(window.location.pathname + window.location.search + window.location.hash);
          } else {
            window.location.assign(translatedUrl(new URL(window.location.href), lang));
          }
        });
        group.appendChild(button);
      });
      item.appendChild(group);
      nav.appendChild(item);
    }
  }

  // A language chosen on the homepage should be carried into article pages
  // instead of silently reverting them to English.
  if (normalizedPath(window.location.pathname) !== '/blog' &&
      internalArticle(new URL(window.location.href)) &&
      preferredLanguage() !== 'en' &&
      new URLSearchParams(window.location.search).get('original') !== '1') {
    window.location.replace(translatedUrl(new URL(window.location.href), preferredLanguage()));
    return;
  }

  // Translate navigations to editorial pages, including dynamic blog posts.
  // Homepage and consultation pages retain their existing, human-written copy.
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 ||
        event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const anchor = event.target.closest('a[href]');
    if (!anchor || anchor.hasAttribute('download') ||
        (anchor.target && anchor.target !== '_self')) return;
    const destination = new URL(anchor.href);
    if (!internalArticle(destination) || preferredLanguage() === 'en') return;

    // Keep in-page horoscope sign pickers and section anchors working.
    if (destination.pathname === window.location.pathname &&
        destination.search === window.location.search &&
        destination.hash) return;

    event.preventDefault();
    window.location.assign(translatedUrl(destination, preferredLanguage()));
  }, true);

  // The blog's native menu is translated, but its dynamically loaded posts
  // are still in English. Provide a full-page translation for that content.
  if (normalizedPath(window.location.pathname) === '/blog') {
    document.querySelectorAll('#langSwitch button').forEach((button) => {
      button.addEventListener('click', () => {
        if (button.dataset.lang === 'pt' || button.dataset.lang === 'es') {
          window.location.assign(translatedUrl(new URL(window.location.href), button.dataset.lang));
        }
      });
    });
  }
})();
