# Twin-Tested Baby Must-Haves · 쌍둥이 엄마의 육아 필수템

A bilingual (English/Korean) one-page site of baby & toddler must-haves,
organized by Babylist registry categories. Amazon affiliate commissions
are donated 100% to **March of Dimes** (NICU support).

*ver 1 — created 2026-07-08 with Claude*

## The files

| File | What it is |
|------|-----------|
| `index.html` | The page itself. You never need to edit this. |
| `items.js` | **The only file you edit.** All items, notes, and links live here. |
| `README.md` | This guide. |
| `REGISTRY_SNAPSHOT.md` | A copy of your Babylist registry (captured 2026-07-08) for reference. |

## How to preview the page

Double-click `index.html` in Finder — it opens in your browser. That's it.

## How to add or edit an item

1. Open `items.js` in any text editor (TextEdit works; ask Claude to do it for you works too).
2. Copy an existing item block — everything from `{` to `},`.
3. Paste it under the right category and change the fields:
   - `nameEn` / `nameKo` — product name in each language
   - `noteEn` / `noteKo` — your one-line "why I love it"
   - `reviewEn` / `reviewKo` — (optional) your longer honest take, shown as an italic quote
   - `amazonUrl` — your **affiliate** link (see below)
   - `verdict: "essential"` — shows the 사라사! (must!) label; leave it out for 좋을지도? (maybe?)
4. Save. Refresh the page in your browser.

All ~40 items from your registry are already in the file — most just need
their `amazonUrl` filled in.

## Getting your Amazon affiliate links (one-time setup)

1. Sign up at **affiliate-program.amazon.com** (Amazon Associates). It's free.
   - When asked about your website, you'll give the URL where this page is
     published, plus your Threads profile.
   - You must make ~3 qualifying sales in the first 180 days to stay in
     the program.
2. Once approved, browse to any product on amazon.com. A grey
   **"SiteStripe"** bar appears at the top of the page. Click **"Get Link →
   Text"** and copy the short link (looks like `https://amzn.to/xxxx`).
3. Paste that into the item's `amazonUrl` field in `items.js`.

Alternatively, put your Associates tag (e.g. `juliagives-20`) into
`SITE_CONFIG.amazonTag` at the top of `items.js` — then any plain Amazon
product link you paste gets your tag added automatically.

**Required disclosure:** Amazon requires the line "As an Amazon Associate
I earn from qualifying purchases" — it's already in the page footer in
both languages. Note that Amazon pays commissions to you; you then donate
to March of Dimes yourself (Amazon doesn't route money to charities
directly through Associates).

## Publishing it (so you can link it on Threads)

Two easy options — ask Claude to set either one up:

- **Netlify Drop** (easiest): go to `app.netlify.com/drop`, drag this
  folder onto the page, and you get a live URL in seconds. To update,
  drag the folder again.
- **GitHub Pages** (best long-term): free, and updates publish
  automatically when the files change. Needs a small one-time setup.

## Sharing tips

- English-first link: `yoursite.com`
- Korean-first link: `yoursite.com?lang=ko` (the page opens in Korean)
