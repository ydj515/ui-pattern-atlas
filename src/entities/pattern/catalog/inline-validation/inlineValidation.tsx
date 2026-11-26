import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const inlineValidationPattern: Pattern = {
  slug: "inline-validation",

  name: "Inline Validation",
  nameKo: "인라인 오류",
  aliases: [
    "입력 오류",
    "폼 검증",
    "에러 메시지",
    "form validation",
    "error message",
    "text field",
  ],
  category: "feedback",
  summary: "입력 필드 바로 아래에서 무엇이 잘못됐는지 알려주는 메시지",
  description:
    "입력값에 문제가 있을 때 해당 필드 바로 아래에 오류 이유와 고치는 방법을 보여주는 패턴입니다. 사용자가 어디를 고쳐야 하는지 즉시 알 수 있습니다.",
  tags: [...BASE_TAGS, "Forms", "aria-invalid"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/inline-validation/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/inline-validation/InlineValidationDemo").then(
      (m) => m.InlineValidationDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/inline-validation/InlineValidationThumbnail").then(
      (m) => m.InlineValidationThumbnail,
    ),
  sources: [
    {
      fileName: "TextField.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/inline-validation/TextField.tsx?raw"),
    },
    {
      fileName: "InlineValidationDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/inline-validation/InlineValidationDemo.tsx?raw"),
    },
  ],
};
