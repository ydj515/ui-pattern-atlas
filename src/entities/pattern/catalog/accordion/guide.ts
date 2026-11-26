import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "주름 상자를 접었다 폈다 하는 악기 아코디언처럼, 칸을 접고 펼쳐 내용을 줄였다 늘렸다 한다는 데서 온 이름이에요.",
  whenToUse: [
    "FAQ처럼 사용자가 필요한 항목만 골라 읽는 콘텐츠일 때",
    "모바일에서 긴 설정이나 정보를 섹션별로 정리할 때",
    "제목만으로도 내용을 충분히 예측할 수 있을 때",
  ],
  whenNotToUse: [
    "대부분의 사용자가 모든 내용을 읽어야 할 때",
    "섹션 사이의 내용을 서로 비교해야 할 때",
    "내용이 한두 줄뿐이라 접을 이유가 없을 때",
  ],
  alternatives: [
    { name: "탭", slug: "tabs", reason: "가로로 나눈 같은 수준의 콘텐츠" },
    { name: "드로어", slug: "drawer", reason: "본문과 분리된 상세 내용" },
  ],
  accessibility: [
    "각 제목은 heading 안의 <button>으로 만들어 문서 구조와 키보드 조작을 함께 지원합니다.",
    "aria-expanded로 열림 상태를, aria-controls로 연결된 패널을 알립니다.",
    '패널은 role="region"과 aria-labelledby로 제목과 연결합니다.',
    "화살표 회전 애니메이션은 prefers-reduced-motion에서 꺼집니다.",
  ],
};
