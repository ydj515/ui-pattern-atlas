import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const calloutPattern: Pattern = {
  slug: "callout",

  name: "Callout",
  nameKo: "콜아웃",
  aliases: ["안내 상자", "참고 상자", "주의 상자", "admonition", "note box"],
  category: "feedback",
  summary: "본문 속 참고·주의 상자",
  description:
    "도움말이나 문서 본문 안에서 꼭 짚고 넘어갈 내용을 색과 제목이 있는 상자로 구분하는 패턴입니다. 참고, 팁, 주의처럼 종류를 나눠 읽는 사람이 중요도를 바로 알 수 있게 합니다.",
  tags: [...BASE_TAGS, "role=note", "UX writing"],
  loadGuide: () => import("@/entities/pattern/catalog/callout/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/callout/CalloutDemo").then((m) => m.CalloutDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/callout/CalloutThumbnail").then((m) => m.CalloutThumbnail),
  sources: [
    {
      fileName: "Callout.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/callout/Callout.tsx?raw"),
    },
    {
      fileName: "CalloutDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/callout/CalloutDemo.tsx?raw"),
    },
  ],
};
