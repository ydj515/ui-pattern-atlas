import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "동화 「헨젤과 그레텔」에서 남매가 길을 잃지 않으려고 빵 부스러기(breadcrumb)를 흘려 둔 이야기에서 왔어요. 지나온 길을 되짚어 돌아갈 수 있다는 뜻이에요.",
  whenToUse: [
    "카테고리, 폴더처럼 3단계 이상의 계층 구조가 있을 때",
    "검색이나 외부 링크로 깊은 페이지에 바로 들어오는 경우가 많을 때",
    "상위 목록으로 자주 되돌아가야 할 때",
  ],
  whenNotToUse: [
    "계층이 1~2단계뿐인 단순한 사이트일 때",
    "단계별 진행(결제 단계 등)을 표시할 때",
    "방문 기록(뒤로 가기)을 대신하려 할 때",
  ],
  alternatives: [
    { name: "탭", slug: "tabs", reason: "같은 수준의 화면 사이를 오갈 때" },
    { name: "Stepper", reason: "순서가 있는 진행 단계 표시" },
  ],
  accessibility: [
    "<nav aria-label>로 랜드마크를 만들고 순서가 있는 <ol>로 경로를 표현합니다.",
    '현재 페이지는 링크가 아닌 텍스트로 두고 aria-current="page"를 지정합니다.',
    "구분 기호(›)는 장식이므로 aria-hidden으로 숨깁니다.",
  ],
};
