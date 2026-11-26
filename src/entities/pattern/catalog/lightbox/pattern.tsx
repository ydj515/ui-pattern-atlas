import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const lightboxPattern: Pattern = {
  slug: "lightbox",

  name: "Lightbox",
  nameKo: "라이트박스",
  aliases: ["사진 크게 보기", "이미지 뷰어", "image viewer", "photo modal"],
  category: "card-gallery",
  summary: "이미지를 크게 띄워 넘겨 보기",
  description:
    "작은 사진을 누르면 화면 위에 크게 띄우고, 좌우로 넘기며 보는 패턴입니다. 몇 번째 사진인지와 설명을 함께 보여 주고, 닫으면 누른 사진으로 돌아갑니다.",
  tags: [...BASE_TAGS, "dialog element", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/lightbox/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/lightbox/LightboxDemo").then((m) => m.LightboxDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/lightbox/LightboxThumbnail").then(
      (m) => m.LightboxThumbnail,
    ),
  sources: [
    {
      fileName: "Lightbox.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/lightbox/Lightbox.tsx?raw"),
    },
    {
      fileName: "LightboxDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/lightbox/LightboxDemo.tsx?raw"),
    },
  ],
};
