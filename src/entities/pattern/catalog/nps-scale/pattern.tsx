import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const npsScalePattern: Pattern = {
  slug: "nps-scale",

  name: "NPS Scale",
  nameKo: "NPS 점수",
  aliases: ["추천 의향", "순추천지수", "net promoter score", "0-10 scale"],
  category: "reaction-share",
  summary: "0~10점 추천 의향 묻기",
  description:
    "친구에게 추천할 의향을 0부터 10까지 고르게 하는 척도입니다. 고르기 전에는 모든 점수가 같은 모양이라 특정 숫자로 유도하지 않고, 점수에 맞는 후속 질문을 하나만 묻습니다.",
  tags: [...BASE_TAGS, "radio", "fieldset", "Survey"],
  loadGuide: () => import("@/entities/pattern/catalog/nps-scale/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/nps-scale/NpsScaleDemo").then((m) => m.NpsScaleDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/nps-scale/NpsScaleThumbnail").then(
      (m) => m.NpsScaleThumbnail,
    ),
  sources: [
    {
      fileName: "NpsScale.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/nps-scale/NpsScale.tsx?raw"),
    },
    {
      fileName: "NpsScaleDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/nps-scale/NpsScaleDemo.tsx?raw"),
    },
  ],
};
