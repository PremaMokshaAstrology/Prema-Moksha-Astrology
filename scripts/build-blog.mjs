// Build complete article responses from the same Markdown used by the CMS.
// Marked 17.0.5 is vendored with its MIT license; no install is required.
import { readFile, readdir, writeFile, mkdir, rename } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { marked } from '../vendor/marked.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://premamokshaastrology.com';
const escape = value => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);
const json = value => JSON.stringify(value).replace(/</g, '\\u003c');
const articleUrl = slug => `${origin}/blog?post=${encodeURIComponent(slug)}`;

async function writeIfChanged(path, content) {
    try {
        if (await readFile(path, 'utf8') === content) return;
    } catch (error) {
        if (error.code !== 'ENOENT') throw error;
    }
    // Atomic writes keep asset readers and concurrent development builds from
    // observing a temporarily empty sitemap or post index.
    const temporary = `${path}.${process.pid}.tmp`;
    await writeFile(temporary, content);
    await rename(temporary, path);
}

export function parsePost(markdown) {
    const match = markdown.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) throw new Error('Post is missing YAML frontmatter');
    const metadata = {};
    for (const line of match[1].split('\n')) {
        const field = line.match(/^([\w-]+):\s*(.*)$/);
        if (!field) continue;
        let value = field[2].trim();
        if (value.startsWith('"') && value.endsWith('"')) value = JSON.parse(value);
        else if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1).replace(/''/g, "'");
        metadata[field[1]] = value;
    }
    if (!metadata.title || !/^\d{4}-\d{2}-\d{2}/.test(metadata.date || '')) {
        throw new Error('Post requires a title and an ISO publish date');
    }
    return { ...metadata, body: match[2], html: marked.parse(match[2]) };
}

function plainText(html) {
    return html.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
        .replace(/&#39;|&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
        .replace(/\s+/g, ' ').trim();
}

function description(post) {
    const firstParagraph = post.html.match(/<p>([\s\S]*?)<\/p>/)?.[1] || post.html;
    const text = post.description || plainText(firstParagraph);
    return text.length <= 160 ? text : text.slice(0, 157).replace(/\s+\S*$/, '') + '…';
}

function card(post) {
    const url = escape(articleUrl(post.slug));
    return `<article class="blog-card"><div class="blog-text">
        <p class="date">${escape(post.date)}</p>
        <h3><a href="${url}">${escape(post.title)}</a></h3>
        <p>${escape(description(post))}</p>
        <a href="${url}" class="read-more">Read Article</a>
    </div></article>`;
}

function render(template, { title, description: summary, canonical, type, schema, content, className, noindex = false }) {
    return template
        .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escape(title)}</title>`)
        .replace(/<meta name="description"[^>]*>/, () => `<meta name="description" content="${escape(summary)}">`)
        .replace(/<meta name="robots"[^>]*>/, () => `<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}">`)
        .replace(/<script>\s*\(function \(\) \{[\s\S]*?<\/script>/, () => `<link rel="canonical" href="${escape(canonical)}">`)
        .replace(/<meta property="og:type"[^>]*>/, () => `<meta property="og:type" content="${type}">`)
        .replace(/<meta property="og:title"[^>]*>/, () => `<meta property="og:title" content="${escape(title)}">`)
        .replace(/<meta property="og:description"[^>]*>/, () => `<meta property="og:description" content="${escape(summary)}">`)
        .replace(/<meta property="og:url"[^>]*>/, () => `<meta property="og:url" content="${escape(canonical)}">`)
        .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, () => `<script type="application/ld+json">${json(schema)}</script>`)
        .replace(/<div id="blog-posts"[^>]*><\/div>/, () => `<div id="blog-posts" class="${className}" data-rendered="true">${content}</div>`)
        .replace(/<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/marked\/marked\.min\.js"><\/script>\s*/, '')
        .replace(/(href|src)="(css\/|js\/)/g, '$1="/$2');
}

export async function buildBlog() {
    const template = await readFile(resolve(root, 'blog.html'), 'utf8');
    const filenames = (await readdir(resolve(root, 'posts'))).filter(name => name.endsWith('.md')).sort().reverse();
    const posts = await Promise.all(filenames.map(async filename => ({
        ...parsePost(await readFile(resolve(root, 'posts', filename), 'utf8')),
        slug: filename.slice(0, -3)
    })));
    const blogPosts = Object.fromEntries(posts.map(post => {
        const canonical = articleUrl(post.slug);
        return [post.slug, render(template, {
            title: `${post.title} | Prema Moksha Astrology`,
            description: description(post), canonical, type: 'article', className: 'blog-post-full',
            schema: {
                '@context': 'https://schema.org', '@type': 'BlogPosting',
                headline: post.title, description: description(post), datePublished: post.date,
                url: canonical, mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
                author: { '@type': 'Person', name: 'Prema' },
                publisher: { '@type': 'Organization', name: 'Prema Moksha Astrology', url: origin + '/' }
            },
            content: `<article>
                <p class="date">${escape(post.date)}${post.category ? ' · ' + escape(post.category) : ''}</p>
                <h1>${escape(post.title)}</h1>
                <div class="post-content">${post.html}</div>
                <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(212, 175, 55, 0.2);">
                    <a href="/blog" class="btn">← Back to All Posts</a>
                </div>
            </article>`
        })];
    }));
    const blogIndex = render(template, {
        title: 'Astrology Blog | Transits, Horoscopes & Chart Insights | Prema Moksha Astrology',
        description: 'Astrology articles from Prema Moksha Astrology exploring transits, natal charts, houses, planetary cycles, horoscopes, and practical astrological guidance.',
        canonical: origin + '/blog', type: 'website', className: 'blog-list', content: posts.map(card).join('\n'),
        schema: { '@context': 'https://schema.org', '@type': 'Blog', name: 'Prema Moksha Astrology Blog', url: origin + '/blog' }
    });
    const notFound = render(template, {
        title: 'Article not found | Prema Moksha Astrology', description: 'This article could not be found. Browse the astrology blog.',
        canonical: origin + '/blog', type: 'website', schema: {}, className: 'blog-post-full', noindex: true,
        content: '<h1>Article not found</h1><p>This article may have moved or been removed.</p><a href="/blog" class="btn">← Back to All Posts</a>'
    });
    await mkdir(resolve(root, 'generated'), { recursive: true });
    await writeIfChanged(resolve(root, 'generated/blog-pages.mjs'),
        `// Generated by scripts/build-blog.mjs. Edit posts/*.md instead.\nexport const blogIndex = ${json(blogIndex)};\nexport const blogPosts = ${json(blogPosts)};\nexport const notFound = ${json(notFound)};\n`);
    await writeIfChanged(resolve(root, 'posts/index.json'), JSON.stringify(posts.map(post => ({
        slug: post.slug, title: post.title, date: post.date, description: description(post), url: articleUrl(post.slug)
    })), null, 2) + '\n');

    // Keep the sitemap in sync with CMS additions and removals on every deploy.
    const sitemapPath = resolve(root, 'sitemap.xml');
    const sitemap = await readFile(sitemapPath, 'utf8');
    if (!sitemap.includes('</urlset>')) throw new Error('Sitemap is incomplete; refusing to overwrite it');
    const withoutArticles = sitemap.replace(/\s*<url>\s*<loc>https:\/\/premamokshaastrology\.com\/blog\?post=[\s\S]*?<\/url>/g, '');
    const entries = posts.map(post => `  <url><loc>${escape(articleUrl(post.slug))}</loc><lastmod>${escape(post.date.slice(0, 10))}</lastmod><priority>0.8</priority></url>`).join('\n');
    await writeIfChanged(sitemapPath, withoutArticles.replace(/\s*<\/urlset>\s*$/, '\n' + entries + '\n</urlset>\n'));
    console.log(`Built ${posts.length} complete blog articles and the blog index.`);
    return { posts, blogIndex, blogPosts, notFound };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await buildBlog();
