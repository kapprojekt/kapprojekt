"use client";

export default function Admin() {
  return (
    <html
      lang="pl">
      <head>
        <link href="admin/config.yml" type="text/yaml" rel="cms-config-url" />
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
      </head>
      <body
        className="__className_ff75e6 antialiased">
      <script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        async
        ></script>
      </body>
    </html>
  );
}