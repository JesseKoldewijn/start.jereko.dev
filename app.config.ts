import { defineConfig } from "@tanstack/start/config";

// plugins
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	vite: {
		plugins: (_) => [tsconfigPaths(), tailwindcss()],
	},
});
