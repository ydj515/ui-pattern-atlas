import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const tagInputPattern: Pattern = {
  slug: "tag-input",

  name: "Tag Input",
  nameKo: "태그 입력",
  aliases: ["칩 입력", "키워드 입력", "tags", "chips input", "token field"],
  category: "text-input",
  summary: "입력하면 칩으로 쌓이는 필드",
  description:
    "단어를 입력하고 Enter나 쉼표를 누르면 칩으로 바뀌어 쌓이는 패턴입니다. 여러 개의 키워드를 한 칸에서 넣고, 칩마다 따로 지울 수 있습니다.",
  tags: [...BASE_TAGS, "IME", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/tag-input/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/tag-input/TagInputDemo").then((m) => m.TagInputDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/tag-input/TagInputThumbnail").then(
      (m) => m.TagInputThumbnail,
    ),
  sources: [
    {
      fileName: "TagInput.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/tag-input/TagInput.tsx?raw"),
    },
    {
      fileName: "TagInputDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/tag-input/TagInputDemo.tsx?raw"),
    },
  ],
};
