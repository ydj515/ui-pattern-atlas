import { type Pattern } from "@/entities/pattern/model/pattern";

export const comicPopArtPattern: Pattern = {
  slug: "comic-pop-art",

  kind: "concept",
  name: "Comic Pop Art",
  nameKo: "코믹 팝아트",
  aliases: ["팝아트 글자", "만화 글자", "comic type", "pop art"],
  category: "typography-style",
  summary: "굵은 외곽선과 망점, 만화 효과선",
  description:
    "굵은 검은 외곽선, 어긋난 색 그림자, 망점(점무늬) 배경으로 만화책의 효과음 같은 느낌을 주는 스타일입니다.",
  tags: ["글자 스타일", "Comic Pop Art"],
  loadGuide: () => import("@/entities/pattern/catalog/comic-pop-art/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/comic-pop-art/ComicPopArtDemo").then(
      (m) => m.ComicPopArtDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/comic-pop-art/ComicPopArtThumbnail").then(
      (m) => m.ComicPopArtThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/comic-pop-art/ComicPopArtDemo.tsx?raw"),
};
