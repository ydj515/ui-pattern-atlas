import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["게임, 테크, 사이버 분위기의 제목", "오류나 해킹을 주제로 한 연출", "짧은 단어"],
  whenNotToUse: [
    "실제 오류 메시지(진짜 문제로 오해)",
    "긴 문장",
    "움직이는 글리치를 계속 반복할 때",
  ],
  alternatives: [
    { name: "애시드 그래픽", slug: "acid-graphic", reason: "강렬한 형광색" },
    { name: "키네틱", slug: "kinetic-typography", reason: "움직임으로 강조" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
