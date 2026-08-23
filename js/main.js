// ===== CONFIG =====
// Replace these with your GitHub username and repo name after creating your repo
const GITHUB_OWNER = 'PremaMokshaAstrology';
const GITHUB_REPO = 'Prema-Moksha-Astrology';
const GITHUB_BRANCH = 'main';

// ===== UI STRINGS (EN / PT) =====
const LANG = localStorage.getItem('cw-lang') || 'en';
const STR = {
    en: {
        loadingLatest: 'Loading latest posts...',
        loadingPosts: 'Loading posts...',
        loadingPost: 'Loading post...',
        needSetup: 'Latest posts will appear here once you connect your GitHub repository.',
        needSetupBlog: 'Posts will appear here once you connect your GitHub repository.',
        needSetupPost: 'Post will appear here once you connect your GitHub repository.',
        setupHint: 'Update js/main.js with your GitHub username and repo name.',
        loadError: 'Unable to load posts. Make sure your GitHub repository is set up correctly.',
        postError: 'Unable to load this post. It may have been removed or renamed.',
        readMore: 'Read Article',
        backToPosts: '← Back to All Posts',
        untitled: 'Untitled',
        sending: 'Sending...',
        sent: 'Message sent! I\'ll get back to you soon. ✦',
        sendFailed: 'Something went wrong. Please try again or email premamokshaastrology@gmail.com directly.'
    },
    pt: {
        loadingLatest: 'Carregando últimos posts...',
        loadingPosts: 'Carregando posts...',
        loadingPost: 'Carregando post...',
        needSetup: 'Os últimos posts aparecerão aqui quando o repositório do GitHub estiver conectado.',
        needSetupBlog: 'Os posts aparecerão aqui quando o repositório do GitHub estiver conectado.',
        needSetupPost: 'O post aparecerá aqui quando o repositório do GitHub estiver conectado.',
        setupHint: 'Atualize js/main.js com seu usuário do GitHub e nome do repositório.',
        loadError: 'Não foi possível carregar os posts. Verifique se o repositório do GitHub está configurado corretamente.',
        postError: 'Não foi possível carregar este post. Ele pode ter sido removido ou renomeado.',
        readMore: 'Ler Artigo',
        backToPosts: '← Voltar para Todos os Posts',
        untitled: 'Sem título',
        sending: 'Enviando...',
        sent: 'Mensagem enviada! Responderei em breve. ✦',
        sendFailed: 'Algo deu errado. Tente novamente ou escreva diretamente para premamokshaastrology@gmail.com.'
    },
    es: {
        loadingLatest: 'Cargando últimos posts...',
        loadingPosts: 'Cargando posts...',
        loadingPost: 'Cargando post...',
        needSetup: 'Los últimos posts aparecerán aquí cuando el repositorio de GitHub esté conectado.',
        needSetupBlog: 'Los posts aparecerán aquí cuando el repositorio de GitHub esté conectado.',
        needSetupPost: 'El post aparecerá aquí cuando el repositorio de GitHub esté conectado.',
        setupHint: 'Actualiza js/main.js con tu usuario de GitHub y nombre del repositorio.',
        loadError: 'No se pudieron cargar los posts. Verifica que el repositorio de GitHub esté configurado correctamente.',
        postError: 'No se pudo cargar este post. Puede haber sido eliminado o renombrado.',
        readMore: 'Leer Artículo',
        backToPosts: '← Volver a Todos los Posts',
        untitled: 'Sin título',
        sending: 'Enviando...',
        sent: '¡Mensaje enviado! Te responderé pronto. ✦',
        sendFailed: 'Algo salió mal. Inténtalo de nuevo o escribe directamente a premamokshaastrology@gmail.com.'
    }
}[LANG] || {};

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        if (mobileMenuBtn) mobileMenuBtn.textContent = '☰';
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== STARS =====
const starsContainer = document.getElementById('stars');
if (starsContainer) {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (2 + Math.random() * 4) + 's');
        star.style.setProperty('--delay', Math.random() * 5 + 's');
        star.style.width = (1 + Math.random() * 2) + 'px';
        star.style.height = star.style.width;
        starsContainer.appendChild(star);
    }
}

// ===== SCROLL ANIMATIONS =====
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

fadeElements.forEach(el => observer.observe(el));

// ===== CONTACT FORM (Web3Forms) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const status = document.getElementById('formStatus');
        const btn = contactForm.querySelector('button[type="submit"]');
        status.textContent = STR.sending;
        status.className = 'form-status';
        btn.disabled = true;
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: new FormData(contactForm)
            });
            const data = await response.json();
            if (data.success) {
                status.textContent = STR.sent;
                status.classList.add('success');
                contactForm.reset();
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (err) {
            status.textContent = STR.sendFailed;
            status.classList.add('error');
            console.error('Contact form error:', err);
        } finally {
            btn.disabled = false;
        }
    });
}

// ===== LATEST BLOG POSTS (for homepage) =====
async function loadLatestPosts() {
    const container = document.getElementById('latest-posts');
    if (!container) return;

    if (GITHUB_OWNER === 'YOUR_GITHUB_USERNAME') {
        container.innerHTML = `
            <div class="blog-error">
                <p>${STR.needSetup}</p>
                <p style="font-size: 0.9rem; margin-top: 1rem;">${STR.setupHint}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `<div class="blog-loading">${STR.loadingLatest}</div>`;

    try {
        const response = await fetch(
            `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/posts?ref=${GITHUB_BRANCH}`
        );
        
        if (!response.ok) throw new Error('Failed to load posts');
        
        const files = await response.json();
        const mdFiles = files.filter(f => f.name.endsWith('.md')).sort((a, b) => b.name.localeCompare(a.name));
        const latestFiles = mdFiles.slice(0, 3);

        container.innerHTML = '';

        for (const file of latestFiles) {
            const postResponse = await fetch(file.download_url);
            const markdown = await postResponse.text();
            const { frontmatter, body } = parseFrontmatter(markdown);
            const excerpt = body.replace(/[#*`]/g, '').substring(0, 150) + '...';
            const postSlug = file.name.replace('.md', '');

            const card = document.createElement('article');
            card.className = 'blog-card';
            card.innerHTML = `
                <div class="blog-text">
                    <p class="date">${frontmatter.date || ''}</p>
                    <h3><a href="blog.html?post=${postSlug}">${frontmatter.title || STR.untitled}</a></h3>
                    <p>${excerpt}</p>
                    <a href="blog.html?post=${postSlug}" class="read-more">${STR.readMore}</a>
                </div>
            `;
            container.appendChild(card);
        }
    } catch (err) {
        container.innerHTML = `
            <div class="blog-error">
                <p>${STR.loadError}</p>
            </div>
        `;
        console.error('Blog load error:', err);
    }
}

// ===== BLOG PAGE =====
async function loadBlogPosts() {
    const container = document.getElementById('blog-posts');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postSlug = urlParams.get('post');

    if (postSlug) {
        await loadSinglePost(postSlug, container);
    } else {
        await loadPostList(container);
    }
}

async function loadPostList(container) {
    if (GITHUB_OWNER === 'YOUR_GITHUB_USERNAME') {
        container.innerHTML = `
            <div class="blog-error" style="grid-column: 1 / -1;">
                <p>${STR.needSetupBlog}</p>
                <p style="font-size: 0.9rem; margin-top: 1rem;">${STR.setupHint}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `<div class="blog-loading" style="grid-column: 1 / -1;">${STR.loadingPosts}</div>`;

    try {
        const response = await fetch(
            `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/posts?ref=${GITHUB_BRANCH}`
        );
        
        if (!response.ok) throw new Error('Failed to load posts');
        
        const files = await response.json();
        const mdFiles = files.filter(f => f.name.endsWith('.md')).sort((a, b) => b.name.localeCompare(a.name));

        container.innerHTML = '';
        container.className = 'blog-list';

        for (const file of mdFiles) {
            const postResponse = await fetch(file.download_url);
            const markdown = await postResponse.text();
            const { frontmatter, body } = parseFrontmatter(markdown);
            const excerpt = body.replace(/[#*`]/g, '').substring(0, 200) + '...';
            const postSlug = file.name.replace('.md', '');

            const card = document.createElement('article');
            card.className = 'blog-card';
            card.innerHTML = `
                <div class="blog-text">
                    <p class="date">${frontmatter.date || ''}</p>
                    <h3><a href="blog.html?post=${postSlug}">${frontmatter.title || STR.untitled}</a></h3>
                    <p>${excerpt}</p>
                    <a href="blog.html?post=${postSlug}" class="read-more">${STR.readMore}</a>
                </div>
            `;
            container.appendChild(card);
        }
    } catch (err) {
        container.innerHTML = `
            <div class="blog-error" style="grid-column: 1 / -1;">
                <p>${STR.loadError}</p>
                <p style="font-size: 0.9rem; margin-top: 1rem;">Error: ${err.message}</p>
            </div>
        `;
        console.error('Blog load error:', err);
    }
}

async function loadSinglePost(slug, container) {
    if (GITHUB_OWNER === 'YOUR_GITHUB_USERNAME') {
        container.innerHTML = `
            <div class="blog-error">
                <p>${STR.needSetupPost}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `<div class="blog-loading">${STR.loadingPost}</div>`;

    try {
        const response = await fetch(
            `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/posts/${slug}.md`
        );
        
        if (!response.ok) throw new Error('Post not found');
        
        const markdown = await response.text();
        const { frontmatter, body } = parseFrontmatter(markdown);

        container.innerHTML = '';
        container.className = 'blog-post-full';

        container.innerHTML = `
            <p class="date">${frontmatter.date || ''} ${frontmatter.category ? '· ' + frontmatter.category : ''}</p>
            <h1>${frontmatter.title || STR.untitled}</h1>
            <div class="post-content">${marked.parse(body)}</div>
            <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(212, 175, 55, 0.2);">
                <a href="blog.html" class="btn">${STR.backToPosts}</a>
            </div>
        `;
    } catch (err) {
        container.innerHTML = `
            <div class="blog-error">
                <p>${STR.postError}</p>
                <a href="blog.html" class="btn" style="margin-top: 1rem;">${STR.backToPosts}</a>
            </div>
        `;
        console.error('Post load error:', err);
    }
}

// ===== FRONTMATTER PARSER =====
function parseFrontmatter(markdown) {
    const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (match) {
        try {
            const yaml = match[1];
            const lines = yaml.split('\n');
            const frontmatter = {};
            for (const line of lines) {
                const colonIndex = line.indexOf(':');
                if (colonIndex > 0) {
                    const key = line.substring(0, colonIndex).trim();
                    let value = line.substring(colonIndex + 1).trim();
                    if ((value.startsWith('"') && value.endsWith('"')) || 
                        (value.startsWith("'") && value.endsWith("'"))) {
                        value = value.slice(1, -1);
                    }
                    frontmatter[key] = value;
                }
            }
            return { frontmatter, body: match[2] };
        } catch (e) {
            return { frontmatter: {}, body: markdown };
        }
    }
    return { frontmatter: {}, body: markdown };
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    loadLatestPosts();
    loadBlogPosts();
});
