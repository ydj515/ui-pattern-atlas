import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import type { Plugin } from "vite";
import { defineConfig } from "vitest/config";

/**
 * Public path the app is served from. GitHub Pages project sites live under
 * `/<repo>/`, so CI passes it in; local dev and custom domains use `/`.
 */
function resolveBasePath(value: string | undefined): string {
  const trimmed = value?.trim() ?? "";
  if (trimmed === "" || trimmed === "/") return "/";
  return `/${trimmed.replace(/^\/+|\/+$/g, "")}/`;
}

/**
 * Static hosts such as GitHub Pages have no SPA rewrites. Serving the app shell as
 * `404.html` lets deep links like `/patterns/toast` boot the router instead of a 404 page.
 */
function spaFallback(): Plugin {
  return {
    name: "spa-fallback-404",
    apply: "build",
    enforce: "post",
    generateBundle(_options, bundle) {
      const indexHtml = bundle["index.html"];
      if (indexHtml?.type !== "asset") {
        this.error("index.html was not emitted; cannot create the 404.html SPA fallback");
      }
      this.emitFile({ type: "asset", fileName: "404.html", source: indexHtml.source });
    },
  };
}

export default defineConfig({
  base: resolveBasePath(process.env.BASE_PATH),
  plugins: [react(), tailwindcss(), spaFallback()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "vendor",
              test: /node_modules[\\/](?:react|react-dom|react-router|scheduler)[\\/]/,
            },
          ],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@storybook-config": fileURLToPath(new URL("./.storybook", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: false,
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/**/*.stories.{ts,tsx}",
        "src/test/**",
        "src/main.tsx",
        "src/vite-env.d.ts",
      ],
      reporter: ["text", "html", "lcov"],
      // Start just below the measured baseline (~91/85/88/92) and only raise over time.
      thresholds: {
        statements: 85,
        branches: 80,
        functions: 85,
        lines: 85,
      },
    },
  },
});
