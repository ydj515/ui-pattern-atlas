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

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element #root is missing in index.html");

// Matches Vite's `base` so routes work when deployed under a sub-path (GitHub Pages).
const router = createBrowserRouter(routes, { basename: import.meta.env.BASE_URL });

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
