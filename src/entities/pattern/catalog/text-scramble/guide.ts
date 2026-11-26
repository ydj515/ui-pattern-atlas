import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "연결 완료, 인증 성공처럼 처리 결과가 나오는 순간",
    "기술, 보안 느낌의 브랜드",
    "짧은 제목 한 줄",
  ],
  whenNotToUse: [
    "긴 문장이나 본문",
    "실제 처리 시간을 감추려고 길게 끌 때",
    "자주 반복되는 상태 문구",
  ],
  alternatives: [
    { name: "타이핑 효과", slug: "typewriter", reason: "한 글자씩 차분히 써 보일 때" },
    { name: "페이드", slug: "fade", reason: "결과를 조용히 바꿀 때" },
  ],
  accessibility: [
    "화면 읽기에는 sr-only로 진짜 문장만 줍니다.",
    "섞이는 기호는 aria-hidden입니다.",
    "결과 문구는 role=status 영역 안에 있어 바뀌면 알려 줍니다.",
    "동작 줄이기에서는 섞지 않고 결과를 바로 보여 줍니다.",
  ],
};
