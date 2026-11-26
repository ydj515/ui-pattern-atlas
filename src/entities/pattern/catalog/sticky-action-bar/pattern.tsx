import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const stickyActionBarPattern: Pattern = {
  slug: "sticky-action-bar",
  name: "Sticky Action Bar",
  nameKo: "하단 고정 버튼",
  aliases: ["하단 CTA", "구매 바", "bottom bar", "sticky CTA"],
  category: "layout",
  summary: "모바일에서 늘 보이는 주요 버튼",
  description:
    "상품 설명을 읽는 동안에도 화면 아래에 가격과 구매 버튼이 남아 있는 패턴입니다. 엄지가 닿는 자리에 있어 바로 행동할 수 있습니다.",
  whenToUse: [
    "상품, 예약처럼 긴 설명 끝에 행동이 하나 있을 때",
    "모바일 화면",
    "가격 같은 요약을 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "행동이 여러 개일 때",
    "폼 입력 중 키보드가 올라올 때(가리지 않게 숨기기)",
    "데스크톱의 넓은 화면(옆에 붙은 요약 상자 사용)",
  ],
  alternatives: [
    { name: "플로팅 액션 버튼", slug: "fab", reason: "목록 화면의 대표 행동" },
    { name: "고정 헤더", slug: "sticky-header", reason: "위쪽에 고정할 때" },
  ],
  accessibility: [
    "홈 표시줄을 피하도록 safe-area-inset-bottom만큼 여백을 둡니다.",
    "페이지 끝에 같은 높이의 여백을 둬 마지막 내용이 가려지지 않게 합니다.",
    '버튼 결과("담았어요")를 글로 바꿔 보여 줍니다.',
    "막대는 문서 순서상 내용 뒤에 있어 읽는 순서가 자연스럽습니다.",
  ],
  tags: [...BASE_TAGS, "Mobile", "Safe area"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/sticky-action-bar/StickyActionBarDemo").then(
      (m) => m.StickyActionBarDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sticky-action-bar/StickyActionBarThumbnail").then(
      (m) => m.StickyActionBarThumbnail,
    ),
  sources: [
    {
      fileName: "StickyActionBar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/sticky-action-bar/StickyActionBar.tsx?raw"),
    },
    {
      fileName: "StickyActionBarDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/sticky-action-bar/StickyActionBarDemo.tsx?raw"),
    },
  ],
};
