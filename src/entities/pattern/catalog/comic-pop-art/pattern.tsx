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
  whenToUse: ["할인, 이벤트 배너", "장난스럽고 강렬한 브랜드", "짧은 감탄 문구"],
  whenNotToUse: ["진지한 정보", "긴 문장", "망점 배경 위 작은 글"],
  alternatives: [
    {
      name: "네오 브루털리즘 타이포그래피",
      slug: "neo-brutalist-typography",
      reason: "두꺼운 테두리 라벨",
    },
    { name: "그래피티", slug: "graffiti", reason: "거리 벽화" },
  ],
  accessibility: [
    "효과가 들어간 큰 글자도 배경과 대비를 확인합니다.",
    "화면 읽기에는 꾸민 글자 대신 같은 문구가 그대로 읽히게 합니다.",
    "장식 효과를 빼도 문구 뜻이 그대로 전해지게 둡니다.",
    "기본 글자와 비교 전환으로 효과의 차이를 확인할 수 있습니다.",
  ],
  tags: ["글자 스타일", "Comic Pop Art"],
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
