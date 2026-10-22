# Prema Moksha Astrology — Setup & Deployment Guide

A static astrology business website hosted free on Cloudflare (Workers static assets), with a blog powered by GitHub + Decap CMS. The site owner logs into `premamokshaastrology.com/admin` to write posts — no coding required.

**Total cost: ~$20/yr (domain only) vs. ~$260/yr on Squarespace.**

## What's in this package

```
premamokshaastrology/
├── index.html                          ← Main homepage (EN/PT, contact form)
├── blog.html                           ← Blog listing + individual posts
├── css/
│   └── style.css                       ← All styles
├── js/
│   ├── i18n.js                         ← Portuguese translations + language toggle
│   └── main.js                         ← Stars, animations, blog fetching, contact form
├── admin/
│   ├── index.html                      ← CMS login page
│   └── config.yml                      ← CMS configuration
├── posts/                              ← 6 starter blog posts (markdown)
│   ├── 2026-08-15-full-moon-aquarius.md
│   ├── 2026-08-08-north-node-guide.md
│   ├── 2026-08-01-venus-leo.md
│   ├── 2026-07-25-houses-explained.md
│   ├── 2026-07-18-saturn-retrograde.md
│   └── 2026-07-10-daily-astrology-practice.md
└── images/                             ← 6 AI-generated background images
    ├── hero-bg.jpg
    ├── freebies.jpg
    ├── subscription.jpg
    ├── classes.jpg
    ├── blog.jpg
    └── shop.jpg
```

## ⚠️ Three edits required BEFORE uploading

**Edit 1 — `js/main.js` (lines 3–4):**
```js
const GITHUB_OWNER = 'your-github-username';   // was YOUR_GITHUB_USERNAME
const GITHUB_REPO = 'premamokshaastrology';        // was YOUR_REPO_NAME
```

**Edit 2 — `admin/config.yml` (line 3):**
```yaml
repo: your-github-username/premamokshaastrology    # was YOUR_GITHUB_USERNAME/YOUR_REPO_NAME
```

**Edit 3 — `index.html` contact form access key** (see "Contact form activation" below — takes 2 minutes, but the form won't send until it's done):
```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```

## Deployment checklist

**Step 1: Create GitHub repo**
1. Go to github.com → sign up / log in
2. Click **+ → New repository**
3. Name: `premamokshaastrology` · Public (required for free Decap CMS)
4. Click **Create**

**Step 2: Upload files**
1. In the empty repo, click "uploading an existing file"
2. Drag in all files and folders (keeping the structure above)
3. Click **Commit changes**

**Step 3: Deploy to Cloudflare (Workers flow)**

Cloudflare has merged Pages into the Workers flow on most dashboards — the site deploys as a Worker with static assets. The included `wrangler.jsonc` file makes this work with zero build.

1. Go to dash.cloudflare.com → sign up / log in
2. Left sidebar → **Workers & Pages** → **Create application** (or "Create a Worker")
3. Choose **Continue with GitHub** → authorize if prompted → select the repo → **Begin setup**
4. Project name: anything short (it becomes your `.workers.dev` URL) · **Build command: leave blank** · Deploy command: keep `npx wrangler deploy`
5. Click **Deploy** → wait ~1–2 minutes → you get a URL like `https://<project-name>.workers.dev`

The `wrangler.jsonc` in the repo root serves the site's assets and builds the blog automatically with `node scripts/build-blog.mjs`. Leave the dashboard Build command blank; Wrangler runs this step itself. Every push to `main` auto-redeploys the site.

Blog article addresses retain `/blog?post=...`. The Worker returns complete HTML, article titles, descriptions, canonical tags and article structured data at these addresses. It also renders all article links on the blog index before JavaScript runs. Article text, the local post index and the sitemap regenerate from `posts/*.md` at each deployment, including posts saved through the CMS. There is no live GitHub API dependency for reading articles or loading the latest-post cards.

To check a blog change locally, run `node scripts/build-blog.mjs` and `node --test tests/blog.test.mjs`. The Markdown renderer is vendored in `vendor/` with its MIT license, so the build needs no package installation. Generated response modules stay out of Git and the public asset directory.

**Step 4: Point the domain to Cloudflare**
1. In Cloudflare → your Worker project → **Settings** → **Domains & Routes** (or **Custom Domains**)
2. Click **Add custom domain** → type `www.premamokshaastrology.com`
3. In your current registrar's DNS settings, add a CNAME record: Host `www` → points to your `.workers.dev` URL
4. Add a redirect: `premamokshaastrology.com` → `www.premamokshaastrology.com`

**Step 5: Cancel Squarespace hosting**
1. Squarespace → Settings → Billing → Subscriptions
2. Cancel the Website plan (~$20/mo)
3. Keep the domain registration (for now)

**Step 6: Email forwarding (optional)**
1. Cloudflare dashboard → Email → Email Routing
2. Custom address: `hello@premamokshaastrology.com` → Destination: your Gmail

## Contact form activation (2 minutes, free)

The contact form uses **Web3Forms** — free up to 250 submissions/month, messages go straight to her email inbox.

1. Go to **web3forms.com**
2. Enter her email address → they instantly send an **access key** to that inbox
3. In `index.html`, find `YOUR_WEB3FORMS_ACCESS_KEY` and replace it with the key
4. Commit the change — done. Test it by sending yourself a message.

## Languages (EN / PT)

- The site defaults to English; a **PT** button in the navigation switches everything to Portuguese (and remembers each visitor's choice).
- All Portuguese text lives in **`js/i18n.js`** — edit any string there to adjust wording.
- Blog *posts* themselves are written in whichever language she chooses in the CMS; the toggle translates the site's interface, menus, and buttons.

## Blog admin login — one-time OAuth setup (the one tricky step)

Decap CMS's GitHub backend can't complete the login by itself — it needs a tiny OAuth helper service (free, runs on Cloudflare). Until this is done, `premamokshaastrology.com/admin` will show a login button that leads nowhere.

1. **Create a GitHub OAuth App:** github.com → profile → Settings → Developer settings → OAuth Apps → **New OAuth App**
   - Application name: `Prema Moksha Astrology CMS`
   - Homepage URL: your site URL
   - Authorization callback URL: `https://YOUR-HELPER.workers.dev/callback` (you'll know this after step 2 — come back and fill it in)
2. **Deploy the free auth helper:** use the `i40west/netlify-cms-github-oauth` Cloudflare Worker (search GitHub for it — it has a one-click Deploy button). Add your OAuth App's **Client ID** and **Client Secret** to it as secrets.
3. **Point the CMS at the helper:** in `admin/config.yml`, add one line under `branch: main`:
   ```yaml
     base_url: https://YOUR-HELPER.workers.dev
   ```
4. Visit `premamokshaastrology.com/admin` → **Login with GitHub** now works.

If this step feels fiddly, ask for help — it's ~15 minutes of copy-pasting values, and there are also hosted services (e.g. DecapBridge) that do the same job.

## How the owner writes blog posts

1. Go to `www.premamokshaastrology.com/admin`
2. Click **Login with GitHub** → authorize (one-time)
3. Click **New Post**
4. Fill in: Title, Date, Category, Body
5. Click **Publish** — the post goes live automatically in ~30 seconds

## Connecting the moving parts (after deployment)

The site is static, so anything involving payments, bookings, or email signups is handled by a free external service — you just paste in a link. All of these edits are in `index.html`.

**1. "Book Now" buttons → booking + payment**
- Easiest free combo: create a free **Cal.com** (or Calendly) booking page for each service, and a **Stripe Payment Link** or **PayPal.Me** link for payment.
- Then replace the `href="#"` on each Book Now button with your booking link.
- Alternative: simply point the buttons at `mailto:her@email.com` until she's ready for online booking.

**2. Newsletter Subscribe button ($5/week)**
- Budget-friendly options: **Buttondown** (free up to 100 subscribers, cheap paid tiers), **Substack** (free, takes ~10% of paid subs), or a **Patreon** tier at $5.
- Create the publication there, then replace the Subscribe button's `href="#"` with the signup page URL.
- Note: if she uses Patreon for the newsletter, it can double as the members area and the future classes host — one platform, one login for subscribers.

**3. Sample report PDFs**
- Create a folder called `reports/` in the repo (next to `posts/` and `images/`).
- Name the files exactly:
  - `reports/sample-natal-chart.pdf`
  - `reports/sample-transits-progressions.pdf`
  - `reports/sample-synastry.pdf`
- The Download buttons already point to these paths, so the links go live the moment the PDFs are uploaded. Until then, the buttons 404 — that's expected.

**4. Members area / classes**
- A truly private members-only area can't be done securely on a purely static site (anything in the site's code is visible to anyone).
- Recommended budget path: **Patreon** handles paid memberships, the newsletter, and class hosting in one place, and the site just links to it. The Classes section already says this.
- If she later wants real on-site accounts (login, members-only pages), that requires a small backend — doable, but it ends the $0-hosting model.

**5. Contact email**
- The address shown in the Contact section is `hello@premamokshaastrology.com` — search `index.html` and `js/main.js` for that string and replace it with her real address.

## Ongoing costs

| Service | Cost |
|---|---|
| Domain registration | ~$20/yr |
| Website hosting (Cloudflare Workers) | $0 |
| Blog CMS (Decap CMS + GitHub) | $0 |
| Contact form (Web3Forms) | $0 |
| Email forwarding (Cloudflare) | $0 |
| **Total** | **~$20/yr** |

*Savings vs. Squarespace: ~$240/yr*
