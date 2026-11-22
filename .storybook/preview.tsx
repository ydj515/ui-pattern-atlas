import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "@fontsource/noto-serif-kr/600.css";
import "@fontsource/noto-serif-kr/700.css";
import "@/app/styles/global.css";

import type { Preview } from "@storybook/react-vite";

/**
 * Same fonts and tokens as the app. The "Theme" toolbar sets <html data-theme> like the app's
 * theme switcher, so site primitives can be checked in light and dark.
 */
const preview: Preview = {
  tags: ["autodocs"],
  globalTypes: {
    theme: {
      description: "Site theme (data-theme on <html>)",
      toolbar: {
        title: "Theme",
        icon: "contrast",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "light" },
  decorators: [
    (Story, context) => {
      document.documentElement.dataset.theme = String(context.globals.theme ?? "light");
      return <Story />;
    },
  ],
  parameters: {
    layout: "centered",
    controls: { expanded: true },
    a11y: { test: "todo" },
  },
};

export default preview;
