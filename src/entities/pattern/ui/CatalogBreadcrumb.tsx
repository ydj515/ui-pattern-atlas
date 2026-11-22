import type { ComponentProps } from "react";
import { Link, useLocation } from "react-router";

import { PageBreadcrumb } from "@/shared/ui/primitives/PageBreadcrumb";
import { textLinkClassName } from "@/shared/ui/primitives/textLink";

type BreadcrumbProps = ComponentProps<typeof PageBreadcrumb>;

export function CatalogBreadcrumb({
  parents = [],
  current,
}: {
  readonly parents?: BreadcrumbProps["parents"];
  readonly current: string;
}) {
  const state: unknown = useLocation().state;
  const returnSearch =
    state && typeof state === "object" && "returnSearch" in state ? state.returnSearch : undefined;

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <PageBreadcrumb parents={[{ label: "전체", to: "/" }, ...parents]} current={current} />
      {typeof returnSearch === "string" && returnSearch.startsWith("?") && (
        <Link
          to={{ pathname: "/", search: returnSearch }}
          className={`text-caption ${textLinkClassName}`}
        >
          탐색 결과로 돌아가기
        </Link>
      )}
    </div>
  );
}
