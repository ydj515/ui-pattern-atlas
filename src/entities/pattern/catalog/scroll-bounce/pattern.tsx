import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const scrollBouncePattern: Pattern = {
  slug: "scroll-bounce",

  name: "Scroll Bounce",
  nameKo: "스크롤 바운스백",
  aliases: ["오버스크롤", "고무줄 스크롤", "overscroll", "rubber band"],
  category: "gesture",
  summary: "끝에서 늘어났다 돌아오는 스크롤",
  description:
    "목록의 처음이나 끝에서 더 당기면 손가락 거리의 3분의 1만큼 늘어나다가 놓으면 튕기듯 돌아오는 패턴입니다. 더 내용이 없다는 것을 손으로 느끼게 하고, 뒤의 페이지까지 스크롤되지 않게 막습니다.",
  tags: [...BASE_TAGS, "overscroll-behavior", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/scroll-bounce/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/scroll-bounce/ScrollBounceDemo").then(
      (m) => m.ScrollBounceDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/scroll-bounce/ScrollBounceThumbnail").then(
      (m) => m.ScrollBounceThumbnail,
    ),
  sources: [
    {
      fileName: "ScrollBounce.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/scroll-bounce/ScrollBounce.tsx?raw"),
    },
    {
      fileName: "ScrollBounceDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/scroll-bounce/ScrollBounceDemo.tsx?raw"),
    },
  ],
};
