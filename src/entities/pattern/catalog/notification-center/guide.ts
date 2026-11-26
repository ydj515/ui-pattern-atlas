import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "댓글, 배송, 승인 요청처럼 사용자가 없는 동안에도 소식이 쌓일 때",
    "토스트로 한 번 보여 준 알림을 나중에 다시 볼 수 있어야 할 때",
    "읽음과 안 읽음을 구분해야 할 때",
  ],
  whenNotToUse: [
    "알림이 드물거나 거의 없는 서비스(빈 벨이 오히려 소음)",
    "바로 처리해야 하는 긴급한 알림(배너나 대화상자 사용)",
    "방금 한 작업의 결과(토스트 사용)",
  ],
  alternatives: [
    { name: "토스트", slug: "toast", reason: "지금 막 일어난 일을 잠깐 알릴 때" },
    { name: "팝오버", slug: "popover", reason: "알림이 아닌 일반 정보나 설정을 띄울 때" },
  ],
  accessibility: [
    '안 읽은 개수를 버튼 이름에 넣어("알림, 안 읽음 3개") 빨간 배지만으로 전하지 않습니다.',
    "버튼은 aria-expanded와 aria-controls로 패널과 연결합니다.",
    "패널은 비모달 대화상자로 열리며 포커스를 받고, Esc나 바깥 클릭으로 닫히면 포커스가 종 버튼으로 돌아옵니다.",
    '안 읽은 항목에는 화면에 보이지 않는 "(안 읽음)" 텍스트를 붙여 파란 점의 의미를 전합니다.',
  ],
};
