import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { MasonryGridThumbnail } from "@/entities/pattern/catalog/masonry-grid/MasonryGridThumbnail";

export const masonryGridPattern: Pattern = {
  slug: "masonry-grid",
  name: "Masonry Grid",
  nameKo: "메이슨리",
  aliases: ["벽돌 레이아웃", "핀터레스트 그리드", "masonry", "waterfall layout"],
  category: "card-gallery",
  summary: "높이가 다른 카드를 벽돌처럼",
  description:
    "높이가 제각각인 카드를 빈틈없이 쌓아 벽돌처럼 채우는 패턴입니다. 사진 비율이 달라도 잘리지 않고, 화면 폭에 맞춰 열 수를 바꿉니다.",
  origin:
    "벽돌을 엇갈려 쌓는 조적(masonry)처럼, 높이가 다른 카드를 빈틈없이 쌓는 배치라 붙은 이름이에요. 데이비드 디산드로(David DeSandro)의 자바스크립트 라이브러리 Masonry가 이름을 알렸고, 핀터레스트가 대표적인 예예요.",
  whenToUse: [
    "사진 비율이 제각각인 아이디어, 레시피 모음",
    "훑어보며 마음에 드는 것을 고르는 화면",
    "카드 순서가 아주 중요하지 않을 때",
  ],
  whenNotToUse: [
    "순서가 중요할 때(위에서 아래로 읽히는 순서가 헷갈립니다)",
    "카드 높이가 비슷할 때(일반 그리드 사용)",
    "표처럼 줄을 맞춰 비교할 때",
  ],
  alternatives: [
    { name: "카드", slug: "card", reason: "같은 크기로 줄을 맞출 때" },
    { name: "이미지 갤러리", slug: "image-gallery", reason: "사진을 하나씩 자세히 볼 때" },
  ],
  accessibility: [
    "CSS columns는 열 단위로 위에서 아래로 흐르므로, 읽는 순서대로 DOM을 놓습니다.",
    "목록에 이름을 붙여 항목 수가 함께 읽힙니다.",
    "카드가 열 사이에서 잘리지 않도록 break-inside: avoid를 씁니다.",
    "열 수 버튼은 aria-pressed로 상태를 알립니다.",
  ],
  tags: [...BASE_TAGS, "CSS columns", "Layout"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/masonry-grid/MasonryGridDemo").then(
      (m) => m.MasonryGridDemo,
    ),
  Thumbnail: MasonryGridThumbnail,
  sources: [
    {
      fileName: "MasonryGrid.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/masonry-grid/MasonryGrid.tsx?raw"),
    },
    {
      fileName: "MasonryGridDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/masonry-grid/MasonryGridDemo.tsx?raw"),
    },
  ],
};
