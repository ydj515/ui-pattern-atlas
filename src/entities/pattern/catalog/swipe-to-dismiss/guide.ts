import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "공유, 옵션처럼 잠깐 띄우는 모바일 시트",
    "한 손으로 닫기 쉬워야 할 때",
    "닫아도 잃는 내용이 없을 때",
  ],
  whenNotToUse: [
    "작성 중인 내용이 있는 시트(닫기 전에 확인)",
    "시트 안에 세로 스크롤 목록이 길 때(손잡이에만 제스처)",
    "데스크톱 대화상자",
  ],
  alternatives: [
    { name: "바텀시트", slug: "bottom-sheet", reason: "시트 자체의 구조와 높이" },
    { name: "모달 다이얼로그", slug: "modal-dialog", reason: "데스크톱이나 확인이 필요할 때" },
  ],
  accessibility: [
    "닫기 버튼과 Esc로도 닫을 수 있어 끌기가 유일한 방법이 아닙니다.",
    "닫히면 시트를 연 버튼으로 포커스를 돌려줍니다.",
    "끄는 영역은 손잡이로 한정해 시트 안의 스크롤을 막지 않습니다.",
    "동작 줄이기 설정에서는 되돌아가는 애니메이션을 끕니다.",
  ],
};
