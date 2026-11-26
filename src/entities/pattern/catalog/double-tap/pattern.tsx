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
  whenToUse: [
    "사진 중심 피드에서 반응을 빠르게 남길 때",
    "같은 동작을 하는 버튼이 화면에 보일 때",
    "실수로 눌러도 문제가 없는 가벼운 반응",
  ],
  whenNotToUse: [
    "두 번 눌러 확대하는 화면(제스처가 겹침)",
    "구매나 삭제처럼 결과가 큰 동작",
    "버튼 없이 제스처만 있을 때",
  ],
  alternatives: [
    { name: "좋아요 버튼", reason: "눈에 보이는 버튼으로 반응할 때" },
    { name: "반응 고르기", reason: "여러 감정 중에서 고를 때" },
  ],
  accessibility: [
    "좋아요 버튼은 aria-pressed로 상태를 알리고 키보드로 켜고 끌 수 있습니다.",
    "하트 효과는 장식이라 aria-hidden입니다.",
    "touch-manipulation으로 브라우저의 두 번 눌러 확대를 막고 지연을 없앱니다.",
    "동작 줄이기 설정에서는 하트가 커지는 효과를 끕니다.",
  ],
  tags: [...BASE_TAGS, "aria-pressed", "Reduced motion"],
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
