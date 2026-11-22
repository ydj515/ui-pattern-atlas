import type { StorybookConfig } from "@storybook/react-vite";

/** App-only Vite plugins that do not apply to the Storybook build. */
const APP_ONLY_PLUGINS = new Set(["spa-fallback-404"]);

function isAppOnlyPlugin(plugin: unknown): boolean {
  return (
    typeof plugin === "object" &&
    plugin !== null &&
    "name" in plugin &&
    typeof plugin.name === "string" &&
    APP_ONLY_PLUGINS.has(plugin.name)
  );
}

/** Stories live next to the component they document (`*.stories.tsx`). */
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: { name: "@storybook/react-vite", options: {} },
  core: { disableTelemetry: true },
  // Storybook reuses vite.config.ts; drop the GitHub Pages 404.html fallback, which expects
  // the app's index.html (Storybook emits iframe.html instead).
  viteFinal: (viteConfig) => ({
    ...viteConfig,
    plugins: (viteConfig.plugins ?? []).flat().filter((plugin) => !isAppOnlyPlugin(plugin)),
    build: {
      ...viteConfig.build,
      // Storybook's own DocsRenderer, axe-core and iframe runtime exceed Vite's 500 kB app threshold.
      chunkSizeWarningLimit: 1500,
    },
  }),
};

export default config;
