import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const backNavigationPattern: Pattern = {
  slug: "back-navigation",

  name: "Back Navigation",
  nameKo: "뒤로 가기",
  aliases: ["목록으로", "스크롤 복원", "back button", "scroll restoration"],
  category: "navigation",
  summary: "이전 위치로 돌아가고 목록의 스크롤 위치를 복원",
  description:
    "상세 화면에서 목록으로 돌아올 때, 보던 스크롤 위치와 열었던 항목을 그대로 되살리는 패턴입니다. 다시 처음부터 찾지 않고 이어서 볼 수 있습니다.",
  tags: [...BASE_TAGS, "Scroll restoration", "Focus management"],
  loadGuide: () => import("@/entities/pattern/catalog/back-navigation/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/back-navigation/BackNavigationDemo").then(
      (m) => m.BackNavigationDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/back-navigation/BackNavigationThumbnail").then(
      (m) => m.BackNavigationThumbnail,
    ),
  sources: [
    {
      fileName: "BackNavigation.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/back-navigation/BackNavigation.tsx?raw"),
    },
    {
      fileName: "BackNavigationDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/back-navigation/BackNavigationDemo.tsx?raw"),
    },
  ],
};
