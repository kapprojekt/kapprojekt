const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extend: {
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
  },
};

export default config;
