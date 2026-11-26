import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const successCheckmarkPattern: Pattern = {
  slug: "success-checkmark",

  name: "Success Checkmark",
  nameKo: "체크 애니메이션",
  aliases: ["체크 표시", "완료 체크", "animated check", "success tick"],
  category: "completion",
  summary: "그려지는 체크 표시",
  description:
    "원이 채워진 뒤 체크 표시가 한 획으로 그려지는 완료 표시입니다. 송금처럼 기다린 끝에 성공한 순간에 짧게 쓰고, 결과는 글자로도 함께 알립니다.",
  tags: [...BASE_TAGS, "SVG", "stroke-dashoffset", "Reduced motion"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/success-checkmark/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/success-checkmark/SuccessCheckmarkDemo").then(
      (m) => m.SuccessCheckmarkDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/success-checkmark/SuccessCheckmarkThumbnail").then(
      (m) => m.SuccessCheckmarkThumbnail,
    ),
  sources: [
    {
      fileName: "SuccessCheckmark.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/success-checkmark/SuccessCheckmark.tsx?raw"),
    },
    {
      fileName: "SuccessCheckmarkDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/success-checkmark/SuccessCheckmarkDemo.tsx?raw"),
    },
  ],
};
