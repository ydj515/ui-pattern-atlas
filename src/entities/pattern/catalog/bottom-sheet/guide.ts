import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "화면 아래(bottom)에서 종이 한 장(sheet)이 올라오는 모습에서 온 이름이에요. 구글 머티리얼 디자인에서 정리한 용어예요.",
  whenToUse: [
    "정렬, 공유 대상처럼 몇 개의 선택지 중 하나를 고를 때",
    "현재 화면을 유지한 채 항목에 대한 동작(편집, 삭제, 공유)을 모아 보여 줄 때",
    "모바일에서 화면 위쪽보다 손이 닿기 쉬운 곳에 선택지를 두고 싶을 때",
  ],
  whenNotToUse: [
    "여러 단계로 이어지는 긴 입력이나 긴 본문을 담아야 할 때",
    "되돌릴 수 없는 작업을 반드시 확인받아야 할 때",
    "넓은 화면에서 마우스로 쓰는 메뉴일 때(드롭다운 메뉴가 더 가깝게 뜹니다)",
  ],
  alternatives: [
    {
      name: "모달 다이얼로그",
      slug: "modal-dialog",
      reason: "중요한 결정과 그 영향에 집중해야 할 때",
    },
    { name: "드로어", slug: "drawer", reason: "화면 옆에서 긴 필터나 상세 정보를 다룰 때" },
    {
      name: "드롭다운 메뉴",
      slug: "dropdown-menu",
      reason: "데스크톱에서 버튼 바로 아래에 동작 목록을 띄울 때",
    },
  ],
  accessibility: [
    "네이티브 <dialog>의 showModal()로 열어 포커스를 패널 안에 가두고 배경을 inert 상태로 만듭니다.",
    "제목을 aria-labelledby로 연결해 스크린 리더가 패널의 목적을 먼저 읽습니다.",
    "Esc 키, 배경 누르기, 보이는 닫기 버튼 중 무엇으로도 닫을 수 있어 스와이프에만 의존하지 않습니다.",
    "올라오는 애니메이션은 prefers-reduced-motion에서 꺼집니다.",
  ],
};
