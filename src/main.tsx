// Self-hosted fonts (no CDN). Both are split by unicode-range, so browsers download only
// the glyph slices a page actually uses. Noto Serif KR: only the weights the site uses.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "@fontsource/noto-serif-kr/600.css";
import "@fontsource/noto-serif-kr/700.css";
import "@/app/styles/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import { routes } from "@/app/router/routes";
import { LocaleProvider, localeFromPathname, routerBasename } from "@/shared/i18n/locale";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element #root is missing in index.html");

// English pages live under `<base>en/`; each language gets its own router basename, so every
// route and link stays language-neutral. Matches Vite's `base` for sub-path deploys (GitHub Pages).
const base = import.meta.env.BASE_URL;
const locale = localeFromPathname(window.location.pathname, base);
document.documentElement.lang = locale;
const router = createBrowserRouter(routes, { basename: routerBasename(base, locale) });

createRoot(rootElement).render(
  <StrictMode>
    <LocaleProvider locale={locale}>
      <RouterProvider router={router} />
    </LocaleProvider>
  </StrictMode>,
);
