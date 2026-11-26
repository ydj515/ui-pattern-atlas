import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const pageTransitionPattern: Pattern = {
  slug: "page-transition",

  name: "Page Transition",
  nameKo: "페이지 전환",
  aliases: ["화면 전환", "푸시 전환", "페이드 스루", "screen transition", "navigation transition"],
  category: "motion",
  summary: "새 화면이 어디서 왔는지 보여 주는 전환",
  description:
    "목록에서 상세로 갈 때는 옆에서 밀려 들어오고, 돌아갈 때는 반대로 움직여 앞뒤 관계를 보여 주는 패턴입니다. 관계가 없는 화면은 페이드 스루, 잠깐 띄우는 화면은 아래에서 올라오는 모달 전환을 씁니다.",
  tags: [...BASE_TAGS, "Web Animations API", "Focus management", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/page-transition/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/page-transition/PageTransitionDemo").then(
      (m) => m.PageTransitionDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/page-transition/PageTransitionThumbnail").then(
      (m) => m.PageTransitionThumbnail,
    ),
  sources: [
    {
      fileName: "PageTransition.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/page-transition/PageTransition.tsx?raw"),
    },
    {
      fileName: "PageTransitionDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/page-transition/PageTransitionDemo.tsx?raw"),
    },
  ],
};
