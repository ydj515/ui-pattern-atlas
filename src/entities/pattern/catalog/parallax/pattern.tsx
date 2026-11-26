import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const parallaxPattern: Pattern = {
  slug: "parallax",
  name: "Parallax",
  nameKo: "패럴랙스",
  aliases: ["시차 스크롤", "패럴렉스", "parallax scrolling", "depth scroll"],
  category: "motion",
  summary: "배경이 다른 속도로 움직이기",
  description:
    "스크롤할 때 앞의 글보다 뒤의 그림이 느리게 움직여 깊이감을 주는 패턴입니다. 스크롤 위치를 상태로 다시 그리지 않고 스타일에 바로 써서 부드럽게 움직이고, 동작 줄이기에서는 함께 스크롤됩니다.",
  whenToUse: [
    "여행, 캠페인처럼 분위기가 중요한 소개 페이지의 상단",
    "큰 그림 위에 짧은 글이 올라갈 때",
    "한 페이지에 한두 곳만",
  ],
  whenNotToUse: [
    "읽기와 작업이 중심인 화면",
    "여러 층이 서로 다른 방향으로 크게 움직일 때(멀미 유발)",
    "저사양 기기가 많은 서비스",
  ],
  alternatives: [
    { name: "스크롤 등장", slug: "scroll-reveal", reason: "내용을 보일 때 한 번만 움직일 때" },
    { name: "히어로 섹션", slug: "hero-section", reason: "움직임 없이 첫 화면을 강조할 때" },
  ],
  accessibility: [
    "배경은 장식이라 aria-hidden입니다.",
    "동작 줄이기에서는 배경을 고정 속도로 함께 스크롤합니다(WCAG 2.3.3).",
    "스크롤 영역은 tabIndex와 이름이 있어 키보드로 내릴 수 있습니다.",
    "글은 배경과 겹치지 않는 흰 영역에 있어 대비가 유지됩니다.",
  ],
  tags: [...BASE_TAGS, "Scroll events", "will-change", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/parallax/ParallaxDemo").then((m) => m.ParallaxDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/parallax/ParallaxThumbnail").then(
      (m) => m.ParallaxThumbnail,
    ),
  sources: [
    {
      fileName: "Parallax.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/parallax/Parallax.tsx?raw"),
    },
    {
      fileName: "ParallaxDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/parallax/ParallaxDemo.tsx?raw"),
    },
  ],
};
