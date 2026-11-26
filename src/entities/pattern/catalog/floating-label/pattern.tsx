import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const floatingLabelPattern: Pattern = {
  slug: "floating-label",

  name: "Floating Label",
  nameKo: "플로팅 라벨",
  aliases: ["떠오르는 라벨", "머티리얼 입력", "floating label", "float label"],
  category: "text-input",
  summary: "입력하면 위로 올라가는 라벨",
  description:
    "라벨이 입력칸 안에 있다가 포커스하거나 값이 들어가면 위로 작게 올라가는 패턴입니다. 세로 공간을 아끼면서도 입력한 뒤에 라벨이 사라지지 않습니다.",
  tags: [...BASE_TAGS, "CSS only", "Forms"],
  loadGuide: () => import("@/entities/pattern/catalog/floating-label/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/floating-label/FloatingLabelDemo").then(
      (m) => m.FloatingLabelDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/floating-label/FloatingLabelThumbnail").then(
      (m) => m.FloatingLabelThumbnail,
    ),
  sources: [
    {
      fileName: "FloatingLabelInput.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/floating-label/FloatingLabelInput.tsx?raw"),
    },
    {
      fileName: "FloatingLabelDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/floating-label/FloatingLabelDemo.tsx?raw"),
    },
  ],
};
