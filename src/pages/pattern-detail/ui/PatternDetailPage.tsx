import { useLocation, useParams } from "react-router";

import { findPatternBySlug } from "@/entities/pattern/catalog";
import { ROADMAP_PATTERN_TOPICS } from "@/entities/pattern/catalog/roadmap";
import { getCategory } from "@/entities/pattern/model/category";
import { NotFoundView } from "@/shared/ui/feedback/NotFoundView";
import { PageBreadcrumb } from "@/shared/ui/primitives/PageBreadcrumb";
import { PatternDetail } from "@/widgets/pattern-detail/ui/PatternDetail";

function readReturnSearch(state: unknown): string {
  if (typeof state !== "object" || state === null || !("returnSearch" in state)) return "";
  const { returnSearch } = state;
  return typeof returnSearch === "string" && returnSearch.startsWith("?") ? returnSearch : "";
}

export function PatternDetailPage() {
  const { slug = "" } = useParams();
  const location = useLocation();
  const pattern = findPatternBySlug(slug);
  if (!pattern) return <NotFoundView />;
  const topic = ROADMAP_PATTERN_TOPICS.find(({ id }) => id === pattern.category);

  return (
    <div className="mx-auto max-w-page px-4 pt-8 pb-24 sm:px-6">
      <title>{`${pattern.name} (${pattern.nameKo}) · UI Pattern Atlas`}</title>
      <PageBreadcrumb
        parents={[
          { label: "모든 패턴", to: { pathname: "/", search: readReturnSearch(location.state) } },
          {
            label: topic?.nameKo ?? getCategory(pattern.category).labelKo,
            to: `/?category=${pattern.category}`,
          },
        ]}
        current={pattern.nameKo}
      />
      <div className="mt-8">
        <PatternDetail key={pattern.slug} pattern={pattern} />
      </div>
    </div>
  );
}
