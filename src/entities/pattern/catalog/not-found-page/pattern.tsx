import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { NotFoundPageThumbnail } from "@/entities/pattern/catalog/not-found-page/NotFoundPageThumbnail";

export const notFoundPagePattern: Pattern = {
  slug: "not-found-page",
  name: "404 Page",
  nameKo: "찾을 수 없는 페이지",
  aliases: ["404", "페이지 없음", "not found", "page not found"],
  category: "empty-error",
  summary: "주소가 틀렸을 때 돌아갈 길",
  description:
    "없는 주소로 들어왔을 때 상황을 쉬운 말로 알리고, 검색이나 홈으로 이어지는 길을 주는 패턴입니다. 오류 코드보다 다음 행동이 먼저 보이게 합니다.",
  origin:
    "404는 웹 서버가 돌려주는 HTTP 상태 코드로, 요청한 주소의 페이지를 찾을 수 없다는 뜻이에요. 그래서 이 화면을 흔히 404 페이지라고 불러요.",
  whenToUse: [
    "주소가 바뀌었거나 삭제된 페이지로 들어왔을 때",
    "외부 링크나 오래된 북마크로 들어오는 사용자가 많을 때",
    "사이트 안에서 다시 찾을 방법이 있을 때",
  ],
  whenNotToUse: [
    "권한이 없어 못 보는 페이지(권한 없음 사용)",
    "점검 중인 서비스(점검 중 페이지 사용)",
    "주소가 바뀐 것을 알고 있을 때(새 주소로 바로 이동하기)",
  ],
  alternatives: [
    { name: "권한 없음", slug: "permission-denied", reason: "페이지는 있지만 볼 수 없을 때" },
    { name: "오류 화면", slug: "error-state", reason: "페이지 일부만 불러오지 못했을 때" },
  ],
  accessibility: [
    '제목("페이지를 찾을 수 없어요")이 먼저 읽히고, 404 숫자는 보조 정보로 둡니다.',
    '검색 폼은 role="search"와 숨긴 레이블로 바로 찾을 수 있게 합니다.',
    "사이트 머리글과 바닥글을 그대로 두어 다른 곳으로 이동할 길을 남깁니다.",
    "서버는 실제로 404 상태 코드를 돌려줘 검색 엔진과 보조 기술이 구분할 수 있게 합니다.",
  ],
  tags: [...BASE_TAGS, "role=search", "HTTP 404"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/not-found-page/NotFoundPageDemo").then(
      (m) => m.NotFoundPageDemo,
    ),
  Thumbnail: NotFoundPageThumbnail,
  sources: [
    {
      fileName: "NotFoundPage.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/not-found-page/NotFoundPage.tsx?raw"),
    },
    {
      fileName: "NotFoundPageDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/not-found-page/NotFoundPageDemo.tsx?raw"),
    },
  ],
};
