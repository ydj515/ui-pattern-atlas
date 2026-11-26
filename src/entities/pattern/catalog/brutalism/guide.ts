import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "건축의 브루탈리즘에서 빌려 온 이름이에요. 프랑스어 béton brut(가공하지 않은 콘크리트)에서 왔고, 웹에서는 꾸미지 않은 날것의 화면을 가리켜요.",
  whenToUse: [
    "개성을 드러내는 포트폴리오, 문화 행사 사이트",
    "콘텐츠 자체가 주인공인 아카이브",
    "관습을 깨는 인상이 필요할 때",
  ],
  whenNotToUse: [
    "처음 쓰는 사람이 많은 쇼핑, 금융 서비스",
    "누를 수 있는 것과 아닌 것이 구분되지 않을 때",
    "거친 배치가 읽기 순서를 해칠 때",
  ],
  alternatives: [
    {
      name: "네오 브루털리즘",
      slug: "neo-brutalism",
      reason: "정돈된 그리드에 두꺼운 선을 더한 버전",
    },
    { name: "미니멀리즘", slug: "minimalism", reason: "덜어 내되 정돈된 화면" },
  ],
  accessibility: [
    "기본 요소를 그대로 쓰는 만큼 의미 있는 HTML 구조가 장점이 됩니다.",
    "원색 조합의 글자 대비를 확인합니다.",
    "밑줄 글자가 링크처럼 보이지 않게 쓰임을 구분합니다.",
    "포커스 링을 지우지 않습니다.",
  ],
};
