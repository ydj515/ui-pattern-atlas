import type { ComponentProps } from "react";
import { Link, useLocation } from "react-router";

import { useMessages } from "@/shared/i18n/messages";
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
  const messages = useMessages();
  const state: unknown = useLocation().state;
  const returnSearch =
    state && typeof state === "object" && "returnSearch" in state ? state.returnSearch : undefined;

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <PageBreadcrumb
        label={messages.nav.breadcrumb}
        parents={[{ label: messages.sections.all, to: "/" }, ...parents]}
        current={current}
      />
      {typeof returnSearch === "string" && returnSearch.startsWith("?") && (
        <Link
          to={{ pathname: "/", search: returnSearch }}
          className={`text-caption ${textLinkClassName}`}
        >
          {messages.nav.backToResults}
        </Link>
      )}
    </div>
  );
}
