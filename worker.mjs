import { blogIndex, blogPosts, notFound } from './generated/blog-pages.mjs';

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (!['/blog', '/blog/', '/blog.html'].includes(url.pathname)) {
            return env.ASSETS.fetch(request);
        }

        if (!['GET', 'HEAD'].includes(request.method)) {
            return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD' } });
        }

        // Keep old article links working and preserve their post parameter.
        if (url.pathname !== '/blog') {
            url.pathname = '/blog';
            return new Response(null, { status: 301, headers: { Location: url.href } });
        }

        const slug = url.searchParams.get('post');
        const exists = !slug || Object.hasOwn(blogPosts, slug);
        const html = !slug ? blogIndex : exists ? blogPosts[slug] : notFound;
        return new Response(request.method === 'HEAD' ? null : html, {
            status: exists ? 200 : 404,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'public, max-age=0, must-revalidate',
                ...(exists ? {} : { 'X-Robots-Tag': 'noindex' })
            }
        });
    }
};
