import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "어린이, 게임, 가벼운 서비스",
    "친근하고 말랑한 인상을 줄 때",
    "일러스트와 함께 쓰는 카드",
  ],
  whenNotToUse: [
    "진지한 금융, 의료 화면",
    "정보가 촘촘한 표와 목록",
    "모든 요소에 입체를 줘 층위가 사라질 때",
  ],
  alternatives: [
    { name: "뉴모피즘", slug: "neumorphism", reason: "배경과 같은 색의 부드러운 입체" },
    { name: "네오 브루털리즘", slug: "neo-brutalism", reason: "두꺼운 선과 단단한 그림자" },
  ],
  accessibility: [
    "색 면 위 글자 대비를 확인합니다.",
    "눌림 상태를 글자와 aria-pressed로도 알립니다.",
    "큰 둥근 모서리로 누르는 영역을 넉넉하게 둡니다.",
    "포커스 링을 보여 줍니다.",
  ],
};
