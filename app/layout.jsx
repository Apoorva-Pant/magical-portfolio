// app/layout.jsx
import "./globals.css";
import Navbar from "../components/Navbar";
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
    <html lang="en" className="scroll-smooth">
      <body className={`${oranienbaum.className} overflow-x-hidden max-w-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
