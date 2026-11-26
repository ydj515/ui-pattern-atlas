import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["영상, 광고, 첫 화면의 짧은 연출", "리듬이 중요한 문구", "주의를 한 번 끌 때"],
  whenNotToUse: ["계속 반복되어 다른 내용을 방해할 때", "긴 문장", "멈출 방법이 없을 때"],
  alternatives: [
    { name: "단어 바꾸기", slug: "rotating-words", reason: "한 단어를 바꿔 보여 줄 때" },
    { name: "글자·줄 순차 등장", slug: "staggered-text-reveal", reason: "한 번만 나타날 때" },
  ],
  accessibility: [
    "움직임은 motion-safe로만 재생해 동작 줄이기 설정에서 멈춥니다.",
    "글자를 하나씩 나눠도 화면 읽기에는 aria-label로 문구 전체를 줍니다.",
    "계속 반복되는 움직임은 짧은 연출에만 씁니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
};
