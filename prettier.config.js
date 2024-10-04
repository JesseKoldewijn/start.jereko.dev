/**
 * @typedef {import('prettier').Config} Config
 * @typedef {import('prettier-plugin-tailwindcss').PluginOptions} PluginOptions
 */

/**
 * @type {Config & PluginOptions}
 */
const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  // Import sorting
  importOrder: [
    "@tanstack/(.*)$",
    "react/(.*)$",
    "@/(.*)$",
    "@/(.css)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // Tailwind
  tailwindAttributes: ["className"],
  tailwindFunctions: ["clsx", "cn", "twMerge"],
};

export default config;
