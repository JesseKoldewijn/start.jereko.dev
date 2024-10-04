import { defineConfig } from "@tanstack/start/config";

// plugins
import tsconfigPaths from "vite-tsconfig-paths";
// import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	vite: {
		plugins: (_) => [
			tsconfigPaths({
				projects: ["./tsconfig.json"],
			}),
			// enable when v4 plugin works on tanstack start
			// tailwindcss(),
		],
	},
});
