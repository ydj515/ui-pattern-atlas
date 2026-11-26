import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const breadcrumbPattern: Pattern = {
  slug: "breadcrumb",

  name: "Breadcrumb",
  nameKo: "브레드크럼",
  aliases: ["경로 표시", "빵부스러기", "현재 위치", "location", "trail"],
  category: "navigation",
  summary: "지금 페이지가 어느 경로 아래에 있는지 보여주는 링크 묶음",
  description:
    "현재 페이지까지 이어지는 상위 경로를 한 줄로 보여주는 패턴입니다. 사용자는 위치를 파악하고 상위 단계로 한 번에 이동할 수 있습니다.",
  tags: [...BASE_TAGS, "aria-current"],
  loadGuide: () => import("@/entities/pattern/catalog/breadcrumb/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/breadcrumb/BreadcrumbDemo").then((m) => m.BreadcrumbDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/breadcrumb/BreadcrumbThumbnail").then(
      (m) => m.BreadcrumbThumbnail,
    ),
  sources: [
    {
      fileName: "Breadcrumb.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/breadcrumb/Breadcrumb.tsx?raw"),
    },
    {
      fileName: "BreadcrumbDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/breadcrumb/BreadcrumbDemo.tsx?raw"),
    },
  ],
};
