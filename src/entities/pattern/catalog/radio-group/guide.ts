import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "옛날 자동차 라디오의 채널 버튼에서 왔어요. 버튼 하나를 누르면 이미 눌려 있던 버튼이 튀어나와 늘 하나만 눌려 있는 방식이 그대로 이름이 됐어요.",
  whenToUse: [
    "보기가 2~5개이고 서로 비교해야 할 때",
    "보기마다 가격, 기간 같은 설명을 붙여야 할 때",
    "하나는 꼭 골라야 할 때(기본값을 미리 골라 둘 수 있음)",
  ],
  whenNotToUse: [
    "보기가 많을 때(셀렉트나 콤보박스 사용)",
    "켜고 끄는 하나의 설정(스위치 사용)",
    "여러 개를 고를 수 있을 때(체크박스 사용)",
  ],
  alternatives: [
    { name: "셀렉트", slug: "select", reason: "보기가 많거나 공간이 좁을 때" },
    {
      name: "세그먼트 컨트롤",
      slug: "segmented-control",
      reason: "짧은 보기 2~4개로 화면 보기를 바꿀 때",
    },
    { name: "체크박스", slug: "checkbox", reason: "여러 개를 고를 때" },
  ],
  accessibility: [
    "fieldset과 legend로 묶어 무엇을 고르는 질문인지 함께 읽힙니다.",
    "기본 radio 입력이라 화살표 키로 보기를 옮기고 Tab은 그룹을 한 번에 지나갑니다.",
    "카드 전체가 label이라 누를 수 있는 영역이 넓습니다.",
    "선택 상태는 테두리 색뿐 아니라 채워진 라디오 표시로도 보입니다.",
  ],
};
