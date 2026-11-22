import { isRouteErrorResponse, Link, useRouteError, type RouteObject } from "react-router";

import { RootLayout } from "@/app/layout/RootLayout";
import { CatalogPage } from "@/pages/catalog/ui/CatalogPage";
import { NotFoundPage } from "@/pages/not-found/ui/NotFoundPage";
import { PatternDetailPage } from "@/pages/pattern-detail/ui/PatternDetailPage";
import { RoadmapPage } from "@/pages/roadmap/ui/RoadmapPage";
import { ComparisonPage } from "@/pages/ui-comparison/ui/ComparisonPage";
import { textLinkClassName } from "@/shared/ui/primitives/textLink";

function RouteErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : "알 수 없는 오류";

  return (
    <div role="alert" className="mx-auto max-w-page px-4 py-24 sm:px-6">
      <h1 className="font-serif text-title font-bold">화면을 그리는 중 문제가 생겼어요</h1>
      <p className="mt-3 text-caption text-graphite">{message}</p>
      <Link to="/" className={`mt-6 inline-block text-caption ${textLinkClassName}`}>
        처음으로 돌아가기
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
      { path: "roadmap", element: <RoadmapPage /> },
      { path: "compare", element: <ComparisonPage /> },
      { path: "compare/:slug", element: <ComparisonPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
