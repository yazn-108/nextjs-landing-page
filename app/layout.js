import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "yazn_108 | next.js landing page",
  description: "nextjs & framer-motion & tailwind",
  openGraph: {
    url: "https://yazn-landing-nextjs.vercel.app/",
    title: "yazn_108 | next.js landing page",
    description: "nextjs & framer-motion & tailwind",
    images: [
      {
        url: "https://raw.githubusercontent.com/yazn-108/nextjs-landing-page/main/siteBanner.png",
        width: 800,
        height: 600,
        alt: "Site Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    domain: "yazn-108.github.io",
    url: "https://yazn-landing-nextjs.vercel.app/",
    title: "yazn_108 | next.js landing page",
    description: "nextjs & framer-motion & tailwind",
    image: {
      url: "https://raw.githubusercontent.com/yazn-108/nextjs-landing-page/main/siteBanner.png",
      alt: "Site Banner",
    },
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
