import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "일간/주간/월간처럼 같은 데이터의 기준을 바꿀 때",
    "목록 보기/카드 보기 같은 표시 방식을 전환할 때",
    "선택지가 2~5개이고 라벨이 짧을 때",
  ],
  whenNotToUse: [
    "선택지가 많거나 라벨이 길 때(드롭다운 검토)",
    "완전히 다른 콘텐츠 영역으로 이동할 때",
    "여러 개를 동시에 선택해야 할 때",
  ],
  alternatives: [
    { name: "탭", slug: "tabs", reason: "서로 다른 콘텐츠 패널 전환" },
    { name: "스위치", slug: "switch", reason: "켜고 끄는 두 가지 상태" },
    { name: "Select", reason: "선택지가 6개 이상" },
  ],
  accessibility: [
    "네이티브 라디오 입력을 사용해 방향키 이동과 선택을 브라우저가 처리합니다.",
    "<fieldset>과 <legend>로 그룹 이름을 제공합니다(시각적으로 숨길 수 있음).",
    "선택 상태는 배경색과 그림자, 글자 굵기를 함께 바꿔 색상에만 의존하지 않습니다.",
    "포커스 링은 숨긴 입력 대신 보이는 라벨에 peer-focus-visible로 그립니다.",
  ],
};
