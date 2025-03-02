import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KAP Projekt",
  description: "Architektura wnętrz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${nunito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
