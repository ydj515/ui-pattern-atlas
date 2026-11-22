import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ScrollBounceThumbnail } from "@/entities/pattern/catalog/scroll-bounce/ScrollBounceThumbnail";

export const scrollBouncePattern: Pattern = {
  slug: "scroll-bounce",
  name: "Scroll Bounce",
  nameKo: "스크롤 바운스백",
  aliases: ["오버스크롤", "고무줄 스크롤", "overscroll", "rubber band"],
  category: "gesture",
  summary: "끝에서 늘어났다 돌아오는 스크롤",
  description:
    "목록의 처음이나 끝에서 더 당기면 손가락 거리의 3분의 1만큼 늘어나다가 놓으면 튕기듯 돌아오는 패턴입니다. 더 내용이 없다는 것을 손으로 느끼게 하고, 뒤의 페이지까지 스크롤되지 않게 막습니다.",
  whenToUse: [
    "모바일 앱처럼 보이는 스크롤 영역의 끝을 알릴 때",
    "모달이나 패널 안의 스크롤이 페이지로 새지 않게 할 때",
    "당겨서 새로고침과 함께 쓸 때",
  ],
  whenNotToUse: [
    "브라우저가 이미 바운스를 주는 iOS 기본 스크롤",
    "긴 문서 페이지 전체",
    "동작 줄이기를 켠 사용자",
  ],
  alternatives: [
    { name: "당겨서 새로고침", slug: "pull-to-refresh", reason: "끝에서 당겨 새 내용을 불러올 때" },
    { name: "관성 스크롤", slug: "momentum-scrolling", reason: "손을 뗀 뒤에도 이어지는 스크롤" },
  ],
  accessibility: [
    "overscroll-behavior: contain으로 스크롤 체이닝을 막습니다.",
    "스크롤 영역은 tabIndex와 이름이 있어 키보드로 스크롤할 수 있습니다.",
    "늘어나는 효과는 장식이라 정보 전달에 쓰지 않습니다.",
    "동작 줄이기 설정에서는 튕기는 애니메이션을 끕니다.",
  ],
  tags: [...BASE_TAGS, "overscroll-behavior", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/scroll-bounce/ScrollBounceDemo").then(
      (m) => m.ScrollBounceDemo,
    ),
  Thumbnail: ScrollBounceThumbnail,
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
