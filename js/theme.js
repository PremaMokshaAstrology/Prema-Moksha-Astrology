// ===== THEME SWITCH (beige default / light / dark) =====
const THEME_KEY = 'cw-theme';
const THEMES = ['beige', 'light', 'dark'];

function applyTheme(theme) {
    if (!THEMES.includes(theme)) theme = 'beige';
    if (theme === 'beige') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
    document.querySelectorAll('#themeSwitch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    swapThemeImage(theme);
}

// Swap the About photo per theme (about-light.jpg / about-dark.jpg),
// falling back to about.jpg if the themed photo doesn't exist.
function swapThemeImage(theme) {
    const img = document.querySelector('.about-image img');
    if (!img) return;
    const fallback = 'images/about.jpg';
    const themed = theme === 'beige' ? fallback : `images/about-${theme}.jpg`;
    if (themed === fallback) { img.src = fallback; return; }
    const test = new Image();
    test.onload = () => { img.src = themed; };
    test.onerror = () => { img.src = fallback; };
    test.src = themed;
}

function currentTheme() {
    return localStorage.getItem(THEME_KEY) || 'beige';
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
