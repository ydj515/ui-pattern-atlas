import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin: "사용성 전문가 제이콥 닐슨(Jakob Nielsen)이 2000년에 정리한 말에서 이름을 따왔어요.",
  whenToUse: [
    "머리글, 장바구니, 검색 위치를 정할 때",
    "새로운 배치가 정말 필요한지 따질 때",
    "플랫폼 관습을 따를지 정할 때",
  ],
  whenNotToUse: [
    "관습이 분명히 불편해 바꿀 근거가 있을 때(그때도 점진적으로)",
    "모든 화면을 다른 서비스와 똑같이 베낄 때",
    "브랜드 개성을 버려야 한다고 오해할 때",
  ],
  alternatives: [
    { name: "피츠의 법칙", slug: "fitts-law", reason: "버튼 크기와 거리" },
    { name: "고정 헤더", slug: "sticky-header", reason: "머리글을 늘 보이게 할 때" },
  ],
  accessibility: [
    "익숙한 랜드마크(header, nav, main) 구조를 따릅니다.",
    "아이콘에는 글자 이름을 함께 둡니다.",
    "검색 칸에는 label을 붙입니다.",
    "위치를 바꿀 때는 안내를 줍니다.",
  ],
};
