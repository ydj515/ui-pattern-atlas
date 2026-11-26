import type { StorybookConfig } from "@storybook/react-vite";

/** Stories live next to the component they document (`*.stories.tsx`). */
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: { name: "@storybook/react-vite", options: {} },
  core: { disableTelemetry: true },
  // Storybook reuses vite.config.ts.
  viteFinal: (viteConfig) => ({
    ...viteConfig,
    build: {
      ...viteConfig.build,
      // Storybook's own DocsRenderer, axe-core and iframe runtime exceed Vite's 500 kB app threshold.
      chunkSizeWarningLimit: 1500,
    },
  }),
};

export default config;
