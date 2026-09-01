// ===== THEME SWITCH (light default / beige / dark) =====
const THEME_KEY = 'cw-theme';
const THEMES = ['light', 'beige', 'dark'];

function applyTheme(theme) {
    if (!THEMES.includes(theme)) theme = 'light';
    if (theme === 'light') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
    document.querySelectorAll('#themeSwitch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    swapThemeImage(theme);
}

// Swap the About photo per theme:
//   light (default) -> images/about-light.jpg
//   beige           -> images/about.jpg (waterfall)
//   dark            -> images/about-dark.jpg
// Falls back to about.jpg if a themed photo hasn't been uploaded yet.
function swapThemeImage(theme) {
    const img = document.querySelector('.about-image img');
    if (!img) return;
    const fallback = 'images/about.jpg';
    if (theme === 'beige') { img.src = fallback; return; }
    const themed = `images/about-${theme}.jpg`;
    const test = new Image();
    test.onload = () => { img.src = themed; };
    test.onerror = () => { img.src = fallback; };
    test.src = themed;
}

function currentTheme() {
    return localStorage.getItem(THEME_KEY) || 'light';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#themeSwitch button').forEach(btn => {
        btn.addEventListener('click', () => {
            localStorage.setItem(THEME_KEY, btn.dataset.theme);
            applyTheme(btn.dataset.theme);
        });
    });
    applyTheme(currentTheme());
});
