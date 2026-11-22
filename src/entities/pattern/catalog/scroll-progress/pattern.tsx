import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ScrollProgressThumbnail } from "@/entities/pattern/catalog/scroll-progress/ScrollProgressThumbnail";

export const scrollProgressPattern: Pattern = {
  slug: "scroll-progress",
  name: "Scroll Progress",
  nameKo: "스크롤 진행 바",
  aliases: ["읽기 진행 표시", "읽은 위치 막대", "reading progress", "scroll indicator"],
  category: "indicator",
  summary: "문서에서 읽은 위치를 위쪽 막대로 표시",
  description:
    "긴 글을 읽는 동안 맨 위의 가는 막대가 읽은 만큼 차오르는 패턴입니다. 남은 분량을 한눈에 알려 줍니다.",
  whenToUse: [
    "기사, 가이드처럼 끝까지 읽는 긴 글",
    "스크롤바가 잘 보이지 않는 모바일",
    "남은 분량이 읽기를 돕는 경우",
  ],
  whenNotToUse: [
    "짧은 글",
    "목록, 피드처럼 끝이 정해지지 않은 화면",
    "페이지 로딩 표시와 헷갈릴 수 있는 자리(상단 로딩 바와 따로 두기)",
  ],
  alternatives: [
    { name: "목차", slug: "table-of-contents", reason: "어느 섹션인지까지 보여 줄 때" },
    { name: "상단 로딩 바", slug: "top-loading-bar", reason: "불러오는 중임을 알릴 때" },
  ],
  accessibility: [
    "막대는 시각 보조라 aria-hidden입니다. 스크롤바와 문서 구조가 이미 위치를 알려 줍니다.",
    "transform만 바꿔 스크롤 중에도 가볍게 움직입니다.",
    "스크롤 이벤트는 passive로 등록합니다.",
    "글 영역은 포커스를 받아 키보드로 스크롤할 수 있습니다.",
  ],
  tags: [...BASE_TAGS, "Scroll", "Decorative"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/scroll-progress/ScrollProgressDemo").then(
      (m) => m.ScrollProgressDemo,
    ),
  Thumbnail: ScrollProgressThumbnail,
  sources: [
    {
      fileName: "ScrollProgress.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/scroll-progress/ScrollProgress.tsx?raw"),
    },
    {
      fileName: "ScrollProgressDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/scroll-progress/ScrollProgressDemo.tsx?raw"),
    },
  ],
};
