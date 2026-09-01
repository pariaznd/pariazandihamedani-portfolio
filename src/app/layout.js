import "./globals.css";

export const metadata = {
  title: "Paria Zandihamedani | Machine Learning & AI Engineer",
  description:
    "Portfolio of Paria Zandihamedani — Machine Learning, AI, Data Science, Time-Series Forecasting, Medical Imaging, and Data Engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}