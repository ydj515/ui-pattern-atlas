import { type Pattern } from "../../model/pattern";
import { LeftDigitEffectThumbnail } from "./LeftDigitEffectThumbnail";

export const leftDigitEffectPattern: Pattern = {
  slug: "left-digit-effect",
  kind: "concept",
  name: "Left-Digit Effect",
  nameKo: "왼쪽 숫자 효과",
  aliases: ["끝자리 가격", "첫 자리 효과"],
  category: "pricing-psychology",
  summary: "맨 앞 숫자가 달라질 때 같은 금액 차이가 크게 느껴질 수 있는 효과",
  description:
    "5,800원에서 5,900원으로 오를 때와 5,900원에서 6,000원으로 오를 때의 차이는 모두 100원입니다. 첫 자리만 바뀌는 조건의 가격 쌍을 비교할 수 있습니다.",
  whenToUse: ["표시 숫자가 가격 지각에 주는 영향을 설명할 때"],
  whenNotToUse: ["표시 방식 때문에 실제 가격이나 차액을 확인하기 어렵게 만들 때"],
  alternatives: [
    {
      name: "취소선 가격",
      slug: "strikethrough-price",
      reason: "실제 할인 금액의 기준값과 적용가를 정확히 전달할 때",
    },
  ],
  accessibility: ["첫 자리 강조에 색상 외에도 굵기와 설명을 함께 쓰고 차액을 읽을 수 있게 합니다."],
  tags: ["가격의 심리", "가격 인식"],
  loadPreview: () => import("./LeftDigitEffectDemo").then((m) => m.LeftDigitEffectDemo),
  Thumbnail: LeftDigitEffectThumbnail,
  loadDemoSource: () => import("./LeftDigitEffectDemo.tsx?raw"),
};
