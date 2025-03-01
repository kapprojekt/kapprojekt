"use client";

import Script from "next/script";

export default function Admin() {
  return (
    <>
      <head>
        <link href="admin/config.yml" type="text/yaml" rel="cms-config-url" />
      </head>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        async
      />
      <Script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        async
      />
    </>
  );
}