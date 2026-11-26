import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const momentumScrollingPattern: Pattern = {
  slug: "momentum-scrolling",
  name: "Momentum Scrolling",
  nameKo: "관성 스크롤",
  aliases: ["관성", "플링", "inertia scrolling", "fling"],
  category: "gesture",
  summary: "손을 떼도 이어지다 멈추는 스크롤",
  description:
    "빠르게 밀고 손을 떼면 그 속도로 계속 미끄러지다가 점점 느려져 멈추는 스크롤입니다. 터치와 휠은 브라우저가 이미 해 주므로, 마우스로 끌어 넘기는 경우에만 같은 느낌을 더합니다.",
  whenToUse: [
    "재생 목록처럼 긴 목록을 빠르게 훑을 때",
    "마우스로 끌어 넘기는 키오스크나 미리 보기 화면",
    "브라우저 기본 스크롤과 같은 감각을 맞춰야 할 때",
  ],
  whenNotToUse: [
    "브라우저 기본 스크롤로 충분할 때(직접 만들지 않기)",
    "정확한 위치에 멈춰야 하는 목록(scroll snap 사용)",
    "동작 줄이기를 켠 사용자",
  ],
  alternatives: [
    { name: "무한 스크롤", slug: "infinite-scroll", reason: "끝에 닿으면 더 불러올 때" },
    { name: "스크롤 바운스백", slug: "scroll-bounce", reason: "끝에 닿았음을 알릴 때" },
  ],
  accessibility: [
    "스크롤 영역은 tabIndex와 이름이 있어 키보드로 스크롤할 수 있습니다.",
    "동작 줄이기 설정이면 손을 뗀 뒤 미끄러지지 않습니다.",
    "터치와 휠은 브라우저 기본 동작을 그대로 씁니다.",
    "overscroll-behavior: contain으로 끝에서 페이지가 함께 밀리지 않습니다.",
  ],
  tags: [...BASE_TAGS, "requestAnimationFrame", "Reduced motion"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/momentum-scrolling/MomentumScrollDemo").then(
      (m) => m.MomentumScrollDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/momentum-scrolling/MomentumScrollThumbnail").then(
      (m) => m.MomentumScrollThumbnail,
    ),
  sources: [
    {
      fileName: "MomentumScroll.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/momentum-scrolling/MomentumScroll.tsx?raw"),
    },
    {
      fileName: "MomentumScrollDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/momentum-scrolling/MomentumScrollDemo.tsx?raw"),
    },
  ],
};
