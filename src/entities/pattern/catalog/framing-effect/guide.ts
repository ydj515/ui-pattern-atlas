import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "같은 내용을 어떤 틀(frame)에 담느냐에 따라 선택이 달라진다는 뜻으로, 1981년 아모스 트버스키와 대니얼 카너먼의 연구로 알려졌어요.",
  whenToUse: [
    "수치, 확률, 성분을 알릴 때",
    "같은 정보를 어떻게 말할지 정할 때",
    "의료, 금융처럼 판단이 중요한 안내",
  ],
  whenNotToUse: [
    "불리한 사실을 좋은 틀로만 감출 때",
    "비교 기준을 바꿔 가며 유리하게 보이게 할 때",
    "숫자 없이 인상만 남길 때",
  ],
  alternatives: [
    { name: "손실 회피", slug: "loss-aversion", reason: "잃는다는 말의 무게" },
    { name: "앵커링", slug: "anchoring", reason: "먼저 본 숫자의 영향" },
  ],
  accessibility: [
    "숫자와 단위를 글로 분명히 적습니다.",
    "색과 배지 모양만으로 좋고 나쁨을 전하지 않습니다.",
    "필요하면 두 표현을 함께 보여 줍니다.",
    "성분표처럼 전체 정보로 연결합니다.",
  ],
};
