import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { test } from 'node:test';
import { parsePost } from '../scripts/build-blog.mjs';
import worker from '../worker.mjs';

const origin = 'https://premamokshaastrology.com';
const posts = (await readdir(new URL('../posts/', import.meta.url))).filter(name => name.endsWith('.md'));
const escape = text => text.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

test('every published article has complete text, a unique title and its own canonical in the initial response', async () => {
    const titles = new Set();
    const sitemap = await readFile(new URL('../sitemap.xml', import.meta.url), 'utf8');
    for (const filename of posts) {
        const post = parsePost(await readFile(new URL('../posts/' + filename, import.meta.url), 'utf8'));
        const url = `${origin}/blog?post=${filename.slice(0, -3)}`;
        const response = await worker.fetch(new Request(url), {});
        assert.equal(response.status, 200, filename);
        const html = await response.text();
        assert.ok(html.includes(post.html), `Full original article HTML is missing: ${filename}`);
        assert.ok(html.includes(`<h1>${escape(post.title)}</h1>`));
        assert.ok(html.includes(`<link rel="canonical" href="${url}">`));
        assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
        assert.ok(html.includes('data-rendered="true"'));
        const title = html.match(/<title>(.*?)<\/title>/)[1];
        assert.ok(!titles.has(title), `Duplicate page title: ${filename}`);
        titles.add(title);
        const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
        assert.equal(schema['@type'], 'BlogPosting');
        assert.equal(schema.headline, post.title);
        assert.equal(schema.url, url);
        assert.ok(sitemap.includes(`<loc>${url}</loc>`));
    }
});

test('the blog index includes crawlable links to every published article without executing JavaScript', async () => {
    const html = await (await worker.fetch(new Request(origin + '/blog'), {})).text();
    for (const filename of posts) assert.ok(html.includes(`href="${origin}/blog?post=${filename.slice(0, -3)}"`));
    assert.ok(!html.includes('Loading posts...'));
    assert.ok(!html.includes('cdn.jsdelivr.net/npm/marked'));
});

test('legacy .html links and trailing slash normalize in one redirect without losing the selected article', async () => {
    for (const path of ['/blog.html', '/blog/']) {
        const response = await worker.fetch(new Request(origin + path + '?post=2026-07-10-daily-astrology-practice'), {});
        assert.equal(response.status, 301);
        const destination = response.headers.get('Location');
        assert.equal(destination, origin + '/blog?post=2026-07-10-daily-astrology-practice');
        assert.equal((await worker.fetch(new Request(destination), {})).status, 200);
    }
});

test('unknown article requests return an actual 404 and cannot be indexed', async () => {
    for (const slug of ['missing', '__proto__', 'constructor', '../../index']) {
        const response = await worker.fetch(new Request(origin + '/blog?post=' + encodeURIComponent(slug)), {});
        assert.equal(response.status, 404);
        assert.equal(response.headers.get('X-Robots-Tag'), 'noindex');
        assert.ok((await response.text()).includes('<h1>Article not found</h1>'));
    }
});

test('HEAD requests preserve headers and status, and unsupported methods are rejected', async () => {
    const url = origin + '/blog?post=2026-07-10-daily-astrology-practice';
    const head = await worker.fetch(new Request(url, { method: 'HEAD' }), {});
    assert.equal(head.status, 200);
    assert.equal(await head.text(), '');
    assert.equal(head.headers.get('Content-Type'), 'text/html; charset=utf-8');
    const post = await worker.fetch(new Request(url, { method: 'POST' }), {});
    assert.equal(post.status, 405);
    assert.equal(post.headers.get('Allow'), 'GET, HEAD');
});

test('unrelated pages and assets pass through unchanged', async () => {
    for (const path of ['/', '/session', '/horoscopes', '/weekly-horoscope', '/css/style.css', '/posts/index.json']) {
        const request = new Request(origin + path);
        const response = new Response('original asset');
        const actual = await worker.fetch(request, { ASSETS: { fetch: passed => {
            assert.equal(passed, request);
            return response;
        } } });
        assert.equal(actual, response);
    }
});
