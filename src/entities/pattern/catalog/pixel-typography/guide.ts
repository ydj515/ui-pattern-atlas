import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["게임, 레트로 이벤트", "전광판, 시계 같은 연출", "짧은 제목"],
  whenNotToUse: ["긴 한글 문장(획이 뭉개짐)", "작은 크기", "읽기가 중요한 안내"],
  alternatives: [
    { name: "모노스페이스", slug: "monospace", reason: "같은 폭의 칸" },
    { name: "글리치", slug: "glitch", reason: "디지털 오류 느낌" },
  ],
  accessibility: [
    "SVG로 그린 글자는 role=img와 aria-label(주말 마켓)로 읽힙니다.",
    "픽셀 글자는 작게 쓰면 읽기 어려우니 크게 씁니다.",
    "같은 문구를 글로도 둘 수 있게 합니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
