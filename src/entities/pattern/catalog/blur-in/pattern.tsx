import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const blurInPattern: Pattern = {
  slug: "blur-in",

  name: "Blur In",
  nameKo: "블러 인",
  aliases: ["흐림 효과", "초점 맞추기", "focus in", "blur reveal"],
  category: "text-motion",
  summary: "흐린 글자가 선명해짐",
  description:
    "흐리고 옅은 글자가 초점이 맞춰지듯 선명해지는 표현입니다. 짧은 문장을 차분하고 고급스럽게 보여 주며, blur 필터는 비용이 커서 제목 한 줄에만 씁니다.",
  tags: [...BASE_TAGS, "@starting-style", "CSS filter", "Reduced motion"],
  loadGuide: () => import("@/entities/pattern/catalog/blur-in/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/blur-in/BlurInDemo").then((m) => m.BlurInDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/blur-in/BlurInThumbnail").then((m) => m.BlurInThumbnail),
  sources: [
    {
      fileName: "BlurIn.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/blur-in/BlurIn.tsx?raw"),
    },
    {
      fileName: "BlurInDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/blur-in/BlurInDemo.tsx?raw"),
    },
  ],
};
