import { Config } from "prettier";
import { PluginOptions } from "prettier-plugin-tailwindcss";

type PrettierConfiguration = Config & PluginOptions;

const config: PrettierConfiguration = {
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
	tailwindConfig: "./tailwind.config.ts",
};

export default config;
