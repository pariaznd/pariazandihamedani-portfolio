import "./globals.css";
import localFont from "next/font/local";

// Fonts are stored in src/app/fonts and served from your own site.
// Schibsted Grotesk for headings and buttons, Source Serif 4 for sentences.
// Both use the SIL Open Font License (see the OFL files in the same folder).
const display = localFont({
  src: "./fonts/SchibstedGrotesk-latin-wght.woff2",
  variable: "--font-display",
  weight: "400 900",
  display: "swap",
});

const text = localFont({
  src: "./fonts/SourceSerif4-latin-wght.woff2",
  variable: "--font-text",
  weight: "200 900",
  display: "swap",
});

const SITE = "https://pariaznd.github.io/pariazandihamedani-portfolio/";
const TITLE = "Paria Zandihamedani | Data Engineer and ML Engineer";
const DESCRIPTION =
  "Portfolio of Paria Zandihamedani, a data engineer moving into machine learning. Projects in time-series forecasting, medical imaging, computer vision and data engineering. Based in Trondheim, Norway.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Paria Zandihamedani",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE}og.png`,
        width: 1200,
        height: 630,
        alt: "Paria Zandihamedani: data engineer turned ML engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE}og.png`],
  },
};

export const viewport = {
  themeColor: "#f3f6f8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`}>
      <body>{children}</body>
    </html>
  );
}
