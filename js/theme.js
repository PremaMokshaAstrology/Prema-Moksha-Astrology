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
