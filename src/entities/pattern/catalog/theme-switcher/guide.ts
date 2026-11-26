import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "다크 모드를 지원하는 서비스",
    "기기 설정을 따르는 기본값을 둘 때",
    "고르기 전에 모습을 보여 주고 싶을 때",
  ],
  whenNotToUse: [
    "라이트와 다크만 오가는 아이콘 버튼 하나로 충분할 때",
    "테마가 하나뿐일 때",
    "색 말고 글자 크기 같은 다른 설정",
  ],
  alternatives: [
    { name: "세그먼트 컨트롤", slug: "segmented-control", reason: "짧은 선택지를 한 줄로 고를 때" },
    { name: "라디오 그룹", slug: "radio-group", reason: "선택지 하나를 고르는 기본 형태" },
  ],
  accessibility: [
    "fieldset과 legend로 묶은 라디오 버튼이라 방향키로 옮겨 다닙니다.",
    "미리 보기는 장식이라 aria-hidden입니다.",
    "시스템 설정의 지금 상태를 글자로 함께 읽어 줍니다.",
  ],
};
