import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "장바구니 수량, 인원 수처럼 작은 범위의 정수",
    "대부분 1~2번만 바꾸는 값",
    "최댓값, 최솟값이 정해진 값",
  ],
  whenNotToUse: [
    "범위가 넓은 숫자(금액, 키)는 텍스트 필드로 직접 입력",
    "대략적인 값을 고를 때(슬라이더 사용)",
    "소수점이 있는 값",
  ],
  alternatives: [
    { name: "텍스트 필드", slug: "text-field", reason: "큰 숫자를 직접 입력할 때" },
    { name: "세그먼트 컨트롤", slug: "segmented-control", reason: "보기 몇 개 중 하나를 고를 때" },
  ],
  accessibility: [
    '가운데 칸은 role="spinbutton"으로 aria-valuenow, valuemin, valuemax를 알립니다.',
    "위아래 화살표로 한 단계씩 바꾸고, 직접 입력한 값은 포커스를 떠날 때 범위 안으로 맞춥니다.",
    '버튼 이름은 "수량 줄이기", "수량 늘리기"처럼 무엇을 바꾸는지 말합니다.',
    '최댓값에 닿으면 버튼을 끄고 이유("최대 5개까지 살 수 있어요")를 글로 알립니다.',
  ],
};
