import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const textFieldPattern: Pattern = {
  slug: "text-field",

  name: "Text Field",
  nameKo: "텍스트 필드",
  aliases: ["입력 필드", "인풋", "input", "text input", "form field"],
  category: "text-input",
  summary: "라벨, 안내, 오류, 필수 여부를 갖춘 기본 입력",
  description:
    "한 줄짜리 글을 입력받는 가장 기본적인 필드입니다. 항상 보이는 라벨, 입력 형식 안내, 잘못됐을 때의 오류 문구, 필수 여부를 한 덩어리로 묶어 어느 폼에서나 같은 방식으로 쓰게 합니다.",
  tags: [...BASE_TAGS, "Forms", "aria-describedby"],
  loadGuide: () => import("@/entities/pattern/catalog/text-field/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/text-field/TextFieldDemo").then((m) => m.TextFieldDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/text-field/TextFieldThumbnail").then(
      (m) => m.TextFieldThumbnail,
    ),
  sources: [
    {
      fileName: "TextField.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/text-field/TextField.tsx?raw"),
    },
    {
      fileName: "TextFieldDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/text-field/TextFieldDemo.tsx?raw"),
    },
  ],
};
