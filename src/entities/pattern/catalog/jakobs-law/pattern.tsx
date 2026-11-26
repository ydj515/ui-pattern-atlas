import { type Pattern } from "@/entities/pattern/model/pattern";

export const jakobsLawPattern: Pattern = {
  slug: "jakobs-law",

  kind: "concept",
  name: "Jakob's Law",
  nameKo: "제이콥의 법칙",
  aliases: ["제이콥 법칙", "익숙함의 법칙", "Jakob's law of internet UX", "conventions"],
  category: "ux-laws",
  summary: "사람들은 익숙한 방식대로 기대한다",
  description:
    "사람들은 대부분의 시간을 다른 서비스에서 보내므로, 내 서비스도 그곳과 같은 방식으로 동작하기를 기대한다는 원리입니다. 로고, 검색, 장바구니처럼 익숙한 자리를 지키면 배우지 않아도 쓸 수 있습니다.",
  tags: ["UX 법칙", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/jakobs-law/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/jakobs-law/JakobsLawDemo").then((m) => m.JakobsLawDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/jakobs-law/JakobsLawThumbnail").then(
      (m) => m.JakobsLawThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/jakobs-law/JakobsLawDemo.tsx?raw"),
};
