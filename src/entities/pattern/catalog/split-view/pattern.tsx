import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const splitViewPattern: Pattern = {
  slug: "split-view",

  name: "Split View",
  nameKo: "분할 보기",
  aliases: ["목록 상세", "마스터 디테일", "master-detail", "two pane"],
  category: "layout",
  summary: "목록과 상세를 나란히",
  description:
    "넓은 화면에서는 목록과 상세를 나란히 놓고, 좁은 화면에서는 하나씩 보여 주는 패턴입니다. 창 크기가 아니라 놓인 영역의 폭(컨테이너 쿼리)에 반응합니다.",
  tags: [...BASE_TAGS, "Container queries", "Responsive"],
  loadGuide: () => import("@/entities/pattern/catalog/split-view/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/split-view/SplitViewDemo").then((m) => m.SplitViewDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/split-view/SplitViewThumbnail").then(
      (m) => m.SplitViewThumbnail,
    ),
  sources: [
    {
      fileName: "SplitView.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/split-view/SplitView.tsx?raw"),
    },
    {
      fileName: "SplitViewDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/split-view/SplitViewDemo.tsx?raw"),
    },
  ],
};
