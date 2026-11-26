import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "책상 서랍(drawer)처럼 화면 옆에서 미끄러져 나왔다 들어간다는 뜻이에요. 구글 머티리얼 디자인이 '내비게이션 드로어'라는 이름으로 정리하면서 널리 쓰였어요.",
  whenToUse: [
    "필터, 설정처럼 여러 항목을 조정한 뒤 한 번에 적용할 때",
    "목록을 유지한 채 선택한 항목의 상세 정보를 보여줄 때",
    "모달에 담기에는 긴 입력 폼이 필요할 때",
  ],
  whenNotToUse: [
    "예/아니오 같은 단순한 확인만 필요할 때",
    "사용자가 패널과 본문을 동시에 계속 조작해야 할 때",
    "주요 내비게이션을 모바일 외 환경에서도 숨겨 버릴 때",
  ],
  alternatives: [
    { name: "모달 다이얼로그", slug: "modal-dialog", reason: "짧고 중요한 결정" },
    { name: "아코디언", slug: "accordion", reason: "페이지 안에서 펼쳐 보는 설정" },
    { name: "Bottom Sheet", reason: "모바일에서 한 손으로 다루는 선택지" },
  ],
  accessibility: [
    "모달 <dialog>로 열어 포커스를 패널 안에 가두고 배경을 inert 상태로 만듭니다.",
    "명확한 닫기 버튼(aria-label)과 Esc 키, 배경 클릭으로 닫을 수 있습니다.",
    "제목을 aria-labelledby로 연결해 스크린 리더가 패널의 목적을 읽습니다.",
    "적용 전까지는 임시 값을 사용해, 닫으면 변경 사항이 취소된다는 점을 명확히 합니다.",
  ],
};
