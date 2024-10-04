// plugins
import tsconfigPaths from "vite-tsconfig-paths";

import { defineConfig } from "@tanstack/start/config";

// import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    preset: "vercel",
  },
  tsr: {
    appDirectory: "app",
    generatedRouteTree: "app/routeTree.gen.ts",
  },
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
