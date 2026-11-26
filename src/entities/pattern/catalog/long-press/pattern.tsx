import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const longPressPattern: Pattern = {
  slug: "long-press",

  name: "Long Press",
  nameKo: "길게 누르기",
  aliases: ["꾹 누르기", "롱 프레스", "press and hold", "context menu"],
  category: "gesture",
  summary: "꾹 눌러 숨은 메뉴 열기",
  description:
    "항목을 0.5초쯤 누르고 있으면 답장, 복사 같은 숨은 동작이 열리는 패턴입니다. 누르는 동안 살짝 줄어들어 반응 중임을 보여 주고, 손가락이 움직이면 취소해 스크롤과 헷갈리지 않게 합니다.",
  tags: [...BASE_TAGS, "Pointer Events", "aria-haspopup"],
  loadGuide: () => import("@/entities/pattern/catalog/long-press/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/long-press/LongPressDemo").then((m) => m.LongPressDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/long-press/LongPressThumbnail").then(
      (m) => m.LongPressThumbnail,
    ),
  sources: [
    {
      fileName: "LongPress.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/long-press/LongPress.tsx?raw"),
    },
    {
      fileName: "LongPressDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/long-press/LongPressDemo.tsx?raw"),
    },
  ],
};
