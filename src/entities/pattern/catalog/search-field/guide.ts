import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "문서, 설정, 메뉴처럼 목록이 길어 찾아야 할 때",
    "검색을 자주 쓰는 도구형 화면",
    "입력하는 대로 결과를 좁혀 보여 줄 수 있을 때",
  ],
  whenNotToUse: [
    "전체 사이트 검색처럼 별도 결과 페이지가 필요한 경우(폼 제출로 이동)",
    "보기가 몇 개뿐일 때(필터나 세그먼트 컨트롤 사용)",
    "페이지에 이미 / 단축키를 쓰는 기능이 있을 때",
  ],
  alternatives: [
    { name: "커맨드 팔레트", slug: "command-palette", reason: "명령과 페이지를 한곳에서 찾을 때" },
    { name: "검색 결과 없음", slug: "no-results", reason: "결과가 없을 때 보여 줄 화면" },
  ],
  accessibility: [
    'role="search" 영역 안에 두어 랜드마크로 바로 이동할 수 있게 합니다.',
    "단축키는 aria-keyshortcuts로 알리고, 다른 입력칸에서 글을 쓰는 중에는 반응하지 않습니다.",
    '지우기 버튼은 이름("검색어 지우기")이 있고, 누른 뒤 포커스를 입력으로 돌려줍니다.',
    "Esc로도 검색어를 지울 수 있고, 결과 목록은 aria-live로 바뀐 내용을 알립니다.",
  ],
};
