# Paria Zandihamedani, portfolio

Live site: https://pariaznd.github.io/pariazandihamedani-portfolio/

A static Next.js site, published to GitHub Pages by `.github/workflows/deploy.yml` every time you push to `main`.

## Change the content

All the words are in **`src/app/data.js`**: the headline, projects, experience, skills, about text and education.
Edit the text there. You do not need to touch the other files.

| What | Where |
| --- | --- |
| Project text and links | `src/app/data.js` (`featured` and `more`) |
| Project diagrams | `src/app/figures.js` |
| Layout and wording of sections | `src/app/page.js` |
| Photo puzzle, copy-email button, phone menu | `src/app/client.js` |
| Colours, fonts, spacing | `src/app/globals.css` (colours are at the top) |
| Page title and link preview | `src/app/layout.js` and `public/og.png` |
| CV download | `public/cv.pdf` (replace the file, keep the name) |
| Photo | `public/profile.webp` (4:5 portrait, about 960 × 1200 px) |

## Run it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Fonts

Schibsted Grotesk and Source Serif 4, both under the SIL Open Font License. The files and licences are in `src/app/fonts`.
