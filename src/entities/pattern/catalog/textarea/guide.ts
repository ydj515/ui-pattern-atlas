import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "후기, 문의, 메모처럼 길이가 정해지지 않은 글",
    "글자 수 제한이 있을 때",
    "쓴 내용을 한눈에 보며 고쳐야 할 때",
  ],
  whenNotToUse: [
    "한 줄짜리 입력(텍스트 필드 사용)",
    "서식이 필요한 긴 글(리치 텍스트 에디터 사용)",
    "화면 높이가 고정된 곳에서 끝없이 늘어나면 안 될 때(최대 높이 지정)",
  ],
  alternatives: [{ name: "텍스트 필드", slug: "text-field", reason: "짧은 한 줄 입력" }],
  accessibility: [
    "글자 수는 aria-describedby로 연결되어 필드에 들어가면 함께 읽힙니다.",
    "글자를 칠 때마다 읽어 주지 않도록 글자 수를 live region으로 두지 않습니다.",
    "maxLength로 제한을 넘지 않게 하고, 90%를 넘으면 색과 숫자로 알려 줍니다.",
    "높이는 내용에 맞추되 resize 손잡이는 숨겨 레이아웃이 깨지지 않게 합니다.",
  ],
};
