import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aman Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png"/>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
