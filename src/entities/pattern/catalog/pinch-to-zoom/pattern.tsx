import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const pinchToZoomPattern: Pattern = {
  slug: "pinch-to-zoom",

  name: "Pinch to Zoom",
  nameKo: "핀치 줌",
  aliases: ["두 손가락 확대", "확대 축소", "zoom", "pinch"],
  category: "gesture",
  summary: "두 손가락으로 확대하기",
  description:
    "지도나 사진을 두 손가락으로 벌려 확대하고 오므려 축소하는 패턴입니다. 확대 배율을 글자로 보여 주고, 같은 일을 하는 확대, 축소, 원래 크기 버튼을 함께 둡니다.",
  tags: [...BASE_TAGS, "Pointer Events", "WCAG 2.5.1"],
  loadGuide: () => import("@/entities/pattern/catalog/pinch-to-zoom/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/pinch-to-zoom/PinchToZoomDemo").then(
      (m) => m.PinchToZoomDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/pinch-to-zoom/PinchToZoomThumbnail").then(
      (m) => m.PinchToZoomThumbnail,
    ),
  sources: [
    {
      fileName: "PinchToZoom.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/pinch-to-zoom/PinchToZoom.tsx?raw"),
    },
    {
      fileName: "PinchToZoomDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/pinch-to-zoom/PinchToZoomDemo.tsx?raw"),
    },
  ],
};
