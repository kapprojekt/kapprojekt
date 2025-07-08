import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "KAP Projekt | Panel Admina",
};

export default function Admin() {
  return (
    <>
      <Script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js" />
    </>
  );
}
