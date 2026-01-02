import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaatar - Authentische Nahostküche",
  description: "Erleben Sie die reichhaltigen Aromen traditioneller Nahostgerichte im Restaurant Zaatar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-amber-600">
                Zaatar
              </Link>
              <div className="flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Startseite
                </Link>
                <Link href="/menu" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Speisekarte
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-amber-600 transition-colors">
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
