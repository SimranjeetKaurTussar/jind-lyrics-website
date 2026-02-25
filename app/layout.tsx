import type { Metadata } from "next";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "JIND | Punjabi Lyricist",
  description:
    "Official portfolio of JIND — modern Punjabi lyric writing with poetic soul and chart-ready hooks.",
};

const themeScript = `
(() => {
  const storageKey = 'jind-theme';
  const root = document.documentElement;
  const stored = localStorage.getItem(storageKey);
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (systemDark ? 'dark' : 'light');
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="container page-content flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
