import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Full Stack Developer | Aman Portfolio",
  description: "Aman - Full Stack Developer skilled in React, Node.js, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Portfolio, Full Stack Developer, Web Developer, Freelance, Web Design, Project freelance"
        />
        <meta name="Aman" content="Portfolio" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Aman Portfolio" />
        <meta
          property="og:description"
          content="Full Stack Developer Portfolio"
        />
        <meta property="og:image" content="/img/home.png" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aman Portfolio" />
        <meta
          name="twitter:description"
          content="Full Stack Developer Portfolio"
        />
        <meta name="twitter:image" content="/img/home.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
