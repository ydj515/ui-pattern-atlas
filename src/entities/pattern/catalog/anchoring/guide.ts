import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "배가 닻(anchor)을 내리면 그 근처에 머물듯, 처음 본 숫자 근처에서 판단한다는 뜻이에요. 1974년 아모스 트버스키(Amos Tversky)와 대니얼 카너먼이 소개했어요.",
  whenToUse: [
    "할인 전 가격, 비교 가격을 보여 줄 때",
    "요금제 순서를 정할 때",
    "가격 표시의 정직성을 검토할 때",
  ],
  whenNotToUse: [
    "판매한 적 없는 부풀린 정가를 보여 줄 때",
    "기준 가격의 출처를 숨길 때",
    "비교 대상이 다른 상품일 때",
  ],
  alternatives: [
    { name: "취소선 가격", slug: "strikethrough-price", reason: "할인 전후 가격 표시" },
    { name: "미끼 효과", slug: "decoy-effect", reason: "선택지 구성으로 판단이 달라질 때" },
  ],
  accessibility: [
    "취소선 가격은 정가라는 글자를 함께 둬 화면 읽기에서도 뜻이 전해지게 합니다.",
    "할인 금액을 글로 적습니다.",
    "색과 취소선만으로 의미를 전하지 않습니다.",
    "가격은 tabular-nums로 정렬합니다.",
  ],
};
