import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { BadgeThumbnail } from "@/entities/pattern/catalog/badge/BadgeThumbnail";

export const badgePattern: Pattern = {
  slug: "badge",
  name: "Badge",
  nameKo: "배지",
  aliases: ["숫자 배지", "카운트 배지", "count badge", "notification badge"],
  category: "indicator",
  summary: "새 알림 개수",
  description:
    '아이콘 위에 작은 숫자를 붙여 새 알림이나 담긴 상품 수를 알려 주는 패턴입니다. 큰 숫자는 "99+"로 줄이고, 없을 때는 아예 보이지 않습니다.',
  whenToUse: [
    "장바구니, 알림처럼 개수가 행동을 부르는 곳",
    "아이콘 버튼 위에 짧게 알려 줄 때",
    "개수가 자주 바뀔 때",
  ],
  whenNotToUse: [
    "개수가 중요하지 않고 새로 생겼다는 것만 알리면 될 때(새 기능 점 사용)",
    "상태를 알릴 때(상태 점 사용)",
    "모든 메뉴에 붙여 눈에 띄지 않게 될 때",
  ],
  alternatives: [
    { name: "새 기능 점", slug: "feature-dot", reason: "개수 없이 새로 생긴 것만 알릴 때" },
    { name: "안 읽음 표시", slug: "unread-indicator", reason: "목록의 항목별 새 표시" },
  ],
  accessibility: [
    '배지는 장식이라 aria-hidden이고, 개수는 버튼 이름("장바구니, 상품 3개")에 넣습니다.',
    "0일 때는 렌더링하지 않습니다.",
    '큰 숫자는 "99+"로 줄여 버튼을 가리지 않습니다.',
    "흰 테두리로 아이콘과 겹쳐도 구분됩니다.",
  ],
  tags: [...BASE_TAGS, "aria-label", "Icon button"],
  loadPreview: () => import("@/entities/pattern/catalog/badge/BadgeDemo").then((m) => m.BadgeDemo),
  Thumbnail: BadgeThumbnail,
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
