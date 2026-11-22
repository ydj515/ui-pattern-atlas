import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SplitViewThumbnail } from "@/entities/pattern/catalog/split-view/SplitViewThumbnail";

export const splitViewPattern: Pattern = {
  slug: "split-view",
  name: "Split View",
  nameKo: "분할 보기",
  aliases: ["목록 상세", "마스터 디테일", "master-detail", "two pane"],
  category: "layout",
  summary: "목록과 상세를 나란히",
  description:
    "넓은 화면에서는 목록과 상세를 나란히 놓고, 좁은 화면에서는 하나씩 보여 주는 패턴입니다. 창 크기가 아니라 놓인 영역의 폭(컨테이너 쿼리)에 반응합니다.",
  whenToUse: [
    "메일, 메신저, 설정처럼 목록에서 골라 자세히 보는 화면",
    "항목을 빠르게 옮겨 가며 볼 때",
    "태블릿, 데스크톱",
  ],
  whenNotToUse: [
    "상세가 아주 길고 집중해야 할 때(별도 화면)",
    "목록이 몇 개뿐일 때",
    "모바일만 쓰는 서비스(목록 → 상세 이동)",
  ],
  alternatives: [
    { name: "사이드바 레이아웃", slug: "sidebar-layout", reason: "메뉴와 본문을 나눌 때" },
    { name: "뒤로 가기", slug: "back-navigation", reason: "좁은 화면에서 목록으로 돌아올 때" },
  ],
  accessibility: [
    "좁은 화면에서는 보이지 않는 쪽을 display: none으로 숨겨 키보드와 보조 기술에서도 빠집니다.",
    '상세에는 "목록"으로 돌아가는 버튼을 둡니다.',
    "고른 항목은 aria-current로 표시합니다.",
    "컨테이너 쿼리라 패널 안에 넣어도 같은 규칙으로 동작합니다.",
  ],
  tags: [...BASE_TAGS, "Container queries", "Responsive"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/split-view/SplitViewDemo").then((m) => m.SplitViewDemo),
  Thumbnail: SplitViewThumbnail,
  sources: [
    {
      fileName: "SplitView.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/split-view/SplitView.tsx?raw"),
    },
    {
      fileName: "SplitViewDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/split-view/SplitViewDemo.tsx?raw"),
    },
  ],
};
