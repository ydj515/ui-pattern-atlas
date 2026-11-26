import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const scrollRevealPattern: Pattern = {
  slug: "scroll-reveal",
  name: "Scroll Reveal",
  nameKo: "스크롤 등장",
  aliases: ["스크롤 애니메이션", "페이드 업", "reveal on scroll", "scroll animation"],
  category: "motion",
  summary: "스크롤해 보일 때 나타나기",
  description:
    "내용이 화면에 들어오는 순간 아래에서 살짝 올라오거나 커지며 나타나는 패턴입니다. IntersectionObserver로 처음 보일 때 한 번만 재생하고, 관찰을 지원하지 않으면 처음부터 보여 줍니다.",
  whenToUse: [
    "소개, 상품 목록처럼 내려가며 훑는 긴 페이지",
    "섹션이 바뀌는 것을 가볍게 알릴 때",
    "한 번 재생되고 끝나는 효과",
  ],
  whenNotToUse: [
    "자주 쓰는 앱 화면(볼 때마다 기다리게 됨)",
    "검색 결과처럼 바로 읽어야 하는 내용",
    "스크롤 위치마다 계속 바뀌는 큰 효과",
  ],
  alternatives: [
    { name: "순차 등장", slug: "stagger", reason: "여러 항목을 한 번에 차례로 보여 줄 때" },
    { name: "패럴랙스", slug: "parallax", reason: "스크롤에 따라 깊이를 줄 때" },
  ],
  accessibility: [
    "관찰 기능이 없으면 처음부터 보여 내용이 숨겨진 채 남지 않습니다.",
    "한 번 나타나면 다시 숨기지 않습니다.",
    "동작 줄이기에서는 이동, 확대 없이 투명도만 바꿉니다.",
    "스크롤 영역은 tabIndex와 이름이 있어 키보드로 내릴 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "IntersectionObserver", "CSS transition", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/scroll-reveal/RevealDemo").then((m) => m.RevealDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/scroll-reveal/RevealThumbnail").then(
      (m) => m.RevealThumbnail,
    ),
  sources: [
    {
      fileName: "Reveal.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/scroll-reveal/Reveal.tsx?raw"),
    },
    {
      fileName: "RevealDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/scroll-reveal/RevealDemo.tsx?raw"),
    },
  ],
};
