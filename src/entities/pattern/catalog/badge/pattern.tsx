import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const badgePattern: Pattern = {
  slug: "badge",

  name: "Badge",
  nameKo: "배지",
  aliases: ["숫자 배지", "카운트 배지", "count badge", "notification badge"],
  category: "indicator",
  summary: "새 알림 개수",
  description:
    '아이콘 위에 작은 숫자를 붙여 새 알림이나 담긴 상품 수를 알려 주는 패턴입니다. 큰 숫자는 "99+"로 줄이고, 없을 때는 아예 보이지 않습니다.',
  tags: [...BASE_TAGS, "aria-label", "Icon button"],
  loadGuide: () => import("@/entities/pattern/catalog/badge/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/badge/BadgeDemo").then((m) => m.BadgeDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/badge/BadgeThumbnail").then((m) => m.BadgeThumbnail),
  sources: [
    {
      fileName: "Badge.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/badge/Badge.tsx?raw"),
    },
    {
      fileName: "BadgeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/badge/BadgeDemo.tsx?raw"),
    },
  ],
};
