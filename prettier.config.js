/** @type {import("prettier").Config} */
const config = {
  trailingComma: "none",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};

export default config;
