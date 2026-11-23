import { type Pattern } from "@/entities/pattern/model/pattern";
import { JakobsLawThumbnail } from "@/entities/pattern/catalog/jakobs-law/JakobsLawThumbnail";

export const jakobsLawPattern: Pattern = {
  slug: "jakobs-law",
  kind: "concept",
  name: "Jakob's Law",
  nameKo: "제이콥의 법칙",
  aliases: ["제이콥 법칙", "익숙함의 법칙", "Jakob's law of internet UX", "conventions"],
  category: "dark-pattern-ux",
  summary: "사람들은 익숙한 방식대로 기대한다",
  description:
    "사람들은 대부분의 시간을 다른 서비스에서 보내므로, 내 서비스도 그곳과 같은 방식으로 동작하기를 기대한다는 원리입니다. 로고, 검색, 장바구니처럼 익숙한 자리를 지키면 배우지 않아도 쓸 수 있습니다.",
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
  tags: ["다크 패턴과 UX 심리", "UX 심리"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/jakobs-law/JakobsLawDemo").then((m) => m.JakobsLawDemo),
  Thumbnail: JakobsLawThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/jakobs-law/JakobsLawDemo.tsx?raw"),
};
