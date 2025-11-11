import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Modern Minimal Portfolio",
  description: "A sleek, animated portfolio in dark gray with orange accents.",
  metadataBase: new URL("https://agentic-44fdd07e.vercel.app"),
  openGraph: {
    title: "Modern Minimal Portfolio",
    description: "A sleek, animated portfolio in dark gray with orange accents.",
    url: "https://agentic-44fdd07e.vercel.app",
    siteName: "Modern Minimal Portfolio",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Portfolio" },
    ],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#0f1115",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg text-text antialiased`}>{children}</body>
    </html>
  );
}
