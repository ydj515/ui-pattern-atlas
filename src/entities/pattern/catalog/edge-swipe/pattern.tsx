import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { EdgeSwipeThumbnail } from "@/entities/pattern/catalog/edge-swipe/EdgeSwipeThumbnail";

export const edgeSwipePattern: Pattern = {
  slug: "edge-swipe",
  name: "Edge Swipe",
  nameKo: "가장자리 스와이프",
  aliases: ["가장자리에서 밀기", "뒤로 스와이프", "edge gesture", "drawer swipe"],
  category: "gesture",
  summary: "가장자리에서 밀어 메뉴 열기",
  description:
    "화면 왼쪽 가장자리에서 시작해 오른쪽으로 밀면 메뉴가 손가락을 따라 나오는 패턴입니다. 가장자리 24px 안에서 시작한 끌기만 받아 화면 안의 다른 가로 스크롤과 겹치지 않게 합니다.",
  whenToUse: [
    "메일, 메신저처럼 서랍 메뉴가 있는 모바일 앱",
    "메뉴 버튼과 함께 빠른 길로 제공할 때",
    "화면 가운데에 가로 제스처가 없을 때",
  ],
  whenNotToUse: [
    "운영체제의 뒤로 가기 제스처와 겹치는 곳(iOS 왼쪽 가장자리)",
    "메뉴 버튼 없이 제스처만 있을 때",
    "데스크톱",
  ],
  alternatives: [
    { name: "서랍", slug: "drawer", reason: "메뉴 버튼으로 여는 서랍" },
    { name: "스와이프 이동", slug: "swipe-navigation", reason: "같은 종류의 화면을 넘길 때" },
  ],
  accessibility: [
    "메뉴 버튼은 aria-expanded로 열림 상태를 알립니다.",
    "열린 메뉴는 Esc나 바깥을 눌러 닫을 수 있습니다.",
    "닫혀 있을 때 메뉴는 hidden이라 Tab이 들어가지 않습니다.",
    "지금 편지함은 aria-current로 표시합니다.",
  ],
  tags: [...BASE_TAGS, "Pointer Events", "aria-expanded"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/edge-swipe/EdgeSwipeDemo").then((m) => m.EdgeSwipeDemo),
  Thumbnail: EdgeSwipeThumbnail,
  sources: [
    {
      fileName: "EdgeSwipe.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/edge-swipe/EdgeSwipe.tsx?raw"),
    },
    {
      fileName: "EdgeSwipeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/edge-swipe/EdgeSwipeDemo.tsx?raw"),
    },
  ],
};
