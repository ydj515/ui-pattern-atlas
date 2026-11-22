import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { BreadcrumbThumbnail } from "@/entities/pattern/catalog/breadcrumb/BreadcrumbThumbnail";

export const breadcrumbPattern: Pattern = {
  slug: "breadcrumb",
  name: "Breadcrumb",
  nameKo: "브레드크럼",
  aliases: ["경로 표시", "빵부스러기", "현재 위치", "location", "trail"],
  category: "navigation",
  summary: "지금 페이지가 어느 경로 아래에 있는지 보여주는 링크 묶음",
  description:
    "현재 페이지까지 이어지는 상위 경로를 한 줄로 보여주는 패턴입니다. 사용자는 위치를 파악하고 상위 단계로 한 번에 이동할 수 있습니다.",
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
    { name: "Tabs", slug: "tabs", reason: "같은 수준의 화면 사이를 오갈 때" },
    { name: "Stepper", reason: "순서가 있는 진행 단계 표시" },
  ],
  accessibility: [
    "<nav aria-label>로 랜드마크를 만들고 순서가 있는 <ol>로 경로를 표현합니다.",
    '현재 페이지는 링크가 아닌 텍스트로 두고 aria-current="page"를 지정합니다.',
    "구분 기호(›)는 장식이므로 aria-hidden으로 숨깁니다.",
  ],
  tags: [...BASE_TAGS, "aria-current"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/breadcrumb/BreadcrumbDemo").then((m) => m.BreadcrumbDemo),
  Thumbnail: BreadcrumbThumbnail,
  sources: [
    {
      fileName: "Breadcrumb.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/breadcrumb/Breadcrumb.tsx?raw"),
    },
    {
      fileName: "BreadcrumbDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/breadcrumb/BreadcrumbDemo.tsx?raw"),
    },
  ],
};
