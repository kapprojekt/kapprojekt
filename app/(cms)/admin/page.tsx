"use client";

export default function Admin() {
  return (
    <>
      <head>
        <link href="admin/config.yml" type="text/yaml" rel="cms-config-url" />
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
      </head>
      <script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        async
      ></script>
    </>
  );
}