import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "'모드(mode)'에서 온 말이에요. 창이 떠 있는 동안 화면이 이 창에만 응답하는 별도 모드로 바뀌어, 닫기 전에는 뒤의 화면을 쓸 수 없다는 뜻이에요.",
  whenToUse: [
    "되돌리기 어려운 작업(삭제, 결제)에 대한 확인이 필요할 때",
    "다음 단계로 넘어가기 전에 사용자의 명시적인 결정이 필요할 때",
    "짧은 입력(이름 변경 등)을 현재 맥락에서 바로 받아야 할 때",
  ],
  whenNotToUse: [
    "단순한 상태 변경 결과를 안내할 때",
    "작업 흐름을 불필요하게 중단시킬 때",
    "긴 폼이나 여러 단계의 입력이 필요할 때",
  ],
  alternatives: [
    { name: "토스트", slug: "toast", reason: "간단한 처리 결과 안내" },
    { name: "팝오버", slug: "popover", reason: "현재 맥락을 유지하는 부가 정보" },
    { name: "드로어", slug: "drawer", reason: "상대적으로 복잡한 입력 작업" },
  ],
  accessibility: [
    "네이티브 <dialog>의 showModal()을 사용해 포커스가 창 안에 갇히고 배경은 inert 상태가 됩니다.",
    "aria-labelledby와 aria-describedby로 제목과 설명을 창에 연결합니다.",
    "Esc 키로 닫을 수 있고, 닫히면 창을 열었던 버튼으로 포커스가 돌아갑니다.",
    "파괴적인 작업에서는 안전한 버튼(취소)에 초기 포커스를 둡니다.",
  ],
};
