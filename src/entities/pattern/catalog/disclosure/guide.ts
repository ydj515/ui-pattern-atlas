import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "부가 설명, 자세한 조건처럼 필요할 때만 보는 내용",
    "질문 하나와 답처럼 짝을 이룬 내용",
    "고급 설정을 숨겨 둘 때",
  ],
  whenNotToUse: [
    "같은 종류가 여러 개일 때(아코디언 사용)",
    "대부분이 꼭 봐야 하는 내용",
    "내용이 짧아 접을 필요가 없을 때",
  ],
  alternatives: [
    { name: "아코디언", slug: "accordion", reason: "여러 개를 묶어 접을 때" },
    { name: "더 보기 접기", slug: "read-more", reason: "긴 글의 뒷부분을 줄일 때" },
  ],
  accessibility: [
    "제목은 h3 안의 button이고 aria-expanded와 aria-controls를 가집니다.",
    "접힌 내용은 hidden이라 Tab과 스크린 리더에서 빠집니다.",
    "화살표 아이콘은 장식이라 aria-hidden입니다.",
    "HTML만 쓴다면 details와 summary가 같은 역할을 합니다.",
  ],
};
