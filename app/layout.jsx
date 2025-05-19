// app/layout.jsx
import "./globals.css"; // ✅ now correct
import Navbar from "../components/Navbar"; // ✅ relative path
import { Oranienbaum } from 'next/font/google';

const oranienbaum = Oranienbaum({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my work",
   icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={oranienbaum.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

