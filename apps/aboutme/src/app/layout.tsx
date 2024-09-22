import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { SITEMETA } from "contents/meta";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const HankenItalicVariable = localFont({
  src: "../../public/fonts/HankenGrotesk-Italic-VariableFont_wght.ttf",
  variable: "--font-hanken-italic-variable",
});

const HankenVariable = localFont({
  src: "../../public/fonts/HankenGrotesk-VariableFont_wght.ttf",
  variable: "--font-hanken-variable",
});

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
      <body
        className={`${HankenItalicVariable.variable} ${HankenVariable.variable} ${inter.className} overflow-x-hidden`}
      >
        <div className="font-hanken">
          <Header />
          <main className="px-10 text-lg">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
