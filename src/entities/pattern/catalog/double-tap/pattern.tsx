import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const doubleTapPattern: Pattern = {
  slug: "double-tap",

  name: "Double Tap",
  nameKo: "두 번 눌러 좋아요",
  aliases: ["더블 탭", "두 번 탭", "double tap to like", "하트"],
  category: "gesture",
  summary: "사진을 두 번 눌러 좋아요",
  description:
    "사진을 빠르게 두 번 누르면 하트가 잠깐 커졌다 사라지며 좋아요가 되는 패턴입니다. 두 번 눌러서는 좋아요만 되고 취소는 되지 않으며, 옆의 좋아요 버튼으로 켜고 끌 수 있습니다.",
  tags: [...BASE_TAGS, "aria-pressed", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/double-tap/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/double-tap/DoubleTapDemo").then((m) => m.DoubleTapDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/double-tap/DoubleTapThumbnail").then(
      (m) => m.DoubleTapThumbnail,
    ),
  sources: [
    {
      fileName: "DoubleTap.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/double-tap/DoubleTap.tsx?raw"),
    },
    {
      fileName: "DoubleTapDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/double-tap/DoubleTapDemo.tsx?raw"),
    },
  ],
};
