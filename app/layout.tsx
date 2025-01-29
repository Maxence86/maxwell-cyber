import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maxwell-Cyber",
  description: "Portfolio Cybersécurité & Pentest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-green-400 font-mono`}>
        {/* Navbar */}
        <nav className="w-full bg-green-500 p-2 text-black font-bold flex justify-between">
          <span>💀 Maxwell-Cyber 💀</span>
          <div className="flex gap-4">
            <a href="/" className="hover:underline">Accueil</a>
            <a href="/about" className="hover:underline">À propos</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/portfolio" className="hover:underline">Portfolio</a>
          </div>
        </nav>

        {/* Contenu principal */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="text-center p-4 text-green-400">
          © 2025 Maxwell-Cyber | Tous droits réservés
        </footer>
      </body>
    </html>
  );
}
