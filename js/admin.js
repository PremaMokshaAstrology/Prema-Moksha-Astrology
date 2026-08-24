// ===== BLOG ADMIN =====
// Token-based login: a fine-grained GitHub PAT with Contents: Read+Write
// on the blog repo. Stored in this browser's localStorage only.

const OWNER = 'PremaMokshaAstrology';
const REPO = 'Prema-Moksha-Astrology';
const BRANCH = 'main';
const TOKEN_KEY = 'cw-admin-token';

let token = localStorage.getItem(TOKEN_KEY) || '';
let posts = [];          // { name, path, sha, frontmatter, body }
let editing = null;      // post object being edited, or null for new

const $ = id => document.getElementById(id);

function api(path, options = {}) {
    return fetch(`https://api.github.com/repos/${OWNER}/${REPO}${path}`, {
        ...options,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
            ...(options.headers || {})
        }
    });
}

function setStatus(el, msg, ok) {
    el.textContent = msg;
    el.className = 'admin-status ' + (ok ? 'ok' : 'err');
}

function show(view) {
    $('loginView').classList.toggle('hidden', view !== 'login');
    $('listView').classList.toggle('hidden', view !== 'list');
    $('editView').classList.toggle('hidden', view !== 'edit');
}

function parseFrontmatter(md) {
    const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    const fm = {};
    if (m) {
        m[1].split('\n').forEach(line => {
            const kv = line.match(/^(\w+):\s*"?([^"]*)"?$/);
            if (kv) fm[kv[1]] = kv[2];
        });
        return { frontmatter: fm, body: m[2] };
    }
    return { frontmatter: fm, body: md };
}

function buildMarkdown(title, date, category, body) {
    const esc = title.replace(/"/g, '\\"');
    return `---\ntitle: "${esc}"\ndate: "${date}"\ncategory: "${category}"\n---\n\n${body.trim()}\n`;
}

function slugify(title) {
    return title.toLowerCase().trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '') || 'post';
}

async function loadPosts() {
    $('postList').innerHTML = '<p class="admin-note">Loading posts…</p>';
    const res = await api(`/contents/posts?ref=${BRANCH}`);
    if (res.status === 401 || res.status === 403) {
        localStorage.removeItem(TOKEN_KEY);
        token = '';
        show('login');
        setStatus($('loginStatus'), 'Token rejected — please check it and try again.', false);
        return;
    }
    if (res.status === 404) { posts = []; renderList(); return; }
    if (!res.ok) { $('postList').innerHTML = '<p class="admin-note">Failed to load posts.</p>'; return; }

    const files = (await res.json()).filter(f => f.name.endsWith('.md'))
        .sort((a, b) => b.name.localeCompare(a.name));

    posts = await Promise.all(files.map(async f => {
        const fr = await fetch(f.download_url);
        const md = await fr.text();
        const { frontmatter, body } = parseFrontmatter(md);
        return { name: f.name, path: f.path, sha: f.sha, frontmatter, body };
    }));
    renderList();
}

function renderList() {
    if (!posts.length) {
        $('postList').innerHTML = '<p class="admin-note">No posts yet. Click "+ New Post" to write the first one.</p>';
        return;
    }
    $('postList').innerHTML = '';
    posts.forEach((p, i) => {
        const row = document.createElement('div');
        row.className = 'post-row';
        row.innerHTML = `
            <div class="meta">
                <strong>${p.frontmatter.title || p.name}</strong>
                <span>${p.frontmatter.date || ''} ${p.frontmatter.category ? '· ' + p.frontmatter.category : ''} · ${p.name}</span>
            </div>
            <div class="row-actions">
                <button class="btn" data-edit="${i}">Edit</button>
                <button class="btn btn-danger" data-del="${i}">Delete</button>
            </div>`;
        $('postList').appendChild(row);
    });
    $('postList').querySelectorAll('[data-edit]').forEach(b =>
        b.addEventListener('click', () => openEditor(posts[+b.dataset.edit])));
    $('postList').querySelectorAll('[data-del]').forEach(b =>
        b.addEventListener('click', () => deletePost(posts[+b.dataset.del])));
}

function openEditor(post) {
    editing = post || null;
    $('fTitle').value = post?.frontmatter.title || '';
    $('fDate').value = post?.frontmatter.date || new Date().toISOString().slice(0, 10);
    $('fCategory').value = post?.frontmatter.category || 'Transit';
    $('fBody').value = post?.body.trim() || '';
    $('previewBox').classList.add('hidden');
    setStatus($('editStatus'), '', true);
    show('edit');
}

async function savePost() {
    const title = $('fTitle').value.trim();
    const date = $('fDate').value;
    const category = $('fCategory').value;
    const body = $('fBody').value;
    if (!title || !date || !body.trim()) {
        setStatus($('editStatus'), 'Title, date, and body are all required.', false);
        return;
    }

    const btn = $('saveBtn');
    btn.disabled = true;
    setStatus($('editStatus'), 'Publishing…', true);

    const md = buildMarkdown(title, date, category, body);
    const base64 = btoa(unescape(encodeURIComponent(md)));

    // Keep the existing filename when editing (unless the date changed the prefix)
    let filename;
    if (editing) {
        const oldSlug = editing.name.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
        filename = `${date}-${oldSlug}.md`;
    } else {
        filename = `${date}-${slugify(title)}.md`;
    }

    try {
        const payload = {
            message: editing ? `Update post: ${title}` : `New post: ${title}`,
            content: base64,
            branch: BRANCH
        };
        if (editing && editing.name === filename) payload.sha = editing.sha;

        const res = await api(`/contents/posts/${filename}`, {
            method: 'PUT',
            body: JSON.stringify(payload)
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.message || `GitHub returned ${res.status}`);
        }

        // If the date prefix changed, delete the old file
        if (editing && editing.name !== filename) {
            await api(`/contents/posts/${editing.name}`, {
                method: 'DELETE',
                body: JSON.stringify({ message: `Rename post (was ${editing.name})`, sha: editing.sha, branch: BRANCH })
            });
        }

        setStatus($('editStatus'), 'Published! It will appear on the blog within a minute or two.', true);
        editing = null;
        await loadPosts();
        setTimeout(() => show('list'), 1200);
    } catch (e) {
        setStatus($('editStatus'), 'Save failed: ' + e.message, false);
    } finally {
        btn.disabled = false;
    }
}

async function deletePost(post) {
    if (!confirm(`Delete "${post.frontmatter.title || post.name}"? This cannot be undone.`)) return;
    const res = await api(`/contents/posts/${post.name}`, {
        method: 'DELETE',
        body: JSON.stringify({ message: `Delete post: ${post.frontmatter.title || post.name}`, sha: post.sha, branch: BRANCH })
    });
    if (res.ok) {
        await loadPosts();
    } else {
        alert('Delete failed. Please try again.');
    }
}

// ===== EVENTS =====
$('loginBtn').addEventListener('click', async () => {
    token = $('tokenInput').value.trim();
    if (!token) return;
    setStatus($('loginStatus'), 'Checking token…', true);
    const res = await api('');
    if (res.ok) {
        localStorage.setItem(TOKEN_KEY, token);
        show('list');
        loadPosts();
    } else {
        setStatus($('loginStatus'), 'Token rejected — check that it has Contents access to the repo.', false);
    }
});
$('tokenInput').addEventListener('keydown', e => { if (e.key === 'Enter') $('loginBtn').click(); });

$('newPostBtn').addEventListener('click', () => openEditor(null));
$('refreshBtn').addEventListener('click', loadPosts);
$('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem(TOKEN_KEY);
    token = '';
    show('login');
});
$('saveBtn').addEventListener('click', savePost);
$('cancelBtn').addEventListener('click', () => { editing = null; show('list'); });
$('previewBtn').addEventListener('click', () => {
    const box = $('previewBox');
    box.classList.toggle('hidden');
    if (!box.classList.contains('hidden')) {
        $('previewContent').innerHTML = marked.parse($('fBody').value);
    }
});

// Auto-login if a token is already stored
if (token) {
    show('list');
    loadPosts();
} else {
    show('login');
}
