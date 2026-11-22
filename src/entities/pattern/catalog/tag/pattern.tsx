import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { TagThumbnail } from "@/entities/pattern/catalog/tag/TagThumbnail";

export const tagPattern: Pattern = {
  slug: "tag",
  name: "Tag",
  nameKo: "태그",
  aliases: ["라벨", "칩", "label", "pill"],
  category: "indicator",
  summary: "분류를 나타내는 작은 라벨",
  description:
    "글이나 항목의 분류, 주제를 작은 라벨로 붙이는 패턴입니다. 편집 화면에서는 태그마다 빼기 버튼을 둘 수 있습니다.",
  whenToUse: [
    "글, 작업, 파일의 분류나 주제를 보여 줄 때",
    "여러 분류를 함께 붙일 때",
    "편집할 때 하나씩 뺄 수 있어야 할 때",
  ],
  whenNotToUse: [
    "눌러서 걸러야 할 때(필터 칩 사용)",
    "상태를 알릴 때(상태 점 사용)",
    "직접 입력으로 태그를 만들 때(태그 입력 사용)",
  ],
  alternatives: [
    { name: "필터 칩", slug: "filter-chip", reason: "눌러서 켜고 끄는 조건" },
    { name: "태그 입력", slug: "tag-input", reason: "입력하며 태그를 만들 때" },
  ],
  accessibility: [
    '빼기 버튼 이름에 태그 이름을 넣어("접근성 태그 빼기") 여러 버튼을 구분합니다.',
    "색은 분류를 돕는 보조 수단이고 글자로 뜻을 전합니다.",
    "배경과 글자 대비를 4.5:1 이상으로 유지합니다.",
    "× 기호는 장식이라 aria-hidden입니다.",
  ],
  tags: [...BASE_TAGS, "Label", "Button"],
  loadPreview: () => import("@/entities/pattern/catalog/tag/TagDemo").then((m) => m.TagDemo),
  Thumbnail: TagThumbnail,
  sources: [
    {
      fileName: "Tag.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/tag/Tag.tsx?raw"),
    },
    {
      fileName: "TagDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/tag/TagDemo.tsx?raw"),
    },
  ],
};
