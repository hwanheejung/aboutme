import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Settings from "@/components/Settings";
import Navigation from "@/components/Navigation";
import { SITEMETA } from "contents/meta";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SITEMETA.title,
  description: SITEMETA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Settings />
        <div className="flex h-woSettings">
          <nav className="overflow-y-scroll scrollbar-hide">
            <Navigation />
          </nav>
          <main className="flex-1 overflow-y-scroll p-5 font-sans scrollbar-hide">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
