import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const blurUpImagePattern: Pattern = {
  slug: "blur-up-image",

  name: "Blur-up Image",
  nameKo: "흐린 이미지 로딩",
  aliases: ["블러 업", "LQIP", "프로그레시브 이미지", "image placeholder", "blurhash"],
  category: "loading",
  summary: "흐린 미리보기에서 선명해지는 이미지",
  description:
    "아주 작은 미리보기 이미지를 흐리게 먼저 보여 주고, 원본이 도착하면 부드럽게 바꾸는 패턴입니다. 빈 회색 상자 대신 사진의 색과 구도를 먼저 보여 줘 기다림이 짧게 느껴집니다.",
  tags: [...BASE_TAGS, "Images", "CLS"],
  loadGuide: () => import("@/entities/pattern/catalog/blur-up-image/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/blur-up-image/BlurUpImageDemo").then(
      (m) => m.BlurUpImageDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/blur-up-image/BlurUpImageThumbnail").then(
      (m) => m.BlurUpImageThumbnail,
    ),
  sources: [
    {
      fileName: "BlurUpImage.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/blur-up-image/BlurUpImage.tsx?raw"),
    },
    {
      fileName: "BlurUpImageDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/blur-up-image/BlurUpImageDemo.tsx?raw"),
    },
  ],
};
