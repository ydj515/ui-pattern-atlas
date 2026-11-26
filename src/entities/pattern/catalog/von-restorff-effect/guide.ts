import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "1933년 독일 심리학자 헤트비히 폰 레스토프(Hedwig von Restorff)의 기억 실험에서 이름을 따왔어요. 고립 효과(isolation effect)라고도 해요.",
  whenToUse: [
    "요금제, 옵션 중 추천을 알릴 때",
    "중요한 경고나 새 기능을 목록에서 드러낼 때",
    "주요 버튼을 보조 버튼과 구분할 때",
  ],
  whenNotToUse: [
    "여러 개를 동시에 강조할 때(아무것도 튀지 않음)",
    "사용자에게 불리한 선택지를 튀게 만들 때",
    "색으로만 구분할 때",
  ],
  alternatives: [
    { name: "앵커링", slug: "anchoring", reason: "먼저 본 숫자가 기준이 되는 효과" },
    { name: "배지", slug: "badge", reason: "추천을 짧은 꼬리표로 표시할 때" },
  ],
  accessibility: [
    "강조를 색만이 아니라 글자(추천)와 테두리로도 줍니다.",
    "강조된 항목도 다른 항목과 같은 구조로 읽힙니다.",
    "대비를 충분히 둡니다.",
    "강조 이유를 글로 알려 줍니다.",
  ],
};
