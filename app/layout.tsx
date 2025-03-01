import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
