import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { BentoGridThumbnail } from "@/entities/pattern/catalog/bento-grid/BentoGridThumbnail";

export const bentoGridPattern: Pattern = {
  slug: "bento-grid",
  name: "Bento Grid",
  nameKo: "벤토 그리드",
  aliases: ["벤토 레이아웃", "타일 그리드", "bento layout", "feature tiles"],
  category: "layout",
  summary: "크기가 다른 칸을 맞춰 채우기",
  description:
    "크기가 다른 타일을 도시락처럼 빈틈없이 채워 기능이나 특징을 소개하는 패턴입니다. 가장 큰 칸이 핵심을, 작은 칸이 보조 내용을 맡습니다.",
  origin:
    "칸칸이 나뉜 일본 도시락(벤토) 상자처럼 크기가 다른 칸을 한 판에 담는 배치라 붙은 이름이에요. 애플 제품 소개 화면에서 자주 쓰이며 널리 알려졌어요.",
  whenToUse: [
    "제품 소개 페이지의 기능 모음",
    "중요도가 다른 정보를 한 화면에 묶을 때",
    "넓은 화면",
  ],
  whenNotToUse: [
    "항목 중요도가 모두 같을 때(반응형 그리드 사용)",
    "읽는 순서가 중요한 설명(목록 사용)",
    "좁은 화면에서 칸이 너무 작아질 때(한 열로 쌓기)",
  ],
  alternatives: [
    { name: "반응형 그리드", slug: "responsive-grid", reason: "같은 크기의 칸" },
    { name: "매거진 레이아웃", slug: "magazine-layout", reason: "대표 콘텐츠와 보조 콘텐츠" },
  ],
  accessibility: [
    "DOM 순서를 읽는 순서로 두고, 칸 크기는 grid span으로만 바꿉니다.",
    "가장 중요한 내용을 가장 큰 칸이자 첫 번째 칸에 둡니다.",
    "타일 안의 글과 배경 대비를 지킵니다.",
    "좁은 화면에서는 한 열로 쌓아 확대해도 읽기 쉽게 합니다.",
  ],
  tags: [...BASE_TAGS, "CSS grid", "Marketing"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/bento-grid/BentoGridDemo").then((m) => m.BentoGridDemo),
  Thumbnail: BentoGridThumbnail,
  sources: [
    {
      fileName: "BentoGrid.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bento-grid/BentoGrid.tsx?raw"),
    },
    {
      fileName: "BentoGridDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bento-grid/BentoGridDemo.tsx?raw"),
    },
  ],
};
