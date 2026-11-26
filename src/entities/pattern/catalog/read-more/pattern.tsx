import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const readMorePattern: Pattern = {
  slug: "read-more",

  name: "Read More",
  nameKo: "더 보기 접기",
  aliases: ["더보기 텍스트", "말줄임 펼치기", "show more text", "truncate text"],
  category: "disclosure",
  summary: "긴 글을 줄였다가 펼치기",
  description:
    '긴 설명을 몇 줄만 보여 주고, "더 보기"를 누르면 그 자리에서 전체를 펼치는 패턴입니다. 목록이나 카드가 길어지지 않으면서도 필요한 사람은 끝까지 읽을 수 있습니다.',
  tags: [...BASE_TAGS, "aria-expanded", "line-clamp"],
  loadGuide: () => import("@/entities/pattern/catalog/read-more/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/read-more/ReadMoreDemo").then((m) => m.ReadMoreDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/read-more/ReadMoreThumbnail").then(
      (m) => m.ReadMoreThumbnail,
    ),
  sources: [
    {
      fileName: "ReadMore.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/read-more/ReadMore.tsx?raw"),
    },
    {
      fileName: "ReadMoreDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/read-more/ReadMoreDemo.tsx?raw"),
    },
  ],
};
