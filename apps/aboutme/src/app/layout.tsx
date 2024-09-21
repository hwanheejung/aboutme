import Hamburger from "@/components/Navigation/Hamburger";
import Settings from "@/components/Settings";
import "@/styles/globals.css";
import { SITEMETA } from "contents/meta";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
        <link rel="icon" href="/aboutme/images/favicon.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Settings />
        <div className="relative flex h-woSettings">
          <Hamburger />
          <main className="flex-1 overflow-y-scroll p-5 font-sans">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
