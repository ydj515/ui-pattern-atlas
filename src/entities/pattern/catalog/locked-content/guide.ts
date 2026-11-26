import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "유료 기사, 강의, 리포트처럼 일부를 미리 보여 줄 수 있는 내용",
    "로그인하거나 가입하면 볼 수 있는 내용",
    "가격이나 조건을 한 줄로 설명할 수 있을 때",
  ],
  whenNotToUse: [
    "권한을 다른 사람이 줘야 하는 경우(권한 없음 사용)",
    "미리보기 없이 잠그면 무엇인지 알 수 없는 내용",
    "검색 엔진에 전체 내용을 보여 주고 사람에게만 숨기는 경우",
  ],
  alternatives: [
    { name: "권한 없음", slug: "permission-denied", reason: "소유자에게 권한을 요청해야 할 때" },
    {
      name: "요금제 비교",
      slug: "pricing-plan-comparison",
      reason: "여러 요금제 중에서 골라야 할 때",
    },
  ],
  accessibility: [
    "잠긴 부분은 흐리게 가린 실제 글이 아니라 아예 렌더링하지 않아, 스크린 리더와 페이지 소스로 읽을 수 없습니다.",
    "흐려지는 그라데이션은 장식이라 aria-hidden으로 둡니다.",
    "이용 조건(가격, 대상)을 버튼 근처의 글로 먼저 알려 줍니다.",
    '버튼 이름이 결과를 말합니다("멤버십 시작하기").',
  ],
};
