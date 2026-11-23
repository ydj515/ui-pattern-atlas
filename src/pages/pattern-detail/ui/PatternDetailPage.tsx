import { Navigate, useLocation, useParams } from "react-router";

import { findPatternBySlug } from "@/entities/pattern/catalog";
import {
  catalogCategoryHref,
  catalogSectionFor,
  ROADMAP_PATTERN_TOPICS,
} from "@/entities/pattern/catalog/roadmap";
import { getCategory } from "@/entities/pattern/model/category";
import { patternPath } from "@/entities/pattern/model/pattern";
import { NotFoundView } from "@/shared/ui/feedback/NotFoundView";
import { CatalogBreadcrumb } from "@/entities/pattern/ui/CatalogBreadcrumb";
import { PatternDetail } from "@/widgets/pattern-detail/ui/PatternDetail";

export function PatternDetailPage() {
  const { slug = "" } = useParams();
  const pattern = findPatternBySlug(slug);
  const { pathname, search, hash } = useLocation();
  if (!pattern) return <NotFoundView />;
  // A concept opened under /patterns (or the reverse) moves to its one canonical address.
  const canonical = patternPath(pattern);
  if (pathname !== canonical)
    return <Navigate to={{ pathname: canonical, search, hash }} replace />;
  const topic = ROADMAP_PATTERN_TOPICS.find(({ id }) => id === pattern.category);

  const section = topic && catalogSectionFor(topic);

  return (
    <div className="mx-auto max-w-page px-4 pt-8 pb-24 sm:px-6">
      <title>{`${pattern.name} (${pattern.nameKo}) · UI Pattern Atlas`}</title>
      <CatalogBreadcrumb
        parents={[
          ...(section ? [{ label: section.label, to: catalogCategoryHref(section.id) }] : []),
          {
            label: topic?.nameKo ?? getCategory(pattern.category).labelKo,
            to: catalogCategoryHref(pattern.category),
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
