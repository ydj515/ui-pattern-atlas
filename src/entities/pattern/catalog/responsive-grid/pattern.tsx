import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const responsiveGridPattern: Pattern = {
  slug: "responsive-grid",

  name: "Responsive Grid",
  nameKo: "반응형 그리드",
  aliases: ["자동 열 그리드", "auto-fill grid", "fluid grid", "responsive columns"],
  category: "layout",
  summary: "폭에 따라 열 수가 바뀌는 격자",
  description:
    "칸의 최소 폭만 정해 두면 들어갈 수 있는 만큼 열이 자동으로 생기는 격자입니다. 중단점 없이 어떤 폭에서도 칸이 고르게 채워집니다.",
  tags: [...BASE_TAGS, "CSS grid", "Reflow"],
  loadGuide: () => import("@/entities/pattern/catalog/responsive-grid/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/responsive-grid/ResponsiveGridDemo").then(
      (m) => m.ResponsiveGridDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/responsive-grid/ResponsiveGridThumbnail").then(
      (m) => m.ResponsiveGridThumbnail,
    ),
  sources: [
    {
      fileName: "ResponsiveGrid.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/responsive-grid/ResponsiveGrid.tsx?raw"),
    },
    {
      fileName: "ResponsiveGridDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/responsive-grid/ResponsiveGridDemo.tsx?raw"),
    },
  ],
};
