import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const nunito = Nunito_Sans({ subsets: ["latin"] });

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
      <head>
        <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
      </head>
      <body className={`${nunito.className} antialiased`}>{children}</body>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
    </html>
  );
}
