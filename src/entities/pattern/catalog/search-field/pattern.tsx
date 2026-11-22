import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { SearchFieldThumbnail } from "@/entities/pattern/catalog/search-field/SearchFieldThumbnail";

export const searchFieldPattern: Pattern = {
  slug: "search-field",
  name: "Search Field",
  nameKo: "검색창",
  aliases: ["검색 입력", "검색 박스", "search input", "search box"],
  category: "text-input",
  summary: "지우기 버튼과 단축키가 있는 검색 입력",
  description:
    "검색어를 입력하는 필드에 지우기 버튼과 바로 이동 단축키(/)를 더한 패턴입니다. 입력하는 대로 목록을 좁히고, 한 번에 검색어를 지우고 다시 쓸 수 있습니다.",
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
  tags: [...BASE_TAGS, "role=search", "Keyboard"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/search-field/SearchFieldDemo").then(
      (m) => m.SearchFieldDemo,
    ),
  Thumbnail: SearchFieldThumbnail,
  sources: [
    {
      fileName: "SearchField.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/search-field/SearchField.tsx?raw"),
    },
    {
      fileName: "SearchFieldDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/search-field/SearchFieldDemo.tsx?raw"),
    },
  ],
};
