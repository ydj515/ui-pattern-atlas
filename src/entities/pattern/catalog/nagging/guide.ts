import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "권한, 평가, 업그레이드 요청의 빈도를 정할 때",
    "거절을 얼마 동안 기억할지 정할 때",
    "요청 팝업의 선택지를 검토할 때",
  ],
  whenNotToUse: [
    "나중에만 있고 거절이 없을 때",
    "닫을 때마다 다른 화면에서 다시 띄울 때",
    "거절 기록을 앱 업데이트마다 지울 때",
  ],
  alternatives: [
    { name: "권한 요청 안내", slug: "permission-priming", reason: "필요한 순간에 한 번 묻기" },
    { name: "컨펌셰이밍", slug: "confirmshaming", reason: "거절 문구로 압박할 때" },
  ],
  accessibility: [
    "요청은 대화상자로 열고 Esc로 닫을 수 있게 합니다.",
    "다시 묻지 않기를 실제 버튼으로 둡니다.",
    "닫은 뒤 포커스를 원래 자리로 돌려줍니다.",
    "갑자기 뜨는 팝업으로 작업을 끊지 않습니다.",
  ],
};
