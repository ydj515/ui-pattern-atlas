import { isRouteErrorResponse, Link, useRouteError, type RouteObject } from "react-router";

import { RootLayout } from "@/app/layout/RootLayout";
import { CatalogPage } from "@/pages/catalog/ui/CatalogPage";
import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage";
import { PatternDetailPage } from "@/pages/pattern-detail/ui/PatternDetailPage";
import { RoadmapPage } from "@/pages/roadmap/ui/RoadmapPage";
import { ComparisonPage } from "@/pages/ui-comparison/ui/ComparisonPage";
import { useMessages } from "@/shared/i18n/messages";
import { textLinkClassName } from "@/shared/ui/primitives/textLink";

function RouteErrorPage() {
  const error = useRouteError();
  const messages = useMessages();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : messages.error.unknown;

  return (
    <div role="alert" className="mx-auto max-w-page px-4 py-24 sm:px-6">
      <h1 className="font-serif text-title font-bold">{messages.error.title}</h1>
      <p className="mt-3 text-caption text-graphite">{message}</p>
      <Link to="/" className={`mt-6 inline-block text-caption ${textLinkClassName}`}>
        {messages.error.home}
      </Link>
    </div>
  );
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <CatalogPage /> },
      { path: "patterns/:slug", element: <PatternDetailPage /> },
      { path: "concepts/:slug", element: <PatternDetailPage /> },
      { path: "roadmap", element: <RoadmapPage /> },
      { path: "compare", element: <ComparisonPage /> },
      { path: "compare/:slug", element: <ComparisonPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
