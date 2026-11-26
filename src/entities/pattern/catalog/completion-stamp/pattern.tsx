import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const completionStampPattern: Pattern = {
  slug: "completion-stamp",

  name: "Completion Stamp",
  nameKo: "완료 스탬프",
  aliases: ["도장", "미션 완료", "stamp", "done stamp"],
  category: "completion",
  summary: "끝낸 카드에 도장 찍기",
  description:
    "미션 카드나 쿠폰을 끝내면 카드 위에 도장이 약간 기울어진 채 꾹 찍히는 표현입니다. 살짝 크게 내려와 제자리에 앉아 종이에 찍히는 느낌을 주고, 완료는 글자로도 알립니다.",
  tags: [...BASE_TAGS, "@starting-style", "aria-hidden", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/completion-stamp/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/completion-stamp/CompletionStampDemo").then(
      (m) => m.CompletionStampDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/completion-stamp/CompletionStampThumbnail").then(
      (m) => m.CompletionStampThumbnail,
    ),
  sources: [
    {
      fileName: "CompletionStamp.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/completion-stamp/CompletionStamp.tsx?raw"),
    },
    {
      fileName: "CompletionStampDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/completion-stamp/CompletionStampDemo.tsx?raw"),
    },
  ],
};
